import { StyleSheet } from 'react-native';

import * as defaultStyle from '../../../../IMDatePicker/style';
import constants from '../../../commons/constants';
import { colors} from '../../../../../../atoms';

export default function styleConstructor(theme = {}) {

  const appStyle = { ...defaultStyle, ...theme };

  return StyleSheet.create({
    alignedText: {
      marginTop: constants.isAndroid ? 4 : 6,
    },
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      width: 32,
    },
    container: {
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    dot: {
      borderRadius: 2,
      height: 4,
      marginTop: 1,
      opacity: 0,
      width: 4,
      ...appStyle.dotStyle,
    },
    disabledText: {
      color: appStyle.textDisabledColor,
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor,
    },
    inactiveText: {
      color: appStyle.textInactiveColor,
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 16,
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor,
    },
    text: {
      backgroundColor: colors.TransperantColor,
      color: appStyle.dayTextColor,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      lineHeight: 20,
      letterSpacing: 0.25,
      marginTop: constants.isAndroid ? 4 : 6,
      textAlign: 'center',
      width: 32,
      ...appStyle.textDayStyle,
    },
    today: {
      borderWidth: 1.56,
      borderColor: colors.PrimaryOrange100,
      backgroundColor: appStyle.todayBackgroundColor,
      borderRadius: 16,
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor,
    },
    todayText: {
      color: appStyle.todayTextColor,
    },
    visibleDot: {
      backgroundColor: appStyle.dotColor,
      opacity: 1,
    },
    ...(theme['stylesheet.day.basic'] || {}),
  });
}
