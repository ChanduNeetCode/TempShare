import React, { memo, useState, useEffect, useCallback, FC } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';

import useStyles from './styles';
import { type IMReadMoreProps } from './types';
import {
  getTextByChildren,
  insertAt,
  linesToCharacters,
} from '../utils/helper';
import typography from '../../../atoms/typography';

let globalAnimationEnabled = false;

const enableGlobalLayoutAnimation = (enable: boolean) => {
  if (!enable || globalAnimationEnabled) {
    return;
  }
  globalAnimationEnabled = true;
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
};

const readmoreAnimation = LayoutAnimation.create(
  300,
  LayoutAnimation.Types.easeOut,
  LayoutAnimation.Properties.opacity,
);

const logClosure =
  (printLogs: boolean) =>
  (...args: any) => {
    if (!printLogs) {
      return;
    }
  };

const styles = useStyles();

const IMReadMore: FC<IMReadMoreProps> = props => {
  const {
    ellipsis,
    seeMoreText = 'See more',
    seeLessText,

    debounceSeeMoreCalc,
    numberOfLines = 3,
    seeMoreOverlapCount = 0,

    animate = true,
    collapsed: externalCollapsed,
    debug,
    expandOnly,
    newLine = false,

    TextComponent,

    children,
    allowFontScaling,
    style,
    seeMoreStyle,
    seeLessStyle,
    ellipsisStyle,

    seeMoreContainerStyleSecondary,
    wrapperStyle,

    textLessMore,

    onExpand,
    onCollapse,
    onReady,
    onSeeMore,
    onSeeLess,
    ...restProps
  } = props;

  const [additionalProps, setAdditionalProps] = useState({});

  const [hiddenTextLinesWithSeeLess, setHiddenTextLinesWithSeeLess] = useState(
    [],
  );
  const [textWidth, setTextWidth] = useState(0);
  const [truncatedLineOfImpact, setTruncatedLineOfImpact] = useState('');
  const [truncatedLineOfImpactWidth, setTruncatedLineOfImpactWidth] =
    useState(0);
  const [lines, setLines] = useState([]);
  //const [collapsedLines, setCollapsedLines] = useState([]);
  const [seeMoreRightPadding, setSeeMoreRightPadding] = useState(0);
  const [mountHiddenTextOne, setMountHiddenTextOne] = useState(false);
  const [mountHiddenTextTwo, setMountHiddenTextTwo] = useState(false);
  const [mountHiddenTextThree, setMountHiddenTextThree] = useState(false);
  const [mountHiddenTextFour, setMountHiddenTextFour] = useState(false);
  const [mountHiddenTextFive, setMountHiddenTextFive] = useState(false);
  const [mountHiddenTextSix, setMountHiddenTextSix] = useState(false);
  const [isMeasured, setIsMeasured] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [afterCollapsed, setAfterCollapsed] = useState(true);
  const [collapsedChildren, setCollapsedChildren] = useState(null);
  const [reconciledLineOfImpact, setReconciledLineOfImpact] = useState('');
  const [reconciledLineOfImpactWidth, setReconciledLineOfImpactWidth] =
    useState(0);
  const [seeMoreWidth, setSeeMoreWidth] = useState(0);
  const [hideEllipsis, setHideEllipsis] = useState(false);

  const log = useCallback(logClosure(debug), [debug]);

  interface Line {
    text: string;
  }
  const [collapsedLines, setCollapsedLines] = useState<Line[]>([]);

  const onSeeMoreViewLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: {
      nativeEvent: { layout: { width: number } };
    }) => {
      setSeeMoreWidth(width);
    },
    [setSeeMoreWidth],
  );

  const onTextLayoutOne = useCallback(
    ({ nativeEvent: { lines: _lines } }: { nativeEvent: { lines: [] } }) => {
      setLines(_lines);
      setMountHiddenTextOne(false);
      setMountHiddenTextTwo(true);
    },
    [setLines, setMountHiddenTextOne],
  );

  const onTextLayoutTwo = useCallback(
    ({ nativeEvent: { lines: _lines } }: { nativeEvent: { lines: [] } }) => {
      setHiddenTextLinesWithSeeLess(_lines);
      setMountHiddenTextTwo(false);
      setMountHiddenTextThree(true);
    },
    [
      setHiddenTextLinesWithSeeLess,
      setMountHiddenTextTwo,
      setMountHiddenTextThree,
    ],
  );

  const onLayoutHiddenTextThree = useCallback(
    (event: any) => {
      const _event = event;
      const _width = _event?.nativeEvent?.layout?.width || 0;
      setTextWidth(_width);
      setMountHiddenTextThree(false);
    },
    [setTextWidth, setMountHiddenTextThree],
  );

  const onTextLayoutHiddenTextThree = useCallback(
    (event: any) => {
      const _event = event;
      if (collapsed) {
        const _lines = _event?.nativeEvent?.lines || [];
        setCollapsedLines(_lines);
      }
    },
    [setCollapsedLines, collapsed],
  );

  const onLayoutFour = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: any) => {
      setTruncatedLineOfImpactWidth(width);
      setMountHiddenTextFour(false);
      setMountHiddenTextFive(true);
    },
    [
      setTruncatedLineOfImpactWidth,
      setMountHiddenTextFour,
      setMountHiddenTextFive,
    ],
  );
  const onLayoutHiddenTextFive = useCallback(() => {
    setMountHiddenTextFive(false);
    setMountHiddenTextSix(true);
  }, [setMountHiddenTextFive, setMountHiddenTextSix]);

  const onTextLayoutHiddenTextFive = useCallback(
    ({
      nativeEvent: { lines: _lines },
    }: {
      nativeEvent: { lines: Array<any> };
    }) => {
      const _lineOfImpact = _lines[numberOfLines - 1];
      setReconciledLineOfImpact(_lineOfImpact?.text || '');
    },
    [numberOfLines, setReconciledLineOfImpact],
  );

  const onLayoutHiddenTextSix = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: {
      nativeEvent: { layout: { width: number } };
    }) => {
      setMountHiddenTextSix(false);
      setReconciledLineOfImpactWidth(reconciledLineOfImpact ? width : 0);
    },
    [
      setReconciledLineOfImpactWidth,
      setMountHiddenTextSix,
      reconciledLineOfImpact,
    ],
  );

  const onPressSeeLess = useCallback(() => {
    if (collapsed) {
      log('Already collapsed');
      return;
    }

    if (onSeeLess) {
      log('toggle blocked explicitly via prop onSeeLess');
      return onSeeLess();
    }

    const isExternalCollapsedDefined = typeof externalCollapsed === 'boolean';
    if (isExternalCollapsedDefined) {
      log('toggle handled externally via collapsed prop');
      return;
    }

    setCollapsed(true);
  }, [collapsed, setCollapsed, onSeeLess, externalCollapsed]);

  const onPressSeeMore = useCallback(() => {
    if (!collapsed) {
      log('Already expanded');
      return;
    }

    if (onSeeMore) {
      log('toggle blocked explicitly via prop onSeeMore');
      return onSeeMore();
    }

    const isExternalCollapsedDefined = typeof externalCollapsed === 'boolean';
    if (isExternalCollapsedDefined) {
      log('toggle handled externally via collapsed prop');
      return;
    }

    setCollapsed(false);
  }, [collapsed, setCollapsed, onSeeMore, externalCollapsed]);

  const updateLineOfImpact = useCallback(
    (_text = '', resetCollapsedChildren = true) => {
      setHideEllipsis(!_text?.length);
      setTruncatedLineOfImpact(_text || '');

      if (!_text?.length) {
        setTruncatedLineOfImpactWidth(0);
        setReconciledLineOfImpactWidth(0);
        setSeeMoreRightPadding(0);
        setIsMeasured(true);
      }

      if (resetCollapsedChildren) {
        setCollapsedChildren(null);
      }
    },
    [
      setHideEllipsis,
      setTruncatedLineOfImpact,
      setTruncatedLineOfImpactWidth,
      setCollapsedChildren,
      setIsMeasured,
    ],
  );

  const measureSeeMoreLine = useCallback(() => {
    if (
      numberOfLines < 1 ||
      !lines.length ||
      !collapsedLines.length ||
      !seeMore ||
      !seeMoreWidth
    ) {
      log('terminating measurements for see more - 1');
      return;
    }

    if (!lines[numberOfLines - 1] || !collapsedLines[numberOfLines - 1]) {
      log('terminating measurements for see more - 2');
      return;
    }

    let _lineOfImpact: any = lines[numberOfLines - 1];
    _lineOfImpact.index = numberOfLines - 1;
    if (Platform.OS === 'ios') {
      const modifiedIndex = lines.findIndex((_line: any, index) => {
        if (index < numberOfLines - 1 || !_line.text?.trimEnd?.()) {
          return false;
        }
        return collapsedLines[numberOfLines - 1].text.includes(_line.text);
      });
      if (modifiedIndex !== -1) {
        _lineOfImpact = lines[modifiedIndex];
        _lineOfImpact.index = modifiedIndex;
      }
    }

    const _trimmedText = _lineOfImpact?.text;
    if (_trimmedText?.length && !textWidth) {
      return;
    }

    if (!_trimmedText?.length) {
      return updateLineOfImpact(_trimmedText);
    }
    
    const availableWidth = textWidth - seeMoreWidth;
    if (_lineOfImpact.width < availableWidth) {
      return updateLineOfImpact(_trimmedText);
    }

    const seeMoreTextLength =
      `${ellipsis} ${seeMoreText}`.length + seeMoreOverlapCount;

    const spaceDifference = _lineOfImpact?.text?.length - _trimmedText?.length;
    if (spaceDifference >= seeMoreTextLength) {
      return updateLineOfImpact(_trimmedText);
    }

    const linesTillImpact = Array(_lineOfImpact.index + 1)
      .fill({})
      .map((_e, index) => lines[index]);
    const charactersBeforeSeeMore = linesToCharacters(linesTillImpact);
    const charactersLengthTillSeeMore =
      charactersBeforeSeeMore?.trimEnd?.()?.length || 0;
    let textBreakPosition;  
      if(newLine) textBreakPosition = charactersLengthTillSeeMore
      else  textBreakPosition =  charactersLengthTillSeeMore - seeMoreTextLength;
    
    let k = textBreakPosition;
    while(charactersBeforeSeeMore[k] != " "){
      k-=1;
    }
     textBreakPosition += (k - textBreakPosition );
     textBreakPosition+=1;

    const _truncatedText =
      _trimmedText
        ?.substr(0, _trimmedText.length - seeMoreTextLength)
        ?.trimEnd?.() || '';
    
    let charactersToTraverse = textBreakPosition;
    let nodeFound = false;
    const modifiedChildrenObjects = getTextByChildren(children, TextComponent)
      ?.map((_childObject: any) => {
        if (nodeFound) {
          return _childObject;
        }
        if (_childObject.content.length > charactersToTraverse) {
          nodeFound = true;
          const childContent = insertAt(
            _childObject.content,
            '\n',
            charactersToTraverse,
          );
          return {
            type: _childObject?.type,
            content: childContent,
            child:
              _childObject?.type === 'string'
                ? childContent
                : React.cloneElement(
                    _childObject,
                    _childObject.props,
                    childContent,
                  ),
          };
        }
        charactersToTraverse =
          charactersToTraverse - _childObject.content.length;

        return _childObject;
      })
      ?.map((_updatedObjects: any) => {
        return _updatedObjects.child;
      });

    if (nodeFound) {
      setCollapsedChildren(modifiedChildrenObjects);   
      return updateLineOfImpact(_truncatedText, false);
    }
    
    return updateLineOfImpact(_trimmedText);
  }, [
    numberOfLines,
    lines,
    collapsedLines,
    seeMore,
    textWidth,
    seeMoreWidth,
    ellipsis,
    seeMoreText,
    seeMoreOverlapCount,
    children,
    TextComponent,
    updateLineOfImpact,
    log,
  ]);

  const textProps = afterCollapsed
    ? {
        numberOfLines,
        ellipsizeMode: 'clip',
      }
    : {};

  const commonHiddenComponentProps = {
    ...additionalProps,
    style: StyleSheet.flatten([
      Array.isArray(style) ? StyleSheet.flatten(style) : style,
      styles.hiddenTextAbsolute,
    ]),
  };

  const hiddenComponentPropsLineOfImpact = {
    ...additionalProps,
    style: StyleSheet.flatten([
      Array.isArray(style) ? StyleSheet.flatten(style) : style,
      styles.hiddenTextAbsoluteCompact,
    ]),
  };

  const seeMoreTextHidingStyle = !isMeasured
    ? styles.transparentColor
    : styles.transparentBackground;
  const seeMoreContainerStyle = [
    hideEllipsis
      ? styles.seeMoreContainerEllipsisHidden
      : styles.seeMoreContainer,
    {
      marginRight: seeMoreRightPadding,
    },
  ];

  useEffect(() => {
    const _seeMore = lines.length > numberOfLines;
    setSeeMore(_seeMore);

    if (!lines?.length) {
      return;
    }

    if (!_seeMore) {
      log('no measurement is needed');
      //onReady({ canExpand: _seeMore, expandedLinesCount: lines.length });
    }
  }, [numberOfLines, lines]);

  useEffect(() => {
    if (collapsed === afterCollapsed) {
      return;
    }

    const callback: any = collapsed ? onCollapse : onExpand;
    if (animate) {
      LayoutAnimation.configureNext(readmoreAnimation, callback);
    } else {
      callback();
    }
    setAfterCollapsed(collapsed);
  }, [collapsed]);

  useEffect(() => {
    const handle = setTimeout(() => {
      setMountHiddenTextOne(true);
    }, debounceSeeMoreCalc);
    return () => clearTimeout(handle);
  }, [
    numberOfLines,
    style,
    wrapperStyle,
    textLessMore,
    children,
    seeMoreStyle,
    seeMoreText,
    seeLessStyle,
    seeLessText,
    ellipsis,
    additionalProps,
  ]);

  useEffect(() => {
    const _additionalProps = { allowFontScaling };
    if (allowFontScaling !== undefined) {
      _additionalProps.allowFontScaling = allowFontScaling;
    }

    setAdditionalProps(_additionalProps);
  }, [allowFontScaling]);

  useEffect(() => {
    if (mountHiddenTextTwo && !seeMoreWidth && collapsedLines?.length) {
      return;
    }
    const handle = setTimeout(measureSeeMoreLine, debounceSeeMoreCalc);
    return () => clearTimeout(handle);
  }, [mountHiddenTextTwo, seeMoreWidth, collapsedLines, textWidth]);

  useEffect(() => {
    if (!truncatedLineOfImpact) {
      return;
    }

    setMountHiddenTextFour(true);
  }, [truncatedLineOfImpact]);

  useEffect(() => {
    if (
      !(truncatedLineOfImpactWidth || reconciledLineOfImpactWidth) ||
      !seeMoreWidth ||
      !textWidth
    ) {
      return;
    }

    const _width =
      reconciledLineOfImpactWidth || truncatedLineOfImpactWidth || 0;

    let _seeMoreRightPadding = textWidth - _width - seeMoreWidth;
    _seeMoreRightPadding = _seeMoreRightPadding < 0 ? 0 : _seeMoreRightPadding;

    setSeeMoreRightPadding(_seeMoreRightPadding);

    setIsMeasured(true);
  }, [
    truncatedLineOfImpactWidth,
    reconciledLineOfImpactWidth,
    seeMoreWidth,
    textWidth,
  ]);

  useEffect(() => {
    if (!isMeasured || isReady) {
      return;
    }

    const handle = setTimeout(() => {
      setIsReady(true);
      //onReady({ canExpand: seeMore, expandedLinesCount: lines.length });
    }, debounceSeeMoreCalc);
    return () => clearTimeout(handle);
  }, [isMeasured, isReady]);

  useEffect(() => {
    const isExternalCollapsedDefined = typeof externalCollapsed === 'boolean';
    const collapsedStateDifferent = externalCollapsed !== collapsed;
    if (isExternalCollapsedDefined && collapsedStateDifferent && isReady) {
      log(
        `Setting collapsed to ${externalCollapsed} extenrally via collapsed prop`,
      );
      setCollapsed(externalCollapsed);
    }
  }, [externalCollapsed, collapsed, isReady]);

  // useState(() => {
  //   enableGlobalLayoutAnimation(animate);
  // }, [animate]);

  return textLessMore ? (
    textLessMore
  ) : (
    <View style={wrapperStyle}>
      {/* text component to measure see if see more is applicable and get lines */}
      {mountHiddenTextOne && (
        <TextComponent
          {...commonHiddenComponentProps}
          onTextLayout={onTextLayoutOne}>
          {children || ''}
        </TextComponent>
      )}
      {/* text component to measure lines with see less */}
      {mountHiddenTextTwo && (
        <TextComponent
          {...commonHiddenComponentProps}
          onTextLayout={onTextLayoutTwo}>
          {children || ''}
          {/* 3 spaces before see less are intentional */}
          {` ${seeLessText}`}
        </TextComponent>
      )}
      {/* extract width of line of impact without see more line */}
      {mountHiddenTextFour && (
        <TextComponent
          {...hiddenComponentPropsLineOfImpact}
          onLayout={onLayoutFour}>
          {truncatedLineOfImpact}
        </TextComponent>
      )}
      {mountHiddenTextThree && (
        <TextComponent
          {...commonHiddenComponentProps}
          numberOfLines={numberOfLines}
          ellipsizeMode={'clip'}
          onLayout={onLayoutHiddenTextThree}
          onTextLayout={onTextLayoutHiddenTextThree}>
          {children || ''}
        </TextComponent>
      )}
      {/* extract line of impact with collapsed children for remeasurement of right padding on android */}
      {mountHiddenTextFive && (
        <TextComponent
          {...commonHiddenComponentProps}
          numberOfLines={numberOfLines + 1}
          onLayout={onLayoutHiddenTextFive}
          onTextLayout={onTextLayoutHiddenTextFive}>
          {collapsedChildren || ''}
          {/* no see less here since it's in collapsed state replicating original component */}
        </TextComponent>
      )}
      {/* extract width of reconciled line of impact without see more line */}
      {mountHiddenTextSix && (
        <TextComponent
          {...hiddenComponentPropsLineOfImpact}
          onLayout={onLayoutHiddenTextSix}>
          {reconciledLineOfImpact}
        </TextComponent>
      )}
      {/* actual text component */}
      <TextComponent
        {...additionalProps}
        {...restProps}
        style={style}
        {...textProps}>
        {seeMore && collapsed
          ? collapsedChildren || children || ''
          : children || ''}
        {seeMore && !collapsed && !expandOnly && (
          <TextComponent
            {...additionalProps}
            {...restProps}
            onPress={onPressSeeLess}
            style={seeLessStyle}>
            {newLine? '\n' : (hiddenTextLinesWithSeeLess.length > lines.length ? '\n' : ' ')}
            {seeLessText}
          </TextComponent>
        )}
      </TextComponent>
      {/* See more component */}
      {seeMore && collapsed && afterCollapsed && (
        <View
          style={[seeMoreContainerStyle, seeMoreContainerStyleSecondary]}
          onLayout={onSeeMoreViewLayout}>
          {!hideEllipsis && (
            <TextComponent
              key={`${isMeasured}-${hideEllipsis}`}
              {...additionalProps}
              {...restProps}
              onPress={onPressSeeMore}
              style={[
                style,
                seeMoreTextHidingStyle,
                ellipsisStyle,
                hideEllipsis ? styles.transparentColor : {},
              ]}>
              {`${ellipsis} `}
            </TextComponent>
          )}
          <TextComponent
            {...additionalProps}
            {...restProps}
            onPress={onPressSeeMore}
            style={[style, seeMoreStyle, seeMoreTextHidingStyle]}>
            {seeMoreText}
          </TextComponent>
        </View>
      )}
    </View>
  );
};

IMReadMore.defaultProps = {
  style: StyleSheet.flatten([typography.BodyRegular1, styles.defaultText]),
  seeMoreStyle: StyleSheet.flatten([
    typography.BodyRegular1,
    styles.seeMoreText,
  ]),
  seeLessStyle: StyleSheet.flatten([ 
    typography.BodyRegular1,
    styles.seeMoreText,
  ]),
  wrapperStyle: styles.container,
  numberOfLines: 3,
  seeMoreText: 'See more',
  seeLessText: 'See less',
  animate: true,
  TextComponent: Text,
  ellipsis: '...',
  onExpand: () => {},
  onCollapse: () => {},
  expandOnly: false,
  seeMoreOverlapCount: 2,
  debounceSeeMoreCalc: 300,
  allowFontScaling: Platform.select({
    android: false,
    ios: undefined,
  }),
  onReady: () => {},
  seeMoreContainerStyleSecondary: {},
  onSeeMore: undefined,
  onSeeLess: undefined,
  debug: false,
  collapsed: undefined,
};

export default memo(IMReadMore);
