import React, { useEffect } from 'react';
import { TextStyle, ViewStyle } from 'react-native/types';

import { ToastTypeValues } from '../utils/enum';
import IMToastMain from '../components/toastsComponent';

interface ToastIndexProps {
  toastDisplayTime: number;

  message: string;
  successOrFailureMessage?: string;
  toastType: string;

  defaultTextStyleProps?: TextStyle;
  errorTextStyleProps?: TextStyle;
  successOrFailureMessageStlyeProps?: TextStyle;
  successTextStyleProps?: TextStyle;

  defaultStaticContainerStyleProps?: ViewStyle;
  errorContainerStyleProps?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  successContainerStyleProps?: ViewStyle;

  closeTagImage?: JSX.Element;
  imageToDisplay?: JSX.Element;

  viewSuccessOrFailureMessageDetails: () => void;
  showToast: (value: boolean) => void;
}

const IMToast: React.FC<ToastIndexProps> = props => {
  const {
    toastDisplayTime,

    message,
    successOrFailureMessage,
    toastType,

    defaultTextStyleProps,
    errorTextStyleProps,
    successOrFailureMessageStlyeProps,
    successTextStyleProps,

    defaultStaticContainerStyleProps,
    errorContainerStyleProps,
    mainContainerStyle,
    successContainerStyleProps,

    closeTagImage,
    imageToDisplay,

    viewSuccessOrFailureMessageDetails,
    showToast
  } = props;

  useEffect(() => {
    if (toastType === ToastTypeValues.Success) {
      showToast(true);
    } else if (toastType === ToastTypeValues.Error) {
      showToast(true);
    } else if (toastType === ToastTypeValues.SuccessEphemeral) {
      setTimeout(() => {
        showToast(false);
      }, 1 * toastDisplayTime);
    } else if (toastType === ToastTypeValues.ErrorEphemeral) {
      setTimeout(() => {
        showToast(false);
      }, 1 * toastDisplayTime);
    } else if (toastType === ToastTypeValues.DefaultCloseTag) {
      showToast(true);
    } else if (toastType === ToastTypeValues.DefaultStaticClosingTag) {
      showToast(true);
    } else if (toastType === ToastTypeValues.DefaultLeftIcon) {
      setTimeout(() => {
        showToast(false);
      }, 1 * toastDisplayTime);
    } else if (toastType === ToastTypeValues.DefaultStaticLeftIcon) {
      setTimeout(() => {
        showToast(false);
      }, 1 * toastDisplayTime);
    }
  });
  return (
    <IMToastMain
      closeTagPress={() => {
        showToast(false);
      }}
      closeTagImage={closeTagImage}
      imageToDisplay={imageToDisplay}
      message={message}
      successOrFailureMessage={successOrFailureMessage}
      toastType={toastType}
      viewSuccessOrFailureMessageDetails={viewSuccessOrFailureMessageDetails}
      errorContainerStyleProps={errorContainerStyleProps}
      errorTextStyleProps={errorTextStyleProps}
      defaultTextStyleProps={defaultTextStyleProps}
      defaultStaticContainerStyleProps={defaultStaticContainerStyleProps}
      mainContainerStyle={mainContainerStyle}
      successContainerStyleProps={successContainerStyleProps}
      successTextStyleProps={successTextStyleProps}
      successOrFailureMessageStyleProps={successOrFailureMessageStlyeProps}
    />
  );
};

export default IMToast;
