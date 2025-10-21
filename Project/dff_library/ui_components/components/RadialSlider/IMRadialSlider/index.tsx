import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import { window } from './constants';
import SliderProps from './Slidertypes';
import DisabledStar from './DisabledStar.svg';
import styles from './styles';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const PAGE_WIDTH = window.width;

const Slider: React.FC<SliderProps> = props => {
  const {
    amountSlider,
    noOfDivisions = 2,
    refs,
    amountSymbol = amountSlider ? '₹' : '',
    data,
    sliderselectedData,
    sideStarStyle,
    scrollToInputText = amountSlider
      ? data[0].name
      : data[data.length - 1].name,
    monthSymbol = amountSlider ? '' : 'm',
  } = props;

  let modifiedData: any[] = [];
  data.map((item: any) => {
    if (item === data[data.length - 1]) {
      modifiedData.push(item.name);
    } else {
      modifiedData.push(item.name);
      for (let i = 0; i < noOfDivisions; i++) {
        modifiedData.push('.');
      }
    }
  });

  const [currentIndex, setcurrentIndex] = amountSlider
    ? React.useState<number>(0)
    : React.useState<number>(modifiedData.length - 1);
  const itemSize = 42;
  const centerOffset = PAGE_WIDTH / 2 - itemSize / 2;
  const starConditionCheck = amountSlider ? 0 : modifiedData.length - 1;

  useEffect(() => {
    refs.current.scrollTo({ index: modifiedData.indexOf(scrollToInputText) });
    setcurrentIndex(modifiedData.indexOf(scrollToInputText));
  }, [scrollToInputText]);

  useEffect(() => {
    if (modifiedData[currentIndex] === '.') {
      if (currentIndex % (noOfDivisions + 1) === 1) {
        refs.current.scrollTo({ index: currentIndex - 1 });
        setcurrentIndex(currentIndex - 1);
      } else {
        refs.current.scrollTo({ index: currentIndex + 1 });
        setcurrentIndex(currentIndex + 1);
      }
    } else {
      sliderselectedData && sliderselectedData(modifiedData[currentIndex]);
    }
  }, [currentIndex]);
  const handleclick = (a: number) => {
    setcurrentIndex(a);
  };

  const r = (a: number) => {
    if (a >= 100000) {
      a = a / 100000;
      return amountSymbol + a + 'L';
    } else {
      return amountSymbol + a + monthSymbol;
    }
  };

  const renderItem1 = (index: any, item: any) => {
    return (
      <>
        {item === '.' ? (
          <View style={styles.sliderMainContainer}>
            <View style={styles.sliderTextView}>
              <Text style={styles.sliderTextStyles}>
                <View
                  style={{
                    width: actuatedNormalizeWidth(2),
                    height: actuatedNormalizeHeight(7),
                    backgroundColor: '#f0792e85',
                    top: 0,
                    left: actuatedNormalizeModerateScale(25),
                  }}></View>
              </Text>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.sliderMainContainer}>
              <View style={styles.sliderTextView}>
                <Text style={styles.sliderTextStyles}>
                  <Text>{r(item)}</Text>
                </Text>
                {index == starConditionCheck &&
                  currentIndex != starConditionCheck && (
                    <View style={[styles.sideStar, sideStarStyle]}>
                      <DisabledStar
                        width={styles.star.width}
                        height={styles.star.height}
                      />
                    </View>
                  )}
              </View>
            </View>
          </>
        )}
      </>
    );
  };

  const animationStyle = React.useCallback(
    (value: number) => {
      'worklet';

      const itemGap = interpolate(
        value,
        [-4, -3, -2, -1, 0, 1, 2, 3, 4],
        [-9, -7, -5, -3, 0, 3, 5, 7, 9],
      );
      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;
      const translateY = interpolate(
        value,
        [-1.6, -0.8, 0, 0.8, 1.6],
        [45, 35, 35, 35, 45],
      );
      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.85, 0.85, 1.3, 0.85, 0.85],
      );

      const rotateZ =
        interpolate(
          value,
          [-2.3, -1.6, -0.9, 0, 0.9, 1.6, 2.3],
          [-20, -22, -10, 0, 10, 22, 20],
        ).toString() + 'deg';
      return {
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
          {
            rotateZ,
          },
          { scale },
        ],
      };
    },
    [centerOffset],
  );

  return (
    <View>
      <Carousel
        ref={refs}
        width={itemSize}
        height={actuatedNormalizeHeight(40)}
        style={[styles.carouselStyles]}
        onSnapToItem={(index: number) => {
          handleclick(index);
        }}
        scrollAnimationDuration={1}
        loop={false}
        data={modifiedData}
        renderItem={({ index, item }) => {
          return renderItem1(index, item);
        }}
        //customAnimation={animationStyle}
      />
    </View>
  );
};

export default Slider;
