import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { ListLetterIndexProps } from './types';
import { styles } from './styles';
import { ISectionData } from '../IMAlphabeticalList/types';

export const ListLetterIndex: React.FC<ListLetterIndexProps> = ({
  selectedLetter,

  sectionData,

  indexContainerStyle,
  indexLetterContainerStyle,
  indexLetterStyle,
  letterListContainerStyle,
  scrollingIndexLetterContainerStyle,
  selectedIndexLetterStyle,
  renderCustomIndexLetter,

  onPressLetter,
  paginationTimeOut=2000,
}) => {
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    setShowPagination(true);
  }, [selectedLetter]);

  useEffect(() => {
    if (showPagination) {
      setTimeout(() => setShowPagination(false), 2000);
    }
  }, [showPagination]);

  const onRenderCustomIndexLetter = ({
    item,
    index,
  }: {
    item: ISectionData;
    index: number;
  }) => {
    const onPress = () => onPressLetter(index);

    if (renderCustomIndexLetter) {
      return renderCustomIndexLetter({
        item,
        index,
        onPress,
      });
    }
    return (
      <TouchableOpacity testID="indexItem" onPress={onPress}>
        <View
          testID="indexItem__title-container"
          style={[
            selectedLetter === item.title && showPagination
              ? [
                  styles.scrollingLetterIndexContainer,
                  scrollingIndexLetterContainerStyle,
                ]
              : [styles.letterIndexItem, indexLetterContainerStyle],
          ]}>
          <Text
            testID="indexItem__title"
            style={[
              selectedLetter === item.title && showPagination
                ? [styles.scrollingAnimation]
                : selectedLetter === item.title && showPagination === false
                ? [styles.selectedLetterIndexLabel, selectedIndexLetterStyle]
                : [styles.letterIndexLabel, indexLetterStyle],
            ]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.letterIndexContainer, indexContainerStyle]}>
      <FlatList
        testID="flatList"
        contentContainerStyle={[
          styles.letterIndexList,
          letterListContainerStyle,
        ]}
        data={sectionData}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={onRenderCustomIndexLetter}
      />
    </View>
  );
};