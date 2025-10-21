import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMCalendar } from '../../../../dff_library/ui_components/components/Calendar';
import { data } from './json';

type Props = NativeStackScreenProps<RootStackParamList, 'CalendarDemo'>;

const CalendarDemo = ({ navigation }: Props) => {
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
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title="Calendar" />
      <IMCalendar
        CalendarBackgroundColor={colors.CoolGrey90}
        textSectionTitleColor={'#333638'}
        textDayHeaderFontSize={15}
        textDisabledColor={colors.NeutralGrey100}
        showPicker={false}
        showCalendar={true}
        dayToMark={data}
        headerButtonTitle="Done"
      />
    </>
  );
};

export default CalendarDemo;
