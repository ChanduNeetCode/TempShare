import React, { useState, useEffect} from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import colors from '../../../atoms/colors';
import {
  CheckboxChecked,
  ICGeneralCheckBoxUnchecked,
  ICGeneralDisabledCheckBoxUnChecked
} from '../../../atoms/icons';
import { type IMCheckboxProps } from './types';
import useStyles from './styles';

const IMCheckBox: React.FC<IMCheckboxProps> = props => {
  const styles = useStyles();
  const {
    title='This will be the text box length',

    tapRadioButtonColor = colors.NeutralGrey120,
    value = '',

    isCheckboxDisabled,
    isDisable,
    isSelect,
    isLeft,

    toggleState,
    multiToggleState,

    activeTouchStyle,
    containerStyle,
    titleViewStyle,
    viewStyle,

    textStyle, 

    selectImage = <CheckboxChecked height={20} width={20} />,
    unselectImage = isCheckboxDisabled?<ICGeneralDisabledCheckBoxUnChecked height={20} width={20} />:<ICGeneralCheckBoxUnchecked height={20} width={20} />,
  } = props;

  const [enable, setEnable] = useState(isSelect);

  useEffect(() => {
    setEnable(isSelect);
  }, [isSelect]);

  const onPress = () => {
    setEnable(!enable);
    if (toggleState) {
      toggleState(value, !enable);
    }
    if (multiToggleState) {
      multiToggleState(title, !enable);
    }
  };

  const iconContainer = () => {
    return (
      <View style={[styles.viewStyle, viewStyle]}>
        <TouchableHighlight
          style={[styles.touchableStyle,activeTouchStyle]}
          disabled={isCheckboxDisabled}
          onPress={onPress}
          key={value}
          underlayColor={tapRadioButtonColor}>
          {enable ? selectImage : unselectImage}
        </TouchableHighlight>
      </View>
    );
  };

  const titleContainer = () => {
    return (
      <View style={ [styles.titleViewStyle,titleViewStyle] }>
        <TouchableOpacity 
        disabled={isDisable}
        onPress={onPress}>
          {typeof title === 'string' ? (
            <Text style={[styles.titleText, textStyle]}>{title}</Text>
          ) : (
            title
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
    {isLeft ? (
      <View style={[styles.container,containerStyle]}>
        <View>{iconContainer()}</View>
        <View>{titleContainer()}</View>
      </View>
    ) : (
      <View style={[styles.container,containerStyle]}>
        <View>{titleContainer()}</View>
        <View>{iconContainer()}</View>
      </View>
    )}
  </View>
  );
};
export default IMCheckBox;
