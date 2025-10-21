import React, { useEffect } from 'react';
import { Text, TouchableOpacity, BackHandler } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMUCJRelationManager } from '../../../../dff_library/techical_components/components/UCJRedirectionManager'
import { UCJRelationManagerProps } from '../../../../dff_library/techical_components/components/UCJRedirectionManager/IMUCJRedirectionManager/types';

import { STRINGS } from './constants';
import { styles } from './styles'


type Props = NativeStackScreenProps<RootStackParamList, 'UCJRelationManagerDemo'>;

const UCJRelationManagerDemo = ({ navigation }: Props) => {
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

      <TouchableOpacity
        onPress={() => {
          const result = IMUCJRelationManager(data);
          if (typeof result === 'string') {
          }
        }}
        style={styles.container}>
        <Text style={styles.message}>ClickHere</Text>
      </TouchableOpacity>
    </>
  );

}
export default UCJRelationManagerDemo;


const data: UCJRelationManagerProps = {
  baseURL: 'https://dummy.restapiexample.com',
  keys: ['api', 'v1', 'employees'],
  isOpenInAppBrowser: true
}

