
import React, { useEffect, useState } from 'react';
import { BackHandler, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../utils/HeaderComponent/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRefreshToken } from '../../../../dff_library/techical_components/components/IMTimeOutManager/IMTimeoutManager'
import IMGlobalHeader from '../../../../dff_library/techical_components/components/GlobalHeaders/IMGlobalHeaders';

type Props = NativeStackScreenProps<RootStackParamList, 'TimeOutManagementDemo'>;

const TimeOutManagementDemo = ({ navigation }: Props) => {

  const [refreshToken, setRefreshToken] = useState('')
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
  const handleOnPress = async () => {
    let url:any = ''
    const globalHeader = IMGlobalHeader.getInstance()
    const res = getRefreshToken(url)
    console.log("STEP-1")
  //  const res = await getRefreshToken()
  
  const tokenResponse: any = globalHeader.returnFT42Token()
  console.log("TESTING TOKEN",tokenResponse)
    }

  return (

    <View >
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent navigation={navigation} title={"TimeOutManagementDemo"} />
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 250 }}>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 0 }}>

            <TouchableOpacity onPress={handleOnPress} style={{
              alignItems: 'center',
              backgroundColor: colors.GradientOrangeEnd,
              borderRadius: 10,
              justifyContent: 'center',
              margin: 20,
              padding: 10,
            }}>
              <Text >
                GetRefreshToken
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default TimeOutManagementDemo