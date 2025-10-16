import {
  BackHandler, ScrollView, Text,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { IMDeviceName, IMUniqueId, IMSystemVersion, IMDeviceCarrier, IMDeviceModel,IMDeviceAppVersion } from '../../../../dff_library/techical_components/components/DeviceBinding/index';
import HeaderComponent from '../../../utils/HeaderComponent';
import { RootStackParamList } from '../../../routes/RootStackParams';
import { STRINGS } from './constants';
import { useEffect } from 'react';
import styles from './styles';
import React from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceBindingDemo'>;


const DeviceBindingDemo = ({ navigation }: Props) => {
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
        title={STRINGS.str_title}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>{STRINGS.deviceInformation}</Text>
        <Text style={styles.info}>{IMDeviceName('IMDeviceName')}</Text>
        <Text style={styles.info}>{IMUniqueId('IMUniqueId')}</Text>
        <Text style={styles.info}>{IMSystemVersion('IMSystemVersion')}</Text>
        <Text style={styles.info}>{IMDeviceCarrier('IMDeviceCarrier')}</Text>
        <Text style={styles.info}>{IMDeviceModel('IMDeviceModel')}</Text>
        <Text style={styles.info}>{IMDeviceAppVersion('IMAppVersion')}</Text>
      </ScrollView>
    </>
  );
};

export default DeviceBindingDemo;
