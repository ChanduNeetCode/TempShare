import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { IMVerticalPTWithCounterProps } from './types';
import { styles } from './styles';
import { ICComponentDrawerSuccess } from '../../../atoms/icons';
import { colors } from '../../../atoms';
import { actuatedNormalizeHeight } from '../../../utils/utility';

const IMVerticalProgressTrackerWithCounter: React.FC<
  IMVerticalPTWithCounterProps
> = props => {
  const {
    data,

    childProp,

    textStyleProp,

    itemContainerStyle,
    itemSeparatorStyle,
    mainContainerStyle,
    renderContainerStyle,
  } = props;

  const renderItem = (item: any) => {
    let image;
    switch (item.item.status) {
      case 'success':
        image = (
          <ICComponentDrawerSuccess
            width={styles.iconSizes.width}
            height={styles.iconSizes.height}
          />
        );
        break;
      case 'inProgress':
        image = <Text style={[styles.circleText2]}>{item.item.key}</Text>;
        break;
      default:
        image = <Text style={[styles.circleText1]}>{item.item.key}</Text>;
        break;
    }

    return (
      <View style={[styles.renderContainer, renderContainerStyle]}>
        <View>
          <View
            style={[
              styles.circle,
              {
                backgroundColor:
                  item.item.status === 'inProgress'
                    ? colors.PrimaryOrange100
                    : colors.PastelAmber100,
              },
            ]}>
            {image}
          </View>
          {item.item.key < data.length && (
            <View
              style={[
                styles.itemSeparator,
                itemSeparatorStyle,
                {
                  height:
                    !(item.item.status === 'inProgress') &&
                    item.item.key < data.length
                      ? actuatedNormalizeHeight(28)
                      : 'auto',
                },
              ]}></View>
          )}
        </View>
        <View>
          <View style={[styles.itemContainer, itemContainerStyle]}>
            {typeof item.item.item == 'string' ? (
              <Text style={[styles.textStyle,{color:item.item.status === 'inProgress'?colors.NeutralGrey140:colors.NeutralGrey120}, textStyleProp]}>
                {item.item.item}
              </Text>
            ) : (
              item.item.item
            )}
          </View>
          {item.item.status === 'inProgress' && childProp}
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default IMVerticalProgressTrackerWithCounter;
