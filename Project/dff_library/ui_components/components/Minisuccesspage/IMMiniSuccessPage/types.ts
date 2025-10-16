import { TextStyle, ViewStyle } from 'react-native/types';

export interface MiniProps {
  bodyTitle?: {
    title: JSX.Element;
    styleBody: TextStyle;
  };

  headerTitle: {
    title: string;
    styleHeader: ViewStyle | TextStyle;
  };
  
  isblurContainer?: boolean;
  isVisible: boolean;
  isStatusBarTranslucent?:boolean;
  
  activeOpacityProp?: number;
  parallelAnimatedProp?: number;
  sequencelAnimatedProp?: number;

  styleBodyTextStyle?: TextStyle;
  styleHeaderTextStyle?: TextStyle;
  styleInformationAreaStyle?: TextStyle;
  
  animationViewStyle?:ViewStyle;
  styleCenteredMainView?: ViewStyle;
  styleCenteredView?: ViewStyle;
  styleCenterIconPosition?: ViewStyle;
  styleCenterIconStyle?: ViewStyle;
  styleChildViewStyle?: ViewStyle;
  styleModelLAndRRadius?: ViewStyle;
  styleModelLeftTopConerStyle?: ViewStyle;
  styleRightIconStyle?: ViewStyle;
  styleTextViewStyle?: ViewStyle;

  blurContainer?: JSX.Element;
  centerCorrectIcon: JSX.Element;
  centerFlowerIcon: JSX.Element;
  childProps?: JSX.Element;
  modelLeftIcon: JSX.Element;
  modelRightIcon: JSX.Element;

  closeModal: (value: boolean) => void;
}
