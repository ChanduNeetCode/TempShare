import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../utils/styles';
import { TilesProps, TilesType } from '../types';
import { IMBadges } from '../../Badges';
import { badgesInfo } from '../../Badges/IMBadges/types';
import { colors } from '../../../atoms'

const IMStackedTiles: React.FC<TilesProps> = props => {
  const {
    isChip = false,
    isSelectedStyle,
    isTooltip = false,

    badgesBackgroundClr = colors.PrimaryOrange100,
    badgesTextClr,
    badgesTitle,

    cardTitle,

    tilesType,
    
    badgesTextStyle,
    styleContainedTextStyle,
    styleTitleStyle,

    badgeViewStyle,
    chipContainerStyle,
    styleContainedTileView,
    styleStackedMainBGViewStyle,
    styleStackedWithBG,
    tooltipContainerStyle,


    badgesLeftIcon,
    badgesRightIcon,
    cardIcon,
    tooltipContent,

    onClick,
  } = props;

  return (
    <>
      {tilesType == TilesType.StackedWithoutBackground ? (
        <TouchableOpacity
          onPress={onClick}
          style={[styles.containedTileView, styleContainedTileView]}>
          <View style={[styles.chipContainerStyle, chipContainerStyle]}>
            {isChip && badgesTitle &&
              <IMBadges
                type={badgesInfo.StandaloneBadges}
                badgesTextClr={badgesTextClr}
                badgesTitle={badgesTitle}
                badgesBackgroundClr={badgesBackgroundClr}
                badgesLeftIcon={badgesLeftIcon}
                badgesRightIcon={badgesRightIcon}
                badgesTextStyle={badgesTextStyle}
                badgesViewStyle={{...styles.chipContainerStyle,...badgeViewStyle}}
              ></IMBadges>}
          </View>
          <View >
            {isTooltip && tooltipContent && 
            <View style={[styles.tooltipContainerStyle,tooltipContainerStyle]}>
              {tooltipContent}
            </View>}
            {cardIcon}
          </View>
          <Text
            style={[
              styles.containedTextStyle,
              isSelectedStyle && styleContainedTextStyle
            ]}>
            {cardTitle}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onClick}
          style={[styles.stackedMainBGViewStyle, styleStackedMainBGViewStyle]}>
          <View style={[styles.chipContainerStyle, chipContainerStyle]}>
            {isChip && badgesTitle && 
              <IMBadges
                type={badgesInfo.StandaloneBadges}
                badgesTextClr={badgesTextClr}
                badgesTitle={badgesTitle}
                badgesBackgroundClr={badgesBackgroundClr}
                badgesLeftIcon={badgesLeftIcon}
                badgesRightIcon={badgesRightIcon}
                badgesViewStyle={{...styles.chipContainerStyle,...badgeViewStyle}}
              ></IMBadges>}
          </View>
          <View style={[styles.stackedWithBG, styleStackedWithBG]}>
          {isTooltip && tooltipContent && 
            <View style={[styles.tooltipContainerStyle,tooltipContainerStyle]}>
              {tooltipContent}
            </View>}
            {cardIcon}
          </View>
          <Text
            style={[
              styles.titleStyle,
              isSelectedStyle && styleTitleStyle
            ]}>
            {cardTitle}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
export default IMStackedTiles;
