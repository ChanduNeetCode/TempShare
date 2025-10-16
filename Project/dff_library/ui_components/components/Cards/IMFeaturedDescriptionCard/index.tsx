import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import useStyles from './styles';
import { type IMFeaturedProps, featuredInfo } from './types';
import colors from '../../../atoms/colors';
import { actuatedNormalizeWidth } from '../../../utils/utility';

const IMFeaturedDescriptionCards: React.FC<IMFeaturedProps> = props => {
  const {
    linearGradientColor1 = colors.GradientOrangeStart,
    linearGradientColor2 = colors.GradientOrangeEnd,
    typeClr,

    alignItems,
    bottomLeftImgStyle,
    bottomRightImgStyle,
    featuredCardStyleProp,
    LeftTopStyle,

    children,
    ImageBottomLeft,
    ImageBottomRight,
    ImageLeftTop,
    ImageRightTop,

    type,
    
    linearGradientEndDimension={ x: 1, y: 0 },
    linearGradientStartDimension={ x: 0, y: 1 },
  } = props;
  const styles = useStyles();

  return (
    <View>
      {type === featuredInfo.type1 ? (
        <View
          style={[
            (featuredCardStyleProp) ? featuredCardStyleProp : [styles.featuredCardStyle,{width:actuatedNormalizeWidth(242)}],
            { backgroundColor: typeClr },
          ]}>
          <View
            style={styles.topLeft}>
            <View style={[styles.LeftTopStyle, LeftTopStyle]}>
              {ImageLeftTop && ImageLeftTop}
            </View>
            <View style={[styles.alignItems, alignItems]}>
              {ImageRightTop && ImageRightTop}
            </View>
          </View>
          <View
            style={styles.bottomLeft}>
            <View style={[styles.bottomLeftImgStyle, bottomLeftImgStyle]}>
              {ImageBottomLeft && ImageBottomLeft}
            </View>
            <View style={[styles.bottomRightImgStyle, bottomRightImgStyle]}>
              {ImageBottomRight && ImageBottomRight}
            </View>
          </View>
          <View style={{ position: 'absolute' }}>{children}</View>
        </View>
      ) : type === featuredInfo.type2 ? (
        <LinearGradient
          start={linearGradientStartDimension}
          end={linearGradientEndDimension}
          colors={[linearGradientColor1, linearGradientColor2]}
          style={[styles.featuredCardStyle,{width:actuatedNormalizeWidth(328)}, featuredCardStyleProp]}>
          <View
            style={styles.topLeft}>
            <View style={[styles.LeftTopStyle, LeftTopStyle]}>
              {ImageLeftTop && ImageLeftTop}
            </View>
            <View style={[styles.alignItems, alignItems]}>
              {ImageRightTop && ImageRightTop}
            </View>
          </View>
          <View
            style={styles.bottomLeft}>
            <View style={[styles.bottomLeftImgStyle, bottomLeftImgStyle]}>
              {ImageBottomLeft && ImageBottomLeft}
            </View>
            <View style={[styles.bottomRightImgStyle, bottomRightImgStyle]}>
              {ImageBottomRight && ImageBottomRight}
            </View>
          </View>
          {children}
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.type3CardStyle,
            featuredCardStyleProp,
            { backgroundColor: typeClr },
          ]}>
          {children}
        </View>
      )}
    </View>
  );
};

export default IMFeaturedDescriptionCards;
