import React from 'react';
import {
  Text,
  TouchableOpacity,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import styles from '../utils/styles';
import { ToastTypeValues } from '../utils/enum';
import {
  ICGeneralDefaultClose,
  ICGeneralDefaultCloseWhite,
  ICGeneralErrorAlertRed,
  ICGeneralErrorClose,
  ICGeneralFavouriteDefault,
  ICGeneralFavouriteDefaultWhite,
  ICGeneralSuccessClose,
  ICGeneralSuccessDone,
} from '../../../atoms/icons';

interface ToastProps {
  message: string;
  successOrFailureMessage?: string;
  toastType: string;

  defaultTextStyleProps?: TextStyle;
  errorTextStyleProps?: TextStyle;
  successOrFailureMessageStyleProps?: TextStyle;
  successTextStyleProps?: TextStyle;

  defaultStaticContainerStyleProps?: ViewStyle;
  errorContainerStyleProps?: ViewStyle;
  mainContainerStyle?: ViewStyle;
  seperatorLineStyle?: ViewStyle;
  successContainerStyleProps?: ViewStyle;

  closeTagImage?: JSX.Element;
  imageToDisplay?: JSX.Element;

  closeTagPress: () => void;
  viewSuccessOrFailureMessageDetails: () => void;
}

const IMToastMain: React.FC<ToastProps> = props => {
  const {
    message,
    successOrFailureMessage,
    toastType,

    defaultTextStyleProps,
    errorTextStyleProps,
    successOrFailureMessageStyleProps,
    successTextStyleProps,

    defaultStaticContainerStyleProps,
    errorContainerStyleProps,
    mainContainerStyle,
    seperatorLineStyle,
    successContainerStyleProps,

    closeTagImage,
    imageToDisplay,

    closeTagPress,
    viewSuccessOrFailureMessageDetails,
  } = props;
  return (
    <View style={[styles.mainContainerStyle, mainContainerStyle]}>
      {toastType === ToastTypeValues.Success ? (
        <View style={[styles.containerStyle, styles.successContainerStyle, successContainerStyleProps]}>
          <View style={styles.subContainerStyle}>
            {imageToDisplay || <ICGeneralSuccessDone style={styles.imageStyle} />}
          </View>
          <View style={styles.textContainerStyle}>
            <Text style={[styles.successTextStyle, successTextStyleProps]}>
              {message}{' '}
              <Text
                onPress={viewSuccessOrFailureMessageDetails}
                style={[styles.sucessErrorTextStyle, successOrFailureMessageStyleProps]}>
                {successOrFailureMessage}
              </Text>
            </Text>
          </View>
          <View style={[styles.seperatorLine, styles.seperatorLineSuccess, seperatorLineStyle]}></View>
          <TouchableOpacity
            onPress={closeTagPress}
            style={styles.subContainerStyle}>
            {closeTagImage || <ICGeneralSuccessClose style={styles.imageStyle} />}
          </TouchableOpacity>
        </View>
      ) : toastType === ToastTypeValues.Error ? (
        <View style={[styles.containerStyle, styles.errorContainerStyleClose, errorContainerStyleProps]}>
          <View style={styles.subContainerStyle}>
            {imageToDisplay || <ICGeneralErrorAlertRed style={styles.imageStyle} />}
          </View>
          <View style={styles.textContainerStyle}>
            <Text
              style={[styles.successTextStyle, errorTextStyleProps]}>
              {message}{' '}
              <Text
                onPress={viewSuccessOrFailureMessageDetails}
                style={[styles.errorSeperateText, successOrFailureMessageStyleProps,]}>
                {successOrFailureMessage}
              </Text>
            </Text>
          </View>
          <View style={[styles.seperatorLine, styles.seperatorLineError, seperatorLineStyle]}></View>
          <TouchableOpacity
            onPress={closeTagPress}
            style={styles.subContainerStyle}>
            {closeTagImage || <ICGeneralErrorClose style={styles.imageStyle} />}
          </TouchableOpacity>
        </View>
      ) : toastType === ToastTypeValues.DefaultCloseTag ? (
        <View
          style={[styles.containerStyle, styles.defaultContainerStyleClose, defaultStaticContainerStyleProps]}>
          <View style={[styles.textContainerStyle]}>
            <Text style={[styles.defaultTextStyle, defaultTextStyleProps]}>
              {message}
            </Text>
          </View>
          <View style={[styles.seperatorLine, seperatorLineStyle]}></View>
          <TouchableOpacity
            onPress={closeTagPress}
            style={[styles.subContainerStyle]}>
            {closeTagImage || <ICGeneralDefaultClose style={styles.imageStyle} />}
          </TouchableOpacity>
        </View>
      ) : toastType === ToastTypeValues.SuccessEphemeral ? (
        <View
          style={[styles.containerStyle, styles.successContainerStyle, successContainerStyleProps]}>
          <View style={styles.subContainerStyle}>
            {imageToDisplay || <ICGeneralSuccessDone style={styles.imageStyle} />}
          </View>
          <View style={styles.textContainerStyle}>
            <Text
              style={[styles.successEphermalText, successTextStyleProps,]}>
              {message}
            </Text>
          </View>
        </View>
      ) : toastType === ToastTypeValues.ErrorEphemeral ? (
        <View style={[styles.containerStyle, styles.errorContainerStyle, errorContainerStyleProps]}>
          <View style={styles.subContainerStyle}>
            {imageToDisplay || <ICGeneralErrorAlertRed style={styles.imageStyle} />}
          </View>
          <View style={styles.textContainerStyle}>
            <Text style={[styles.errorTextStyle, errorTextStyleProps]}>
              {message}
            </Text>
          </View>
        </View>
      ) : toastType === ToastTypeValues.DefaultStaticLeftIcon ? (
        <View style={[styles.containerStyle, styles.defaultStaticContainerStyle, defaultStaticContainerStyleProps]}>
          <View style={styles.subContainerStyle}>
            {imageToDisplay || <ICGeneralFavouriteDefaultWhite style={styles.imageStyle} />}
          </View>
          <View style={styles.textContainerStyle}>
            <Text style={[styles.defaultStaticTextStyle, defaultTextStyleProps]}>
              {message}
            </Text>
          </View>
        </View>
      ) : toastType === ToastTypeValues.DefaultStaticClosingTag ? (
        <View style={[styles.containerStyle, styles.defaultStaticContainerStyleClose, defaultStaticContainerStyleProps]}>
          <View style={styles.textContainerStyle}>
            <Text style={[styles.defaultStaticTextStyle, defaultTextStyleProps]}>
              {message}
            </Text>
          </View>
          <View style={[styles.seperatorLine, styles.seperatorLineDark, seperatorLineStyle]}></View>
          <TouchableOpacity
            onPress={closeTagPress}
            style={styles.subContainerStyle}>
            {closeTagImage || <ICGeneralDefaultCloseWhite style={styles.imageStyle} />}
          </TouchableOpacity>
        </View>
      ) : toastType === ToastTypeValues.DefaultLeftIcon ? (
        <View style={[styles.containerStyle, styles.defaultContainerStyle, defaultStaticContainerStyleProps]}>
          <View style={styles.subContainerStyle}>
            {imageToDisplay || <ICGeneralFavouriteDefault style={styles.imageStyle} />}
          </View>
          <View style={styles.textContainerStyle}>
            <Text style={[styles.defaultTextStyle, defaultTextStyleProps]}>
              {message}
            </Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
export default IMToastMain;
