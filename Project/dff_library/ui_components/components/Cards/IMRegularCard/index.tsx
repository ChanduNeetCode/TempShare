import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { type IMRegularCardProps, regularInfo } from './types';
import colors from '../../../atoms/colors';
import { actuatedNormalizeHeight } from '../../../utils/utility';

const IMRegularCards: React.FC<IMRegularCardProps> = props => {
  const { 
    regular,

    cardBgColor=colors.White,

    cardHeight, 

    regularCardStyleProps,

    children, 
   } =
    props;
  const styles = useStyles();

  return (
    <View {...props}>
      <View
        style={[
          styles.regularCardStyle1,regularCardStyleProps,
          {
            backgroundColor:
              regular == regularInfo.WhiteOutline ||
              regular == regularInfo.white
                ? cardBgColor
                : colors.CoolGrey100,
            borderWidth: regular == regularInfo.WhiteOutline ? 1 : 0,
            minHeight: cardHeight ? cardHeight : actuatedNormalizeHeight(102),
          },
        ]}>
        {children}
      </View>
    </View>
  );
};

export default IMRegularCards;
