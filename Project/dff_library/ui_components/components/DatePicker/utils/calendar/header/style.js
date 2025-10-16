import { StyleSheet } from 'react-native';

import * as defaultStyle from '../../../IMDatePicker/style';
import constants from '../../commons/constants';

export default function (theme = {}) {

  const appStyle = { ...defaultStyle, ...theme };

  const rtlStyle = constants.isRTL
    ? { transform: [{ scaleX: -1 }] }
    : undefined;

  return StyleSheet.create({
    arrowContainer: {
      flexDirection: 'row',
    },
    doneContainer: {
      backgroundColor: '#f0792e',
      borderRadius: 5,
      marginRight: 10,
      paddingVertical: 2,
      paddingHorizontal: 4,
    },
    dayHeader: {
      color: appStyle.textSectionTitleColor,
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      marginTop: 2,
      marginBottom: 7,
      textAlign: 'center',
      width: 32,

    },
    disabledDayHeader: {
      color: appStyle.textSectionTitleDisabledColor,
    },
    disabledArrowImage: {
      ...rtlStyle,
      tintColor: appStyle.disabledArrowColor,
    },
    doneText: {
      color: '#ffffff',
      fontSize: 11,
      fontWeight: '600',
      letterSpacing: 0.25,
    },
    headerContainer: {
      flexDirection: 'row',
    },
    header: {
      alignItems: 'center',
      backgroundColor: '#eff1f6',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // width:'100%',
    },
    imageStyle:{
      alignSelf: 'center' 
    },
    monthText: {
      color: appStyle.monthTextColor,
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      lineHeight: 20,
      letterSpacing: 0.25,
      margin: 10,
    },
    partialWeek: {
      paddingRight: 0,
    },
    partialHeader: {
      paddingHorizontal: 15,
    },
    pressableStyle:{
      flexDirection: 'row' 
    },
    week: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 7,
    },
    ...(theme['stylesheet.calendar.header'] || {}),
  });
}
