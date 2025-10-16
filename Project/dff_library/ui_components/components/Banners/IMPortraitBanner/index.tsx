import React from 'react';
import {  TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../atoms/colors';
import { BannersProps } from './types';
import IMPortraitComp from './utils/IMPortraitComp';
import styles from './styles';

const IMPortraitBanner: React.FC<BannersProps> = props => {
  const {
    linearGradientColorEnd,
    linearGradientColorStart,

    componentDisplay,
    
    containerStyleProps,
    
    start,
    end,

    onPress
  } = props;
  const renderPortraitBanner = () => {
    return (
      <TouchableOpacity style={[styles.popOverLinearGradientPortrait, containerStyleProps]} onPress={onPress}>
        <LinearGradient
        start={start ||  { x: 1, y: 0 }}
        end={end || { x: 0, y: 0 }}
        colors={[
          linearGradientColorStart || colors.LemonChiffon,
          linearGradientColorEnd ||colors.Solitude,
        ]}
        style={[styles.popOverLinearGradientPortrait, containerStyleProps]}>
        {componentDisplay || <IMPortraitComp/>}
      </LinearGradient>
      </TouchableOpacity>
    );
  };
  return renderPortraitBanner();
};

export default IMPortraitBanner;
