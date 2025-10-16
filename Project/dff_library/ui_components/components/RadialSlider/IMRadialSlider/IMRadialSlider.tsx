import React, { FC, useRef } from 'react';
import { Dimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';

import arc1 from './arc1';
import arc2 from './arc2';
import Slider from './index';
import Star from './Star.svg';
import styles from './styles';
import { IMRadialSliderProps } from './types'
import { colors } from '../../../atoms';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale } from "../../../utils/utility";

const IMRadialSlider: FC<IMRadialSliderProps> = props => {
  const {
    amountSymbol,
    fillColor='#FAEFE8',
    monthSymbol,
    
    isSlider1StarDisplay,
    isSlider2StarDisplay,

    parentStyle,
    sideStarStyle,

    slider1Divisions = 2,
    slider2Divisions = 2,
    slider1InputText,
    slider2InputText,
    slider1Interval,
    slider1Max,
    slider1Min,
    slider2Interval,
    slider2Max,
    slider2Min,

    slider1SelectedData,
    slider2SelectedData,
  } = props
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
  const d = "M" + " " + "0" + " " + actuatedNormalizeHeight(0) + " " + "A" + " " + actuatedNormalizeModerateScale(420) + " " + actuatedNormalizeHeight(420) + " " + "0" + " " + "0" + " " + "0" + " " + SCREEN_WIDTH + " " + actuatedNormalizeHeight(0)
  const s1ref = useRef(null);
  const s2ref = useRef(null);
  var slider1sentdata=[];
  var slider2sentdata = [];
  var a = slider1Max;
  var b=slider2Min;
  let i = 0;
  function GradientBackground() {
    return (
     
      <LinearGradient
        colors={['white',fillColor]}
        start={{x: 0, y: 0.70}}
        end={{x: 0, y:0.49}}
        style={styles.centerTopUI}
      >
       <View></View>
      </LinearGradient>
    );
  }
  const centerUI = () => {
    return (
      <View style={styles.centerUIMainContainer}>
        
        <LinearGradient
          colors={[styles.linearGradient.color, colors.White, colors.PrimaryOrange100]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}

          style={styles.centerUIStyle}>
             {GradientBackground()}
        </LinearGradient> 
        {isSlider1StarDisplay && <View style={styles.upperStar}><Star width={styles.star.width} height={styles.star.height} /></View>}
        {isSlider2StarDisplay && <View style={styles.lowerStar}><Star width={styles.star.width} height={styles.star.height} /></View>}
      </View>
    )
  }
//this is for slider1 data pushing based on min and max(validation conditions given for start and end like start,end should be displayed and inbetween all the multiples of slider1interval should be displayed)

  if ((slider1Max % slider1Interval) != 0) {
    slider1sentdata.push(
      {
        id: i,
        name: a
      }
    )
  }
  for (a = slider1Max - (slider1Max % slider1Interval); a > slider1Min; a = a - slider1Interval, i++) {

    slider1sentdata.push(
      {
        id: i,
        name: a
      }
    )
  }
  slider1sentdata.push(
    {
      id: i,
      name: slider1Min
    }
  )
//this is for slider2 data pushing based on min and max(no validation conditions given for start and end)
  for (b; b<=slider2Max; b = b + slider2Interval, i++) {

    slider2sentdata.push(
      {
        id: i,
        name: b
      }
    )
  }
  return (
    <View style={[styles.mainContainer, parentStyle]}>
       <View style={styles.firstSlider}>
        <Slider
          amountSlider={true}
          amountSymbol={amountSymbol}
          refs={s1ref}
          sliderselectedData={slider1SelectedData}
          data={slider1sentdata}
          noOfDivisions={slider1Divisions}
          scrollToInputText={slider1InputText}
          sideStarStyle={sideStarStyle}
        />
     </View> 
      <View style={{zIndex:-100}}>
        <Svg>
      <Path id="curve" d={d} stroke="url(#grad)" strokeWidth="0" stroke-linecap="round" fill={fillColor} ></Path>
      </Svg>
      </View>
      {arc1()}
      <View style={styles.secondSlider}>
        <Slider
          amountSlider={false}
          refs={s2ref}
          monthSymbol={monthSymbol}
          sliderselectedData={slider2SelectedData}
          data={slider2sentdata}
          noOfDivisions={slider2Divisions}
          scrollToInputText={slider2InputText}
          sideStarStyle={sideStarStyle}
        />
      </View>
      {arc2()}
      {centerUI()}
    </View>
  );
}

export default IMRadialSlider;

