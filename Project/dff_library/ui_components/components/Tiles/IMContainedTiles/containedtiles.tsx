import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { containedTiles } from '../utils/constants';
import { TilesProps, TilesType } from '../types';
import IMStackedTiles from '../IMStackedTiles/stackedtiles';
import styles from '../utils/styles';

const IMContainedTiles: React.FC<TilesProps> = props => {
  const {
    isContainedBackGroundColor,
    isIcon,
    isMoreButton,
    isTitle,
    isTitleDescription,

    title,
    titleDescription,

    descriptionStyle,
    styleContainedText,
    styleContainedTextStyle,
    titleStyles,

    headStyle,
    iconStyle,
    styleContainedIconView,
    styleContainedTile,
    styleContainedViewStyle,
    styleContainedViewWithBG,

    icon,
    viewLessIcon,
    viewMoreIcon,

    items,

    onClick,
  } = props;

  const [showMoreImages, setShowMoreImages] = useState(false);
  const [visibleImages, setVisibleImage] = useState(5);

  useEffect(() => {
    if (!isMoreButton && items) {
      setVisibleImage(items.length);
    }
  }, [isMoreButton, items]);

  const toggleShowMoreImages = () => {
    setShowMoreImages(!showMoreImages);
    if (showMoreImages) {
      setVisibleImage(5);
    } else if (items && items.length > 0) {
      setVisibleImage(items.length);
    }
  };

  return (
    <View
      style={[
        isContainedBackGroundColor && [
          styles.containedViewWithBG,
          styleContainedViewWithBG,
        ],
      ]}>
      <View style={[styles.headStyle, headStyle]}>
        {isIcon && <View style={[styles.iconStyle, iconStyle]}>{icon}</View>}
        {isTitle && (
          <View>
            <Text style={[styles.titleStyles, titleStyles]}>{title}</Text>
          </View>
        )}
      </View>
      {isTitleDescription && (
        <View>
          <Text style={[styles.descriptionStyle, descriptionStyle]}>
            {titleDescription}
          </Text>
        </View>
      )}
      <View style={[styles.containedViewStyle, styleContainedViewStyle]}>
        {items &&
          items.length > 0 &&
          items.slice(0, visibleImages).map((Item, index) => (
            <IMStackedTiles
              key={index}
              onClick={() => {
                onClick(index);
              }}
              isTooltip={Item.isTooltip}
              isChip={Item.isChip}
              tooltipContent={Item.tooltipContent}
              badgesBackgroundClr={Item.badgesBackgroundClr}
              badgesTextClr={Item.badgesTextClr}
              badgesTitle={Item.badgesTitle}
              badgeViewStyle={Item.badgeViewStyle}
              chipContainerStyle={Item.chipContainerStyle}
              tooltipContainerStyle={Item.tooltipContainerStyle}
              badgesLeftIcon={Item.badgesLeftIcon}
              badgesRightIcon={Item.badgesRightIcon}
              badgesTextStyle={Item.badgesTextStyle}
              isSelectedStyle={true}
              styleContainedTextStyle={styleContainedText}
              styleContainedTileView={styleContainedTile}
              tilesType={TilesType.StackedWithoutBackground}
              cardTitle={Item.title}
              cardIcon={Item.iconImage}
            />
          ))}
        {items && items.length >= 6 && isMoreButton && (
          <IMStackedTiles
            onClick={toggleShowMoreImages}
            isSelectedStyle={true}
            styleContainedTextStyle={styleContainedTextStyle}
            styleContainedTileView={styleContainedIconView}
            tilesType={TilesType.StackedWithoutBackground}
            cardTitle={
              showMoreImages
                ? containedTiles.lessTitle
                : containedTiles.moreTitle
            }
            cardIcon={showMoreImages ? viewLessIcon : viewMoreIcon}
          />


        )}
      </View>
    </View>
  );
};
export default IMContainedTiles;
