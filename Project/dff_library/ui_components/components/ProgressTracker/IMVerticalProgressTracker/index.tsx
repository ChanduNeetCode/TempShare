import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { IMVerticalTrackerProps } from './types';
import { styles } from './styles';
import { STRINGS } from '../constants';
import {
  ICGeneralRadioButtonOff,
  DoneOutLine,
  ErrorAlt,
  ScheduleBlack,
} from '../../../atoms/icons';

const IMVerticalProgressTracker: React.FC<IMVerticalTrackerProps> = props => {
  const {
    data,

    statusTitles,

    iconStyleProp,
    itemSeparatorStyle,
    renderContainerStyle,

    mainContainerStyle,

    textStyle,
  } = props;

  const renderItem = (item: any) => {
    let image;
    switch (item.item.statusCode) {
      case 'success':
        image = (
          <DoneOutLine
            height={styles.iconSizes.height}
            width={styles.iconSizes.width}
          />
        );
        break;
      case 'fail':
        image = (
          <ErrorAlt
            height={styles.iconSizes.height}
            width={styles.iconSizes.width}
          />
        );
        break;
      case 'inProgress':
        image = (
          <ScheduleBlack
            height={styles.iconSizes.height}
            width={styles.iconSizes.width}
          />
        );
        break;
      default:
        image = (
          <ICGeneralRadioButtonOff
            height={styles.iconSizes.height}
            width={styles.iconSizes.width}
          />
        );
        break;
    }

    let title;
    switch (item.item.statusCode) {
      case 'success':
        title = statusTitles?.success
          ? statusTitles?.success
          : STRINGS.str_Done;
        break;
      case 'fail':
        title = statusTitles?.fail ? statusTitles?.fail : STRINGS.str_Fail;
        break;
      case 'inProgress':
        title = statusTitles?.inProgress
          ? statusTitles?.inProgress
          : STRINGS.str_InProgress;
        break;
      default:
        title = statusTitles?.unChecked
          ? statusTitles?.unChecked
          : STRINGS.str_UnChecked;
        break;
    }

    return (
      <View style={[styles.renderContainer, renderContainerStyle]}>
        <View style={[styles.iconStyles, iconStyleProp]}>{image}</View>
        <Text style={[styles.titleStyle, textStyle]}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      <FlatList
        data={data}
        renderItem={(item: any) => renderItem(item)}
        horizontal={false}
        ItemSeparatorComponent={() => (
          <View >
          <View style={[styles.itemSeparator,itemSeparatorStyle]}></View>
          <View style={[styles.itemSeparator,itemSeparatorStyle]}></View>
          </View>
        )}
      />
    </View>
  );
};

export default IMVerticalProgressTracker;
