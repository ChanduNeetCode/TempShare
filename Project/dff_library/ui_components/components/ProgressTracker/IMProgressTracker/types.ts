import { TextStyle, ViewStyle } from 'react-native';

export interface Step {
  title: string;

  id: number;

  isEnabled: boolean;
}
export interface IMProgressTrackerProps {
  data: Step[];

  currentStepProp?: (prop: any) => void;
  callbackprogress?: (prop: any) => void;

  activeCircleStyle?: ViewStyle;
  buttonContainerStyle?: ViewStyle;
  disabledCircleStyle?: ViewStyle;
  flatListStyle?: ViewStyle;
  flatListViewStyle?:ViewStyle;
  itemStyleProp?: ViewStyle;
  lineStyle?: ViewStyle;
  ParentButtonStyle?: ViewStyle;
  parentContainerStyle?: ViewStyle;
  titleContainerStyle?: ViewStyle;

  toggleFunc?: (prop: any) => void;
  proceedHandler?:()=>void;

  activeStateTextStyle?: TextStyle;
  completedStateTextStyle?: TextStyle;
  disabledStateTextStyle?: TextStyle;
  titleStyle ?: TextStyle;

  childProp?: JSX.Element;
  completedCircleStyle?: JSX.Element;
  buttonComponent?: JSX.Element;
  buttonChildrenProp?:JSX.Element;
  buttonContainer?:JSX.Element;
  isMessage?: boolean;
  isButton?: boolean;
  isDisabled?: boolean;

  popupText?: string;
  popupFinishText?: string;
}
