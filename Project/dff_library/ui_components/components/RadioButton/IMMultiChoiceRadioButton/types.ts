import { TextStyle, ViewStyle } from 'react-native';

export interface IMMultiRadioButtonProps {
  list: List[];

  isHorizontal?: boolean;
  isLeft?: boolean;

  displayKey: string;
  tapRadioButtonColor?: string;
  value: string;

  textStyle?: TextStyle;

  activeTouchStyle?: ViewStyle;
  containerStyle?: ViewStyle;

  selectImage?: JSX.Element;
  textContainer?: JSX.Element;
  unselectImage?: JSX.Element;

  onPress: (value: string) => void;
}

export interface List {
  label?: string;
  value?: string;
}
