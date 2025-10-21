import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../../../IMDatePicker/style';
import { colors } from '../../../../../../atoms';

const FILLER_HEIGHT = 32;
export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      height: FILLER_HEIGHT,
      width: 32,
    },
    disabledText: {
      color: appStyle.textDisabledColor,
    },
    dotContainer: {
      bottom: 3,
      position: 'absolute',
    },
    inactiveText: {
      color: appStyle.textInactiveColor,
    },
    fillers: {
      flexDirection: 'row',
      height: FILLER_HEIGHT,
      left: 0,
      position: 'absolute',
      right: 0,
    },
    firstAndLastDay: {
      color:colors.PrimaryOrange100,
    },
    middleDays: {
      color:colors.PrimaryOrange80,
    },
    markedDaysText: {
      color:colors.White,
    },
    leftFiller: {
      backgroundColor: appStyle.calendarBackground,
      flex: 1,
      height: FILLER_HEIGHT,
    },
    rightFiller: {
      backgroundColor: appStyle.calendarBackground,
      flex: 1,
      height: FILLER_HEIGHT
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
    },
    text: {
      backgroundColor: colors.TransperantColor,
      color: appStyle.dayTextColor,
      fontFamily: appStyle.textDayFontFamily,
      fontSize: appStyle.textDayFontSize,
      fontWeight: appStyle.textDayFontWeight,
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
    },
    textStyles: {
      color:colors.White,
      fontWeight: '600',
      fontSize: 16,
    },
    todayText: {
      borderWidth: 1.56,
      borderRadius: 16,
      borderColor:colors.PrimaryOrange100,
      color:colors.PrimaryOrange100,
      fontWeight: '500',
      height: 32,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    wrapper: {
      alignItems: 'center',
      alignSelf: 'stretch',
      marginLeft: -1,
    },
  
    ...(theme['stylesheet.day.period'] || {}),
  });
}
