import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';

import {
  IMMultiChoiceRadioButton,
  IMSingleRadioButton,
} from '../../../../dff_library/ui_components/components/RadioButton';
import { STRINGS } from './constants';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import styles from './styles';
import { data } from './json';

type Props = NativeStackScreenProps<RootStackParamList, 'RadioButtonDemo'>;

const RadioButtonDemo = ({ navigation }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(isVisible);
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
        title={STRINGS.str_radioButton}
      />
      <View style={styles.container}>
        <IMSingleRadioButton
          isSelect={true}
          isLeft={true}
          title="Active"
          tapRadioButtonColor='rgba(0.394,0.41,0.426,0.1)'
        />
        <IMSingleRadioButton
          isDisable={true}
          isSelect={false}
          title="Disable"
          isLeft={true}
        />

        {/* <IMSingleRadioButton
          tapRadioButtonColor={colors.NeutralGrey120}
          isSelect={false}
          activeTouchStyle={styles.active_touchtapstyle}
          textStyle={{
            color: colors.NeutralGrey150,
          }}
          title="Tap"
          isLeft={true}
        /> */}
      </View>
      {/* <IMMultiChoiceRadioButton
          tapRadioButtonColor={colors.NeutralGrey120}
          list={data}
          onPress={()=>{}}
          isLeft={true}
          displayKey="label"
          value="value"
        /> */}
    </>
  );
};

export default RadioButtonDemo;