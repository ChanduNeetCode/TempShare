import { TextStyle, ViewStyle } from 'react-native/types';

import { flatListObject } from '../../Dropdowns/utils/types';

export interface IMSplitInputTextFieldProps {
 units: IMlist[],

 bottomContainer ?: JSX.Element;
 icon ?: JSX.Element;

 bottomContainerStyle ?: ViewStyle;
 containerSeperatorStyle ?: ViewStyle;
 dataSeperatorLineStyle ?: ViewStyle;
 dataViewStyle ?: ViewStyle;
 dateViewStyle ?: ViewStyle;
 dateTextViewStyle ?: ViewStyle;
 dropdownSeperatorStyle?: ViewStyle;
 dropDownStyle?: ViewStyle;
 elementStyle?: ViewStyle;
 flatListStyle?: ViewStyle;
 flatListRowStyle?: ViewStyle;
 iconStyle?: ViewStyle;
 mainContainerStyle?: ViewStyle;

 dataTextStyle?: TextStyle;
 dataStyle ?: TextStyle;
 dateStyle ?: TextStyle;
 dateTextStyle ?: TextStyle;
 daysTextStyle ?: TextStyle;

 onSelect : (selectedItem: flatListObject, title: string) => void;

 isDayVisible : boolean;
 isIcon ?: boolean;
 isMonthVisible : boolean;
 isYearVisible : boolean;

  
}

export interface IMlist{
  id: number,
   name: string, 
   data: object 

}

