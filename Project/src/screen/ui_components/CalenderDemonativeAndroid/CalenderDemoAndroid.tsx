import React, { useEffect, useState } from 'react';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { STRINGS } from './constants';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import sampleData from './json';
import { IMCalendarAndroid } from '../../../../dff_library/ui_components/components/CalendarAndroid';

type Props = NativeStackScreenProps<RootStackParamList, 'CalenderDemoAndroid'>;

const CalenderDemoAndroid = ({ navigation }: Props) => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    setisVisible(false);
  }, [isVisible]);
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
      <HeaderComponent
        navigation={navigation}
        title={STRINGS.str_eventcalendar}
      />
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            alignContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setisVisible(true);
          }}>
          <Text>Press me </Text>
        </TouchableOpacity>
        {isVisible && (
          <IMCalendarAndroid
            data={sampleData}
            dateChangeFunction={(dateselected: string) => {
            }}
            monthChangeFunction={(monthselected: string) => {
            }}
          />
        )}
      </View>
    </>
  );
};

export default CalenderDemoAndroid;
