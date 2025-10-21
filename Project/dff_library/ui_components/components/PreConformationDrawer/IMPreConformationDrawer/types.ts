import { TextStyle, ViewStyle } from 'react-native/types';

export interface IMPreConformationDrawerProps {
  isDisabled?: boolean;
  isModalVisible?: boolean;
  isTouchableDisable?: boolean;
  isTransparent?: boolean;
  isStatusBarTranslucent?:boolean;

  amountText?: string;
  bgcLinearGradientColor?: string;
  bgcLinearGradientSecondColor?: string;
  buttonTitle?: string;
  buttonType?: string;
  payerDetailsText?: string;
  payingText?: string;
  receiverName?: string;
  rupeeSymbol?: string;
  title?: string;

  linearGradientHeight?: number;

  amountContainerStyle?: ViewStyle;
  buttonStyleProp?: ViewStyle;
  closeButtonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  disclaimerBoxStyle?: ViewStyle;
  defaultContainerStyleProps?: ViewStyle;
  dottedLeftCircleStyle?: ViewStyle;
  dottedLinesContainerStyle?: ViewStyle;
  dottedRightCircleStyle?: ViewStyle;
  middleContainerStyle?: ViewStyle;
  modalChildStyleProp?: ViewStyle;
  modalParentStyle?: ViewStyle;
  payingAmountContainStyle?: ViewStyle;
  paymentButtonStyle?: ViewStyle;
  receiverDetailsStyle?: ViewStyle;
  ticketContainerStyleProp?: ViewStyle;
  titleContainerStyle?: ViewStyle;

  amountTextStyle?: TextStyle;
  payerBankNameStyle?: TextStyle;
  payingTextStyle?: TextStyle;
  rctNameTextStyle?: TextStyle;
  rupeeTextStyle?: TextStyle;
  titleStyle?: TextStyle;

  backgroundImageforQR?: JSX.Element;
  blurContainer?: JSX.Element;
  closeIcon?: JSX.Element;
  disclaimerBox?: JSX.Element;
  dateViewStyle?: JSX.Element;
  footerContainer?: JSX.Element;
  leftIcon?: JSX.Element;
  paymentCtabutton?: JSX.Element;
  paymentTypeContainer?: JSX.Element;
  rcInformationBankLogo?: JSX.Element;
  receiverBankInfo?: JSX.Element;
  rightIcon?: JSX.Element;
  ticketView?: JSX.Element;

  drawerContainer?: () => JSX.Element;
  middleContainer?: () => JSX.Element;
  topContainer?: () => JSX.Element;

  popupCancelCallback?: () => void;
  onSwipeSuccess?: () => void;
  handleModalTouchable?:()=>void;
}
