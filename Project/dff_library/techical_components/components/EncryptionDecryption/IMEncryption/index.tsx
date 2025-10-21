import { NativeModules } from 'react-native';

const { EncryptionDecryptionManager } = NativeModules;

export const encrypt = async (data: any, env: string) => {
  try {
    const result = await EncryptionDecryptionManager.encryption(data, env);
    return result;
  } catch (error) {
    return null;
  }
};
