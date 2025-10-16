import React from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';
import { STRINGS } from '../../utils/Constants';
import { Car } from '../../../../atoms/icons';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../../utils/utility';

const IMSquareBannerComp = () => {
  return (
    <>
      <View style={styles.popOverSquareViewContainer}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.portraitSquareTextStyle}>
            {STRINGS.str_no_documentation_needed}
          </Text>
          <View style={styles.popOverSquareUnderLineStyle}/>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.popOverSquareSubHeader}>
            {STRINGS.str_pre_approved_loan}
          </Text>
          <Text style={styles.popOverSquareSubHeader}>
            {STRINGS.str_car_loan}
          </Text>
        </View>
        <View style={styles.squarePortraitButtonStyle}>
          <Text style={styles.storyButtonTextStyle}>
            {STRINGS.str_button_title}
          </Text>
        </View>
      </View>
      <View style={styles.carStyle}>{<Car height={actuatedNormalizeHeight(150)} width={actuatedNormalizeWidth(360)} />}</View>
    </>
  );
};
export default IMSquareBannerComp;
