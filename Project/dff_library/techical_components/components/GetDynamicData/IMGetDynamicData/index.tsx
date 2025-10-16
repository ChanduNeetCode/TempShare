import { Platform } from 'react-native';

import { getDynamicDataProps } from './types';
import { IMBaseServices } from '../../BaseServices';
import { HttpMethods } from '../../BaseServices/IMBaseServices';
import {
  DecryptAEMFun,
  DecryptFunc,
} from '../../EncryptionDecryptionAndroid/IMEncryptionDecryptionAndroid';
import { decryptAEM } from '../../EncryptionDecryption/IMDecryptionAEM/index';
import { getLocalDBData } from '../../CacheManager';
import {
  IMMasterKey,
  enviornment,
  IMCMSBaseURL,
  masterBaseURL,
} from '../../EnviornmentVariable/IMEnviornmentVariable';
import { enumType, subCategory } from './types';
import { IMGlobalHeader } from '../../GlobalHeaders';

const getData = async (
  isMaster: boolean,
  dataURL: string,
  env: string,
) => {
  try {
    let apiResponse: any;
    let databaseData = await getLocalDBData(dataURL);
    let headerDate = databaseData ? databaseData.modifiedDate : "Thu, 01 Jan 1970 05:30:00 IST";
    if (isMaster) {
      var myHeaders = new Headers();
      myHeaders.append('x-apikey', `${IMMasterKey(env!)}`);
      myHeaders.append('Content-Type', 'application/json');
      var requestOptions = {
        method: HttpMethods.GET,
        headers: myHeaders,
      };
      const res = await fetch(dataURL, requestOptions);
      const result = await res.text();
      apiResponse = {
        isSuccess: true,
        resData: result,
        response: result,
      };
    } else {
      apiResponse = await IMBaseServices({
        env: enviornment.EMP,
        method: HttpMethods.GET,
        url: dataURL,
        headers: { 'If-Modified-Since': headerDate },
        isCacheRequired: true,
        isCDNImageorMessage: true
      });
    }
    let encryptedData: string;
    if (apiResponse?.isSuccess) {
      // api success case
      encryptedData = apiResponse.resData;
    } else if (apiResponse?.statusCode === 304 && databaseData) {
      // 304 error handling case
      encryptedData = databaseData.cachedata;
    } else {
      return {
        success: false,
        response: 'No Response 2',
        message: apiResponse.response
      };
    }

    let data: any;
    if (Platform.OS == 'ios') {
      if (isMaster) {
        const res = encryptedData;
        //convert Respone into JSON format
        const finalResponse = JSON.parse(res);
        data = await decryptAEM(finalResponse, env, isMaster);
      } else {
        data = await decryptAEM(encryptedData, env, isMaster);
      }
    } else {
      if (isMaster) {
        const res = encryptedData;
        //convert Respone into JSON format
        const finalResponse = JSON.parse(res);
        let encryptedRequestData = ['', ''];
        encryptedRequestData[0] = finalResponse.encryptedKey;
        encryptedRequestData[1] = finalResponse.encryptedData;
        data = await DecryptFunc(
          encryptedRequestData[1],
          encryptedRequestData[0],
          env
        );
      } else {
        data = await DecryptAEMFun(encryptedData, env);
      }
    }
    if (data) {
      return {
        success: true,
        response: data,
        message: 'Data Fetched Successfully',
      };
    } else {
      return {
        success: false,
        response: 'No Response',
        message: 'Decryption Error',
      };
    }

  } catch (err) {
    return {
      success: false,
      response: 'No Response 1',
      message: 'Error :' + err,
    };
  }
};

async function getDynamicData({
  env = enviornment.DEV,
  jsonFileName,

  category,
  enumtype,
  moduleName,
  subcategory,
  baseURLtype,

}: getDynamicDataProps): Promise<{
  success: boolean;
  response: any;
  message: string;
}> {
  const globalHeader = IMGlobalHeader.getInstance();
  let appVersion = '0-0-1';
  //need to remove this hardcoded version once the returnAppversion function is correctly implemented
  if (globalHeader.returnAppVersionBuild()) {
    appVersion = globalHeader.returnAppVersionBuild().toString().replace(/\./g, '-');
  }

  const CMSBaseURL: String = IMCMSBaseURL(env);
  let url: string;
  let isMasterFlag = false;
  switch (enumtype) {
    case enumType.branchmaster:
      isMasterFlag = true;
      url = `${masterBaseURL(env)}/${subCategory.branchMaster}/${jsonFileName}/EXACT_SEARCH`;
      break;
    case enumType.master:
      isMasterFlag = true;
      url = `${masterBaseURL(env)}/${subCategory.master}/${jsonFileName}`;
      break;
    case enumType.tooltip:
      url = `${CMSBaseURL}tooltips/${Platform.OS}/${appVersion}/`
      if (moduleName) {
        url += moduleName + '/'
      }
      if (category) {
        url += category + '/'
      }
      if (subcategory) {
        url += subcategory + '/'
      }
      url += jsonFileName;
      console.log('the url',url)
      break;
    case enumType.other:
      url = `${CMSBaseURL}`;
      if (baseURLtype) {
        url += baseURLtype + '/'
      }
      if (moduleName) {
        url += moduleName + '/'
      }
      if (category) {
        url += category + '/'
      }
      if (subcategory) {
        url += subcategory + '/'
      }
      url += jsonFileName
      break;
    default:
      url = `${CMSBaseURL}`;
      if (baseURLtype) {
        url += baseURLtype + '/'
      }
      if (moduleName) {
        url += moduleName + '/'
      }
      if (category) {
        url += category + '/'
      }
      if (subcategory) {
        url += subcategory + '/'
      }
      url += jsonFileName
      break;
  }
  return getData(isMasterFlag, url, env);
}

export default getDynamicData;
