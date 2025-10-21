import React, { useState, useEffect, useRef } from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import {
  Animated,
  ColorValue,
  Dimensions,
  Easing,
  LayoutRectangle,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../atoms/colors';
import { ShimmerProps, ShimmerItemProps } from './types';
import styles from './styles';
import { STRINGS } from '../utils/constants';

const WINDOW_WIDTH = Dimensions.get('window').width;

const Shimmer: React.FC<ShimmerProps> & {
  Item: React.FC<ShimmerItemProps>;
} = ({
  isEnabled,

  borderRadius ,
  speed = 1000,

  backgroundColor = colors.PastelAmber100,
  highlightColor = colors.NeutralGrey60,

  children,

  direction = 'right',
}) => {
  const [layout, setLayout] = useState<LayoutRectangle>();
  const animatedValueRef = useRef(new Animated.Value(0));
  const isAnimationReady = Boolean(speed && layout?.width && layout?.height);

  useEffect(() => {
    if (!isAnimationReady) return;

    const loop = Animated.loop(
      Animated.timing(animatedValueRef.current, {
        toValue: 1,
        duration: speed,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [isAnimationReady, speed]);

  const animatedGradientStyle = React.useMemo(() => {
    return {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row' as const,
      transform: [
        {
          translateX: animatedValueRef.current.interpolate({
            inputRange: [0, 1],
            outputRange:
              direction === 'right'
                ? [-WINDOW_WIDTH, WINDOW_WIDTH]
                : [WINDOW_WIDTH, -WINDOW_WIDTH],
          }),
        },
      ],
    };
  }, [direction, WINDOW_WIDTH]);

  const getTransparentColor = React.useCallback(() => {
    if (!highlightColor) {
      return undefined;
    }

    switch (highlightColor.length) {
      case 4:
        return `${highlightColor}0`;
      case 5:
        return `${highlightColor.substring(0, 4)}0`;
      case 7:
        return `${highlightColor}00`;
      case 9:
        return `${highlightColor.substring(0, 7)}00`; // #ffffff00
      default:
        throw new Error(
          `Unsupported color format (${highlightColor}), only hex (#fff, #fff0, #ffffff, #ffffff00) supported.`,
        );
    }
  }, [highlightColor]);

  const placeholders = React.useMemo(() => {
    if (!isEnabled) return null;

    return (
      <View style={styles.placeholderContainer}>
        {transformToPlaceholder(children, backgroundColor, borderRadius)}
      </View>
    );
  }, [backgroundColor, children, borderRadius, isEnabled]);

  if (!isEnabled || !placeholders) return children;

  if (!layout?.width || !layout.height)
    return (
      <View onLayout={event => setLayout(event.nativeEvent.layout)}>
        {placeholders}
      </View>
    );

  const transparentColor = getTransparentColor();

  return (
    <MaskedView
      style={{ height: layout.height, width: layout.width }}
      maskElement={placeholders}>
      <View style={[StyleSheet.absoluteFill, { backgroundColor }]} />

      {isAnimationReady &&
        highlightColor !== undefined &&
        transparentColor !== undefined && (
          <Animated.View style={animatedGradientStyle}>
            <LinearGradient
              {...gradientProps}
              colors={[transparentColor, highlightColor, transparentColor]}
            />
          </Animated.View>
        )}
    </MaskedView>
  );
};

Shimmer.Item = props => (
  <View style={getItemStyle(props)}>{props.children}</View>
);
Shimmer.Item.displayName = STRINGS.str_title;

const gradientProps = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  style: StyleSheet.absoluteFill,
};

const getItemStyle = ({
  children: _,
  style,
  ...styleFromProps
}: React.PropsWithChildren<ShimmerItemProps>) => {
  return style ? [style, styleFromProps] : styleFromProps;
};

const transformToPlaceholder = (
  rootElement: JSX.Element | JSX.Element[] | null,
  backgroundColor: ColorValue | undefined,
  radius: number | undefined,
): any => {
  if (!rootElement) return null;

  return React.Children.map(
    rootElement,
    (element: JSX.Element | null, index: number) => {
      if (!element) return null;

      if (element.type === React.Fragment)
        return (
          <>
            {transformToPlaceholder(
              element.props?.children,
              backgroundColor,
              radius,
            )}
          </>
        );

      const isPlaceholder = true;
      const props = element.props;
      const style =
        element.type?.displayName === Shimmer.Item.displayName
          ? getItemStyle(element.props)
          : element.props.style;

      const borderRadius = props?.borderRadius ?? style?.borderRadius ?? radius;
      const width = props?.width ?? style?.width;
      const height =
        props?.height ??
        style?.height ??
        props?.lineHeight ??
        style?.lineHeight ??
        props?.fontSize ??
        style?.fontSize;

      const finalStyle = [
        style,
        isPlaceholder
          ? [styles.placeholder, { backgroundColor }]
          : styles.placeholderContainer,
        {
          height,
          width,
          borderRadius,
        },
      ];

      return (
        <View
          children={
            isPlaceholder
              ? undefined
              : transformToPlaceholder(
                  element.props.children,
                  backgroundColor,
                  borderRadius,
                )
          }
          key={index}
          style={finalStyle}
        />
      );
    },
  );
};

export default Shimmer;
