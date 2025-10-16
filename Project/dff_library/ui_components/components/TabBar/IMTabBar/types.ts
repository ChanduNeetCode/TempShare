import { TextStyle, ViewStyle } from 'react-native';

export interface IMTabBarProps {
  renderScene: any; 

  onTabPress ?: (key?:any) => void;

  pressColor?: string;

  routes: {
    enabled: boolean;

    key: string;
    title: string;

    tabImage?: JSX.Element;
    tabDisabledImage?: JSX.Element;

  

  }[];
  
  containerStyle?:ViewStyle;
  indicatorStyle?: ViewStyle;
  scrollableTabStyle?: ViewStyle;
  tabStyle?: ViewStyle;
  tabImageStyle?: ViewStyle;
  tabViewStyle?: ViewStyle;

  lableStyle?: TextStyle;

  width?: number;
}
