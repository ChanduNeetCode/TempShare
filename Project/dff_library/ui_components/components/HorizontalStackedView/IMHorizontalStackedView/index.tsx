import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { IMHorizontalStackedViewProps } from './types';
import typography from '../../../atoms/typography';
import colors from '../../../atoms/colors';

const IMHorizontalStackedView: React.FC<
  IMHorizontalStackedViewProps
> = props => {
  const {
    items,
    isTouchableDisable,
    touchableFunc,
    containerStyle,
    separatorLineStyle,
    titleStyle,
    subTitleStyle,
    renderItemStyle,
    start,
    end,
    linearGradinentStyleProps,
    linearGradientColorStart,
    linearGradientColorEnd,
  } = props;
  const onPress = (item: any) => {
    if (touchableFunc) {
      touchableFunc(item);
    }
  };
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={[styles.itemStyle, renderItemStyle]}>
        <TouchableOpacity
          onPress={() => onPress(item)}
          disabled={isTouchableDisable}>
          {typeof item.title === 'string' ? (
            <Text
              style={[
                typography.SubTitleMedium2,
                styles.itemTextStyle,
                titleStyle,
              ]}>
              {item.title}
            </Text>
          ) : (
            <>{item.title}</>
          )}
          {typeof item.subTitle === 'string' ? (
            <Text
              style={[
                typography.HeadingBold3,
                styles.itemTextStyle,
                subTitleStyle,
              ]}>
              {item.subTitle}
            </Text>
          ) : (
            <>{item.subTitle}</>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View style={[styles.parentStyle, containerStyle]}>
        <LinearGradient
          start={start ? start : { x: 0, y: 1 }}
          end={end ? end : { x: 1, y: 0 }}
          colors={[
            linearGradientColorStart
              ? linearGradientColorStart
              : colors.GradientOrangeStart,
            linearGradientColorEnd
              ? linearGradientColorEnd
              : colors.GradientOrangeEnd,
          ]}
          style={[styles.linearStyle, linearGradinentStyleProps]}>
          <FlatList
            data={items}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={[styles.lineStyle, separatorLineStyle]}></View>
            )}
          />
        </LinearGradient>
      </View>
    </>
  );
};

export default IMHorizontalStackedView;
