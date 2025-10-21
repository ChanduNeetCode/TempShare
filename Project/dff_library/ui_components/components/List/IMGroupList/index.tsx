import React, { useState } from 'react';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';

import { IMGroupListProps } from './types';
import useStyles from './styles';
import { actuatedNormalizeModerateScale } from '../../../utils/utility';

const IMGroupList: React.FC<IMGroupListProps> = props => {
  const styles = useStyles();

  const {
    content,

    highlightColor,

    highlightWidth,

    isSeparator,

    itemSeparateLineStyle,
    mainContainerStyle,

    onPressItem,

    footerElement,
    headerElement,
  } = props;

  const [selected, setSelected] = useState<number>(content.length);

  const onPressHandler = (input: any, index: any) => {
    if (onPressItem) {
      setSelected(index);
      onPressItem(input);
    }
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
        data={content}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={listHeaderComponent?listHeaderComponent():null}
        ListFooterComponent={listFooterComponent?listFooterComponent():null}
        renderItem={({ item, index }) => {
          return (
            <View>
              {content && (
                <>
                  {item.main && (
                    <TouchableWithoutFeedback
                      onPress={() => onPressHandler(item.main, index)}>
                      <View
                        style={[
                          styles.main,
                          {
                            borderTopWidth:
                              index === selected
                                ? highlightWidth
                                : actuatedNormalizeModerateScale(0),
                            borderRightWidth:
                              index === selected
                                ? highlightWidth
                                : actuatedNormalizeModerateScale(0),
                            borderLeftWidth:
                              index === selected
                                ? highlightWidth
                                : actuatedNormalizeModerateScale(0),
                            borderBottomWidth:
                              index === selected && item.sub === undefined
                                ? highlightWidth
                                : actuatedNormalizeModerateScale(0),
                            borderColor:
                              index === selected ? highlightColor : '',
                          },
                          item.mainTextContainerStyle,
                        ]}>
                        {item.main}
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                  {item.sub && (
                    <TouchableWithoutFeedback
                      onPress={() => onPressHandler(item.sub, index)}>
                      <View
                        style={[
                          styles.sub,
                          {
                            borderBottomWidth:
                              index === selected
                                ? highlightWidth
                                : actuatedNormalizeModerateScale(0),
                            borderRightWidth:
                              index === selected
                                ? highlightWidth
                                : actuatedNormalizeModerateScale(0),
                            borderLeftWidth:
                              index === selected
                                ? highlightWidth
                                : actuatedNormalizeModerateScale(0),
                            borderColor:
                              index === selected ? highlightColor : '',
                          },
                          item.subTextContainerStyle,
                        ]}>
                        {item.sub}
                      </View>
                    </TouchableWithoutFeedback>
                  )}
                </>
              )}
              {index < content.length - 1 && (
                <View
                  style={[
                    isSeparator ? styles.separator : null,
                    itemSeparateLineStyle,
                  ]}></View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default IMGroupList;
