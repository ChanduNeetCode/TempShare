import React, { useEffect } from 'react';
import { BackHandler, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../utils/HeaderComponent/index';
import {
  sendNotification,
  getNotification,
} from '../../../../dff_library/techical_components/components/EventRegister/IMEventRegister';

type Props = NativeStackScreenProps<RootStackParamList, 'EventRegisterDemo'>;

const EventRegisterDemo = ({ navigation }: Props) => {
  // useEffect(()=>{
  //   const subscribe:any= EventRegister.addEventListener(emitConfig.API_CALLED,(msg)=>{
  //     console.log(msg,"..../testing");
  //   })
  // })

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
    <View>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent
        navigation={navigation}
        title={'Event register'}
      />
      <SafeAreaView>
      <TouchableOpacity   onPress={async () => {
            sendNotification('API_CALLED', 'hi');
            console.log(await getNotification('API_CALLED'), '...press');
          }} style={{
              alignItems: 'center',
              backgroundColor: colors.GradientOrangeEnd,
              borderRadius: 10,
              justifyContent: 'center',
              margin: 20,
              padding: 10,
            }}>
              <Text >
               Notifications
              </Text>
            </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
export default EventRegisterDemo;
