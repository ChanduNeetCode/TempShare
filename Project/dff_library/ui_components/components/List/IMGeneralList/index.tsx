import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

import { type IMGeneralListProps } from './types';
import useStyles from './styles';

const IMGeneralList: React.FC<IMGeneralListProps> = props => {
  const {
    content,
    displayKey,

    list,

    isEmptyContentDisplay=true,
    isSeparator,
   
    leftItemTextStyle,
    rightItemTextStyle,

    changeContainerStyle,
    itemSeparateLineStyle,
    mainContainerStyle,

    footerElement,
    headerElement,

    onPressItem,
  } = props;

  const styles = useStyles();

  const onPress = (item: any) => {
    if (onPressItem) {
      onPressItem(item);
    }
  };

  const renderList = ({ index, item }: any) => {
    let emptyContentCheck = isEmptyContentDisplay || (item[content] ? true : false);
    return (
      (emptyContentCheck ? <>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPress(item)}
          style={[styles.viewContainer, changeContainerStyle]}>
          <Text
            testID="cell__label"
            style={[styles.listItemLabel, leftItemTextStyle]}>
            {item[displayKey]}
          </Text>
          <View style={styles.renderViewContainer}>
            <Text
              testID="cell__label"
              style={[styles.contentItemLabel, rightItemTextStyle]}>
              {item[content]}
            </Text>
          </View>
        </TouchableOpacity>
        {index < list.length - 1 && isSeparator && (
          <View style={[styles.separator, itemSeparateLineStyle]}></View>
        )}
      </>:<></>)
    );
  };

  const listFooterComponent = () => {
    if (footerElement) return footerElement();
  };

  const listHeaderComponent = () => {
    if (headerElement) return headerElement();
  };

  return (
    <View style={[styles.container, mainContainerStyle]}>
      <FlatList
        data={list}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderList}
        ListHeaderComponent={listHeaderComponent && listHeaderComponent() }
        showsVerticalScrollIndicator={false}
        ListFooterComponent={listFooterComponent && listFooterComponent() }
      />
    </View>
  );
};
export default IMGeneralList;
