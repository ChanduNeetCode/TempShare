
import { ViewStyle, TextStyle } from 'react-native';

export interface BreadCrumbsProps {
  selectedIndex?:number;

  onSelect?: (value: number) => void;



  data:BreadList[];

  componentContainerStyle?:ViewStyle;

  slashStyle?:TextStyle;
  selectedTextStyle?: TextStyle;
  unSelectedTextStyle?: TextStyle;
}
export interface BreadList {
  component?:JSX.Element
  id:number;
  text?:string;
}
