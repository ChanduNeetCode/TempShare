import React, { useEffect } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { IMBlurEffect } from '../../../../dff_library/ui_components/components/BlurEffect';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { STRINGS } from './constants';
import styles from './styles';
import { BlurType } from '../../../../dff_library/ui_components/components/BlurEffect/IMBlurEffect/types';

type Props = NativeStackScreenProps<RootStackParamList, 'BlurEffectDemo'>;

const BlurEffectDemo = ({ navigation }: Props) => {
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
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />

      <View style={styles.blurContainer}>
        <Text style={styles.text}>Hi, I am some blurred text</Text>
        <IMBlurEffect
          blurStyle={styles.absolute}
          _blurType={BlurType.Dark}
          _blurAmount={2}
        />
      </View>

      <View style={styles.blurContainer}>
        <Text style={styles.text}>Hi, I am some blurred text</Text>
        <IMBlurEffect
          blurStyle={styles.absolute}
          _blurType={BlurType.Light}
          _blurAmount={3}
        />
      </View>

      <View style={styles.blurContainer}>
        <Text style={styles.text}>Hi, I am some blurred text</Text>
        <IMBlurEffect
          blurStyle={styles.absolute}
          _blurType={BlurType.Xlight}
          _blurAmount={1}
        />
      </View>
    </>
  );
};

export default BlurEffectDemo;
