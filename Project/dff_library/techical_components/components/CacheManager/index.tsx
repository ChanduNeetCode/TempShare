import AsyncStorage from "@react-native-async-storage/async-storage";

let cacheManagerDict = new Map();
let checkKeyPresent = false;

export const setCacheData = (keyValue: string, valueRecieved: any) => {
  cacheManagerDict.set(keyValue, valueRecieved);
};

export const getCacheData = (keyValue: string) => {
  checkKeyPresent =
    cacheManagerDict.get(keyValue) &&
    cacheManagerDict.get(keyValue) != undefined
      ? true
      : false;
  if (cacheManagerDict.size > 0 && checkKeyPresent) {
    let cacheData = [
      {
        key: keyValue,
        value: cacheManagerDict.get(keyValue),
      },
    ];
    return cacheData;
  } else {
    return [];
  }
};

export const getWholeCacheData = () => {
  return cacheManagerDict;
};

export const removeCacheData = () => {
  cacheManagerDict.clear();
};

// local database storing

// set the data
export const storeLocalDBData = async(url:any,data:any)=>{
  try{
    await AsyncStorage.setItem(url,data);
  }
  catch(err){
    console.log('error')
  }
}

// get the data
export const getLocalDBData = async (url:string)=>{
  let data:any = await AsyncStorage.getItem(url);
  return JSON.parse(data);
}