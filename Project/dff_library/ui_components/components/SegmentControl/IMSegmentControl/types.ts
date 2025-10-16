import { ViewStyle, TextStyle } from 'react-native';

export type flatListObject = {
  title: string|JSX.Element;
};
export type componentListObject = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  component: Function;
};
export interface SegmentControlProps {
  components: Array<React.ReactElement>;
  tabTitles: Array<flatListObject>;
  
  selectedTextClr?: string;
  selectedTitleBgClr?: string;
  unSelectedTitleBgClr?: string;

  parentViewStyle?: ViewStyle;
  tabViewStyle?: ViewStyle;
  flatListMainStyleProp?: ViewStyle;
  tabviewSelcted?: ViewStyle;
  tabViewunselcted?: ViewStyle;

  tabTitlesSelectedTextStyle?: TextStyle;
  tabTitlesUnSelectedTextStyle?: TextStyle;

  selectedIndex?: number;
  onSelect: (value: number) => void;
}
