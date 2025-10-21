import React, { FC, useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from '../src/index';

import styles from './styles';
import { BannersBottomFlower, BannersFlower } from '../../../atoms/icons';
import { CarouselProps, componentDisplayProps } from './types';
import { actuatedNormalizeWidth } from '../../../utils/utility';

const IMCarousel: FC<CarouselProps> = props => {
  const {
    isAutoPlay,
    isDotsRequired = false,
    isLoop,

    autoPlayIntervalDuration = 3000,
    defaultIndex=0,
    inactiveSlideOpacity = 0.7,
    inactiveSlideScale = 0.9,
    spaceBetweenCards = actuatedNormalizeWidth(240),

    activeSlideAlignmentProp='start',

    data,
    
    activeDotStyle,
    containerStyleProps,
    dotsViewStyle,
    inactiveDotStyle,
    imageViewStyle,
    mainContainerStyle,
    
    onPress,
    onSnapToItem,
  } = props;

  const [index, setIndex] = useState(defaultIndex);
  const isCarousel = useRef(null);

  const renderItem = ({ item }: { item: componentDisplayProps }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => onPress(item)}
          activeOpacity={0.8}
          style={[
            styles.shortCarouselContainer,
            containerStyleProps,
            {
              backgroundColor: item.backGroundColor,
            },
          ]}>
          {item.flowerImageDisplayTop && (
            <View style={[styles.shortCarouselImageTop, imageViewStyle]}>
              <BannersFlower />
            </View>
          )}
          <View style={styles.shortCarouselComponentContainer}>
            {item.component}
          </View>
          {item.flowerImageDisplayBottom && (
            <View style={[styles.shortCarouselImageBottom, imageViewStyle]}>
              {<BannersBottomFlower />}
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const handleSnapToItem=(index: React.SetStateAction<number>)=>{
    setIndex(index)    
    if(onSnapToItem){
      onSnapToItem(index)
    }
  }
  return (
    <>
      <View style={mainContainerStyle}>
        {data && (
          <Carousel
            autoplayInterval={autoPlayIntervalDuration}
            data={data}
            ref={isCarousel}
            loop={isLoop}
            autoplay={isAutoPlay}
            firstItem={defaultIndex}
            renderItem={renderItem}
            sliderWidth={actuatedNormalizeWidth(430)}
            itemWidth={spaceBetweenCards}
            activeSlideAlignment={activeSlideAlignmentProp}
            inactiveSlideOpacity={inactiveSlideOpacity}
            inactiveSlideScale={inactiveSlideScale}
            onSnapToItem={handleSnapToItem}
          />
        )}
      </View>
      <View style={[styles.dotsViewStyling, dotsViewStyle]}>
        {isDotsRequired && data && (
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            tappableDots={true}
            carouselRef={isCarousel}
            dotStyle={[styles.activeDotStyle, activeDotStyle]}
            inactiveDotStyle={[styles.inactiveDotStyle, inactiveDotStyle]}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        )}
      </View>
    </>
  );
};

export default IMCarousel;
