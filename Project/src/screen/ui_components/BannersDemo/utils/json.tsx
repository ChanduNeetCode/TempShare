import React from 'react';
import { Text, View } from 'react-native';

import {  actuatedNormalizeWidth } from '../../../../utils/utility';
import colors from '../../../../../dff_library/ui_components/atoms/colors';
import { STRINGS } from './constants';
import styles from './styles';
import { typography } from '../../../../../dff_library/ui_components/atoms';

export const bannersData = [
  {
    backGroundColor: colors.PastelBlue100,
    description: STRINGS.str_loan_approval,
    id: 1,
    isFlowerImageDisplayBottom: true,
    isFlowerImageDisplayTop: true,
  },
  {
    backGroundColor: colors.PastelGreen110,
    description: STRINGS.str_loan_approval,
    id: 2,
    isFlowerImageDisplayBottom: true,
    isFlowerImageDisplayTop: true,
  },
];
export const bannersDataTallCarousel = [
  {
    buttonTitle: STRINGS.str_send_now,
    buttonType: 'small',
    buttonWidthSmall: actuatedNormalizeWidth(106),
    end: { x: 1, y: 0 },
    id: 1,
    linearGradientColorEnd: colors.GradientGoldEnd,
    linerGradientColorStart: colors.GradientGoldStart,
    start: { x: 0, y: 0 },
    tallWidth1Title: (
      <Text
        style={{
          ...typography.LinkSemiBold,
          color: colors.White,
          textAlign: 'left',
        }}>
        {STRINGS.str_message}
      </Text>
    )
  },
  {
    buttonTitle2: STRINGS.str_send_now,
    buttonType2: 'small',
    buttonWidthSmall2: actuatedNormalizeWidth(106),
    end: { x: 0, y: 0 },
    id: 2,
    linearGradientColorEnd: colors.Solitude,
    linerGradientColorStart: colors.LemonChiffon,
    start: { x: 1, y: 0 },
    tallWidthItem2Title: (
      <>
        <View style={styles.tallWidthItem2SubContainer}>
          <View style={styles.headerContainerStyle}>
            <Text style={styles.tallWidthItem2Header}>
              {STRINGS.str_icici_card}
            </Text>
            <View style={styles.tallWidthItem2UnderLine}></View>
          </View>
        </View>
        <View style={styles.tallWidthItem2SubHeaderContainer}>
          <Text style={styles.tallWidthItem2ZeroText}>{STRINGS.str_zero}</Text>
          <Text style={styles.tallWidthItem2SubText}>
            {STRINGS.str_joining_fees}
          </Text>
        </View>
      </>
    )
  },
];
