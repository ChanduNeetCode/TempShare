import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View } from 'react-native';

import styles from '../utils/styles';
import { colors } from '../../../atoms';
import { IMDisclaimerInformationProps } from './types';
import { DisclaimerEnumValues } from '../utils/enum';
import {
  Add,
  Arrow,
  BlockSmall,
  BulbTipLarge,
  BulbTipSmall,
  ICGeneralAlertOrange,
  Information,
  PeopleBlack,
  Verified,
  WithDraw,
} from '../../../atoms/icons';
import { IMInfoCard } from '../../../components/index';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const IMDisclaimerInformation: React.FC<
  IMDisclaimerInformationProps
> = props => {
  const {
    height,
    width,

    DisclaimerType,
    title,

    defaultTextStyleProps,
    neutralTextStyleProps,
    preCondSingleTextStyleProps,
    positiveInlineTextStyleProps,
    positiveLargeTextStyleProps,
    tipsLargeTextStyleProps,
    titleStyleProps,
    warningTextStyleProps,

    defaultContainerStyleProps,
    defaultOrangeContainerStyleProps,
    LeftImageStyle,
    neutralContainerStyleProps,
    preConfirmationSingleContainerProps,
    positiveInlineContainerStyleProps,
    positiveLargeContainerStyleProps,
    TextStyle,
    tipsLargeContainerStyleProps,
    warningContainerStyleProps,

    imageToDisplay,
    multiImage,

    message,
  } = props;

  return DisclaimerType == DisclaimerEnumValues.Default ? (
    <View style={[styles.defaultContainerStyle, defaultContainerStyleProps]}>
      <Text style={[styles.defaultTextStyle, defaultTextStyleProps]}>
        {message}
      </Text>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.DefaultOrange ? (
    <View
      style={[
        styles.defaultOrangeContainerStyle,
        defaultOrangeContainerStyleProps,
      ]}>
      <Text style={[styles.defaultOrangeTextStyle, defaultTextStyleProps]}>
        {message}
      </Text>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.PreConfirmationSingle ? (
    <View
      style={[
        styles.preConfirmationSingleContainer,
        preConfirmationSingleContainerProps,
      ]}>
      {imageToDisplay || <WithDraw style={styles.imageStyle} />}
      <View style={styles.textContainerStyle}>
        <Text
          style={[styles.preCondSingleTextStyle, preCondSingleTextStyleProps]}>
          {message}
        </Text>
      </View>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.CustomIconMulti ? (
    <View
      style={[
        styles.defaultContainerStyle2,
        defaultContainerStyleProps,
        { minHeight: height, width: width },
      ]}>
      <View style={styles.customIconContainerStyle}>
        <View style={styles.customIconMultiSubContainer1}>
          <View>{imageToDisplay || <Add style={styles.imageStyle} />}</View>
          <View style={styles.textContainerStyle}>
            <Text
              style={[
                styles.preCondSingleTextStyle,
                preCondSingleTextStyleProps,
              ]}>
              {message[0]}
            </Text>
          </View>
        </View>
        <View style={styles.customIconMultiSubContainer2}>
          <View>
            {multiImage ? multiImage : <BlockSmall style={styles.imageStyle} />}
          </View>
          <View style={styles.textContainerStyleCustomIconMultiple}>
            <Text
              style={[
                styles.preCondSingleTextStyle,
                preCondSingleTextStyleProps,
              ]}>
              {message[1]}
            </Text>
          </View>
        </View>
      </View>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.GeneralInformation ? (
    <View
      style={[
        styles.defaultContainerStyle2,
        defaultContainerStyleProps,
        { minHeight: height, width: width },
      ]}>
      <View style={styles.containerStyle}>
        <View>
          {imageToDisplay || <Information style={styles.imageStyle} />}
        </View>
        <View style={styles.textContainerStyleGeneraLInformation}>
          <Text
            style={[
              styles.preCondSingleTextStyle,
              preCondSingleTextStyleProps,
            ]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.TipsSmall ? (
    <View
      style={[
        styles.defaultContainerStyle3,
        defaultContainerStyleProps,
        { minHeight: height, width: width },
      ]}>
      <View style={styles.containerStyle}>
        <View>
          {imageToDisplay || (
            <BulbTipSmall style={styles.tipsSmallImageStyle} />
          )}
        </View>
        <View style={styles.textContainerTipsSmallStyle}>
          <Text
            style={[
              styles.preCondSingleTextStyle,
              preCondSingleTextStyleProps,
            ]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.TipsLarge ? (
    <View style={tipsLargeContainerStyleProps}>
      <IMInfoCard
        type={2}
        typeClr={colors.Warning100}
        infoCardViewStyleProp={styles.tipsLargeContainerStyle}
        infoCardsStyleProp={styles.tipsLargeSubContainer}
        LeftImage={
          <BulbTipLarge
            height={actuatedNormalizeHeight(43)}
            width={actuatedNormalizeWidth(43)}
            style={styles.imageStyleTipsLarge}
          />
        }
        TextStyle={TextStyle || styles.tipsLargeMargin}
        cardHeight={actuatedNormalizeHeight(84)}
        LeftImageStyle={LeftImageStyle || styles.tipsLargeMargin}
        children={
          <View style={styles.tipsLargeSubContainer2}>
            <Text style={[styles.tipsLargeHeaderTextStyle, titleStyleProps]}>
              {title}
            </Text>
            <Text style={[styles.tipsLargeTextStyle, tipsLargeTextStyleProps]}>
              {message}
            </Text>
          </View>
        }
      />
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.Neutral ? (
    <View style={[styles.neutralContainerStyle, neutralContainerStyleProps]}>
      <View style={styles.containerStyle1}>
        <View>
          {imageToDisplay || <Information style={styles.neutralImageStyle} />}
        </View>
        <View style={styles.textContainerStyle}>
          <Text style={[styles.neutralTextStyle, neutralTextStyleProps]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.PositiveInline ? (
    <View
      style={[
        styles.positiveInlineContainerStyle,
        positiveInlineContainerStyleProps,
      ]}>
      <View style={styles.containerStyle1}>
        <View>
          {imageToDisplay || <PeopleBlack style={styles.neutralImageStyle} />}
        </View>
        <View style={styles.textContainerStyle}>
          <Text
            style={[
              styles.positiveInlineTextStyle,
              positiveInlineTextStyleProps,
            ]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.PositiveSmall ? (
    <View
      style={[
        styles.positiveSmallContainerStyle,
        positiveInlineContainerStyleProps,
      ]}>
      <View style={styles.containerStyle1}>
        <View>
          {imageToDisplay || <Verified style={styles.neutralImageStyle} />}
        </View>
        <View style={styles.textContainerStyle}>
          <Text
            style={[
              styles.positiveInlineTextStyle,
              positiveInlineTextStyleProps,
            ]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  ) : DisclaimerType === DisclaimerEnumValues.PositiveLarge ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[colors.PastelGreen100, colors.White]}
      style={[
        styles.positiveLargeContainerStyle,
        positiveLargeContainerStyleProps,
      ]}>
      <View style={styles.containerStyle2}>
        <View>
          {imageToDisplay || <Arrow style={styles.neutralImageStyle} />}
        </View>
        <View style={styles.textContainerStyle}>
          <Text
            style={[
              styles.positiveLargeTextStyle,
              positiveLargeTextStyleProps,
            ]}>
            {message}
          </Text>
        </View>
      </View>
    </LinearGradient>
  ) : DisclaimerType === DisclaimerEnumValues.Warning ? (
    <View style={[styles.warningContainerStyle, warningContainerStyleProps]}>
      <View style={styles.containerStyle2}>
        <View>
          {imageToDisplay || (
            <ICGeneralAlertOrange style={styles.neutralImageStyle} />
          )}
        </View>
        <View style={styles.textContainerStyle}>
          <Text style={[styles.warningTextStyle, warningTextStyleProps]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
};
export default IMDisclaimerInformation;
