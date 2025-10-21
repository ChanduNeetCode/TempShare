# Chips v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in Checkbox components -
import { IMChoiceSelectors} from '@icicibank/tsg1_2259_rn_dff_library'

## IMCheckbox

| Props                   | Params                | isRequire | Description                              |
| ----------------------- | --------------------- | --------- | ---------------------------------------- |
| listData                | array of objects      | yes       | depending on the selector type           |
| isolatedList            | array of objects      | yes       | depending on the selector type           |
| containerStyle          | View style            | No        | view style                     |
| lineSeparatorStyleProp  | View style             | No        | view style                |
| textViewStyleProp         | View style            | No        |view style     |
| isolatedContainerStyleProp        | View style    | No        | view style    |
| isolatedcontainerInnerStyleProp   | View style   | No       | view style                 |
| isolatedleftImgViewStyleProp     | View style     | No        | view style                       |
| isolatedRadioStyleProp        | View style       | No        | Label style                              |
| isolatedTxtViewStyleProp    | View style          | No        | view style                    |
| changeSelectedContainer | ViewStyle             | No        | view style       |
| isolatedLabelTxtStyleProp  | Text Style            | No        | Text style  |
| isolatedBodyTxtStyleProp  | Text Style            | No        | Text style  |
| text1StyleProp  | Text Style            | No        | Text style  |
| text2StyleProp  | Text Style            | No        | Text style  |
| text3StyleProp  | Text Style            | No        | Text style  |
| isMultipleSelect  | boolean           | yes        | true or false need to send  |
| selectorType  |string            | yes       |need to send which type of selector need to view  |
| cardHeight  | numer            | yes       | height of the card style |







### IMChoiceSelectors example

```JSX
## For Contained selector example
   <IMChoiceSelectors
              listData={listData}
              isMultipleSelect={false}
              selectorType="Contained"
            />
## For Isolated selector example  
      <IMChoiceSelectors
              isolatedList={isolatedData}
              isMultipleSelect={false}
              selectorType="Isolated"
              containerStyle={{ borderRadius: 16 }}
              cardHeight={80}
            />

```
