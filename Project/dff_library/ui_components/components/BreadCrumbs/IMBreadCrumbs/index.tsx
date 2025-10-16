import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { BreadCrumbsProps } from './types';
import styles from './styles';

const IMBreadCrumbs: React.FC<BreadCrumbsProps> = props => {
  const {
    selectedIndex = 0,

    onSelect,

    data,

    componentContainerStyle,

    slashStyle,
    selectedTextStyle,
    unSelectedTextStyle,
  } = props;

  const onSelectItem = (index: number) => {
    if (onSelect) onSelect(index);
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity onPress={() => onSelectItem(index)}>
        <Text
          style={[
            selectedIndex == index
              ? [styles.selectedTextStyle, selectedTextStyle]
              : [styles.unSelectedTextStyle, unSelectedTextStyle],
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  const itemSeparator = () => {
    return <Text style={[styles.slashStyle, slashStyle]}>/</Text>;
  };
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
      />
      <View style={componentContainerStyle}>
        {data[selectedIndex].component}
      </View>
    </View>
  );
};

export default IMBreadCrumbs;
