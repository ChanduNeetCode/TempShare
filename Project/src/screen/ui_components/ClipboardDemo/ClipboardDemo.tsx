/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { BackHandler, Text,TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { ICGeneralCopy, ICGeneralDisabledCopy } from '../../../../dff_library/ui_components/atoms/icons';
import { IMClipboard } from '../../../../dff_library/ui_components/components/index';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ClipboardDemo'>;

const ClipboardDemo = ({ navigation }: Props) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  const copiedText = 'I2133049948';

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
      <HeaderComponent navigation={navigation} title={STRINGS.str_clipboard} />
      <View style={styles.contentStyle}>
        <Text style={styles.copiedText}>{copiedText}</Text>
        <IMClipboard
          copiedContent={copiedText}
          copyFunc={copyText => {}}
          isSelect={false}
          selectImage={<ICGeneralDisabledCopy />}
          unselectImage={<ICGeneralCopy />}
        />
      </View>
      <TextInput
        placeholder="Enter"
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          width: 300,
          padding: 10,
        }}></TextInput>
    </>
  );
};

export default ClipboardDemo;
