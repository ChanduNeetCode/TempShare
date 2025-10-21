import React from 'react';
import {
  Image,
  NativeModules,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { IMAdobeTargetProp } from './types';
import styles from './styles';
import typography from '../../../../ui_components/atoms/typography';
import { IMTallStoryStyleBanner } from '../../../../ui_components/components/Banners';
import { IMRegularCards } from '../../../../ui_components/components/index';
import { regularInfo } from '../../../../ui_components/components/Cards/IMRegularCard/types';

const { AdobeTargetManager } = NativeModules;

export const accountTargetListItemData = async (): Promise<any> => {
  try {
    const result = await AdobeTargetManager.setAccountTargetListItem();
    return result;
  } catch (error) {
    throw error;
  }
};

export const IMAdobeTargetA = ({
  onPressBannerA,
  mainViewContainerA,
  bannerViewStyleA,
  numberOfProgressBar,
  progressBarHeight,
  imagesToDisplay,
  bannerStylePropA,
  titleStylePropA,
  titltTextA,
  cardHeight,
  progressBarWidth,
}: IMAdobeTargetProp) => {
  return (
    <View style={[styles.centered, mainViewContainerA]}>
      <IMRegularCards
        regular={regularInfo.WhiteOutline}
        cardHeight={cardHeight}>
        <Text style={titleStylePropA}>{titltTextA}</Text>
        <View style={[styles.centeredBanner, bannerViewStyleA]}>
          <IMTallStoryStyleBanner
            numberOfProgressBars={numberOfProgressBar ? numberOfProgressBar : 4}
            progressBarWidth={progressBarWidth ? progressBarWidth : 65}
            progressBarHeight={progressBarHeight ? progressBarHeight : 2}
            onPress={
              onPressBannerA
                ? (id: number) => onPressBannerA(id)
                : (id: number) => console.log('Bannner is clicked id-', id)
            }
            imagesToDisplay={imagesToDisplay}
            containerStyleProps={
              bannerStylePropA ? bannerStylePropA : styles.bannerStyle
            }
          />
        </View>
      </IMRegularCards>
    </View>
  );
};

export const IMAdobeTargetB = ({
  descriptionText,
  imageUrlPropB,
  isAboveText,
  mainViewContainerB,
  descriptionTextStyleB,
  onPressBannerB,
  bannerViewContainerB,
}: IMAdobeTargetProp) => {
  return (
    <View style={[styles.centered, mainViewContainerB]}>
      {isAboveText && (
        <Text
          style={[
            typography.LinkSemiBold,
            styles.tallFullWidthUpperTextStyleB,
            descriptionTextStyleB,
          ]}>
          {descriptionText}
        </Text>
      )}
      <TouchableOpacity
        onPress={onPressBannerB}
        style={[styles.mainContainerStyleB, bannerViewContainerB]}>
        {!isAboveText && (
          <Text
            style={[
              typography.LinkSemiBold,
              styles.tallFullWidthTextStyleB,
              descriptionTextStyleB,
            ]}>
            {descriptionText}
          </Text>
        )}
        <Image
          source={{ uri: imageUrlPropB }}
          style={styles.bannerImageStyleB}
        />
      </TouchableOpacity>
    </View>
  );
};

export const IMAdobeTargetC = ({
  onPressBannerC,
  mainViewContainerC,
  buttonStyleC,
  buttonTextStyleC,
  buttonTextC,
  descriptionTextC,
  descriptionTextStyleC,
  descriptionStyleC,
  titleTextC,
  titleTextStyleC,
  bannerStyleC,
  headingTextC,
  headingTextStyleC,
}: IMAdobeTargetProp) => {
  return (
    <View style={[styles.centered, mainViewContainerC]}>
      <IMRegularCards regular={regularInfo.WhiteOutline} cardHeight={102}>
        <Text style={headingTextStyleC}>{headingTextC}</Text>
        <TouchableOpacity
          onPress={onPressBannerC}
          style={[styles.mainContainerStyleC, bannerStyleC]}>
          <Text
            style={[
              typography.LinkSemiBold,
              styles.tallFullWidthUpperTextStyleC,
              titleTextStyleC,
            ]}>
            {titleTextC}
          </Text>
          <View
            style={[
              styles.tallFullWidthItem1TextContainerC,
              descriptionStyleC,
            ]}>
            <Text
              style={[
                typography.LinkSemiBold,
                styles.tallFullWidthTextStyleC,
                descriptionTextStyleC,
              ]}>
              {descriptionTextC}
            </Text>
          </View>
          <View style={[styles.tallFullWidthButtonContainerC, buttonStyleC]}>
            <Text
              style={[
                styles.tallFullWidthButtonTextC,
                typography.ButtonLarge,
                buttonTextStyleC,
              ]}>
              {buttonTextC}
            </Text>
          </View>
        </TouchableOpacity>
      </IMRegularCards>
    </View>
  );
};
