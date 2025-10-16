# TimePicker v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use TimePicker component -
import { IMTimePicker } from '@icicibank/tsg1_2259_rn_dff_library'

## IMTimePicker

## TimePickerItem
 
| Props                  | Params                             | isRequire| Description                        |
| -------------------    | ------------------------            | ---------| -------------------------------    |
| isHelperTextMode       | boolean                             | No       | text input below text visibility   |
| isInputTextButton      | boolean                             | No       | right side button name             |
| isTextInputRightIcon   | boolean                             | No       | text input right icon              |
| isSmallCase            | boolean                             | No       | If you want am or pm make true     |
| use24Hour              | boolean                             | No       | If you want 24Hour format make true|
| itemHeight             | Number                              | Yes      | Height of each item                |
| wrapperHeight          | Number                              | No       | Height of total wrapper container  |
| highlightColor         | string                              | No       | color of highlighted Bar           |
| wrapperBackground      | string                              | No       | background color of wrapper        |
| label                  | string                              | No       | text input above title             |
| placeholderText        | string                              | No       | placeholder text input             |
| helperText             | string                              | No       | text input below text              |
| pickerContainerStyle   | ViewStyle                           | No       | styles for picker container        |
| scrollContainerStyle   | ViewStyle                           | No       | styles for total scroll container  |
| highlightColorStyle    | ViewStyle                           | No       | styles for higlightedBar           |
| textInputContainerStyle| ViewStyle                           | No       | textinput container style          |
| textLabelPropStyle     | ViewStyle                           | No       | label style                        |
| activeItemTextStyle    | TextStyle                           | No       | style for selected text            |
| itemTextStyle          | TextStyle                           | No       | style for text item                |
| rightIconImage         | JSX.Element                         | No       | text input right icon              |
| headerProp             | JSX.Element                         | No       | can replace textInput with any JSX Element|
| onPressCallBack        | ()=> void                           | No       | callback function of onpress of input|
| onPressCallBack        | ()=> void                           | No       | callback function of timechange    |



### IMTimePicker example

Example 1
```JSX
        <IMTimePicker
        itemHeight=  {actuatedNormalizeHeight(44)}
        wrapperWidth={actuatedNormalizeWidth(60)}
        wrapperHeight={actuatedNormalizeHeight(248)}
        highlightColor={colors.CoolGrey90}
        wrapperBackground={colors.CoolGrey100}
        textInputLabel='Selected Time'
        use24Hour={false}
        highlightColorStyle={{height: actuatedNormalizeHeight(44),
          backgroundColor:colors.CoolGrey90,
          width: actuatedNormalizeWidth(312),
          top: (actuatedNormalizeHeight(248) - actuatedNormalizeHeight(44)) / 2
        }}
      />
````

Example 2

```JSX
       <IMTimePicker
        itemHeight=  {actuatedNormalizeHeight(44)}
        wrapperWidth={actuatedNormalizeWidth(60)}
        wrapperHeight={actuatedNormalizeHeight(248)}
        highlightColor={colors.CoolGrey90}
        wrapperBackground={colors.CoolGrey100}
        textInputLabel='Selected Time'
        use24Hour={true}
        highlightColorStyle={{height: actuatedNormalizeHeight(44),
          backgroundColor:colors.CoolGrey90,
          width: actuatedNormalizeWidth(312),
          top: (actuatedNormalizeHeight(248) - actuatedNormalizeHeight(44)) / 2
        }}
      />
```
