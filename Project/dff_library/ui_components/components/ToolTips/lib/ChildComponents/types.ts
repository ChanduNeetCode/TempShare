import { LayoutChangeEvent } from 'react-native';

export interface ChildProps {
  isSelect?: boolean;

  selectImage?: JSX.Element;
  unSelectImage?: JSX.Element;

  onPress?: () => void;
  onLayout?: (e: LayoutChangeEvent) => void;
}
