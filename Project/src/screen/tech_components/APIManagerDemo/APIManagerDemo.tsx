import React from 'react';
import { BackHandler, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import { useEffect } from 'react';
import { STRINGS } from './constants';
import { IMMockApiManager } from '../../../../dff_library/techical_components/components/MockAPIManager/index';
import {
  getCacheData,
  setCacheData,
} from '../../../../dff_library/techical_components/components/CacheManager/index';

type Props = NativeStackScreenProps<RootStackParamList, 'ApiManagerDemo'>;

const ApiManagerDemo = ({ navigation }: Props) => {
  const funcall = async () => {
    let res = IMMockApiManager('', '');
  };
  funcall();
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

  const getCacheDetails = (key: string) => {
    let res = getCacheData(key);
    console.log(res, '....cachedata');
    if (res.length == 0) {
      console.log(res[0].value, '....result ');
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
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      {/* <TouchableOpacity
      style={{height:120,width:120,alignItems:'center',backgroundColor:'red',left:100}}
      onPress={()=>{
      }}>

      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => getCacheDetails('url11')}>
        <Text>Get Cahe Data</Text>
      </TouchableOpacity>
      <Text></Text>
    </>
  );
};

export default ApiManagerDemo;
