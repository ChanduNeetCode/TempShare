import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../../atoms/colors';
import {
  PortraitL1,
  PortraitL2,
  PortraitL3,
  PortraitL4,
} from '../../../../atoms/icons';
import { typography } from '../../../../atoms';
import { STRINGS } from '../../utils/Constants';
import styles from '../styles';

const IMPortraitComp = () => {
  return (
    <>
      <View style={styles.popOverPortraitContainerForText}>
        <View style={styles.headerContainerStyle}>
          <Text
            style={[styles.popOverPortraitICICIText, typography.SubTitleBold1]}>
            {STRINGS.str_icici_card}
          </Text>
          <View style={styles.popOverPortraitUnderLine}></View>
        </View>
        <View style={styles.popOverPortraitSubHeaderContainer}>
          <Text style={styles.popOverPortraitZeroText}>{STRINGS.str_zero}</Text>
          <Text style={styles.popOverPortraitSubText}>
            {STRINGS.str_joining_fees}
          </Text>
        </View>
      </View>
      <View>
        <LinearGradient
          style={styles.popOverPortraitButtonContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}>
          <Text style={styles.popOverPortraitTouchableTextStyle}>
            {STRINGS.str_button_title}
          </Text>
        </LinearGradient>
      </View>
      {
        <View style={styles.popOverPortraitImageStyle}>
          <View style={styles.image1}>
            <PortraitL1 />
          </View>
          <View style={styles.image2}>
            <PortraitL2 />
          </View>
          <View style={styles.image3}>
            <PortraitL3 />
          </View>
          <View style={styles.image4}>
            <PortraitL4 />
          </View>
        </View>
      }
    </>
  );
};

export default IMPortraitComp;
