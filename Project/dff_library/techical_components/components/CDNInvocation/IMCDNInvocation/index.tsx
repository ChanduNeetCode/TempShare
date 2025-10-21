import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';

import { getURL } from './baseURLs';
import { IMCDNInvocationProps } from './types';
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
} from '../../EnviornmentVariable/IMEnviornmentVariable';
import { ICBankLogo } from '../../../../ui_components/atoms/icons';

const Buffer = require('buffer').Buffer;

const getImage = async (
  imageURL: string,
  assetName: string | undefined,
  isImageRequired?: boolean,
  imageStyle?: object,
  defaultImage?: JSX.Element,
  headers?: object,
) => {
  let databaseData = await getLocalDBData(imageURL);
  let headerDate = databaseData ? databaseData.modifiedDate : "Thu, 01 Jan 1970 05:30:00 IST";
  let headers1 = {
    ...headers,
    'If-Modified-Since': headerDate
  }
  try {
    if (isImageRequired) {
      if (assetName == null || assetName == '') {
        return {
          success: true,
          response: defaultImage,
          message: 'Data Fetched Successfully',
        };
      } else {
        const responseFromApi: any = await IMBaseServices({
          method: HttpMethods.GET,
          url: imageURL,
          isMock: false,
          isEncrypt: false,
          headers: headers1,
          responseType: 'arraybuffer',
          isCacheRequired: true,
          isCDNImage: true,
          isCDNImageorMessage: true
        });
        let encryptedData;
        if (responseFromApi?.isSuccess) {
          encryptedData = responseFromApi?.resData;
          encryptedData = Buffer.from(
            encryptedData,
            'binary',
          ).toString('base64');

        } else if (responseFromApi?.statusCode === 304 && databaseData) {
          // 304 error handling case
          encryptedData = databaseData?.cachedata;
        } else {
          return {
            success: false,
            response: 'No Response 1',
            message: 'Error :' + responseFromApi?.resp,
          };
        }

        const imageReturned = (
          <Image
            resizeMode="contain"
            style={[styles.imageStyle, imageStyle]}
            source={{ uri: `data:image/png;base64,${encryptedData}` }}
          />
        );
        return {
          success: true,
          response: imageReturned,
          message: 'Data Fetched Successfully',
        };

      }
    }
    return {
      success: true,
      response: imageURL,
      message: 'Data Fetched Successfully',
    };
  } catch (err) {
    return {
      success: false,
      response: 'No Response',
      message: 'Error :' + err,
    };
  }
};

const getData = async (
  dataURL: string,
  env: string,
  masterEnv?: string,
  masterName?: string,
) => {
  try {
    // let cacheData = getCacheData(dataURL);
    // console.log('the cached datae;',cacheData);
    let apiResponse: any;
    let isMaster = masterEnv ? true : false;
    let databaseData = await getLocalDBData(dataURL);
    let headerDate = databaseData ? databaseData.modifiedDate : "Thu, 01 Jan 1970 05:30:00 IST";
    if (isMaster) {
      var myHeaders = new Headers();
      myHeaders.append('x-apikey', `${IMMasterKey(masterEnv!)}`);
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

    let encryptedData;
    if (apiResponse?.isSuccess) {
      // api success case

      encryptedData = apiResponse.resData;

    } else if (apiResponse?.statusCode === 304 && databaseData) {
      // 304 error handling case

      encryptedData = databaseData.cachedata;
    } else {
      return {
        success: false,
        response: 'No Response 1',
        message: 'Error :' + apiResponse.resp,
      };
    }

    let data: any;
    if (Platform.OS == 'ios') {
      if (isMaster) {
        const res = encryptedData;
        //convert Respone into JSON format
        const finalResponse = JSON.parse(res);

        data = await decryptAEM(finalResponse, env, isMaster);
        // setCacheData(dataURL, data);
      } else {
        data = await decryptAEM(encryptedData, env, isMaster);
        // setCacheData(dataURL, data);

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

      // setCacheData(dataURL, data);
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


    // if (cacheData.length == 0) {
    //   if (isMaster) {
    //     var myHeaders = new Headers();
    //     myHeaders.append('x-apikey', `${IMMasterKey(masterEnv!)}`);
    //     myHeaders.append('Content-Type', 'application/json');

    //     var requestOptions = {
    //       method: HttpMethods.GET,
    //       headers: myHeaders,
    //     };

    //     const res = await fetch(dataURL, requestOptions);
    //     const result = await res.text();

    //     apiResponse = {
    //       isSuccess: true,
    //       resData: result,
    //       response: result,
    //     };
    //   } 
    //   else {
    //     apiResponse = await IMBaseServices({
    //       env: enviornment.EMP,
    //       method: HttpMethods.GET,
    //       url: dataURL,
    //     });
    //   }

    //   // response = res;
    //   if (apiResponse.isSuccess) {
    //     if (Platform.OS == 'ios') {
    //       if (isMaster) {
    //         const res = apiResponse.resData;
    //         //convert Respone into JSON format
    //         const finalResponse = JSON.parse(res);

    //         const data = await decryptAEM(finalResponse, isMaster);
    //         setCacheData(dataURL, data);
    //         return {
    //           success: true,
    //           response: data,
    //           message: 'Data Fetched Successfully',
    //         };
    //       } else {
    //         const data = await decryptAEM(apiResponse.resData, isMaster);
    //         setCacheData(dataURL, data);
    //         return {
    //           success: true,
    //           response: data,
    //           message: 'Data Fetched Successfully',
    //         };
    //       }
    //     } else {
    //       let data: any;
    //       if (isMaster) {
    //         const res = apiResponse.resData;
    //         //convert Respone into JSON format
    //         const finalResponse = JSON.parse(res);

    //         let encryptedRequestData = ['', ''];
    //         encryptedRequestData[0] = finalResponse.encryptedKey;
    //         encryptedRequestData[1] = finalResponse.encryptedData;

    //         data = await DecryptFunc(
    //           encryptedRequestData[1],
    //           encryptedRequestData[0],
    //         );
    //       } else {
    //         data = await DecryptAEMFun(apiResponse.resData);
    //       }

    //       setCacheData(dataURL, data);
    //       return {
    //         success: true,
    //         response: data,
    //         message: 'Data Fetched Successfully',
    //       };
    //     }
    //   } else if (!apiResponse.isSuccess) {
    //     return {
    //       success: false,
    //       response: apiResponse.resp,
    //       message: 'Failed to Fetch Data',
    //     };
    //   }
    // } else if (cacheData && cacheData.length > 0) {
    //   return {
    //     success: true,
    //     response: cacheData[0].value && cacheData[0].value,
    //     message: 'Data Fetched Successfully',
    //   };
    // }
    // return {
    //   success: false,
    //   response: 'No Response 1',
    //   message: 'Error :' + apiResponse.resData,
    // };
  } catch (err) {
    return {
      success: false,
      response: 'No Response 2',
      message: 'Error :' + err,
    };
  }
};

async function IMCDNInvocation({
  invocationType,
  dataRequestType,
  assetName,
  module,
  env = enviornment.DEV,
  masterEnv,
  masterName,
  isImageRequired,
  imageStyle,
  defaultImage = <ICBankLogo />,
  headers,
}: IMCDNInvocationProps): Promise<{
  success: boolean;
  response: any;
  message: string;
}> {
  const url = getURL(
    invocationType,
    dataRequestType,
    assetName,
    module,
    env,
    masterEnv,
    masterName,
  );

  // const url = getURL(invocationType, dataRequestType, assetName, module,masterEnv,masterName);
  if (url.length != 0) {
    if (invocationType === 'Image') {
      return getImage(
        url,
        assetName,
        isImageRequired,
        imageStyle,
        defaultImage,
        headers,
      );
    } else if (invocationType === 'Data') {
      return getData(url, env, masterEnv, masterName);
    } else {
      return {
        success: false,
        response: 'No Response',
        message: 'Invalid Invocation Type!!!',
      };
    }
  }
  return {
    success: false,
    response: 'No Response',
    message: 'Invalid Inputs!!!',
  };
}

const styles = StyleSheet.create({
  imageStyle: {
    minHeight: 100,
    minWidth: 100,
  },
});

export default IMCDNInvocation;
