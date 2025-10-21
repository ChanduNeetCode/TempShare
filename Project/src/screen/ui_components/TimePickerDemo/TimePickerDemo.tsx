import React, { useEffect } from 'react';
import {
  BackHandler,
  View
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { IMTimePicker } from '../../../../dff_library/ui_components/components/TimePicker/index'
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { STRINGS } from './constants';

type Props = NativeStackScreenProps<RootStackParamList, 'TimePickerDemo'>;

const TimePickerDemo = ({ navigation }: Props) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <View>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent
        navigation={navigation}
        title={STRINGS.str_timePicker}
      />
      <IMTimePicker />
    </View>
  );
};

export default TimePickerDemo;

