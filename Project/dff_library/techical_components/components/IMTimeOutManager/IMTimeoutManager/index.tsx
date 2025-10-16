import { NativeModules, Platform } from 'react-native';

const { CommonRNBridge, ReactNatvieRefreshToken } = NativeModules;


export const getRefreshToken = async (url :any) => {
    const defaultResponse = { "errorCode": "", "errorMessage": "", "boolean": false, "token": "" }
    // console.log('inside the gerefreshtoken 8',url)
    try {

        if (Platform.OS === 'ios') {
            const result = await tokenGeneratediOS();
            if (result == 'false') {
                return await tokenGeneratediOS();
            }
            else if (result == 'error') {
                return { "errorCode": "", "errorMessage": "Error while generating token", "boolean": false, "token": "" }
            }
            else {
                const resp = { "errorCode": "200", "errorMessage": "", "boolean": true, "token": result }
                // console.log('@@@DFF in return result', resp);
                return resp;
            }
        } else {
            // const result: any = await tokenGeneratedAndroid();
            // console.log('before native function call 34')
           
            try{
                const result: any = await CommonRNBridge.getToken();
                // console.log('@@@DFF in return result', result);
            const res = JSON.parse(result)
            // console.log('@@@DFF in return after parse', res);
            return res;
            }  catch(err){
                // console.log('i am entered inside the catch block 41',err)
                return defaultResponse;
            }
          
            
        }

    }
    catch (error) {
        // console.log('inside the outside catch 50',error)
        return defaultResponse
    };

};

const tokenGeneratediOS = async () => {
    return new Promise((resolve, reject) => {
        // console.log('@DFF in Promise method');
        ReactNatvieRefreshToken.getRefreshTokenFromRN((data: any) => {
            // console.log('@DFF in token method');
            if (data) {
                // console.log('@DFF in resolve method', data);
                resolve(data)
            }
            else {
                reject(new Error("Token is not generated"))
            }
        });

    })
}

const tokenGeneratedAndroid = async () => {
    return new Promise((resolve, reject) => {
        // console.log('@DFF in Promise method');
        CommonRNBridge.getToken((data: any) => {
            // console.log('@DFF in token method');
            if (data) {
                // console.log('@DFF in resolve method', data);
                resolve(data)
            }
            else {
                reject(new Error("Token is not generated"))
            }
        });

    })
}