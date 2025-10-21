import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../atoms/colors';
import useStyles from './styles';
import { type IMAccountCreditProps, accountInfo } from './types';

const IMAccountCreditCards: React.FC<IMAccountCreditProps> = props => {
  const {
    accountType,

    accountNumber,
    currentTitle,
    linearGradientColorEnd = colors.GradientOrangeEnd,
    linearGradientColorStart = colors.GradientOrangeStart,
    showTitle,
    title,

    backgroundImg,
    children,
    debit,
    iciciLogo,
    imageRightTop,
    imageLeftTop,
    partnerLogo,
    partnerName,
    statement,
    settings,

    amountBalance,

    showBalance,

    end = { x: 1, y: 0 },
    start = { x: 0, y: 1 },

    debitCardOnPress,
    statementOnPress,
    settingsOnPress,
    showBalanceOnPress,

    containerStyleProp,
    iciciLogoStyles,
    leftTopImageStyle,
    partnerLogoStyle,
    partnerNameStyle,
    rightEndFlowerStyle,
    showBalanceViewStyle,
    savingAcViewStyle,
    showValueViewStyle,

    acctNumStyle,
    balanceTxtStyle,
    depositTextStyle,
    savingAcTextStyle,
  } = props;
  const styles = useStyles();

  const rupee = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  const number = accountNumber || '';

  return (
    <>
      {accountType === accountInfo.SavingAc ||
      accountType === accountInfo.CreditCards ? (
        <LinearGradient
          start={start}
          end={end}
          colors={[linearGradientColorStart, linearGradientColorEnd]}
          style={[styles.accountCardStyle, containerStyleProp]}>
          <View style={[styles.imageTop,leftTopImageStyle]}>{imageLeftTop && imageLeftTop}</View>
          <View style={[styles.iciciLogoStyles,iciciLogoStyles]}>
              {iciciLogo}
            </View>
          <View style={[styles.rightEndFlower, rightEndFlowerStyle]}>
            {imageRightTop && imageRightTop}
          </View>
          <View style={styles.center}>{backgroundImg}</View>
          <View style={[styles.flexDirection]}>
            {accountType === accountInfo.CreditCards ? (
              <View style={[styles.flexDirection]}>
                <View style={[partnerLogoStyle, styles.partnerLogoStyle]}>
                  {partnerLogo}
                </View>
                <View style={[partnerNameStyle]}>{partnerName}</View>
              </View>
            ) : null}
          </View>
          <View style={[styles.showStyle]}>
            {showBalance ? (
              <View style={[styles.bankStyle]}>
                <Text style={[styles.showBalanceTex, balanceTxtStyle]}>
                  {currentTitle}{' '}
                </Text>
                <Text style={[styles.showBalanceTex, balanceTxtStyle]}>
                  {rupee.format(amountBalance ? amountBalance : 0)}
                </Text>
              </View>
            ) : (
              <TouchableOpacity onPress={showBalanceOnPress}>
                <View style={[styles.showBalanceView, showBalanceViewStyle]}>
                  <Text style={[styles.buttonSmall, balanceTxtStyle]}>
                    {showTitle}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.accountOuterStyle}>
            <View style={[styles.savingAcViewStyle, savingAcViewStyle]}>
              <View style={styles.flex}>
                <Text
                  style={[styles.tripTextStyle1, styles.flex, acctNumStyle]}>
                  {number}
                </Text>
                <Text style={[styles.savingAcTextStyle, savingAcTextStyle]}>
                  {title}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.accountOuterStyle}>
            <View style={styles.iconsViewStyle}>
              <TouchableOpacity onPress={debitCardOnPress}>
                {debit}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.statementStyle}
                onPress={statementOnPress}>
                {statement}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={settingsOnPress}
                style={styles.settingsStyle}>
                {settings}
              </TouchableOpacity>
            </View>
          </View>
          {children}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={start}
          end={end}
          colors={[linearGradientColorStart, linearGradientColorEnd]}
          style={[styles.accountCardStyle, containerStyleProp, styles.height]}>
            <View style={[styles.leftTopImageStyle,leftTopImageStyle]}>
              {imageLeftTop && imageLeftTop}
            </View>
          <View style={styles.flexDirection}>
            <View style={styles.center}>{backgroundImg}</View>
          </View>
          <View style={[styles.rightEndFlower, rightEndFlowerStyle]}>
            {imageRightTop && imageRightTop}
          </View>
          <View style={styles.position}>
            
            <Text style={[styles.depositTextStyle, depositTextStyle]}>
              {title}
            </Text>
            <Text style={[styles.tripTextStyle2, acctNumStyle]}>{number}</Text>
          </View>
          {children}
          <View style={[styles.position, styles.showDepositOuterStyle]}>
            <View
              style={[
                styles.showValueViewStyle,
                showValueViewStyle,
                { top: 0 },
              ]}>
              <Text style={[styles.buttonSmall, balanceTxtStyle]}>
                {currentTitle}
              </Text>
            </View>
          </View>
          <View style={styles.depositOuterStyle}>
            <View style={styles.iconsViewStyle}>
              <TouchableOpacity
                style={styles.statementStyle}
                onPress={statementOnPress}>
                {statement}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={settingsOnPress}
                style={styles.settingsStyle}>
                {settings}
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </>
  );
};

export default IMAccountCreditCards;