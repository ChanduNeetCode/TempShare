import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS } from './constants';
import { styles } from './styles';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import { IMCDNInvocation } from '../../../../dff_library/techical_components/components/CDNInvocation/index';
import {
  ImageType,
} from '../../../../dff_library/techical_components/components/CDNInvocation/IMCDNInvocation/types';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { enviornment } from '../../../../dff_library/techical_components/components/EnviornmentVariable/IMEnviornmentVariable';
import {getDynamicData} from '../../../../dff_library/techical_components/components';
import { category, enumType,moduleName, subCategory, baseURLTypes } from '../../../../dff_library/techical_components/components/GetDynamicData/IMGetDynamicData/types';
import { IMPrimaryButton } from '../../../../dff_library/ui_components';

type Props = NativeStackScreenProps<RootStackParamList, 'CDNInvocationDemo'>;

const CDNInvocationDemo = ({ navigation }: Props) => {
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

  const [data, setData] = useState<string>();
  const [image, setImage] = useState();
  const getData = async ()=>{
    const res = await getDynamicData({
      enumtype:enumType.other,
      env:enviornment.DEV,
      baseURLtype:baseURLTypes.modules,
      moduleName:moduleName.investInsure,
      category:category.insure,
      subcategory:subCategory.lifeInsuranceCancerCover,
      jsonFileName: 'etb-ri',
    });
    if(res.success){
      setData(res.response)
    }else{
      console.log('the response',res)
      Alert.alert('Facing issue',res.response)
    }
   
  }
  const getImage = async ()=>{
    IMCDNInvocation({
      isImageRequired:true,
      invocationType: 'Image',
      dataRequestType: ImageType.CreditCard,
      assetName: 'Master-Rubyx.jpg',
      imageStyle:styles.imageStyle,
    }).then(res => {
      if(res.success)  setImage(res.response);
      else{Alert.alert('Facing issue',res.response)}
    });
  }
  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      <View style={styles.mainContainer}>
      <IMPrimaryButton
        titleRecv='Get Data'
        onPress={getData}
      />
          <Text style={styles.textStyle}>{data}</Text>
            <IMPrimaryButton
          titleRecv='Get Image'
          onPress={getImage}
          />
           {image && (
            <View style={styles.imageStyle1}>
                {image}
            </View>
          )}
      </View>
    </>
  );
};

export default CDNInvocationDemo;
