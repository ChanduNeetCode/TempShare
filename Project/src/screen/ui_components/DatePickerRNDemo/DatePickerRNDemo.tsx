import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { IMDatePicker } from '../../../../dff_library/ui_components/components/DatePicker';
import {
  ICGeneralChevronRight,
  ICGeneralChevronLeft,
} from '../../../../dff_library/ui_components/atoms/icons';

type Props = NativeStackScreenProps<RootStackParamList, 'DatePickerRNDemo'>;

const DatePickerRNDemo = ({ navigation }: Props) => {
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
      <HeaderComponent navigation={navigation} title={'Date Picker'} />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000010',
        }}>
        <IMDatePicker
          datePickerType="singlePicker"
          enableSwipeMonths={true}
          onDateSelect={val => {}}
          minDate="2022-12-11"
          maxDate="2029-09-28"
          isMonthDropDown={true}
          isMonthTouchDisable={false}
          hideArrows={true}
          numberOfYears={8}
          rightArrowIcon={<ICGeneralChevronRight />}
          leftArrowIcon={<ICGeneralChevronLeft />}
          theme={{
            textSectionTitleDisabledColor: '#d9e1e8',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            indicatorColor: 'pink',
          }}
        />
      </View>
    </>
  );
};

export default DatePickerRNDemo;
