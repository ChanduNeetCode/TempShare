import React, { useState } from 'react';
import { SafeAreaView, TextStyle, View, ViewStyle } from 'react-native';

import { colors } from '../../../atoms/colors';
import { ICLineScanAnyQRCode, ICMiniSuccessCenterFlower, ICSwipe, ICSwipeDisable } from '../../../atoms/icons';
import Styles from './styles';
import SwipeButton from './SwipeButton/index';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../utils/utility';

export type Props = {
  disabled?: boolean;
  isshouldResetAfterSuccess?: boolean;

  buttonHeightProp?: number;
  buttonWidthProp?: number;
  resetAfterSuccessAnimDelay?: number;
  thresholdlimit?: number;

  railBorderColor?:string,
  railFillBackgroundColor?:string,
  titleAfterSlide?: string;
  titleRecv?: string;
  type?: string;

  buttonStyleProp?: ViewStyle;
  swipeButtonStyle?: ViewStyle;
  mainContainerStyle?: ViewStyle;

  titleStyle?: TextStyle;

  backgroundImageforQR?: JSX.Element;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  onSwipeSuccess?: () => void;
};

const IMSwipeButton: React.FC<Props> = ({
  disabled ,
  isshouldResetAfterSuccess,

  railBorderColor,
  railFillBackgroundColor,
  titleAfterSlide ,
  titleRecv,
  type,

  buttonHeightProp = type === 'tall' ? actuatedNormalizeHeight(64) : type === 'qr' ? actuatedNormalizeHeight(72) : actuatedNormalizeHeight(52),
  buttonWidthProp = actuatedNormalizeWidth(328),
  resetAfterSuccessAnimDelay = 200,
  thresholdlimit = 70,

  buttonStyleProp = type === 'qr' ? Styles.qrStyle : Styles.swipeButtonmain,
  mainContainerStyle,
  swipeButtonStyle,

  titleStyle = type === 'qr' ? Styles.swipeButtonTitleqr : Styles.swipeButtonTitle,

  backgroundImageforQR = <ICMiniSuccessCenterFlower width={actuatedNormalizeWidth(120)} height={actuatedNormalizeHeight(150)} />,
  leftIcon = disabled ? <ICSwipeDisable width={actuatedNormalizeWidth(36)} height={actuatedNormalizeHeight(36)} /> : <ICSwipe width={actuatedNormalizeWidth(36)} height={actuatedNormalizeHeight(36)} />,
  rightIcon = <ICLineScanAnyQRCode width={40} height={40} />,

  onSwipeSuccess,
}) => {
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(titleRecv);
  const [zindex, setzindex] = useState(0);
  const updateSwipeStatusMessage = (message: any) => {
    setSwipeStatusMessage(message);
  }
  const CheckoutButton = () => {
    return (
      <View style={disabled ? [Styles.swipeButtonDisable, swipeButtonStyle] : type === 'qr' ? [Styles.swipeButtonqr, swipeButtonStyle] : [Styles.swipeButton,type==='tall'&&Styles.left,swipeButtonStyle]}>
        {leftIcon}
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={[mainContainerStyle]}>
        {(type === 'tall' || type === 'short') && (
          <SwipeButton
            containerStyles={buttonStyleProp}
            disabled={disabled}
            disabledRailBackgroundColor={colors.PastelAmber100}
            disabledThumbIconBackgroundColor={colors.PastelAmber100}
            disabledThumbIconBorderColor={colors.PastelAmber100}
            height={buttonHeightProp}
            onSwipeFail={() => updateSwipeStatusMessage(titleRecv)}
            onSwipeStart={() => updateSwipeStatusMessage(titleAfterSlide)}
            onSwipeSuccess={() => {
              onSwipeSuccess && onSwipeSuccess();
            }}
            railBackgroundColor={
              disabled ? colors.NeutralGrey110 : colors.PrimaryOrange100
            }
            railBorderColor={railBorderColor}
            railFillBackgroundColor={railFillBackgroundColor}
            railStyles={Styles.railStyle}
            resetAfterSuccessAnimDelay={resetAfterSuccessAnimDelay}
            shouldResetAfterSuccess={isshouldResetAfterSuccess}
            swipeSuccessThreshold={thresholdlimit}
            title={swipeStatusMessage}
            titleColor={disabled ? colors.NeutralGrey140 : colors.White}
            titleStyles={titleStyle}
            thumbIconBackgroundColor={
              disabled ? colors.NeutralGrey110 : 'transparent'
            }
            thumbIconBorderColor={
              disabled ? colors.NeutralGrey110 : colors.PrimaryOrange100
            }
            thumbIconComponent={CheckoutButton}
            thumbIconStyles={Styles.thumbIconStyle}
            thumbIconWidth={actuatedNormalizeWidth(50)}
            width={buttonWidthProp}
          />
        )}
        {(type === 'qr') && (
          <View style={{ flexDirection: 'row', width: buttonWidthProp }}>
            <View style={Styles.swipeqrcontainer}>
              <SwipeButton
                isBackgroundImage={true}
                backgroundImage={backgroundImageforQR}
                containerStyles={buttonStyleProp}
                height={buttonHeightProp}
                onSwipeFail={() => {
                  setzindex(1)
                  updateSwipeStatusMessage(titleRecv)
                }
                }
                onSwipeStart={() => {
                  updateSwipeStatusMessage(titleAfterSlide)
                }
                }
                onSwipeSuccess={() => {
                  setzindex(-1)
                  onSwipeSuccess && onSwipeSuccess();
                }
                }
                railBackgroundColor={colors.PrimaryOrange100}
                railBorderColor={railBorderColor}
                railFillBackgroundColor={railFillBackgroundColor}
                railStyles={Styles.railStyleqr}
                resetAfterSuccessAnimDelay={resetAfterSuccessAnimDelay}
                shouldResetAfterSuccess={isshouldResetAfterSuccess}
                swipeSuccessThreshold={thresholdlimit}
                title={swipeStatusMessage}
                titleColor={colors.White}
                titleStyles={titleStyle}
                thumbIconBackgroundColor={'transparent'}
                thumbIconBorderColor={colors.PrimaryOrange100}
                thumbIconComponent={CheckoutButton}
                thumbIconStyles={Styles.thumbIconStyleQR}
                thumbIconWidth={actuatedNormalizeWidth(60)}
                width={buttonWidthProp}
              />
            </View>
            <View style={[Styles.rightIconImageStyleQR, { zIndex: zindex }]}>
              {rightIcon}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default IMSwipeButton;
