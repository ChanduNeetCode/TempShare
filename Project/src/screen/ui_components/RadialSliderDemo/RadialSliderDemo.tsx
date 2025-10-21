import React, { useEffect, useState } from 'react';
import { BackHandler, View, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS } from './constants';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { actuatedNormalizeHeight } from '../../../utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import IMRadialSlider from '../../../../dff_library/ui_components/components/RadialSlider/IMRadialSlider/IMRadialSlider';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import HeaderComponent from '../../../../src/utils/HeaderComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'RadialSliderDemo'>;

const RadialSliderDemo = ({ navigation }: Props) => {
  const [amt, setAmt] = useState<number>();
  const [ten, setTen] = useState<number>();

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
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
        title={STRINGS.str_slider}
      />
      <View style={{ top: actuatedNormalizeHeight(10) }}>
        <IMRadialSlider
          amountSymbol={'₹'}
          monthSymbol={'m'}
          isSlider1StarDisplay={true}
          isSlider2StarDisplay={true}
          parentStyle={{ marginTop: actuatedNormalizeHeight(140) }}
          slider1Interval={100000}
          slider1Min={100000}
          slider1Max={900000}
          slider2Interval={6}
          slider2Min={12}
          slider2Max={60}
          slider1SelectedData={(_a: string) => { }}
          slider2SelectedData={(_b: string) => { }}
          slider1Divisions={2}
          slider2Divisions={3}
          slider1InputText={amt}
          slider2InputText={ten}
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 10, top: 100, left: 100 }}>
        <TextInput placeholder='Enter Amount' onChangeText={(val) => setAmt(Number(val))} style={{ borderWidth: 1, borderRadius: 7, borderColor: 'green', color: '#f0792e' }} />

        <TextInput placeholder='Enter Tenure' onChangeText={(val) => setTen(Number(val))} style={{ borderWidth: 1, borderRadius: 7, borderColor: '#f0792e', color: 'green' }} />
      </View>
    </View>
  );
};

export default RadialSliderDemo;


