import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  DimensionValue,
} from 'react-native';

import { ScrollPickerProps } from './types';
import styles from './styles';
import { colors } from '../../../../atoms';

function isNumeric(str: string | number | DimensionValue | undefined): boolean {
  if (typeof str === 'number') {
    return true;
  }
  if (typeof str !== 'string') {
    return false;
  }
  return !isNaN(parseFloat(str)) && !isNaN(Number(str));
}
const deviceWidth = Dimensions.get('window').width;
const isViewStyle = (style: any): style is ViewStyle => {
  return typeof style === 'object' && style !== null && 'height' in style;
};

const ScrollPicker: React.FC<ScrollPickerProps> = (props)=> {
  const {
    highlightBorderWidth = StyleSheet.hairlineWidth,
    itemHeight,
    pickerWidth, 
    wrapperHeight,

    dataSource,
    highlightColor, 
    wrapperBackground,

    scrollViewComponent,
    
    activeItemTextStyle,
    itemTextStyle,
    selectedIndex,
    pickerStyle,

    onValueChange,
    ref
    
  } = props;
  const [initialized, setInitialized] = useState(false);
  const [currentSelectedIndex, setCurrentSelectedIndex] =
    useState(selectedIndex);
  const sView = useRef<ScrollView>(ref); 
  const [isScrollTo, setIsScrollTo] = useState(false);
  const [dragStarted, setDragStarted] = useState(false);
  const [momentumStarted, setMomentumStarted] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null); 
  const computedWrapperHeight =
    wrapperHeight ||
    (isViewStyle(pickerStyle) && isNumeric(pickerStyle.height)
      ? Number(pickerStyle.height)
      : 0) ||
    (itemHeight) * 5;

  useEffect(() => {
    if (initialized) {
      return;
    }
    setInitialized(true);
    setTimeout(() => {
      if (currentSelectedIndex) {
        const y = itemHeight * currentSelectedIndex;
        sView.current?.scrollTo({ y: y, animated: false });
      }
    }, 0);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [initialized, itemHeight, currentSelectedIndex]);

  const renderPlaceHolder = () => {
    const h = (computedWrapperHeight -( itemHeight)) / 2;
    const header = <View style={{ height: h, flex: 1 }} />;
    const footer = <View style={{ height: h, flex: 1 }} />;
    return { header, footer };
  };
  const renderItem = (data: string, index: number) => {
    const isSelected = index === currentSelectedIndex;
    const item = (
      <View key={index} style={styles.itemWrapper}>
        <Text
          style={
            isSelected
              ? [activeItemTextStyle || styles.activeItemTextStyle]
              : [itemTextStyle || styles.itemTextStyle]
          }>
          {data}
        </Text>
      </View>
    );
    return (
      <View key={index}>
        <View
          style={[
            styles.itemWrapper,
            { height: itemHeight, width: pickerWidth?pickerWidth:53 },
          ]}>
          {item}
          <View style={[styles.seperatorLine, { top: itemHeight }]} />
        </View>
      </View>
    );
  };
  const scrollFix = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      let y = 0;
      const h = itemHeight;
      if (e.nativeEvent.contentOffset) {
        y = e.nativeEvent.contentOffset.y;
      }
      const _selectedIndex = Math.round(y / h);
      const _y = _selectedIndex * h;
      if (_y !== y) {
        if (Platform.OS === 'ios') {
          setIsScrollTo(true);
        }
        sView.current?.scrollTo({ y: _y, animated: true });
      }

      if (currentSelectedIndex === _selectedIndex) {
        return;
      }
      const selectedValue = dataSource[_selectedIndex];
      setCurrentSelectedIndex(_selectedIndex);
      onValueChange(selectedValue, _selectedIndex);
    },
    [itemHeight, dataSource, currentSelectedIndex, onValueChange],
  );
  const onScrollBeginDrag = () => {
    setDragStarted(true);
    if (Platform.OS === 'ios') {
      setIsScrollTo(false);
    }
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };
  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setDragStarted(false);
    const _e = { ...e };
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      if (!momentumStarted) {
        scrollFix(_e);
      }
    }, 50);
  };
  const onMomentumScrollBegin = () => {
    setMomentumStarted(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };
  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setMomentumStarted(false);
    if (!isScrollTo && !dragStarted) {
      scrollFix(e);
    }
  };
  const { header, footer } = renderPlaceHolder();
  const highlightWidth =
    (isViewStyle(pickerStyle) ? pickerStyle.width: 0) || deviceWidth;
  const CustomScrollViewComponent: any = scrollViewComponent || ScrollView;
  return (
    <View
      style={[
        styles.wrapperStyle,
        {
          height: computedWrapperHeight,
          width: pickerWidth?pickerWidth:53,
          backgroundColor: wrapperBackground?wrapperBackground:colors.CoolGrey100,
        },
      ]}>
      <View
        style={[
          styles.highlightStyle,
          {backgroundColor:highlightColor?highlightColor:colors.CoolGrey90},
          {
            top: (computedWrapperHeight - (itemHeight + 2)) / 2,
            height: itemHeight,
            width: highlightWidth,
            borderTopColor: highlightColor?highlightColor:colors.CoolGrey90,
            borderBottomColor: highlightColor?highlightColor:colors.CoolGrey90,
            borderTopWidth: highlightBorderWidth,
            borderBottomWidth: highlightBorderWidth,
          },
        ]}
      />
      <CustomScrollViewComponent
        ref={sView}
        bounces={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        scrollEventThrottle={16}
        style={pickerStyle}>
        {header}
        {dataSource.map(renderItem)}
        {footer}
      </CustomScrollViewComponent>
    </View>
  );
};
export default ScrollPicker;
