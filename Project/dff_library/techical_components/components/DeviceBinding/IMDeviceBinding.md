# Device Binding v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$ npm i react-native-fs

How to use FileManager function -
import { IMDeviceBinding } from '@icicibank/tsg1_2259_rn_dff_library'

## IMDeviceBindingProps

| Props         | Params | isRequire | Description                 |
| ------------- | ------ | --------- | --------------------------- |
| deviceName    | string | No        | Gets the device name.       |
| systemVersion | string | No        | Gets the device OS version. |
| uniqueId      | string | No        | Gets the device unique ID   |

### IMBindingManager example (File Creation)

```JS
        IMDeviceBinding({
          deviceName = _deviceName ,
          systemVersion = _systemVersion,
          uniqueId = _udid['_j'],
        )}
```
