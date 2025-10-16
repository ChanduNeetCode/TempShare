import { TextStyle, ViewStyle } from 'react-native';

export interface ChipButtonProps {
  isDisable?: boolean;
  isSelect?: boolean;
  isLeftIconImage?: boolean;
  isRightIconImage?: boolean;

  label: string | JSX.Element;

  value?: string;

  changeStyleLabel?: TextStyle;

  changeStyleContainer?: ViewStyle;
  changeSelectedContainer?: ViewStyle;

  addLeftIconImage?: JSX.Element;
  addRightIconImage?: JSX.Element;
 
  onPress?: () => void;
}
