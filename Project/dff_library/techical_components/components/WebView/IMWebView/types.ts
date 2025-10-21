import { ViewStyle } from 'react-native';

export interface WebViewProps {
  javaScriptEnabled?: boolean;
  setSupportMultipleWindows?: boolean;

  injectedJavaScript?: string;
  sourceUri: string;
  userAgent?:string;

  WebViewStyle?: ViewStyle;

  onError?: (syntheticEvent: any) => void;
  onLoadEnd?: (event: any) => void;
  onMessage?: (event: any) => void;
  onShouldStartLoadWithRequest?: (event: any) => boolean;

  originWhitelist?:string[];

}
