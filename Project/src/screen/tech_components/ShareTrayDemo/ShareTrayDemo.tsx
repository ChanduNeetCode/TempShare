import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { STRINGS } from './constants';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { ICGeneralShare } from '../../../../dff_library/ui_components/atoms/icons';
import styles from './styles';
import IMShareTray from '../../../../dff_library/techical_components/components/ShareTray/IMShareTray/index';
type Props = NativeStackScreenProps<RootStackParamList, 'ShareTrayDemo'>;

const ShareTrayDemo = ({ navigation }: Props) => {
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
      <HeaderComponent navigation={navigation} title={STRINGS.str_shareTray} />
      <View style={styles.iconStyle}>
        <ICGeneralShare
          onPress={() => {
            IMShareTray('Content Title','Test message','https://reactnative.dev/img/tiny_logo.png','https://reactnative.dev/img/tiny_logo.png');
          }}
        />
      </View>
      {/* <IMShareTray 
      message={'This is a demo sample message'}
      shareIcon={<ICGeneralShare/>}
      shareViewStyle={styles.iconStyle}
      /> */}
    </>
  );
};
export default ShareTrayDemo;
