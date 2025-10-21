import React, {  useState } from 'react';
import { FlatList } from 'react-native';

import { IMMultiRadioButtonProps } from './types';
import IMSingleRadioButton from '../IMSingleRadioButton';
import {
  ICGeneralRadioButtonOff,
  ICGeneralRadioButtonOn,
} from '../../../atoms/icons';

const IMMultiChoiceRadioButton: React.FC<IMMultiRadioButtonProps> = props => {
  const {
    list,

    isHorizontal,
    isLeft,

    tapRadioButtonColor,
    displayKey,
    value,

    activeTouchStyle,
    containerStyle,

    textStyle,

    selectImage = <ICGeneralRadioButtonOff height={20} width={20} />,
    textContainer,
    unselectImage = <ICGeneralRadioButtonOn height={20} width={20} />,

    onPress,
  } = props;

  const [selectedValue, setSlectedValue] = useState('');

  const onClick = (item: any) => {
    if (item[displayKey] === selectedValue) {
      setSlectedValue('');
    } else {
      setSlectedValue(item[displayKey]);
    }
    if (onPress) {
      onPress(item);
    }
  };

  const renderList = ({ item }: any) => {
    const isSelected = item[value] === selectedValue;
    return (
      <IMSingleRadioButton
        key={item[value]}
        title={item[displayKey]}
        isLeft={isLeft}
        textStyle={textStyle}
        textContainer={textContainer}
        tapRadioButtonColor={tapRadioButtonColor}
        isSelect={isSelected}
        activeTouchStyle={activeTouchStyle}
        onPress={() => onClick(item)}
        selectImage={selectImage}
        unselectImage={unselectImage}
      />
    );
  };
  return (
    <FlatList
      data={list}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={renderList}
      horizontal={isHorizontal}
    />
  );
};
export default IMMultiChoiceRadioButton;
