import React, { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { type IMSublineListProps } from './types';
import useStyles from './styles';
import { colors, typography } from '../../../atoms';

const IMSublineList: FC<IMSublineListProps> = props => {
  const styles = useStyles();
  const [selectedItem, setSelectedItem] = useState<number>();

  const { list, mainContainerStyle, itemSeparateLineStyle, itemViewStyle } =
    props;

  const renderList = ({ index, item }: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelectedItem(index);
          }}>
          <View
            style={[
              styles.renderContainerStyle,
              itemViewStyle,
              {
                backgroundColor:
                  selectedItem == index ? colors.CoolGrey90 : colors.White,
              },
            ]}>
            {item['leftIcon'] && (
              <TouchableOpacity onPress={() => {}} style={[styles.iconStyle]}>
                {item['leftIcon']}
              </TouchableOpacity>
            )}
            <View style={[styles.headingContainerStyle]}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  {item['headline'] && (
                    <Text
                      style={[
                        styles.headingTextStyle,
                        typography.BodySemiBold2,
                      ]}>
                      {item['headline']}{' '}
                    </Text>
                  )}
                  {item['subline'] && (
                    <Text
                      style={[
                        styles.subLineTextStyles,
                        typography.BodyRegular3,
                      ]}>
                      {item['subline']}{' '}
                    </Text>
                  )}
                </View>
                {item['rightIcon'] && (
                  <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.iconStyle]}>
                    {item['rightIcon']}
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {/* <Text>helloo</Text> */}
          </View>
        </TouchableOpacity>
        <View style={[styles.separator, itemSeparateLineStyle]}></View>
      </View>
    );
  };
  return (
    <View style={[styles.container, mainContainerStyle]}>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderList}
      />
    </View>
  );
};

export default IMSublineList;
