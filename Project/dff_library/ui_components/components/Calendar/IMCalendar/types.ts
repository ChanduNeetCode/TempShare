/* eslint-disable @typescript-eslint/no-empty-interface */
import { TextStyle, ViewStyle } from 'react-native';

export interface IMCalendarProps {
  CalendarBackgroundColor?: string;
  headerButtonTitle?: string;

  textDisabledColor?: string;
  textSectionTitleColor?: string;

  calendarStyle?: ViewStyle;
  dayContainerStyles?: ViewStyle;
  doneButtonStyle?: ViewStyle;
  headerContentStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  iconContainerStyle?: ViewStyle;

  headerArrowIcon?: JSX.Element;
  generateMarkedDates?: () => JSX.Element;
  renderDay?: (props: any) => JSX.Element;
  renderHeader?: () => JSX.Element;

  showCalendar?: boolean;
  showPicker?: boolean;

  dayTextStyles?: TextStyle;
  headerTextStyle?: TextStyle;

  dayToMark: IList[];

  textDayHeaderFontSize?: number;

  markedDatesStyle?: CustomStyles;
  selectedDatesStyles?: CustomStyles;
  todayDateStyles?: CustomStyles;
}
export interface IList {
  date: string;
  icon: JSX.Element;
}

export interface DateObject {
  dateString: string;
  day: number;
  month: number;
  year: number;
}
export interface StateObject {
  disabled?: boolean;
  today?: boolean;
  selected?: boolean;
}

export interface CustomStyles {
  container?: ViewStyle;
  text?: TextStyle;
}
