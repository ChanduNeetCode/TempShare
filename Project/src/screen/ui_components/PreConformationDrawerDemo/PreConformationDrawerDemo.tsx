import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { IMPreConformationDrawer } from '../../../../dff_library/ui_components/components/PreConformationDrawer';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { STRINGS } from './constants';
import styles from './styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'PreConformationDrawerDemo'
>;

const PreConformationDrawerDemo = ({ navigation }: Props) => {
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
        title={STRINGS.str_PreConformationDrawer}
      />
      <View style={styles.ViewStyle}>
        <IMPreConformationDrawer isStatusBarTranslucent/>
      </View>
    </>
  );
};

export default PreConformationDrawerDemo;
