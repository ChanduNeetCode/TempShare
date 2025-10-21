# SupportDrawer v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in SupportDrawer components -
import { IMSupportDrawer } from '@icicibank/tsg1_2259_rn_dff_library';

## IMSupportDrawer

| Props                   | Params                | isRequire | Description                                                                |
| ----------------------- | --------------------- | --------- | -------------------------------------------------------------------------- |
| description             | string                | No        | description of the popup                                                   |
| logoLinearGradientColor | string                | No        | logo linear gradient color first half                                      |
| logoLinearGradientColor | string                | No        | logo linear gradient color second half                                     |
| title                   | string                | No        | title of the popup                                                         |
| isCloseOnBackgroundTap  | boolean               | No        | on background tap, popup closes                                            |
| isModalVisible          | boolean               | No        | popup visibility                                                           |
| isOnClickItemDisable    | boolean               | No        | on Click Item disabled                                                     |
| isStatusBarTranscluent  | boolean               | No        |statusBar Transculent      |
| titleImage              | JSX.Element           | No        | image title logo                                                           |
| backgroundStyle         | ViewStyle             | No        | background style                                                           |
| descriptionStyle        | TextStyle             | No        | description title                                                          |
| imageItemContainerStyle | ViewStyle             | No        | render item image style                                                    |
| itemTitleStyle          | TextStyle             | No        | render item title style                                                    |
| itemDescriptionStyle    | TextStyle             | No        | render item description                                                    |
| itemBackgroundStyle     | ViewStyle             | No        | parent container popup style                                               |
| logoContainerStyle      | ViewStyle             | No        | linear gradient style                                                      |
| modalStyle              | ViewStyle             | No        | linear gradient style                                                      |
| childContainerStyle     | ViewStyle             | No        | To change containers style                                                 |
| tileStyle               | TextStyle             | No        | title style                                                                |
| itemOnPress             | (itemDetails) => void | No        | item on press                                                              |
| onPressBlurArea         | () => void            | No        | function call on press blur area                                           |
| initialCircleContainer  | () => JSX.Element     | No        | Render a row in the logo. Should return a valid React Element.             |
| renderCustomContainer   | () => JSX.Element     | No        | Render a row in the custom container. Should return a valid React Element. |
| renderItemContainer     | () => JSX.Element     | No        | Render a row in the items. Should return a valid React Element.            |
| content                 | ContentObject         | No        | content to display                                                         |
| activeOpacityProp       | number                | No        | to change active opacity in 0 and 1                                        |

## ContentObject

| Props       | Params                | isRequire | Description      |
| ----------- | --------------------- | --------- | ---------------- |
| description | string or JSX.Element | yes       | item description |
| image       | JSX.Element           | yes       | item image       |
| title       | string or JSX.Element | yes       | item title       |

### IMSupportDrawer example

```JSX
     <IMSupportDrawer
        titleImage={<ICGeneralActiveSchedulePayments width={32} height={32} />}
        title="Payments"
        description="Payments are fast, easy and highly secure. Know more about them and find help below."
        isCloseOnBackgroundTap = {true}
        isOnClickItemDisable={false}
        content = {data}
        itemOnPress={(val)=>{}}
        backgroundStyle={{backgroundColor:'#333638'}}
        childContainerStyle={{}}
      />
```
