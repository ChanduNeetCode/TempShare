const debounce = require('lodash.debounce');
import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  TouchableWithoutFeedback,
  View,
  I18nManager,
  StatusBar,
  EmitterSubscription,
  Text,
} from 'react-native';

import { computeGeometry } from '../PopoverGeometry/PopoverGeometry';
import { Size, Geometry, Placement, Rect } from '../PopoverGeometry/types';
import {typography} from '../../../../atoms';
import { LayoutCallback, PopoverProps, PopoverState } from './types';
import styles from './styles';

const ARROW_DEG: { [index in Placement]: string } = {
  bottom: '-180deg',
  start: I18nManager.isRTL ? '90deg' : '-90deg',
  end: I18nManager.isRTL ? '-90deg' : '90deg',
  top: '0deg',
};

export class ToolTips extends React.PureComponent<PopoverProps, PopoverState> {
  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    onDismiss: PropTypes.func,
    arrowSize: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    placement: PropTypes.oneOf(['left', 'top', 'right', 'bottom', 'auto']),
    fromRect: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    displayArea: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    backgroundStyle: PropTypes.any,
    arrowStyle: PropTypes.any,
    popoverStyle: PropTypes.any,
    contentStyle: PropTypes.any,
    duration: PropTypes.number,
    easing: PropTypes.func,
  };

  static defaultProps: Partial<PopoverProps> = {
    visible: false,
    onClose: () => {},
    onDismiss: () => {},
    arrowSize: { width: 16, height: 8 },
    placement: 'auto',
    duration: 300,
    easing: show =>
      show ? Easing.out(Easing.back(1.70158)) : Easing.inOut(Easing.quad),
    useNativeDriver: false,
    calculateStatusBar: false,
    supportedOrientations: ['portrait', 'landscape'],
  };

  static displayName = 'ToolTips';

  private defaultDisplayArea!: Rect;
  private dimensionsSub?: EmitterSubscription;

  constructor(props: PopoverProps) {
    super(props);
    this.state = {
      contentSize: { width: 0, height: 0 },
      anchor: { x: 0, y: 0 },
      origin: { x: 0, y: 0 },
      placement: props?.placement === 'auto' ? 'top' : props.placement!,
      visible: false,
      isAwaitingShow: false,
      animation: new Animated.Value(0),
    };
    this.onOrientationChange();
  }

  componentDidMount() {
    this.dimensionsSub = Dimensions.addEventListener(
      'change',
      this.onOrientationChange,
    );
  }

  componentWillUnmount() {
    this.dimensionsSub?.remove();
  }

  private computeGeometry = (
    props: PopoverProps,
    contentSize: Size,
  ): Geometry =>
    computeGeometry(
      contentSize || this.state.contentSize,
      props.placement!,
      props.fromRect,
      props.displayArea || this.defaultDisplayArea,
      props.arrowSize!,
    );

  private onOrientationChange = () => {
    const dimensions = Dimensions.get('window');
    this.defaultDisplayArea = {
      x: 10,
      y: 10,
      width: dimensions.width - 20,
      height:
        dimensions.height -
        20 -
        (this.props.calculateStatusBar ? StatusBar.currentHeight ?? 0 : 0),
    };
  };

  private updateState = debounce(this.setState, 100);

  private measureContent: LayoutCallback = ({
    nativeEvent: {
      layout: { width, height },
    },
  }) => {
    if (width && height) {
      const contentSize = { width, height };
      const geom = this.computeGeometry(this.props, contentSize);

      const isAwaitingShow = this.state.isAwaitingShow;

      // Deboune to prevent flickering when displaying a popover with content
      // that doesn't show immediately.
      this.updateState({ ...geom, contentSize } as any, () => {
        // Once state is set, call the showHandler so it can access all the geometry
        // from the state
        if (isAwaitingShow) {
          this.startAnimation(true);
        }
      });
    }
  };

  private getTranslateOrigin = () => {
    const { contentSize, origin, anchor } = this.state;
    const popoverCenter = {
      x: origin.x + contentSize.width / 2,
      y: origin.y + contentSize.height / 2,
    };
    return { x: anchor.x - popoverCenter.x, y: anchor.y - popoverCenter.y };
  };

  UNSAFE_componentWillReceiveProps(nextProps: PopoverProps) {
    const willBeVisible = nextProps.visible;
    const { visible, fromRect, displayArea } = this.props;

    if (willBeVisible !== visible) {
      if (willBeVisible) {
        // We want to start the show animation only when contentSize is known
        // so that we can have some logic depending on the geometry
        this.setState({
          contentSize: { width: 0, height: 0 },
          isAwaitingShow: true,
          visible: true,
        });
      } else {
        this.startAnimation(false);
      }
    } else if (
      willBeVisible &&
      (fromRect !== nextProps.fromRect || displayArea !== nextProps.displayArea)
    ) {
      const geom = this.computeGeometry(nextProps, this.state.contentSize);

      const isAwaitingShow = this.state.isAwaitingShow;
      this.setState({ ...geom }, () => {
        // Once state is set, call the showHandler so it can access all the geometry
        // from the state
        if (isAwaitingShow) {
          this.startAnimation(true);
        }
      });
    }
  }

  private startAnimation = (show: boolean) => {
    const doneCallback = show ? undefined : this.onHidden;
    Animated.timing(this.state.animation, {
      toValue: show ? 1 : 0,
      duration: this.props.duration,
      easing: this.props.easing!(show),
      useNativeDriver: !!this.props.useNativeDriver,
    }).start(doneCallback);
  };

  private onHidden = () =>
    this.setState({ visible: false, isAwaitingShow: false });

  private computeStyles = () => {
    const { animation, anchor, origin } = this.state;
    const translateOrigin = this.getTranslateOrigin();
    const arrowSize = this.props.arrowSize;

    // Create the arrow from a rectangle with the appropriate borderXWidth set
    // A rotation is then applied depending on the placement
    // Also make it slightly bigger
    // to fix a visual artifact when the popover is animated with a scale
    const width = arrowSize!.width + 2;
    const height = arrowSize!.height * 2 + 2;

    return {
      background: [
        styles.background,
        this.props.backgroundStyle,
        {
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        },
      ],
      arrow: [
        styles.arrow,
        this.props.arrowStyle,
        {
          width,
          height,
          borderTopWidth: height / 2,
          left: anchor.x - origin.x - width / 2,
          top: anchor.y - origin.y - height / 2,
          borderEndWidth: width / 2,
          borderBottomWidth: height / 2,
          borderStartWidth: width / 2,
          transform: [
            {
              // Animation is workaround for https://github.com/facebook/react-native/issues/14161
              rotate: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  ARROW_DEG[this.state.placement],
                  ARROW_DEG[this.state.placement],
                ],
                extrapolate: 'clamp',
              }),
            },
            {
              scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            },
          ],
        },
      ],
      popover: [
        styles.popover,
        this.props.popoverStyle,
        { top: origin.y, left: origin.x },
      ],
      content: [
        styles.content,
        this.props.contentStyle,
        {
          transform: [
            {
              translateX: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [translateOrigin.x, 0],
                extrapolate: 'clamp',
              }),
            },
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [translateOrigin.y, 0],
                extrapolate: 'clamp',
              }),
            },
            { scale: animation },
          ],
        },
      ],
    };
  };

  render() {
    const { visible } = this.state;
    const { onClose, onDismiss, supportedOrientations } = this.props;
    const computedStyles = this.computeStyles();
    const contentSizeAvailable = this.state.contentSize.width;
    return (
      <Modal
        transparent
        visible={visible}
        onRequestClose={onClose}
        onDismiss={onDismiss}
        supportedOrientations={supportedOrientations}
        onOrientationChange={this.onOrientationChange}>
        <View
          style={[
            styles.container,
            !!contentSizeAvailable && styles.containerVisible,
          ]}>
          <TouchableWithoutFeedback onPress={this.props.onClose}>
            <Animated.View style={computedStyles.background} />
          </TouchableWithoutFeedback>
          <Animated.View style={computedStyles.popover}>
            <Animated.View
              onLayout={this.measureContent}
              style={computedStyles.content}>
              {typeof this.props.contentText === 'string' ? (
                <Text
                  style={[
                    styles.toolTiptextStyle,
                    typography.BodyRegular1,
                    this.props.textStyle,
                  ]}>
                  {this.props.contentText}
                </Text>
              ) : (
                <>{this.props.contentText}</>
              )}
              <View style={{ position: 'absolute', alignSelf: 'flex-end' }}>
                <TouchableWithoutFeedback onPress={this.props.onClose}>
                  {this.props.isCancelVisibility ? (
                    this.props.cancelIcon
                  ) : (
                    <></>
                  )}
                </TouchableWithoutFeedback>
              </View>
            </Animated.View>

            <Animated.View style={computedStyles.arrow} />
          </Animated.View>
        </View>
      </Modal>
    );
  }
}
