import React, { useEffect } from 'react';
import RootNavigator from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox, Platform } from 'react-native';

import { AnalyticsEnvironment } from './dff_library/techical_components/components/AnalyticalManagerIOS/IMAnalyticalManagerIOS/types';
import { initAnalyticsIOS } from './dff_library/techical_components/components/AnalyticalManagerIOS/IMAnalyticalManagerIOS';
import { initAnalyticsAndroid } from './dff_library/techical_components/components/AnalyticalInvokerAndroid/IMAnalyticalInvokerAndroid';
import { Dynatrace } from '@dynatrace/react-native-plugin';

LogBox.ignoreAllLogs();
export default function App() {

  useEffect(() => {

    Dynatrace.identifyUser("User A79 Oppo Mobile");

    if (Platform.OS === 'ios') {
      initAnalyticsIOS(AnalyticsEnvironment.debug)
    } else {
      initAnalyticsAndroid(AnalyticsEnvironment.debug, '0.28.0')

    }

  }, [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1, marginBottom: 10 }}>
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>

  );
}
