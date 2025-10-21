import React from 'react';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';

import { Theme, MarkingTypes } from '../../../types';
import { DotProps } from '../dot';

export declare enum Markings {
  DOT = 'dot',
  MULTI_DOT = 'multi-dot',
  PERIOD = 'period',
  MULTI_PERIOD = 'multi-period',
  CUSTOM = 'custom',
}

declare type CustomStyle = {
  container?: ViewStyle;
  text?: TextStyle;
};

declare type DOT = {
  color: string;
  key?: string;
  selectedDotColor?: string;
};

declare type PERIOD = {
  color: string;

  endingDay?: boolean;
  startingDay?: boolean;
};

export interface MarkingProps extends DotProps {
  type?: MarkingTypes;
  theme?: Theme;

  activeOpacity?: number;

  customTextStyle?: StyleProp<TextStyle>;
  customContainerStyle?: StyleProp<ViewStyle>;

  dots?: DOT[];
  periods?: PERIOD[];

  endingDay?: boolean;
  disabled?: boolean;
  disableTouchEvent?: boolean;
  inactive?: boolean;
  marked?: boolean;
  selected?: boolean;
  startingDay?: boolean;
  today?: boolean;

  accessibilityLabel?: string;
  customStyles?: CustomStyle;
  dotColor?: string;
  selectedColor?: string;
  selectedTextColor?: string;
  textColor?: string;
}

declare const Marking: {
  (props: MarkingProps): React.JSX.Element;
  displayName: string;
  markings: typeof Markings;
};
export default Marking;
