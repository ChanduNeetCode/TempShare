# ProcessLoader v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use ProcessLoader component -
import { IMProcessLoader } from '@icicibank/tsg1_2259_rn_dff_library'

### Props in Process Loader Component

| **_attribute_**   | **_format_**        | **_description_**           | **_type_** |
| ----------------- | ------------------- | --------------------------- | ---------- |
| parentViewStyle   | StyleProp           | Set style of main container | Optional   |
| gifStyle          | StyleProp           | Image style                 | Optional   |
| source            | ImageSourcePropType | Gif Source                  | Optional   |
| title             | string              | Title text                  | Mandatory  |
| titleStyle        | StyleProp           | Title text style            | Optional   |
| subTitle          | string              | Sub title text              | Mandatory  |
| subTitleStyle     | StyleProp           | Sub title text style        | Optional   |
| titleContainer    | JSX.Element         | Title container             | optional   |
| subTitleContainer | JSX.Element         | subTitle container          | Optional   |

### IMProcessLoader example

JSX Implementation

```JSX
        <!--How to create Process Loader View in the Component-->
        <IMProcessLoader
          title={STRINGS.str_title}
          subTitle={STRINGS.str_subTitle}
        />
```
