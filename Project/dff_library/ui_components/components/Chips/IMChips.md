# Chips v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in Checkbox components -
import { IMChips} from '@icicibank/tsg1_2259_rn_dff_library'

## IMCheckbox

| Props                   | Params                | isRequire | Description                              |
| ----------------------- | --------------------- | --------- | ---------------------------------------- |
| addLeftIconImage        | any                   | No        | Svg icon/emoji to add on left side       |
| addRightIconImage       | any                   | No        | Svg icon/emoji add on right side         |
| isDisable               | boolean               | No        | Chip disabled or not                     |
| isSelect                | boolean               | No        | Chip border selected or not              |
| isLeftIconImage         | boolean               | No        | To diaplay svg or emoji in left side     |
| isRightIconImage        | boolean               | No        | To diaplay svg or emoji in right side    |
| label                   | string or JSX.Element | Yes       | Text inside the chip                     |
| value                   | string                | No        | For identification                       |
| changeStyleLabel        | TextStyle             | No        | Label style                              |
| changeStyleContainer    | ViewStyle             | No        | Total container style                    |
| changeSelectedContainer | ViewStyle             | No        | Total container style when selected      |
| onPress                 | ()=>void              | No        | Callback function while clicking on chip |

### IMChips example

```JSX
  <IMChips label='Type'
    addLeftIconImage={<ICLineTransferOverseas height={7.3} width={7.3} />}
    changeStyleContainer={{
          backgroundColor: '#FAEFE8',
          borderRadius: 8,
          minHeight: actuatedNormalizeHeight(17),
          minWidth: actuatedNormalizeWidth(31),
          padding: 2,
          paddingBottom: 8,
          paddingTop: 8,
        }}
        changeStyleLabel={{
          color: '#F0792E',
          fontFamily: font.MulishRegular,
          fontWeight: FontWeight._500,
          fontSize: 10,
          lineHeight: 12,
          letterSpacing: 0.25,
          marginHorizontal: 0,
        }}
        isLeftIconImage
        value=''
  />


```
