import { Platform } from 'react-native';
import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
} from '../../../../utils/utility';

const styles = {
  parentViewStyle: {
    backgroundColor: 'transparent',
    borderRadius: 4,
  },
  imageStyle: {
    height: actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(20),
    marginHorizontal: 5,
  },
  imageViewStyle: {
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 10,
  },
};
export default styles;
