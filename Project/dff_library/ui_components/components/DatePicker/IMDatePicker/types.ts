import { ViewStyle } from "react-native";

export interface IMDatePickerProps {
  datePickerType: 'rangePicker' | 'singlePicker';

  disableAllTouchEventsForDisabledDays?: boolean;
  enableSwipeMonths?: boolean;
  hideArrows?: boolean;
  isMonthDropDown?: boolean;
  isMonthTouchDisable?: boolean;

  intialDate?: string;
  minDate?: string;
  maxDate?: string;
  doneText?: string;

  onDateSelect: (date: string | string[]) => void;

  rightArrowIcon?: JSX.Element;
  leftArrowIcon?: JSX.Element;

  theme?: Theme;
  numberOfYears?: number;

  doneStyle?: ViewStyle;

}

interface Theme {
  arrowColor?: string;
  backgroundColor?: string;
  calendarBackground?: string;
  dayTextColor?: string;
  dotColor?: string;
  disabledArrowColor?: string;
  indicatorColor?: string;
  monthTextColor?: string;
  selectedDayBackgroundColor?: string;
  selectedDayTextColor?: string;
  selectedDotColor?: string;
  textDisabledColor?: string;
  textSectionTitleColor?: string;
  textSectionTitleDisabledColor?: string;
  todayTextColor?: string;
  textDayFontFamily?: string;
  textMonthFontFamily?: string;
  textDayHeaderFontFamily?: string;
  textDayFontWeight?: string;
  textMonthFontWeight?: string;
  textDayHeaderFontWeight?: string;

  textDayFontSize?: number;
  textMonthFontSize?: number;
  textDayHeaderFontSize?: number;
}
