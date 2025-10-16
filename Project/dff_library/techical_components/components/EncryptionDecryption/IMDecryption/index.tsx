import { NativeModules } from 'react-native';

const { EncryptionDecryptionManager } = NativeModules;

export const decrypt = async (data: any, env: string) => {
  try {
    const result = await EncryptionDecryptionManager.decryption(data, env);
    return result;
  } catch (error) {
    return null;
  }
};
