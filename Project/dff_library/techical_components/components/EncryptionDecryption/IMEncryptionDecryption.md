# EncryptionDecryption v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use EncryptionDecryption Component -

import { encrypt } from 'dff_library'  for Encryption.
import { decrypt } from 'dff_library'  for Decryption.


## IMEncryption

| Props                   | Params                | isRequire | Description                                                                      |
| ----------------------- | --------------------- | --------- | -------------------------------------------------------------------------------- |
| data                    | any                   | Yes       | data that is to be passed for encryption in the form of {key :value} pair        |


### IMEncryption example

```JSX
 const encryptOnPress = async () => {
    try {
      const res = await encrypt({
        key: 'name', value: {
          Name: 'Daya',
          Address: 'Pune'
        }
      });
      setEncryptedKey('');
      setEncryptedData('');
    }
    catch (error) {
    }
  };
  
```
Here we are calling encrypt() function with required {key: value} pair paramaters.

```

  
   <Text style={{ color: colors.GradientOrangeEnd, margin: 10 }}>EncryptedData: </Text>
            <Text> {(encryptedKey)}</Text>
            <Text style={{ color: colors.GradientOrangeEnd, margin: 10 }}>EncryptedKey: </Text>
            <Text>{(encryptedData)}</Text>

```


## IMDecryption

| Props                   | Params                | isRequire | Description                                                                      |
| ----------------------- | --------------------- | --------- | -------------------------------------------------------------------------------- |
| data                    | any                   | Yes       | Encrypteddata that is to be passed for decryption in the form of {key :value} pair        |


### IMDecryption example

```JSX
    const decryptOnPress = async () => {
    try {
      if (encryptedData) {
        const res = await decrypt({ key: encryptedKey, value: encryptedData })
        setDecryptedData(res);

      }
      else {
      }
    }
    catch (error) {
    }
  }
  
```
Here we are calling decrypt() function with required {key: value} pair paramaters.

The key is encrypted key and the value is encrypted data that is to be decrypted.

```


  <Text style={{ color: colors.GradientOrangeEnd, margin: 10 }}> Decrypted Data</Text>
              <Text>{decryptedData}</Text>

```

The decrypted data will be in the form of {key,value} pair.