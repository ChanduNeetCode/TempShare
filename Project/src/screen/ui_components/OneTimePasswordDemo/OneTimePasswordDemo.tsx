import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BackHandler } from 'react-native';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import IMOneTimePassword from '../../../../dff_library/ui_components/components/OneTimePassword';
import {
  ICGeneralChevronRight,
  ICGeneralClose,
  ICGeneralDisabledShow,
  ICGeneralHide,
  ICGeneralShow,
} from '../../../../dff_library/ui_components/atoms/icons';
import { IMPrimaryButton } from '../../../../dff_library/ui_components';

type Props = NativeStackScreenProps<RootStackParamList, 'OneTimePasswordDemo'>;

const OneTimePasswordDemo = ({ navigation }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
      <HeaderComponent navigation={navigation} title="One Time Password" />

      <IMPrimaryButton
        titleRecv='OTP'
        buttonStyle={{ alignSelf: 'center', marginTop: 20 }}
        onPress={() => { setIsVisible(true) }}
      />
      <IMOneTimePassword
        isDisable={true}
        isStatusBarTranslucent={true}
        closeimage={<ICGeneralClose width={20} height={20} />}
        disableEyeimage={<ICGeneralDisabledShow width={20} height={20}/>}
        eyecross={<ICGeneralHide width={20} height={20} />}
        eyeimage={<ICGeneralShow width={20} height={20}/>}
        handleBlurPart={() => setIsVisible(false)}
        handleCancel={() => setIsVisible(false)}
        handleSubmit={() => Keyboard.dismiss()}
        isvisible={isVisible}
        keyboardType={'numeric'}
        maxLength={6}
        onResendOTP={() => { }}
        otpnote="We have sent you an OTP to your registered phone number. Please enter it below to add this payee."
        otptext="Didn't received an OTP? Resend OTP in "
        resendIcon={<ICGeneralChevronRight width={20} height={20}/>}
        resendotp="Resend OTP"
        title="Verify OTP"
        titleotp="Enter OTP"
      />

    </>
  );
};

export default OneTimePasswordDemo;
