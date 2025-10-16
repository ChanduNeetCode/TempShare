import { ViewStyle } from 'react-native';

export enum paymentStatusInfo {
  'error',
  'pending',
  'success',
}
export interface IMThankYouErrorPageProps {
  paymentStatus:
    | paymentStatusInfo.error
    | paymentStatusInfo.pending
    | paymentStatusInfo.success;

    buttonDividerColor?: string;
    buttonLeftTitle: string;
    buttonRightTitle: string;
    buttonsBackgroundColor?: string;
    buttonTitleLeftColor?: string;
    buttonTitleRightColor?: string;
    parentViewBackgroundColor?: string;

  buttonsContainerViewStyle?: ViewStyle;
  circleImageStyleProp?:ViewStyle;
  mainContainer?:ViewStyle;
  parentViewStyle?: ViewStyle;

  buttonsVisible?: boolean;
  enablePaymentStatusIcon?: boolean;
  enableZigzagPattern?: boolean;

  buttonLeftIcon: JSX.Element;
  buttonRightIcon: JSX.Element;
  children?: JSX.Element;
  paymentStatusIcon?: JSX.Element;
  
  buttonLeftonPress?: (act: string) => void;
  buttonRightonPress?: (act: string) => void;
}
