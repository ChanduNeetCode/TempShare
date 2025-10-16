import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';

const styles = () =>
  StyleSheet.create({
    container: {
      overflow: 'hidden',
      width: '100%',
    },
    defaultText: {
      color: colors.Black,
    },
    hiddenTextAbsolute: {
      color: 'transparent',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    hiddenTextAbsoluteCompact: {
      color: 'transparent',
      left: 0,
      position: 'absolute',
      top: 0,
    },
    hiddenEllipsisText: {
      color: 'transparent',
      position: 'absolute',
    },
    seeMoreContainer: {
      bottom: 0,
      flexDirection: 'row',
      position: 'absolute',
      right: 0,
    },
    seeMoreContainerEllipsisHidden: {
      bottom: 0,
      flexDirection: 'row',
      left: 0,
      position: 'absolute',
    },
    seeMoreButton: {
      flexDirection: 'row',
    },
    seeMoreText: {
      color: colors.PrimaryOrange120,
    },
    transparentBackground: {
      backgroundColor: 'transparent',
    },
    transparentColor: {
      color: 'transparent',
    },
  });
export default styles;
