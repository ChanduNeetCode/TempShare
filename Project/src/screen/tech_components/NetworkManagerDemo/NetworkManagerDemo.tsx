import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Text,
  View
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS } from './constants';
import { RootStackParamList } from '../../../routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { getNetworkType,isGetConnection } from '../../../../dff_library/techical_components/components/NetworkManager/index';
import HeaderComponent from '../../../utils/HeaderComponent';
import typography from '../../../../dff_library/ui_components/atoms/typography';

type Props = NativeStackScreenProps<RootStackParamList, 'NetworkManagerDemo'>;

const NetworkManagerDemo = ({ navigation }: Props) => {
 const [networkType,setNetworkType] = useState<string | null>(null);
 const [isConnected,setIsConnected] = useState<boolean | null>(null);
 useEffect(()=>{
  const fetchdata = async () =>{
    try{
      const networkType=await getNetworkType();
      setNetworkType(networkType);
    }catch (error) {
      console.error('error fetching data',error);
    }
    try{
      const isConnected=await isGetConnection();
      setIsConnected(isConnected);
    }catch (error) {
      console.error('error fetching data',error);
    }
  };
  fetchdata();
 },[]);

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
    <CustomStatusBar gradientColorsArray={[colors.GradientOrangeStart, colors.GradientOrangeEnd]} />
    <HeaderComponent navigation={navigation} title={STRINGS.str_headerTitle} />
    <View style={{ flexDirection: 'column' }}>
      <Text
        style={[
          typography.ButtonLarge,
          { fontSize: 20, color: colors.PrimaryOrange120, marginTop: 30, marginLeft: 10 },
        ]}>
        Network type
      </Text>
      <Text style={[typography.BodyRegular1, { color: colors.Black }, {marginTop: 15}, {marginLeft: 10} ]}>
        {networkType}
      </Text>
      <Text
        style={[
          typography.ButtonLarge,
          { fontSize: 20, color: colors.PrimaryOrange120, marginTop: 30, marginLeft: 10 },
        ]}>
        Connection
      </Text>
      <Text style={[typography.BodyRegular1, { color: colors.Black }, , {marginTop: 15}, {marginLeft: 10}]}>
        {isConnected}
      </Text>
      </View>
    </>
  );
};

export default NetworkManagerDemo;