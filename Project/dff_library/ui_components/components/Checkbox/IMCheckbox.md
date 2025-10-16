# Checkbox v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in Checkbox components -
import { IMCheckBox,IMultiSelectionCheckbox } from '@icicibank/tsg1_2259_rn_dff_library'

## IMCheckbox

| Props               | Params                                | isRequire   | Description                                   |
| ------------------- | ------------------------------------- | ----------- | --------------------------------------------- | 
| tapRadioButtonColor | string                                | No          | Active buttons touchable color.               |
| title               | string| JSX.Element                   | Yes         | title for the checkbox                        |
| value               | String                                | No          | identification                                |
| isCheckboxDisabled  | Boolean                               | No          | to disable the checkbox                       |
| isDisable           | Boolean                               | No          | to disable the text TouchableOpacity          |
| isSelect            | String                                | No          | initial checkbox is on or off. Default is off |
| toggleState         | (id: string, state: boolean) => void  | No          | Selection callback                            |
| activeTouchStyle    | ViewStyle                             | No          | Touchable highlight style                     |
| viewStyle           | ViewStyle                             | No          | View parent style                             |
| containerStyle      | ViewStyle                             | No          | total container style                         |
| titleViewStyle      | ViewStyle                             | No          | title container style                         |
| textStyle           | TextStyle                             | No          | title style                                   |
| selectImage         | JSX.Element                           | No          | Selection image                               |
| unselectImage       | JSX.Element                           | No          | Unselecting image                             |
| isLeft              | boolean                               | No          | Checkbox Positon. "False" for Right side.     |
| multiToggleState    | (id: Element, state: boolean) => void | No          | Selection callback                            |

### IMCheckbox example (Single checkbox)

```JSX
        <IMCheckbox
          value=""
          tapRadioButtonColor={colors.NeutralGrey120}
          isSelect={false}
          toggleState={(selectedItem, state) => {
          }}
          activeTouchStyle={{
            alignSelf:'center'
          }}
          textStyle={{ color: colors.NeutralGrey150 }}
          selectImage={<ICGeneralCheckBoxChecked height={20} width={20} />}
          unselectImage={<ICGeneralCheckBoxUnchecked height={20} width={20} />}
          title={STRINGS.str_childItem} />
          isLeft={false}
          containerStyle = {{
          justifyContent:'space-between',
          }}
          /* to bring checkbox to center of paragrapgh use alingSelf:'center' in activeTouchSyle.
             to bring checkbox to Start of paragrapgh use alingSelf:'flex-start' in activeTouchSyle.

            if 'isLeft' is false, use justifyContent:'space-between' in 'containerStyle' to align all the checkboxes in a line.
            if 'isLeft' is true, use justifyContent:'flex-start' */

```

## IMultiSelectionCheckbox

| Props               | Params                | isRequire | Description                     |
| ------------------- | --------------------- | --------- | ------------------------------- |
| displayKey          | string                | Yes       | list key                        |
| tapRadioButtonColor | string                | No        | Active buttons touchable color. |
| title               | string                | Yes       | title for the checkbox item     |
| uniqueKey           | string                | Yes       | list identification             |
| list                | Array                 | Yes       | Data is plain array             |
| activeTouchStyle    | ViewStyle             | No        | active button style             |
| textStyle           | TextStyle             | No        | title style                     |
| childTextStyle      | TextStyle             | No        | child checkbox items style      |
| partialSelectImage  | JSX.Element           | No        | partial selection image         |
| selectImage         | JSX.Element           | No        | Selection image                 |
| unselectImage       | JSX.Element           | No        | Unselecting image               |
| resultCallback      | (data: Array) => void | No        | Selection callback              |

### IMCheckbox example (MultiSelection checkbox)

```JSX
<IMultiSelectionCheckbox
          displayKey="name"
          uniqueKey="id"
          title={STRINGS.str_parentData} list={sampleData}
          multiToggleState={(selectedItem, state) => {
          }}
          isLeft={false}
          containerStyle={{
            justifyContent:'space-between'
          }}
          itemStyle={{backgroundColor:'white'}}
          childTextStyle={{color:'red'}}
          displayItemStyle={{display:'flex'}}
          itemSeparator={
          <View
          style={{
            borderWidth: 1,
            borderColor:'blue',
          }}
          titleViewStyle={{alignSelf: 'center'}}
          />
          }
          /* if 'isLeft' is false, use justifyContent:'space-between' in 'containerStyle' to align all the checkboxes in a line.
            if 'isLeft' is true, use justifyContent:'flex-start'

            use display:'none' to hide parent item or use display:'flex' to show parentitem in 'displayItemStyle'.
            */
```
