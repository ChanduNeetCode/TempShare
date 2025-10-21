# Clipboard v1.13.2

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$npm i @react-native-clipboard/clipboard

How to use in Clipbaord components -
import { IMClipbaord } from '@icicibank/tsg1_2259_rn_dff_library'

## IMClipboard

| Props         | Params                      | isRequire | Description                                         |
| ------------- | --------------------------- | --------- | --------------------------------------------------- |
| copiedContent | Any                         | Yes       | copy content                                        |
| isSelect      | boolean                     | No        | initial clipboard icon is on or off. Default is off |
| copyFunc      | (copiedContent:any) => void | No        | Selection callback                                  |
| selectImage   | JSX.Element                 | Yes       | Selection image                                     |
| unselectImage | JSX.Element                 | Yes       | Unselecting image                                   |

### IMClipboard example (clipboard)

```JSX
        const copiedText = "I2133049948";

        <IMClipboard
          copiedContent={copiedText}
          copyFunc={(copyText)=>{}}
          isSelect={false}
          selectImage={<ICGeneralDisabledCopy/>}
          unselectImage={<ICGeneralCopy  />}
        />
```
