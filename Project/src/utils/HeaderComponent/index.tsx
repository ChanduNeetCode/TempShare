import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { type HeaderComponentProps } from './types';
import colors from '../../../dff_library/ui_components/atoms/colors';
import {
  Back,
  ICComponentTopNav,
} from '../../../dff_library/ui_components/atoms/icons';
import styles from './styles';

const HeaderComponent: React.FC<HeaderComponentProps> = props => {
  const { title, navigation } = props;
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  return (
    <View style={styles.height}>
      <LinearGradient
        useAngle={true}
        angle={89.96}
        colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}
        style={styles.linearGradientStyle} >
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={handleBackButtonClick}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>
            {title}
          </Text>
          {/* Removed for Design system demo builds */}
          {/* <TouchableOpacity>
            <ICComponentTopNav />
          </TouchableOpacity> */}
        </View>
      </LinearGradient>
    </View>
  );
};
export default HeaderComponent;
