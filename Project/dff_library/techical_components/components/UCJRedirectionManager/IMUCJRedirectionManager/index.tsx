import { Linking } from 'react-native';

import { UCJRelationManagerProps } from './types';

const IMUCJRelationManager = ({
  baseURL,
  keys,
  isOpenInAppBrowser,
}: UCJRelationManagerProps) => {
  const finalURL = keys ? baseURL + '/' + keys.join('/') : baseURL;

  if (isOpenInAppBrowser) {
    Linking.openURL(finalURL).catch(error => {});
  }
  return console.log(finalURL);
};

export default IMUCJRelationManager;
