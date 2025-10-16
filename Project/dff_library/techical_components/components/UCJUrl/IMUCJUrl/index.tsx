import { Linking, Platform, NativeModules } from 'react-native';

import {
  IMUCJCategory,
  IMUCJParameter,
  IMDefaultIUSCategory,
  IMIUPCategory,
  encryption_Key,
  utm_Base_Url,
} from './types';

const { EncryptionDecryptionManager } = NativeModules;
const { IMCryptoManager } = NativeModules;

const Buffer = require('buffer').Buffer;

function convertStringToByteArray(str: string) {
  var bytes = [];
  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}

export const generateUcjUrl = async (
  ucjCategory: IMUCJCategory,
  urlParams: IMUCJParameter,
  iUPCategory?: '',
  isOpenInAppBrowser?: boolean,
) => {
  try {
    const prmData = `${urlParams.spdcWaiverFlag}|${urlParams.accountNumber}|${urlParams.firstName}|${urlParams.lastName}|${urlParams.destProd}|${urlParams.mobNum}|${urlParams.userId}|${urlParams.dob}|${urlParams.loanAmt}|${urlParams.state}|${urlParams.tenure}|${urlParams.apiTime}`;
    let encryptedData = '';
    if (Platform.OS == 'android') {
      encryptedData = await IMCryptoManager.encryptionAES256(
        prmData,
        encryption_Key,
      );
    } else {
      const obj = {
        data: convertStringToByteArray(prmData),
        key: convertStringToByteArray(encryption_Key),
      };
      encryptedData = EncryptionDecryptionManager.encryptionAES256(obj);
    }
    const convertEncryptedData = new Buffer(encryptedData).toString('base64');
    const iusData =
      iUPCategory != null && iUPCategory != ''
        ? sendingIUS(iUPCategory ?? '')
        : defaultGetIUS();
    const iupData = getIUP(ucjCategory);
    const webLink = `${utm_Base_Url}${ucjCategory}ius=${iusData}&iup=${iupData}&prm=${convertEncryptedData}`;
    if (isOpenInAppBrowser && webLink) {
      Linking.openURL(webLink).catch(error => {});
    }
    return webLink;
  } catch (error) {
    console.error('Failed UCJURL', error);
    throw error;
  }
};

export const defaultGetIUS = () => {
  return IMDefaultIUSCategory.RIBA30637AL;
};

export const sendingIUS = (value: String) => {
  return value;
};

export const getIUP = (value: String) => {
  switch (value) {
    case IMUCJCategory.UCJ_AUTO_LOAN_DD:
      return IMIUPCategory.ALP0T2M0QWG;
    case IMUCJCategory.UCJ_TWO_WHEELER_LOAN_DD:
      return IMIUPCategory.TWP0T2M0QWG;
    default:
      return '';
  }
};
