import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { type IMNormalListProps } from './types';
import useStyles from './styles';
import { colors, typography } from '../../../atoms';

const IMNormalList: FC<IMNormalListProps> = props => {
  const styles = useStyles();

  const {
    extraDataProp,
    list,
    amt,
    date,
    headingKey,
    refreshUnderlayColor = colors.NeutralGrey120,
    subLineKey,
    leftIcon = '',
    isListHeader,
    ListHeadingTitle,
    ListEndHeadingTitle,
    highlightColor,
    highlightIconPosition,
    headingContainerStyleProp,
    onItemClick,
    amtTextStyle,
    dateStyle,
    headingStyle,
    onClickRightIcon,
    optionalContainerStyle,
    touchableStyle,
    subLineStyle,
    itemViewStyle,
    itemSeparateLineStyle,
    listHeaderViewStyle,
    listEndHeaderTextStyle,
    mainContainerStyle,
    disableIcon,
    highlightIcon,
    rightIconKey,
    rightEndText,
    starIconKey,
    isSeparator,
    isTextWrap,
    isOptionalContainer,
    isOnPressHighlight,
    isRefresh,
    highlightWidth,
    maxToRenderPerBatch,
    onEndReachedThreshold,

    getAllproducts,
    itemOnPressCallback,
    OnRefreshCallback,
    renderCustomListHeader,

    footerElement,
  } = props;

  const [selected, setSelected] = useState<number>(list.length);

  const onPress = (item: object, index: number) => {
    {
      isOnPressHighlight && setSelected(index);
    }
    if (itemOnPressCallback) itemOnPressCallback(item);
    if (onItemClick) onItemClick(item);
  };

  const renderList = ({ index, item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          highlightIconPosition === 'right' && onPress(item, index);
        }}
        // style={touchableStyle}
      >
        <View
          style={[
            styles.renderContainerStyle,
            itemViewStyle,
            {
              borderWidth: index === selected ? highlightWidth : 0,
              borderColor: index === selected ? highlightColor : '',
            },
          ]}>
          {item[leftIcon] && (
            <TouchableOpacity
              onPress={() => {
                onPress(item, index);
              }}
              //hitSlop={{top:22,bottom:22,left:16,right:124}}
              style={[styles.iconStyle]}>
              {item[leftIcon]
                ? item[leftIcon]
                : index === selected
                ? highlightIcon
                : disableIcon}
            </TouchableOpacity>
          )}

          <View
            style={[styles.headingContainerStyle, headingContainerStyleProp]}>
            <View style={{ flexDirection: 'row' }}>
              {headingKey && (
                <Text
                  style={[
                    styles.headingTextStyle,
                    typography.BodySemiBold2,
                    headingStyle,
                    {
                      overflow: isTextWrap ? 'hidden' : undefined,
                    },
                  ]}
                  numberOfLines={isTextWrap ? 1 : undefined}
                  ellipsizeMode={isTextWrap ? 'tail' : undefined}>
                  {item[headingKey]}{' '}
                </Text>
              )}
              {/* {item.isStar && starIcon} */}

              {typeof starIconKey !== 'undefined' && item[starIconKey]}
            </View>
            {typeof subLineKey !== 'undefined' && (
              <Text
                style={[
                  styles.subLineTextStyles,
                  typography.BodyRegular3,
                  subLineStyle,
                ]}>
                {typeof subLineKey === 'string'
                  ? item[subLineKey]
                  : item.subLineKey}{' '}
              </Text>
            )}
          </View>
          <View style={[styles.rightEndText,rightEndText]}>
            {typeof amt !== 'undefined' && (
              <Text
                style={[
                  styles.amtTextStyle,
                  typography.BodySemiBold2,
                  amtTextStyle,
                ]}>
                {typeof amt === 'string' ? item[amt] : item.amt}{' '}
              </Text>
            )}
            {typeof date !== 'undefined' && (
              <Text
                style={[
                  styles.dateTextStyle,
                  typography.BodyRegular3,
                  dateStyle,
                ]}>
                {item[date]}
              </Text>
            )}
          </View>
          {/* {(rightIcon || isOnPressHighlight) && (
              <TouchableHighlight
                disabled={true}
                underlayColor={refreshUnderlayColor}
                onPress={() => onPress(item, index)}
                style={styles.touchableStyle}>
                {rightIcon ? (
                  rightIcon
                ) : isOnPressHighlight ? (
                  index === selected ? (
                    highlightIcon ? (
                      highlightIcon
                    ) : (
                      <></>
                    )
                  ) : disableIcon ? (
                    disableIcon
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </TouchableHighlight>
            )} */}
          {/* {item[rightIconKey] &&
            <Pressable
              onPress={() => {
                if (onClickRightIcon) {
                  onClickRightIcon(item, index)
                }
                else {
                  onPress(item, index)
                }
              }}
              //hitSlop={{top:22,bottom:22,left:16,right:124}}
              style={[styles.iconStyle]}>
              {typeof rightIconKey == 'string'
                ? item[rightIconKey]
                : index === selected
                  ? highlightIcon
                  : disableIcon} */}
          {/* </Pressable>} */}
        </View>
        {isOptionalContainer && item.optionalText && (
          <Text style={[optionalContainerStyle]}>{item.optionalText}</Text>
        )}
        {index < list.length - 1 &&
          (isSeparator ? (
            <View style={[styles.separator, itemSeparateLineStyle]}></View>
          ) : (
            <View style={[styles.itemSeparateStyle]} />
          ))}
      </TouchableOpacity>
    );
  };

  const listHeaderComponent = () => {
    if (renderCustomListHeader) return renderCustomListHeader();

    return isListHeader ? (
      <View style={[styles.listHeaderContainerStyle, listHeaderViewStyle]}>
        <Text
          style={[styles.listTitleStyle, typography.ButtonSmall, headingStyle]}>
          {ListHeadingTitle}
        </Text>
        <Text
          style={[
            styles.listEndTitleStyle,
            typography.ButtonSmall,
            listEndHeaderTextStyle,
          ]}>
          {ListEndHeadingTitle}
        </Text>
      </View>
    ) : (
      <></>
    );
  };

  const listFooterComponent = () => {
    if (footerElement) return footerElement();
  };

  return (
    <>
      <View style={[styles.container, mainContainerStyle]}>
        <FlatList
          data={list}
          ListHeaderComponent={listHeaderComponent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderList}
          // ListFooterComponent={listFooterComponent}
          extraData={extraDataProp}
          onEndReachedThreshold={onEndReachedThreshold}
          maxToRenderPerBatch={maxToRenderPerBatch}
          onEndReached={getAllproducts}
          refreshing={isRefresh}
          onRefresh={OnRefreshCallback}
        />
      </View>
    </>
  );
};
export default IMNormalList;
