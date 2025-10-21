import axios from 'axios';

import { isGetConnection } from '../../NetworkManager/IMNetworkManager';
import { IMMockApiManager } from '../../MockAPIManager/index';
import { BaseApiCallProps, HttpMethods } from './types';
import { Platform } from 'react-native';
import {
  EncryptFunc,
  DecryptFunc,
} from '../../EncryptionDecryptionAndroid/IMEncryptionDecryptionAndroid';
import { encrypt } from '../..//EncryptionDecryption/IMEncryption';
import { decrypt } from '../../EncryptionDecryption/IMDecryption';
import {
  enviornment,
  IMEnviornment,
} from '../../EnviornmentVariable/IMEnviornmentVariable';
import { ResponseType } from './types';
import IMGlobalHeader from '../../GlobalHeaders/IMGlobalHeaders';
import { IMUserInfo } from '../../GlobalHeaders/IMGlobalHeaders/utils/IMUserInfo';
import { IMDeviceInfo } from '../../GlobalHeaders/IMGlobalHeaders/utils/IMDeviceInfo';
import { IMCustomStatusCode } from '../../GlobalHeaders/IMGlobalHeaders/enum/IMApiResponseStatus';
import {
  errorInfo,
  IMNavigation,
  returnNavigation,
  init,
} from '../../IMAPIResponseError/index';

import { storeLocalDBData } from '../../CacheManager/index';
import { getRefreshToken } from '../../IMTimeOutManager/IMTimeoutManager';
import { useEffect, useState } from 'react';
const Buffer = require('buffer').Buffer;

//------------------------- Chandu -----------

let flag = false;


//------------------------- Chandu -----------


const sleep = (ms:any) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let isLoading = false;
let timeout: boolean = false ;
let tokenResponse:any = null;
async function TokenGeneration(url:any){
  // console.log('in base services 36 ',url)
  setTimeout(()=>{timeout=false},180000)
  
  if(isLoading){
    // console.log(' case when there is already token generation happening')
   await sleep(500)
  }
  else if(timeout && tokenResponse!=null){
    // console.log('when we have token and 3 mins in time')
   return tokenResponse
  }
  else{
    // console.log('default case')
    isLoading = true;
    timeout= true;
    tokenResponse = await getRefreshToken(url);
    isLoading = false;
  } 
  // console.log("80 Token Response",tokenResponse)
  return tokenResponse;
}
 



function returnDefaultheaders(
  moduleHeader: any,
  isAEMHeader: boolean | undefined,
  isFalconRequest: boolean | undefined
) {
  let defaultHeaders: { [key: string]: string } = {};
  const _userInfo = IMUserInfo.getInstance();
  const globalHeader = IMGlobalHeader.getInstance();
  const deviceInfo = IMDeviceInfo.getInstance();
  if (isAEMHeader) {
    defaultHeaders['x-apikey'] = globalHeader.returnMasterApiKey();
  } else {
    let userInfo = _userInfo.getUserDetails();
    defaultHeaders['trcID'] = globalHeader.returnTraceID();
    defaultHeaders['version'] = globalHeader.returnAppVersionBuild();
    defaultHeaders['Authorization'] = globalHeader.returnFT42Token();
    defaultHeaders['x-apikey'] = globalHeader.returnApikey();
    //Todo:-Maybe it's required in future
    // defaultHeaders["secret"] = globalHeader.returntSecret()
    if(globalHeader.returnOSType()) defaultHeaders['osType'] = globalHeader.returnOSType();
    defaultHeaders['device-id'] = userInfo?.deviceID;
    defaultHeaders['mobileNumber'] = userInfo?.mobileNumberWCC
      ? userInfo?.mobileNumberWCC
      : userInfo?.mobileNumber
        ? userInfo?.mobileNumber
        : '0';
    if (userInfo?.isNri) defaultHeaders['user-segment'] = userInfo?.isNri ? 'R' : 'N';
    if(userInfo?.city)  defaultHeaders['city'] = userInfo?.city;
    let imei = userInfo?.imei;
    let gcmId = userInfo?.gcmId;
    if (userInfo?.imei) {
      defaultHeaders['imei'] = imei;
    }

    if (userInfo?.gcmId) {
      defaultHeaders['gcmtoken'] = gcmId;
    }

    if (globalHeader.getOrgID()) {
      defaultHeaders['orgID'] = globalHeader.getOrgID();
    }
    if(globalHeader.returnMediaApiKey()) defaultHeaders['apikey'] = globalHeader.returnMediaApiKey();
    let userTypeHeader = _userInfo.returnUserIDAndUserTypeHeader();
    if (userTypeHeader[0]) {
      defaultHeaders['userID_Type'] = userTypeHeader[0];
    }
    if (userTypeHeader[1]) {
      defaultHeaders['userID'] = userTypeHeader[1];
    }
    defaultHeaders = { ...moduleHeader, ...defaultHeaders };
    if (isFalconRequest) {
      defaultHeaders['postalCode'] = userInfo?.fedid ? userInfo?.fedid : '0';
      defaultHeaders['street'] = `${userInfo?.latitude}${','}${userInfo?.longitude
        }`;
      defaultHeaders['ipValue'] = deviceInfo.getIPAddress();
    }
  }
  return defaultHeaders;
}

function returnTraceIDUrl(request: any, _url: string) {
  let traceId: any = '';
  let url = '';
  let tempTraceId = request['trcID'];
  if (tempTraceId) {
    traceId = tempTraceId;
  }

  let urls = _url;
  let tempUrl = _url;
  if (urls || tempUrl) {
    url = tempUrl;
  }
  return [traceId, url];
}

async function error0to200(statusCode: number, headers: object, url: string, responseParseData?: any) {
  // console.log('the syayus code',typeof(statusCode))
  let navigation;
  let traceIDUrl = returnTraceIDUrl(headers, url);
  if (statusCode == IMCustomStatusCode.InvalidUser) {
    // console.log('entered in 142')
    navigation = await returnNavigation(
      statusCode,
      '',
      traceIDUrl[1]
    );
    // console.log('')
    const res = {
      isSuccess: true,
      resData: navigation,
      response: navigation,
    }
    return res;
  } else if (

    statusCode == IMCustomStatusCode.TimeOut ||
    statusCode == IMCustomStatusCode.Login ||
    statusCode == IMCustomStatusCode.ReLogin
  ) {
    // console.log('entered here 158');

    var message: any = '';
    //let meta1: any = '';
    let meta = responseParseData.meta;
    if (meta) {
      let errors = meta['errors'];
      let error = errors[0];

      if (errors && error) {
        let errorCode = error['errCd'];
        if (
          errorCode &&
          statusCode &&
          statusCode !== IMCustomStatusCode.ReLogin
        ) {
          statusCode = statusCode ? statusCode : Number(errorCode);
        }
        message = error['errMsg'];
      }
    }
    navigation = await returnNavigation(
      statusCode,
      message,
      traceIDUrl[1]
    );
    const res = {
      isSuccess: true,
      resData: navigation,
      response: navigation,
    }
    return res
  } else if (
    statusCode < IMCustomStatusCode.FSLErroCode &&
    statusCode != IMCustomStatusCode.PartialExecute
  ) {

    // console.log('the type of status code 198',statusCode,typeof(statusCode))
    const fslErr = await errorInfo(
      init(statusCode),
      traceIDUrl[0],
      traceIDUrl[1],
      statusCode
    );

    // console.log('fslErr',traceIDUrl[0],
    // traceIDUrl[1])
    const res = {
      isSuccess: true,
      resData: fslErr,
      response: fslErr,
    }
    return res;
  } else {
    const res = {
      isSuccess: true,
      resData: responseParseData,
      response: responseParseData
    }
    return res;
  }
};

export async function apiCall(
  method: string,
  env: enviornment | string,
  url: string,
  moduleHeaders: object,
  data: any,
  isEncrypt: boolean,
  isMultiPart: boolean,
  responseType?: ResponseType,
  isFalconRequest?: boolean,
  isAEMHeader?: boolean,
  isCacheRequired?: boolean,
  isCDNImage?: boolean,
  isCDNImageorMessage?: boolean
) {
  let isRefreshTokenCalled: boolean = false;
  const resps = {
    isSuccess: false,
    resData: {},
    response: {},
    status: 0,
  };
  try {
    const baseURL = IMEnviornment(env);
    axios.defaults.headers.common['Content-Type'] = isMultiPart
      ? 'multipart/form-data'
      : 'application/json';

    delete axios.defaults.headers.common['Cookie'];
    axios.defaults.withCredentials = false;
    axios.defaults.headers.common['Cache-Control'] =
      'no-cache, no-store, must-revalidate';

    // if (!isEncrypt)
    //   axios.defaults.headers.common['Cache-Control'] =
    //     'no-cache, no-store, must-revalidate';
    //  console.log('hi 251');
    // console.log('there fore the headers',headers1)
    const resp = await axios({
      method: method,
      baseURL: baseURL,
      url: url,
      headers: moduleHeaders,
      data: isEncrypt
        ? JSON.stringify({
          encryptedKey: data[0],
          encryptedData: data[1],
        })
        : JSON.stringify(data),
      responseType: !isEncrypt ? responseType : undefined,
    })
    // console.log('hi 269',resp);
    let storedCacheData = resp.data;
    if (isCacheRequired && isCDNImage) {
      storedCacheData = Buffer.from(resp.data).toString('base64');
    }
    if (isCacheRequired) {
      let cachestored =
      {
        cachedata: storedCacheData,
        modifiedDate: resp?.headers['last-modified']
      };
      storeLocalDBData(url, JSON.stringify(cachestored));
    }

    //  // let head = response.data['head'];
    // let statusCode1234 = head1234['statusCd'];
    if (!isEncrypt && !isCDNImageorMessage) {
      // console.log('emteredd 287')
      // console.log('the is encrypt flag 285',isEncrypt)
      // let head1234 = resp;
      // console.log('the status code in 201',resp?.data?.head?.statusCd)
      return await error0to200(resp?.data?.head?.statusCd, moduleHeaders, url, resp?.data)
    }
    // console.log('in 290')
    return {
      isSuccess: true,
      resData: resp.data,
      response: resp.data,
    };
    // .then(async (response: { status: any; data: any }) => {
    //   console.log(response.status, url, "...test32")
    //   // let head = response.data['head'];
    //   // //status error handling
    //   // if (head) {
    //   //   let traceIDUrl = returnTraceIDUrl(headers, url);
    //   //   var navigation: any = IMNavigation.None;
    //   //   let statusCode = head['statusCd'];
    //   //   if (statusCode) {
    //   //     if (statusCode == IMCustomStatusCode.InvalidUser) {
    //   //       navigation = await returnNavigation(
    //   //         statusCode,
    //   //         '',
    //   //         traceIDUrl[1]
    //   //       );
    //   //     } else if (
    //   //       statusCode == IMCustomStatusCode.TimeOut ||
    //   //       statusCode == IMCustomStatusCode.Login ||
    //   //       statusCode == IMCustomStatusCode.ReLogin
    //   //     ) {
    //   //       var message: any = '';
    //   //       let meta = response.data['meta'];
    //   //       if (meta) {
    //   //         let errors = meta['errors'];
    //   //         let error = errors[0];
 
    //   //         if (errors && error) {
    //   //           let errorCode = error['errCd'];
    //   //           if (
    //   //             errorCode &&
    //   //             statusCode &&
    //   //             statusCode !== IMCustomStatusCode.ReLogin
    //   //           ) {
    //   //             statusCode = statusCode ? statusCode : Number(errorCode);
    //   //           }
    //   //           message = error['errMsg'];
    //   //         }
    //   //       }
    //   //       navigation = await returnNavigation(
    //   //         statusCode,
    //   //         message,
    //   //         traceIDUrl[1]
    //   //       );
    //   //     } else if (
    //   //       statusCode < IMCustomStatusCode.FSLErroCode &&
    //   //       statusCode != IMCustomStatusCode.PartialExecute
    //   //     ) {
    //   //       resp.response = errorInfo(
    //   //         init(statusCode),
    //   //         traceIDUrl[0],
    //   //         traceIDUrl[1]
    //   //       );
    //   //       resp.isSuccess = false;
    //   //       resp.status = statusCode;
    //   //       return resp;
    //   //     }
    //   //   }
    //   //   resp.isSuccess = false;
    //   //   resp.status = statusCode;
    //   //   resp.response = response.data;
    //   //   return resp;
    //   // }
    //   resp.isSuccess = true;
    //   resp.resData = response.data;
    //   resp.response = response;
    //   return resp;
    // })
    // .catch(
    //   async (error: {
    //     response: { data: any; status: any; headers: any };
    //   }) => {
    //     console.log("inside catch error----", error)
 
    //     if (error.response.status === 412 && fortitokenCount == 0) {
    //       await fortiToken(
    //         method,
    //         env,
    //         url,
    //         moduleHeaders,
    //         data,
    //         isEncrypt,
    //         isMultiPart,
    //         responseType,
    //         isFalconRequest,
    //         isAEMHeader
    //       );
    //     }
    //     resp.resData = error.response.data;
    //     resp.response = error.response;
    //     resp.status = error.response.status;
    //     return resp;
    //   }
    // );
  } catch (err: any) {
 
     console.log('the error',err)
    if (err?.response?.status) {
      let navigation;
      // console.log('the navigation',navigation1233);
      switch (err.response.status) {
        case 304:
          return {
            isSuccess: false,
            resData: "Failed with success - 304",
            response: "Failed with success - 304",
            statusCode: 304
          };
        case 412:
          // console.log('@@@the 412 case entered',url);
          //console.log("@@@DFF in the cacheRequestServices",cacheRequestServices)
          // cacheRequestServices.push({
          //   method: method,
          //   env: env,
          //   url: url,
          //   moduleHeaders: moduleHeaders,
          //   data: data,
          //   isEncrypt: isEncrypt,
          //   isMultiPart: isMultiPart,
          //   responseType: responseType,
          //   isFalconRequest: isFalconRequest,
          //   isAEMHeader: isAEMHeader,
          // });
         

          let tokenresponse:any 
          // let flag = false;
          // console.log('the counter 427', counter)
          
          tokenresponse = await TokenGeneration(url);

          // if(counter===0){
          //   counter+=1    
          //   tokenresponse = await TokenGeneration(url);
          //   console.log("TokenResponse 451",tokenresponse)
          //   counter=0;
          //   flag = true;
          //   // setFlag(true);
          //   console.log('the counter 435', counter)
          // }

          // if(counter>0){
          //   console.log("TokenResponse 459",tokenresponse)
          //   console.log("in the else condoiiton 438",counter)
          //   // waitForFlag();
          //   // waitForFlag
          //   await sleep(2000);
          // }

        //  console.log("TokenResponse 465",tokenresponse)
        //  console.log("the counteer here after",counter);
        
         
          // if(flag){
            
            // console.log('the cached services requests',cacheRequestServices)
            // console.log('@@@DFF the tokenresponse in 440---',tokenresponse)
            if (tokenresponse["boolean"] && tokenresponse["token"]) {
              // console.log('@@@DFF 69 enter--- ',tokenresponse["token"]);
              const globalHeader = IMGlobalHeader.getInstance();
              globalHeader.setFT42('Bearer '+tokenresponse["token"])
              // console.log("@DFF token generated",tokengenerated)
              // tokengenerated = true;
              // for (let a = 0; a <= cacheRequestServices.length - 1; a++) {
                let newFT42Headers = returnDefaultheaders(
                  moduleHeaders,
                  isAEMHeader,
                  isFalconRequest
                );
      
                const resp :any = await apiCall(
                 method,
                  env,
                  url,
                  newFT42Headers,
                  data,
                  isEncrypt,
                 isMultiPart,
                  responseType,
                  isFalconRequest,
                  isAEMHeader,
                );
               
                // console.log('@@@after apiCall inside 495', url, resp); 
                // if (a == cacheRequestServices.length - 1) {
                //   cacheRequestServices = [];
                // }
                // dataArray.push({
                //   url : cacheRequestServices[a].url,
                //   data : resp
                // })
                // console.log('@@@after apiCall inside 503', cacheRequestServices.url, resp);
                // console.log('@@@dataArray 503 ', dataArray);
              // }

              // console.log('@@@dataArray', dataArray);
              // console.log('@@@dataArray. item data : ', dataArray.find(item => item.url === url)?.data);
              
              // return dataArray.find(item => item.url === url)?.data;
              return resp
            } else {
              // console.log('@@@DFF inside the else condition 423 ', tokenresponse);
              let navigation = await returnNavigation(
                tokenresponse["errorCode"] || 412,
                "",
                ""
              );

              return  {
                isSuccess: false,
                resData: navigation,
                response: navigation,
              };
            }
          // }
            // const resp:any= await apiCall(
            //    method,
            //    env,
            //    url,
            //   newFT42Headers,
            //    data,
            //    isEncrypt,
            //    isMultiPart,
            //    responseType,
            //    isFalconRequest,
            //    isAEMHeader,
            // );
            // console.log('after the api call',resp)
            // return resp;

          default:
 
          navigation = await returnNavigation(
            err.response.status,
            '',
            ''
          );
      }
      const res = {
        isSuccess: false,
        resData: navigation,
        response: navigation,
      }
      return res;
      // let response123 =
      // console.log(response123);
      // return response123;
    }
    return resps;
  }
}
 
export async function androidiOSEncryptDecrypt(
  method: string,
  env: enviornment | string,
  url: string,
  headers: object,
  data: any,
  isEncrypt: boolean,
  isMultiPart: boolean,
  responseType?: ResponseType,
  isFalconRequest?: boolean,
  isAEMHeader?: boolean,) {
 
  const dataToEncrypt = JSON.stringify(data);
  let encryptedData: any;
 
  if (Platform.OS == 'android') {
    let dataReceivedAfterEncrypt = await EncryptFunc(dataToEncrypt, env);
    let arrayData = dataReceivedAfterEncrypt.split(',');
    let encryptedRequestData = ['', ''];
    encryptedRequestData[0] = arrayData[0].replace('[', '').trim();
    encryptedRequestData[1] = arrayData[1].replace(']', '').trim();
    encryptedData = encryptedRequestData
  } else {
    const encryptedRequestData = await encrypt(dataToEncrypt, env);
    encryptedData = encryptedRequestData
  }
 
  // console.log('444hello',encryptedData)
  if (encryptedData) {
    // console.log('i am entered 447')
    try {
      const encryptedResponse: any = await apiCall(
        method,
        env,
        url,
        headers,
        encryptedData,
        isEncrypt,
        isMultiPart,
        responseType,
        isFalconRequest,
        isAEMHeader,
      );
 
      const keyLength = Object.keys(encryptedResponse.resData).length
      if (encryptedResponse?.isSuccess && keyLength > 0) {
        let decryptedResponse: any
        if (Platform.OS == 'android') {
          decryptedResponse = await DecryptFunc(
            encryptedResponse.resData.encryptedData,
            encryptedResponse.resData.encryptedKey,
            env
          );
 
        } else {
          decryptedResponse = await decrypt({
            key: encryptedResponse.resData.encryptedKey,
            value: encryptedResponse.resData.encryptedData,
          },
            env
          );
        }
        // console.log('hiii 476',decryptedResponse);
        const responseParseData = JSON.parse(decryptedResponse);
        // console.log('hiii 478',responseParseData);
        let head = responseParseData['head'];
        // console.log('hiii 480',head);
        if (head) {
          // let traceIDUrl = returnTraceIDUrl(headers, url);
          // var navigation: any = IMNavigation.None;
          let statusCode = head['statusCd'];
          // console.log('here','483')
          // console.log('the is encrypt flag',isEncrypt)
 
          if (statusCode) {
            // console.log('the is encrypt flag 487',isEncrypt)
            return await error0to200(statusCode, headers, url, responseParseData);
 
          }
 
 
          else {
            // console.log('here494')
            const res = {
              isSuccess: true,
              resData: JSON.parse(decryptedResponse),
              response: JSON.parse(decryptedResponse)
            }
            return res;
          }
 
        }
 
        else {
 
          if (typeof decryptedResponse === 'string') {
            return {
              resData: JSON.parse(decryptedResponse),
              isSuccess: true,
              response: JSON.parse(decryptedResponse),
            };
          } else if (typeof decryptedResponse === 'object') {
            return {
              resData: JSON.parse(decryptedResponse),
              isSuccess: true,
              response: JSON.parse(decryptedResponse),
            };
          } else {
            return {
              resData: JSON.parse(decryptedResponse),
              isSuccess: true,
              response: JSON.parse(decryptedResponse),
            };
          }
        }
      } else {
        return encryptedResponse
      }
    } catch (err) {
      // console.log('the error ',err)
      return {
        response: err,
        isSuccess: false,
        resData: err,
      };
    }
  }
  else {
    return {
      response: 'Invalid Encrypt Data',
      isSuccess: false,
      resData: 'Invalid Encrypt Data',
    };
  }
}
 
 
export const IMBaseServices = async ({
  method,
  env = enviornment.DEV,
  url,
  headers,
  data,
  isMock,
  isEncrypt = false,
  mockFileName = '',
  isMultiPart = false,
  responseType,
  isFalconRequest,
  isAEMHeader,
  isCacheRequired = false,
  isCDNImage = false,
  isCDNImageorMessage = false,
}: BaseApiCallProps) => {
  const baseUrl = IMEnviornment(env);
  try {
    if (isMock) {
      let res = IMMockApiManager(mockFileName, url);
      return res;
    } else {
      const isConnected = await isGetConnection();
      if (isConnected) {
        let modifiedHeaders = returnDefaultheaders(
          headers,
          isAEMHeader,
          isFalconRequest
        );
        // console.log('therefore the headers are',modifiedHeaders)
        if (isEncrypt) {
          const response = await androidiOSEncryptDecrypt(
            method,
            env,
            url,
            modifiedHeaders,
            data,
            isEncrypt,
            isMultiPart,
            responseType,
            isFalconRequest,
            isAEMHeader,
          );
 
          return response;
        } else {
          const response = await apiCall(
            method,
            env,
            url,
            modifiedHeaders,
            data,
            isEncrypt,
            isMultiPart,
            responseType,
            isFalconRequest,
            isAEMHeader,
            isCacheRequired,
            isCDNImage,
            isCDNImageorMessage
          );
          return response;
        }
      } else {
        return {
          resp: 'No Network',
          isSuccess: false,
          resData: 'No Network',
        };
      }
    }
  } catch (err) {
    return {
      resp: err,
      isSuccess: false,
      resData: err,
    };
  }
};
export { HttpMethods };