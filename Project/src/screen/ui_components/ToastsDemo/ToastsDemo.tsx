import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { actuatedNormalizeWidth } from '../../../utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { IMToast } from '../../../../dff_library/ui_components/components/Toasts';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { STRINGS, TOAST_DURATION } from './constants';
import { ToastTypeValues } from '../../../../dff_library/ui_components/components/Toasts/utils/enum';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ToastsDemo'>;
const ToastsDemo = ({ navigation }: Props) => {

  const toastTypes = [
    { key: 1, value: 'Default Left Icon', type: ToastTypeValues.DefaultLeftIcon },
    { key: 2, value: 'Default Right Icon', type: ToastTypeValues.DefaultCloseTag },
    { key: 3, value: 'Default Dark Left Icon', type: ToastTypeValues.DefaultStaticLeftIcon },
    { key: 4, value: 'Default Dark Right Icon', type: ToastTypeValues.DefaultStaticClosingTag },
    { key: 5, value: 'Success Left icon', type: ToastTypeValues.SuccessEphemeral },
    { key: 6, value: 'Success Close', type: ToastTypeValues.Success },
    { key: 7, value: 'Error Left icon', type: ToastTypeValues.ErrorEphemeral },
    { key: 8, value: 'Error Close', type: ToastTypeValues.Error },
  ];

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
  const [displayToast, setDisplayToast] = useState(false);
  const [showToastType, setToastType] = useState(ToastTypeValues.DefaultLeftIcon);
  const [showToastMessage, setToastMessage] = useState(STRINGS.str_success_ephemeral_message);
  
  const onPress = (toastType: string | number) => {
    if (toastType == 1) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.DefaultLeftIcon);
      setToastMessage(STRINGS.str_success_ephemeral_message);
    }
    else if (toastType == 2) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.DefaultCloseTag);
      setToastMessage(STRINGS.str_defaultCloseTag_message);
    }
    else if (toastType == 3) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.DefaultStaticLeftIcon);
      setToastMessage(STRINGS.str_success_ephemeral_message);
    }
    else if (toastType === 4) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.DefaultStaticClosingTag);
      setToastMessage(STRINGS.str_defaultCloseTag_message);
    }
    else if (toastType == 5) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.SuccessEphemeral);
      setToastMessage(STRINGS.str_success_ephemeral_message);
    }
    else if (toastType == 6) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.Success);
      setToastMessage(STRINGS.str_success_message);
    }
    else if (toastType == 7) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.ErrorEphemeral);
      setToastMessage(STRINGS.str_error_ephemeral_message);
    }
    else if (toastType == 8) {
      setDisplayToast(true);
      setToastType(ToastTypeValues.Error);
      setToastMessage(STRINGS.str_error_message);
    }
  };
  return (
    <View style={styles.mainViewStyle}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_toasts} />
      <IMDropdown
        parentDropDownStyle={styles.dropdownStyle}
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.SingleColumn}
        placeholderText='DefaultLeftIcon'
        data={toastTypes}
        onSelect={(selectedItem) => { onPress(selectedItem.key); }}
      />
      {displayToast && (
        <IMToast
          toastType={showToastType}
          showToast={value => { setDisplayToast(value); }}
          message={showToastMessage}
          viewSuccessOrFailureMessageDetails={() => {}}
          toastDisplayTime={TOAST_DURATION}
          successOrFailureMessage={showToastType === ToastTypeValues.Error ? STRINGS.str_error_label : STRINGS.str_success_label}
        />
      )}
    </View>
  );
};

export default ToastsDemo;