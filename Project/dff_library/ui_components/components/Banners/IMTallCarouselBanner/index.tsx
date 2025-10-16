import React, { FC } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { BannersProps, componentDisplayProps } from './types';
import colors from '../../../atoms/colors';
import IMPrimaryButton from '../../Buttons/IMButtons/IMPrimaryButton';
import { MoneyLending } from '../../../atoms/icons';
import styles from './styles';
import { STRINGS } from '../utils/Constants';
import { actuatedNormalizeWidth } from '../../../utils/utility';

const IMTallCarouselBanner: FC<BannersProps> = props => {
  const {
    isShowsHorizontalScrollIndicator,
    isDisable,

    containerStyleProps,
    tallWidthItem1ButtonContainerStyle,
    tallWidthItem1TextContainerStyle,
    tallWidthItem2ButtonContainerStyle,

    tallWidthItem2ButtonTextStyle,
    tallWidthItemButtonTextStyle,

    tallWidthItemImageStyle,

    data,

    onPress,
  } = props;
  const renderItemTallCarousel = (item: componentDisplayProps) => {
    return (
      <View style={[styles.tallWidthItem1LinearContainer, containerStyleProps]}>
        <TouchableOpacity disabled={isDisable} onPress={() => onPress(item.id)}>
          <LinearGradient
            start={item.start ? item.start : { x: 0, y: 0 }}
            end={item.end ? item.end : { x: 1, y: 0 }}
            colors={[
              item.linerGradientColorStart || colors.GradientGoldStart,
              item.linearGradientColorEnd || colors.GradientGoldEnd,
            ]}
            style={[styles.tallWidthItem1LinearContainer, containerStyleProps]}>
            {item.componentToDisplay ||
              (item.id === 1 ? (
                <>
                  <View
                    style={[
                      styles.tallWidthItem1TextContainer,
                      tallWidthItem1TextContainerStyle,
                    ]}>
                    {item.tallWidth1Title}
                  </View>
                  <IMPrimaryButton
                    titleRecv={
                      item.buttonTitle || STRINGS.str_tallwidth_button_title
                    }
                    type={item.buttonType || 'small'}
                    widthSmall={
                      item.buttonWidthSmall || actuatedNormalizeWidth(106)
                    }
                    widthLarge={item.buttonWidthLarge}
                    buttonStyle={[
                      styles.tallWidthItem1ButtonContainer,
                      tallWidthItem1ButtonContainerStyle,
                    ]}
                    styleText={[
                      styles.tallWidthItemButtonText,
                      tallWidthItemButtonTextStyle,
                    ]}
                  />
                  <View
                    style={[
                      styles.tallWidthItemImageStyle,
                      tallWidthItemImageStyle,
                    ]}>
                    {item.displayImage || <MoneyLending />}
                  </View>
                </>
              ) : (
                <>
                  {item.tallWidthItem2Title}
                  <IMPrimaryButton
                    titleRecv={item.buttonTitle2 || STRINGS.str_button_title}
                    type={item.buttonType2 || 'small'}
                    widthSmall={
                      item.buttonWidthSmall2 || actuatedNormalizeWidth(106)
                    }
                    widthLarge={item.buttonWidthLarge2}
                    buttonStyle={[
                      styles.tallWidthItem2ButtonContainer,
                      tallWidthItem2ButtonContainerStyle,
                    ]}
                    styleText={[
                      styles.tallWidthItem2ButtonText,
                      tallWidthItem2ButtonTextStyle,
                    ]}
                  />
                </>
              ))}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item }: { item: componentDisplayProps }) =>
          renderItemTallCarousel(item)
        }
        showsHorizontalScrollIndicator={
          isShowsHorizontalScrollIndicator || false
        }
      />
    </View>
  );
};

export default IMTallCarouselBanner;
