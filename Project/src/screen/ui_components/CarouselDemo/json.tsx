import React from 'react';
import { Text, TouchableOpacity, Platform, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  ICLineBill,
  MoneyLending,
  ShortCar,
} from '../../../../dff_library/ui_components/atoms/icons';
import { STRINGS } from './constants';
import styles from './styles';
import typography from '../../../../dff_library/ui_components/atoms/typography';

export const CarouselData = [
  {
    flowerImageDisplayTop: false,
    flowerImageDisplayBottom: false,
    component: (
      <View style={styles.flexDirectionValue}>
        <View style={styles.shortCarouselCarImageContainer}>
          {<ICLineBill />}
        </View>
        <View style={styles.shorCarouselText}>
          <Text
            style={[typography.SubTitleBold1, styles.shortCarouselTextStyle1]}>
            {STRINGS.str_scratch_card1}
          </Text>
          <Text style={[styles.shortCarouselTextStyle2]}>
            {STRINGS.str_scratch_card2}
          </Text>
        </View>
      </View>
    ),
    backGroundColor: colors.LightYellowPallet,
    id: 1,
  },
  {
    flowerImageDisplayTop: false,
    flowerImageDisplayBottom: false,
    component: (
      <View style={styles.flexDirectionValue}>
        <View style={styles.shortCarouselCarImageContainer}>
          {<ICLineBill />}
        </View>
        <View style={styles.shorCarouselText}>
          <Text
            style={[typography.SubTitleBold1, styles.shortCarouselTextStyle]}>
            {STRINGS.str_scratch_card1}
          </Text>
          <Text
            style={[typography.BodySemiBold3, styles.shortCarouselTextStyle]}>
            {STRINGS.str_scratch_card2}
          </Text>
        </View>
      </View>
    ),
    backGroundColor: colors.PastelBlue100,
    id: 2,
  },
  {
    flowerImageDisplayTop: true,
    flowerImageDisplayBottom: true,
    component: (
      <View style={styles.flexDirectionValue}>
        <View style={styles.shortCarouselTextContainer1}>
          <Text
            style={[typography.BodySemiBold3, styles.shortCarouselTextStyle]}>
            {STRINGS.str_loan_approval}
          </Text>
        </View>
        <View style={styles.shortCarouselCarImageContainer}>
          {<ShortCar />}
        </View>
      </View>
    ),
    backGroundColor: colors.PastelBlue100,
    id: 3,
  },
  {
    flowerImageDisplayTop: true,
    flowerImageDisplayBottom: true,
    component: (
      <View style={styles.flexDirectionValue}>
        <View style={styles.shortCarouselTextContainer1}>
          <Text
            style={[typography.BodySemiBold3, styles.shortCarouselTextStyle]}>
            {STRINGS.str_loan_approval}
          </Text>
        </View>
        <View style={styles.shortCarouselCarImageContainer}>
          {<ShortCar />}
        </View>
      </View>
    ),
    backGroundColor: colors.PastelGreen110,
    id: 4,
  },
];

export const CarouselData1 = [
  {
    flowerImageDisplayTop: true,
    flowerImageDisplayBottom: true,
    component: (
      <>
        <View style={styles.tallWidthItem1TextContainer}>
          <Text style={[styles.tallWidthItem1TextStyle]}>
            {STRINGS.str_message}
          </Text>
        </View>
        <View
          style={[
            { flexDirection: 'row', alignItems: 'center', marginLeft: 12 },
          ]}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.tallWidthItemButtonContainer}>
            <LinearGradient
              style={styles.tallWidthItemButtonContainer}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}>
              <Text
                style={[
                  styles.tallWidthItemButtonText,
                  typography.ButtonLarge,
                ]}>
                Send Now
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <MoneyLending />
        </View>
      </>
    ),
    backGroundColor: colors.Success90,
    id: 1,
  },
  {
    flowerImageDisplayTop: true,
    flowerImageDisplayBottom: true,
    component: (
      <>
        <>
          <View style={styles.headerContainerStyle}>
            <Text style={styles.tallWidthItem2Header}>
              {STRINGS.str_icici_card}
            </Text>
          </View>
          <View style={styles.tallWidthItem2SubHeaderContainer}>
            <Text
              style={[styles.tallWidthItem2ZeroText, typography.HeadingBold3]}>
              {STRINGS.str_zero}
            </Text>
            <Text
              style={[styles.tallWidthItem2SubText, typography.HeadingBold3]}>
              {STRINGS.str_joining_fees}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              paddingBottom: Platform.OS === 'ios' ? 8 : 15,
            }}>
            <TouchableOpacity style={styles.tallCarouselButtonStyle}>
              <LinearGradient
                style={styles.tallWidthItemButtonContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}>
                <Text
                  style={[
                    styles.tallWidthItemButtonText,
                    typography.ButtonLarge,
                  ]}>
                  Send Now
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </>
      </>
    ),
    backGroundColor: colors.PastelBlue100,
    id: 2,
  },
];
