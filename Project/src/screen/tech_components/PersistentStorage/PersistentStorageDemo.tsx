import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from 'src/routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import styles from './style';
import {
  insertingAllMsgToLocalDB,
  selectErrorDetails,
} from '../../../../dff_library/techical_components/components/PersistentStorage/IMPersistentStorage/index';
import { IMPrimaryButton } from '../../../../dff_library/ui_components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { enviornment } from '../../../../dff_library/techical_components/components/EnviornmentVariable/IMEnviornmentVariable';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'PersistentStorageDemo'
>;

const PersistentStorageDemo = ({ navigation }: Props) => {
  const [message,setMessage] = useState('Initial State')
  const handleInsertData = async () => {
    const messageData = await insertingAllMsgToLocalDB({env:enviornment.CUG,isfromNative:false});
    if (messageData) {
      const errorCode = selectErrorDetails('LaBu1347');
      setMessage(errorCode);
    }
  };

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={'PersistentStorage'} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleInsertData}>
            <Text style={styles.button}>Create</Text>
          </TouchableOpacity>
          <Text style={[styles.button,{color:colors.Black}]}>Message - {message}</Text>

          <IMPrimaryButton 
          titleRecv='Get Async Data'
          onPress={async ()=>
        {
          let data:any = await AsyncStorage.getItem('https://www.imobilecdn-uat.icicibank.com/api/assets/icicibank/imobile/static-data/dff/messages.json');
          console.log('the data',JSON.parse(data));
        }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PersistentStorageDemo;
