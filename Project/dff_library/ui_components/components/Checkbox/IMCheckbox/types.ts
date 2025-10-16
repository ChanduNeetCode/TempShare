import { TextStyle, ViewStyle } from 'react-native';

export interface IMCheckboxProps {
  title: string | JSX.Element;

  tapRadioButtonColor?: string;
  value?: string;

  isCheckboxDisabled?:boolean;
  isDisable?: boolean;
  isSelect?: boolean;
  isLeft?: boolean;

  toggleState?: (id: string, act: boolean) => void;
  multiToggleState?: (id: string | JSX.Element, act: boolean) => void;

  activeTouchStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  titleViewStyle?: ViewStyle;
  viewStyle?:ViewStyle;

  textStyle?: TextStyle;

  selectImage?: JSX.Element;
  unselectImage?: JSX.Element;
}
