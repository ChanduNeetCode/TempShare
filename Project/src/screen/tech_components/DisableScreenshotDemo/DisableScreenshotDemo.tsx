import {
  BackHandler,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  NativeModules,
  AppRegistry,
} from 'react-native';
import React, { useEffect, useCallback } from 'react';
import styles from './style';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { colors } from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../utils/HeaderComponent';
import { STRINGS } from './constants';
import { IMDisableScreenShot } from '../../../../dff_library/techical_components/components/DisableScreenShot/index';



type Props = NativeStackScreenProps<
  RootStackParamList,
  'DisableScreenshotDemo'
>;
const DisableScreenshotDemo = ({ navigation }: Props) => {
  const { allowScreenshot, forbidScreenshot } = IMDisableScreenShot();

  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    const preventScreenShot = async () => {
    }
    preventScreenShot()
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      allowScreenshot();
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const handleAllowScreenshot = useCallback(() => {
    allowScreenshot();
  }, [allowScreenshot]);


  const handleForbidScreenshot = useCallback(() => {
    forbidScreenshot();
  }, [forbidScreenshot]);
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
        title={STRINGS.str_disableScreenshot}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleAllowScreenshot}>
            <Text style={styles.button}>Allow Screenshot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleForbidScreenshot}>
            <Text style={styles.button}>Forbid Screenshot</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
AppRegistry.registerComponent('DisableScreenshotDemo', () => DisableScreenshotDemo);
export default DisableScreenshotDemo;
