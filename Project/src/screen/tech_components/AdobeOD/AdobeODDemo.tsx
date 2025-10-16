import React, { useEffect } from 'react';
import { BackHandler, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import { STRINGS } from './constants';
import styles from './styles';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import {adobeODOfferRewards, updateXdmODOfferRewards,updateisplayInteractionXdmForOffer} from '../../../../dff_library/techical_components/components/AdobeOD/IMAdobeOD'


type Props = NativeStackScreenProps<RootStackParamList, 'AdobeODDemo'>;


const AdobeODDemo = ({ navigation }: Props) => {
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  const adobeODFuncall = async () => {
    const data=  await adobeODOfferRewards("4203535176");
    console.log('Adobe OD data --',data);
  };

  const UpdateadobeODFuncall = async () => {
    await updateXdmODOfferRewards("4203535176",'dps:personalized-offer:1a4c514f745dbd7c',0,true);
  };

  const UpdateadobeODFuncallFalse = async () => {
    await updateXdmODOfferRewards("4203535176",'dps:personalized-offer:1a4c514f745dbd7c',0,false);
  };
  const updateisplayInteractionXdm = async () => {
    await updateisplayInteractionXdmForOffer();
  };

  const UpdateadobeODFuncallDisplay = async () => {
    await updateisplayInteractionXdmForOffer();
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

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: colors.PrimaryOrange100 },
        ]}
        onPress={() => adobeODFuncall()}>
        <Text style={styles.buttonTextStyle} >
          Adobe OD Call
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: colors.PrimaryOrange100 },
        ]}
        onPress={() => UpdateadobeODFuncall()}>
        <Text style={styles.buttonTextStyle} >
         Update Adobe OD Call
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: colors.PrimaryOrange100 },
        ]}
        onPress={() => UpdateadobeODFuncallFalse()}>
        <Text style={styles.buttonTextStyle} >
         Update Adobe OD Call false
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: colors.PrimaryOrange100 },
        ]}
        onPress={() => UpdateadobeODFuncallDisplay()}>
        <Text style={styles.buttonTextStyle} >
         Update ALL Adobe OD Display
        </Text>
      </TouchableOpacity>



    </>
  );
};

export default AdobeODDemo;