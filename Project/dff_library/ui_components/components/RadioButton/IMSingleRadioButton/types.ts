import { TextStyle, ViewStyle } from 'react-native';

export interface IMRadioButtonProps {
  isDisable?: boolean;
  isLeft?: boolean;
  isSelect?: boolean;

  tapRadioButtonColor?: string;
  title?: string;
  value?: string;

  textStyle?: TextStyle;

  activeTouchStyle?: ViewStyle;
  containerStyleIcon?: ViewStyle;
  containerStyleTitle?: ViewStyle;
  
  selectImage?: JSX.Element;
  textContainer?: JSX.Element;
  unselectImage?: JSX.Element;

  toggleState?: (id: string, act: boolean) => void;
  onPress?: (value: string) => void;
}
