import React, { FC, useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from '../src/index';

import styles from './styles';
import { BannersBottomFlower, BannersFlower } from '../../../atoms/icons';
import { CarouselProps, componentDisplayProps1 } from './types';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const IMTallCarousel: FC<CarouselProps> = props => {
  const {
    isAutoPlay,
    isDotsRequired = false,
    isLoop,

    autoPlayIntervalDuration = 3000,
    defaultIndex=0,
    inactiveSlideOpacity = 0.7,
    inactiveSlideScale=0.9,
    spaceBetweenCards = actuatedNormalizeWidth(240),

    data,
    activeSlideAlignmentProp='start',
    activeDotStyle,
    containerStyleProps,
    dotsViewStyle,
    inactiveDotStyle,

    mainContainerStyle,

    onPress,
    onSnapToItem,
  } = props;

  const [index, setIndex] = useState(defaultIndex);
  const isCarousel = useRef(null);

  const renderItem = ({ item }: { item: componentDisplayProps1 }) => {
    return (
      <View
        style={[
          styles.tallWidthItem1LinearContainer,
          containerStyleProps,
          {
            backgroundColor: item.backGroundColor,
            justifyContent: 'space-around',
          },
        ]}>
        <TouchableOpacity
          onPress={() => onPress(item)}
          style={{ justifyContent: 'space-around' }}>
          {item.flowerImageDisplayTop && (
            <View style={styles.tallCarouselImageTop}>
              <BannersFlower
                width={actuatedNormalizeWidth(80)}
                height={actuatedNormalizeHeight(80)}
              />
            </View>
          )}
          {item.component}
          {item.flowerImageDisplayBottom && (
            <View style={styles.tallCarouselImageBottom}>
              {
                <BannersBottomFlower
                  width={actuatedNormalizeWidth(80)}
                  height={actuatedNormalizeHeight(80)}
                />
              }
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
          firstItem={defaultIndex}
          autoplay={isAutoPlay}
          renderItem={renderItem}
          sliderWidth={actuatedNormalizeWidth(430)}
          inactiveSlideOpacity={inactiveSlideOpacity}
          inactiveSlideScale={inactiveSlideScale}
          itemWidth={spaceBetweenCards}
          onSnapToItem={handleSnapToItem}
          activeSlideAlignment={activeSlideAlignmentProp}
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

export default IMTallCarousel;
