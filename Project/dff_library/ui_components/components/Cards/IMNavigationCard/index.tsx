import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../../atoms/colors';
import useStyles from './styles';
import { type IMNavigationProps } from './types';

const IMNavigationCard: React.FC<IMNavigationProps> = props => {
  const {
    children,

    linearGradientColor1 = colors.GradientOrangeStart,
    linearGradientColor2 = colors.GradientOrangeEnd,

    navigationStyleProp,
  } = props;
  const styles = useStyles();
  return (
    <View {...props}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[linearGradientColor1, linearGradientColor2]}
        style={[styles.navigationCardStyle, navigationStyleProp]}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default IMNavigationCard;
