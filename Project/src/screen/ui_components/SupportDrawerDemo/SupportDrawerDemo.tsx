import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMSupportDrawer } from '../../../../dff_library/ui_components/components/SupportDrawer';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { ICLineCoinsWhite } from '../../../../dff_library/ui_components/atoms/icons';
import data from './json';

type Props = NativeStackScreenProps<RootStackParamList, 'SupportDrawerDemo'>;

const SupportDrawerDemo = ({ navigation }: Props) => {
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
        title={STRINGS.str_supportDrawer}
      />
      <IMSupportDrawer
        titleImage={<ICLineCoinsWhite width={32} height={32} />}
        title={STRINGS.title}
        description={STRINGS.description}
        isCloseOnBackgroundTap={true}
        isOnClickItemDisable={false}
        content={data}
        itemOnPress={val => {}}
        backgroundStyle={{ backgroundColor: '#333638' }}
        childContainerStyle={{}}
        activeOpacityProp={1}
        isStatusBarTranslucent={true}
      />
    </>
  );
};

export default SupportDrawerDemo;
