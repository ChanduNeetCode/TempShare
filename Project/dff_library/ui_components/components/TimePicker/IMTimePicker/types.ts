import { TextStyle, ViewStyle } from "react-native";
export interface IMTimePickerProps {
  isHelperTextMode?:boolean;
  isInputTextButton?:boolean;
  isSmallCase?:boolean;
  isTextInputRightIcon?:boolean;
  use24Hour?: boolean;

  itemHeight?: number;
  wrapperHeight?: number;
  wrapperWidth?:number;
  
  highlightColor?:string;
  textInputLabel?:string;
  textInputPlaceHolder?:string;
  wrapperBackground?:string;

  highlightColorStyle?:ViewStyle;
  pickerContainerStyle?:ViewStyle;
  scrollContainerStyle?:ViewStyle;
  textInputContainerStyle?:ViewStyle;
  textLabelPropStyle?:ViewStyle;

  activeItemTextStyle?:TextStyle;
  itemTextStyle?:TextStyle;

  headerProp?:JSX.Element;
  inputRightIcon?:JSX.Element;
  
  onPressCallBack?:()=>void;
  onTimeChange?: (time: {
    hours: number;
    minutes: number;
    period?: 'AM' | 'PM'|'am'|'pm'|any;
  }) => void;  
}
