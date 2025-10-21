import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import { actuatedNormalizeWidth } from '../../../utils/utility';

export default StyleSheet.create({
  loaderView: {
    alignItems: 'center',
    backgroundColor: colors.White,
    flexDirection: 'row',
    height: '8%',
    justifyContent: 'flex-start',
    paddingLeft: actuatedNormalizeWidth(20),
    width: '90%',
  },
  transparentStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  loadercontainer: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
