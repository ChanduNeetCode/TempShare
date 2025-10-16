import React, { FC } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import { styles } from './styles';
import { WebViewProps } from './types';

const IMWebView: FC<WebViewProps> = props => {
  const {
    javaScriptEnabled,
    setSupportMultipleWindows,

    injectedJavaScript,
    sourceUri,
    userAgent,

    WebViewStyle,

    onError,
    onLoadEnd,
    onMessage, 
    onShouldStartLoadWithRequest,
   
    originWhitelist,
    } = props;

  return (
    <View style={styles.container}>
      <WebView
        onLoadEnd={onLoadEnd}
        userAgent={userAgent}
        source={{ uri: sourceUri }}
        style={[styles.container, WebViewStyle]}
        onMessage={onMessage}
        injectedJavaScript = {injectedJavaScript}
        onError={onError}
        originWhitelist={originWhitelist}
        javaScriptEnabled={javaScriptEnabled}
        setSupportMultipleWindows={setSupportMultipleWindows}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      />
    </View>
  );
};

export default IMWebView;
