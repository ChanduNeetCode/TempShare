import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
} from '../../../../../utils/utility';
import { StyleProps } from './types';

const styles = (props: StyleProps) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      height: props.radius * actuatedNormalizeHeight(2),
      justifyContent: 'center',
      width: props.radius * actuatedNormalizeWidth(2),
    },
    loaderContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      position: 'absolute',
    },
    rotatingContainer: {
      transform: [{ rotate: `${props.rotation}deg` }],
    },
  });
};

export default styles;
