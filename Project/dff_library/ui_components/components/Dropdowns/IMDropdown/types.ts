import { TextStyle, ViewStyle } from 'react-native';

import { DropdownType } from '../utils/enums';
import { flatListObject } from '../utils/types';

export interface DropdownProps {
  disable?: boolean;
  isDefault?:boolean;

  dropdownType:
    | DropdownType.SingleColumn
    | DropdownType.Wide
    | DropdownType.ALT
    | DropdownType.FLoatTextfield;

  data: flatListObject[];

  dropdownWidth?: number;
  numberOfLines?: number;

  label?:String;
  placeholderText ?: string;
  placeHolderColor ?: string
    placeHolderAnimatedColor ?: string,
    phFontSize ?: number,
    phAnimatedFontSize ?: number,
    phMarginTop ?: number,
    phAnimatedMarginTop ?: number,

  dropdownRowTextStyle?: TextStyle;
  headerStyle?: TextStyle;
  placeholderTextStyle ?: TextStyle;

  leftSideContainer?: JSX.Element;
  rightSideContainerOpen?: JSX.Element;
  rightSideContainer?: JSX.Element;

  dropdownButtonInternalStyle?: ViewStyle;
  dropdownButtonStyle?: ViewStyle;
  dropdownRowStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;
  flatListRowContainer?: ViewStyle;
  flatListStyle?: ViewStyle;
  floatDropdownContainerStyle?: ViewStyle;
  itemTextStyle?:ViewStyle;
  labelStyle?: ViewStyle;
  parentDropDownStyle?:ViewStyle;
  
  selectedValue?: flatListObject;

  onSelect: (selectedItem: flatListObject, index: number) => void;
  onPress?:()=>void;
}
