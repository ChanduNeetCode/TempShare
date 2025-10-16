import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import IMDialer from '../../../../dff_library/techical_components/components/Dialer/IMDialer/index';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { BackHandler, Button, View } from 'react-native';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../utils/HeaderComponent';
import { STRINGS } from './constants';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import styles from './style';
type Props = NativeStackScreenProps<RootStackParamList, 'DialerDemo'>;


const DialerDemo = ({ navigation }: Props) => {
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
    
   
   return(
    <>
<CustomStatusBar
gradientColorsArray={[
    colors.GradientOrangeStart,
    colors.GradientOrangeEnd,
  ]}
/>
<HeaderComponent
        navigation={navigation}
        title={STRINGS.str_Dialer}
      />
    <View style={styles.button}>
    <Button title={STRINGS.str_ButtonTitle} onPress={()=>{
        IMDialer('9876543210')
      }} />
    </View>
    </>

   ); 

};
export default DialerDemo;

