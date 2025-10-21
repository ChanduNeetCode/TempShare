import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../atoms/colors';
import { DisclaimerEnumValues } from '../../DisclaimerInformation/utils/enum';
import { IMDisclaimerInformation } from '../../DisclaimerInformation';
import { type IMPreConformationDrawerProps } from './types';
import { ICBankLogo, ICGeneralDefaultCloseWhite } from '../../../atoms/icons';
import IMSwipeButton from '../../Buttons/IMButtons/IMSwipeButton';
import { IMTicketView } from '../../TicketView';
import { STRINGS } from './utils/Constants';
import useStyles from './styles';

const IMPreConformationDrawer: React.FC<
  IMPreConformationDrawerProps
> = props => {
  const styles = useStyles();

  const {
    isDisabled,
    isModalVisible = true,
    isTouchableDisable,
    isTransparent,
    isStatusBarTranslucent,

    amountText,
    bgcLinearGradientColor = colors.GradientOrangeStart,
    bgcLinearGradientSecondColor = colors.GradientOrangeEnd,
    buttonTitle,
    buttonType,
    payerDetailsText,
    payingText,
    receiverName,
    rupeeSymbol,
    title,

    linearGradientHeight = actuatedNormalizeHeight(229),

    amountContainerStyle,
    buttonStyleProp,
    closeButtonStyle,
    containerStyle,
    defaultContainerStyleProps,
    disclaimerBoxStyle,
    dottedLeftCircleStyle,
    dottedLinesContainerStyle,
    dottedRightCircleStyle,
    middleContainerStyle,
    modalChildStyleProp,
    payingAmountContainStyle,
    paymentButtonStyle,
    receiverDetailsStyle,
    ticketContainerStyleProp,
    titleContainerStyle,

    amountTextStyle,
    modalParentStyle,
    payerBankNameStyle,
    payingTextStyle,
    rctNameTextStyle,
    rupeeTextStyle,
    titleStyle,

    backgroundImageforQR,
    blurContainer,
    closeIcon,
    dateViewStyle,
    disclaimerBox,
    footerContainer,
    leftIcon,
    paymentCtabutton,
    paymentTypeContainer,
    rcInformationBankLogo = <ICBankLogo />,
    receiverBankInfo,
    rightIcon,
    ticketView,

    drawerContainer,
    middleContainer,
    topContainer,

    popupCancelCallback,
    onSwipeSuccess,
    handleModalTouchable
  } = props;

  const [modalVisible, setModalVisible] = useState(isModalVisible);

  const paymentTopContainer = () => {
    return (
      <>
        <View style={[styles.payingAmountContainStyle,payingAmountContainStyle]}>
          <Text style={[styles.payingTextStyle, payingTextStyle]}>
            {payingText || STRINGS.str_payingText}
          </Text>
        </View>
        <View style={[styles.amountContainerStyle,amountContainerStyle]}>
          <Text style={[styles.rupeeTextStyle, rupeeTextStyle]}>
            {rupeeSymbol || STRINGS.str_rupee}
          </Text>
          <Text style={[styles.amountTextStyle, amountTextStyle]}>
            {amountText || STRINGS.str_rupeeText}
          </Text>
        </View>
        {dateViewStyle || (
          <View style={styles.dateViewStyle}>
            <Text style={styles.onDateText}>{STRINGS.str_on_date_Tex}</Text>
            <Text style={styles.date}>{STRINGS.str_date}</Text>
          </View>
        )}
      </>
    );
  };
  const paymentMiddleContainer = () => {
    return (
      <View style={[styles.middleContainerStyle, middleContainerStyle]}>
        <View style={[styles.receiverDetailsStyle, receiverDetailsStyle]}>
          <Text style={[styles.rctNameTextStyle,rctNameTextStyle]}>
            {receiverName || STRINGS.str_receiverName}
          </Text>
          {receiverBankInfo || (
            <View style={styles.receiverBankDetailsStyle}>
              {rcInformationBankLogo}
              <Text style={styles.bankTextStyle}>
                {STRINGS.str_receiverbankName}
              </Text>
            </View>
          )}
        </View>
        <Text style={[styles.payerBankName, payerBankNameStyle]}>
          {payerDetailsText || STRINGS.str_payeeName}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={isTransparent || true}
        visible={modalVisible}
        statusBarTranslucent={isStatusBarTranslucent}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        {drawerContainer ? (
          drawerContainer()
        ) : (
          <View style={[styles.modalParentStyle, modalParentStyle]}>
            {blurContainer}
            <TouchableOpacity
            disabled={isTouchableDisable}
              style={styles.modalTouchableStyle}
              onPress={handleModalTouchable}
            />
            <View style={[styles.modalChildStyle, modalChildStyleProp]}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[bgcLinearGradientColor, bgcLinearGradientSecondColor]}
                style={[
                  styles.modalChildStyle,
                  { height: linearGradientHeight },
                ]}>
                <View style={[styles.titleContainerStyle, titleContainerStyle]}>
                  <Text style={[styles.titleStyle, titleStyle]}>
                    {title || STRINGS.str_title}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      if (popupCancelCallback) popupCancelCallback();
                      setModalVisible(false);
                    }}
                    style={[styles.containerItemAboveStyle]}>
                    <View style={[styles.closeButtonStyle, closeButtonStyle]}>
                      {closeIcon || (
                        <ICGeneralDefaultCloseWhite
                          height={actuatedNormalizeHeight(20)}
                          width={actuatedNormalizeWidth(20)}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
              <View
                style={[
                  styles.disclaimerContainStyle,
                  ticketContainerStyleProp,
                ]}>
                {ticketView || (
                  <IMTicketView
                    topContainer={topContainer || paymentTopContainer}
                    middleContainer={middleContainer || paymentMiddleContainer}
                    dottedLinesContainerStyle={
                      dottedLinesContainerStyle ||
                      styles.dottedLinesContainerStyle
                    }
                    dottedRightCircleStyle={
                      dottedRightCircleStyle || styles.dottedRightCircleStyle
                    }
                    dottedLeftCircleStyle={dottedLeftCircleStyle}
                    containerStyle={ containerStyle ||styles.containerStyle}
                    strokeDasharray="10,6"
                    strokeColor={colors.PastelAmber100}
                  />
                )}
              </View>
              {paymentTypeContainer && paymentTypeContainer}
              {disclaimerBox || (
                <View style={[styles.disclaimerBoxStyle, disclaimerBoxStyle]}>
                  <IMDisclaimerInformation
                    defaultContainerStyleProps={
                      defaultContainerStyleProps ||
                      styles.defaultContainerStyleProps
                    }
                    defaultTextStyleProps={styles.defaultTextStyleProps}
                    DisclaimerType={DisclaimerEnumValues.Default}
                    message={STRINGS.str_default_message}
                  />
                </View>
              )}
              <View style={[styles.paymentCtaStyle, paymentButtonStyle]}>
                {paymentCtabutton || (
                  <IMSwipeButton
                    buttonStyleProp={buttonStyleProp || styles.buttonStyleProp}
                    disabled={isDisabled || false}
                    titleRecv={buttonTitle || STRINGS.str_buttontitle}
                    type={buttonType || STRINGS.str_buttonType}
                    onSwipeSuccess={onSwipeSuccess}
                    backgroundImageforQR={backgroundImageforQR}
                    leftIcon={leftIcon}
                    rightIcon={rightIcon}
                    titleAfterSlide={buttonTitle || STRINGS.str_buttontitle}
                  />
                )}
              </View>
            </View>
            {footerContainer && footerContainer}
          </View>
        )}
      </Modal>
    </View>
  );
};
export default IMPreConformationDrawer;
