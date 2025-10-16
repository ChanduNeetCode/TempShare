import React, { useEffect } from 'react';
import { Text, TouchableOpacity, BackHandler } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  generateUcjUrl,
  IMUCJCategory,
  IMUCJParameter,
} from '../../../../dff_library/techical_components/components/UCJUrl';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'UCJUrlDemo'>;

const ucjParamererData: IMUCJParameter = {
  spdcWaiverFlag: 'Y',
  accountNumber: '021201563583',
  firstName: 'ICICI',
  lastName: 'XYZ',
  destProd: 'AL - PA',
  mobNum: '9999999999',
  userId: '515793094',
  dob: '01111986',
  loanAmt: '2000000',
  state: 'KARNATAKA',
  tenure: '84',
  apiTime: '0720220349121',
};

const UCJUrlDemo = ({ navigation }: Props) => {
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
      <HeaderComponent navigation={navigation} title={'UCJ Url'} />

      <TouchableOpacity
        onPress={async () => {
          let result = await generateUcjUrl(
            IMUCJCategory.UCJ_AUTO_LOAN_DD,
            ucjParamererData,
          );
          console.log(result);
        }}
        style={styles.container}>
        <Text style={styles.message}>ClickHere</Text>
      </TouchableOpacity>
    </>
  );
};
export default UCJUrlDemo;
