import { NativeModules } from 'react-native';

const { EncryptionDecryptionManager } = NativeModules;

export const decryptAEM = async (data: any, env: string, isMaster?: boolean) => {
  try {
    const convObj = {
      data: data,
      isMaster: isMaster,
    };
    const result = await EncryptionDecryptionManager.decryptionAEM(convObj, env);
    return result;
  } catch (error) {
    return null;
  }
};
