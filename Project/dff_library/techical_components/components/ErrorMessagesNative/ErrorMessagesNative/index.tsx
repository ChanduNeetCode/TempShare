import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';

const { CommonRNBridge, ReactNatvieRefreshToken } = NativeModules;


export const ErrorMessagesNative = async () => {
    if (Platform.OS == "android") {
        try {

            const res = await CommonRNBridge.getAllErrorMessage()
            if(res){
            await AsyncStorage.setItem("ErrorMsgs", res)
            }
            else{
                await AsyncStorage.setItem("ErrorMsgs", " ")
            }
        }
        catch (error) {
            console.log("@@@DFF getting errror in native function call", error)
            await AsyncStorage.setItem("ErrorMsgs", " ")
        };
    }
    else {
        try {
            const res = await errorMessageiOS()
            if(res){
            await AsyncStorage.setItem("ErrorMsgs", JSON.stringify(res))
            }
            else{
                await AsyncStorage.setItem("ErrorMsgs", " ")
            }
        }
        catch (error) {
            console.log("@@@DFF getting errror in native function call", error)
            await AsyncStorage.setItem("ErrorMsgs", " ")
        };
    }

};
const errorMessageiOS = async () => {
    return new Promise((resolve, reject) => {
        ReactNatvieRefreshToken.passDecodableMessages((data: any) => {
            if (data) {
                resolve(data)
            }
            else {
                console.log("@@@DFF error")
                reject(new Error("error"))
            }
        });

    })
}

