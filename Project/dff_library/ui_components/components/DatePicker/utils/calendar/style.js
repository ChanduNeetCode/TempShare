import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../IMDatePicker/style';
export default function getStyle(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    container: {
      backgroundColor: appStyle.calendarBackground,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      paddingBottom:3,
      width: 328,
    },
    centeredIndicator: {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      bottom: 10,
      borderRadius: 10,
      justifyContent: 'center',
      padding: 10,
      position: 'absolute',
    },
    centeredText: {
      color: 'white',
      fontSize: 16,
    },
    dayContainer: {
      alignItems: 'center',
      flex: 1,
    },
    emptyDayContainer: {
      flex: 1,
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground,
    },
    monthYearPickerContainer: {
      borderColor: 'gray',
      borderRadius: 10,
      flexDirection: 'row',
      gap: 16,
      height: 220,
      marginLeft: 15.5,
      marginTop: 8,
      width: 297,
    },
    monthItem: {
      borderColor: '#e7e8e9',
      height: 44,
    },
    monthYearPickerFlatList: {
      left: 8,
      width: 140.5,
    },
    monthText: {
      color: '#7D8287',
      fontSize: 12,
      fontFamily: 'Mulish',
      fontWeight: '400',
      height: 44,
      lineHeight: 16,
      letterSpacing: 0.25,
      textAlignVertical: 'center',
    },
    selectedMonthText: {
      color: '#202428',
      fontWeight: '700',
    },
    pickerCenter: {
      backgroundColor: '#eff1f6',
      borderRadius: 10,
      height: 44,
      position: 'absolute',
      top: 88,
      width: '100%',
    },
    week: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: appStyle.weekVerticalMargin,
    },
    ...(theme['stylesheet.calendar.main'] || {}),
  });
}
