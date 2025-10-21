# AdobeTarget v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use EncryptionDecryption Component -

import { IMAdobeTargetA, IMAdobeTargetB, IMAdobeTargetC } from '@icicibank/tsg1_2259_rn_dff_library' for AdobeTarget.

const [result, setResult] = useState([]);
const onPressButton = async () => {
try {
var res = await accountTargetListItemData();
setResult(res);
}
catch (error) {
console.log("error", error)
}
};

Here we are calling accountTargetListItemData() function to get data.

public struct IMAdobeExperienceModule: Decodable {
public let exp: String?
public let redirecturl: String?
public let title: String?
public let headingtext: String?
public let button: String?
public let description: String?
public let imageurl: String?
public let bannerName: String?
public let bannerCategory: String?
public let buttontxtcolor: String?
public let descriptioncolor: String?
public let buttonbgcolor: String?
public let titlecolor: String?
}
// This the structure of data received from the function accountTargetListItemData();

## IMAdobeTargetA

| Props               | Params                | isRequire | Description                                   |
| ------------------- | --------------------- | --------- | --------------------------------------------- |
| onPressBannerA      | (id: number) => void; | No        | to add function callBack on press of banner   |
| mainViewContainerA  | ViewStyle             | No        | styles for mainViewContainer for experience A |
| bannerViewStyleA    | ViewStyle             | No        | styles for bannerViewStyle for experience A   |
| bannerStylePropA    | ViewStyle             | No        | styles for bannerStyleProp for experience A   |
| cardHeight          | number                | No        | to adjust height of card                      |
| numberOfProgressBar | number                | No        | for number progess bar to show                |
| progressBarHeight   | number                | No        | to adjust height of Progress Bar              |
| progressBarWidth    | number                | No        | to adjust width of Progress Bar               |
| imagesToDisplay     | any                   | No        | component to display in banner                |
| titleStylePropA     | TextStyle             | No        | styles for title text                         |
| titltTextA          | string                | No        | for title text                                |

### IMAdobeTargetA example

```JSX
    IMAdobeTargetA({
      onPressBannerA: handleBannnerPressA,
      numberOfProgressBar: 4,
      imagesToDisplay: componentToDisplay,
      titltTextA: result[3],
      titleStylePropA: styles.titleStyle,
      cardHeight: 102,
      progressBarWidth: 65
    })

```

## IMAdobeTargetB

| Props                 | Params      | isRequire | Description                                                                 |
| --------------------- | ----------- | --------- | --------------------------------------------------------------------------- |
| onPressBannerB        | () => void; | No        | to add function callBack on press of banner                                 |
| bannerViewContainerB  | ViewStyle   | No        | styles for bannerViewStyle for experience B                                 |
| mainViewContainerB    | ViewStyle   | No        | styles for mainViewContainer for experience B                               |
| descriptionTextStyleB | TextStyle   | No        | styles for description Text                                                 |
| descriptionText       | string      | No        | for description text                                                        |
| imageUrlPropB         | string      | No        | for image url                                                               |
| isAboveText           | Boolean     | No        | to show text above banner(if it's false text will be visible on the banner) |

### IMAdobeTargetA example

```JSX
    IMAdobeTargetB({
      onPressBannerB: handleBannnerPressB,
      imagesToDisplay: result[6],
      descriptionText: result[5],
      isAboveText: false })

```

## IMAdobeTargetC

| Props                 | Params      | isRequire | Description                                 |
| --------------------- | ----------- | --------- | ------------------------------------------- |
| onPressBannerC        | () => void; | No        | to add function callBack on press of banner |
| descriptionStyleC     | ViewStyle   | No        | styles of description for experience C      |
| buttonStyleC          | ViewStyle   | No        | styles of button for experience C           |
| bannerStyleC          | ViewStyle   | No        | styles of banner for experience C           |
| bannerStylePropA      | ViewStyle   | No        | styles for bannerStyleProp for experience A |
| cardHeightC           | number      | No        | to adjust height of card                    |
| buttonTextStyleC      | TextStyle   | No        | styles for button text                      |
| descriptionTextStyleC | TextStyle   | No        | styles for description text                 |
| headingTextStyleC     | TextStyle   | No        | styles for heading text                     |
| titleTextStyleC       | TextStyle   | No        | styles for title text                       |
| buttonTextC           | string      | No        | for button text                             |
| descriptionTextC      | string      | No        | for description text                        |
| titleTextC            | string      | No        | for title text                              |
| headingTextC          | string      | No        | for heading text                            |

### IMAdobeTargetA example

```JSX
    IMAdobeTargetC({ 
      onPressBannerC: handleBannnerPressC, 
      buttonTextC: result[4], 
      descriptionTextC: result[5], 
      headingTextC: result[3], 
      titleTextC: result[2] 
      })

```
