import { Platform, StyleSheet } from 'react-native';

import {colors} from '../../../../atoms';

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
    backgroundColor: 'transparent',
  },
  containerVisible: {
    opacity: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popover: {
    ...Platform.select({
      ios: {
        shadowColor: colors.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        backgroundColor: 'transparent',
      },
    }),
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 0 : -23,
  },
  content: {
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: '#f2f2f2',
  },
  arrow: {
    position: 'absolute',
    borderTopColor: '#f2f2f2',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  toolTiptextStyle: {
    color: colors.White,
    alignItems: 'center',
  },
};
export default styles;
