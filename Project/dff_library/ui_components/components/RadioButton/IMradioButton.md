# RadioButton v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use RadioButton component -
import { IMMultiChoiceRadioButton,IMSingleRadioButton } from '@icicibank/tsg1_2259_rn_dff_library'

## IMRadioButton Props

| Props               | Params                               | isRequire | Description                                |
| ------------------- | ------------------------------------ | --------- | ------------------------------------------ |
| isDisable           | boolean                              | No        | whether the button is disabled or normal   |
| isLeft              | boolean                              | No        | whether the icon is on left or on right    |
| isSelect            | boolean                              | No        | initial radiobutton is selectedor not      |
| tapRadioButtonColor | string                               | No        | underlay color for touchable icon          |
| title               | string                               | No        | title for the RadioButton                  |
| value               | string                               | No        | identification                             |
| textStyle           | TextStyle                            | No        | title style                                |
| activeTouchStyle    | ViewStyle                            | No        | active button style                        |
| containerStyleIcon  | ViewStyle                            | No        | container style for Icon                   |
| containerStyleTitle | ViewStyle                            | No        | container style for Title                  |
| selectImage         | JSX.Element                          | No        | Selection image                            |
| unselectImage       | JSX.Element                          | No        | Unselection image                          |
| textContainer       | JSX.Element                          | No        | text style                                 |
| onPress             | (value: string)=>void                | No        | when user clicks on button                 |
| toggleState         | (id: string, state: boolean) => void | No        | Selection callback                         |

### IMRadioButton example (Single RadioButton)

```JSX
       <IMSingleRadioButton
          isSelect={true}
          title='Normal'
          isLeft={true}
        />
```

## IMultiChoiceRadioButton Props

| Props               | Params                | isRequire | Description                             |
| ------------------- | --------------------- | --------- | --------------------------------------- |
| list                | Array                 | Yes       | Data for multi choice radiobutton       |
| isLeft              | boolean               | No        | whether the icon is on left or on right |
| isHorizontal        | boolean               | No        | flast list render horizontal for multichoice |
| displayKey          | string                | No        | label of radiobutton option             |
| tapRadioButtonColor | string                | No        | underlay color for touchable            |
| value               | string                | No        | value of radiobutton option             |
| textStyle           | TextStyle             | No        | title style                             |
| activeTouchStyle    | ViewStyle             | No        | active button style                     |
| containerStyle      | ViewStyle             | No        | total container style                   |
| selectImage         | JSX.Element           | No        | Selection image                         |
| textContainer       | JSX.Element           | No        | text style                              |
| unselectImage       | JSX.Element           | No        | Unselection image                       |
| onPress             | (value: string)=>void | No        | when user clicks on button              |

```JSON

export const data = [
    { label: 'Choice1', value: 'Choice1' },
    { label: 'Choice2', value: 'Choice2' },
    { label: 'Choice3', value: 'Choice3' },
    { label: 'Choice4', value: 'Choice4' },
];

```
Above data contains radiobutton choices

### IMRadioButton example (MultiChoice RadioButton)

```JSX
  <IMMultiChoiceRadioButton
          list={data}
          isLeft={true}
          onPress={()=>{}}
          displayKey='label'
          value='value'
        />

```
