# EncryptionDecryption v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use Adobe OD Component -

import { adobeODOfferRewards } from 'dff_library'  


## Adobe OD

| Props                   | Params                | isRequire | Description                                                                      |
| ----------------------- | --------------------- | --------- | -------------------------------------------------------------------------------- |
| fedId                    | any                   | Yes       |passed for Fedid related offers        |


### Adobe OD example

```JSX
 const data = async () => {
    try {
      const res = await adobeODOfferRewards('value');
    }
    catch (error) {
    }
  };
  
```



