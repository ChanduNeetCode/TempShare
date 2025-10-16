import { useState } from 'react';
import { NativeModules } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import RNScreenshotPrevent from 'react-native-screenshot-prevent';

interface PreventScreenshotModule {
  forbid: () => Promise<string>;
  allow: () => Promise<string>;
}

const { PreventScreenshotModule } = NativeModules as {
  PreventScreenshotModule: PreventScreenshotModule;
};

const IMDisableScreenShot = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [disableScreenshot, setDisableScreenshot] = useState(true);

  // useEffect(() => {
  //     RNScreenshotPrevent.enableSecureView()
  //     return () => {
  //         RNScreenshotPrevent.disableSecureView()
  //     }
  // }, [!disableScreenshot])

  const forbidScreenshot = async () => {
    try {
      setDisableScreenshot(false);
      // if (Platform.OS == 'ios') {
      //   RNScreenshotPrevent.enableSecureView()
      // } else if (Platform.OS === 'android') {
      //   const result = await PreventScreenshotModule.forbid();
      // }
      RNScreenshotPrevent.enableSecureView();
    } catch (e) {}
  };

  const allowScreenshot = async () => {
    try {
      // if (Platform.OS == 'ios') {
      //   RNScreenshotPrevent.disableSecureView()
      // } else if (Platform.OS === 'android') {
      //   const result = await PreventScreenshotModule.allow();
      // }
      RNScreenshotPrevent.disableSecureView();
    } catch (e) {}
  };
  return { allowScreenshot, forbidScreenshot };
};

export default IMDisableScreenShot;
