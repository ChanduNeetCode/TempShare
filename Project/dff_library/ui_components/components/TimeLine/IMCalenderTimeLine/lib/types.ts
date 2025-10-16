import React from 'react';
import {
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle,
  FlatListProps,
} from 'react-native';

type Data = {

  circleColor?: string;
  dotColor?: string;
  lineColor?: string;
  time?: string;
  title?: string;

  description?: any;

  circleSize?: number;
  lineWidth?: number;

  eventContainersStyle?: ViewStyle;
  eventContainerStyle?: ViewStyle;

  icon?: string | React.ReactNode;

  position?: 'left' | 'right';

  isCurrent?: boolean;
  isLastMonth?: boolean;
  isYear?: boolean;
};

export interface TimelineProps {
  data: Data[] | any;

  columnFormat ?: 'single-column-left' | 'single-column-right' | 'two-column';

  circleSize?: number;
  dotSize?: number;
  lineWidth?: number;
  dashLength?: number;
  dashThickness?: number;
  dashGap?: number;

  circleColor?: string;
  currentCircleColor ?: string
  dotColor?: string;
  lineColor?: string;
  dashColor?: string

  iconDefault?: string | React.ReactNode | JSX.Element;

  activeCircleStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  containerStyle ?: ViewStyle;
  inActiveCircleStyle?: ViewStyle;
  listViewContainerStyle?: ViewStyle;
  listViewStyle?: ViewStyle;
  style?: ViewStyle;
  seperatorStyle?: ViewStyle;
  lineStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  detailContainerStyle?: ViewStyle;
  eventContainersStyle?: ViewStyle;
  eventContainerStyle?: ViewStyle;
  eventDetailStyle?: ViewStyle;
  rowContainerStyle?: ViewStyle;
  separatorStyle?: ViewStyle;
  timeContainerStyle?: ViewStyle;
  timeWrapper?: ViewStyle;

  descriptionStyle?: TextStyle;
  titleStyle?: TextStyle;
  timeTextStyle?: TextStyle;
  currentTimeTextStyle?: TextStyle;
  currentItemTitleStyle?: TextStyle;
  itemTitleStyle?: TextStyle;

  activeIcon?: JSX.Element;
  disabledIcon?: JSX.Element;
  selectImage?: JSX.Element;
  unSelectImage?: JSX.Element;

  onEventPress?: (event: Event) => void;

  renderCircle?: (
    rowData: Data | any,
    sectionID: number,
    rowID: number,
  ) => void;
  renderDetail?: (
    rowData: Data | any,
    sectionID: number,
    rowID: number,
  ) => void;
  renderTime?: (rowData: Data | any, sectionID: number, rowID: number) => void;

  options?: FlatListProps<Data>;

  isAllowFontScaling?: boolean;
  isRenderFullLine?: boolean;
  isUsingFlatlist?: boolean;
  showTime?: boolean;
  separator?: boolean;
}
