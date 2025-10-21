import { StyleSheet } from 'react-native';
import {
  actuatedNormalizeModerateScale
} from '../../../../utils/utility';
const Styles = StyleSheet.create({
  centerIconPosition: {
    position: 'absolute',
  },
  container: {
    borderRadius: 100 / 2,
    borderWidth: actuatedNormalizeModerateScale(1),
    justifyContent: 'center',
    margin: actuatedNormalizeModerateScale(5),
    overflow:'hidden'
  },
  title: {
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default Styles;
