import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { type IMChevronListProps } from './types';
import useStyles from './styles';
import { ICGeneralChevronRight } from '../../../atoms/icons';

const IMChevronList: React.FC<IMChevronListProps> = props => {
  const {
    displayKey,
    rightSideImage = <ICGeneralChevronRight height={24} width={24} />,

    isleftSideImage,
    isSeparator,

    list,

    itemTextStyle,
    
    itemSeparateLineStyle,
    leftIconViewStyle,
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
    return (
      <>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPress(item)}
          style={styles.viewContainer}>
          {isleftSideImage && (
            <View style={[styles.renderViewContainerleft, leftIconViewStyle]}>
              {item.icon}
            </View>
          )}
          <Text
            testID="cell__label"
            style={[styles.listItemLabel, itemTextStyle]}>
            {item[displayKey]}
          </Text>
          <View style={styles.renderViewContainer}>{rightSideImage}</View>
        </TouchableOpacity>
        {index < list.length - 1 && isSeparator && (
          <View style={[styles.separator, itemSeparateLineStyle]}></View>
        )}
      </>
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderList}
        ListHeaderComponent={listHeaderComponent?listHeaderComponent():null}
        ListFooterComponent={listFooterComponent?listFooterComponent():null}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default IMChevronList;
