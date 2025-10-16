import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { paymentStatusInfo, type IMThankYouErrorPageProps } from './types';
import useStyles from './styles';
import { colors } from '../../../atoms';
import {
  ICCircleTick,
  ICPaymentFailed,
  ICPaymentPending,
  ICZigzag,
} from '../../../atoms/icons';

const IMThankYouErrorPage: React.FC<IMThankYouErrorPageProps> = props => {
  const styles = useStyles();

  const {
    paymentStatus,

    buttonDividerColor = colors.White,
    buttonLeftTitle,
    buttonRightTitle,
    buttonsBackgroundColor = colors.GradientOrangeStart,
    buttonTitleLeftColor,
    buttonTitleRightColor,
    parentViewBackgroundColor = colors.White,

    buttonsContainerViewStyle,
    circleImageStyleProp,
    mainContainer,
    parentViewStyle,

    buttonsVisible = true,
    enablePaymentStatusIcon = true,
    enableZigzagPattern = true,

    buttonLeftonPress,
    buttonRightonPress,
    children,
    paymentStatusIcon,

    buttonLeftIcon,
    buttonRightIcon,
  } = props;

  return (
    <View style={mainContainer}>
      <View
        style={[
          styles.ticketContainer,
          parentViewStyle,
          { backgroundColor: parentViewBackgroundColor },
        ]}>
        {enableZigzagPattern && (
          <View style={styles.zigzagImgStyle}>
            <View style={styles.zigzagLeftStyle}>
              <ICZigzag />
            </View>
            <View style={styles.zigzagRightStyle}>
              <ICZigzag />
            </View>
          </View>
        )}
        {children}
        {buttonsVisible && (
          <View style={styles.buttonParentViewStyle}>
            <View
              style={[
                styles.buttonViewStyle,
                buttonsContainerViewStyle,
                { backgroundColor: buttonsBackgroundColor },
              ]}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  if (buttonLeftonPress) buttonLeftonPress(buttonLeftTitle);
                }}>
                {buttonLeftIcon}
                <Text
                  style={[
                    styles.buttonTxtStyle,
                    { color: buttonTitleLeftColor },
                  ]}>
                  {buttonLeftTitle}
                </Text>
              </TouchableOpacity>
              <View style={styles.verticalLineViewStyle}>
                <View
                  style={[
                    styles.verticalLineStyle,
                    { borderColor: buttonDividerColor },
                  ]}></View>
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  if (buttonRightonPress) buttonRightonPress(buttonRightTitle);
                }}>
                {buttonRightIcon}
                <Text
                  style={[
                    styles.buttonTxtStyle,
                    { color: buttonTitleRightColor },
                  ]}>
                  {buttonRightTitle}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      {enablePaymentStatusIcon && (
        <View style={[styles.circleImgStyle, circleImageStyleProp]}>
          {paymentStatusIcon ? (
            paymentStatusIcon
          ) : paymentStatus === paymentStatusInfo.error ? (
            <ICPaymentFailed />
          ) : paymentStatus == paymentStatusInfo.pending ? (
            <ICPaymentPending />
          ) : (
            <View style={styles.iconStyles}>
              <ICCircleTick
                height={styles.iconSize.height}
                width={styles.iconSize.width}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};
export default IMThankYouErrorPage;
