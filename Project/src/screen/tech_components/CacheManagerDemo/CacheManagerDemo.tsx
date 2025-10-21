import { BackHandler, TouchableOpacity, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../utils/HeaderComponent';
import { RootStackParamList } from '../../../routes/RootStackParams';
import { useEffect } from 'react';
import React from 'react';
import { STRINGS } from './constants';
import { styles } from './styles';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import {
  getCacheData,
  setCacheData,
} from '../../../../dff_library/techical_components/components/CacheManager/index';
type Props = NativeStackScreenProps<RootStackParamList, 'CacheManagerDemo'>;

const CacheManagerDemo = ({ navigation }: Props) => {
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
  const setCacheDetails = (key: string, value: any) => {
    let res = setCacheData(key, value);
    console.log("set the cache data")
  };

 
  const header2 = {
    userID: '583907221',
    userID_Type: 'UID',
    secret: 'RriKVAggxZ7rq8NL6TO31iN5hypAstI=',
    trcID: 'user1-20221103141009-1',
    version: '0.0.0.1',
    'Content-Type': 'application/json',
    'x-apikey': 'UbKQOTXi1JD7AqKbgQCWeGTK9g96yxk6e4I6MAOCuzr3qJxG',
    orgID: 'ICI.583907221.583907221',
    Cookie: '221307be0bbb5367c6e410ac56ca1676=c69f93308f257eaeb62a37a96848d2c8',
  };
  return (
    <View style={styles.container}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setCacheDetails('url11', header2)}>
        <Text style={[styles.button, typography.ButtonLarge]}>
          Set Cache Data
        </Text>
      </TouchableOpacity>

     
    </View>
  );
};

export default CacheManagerDemo;