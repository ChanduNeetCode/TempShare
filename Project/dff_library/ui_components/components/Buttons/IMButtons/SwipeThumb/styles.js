import { StyleSheet } from 'react-native';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale
} from '../../../../utils/utility';
const borderWidth =   actuatedNormalizeModerateScale(3);
const margin = actuatedNormalizeModerateScale(1);
const maxContainerHeight = actuatedNormalizeHeight(100);
const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    borderRadius: maxContainerHeight / 2,
    borderRightWidth: actuatedNormalizeWidth(0),
    borderWidth,
    margin,
  },
  containerRTL: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    borderRadius: maxContainerHeight / 2,
    borderLeftWidth: actuatedNormalizeWidth(0),
    borderWidth,
    margin,
  },
  icon: {
    alignItems: 'center',
    borderRadius: maxContainerHeight / 2,
    borderWidth: actuatedNormalizeModerateScale(2),
    justifyContent: 'center',
    marginVertical: -borderWidth,
    overflow:'hidden'
  },
});
export default Styles;
export { borderWidth, margin };
