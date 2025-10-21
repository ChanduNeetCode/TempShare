import { NativeModules } from 'react-native';
import { enviornment } from '../../EnviornmentVariable/IMEnviornmentVariable';

const { IMCryptoManager } = NativeModules;

export async function EncryptFunc(EncrypString: string, env?: enviornment | string) {
  try {
    const res = await IMCryptoManager.EncryptedEvent(EncrypString, env);
    return res;
  } catch (error) {
    return null;
  }
}

export async function DecryptFunc(DecryptString: string, DecryptKey?: string, env?: enviornment | string) {
  try {
    const res = await IMCryptoManager.DecryptedEvent(DecryptString, DecryptKey, env);
    return res;
  } catch (error) {
    return null;
  }
}

export async function DecryptAEMFun(DecrypString: string, env?: enviornment | string) {
  try {
    const res = await IMCryptoManager.decryptAEMResponse(DecrypString, env);
    return res;
  } catch (error) {
    return null;
  }

}

export default { EncryptFunc, DecryptFunc, DecryptAEMFun };
