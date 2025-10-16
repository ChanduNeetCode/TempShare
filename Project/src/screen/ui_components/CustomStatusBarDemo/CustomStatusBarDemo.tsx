import React, { useEffect } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { IMCustomStatusBar } from '../../../../dff_library/ui_components';

import colors from '../../../../dff_library/ui_components/atoms/colors';

import HeaderComponent from '../../../../src/utils/HeaderComponent/index';

type Props = NativeStackScreenProps<RootStackParamList, 'CustomStatusBarDemo'>;

const CustomStatusBarDemo = ({ navigation }: Props) => {
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
      <IMCustomStatusBar
        angle={89.96}
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
        isUseAngle={true}
        isTranslucent
      />
      <HeaderComponent navigation={navigation} title={'CustomStatusBar'} />

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <IMCustomStatusBar
          angle={89.96}
          gradientColorsArray={[
            colors.GradientOrangeStart,
            colors.GradientOrangeEnd,
          ]}
          isUseAngle
          isTranslucent
        />
      </View>
    </>
  );
};

export default CustomStatusBarDemo;
