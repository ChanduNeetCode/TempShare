import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BackHandler } from 'react-native';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import IMProcessLoader from '../../../../dff_library/ui_components/components/ProcessLoader/IMProcessLoader';
import { STRINGS } from './constants';

type Props = NativeStackScreenProps<RootStackParamList, 'ProcessLoaderDemo'>;

const ProcessLoaderDemo = ({ navigation }: Props) => {
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
    <View style={{ flex: 1 }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent
        navigation={navigation}
        title={STRINGS.str_screen_title}
      />
      <View style={{ marginTop: 30, flex: 1 }}>
        <IMProcessLoader
          title={STRINGS.str_title}
          subTitle={STRINGS.str_subTitle}
        />
      </View>
    </View>
  );
};

export default ProcessLoaderDemo;
