import { ViewStyle, TextStyle } from 'react-native';

export interface ShareTrayProps {
  message?: string;

  shareViewStyle?: ViewStyle;

  messageTextStyle?: TextStyle;

  shareIcon?: JSX.Element;
}
