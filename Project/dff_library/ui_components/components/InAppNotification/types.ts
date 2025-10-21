import { TextStyle, ViewStyle } from 'react-native/types';

export enum NotificationType {
  'Dismissible',
  'Regular',
  'Seasonal',
}

export interface NotificationProps {
  notificationType:
    | NotificationType.Dismissible
    | NotificationType.Regular
    | NotificationType.Seasonal;

  backgroundColor?:string;
  subTitle?: string;
  showTitle?: string;
  title?: string;

  styleShowButtonStyle?: TextStyle;
  styleFestivalTextStyle?: TextStyle;
  styleFestivalsubTextStyle?: TextStyle;
  styleNotificationTextStyle?: TextStyle;

  mainContainerStyle?:ViewStyle;
  seperatorLineStyle?: ViewStyle;
  styleFestivalView?: ViewStyle;
  rightIconStyle?: ViewStyle;

  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  onclickNotification?: () => void;
  onRightIconPress?:()=>void;
}
