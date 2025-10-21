import { Platform } from 'react-native';
import ErrorMessage from './errorCode.json';
import localMessages from './messages_local.json';
import dynaMicMessages from './messages_dynamic.json';

import { HttpMethods, IMBaseServices } from '../../BaseServices/IMBaseServices';
import { DecryptAEMFun } from '../../EncryptionDecryptionAndroid/IMEncryptionDecryptionAndroid';
import { getCacheData, setCacheData } from '../../CacheManager';
import { decryptAEM } from '../../EncryptionDecryption/IMDecryptionAEM';
import {
  enviornment,
  IMErrorMessageBaseURL,
} from '../../EnviornmentVariable/IMEnviornmentVariable';
import { getLocalDBData } from '../../CacheManager/index';
import { ErrorMessagesNative } from '../../ErrorMessagesNative/ErrorMessagesNative';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMPersistentProps } from './types';

export const selectErrorDetails = (code: string) => {
  try {
    let getData = getCacheData(code);
    return getData[0]?.value || " ";
  } catch (err) {
    console.log('@@@DFF selectErrorDetails err---,', err)
    return " ";
  }
};


export const dataInsert = async (list: any[]) => {
  if (list.length > 0) {
    for (var i = 0; i <= list.length - 1; i++) {
      let code = list[i]?.code;
      let message = list[i]?.message;
      if (code && message) {
        setCacheData(code, message);
      }
    }
  }
  else {
    setCacheData(" ", " ")
  }
}
export const tableInsert = (list: any) => {
  for (var i = 0; i <= list.data.length - 1; i++) {
    let code = list.data[i]?.code;
    let message = list.data[i]?.message;
    setCacheData(code, message);
  }
};
export const clearAsyncStorageData = async () => {
  // console.log("@@@DFF before removing error msgs from storage", await AsyncStorage.getItem("ErrorMsgs"))
  await AsyncStorage.removeItem("ErrorMsgs")
  // console.log("@@@DFF after removing error msgs from storage", await AsyncStorage.getItem("ErrorMsgs"))
};

export const insertingAllMsgToLocalDB = async ({
    env = enviornment.DEV,
    isfromNative = false,
  }:IMPersistentProps) => {
  
  const isContentFragment = true;

  if (isfromNative) {
    try {

      await ErrorMessagesNative()
      const data: any = await AsyncStorage.getItem("ErrorMsgs")
      const parsedData = JSON.parse(data)
      const response = Object.entries(parsedData).map(([code, message]) => ({ code, message }))
      if (response) {
        Platform.OS == "android" ? dataInsert(response) : dataInsert(parsedData)
        // clearData()
        return true
      } else {
        console.log("@@@DFF else case")
        tableInsert(localMessages)
        tableInsert(dynaMicMessages)
        return true
      }
    }
    catch (err) {
      console.log('@@@DFF error CommonRNBridge.getAllErrorMessage --', err)
      tableInsert(localMessages)
      tableInsert(dynaMicMessages)
      return true
    }

  }

  else {
    const CMSBaseURL = IMErrorMessageBaseURL(env, isContentFragment) + (isContentFragment
      ? 'ui-elements/ui-elements'
      : (env == enviornment.CUG || env == enviornment.PROD) ? 'static-data/dff/messages.json' : 'static-data/dff/messages_test.json');
    let databaseData = await getLocalDBData(CMSBaseURL);
    let headerDate = databaseData ? databaseData.modifiedDate : "Thu, 01 Jan 1970 05:30:00 IST";

    try {
      const res: any = await IMBaseServices({
        method: HttpMethods.GET,
        url: CMSBaseURL,
        headers: { 'If-Modified-Since': headerDate },
        env: '',
        isCacheRequired: true,
        isCDNImageorMessage: true
      });
      let encryptdata;
      if (res?.isSuccess && res.resData) {
        // api success case
        encryptdata = res.resData;
      } else if (res?.statusCode == 304 && databaseData &&databaseData.cachedata ) {
        // 304 error handling case
        encryptdata = databaseData.cachedata;
      } else {
        // all other failure cases 
        if (isContentFragment) {
          tableInsert(dynaMicMessages);
          tableInsert(localMessages);
        } else {
          tableInsert(ErrorMessage);
        }
        return true;
      }
      let decryptData;
      if (Platform.OS == 'ios') {
        decryptData = await decryptAEM(encryptdata, env);
      } else if (Platform.OS == 'android') {
        decryptData = await DecryptAEMFun(encryptdata, env);
      }

      if (decryptData) {
        if (isContentFragment) {
          const parseData = JSON.parse(decryptData)?.contentReference;
          if (parseData) {
            parseData?.map((item: any) => {
              item?.childContentFragment?.uiElements?.map((itemData: any) => {
                let uiCode = itemData?.uiCode
                let uiMessage = itemData?.text
                setCacheData(uiCode, uiMessage);
              })
            })
          } else {
            tableInsert(dynaMicMessages);
          }
        } else {
          const parseData = JSON.parse(decryptData);
          if (parseData?.data?.length > 0) {
            tableInsert(parseData);
          }
          else {
            tableInsert(ErrorMessage);
          }
        }

      } else {
        isContentFragment
          ? tableInsert(dynaMicMessages) : tableInsert(ErrorMessage);
      }
      isContentFragment && tableInsert(localMessages);

      return true;
    }
    catch (err) {
      if (isContentFragment) {
        tableInsert(dynaMicMessages);
        tableInsert(localMessages);
      } else {
        tableInsert(ErrorMessage);
      }

      return true;
    }
  }
};

//TODO:Implememtation of Local DB
// import SQLite, { openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
// import ErrorMessage from './errorCode.json';
// import axios from 'axios';
// import { HttpMethods, IMBaseServices } from '../../BaseServices/IMBaseServices';
// import { DecryptAEMFun } from '../../EncryptionDecryptionAndroid/IMEncryptionDecryptionAndroid';

// var db = SQLite.openDatabase({ name: 'IMobile_DFF_DB.db', location: 'default' });

// export interface ErrorDetails {
//   code: string;
//   message: string;
// }

// export const createTable = async (tableName?: string): Promise<boolean> => {
//   return new Promise(async (resolve, reject) => {
//     const table = tableName ? tableName : 'ErrorDetails';
//     (await db).transaction(tx => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS ${table} (
//           code TEXT,
//           message TEXT
//         );`,
//         [],
//         () => {
//           resolve(true);
//         },
//         error => {
//           reject(error);
//         },
//       );
//     });
//   });
// };

// export const insertErrorDetails = async (
//   errorDetails: ErrorDetails,
//   tableName?: string,
// ): Promise<ErrorDetails> => {
//   return new Promise((resolve, reject) => {
//     const table = tableName ? tableName : 'ErrorDetails'
//     const { code, message } = errorDetails;
//     const data = [code, message];
//     selectErrorDetails(errorDetails.code, table)
//       .then(async (details) => {
//         if (details == null) {
//           (await db).transaction(
//             tx => {
//               tx.executeSql(
//                 `INSERT INTO ${table} (code, message) VALUES (?, ?)`,
//                 [...data],
//                 (_, results) => {
//                   if (results.rowsAffected > 0) {
//                     resolve(errorDetails);
//                   } else {
//                     reject(new Error('Failed to insert error details'));
//                   }
//                 },
//                 error => {
//                   reject(error);
//                 },
//               );
//             },
//             error => {
//               reject(error);
//             },
//           );
//         } else {
//           return 'The code already exists in database :';
//         }
//       })
//       .catch(error => {
//         return error;
//       });
//     return;
//   });
// };

// export const updateErrorDetails = async (
//   code: string,
//   errorDetails: ErrorDetails,
//   tableName?: string,
// ): Promise<ErrorDetails | null> => {
//   return new Promise(async (resolve, reject) => {
//     const table = tableName ? tableName : 'ErrorDetails'
//     const { message } = errorDetails;
//     (await db).transaction(
//       tx => {
//         tx.executeSql(
//           `UPDATE ${table} SET
//           message = ?
//           WHERE code = ?`,
//           [message, code],
//           (_, results) => {
//             if (results.rowsAffected > 0) {
//               resolve(errorDetails);
//             } else {
//               resolve(null);
//             }
//           },
//           error => {
//             reject(error);
//           },
//         );
//       },
//       error => {
//         reject(error);
//       },
//     );
//   });
// };

// export const selectErrorDetails = async (
//   code: string,
//   tableName?: string,
// ): Promise<ErrorDetails | null> => {
//   return new Promise(async (resolve, reject) => {
//     const table = tableName ? tableName : 'ErrorDetails';
//     (await db).transaction(
//       tx => {
//         tx.executeSql(
//           `SELECT * FROM ${table} WHERE code = ?`,
//           [code],
//           (_, results) => {
//             if (results.rows.length > 0) {

//               resolve(results.rows.item(0).message);
//             } else {
//               resolve(null);
//             }
//           },
//           error => {
//             reject(error);
//           },
//         );
//       },
//       error => {
//         reject(error);
//       },
//     );
//   });
// };

// export const deleteErrorDetails = async (
//   errorCode: string,
//   tableName?: string,
// ): Promise<boolean> => {
//   return new Promise(async (resolve, reject) => {
//     const table = tableName ? tableName : 'ErrorDetails';
//     (await db).transaction(
//       tx => {
//         tx.executeSql(
//           `DELETE FROM ${table} WHERE errorCode = ?`,
//           [errorCode],
//           (_tx, results) => {
//             resolve(results.rowsAffected > 0);
//           },
//           error => {
//             reject(error);
//           },
//         );
//       },
//       error => {
//         reject(error);
//       },
//     );
//   });
// };
// export const insertingAllMsgToLocalDB = async (
//   tableName?: string,
// ): Promise<boolean> => {
//   return new Promise(async (_resolve, _reject) => {
//     const table = tableName ?tableName : 'ErrorDetails';
//     const CMSBaseURL: string =
//       'https://www.imobilecdn-uat.icicibank.com/api/assets/icicibank/imobile/static-data/dff/messages.json';
//     try {
//       const res: any = await IMBaseServices({
//         method: HttpMethods.GET,
//         url: CMSBaseURL,
//         env:'',
//       });
// let data: any = res;
// if (data?.isSuccess) {
//   const decryptData = await DecryptAEMFun(data.resData);
//   const parseData = JSON.parse(decryptData);
//   createTable(table)
//     .then(() => {
//       for (var i = 0; i <= parseData.data.length; i++) {
//         const newErrorDetails: ErrorDetails = {
//           code: parseData.data[i].code,
//           message: parseData.data[i].message,
//         };
//         insertErrorDetails(newErrorDetails, table)
//           .then(details => {
//           })
//           .catch(error => {

//           });

//       }
//     })
//     .catch(error => {
//             console.error('Error creating table:', error);
//           });
//       } else {
//         createTable(table)
//           .then(() => {
//             for (var i = 0; i <= ErrorMessage.data.length; i++) {
//               const newErrorDetails: ErrorDetails = {
//                 code: ErrorMessage.data[i].code,
//                 message: ErrorMessage.data[i].message,
//               };
//               insertErrorDetails(newErrorDetails, table)
//                 .then(details => {
//                   console.log('Error details inserted successfully:', details);
//                 })
//                 .catch(error => {
//                   console.error('Error inserting error details:', error);
//                 });
//             }
//           })
//           .catch(error => {
//             console.error('Error creating table:', error);
//           });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });

// }