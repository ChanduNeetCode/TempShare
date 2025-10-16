import { TextStyle, ViewStyle } from 'react-native';

export interface IMMultiSelectionCheckboxProps {
  isLeft: boolean;

  displayKey: string;
  tapRadioButtonColor?: string;
  title: string;
  uniqueKey: string;

  list: IList[];

  activeTouchStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  displayItemStyle?: ViewStyle;
  itemStyle?: ViewStyle;

  textStyle?: TextStyle;
  childTextStyle?: TextStyle;

  partialSelectImage?: JSX.Element;
  selectImage?: JSX.Element;
  unselectImage?: JSX.Element;
  itemSeparator?: JSX.Element;

  multiToggleState?: (id: string | Element, act: boolean) => void;

  resultCallback?: (data: IList[]) => void;
}

export interface IList {
  id: string;
  name: string;
  active?: boolean;
  forceRefresh?: number;
}
