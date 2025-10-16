import { StyleSheet } from 'react-native';

import * as defaultStyle from '../../style';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    dots: {
      flexDirection: 'row',
    },
    endingDay: {
      borderBottomRightRadius: 2,
      borderTopRightRadius: 2,
      marginRight: 4,
    },
    periods: {
      alignSelf: 'stretch',
    },
    period: {
      backgroundColor: appStyle.dotColor,
      height: 4,
      marginVertical: 1,
    },
    startingDay: {
      borderBottomLeftRadius: 2,
      borderTopLeftRadius: 2,
      marginLeft: 4,
    },
    ...(theme['stylesheet.marking'] || {}),
  });
}
