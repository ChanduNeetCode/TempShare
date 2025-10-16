import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import useStyles from './styles';
import { SegmentControlProps } from './types';
import colors from '../../../atoms/colors';

const IMSegmentControl: React.FC<SegmentControlProps> = props => {
  const {
    flatListMainStyleProp,
    components,
    tabTitles,
    selectedTextClr = colors.White,
    selectedTitleBgClr = colors.PastelAmber110,
    selectedIndex = 0,
    unSelectedTitleBgClr = colors.White,
    parentViewStyle,
    tabViewStyle,
    tabTitlesSelectedTextStyle,
    tabTitlesUnSelectedTextStyle,
    tabviewSelcted,
    tabViewunselcted,

    onSelect,
  } = props;
  const styles = useStyles();
  const [textColor, setTextColor] = useState(selectedTextClr);
  const [direction, setDirection] = useState('left');
  const dimensions = useWindowDimensions();
  const handleTextClick = (index: number) => {
    const newTextColor =
      selectedIndex === index ? selectedTitleBgClr : textColor;
    const newDirection = direction === 'left' ? 'right' : 'left';

    setTextColor(newTextColor);
    setDirection(newDirection);
  };

  const onSelectItem = (index: number) => {
    onSelect(index);
    handleTextClick(index);
  };
  return (
    <View>
      <View style={[styles.parentViewStyle, parentViewStyle]}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={tabTitles}
          horizontal={true}
          contentContainerStyle={[
            styles.flatListMainStyle,
            flatListMainStyleProp,
          ]}
          renderItem={({ item, index }) => (
            <View style={styles.flatListInnerStyle}>
              <TouchableOpacity onPress={() => onSelectItem(index)}>
                <View
                  style={[
                    styles.tabViewStyle,
                    {
                      backgroundColor:
                        selectedIndex === index
                          ? selectedTitleBgClr
                          : unSelectedTitleBgClr,
                    },
                    tabViewStyle,
                    selectedIndex === index?tabviewSelcted:tabViewunselcted

                  ]}>
                  {typeof item.title==='string'?<Text
                    style={
                      selectedIndex === index
                        ? tabTitlesSelectedTextStyle
                          ? tabTitlesSelectedTextStyle
                          : styles.tabTitlesSelectedTextStyle
                        : tabTitlesUnSelectedTextStyle
                        ? tabTitlesUnSelectedTextStyle
                        : styles.tabTitlesUnSelectedTextStyle
                    }>
                    {item.title}
                  </Text>:item.title}
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View>
        {components[selectedIndex]}
      </View>
    </View>
  );
};

export default IMSegmentControl;

