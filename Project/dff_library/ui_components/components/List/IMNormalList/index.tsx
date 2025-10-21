import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import { type IMNormalListProps } from './types';
import useStyles from './styles';
import typography from '../../../atoms/typography';
import { actuatedNormalizeModerateScale } from '../../../utils/utility';

const IMNormalList: React.FC<IMNormalListProps> = props => {
  const styles = useStyles();

  const {
    extraDataProp,
    
    defaultIndex,

    list,

    date,
    headingKey,
    highlightColor,
    itemDefaultBGC,
    itemHightlightBGC,
    leftIcon,
    leftIconDefaultBGC,
    leftIconHightlightBGC,
    ListEndHeadingTitle,
    ListHeadingTitle,
    rightIconHightlightBGC,
    rightIconKey,
    starIconKey,

    highlightIconPosition,

    amtTextStyle,
    dateStyle,
    headingStyle,
    headingTextStyle,
    listEndHeaderTextStyle,
    optionalContainerStyle,
    subLineStyle,

    headingContainerStyleProp,
    itemSeparateLineStyle,
    itemViewStyle,
    leftIconStyles,
    listHeaderViewStyle,
    mainContainerStyle,
    rightIconStyles,
    touchableStyle,
    touchStyle,

    amt,
    subLineKey,

    disableIcon,
    highlightIcon,

    isListHeader,
    isOnPressHighlight,
    isOptionalContainer,
    isRefresh,
    isSeparator,
    isTextWrap,

    highlightWidth,
    maxToRenderPerBatch,
    onEndReachedThreshold,

    getAllproducts,
    itemOnPressCallback,
    onClickRightIcon,
    onItemClick,
    OnRefreshCallback,

    footerElement,
    renderCustomListHeader,
  } = props;

  const [selected, setSelected] = defaultIndex!=null?useState<number>(defaultIndex):useState<number>();

  const onPress = (item: object, index: number) => {
    {
      isOnPressHighlight && setSelected(index);
    }
    if (itemOnPressCallback) itemOnPressCallback(item,index);
    if (onItemClick) onItemClick(item);
  };

  const renderList = ({ index, item }: any) => {
    return (
    <>
      {item.optionalHeaderText &&  item.optionalHeaderText}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          highlightIconPosition === 'right' && onPress(item, index);
        }}
        style={[
          {
            backgroundColor:
              index === selected
                ? itemHightlightBGC || styles.leftIconDefaultBGC.color
                : itemDefaultBGC|| styles.leftIconHightlightBGC.color,
          },
          touchableStyle,
        ]}>
        <>
          <View
            style={[
              styles.renderContainerStyle,
              itemViewStyle,
              {
                borderWidth:
                  index === selected
                    ? highlightWidth
                    : actuatedNormalizeModerateScale(0),
                borderColor: index === selected ? highlightColor : '',
              },
            ]}>
              <Pressable
                onPress={() => onPress(item, index)}
                style={!rightIconKey&&[styles.touch,touchStyle]}
              />
            {leftIcon && (
              <Pressable
                onPress={() => onPress(item, index)}
                style={[
                  styles.leftIconStyle,
                  {
                    backgroundColor:
                      index === selected
                        ? leftIconHightlightBGC ||
                          styles.leftIconHightlightBGC.color
                        : leftIconDefaultBGC || styles.leftIconDefaultBGC.color,
                  },
                  leftIconStyles,
                ]}>
                {item[leftIcon]
                  ? item[leftIcon]
                  : index === selected
                  ? highlightIcon
                  : disableIcon}
              </Pressable>
            )}
            <View
              style={[styles.headingContainerStyle, headingContainerStyleProp]}>
              <Pressable
                onPress={() => onPress(item, index)}
                style={[styles.touch,touchStyle]}
              />
              <View style={styles.nameContainer}>
                {typeof headingKey !== 'undefined' && (
                  <Text
                    style={[
                      styles.headingTextStyle,
                      headingTextStyle,
                      {
                        overflow: isTextWrap ? 'hidden' : undefined,
                      },
                    ]}
                    numberOfLines={isTextWrap ? 1 : undefined}
                    ellipsizeMode={isTextWrap ? 'tail' : undefined}>
                    {item[headingKey]}{' '}
                  </Text>
                )}
                {typeof starIconKey !== 'undefined' && item[starIconKey]}
              </View>
              {typeof subLineKey !== 'undefined' && (
                <Text style={[styles.subLineTextStyles, subLineStyle]}>
                  {typeof subLineKey === 'string'
                    ? item[subLineKey]
                    : item.subLineKey}{' '}
                </Text>
              )}
            </View>
            <View style={styles.rightContainerStyle}>
            {amt && (typeof amt === 'string' ?
                  <Text style={[styles.amtTextStyle, amtTextStyle]}>{item[amt]}</Text>
                  : item.amt
                )}
              {typeof date !== 'undefined' && (
                <Text style={[styles.dateTextStyle, dateStyle]}>
                  {item[date]}
                </Text>
              )}
            </View>
            {rightIconKey && (
              <TouchableHighlight
                underlayColor={
                  rightIconHightlightBGC || styles.rightIconHighlight.color
                }
                onPress={() => {
                  if (onClickRightIcon) {
                    onClickRightIcon(item, index);
                  } else {
                    onPress(item, index);
                  }
                }}
                style={[styles.rightIconStyle, rightIconStyles]}>
                {item[rightIconKey]
                  ? item[rightIconKey]
                  : index === selected
                    ? highlightIcon
                    : disableIcon}
              </TouchableHighlight>
            )}
          </View>
          {isOptionalContainer && item.optionalText && (
            <Text style={[optionalContainerStyle]}>{item.optionalText}</Text>
          )}
          {index < list.length - 1 && isSeparator && (
            <View style={[styles.separator, itemSeparateLineStyle]}></View>
          )}
        </>
      </TouchableOpacity>
    </>
    );
  };

  const listHeaderComponent = () => {
    if (renderCustomListHeader) return renderCustomListHeader();
    if (isListHeader) {
      return (
        <View style={[styles.listHeaderContainerStyle, listHeaderViewStyle]}>
          <Text
            style={[
              styles.listTitleStyle,
              typography.ButtonSmall,
              headingStyle,
            ]}>
            {ListHeadingTitle}
          </Text>
          <Text
            style={[
              styles.listEndTitleStyle,
              typography.BodyRegular2,
              listEndHeaderTextStyle,
            ]}>
            {ListEndHeadingTitle}
          </Text>
        </View>
      );
    }
  };

  const listFooterComponent = () => {
    if (footerElement) return footerElement();
  };

  return (
    <View
      style={[
        isListHeader
          ? styles.containerWithHeader
          : styles.containerWithoutHeader,
        mainContainerStyle,
      ]}>
      <FlatList
        data={list}
        ListHeaderComponent={listHeaderComponent ? listHeaderComponent() : null}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderList}
        ListFooterComponent={listFooterComponent ? listFooterComponent() : null}
        extraData={extraDataProp}
        onEndReachedThreshold={onEndReachedThreshold}
        maxToRenderPerBatch={maxToRenderPerBatch}
        onEndReached={getAllproducts}
        refreshing={isRefresh}
        onRefresh={OnRefreshCallback}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default IMNormalList;