import { TextStyle, ViewStyle } from 'react-native';

export interface IMSupportDrawerProps {
  description?: string;
  logoLinearGradientColor?: string;
  logoLinearGradientSecondColor?: string;
  title?: string;

  isCloseOnBackgroundTap?: boolean;
  isModalVisible?: boolean;
  isOnClickItemDisable?: boolean;
  isStatusBarTranslucent?:boolean;

  titleImage?: JSX.Element;
  
  activeOpacityProp?: number;
  backgroundStyle?: ViewStyle;
  descriptionStyle?: TextStyle;
  imageItemContainerStyle?: ViewStyle;
  childContainerStyle?: ViewStyle;
  itemTitleStyle?: TextStyle;
  itemDescriptionStyle?: TextStyle;
  itemBackgroundStyle?: ViewStyle;
  logoContainerStyle?: ViewStyle;
  modalStyle?: ViewStyle;
  tileStyle?: TextStyle;

  itemOnPress?: (value: any) => void;
  onPressBlurArea?: () => void;

  blurContainer?: JSX.Element;
  initialCircleContainer?: () => JSX.Element;
  renderCustomContainer?: () => JSX.Element;
  renderItemContainer?: () => JSX.Element;

  content?: Content[];
}

interface Content {
  description: string | JSX.Element;
  image: JSX.Element;
  title: string | JSX.Element;
}
