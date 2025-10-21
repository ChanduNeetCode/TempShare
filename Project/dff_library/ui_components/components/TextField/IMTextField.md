# TextField v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in TextField components -
import { IMTextFields,IMFloatTextFields } from '@icicibank/tsg1_2259_rn_dff_library'

## IMTextFields 

| Props                         | Params                 | isRequire   | Description                                   |
| ----------------------------- | ---------------------- | ----------- | --------------------------------------------- |
| activeHelperTextColor         | string                 | No          | text input below active text color            |
| cursorColor                   | string                 | No          | text input cursor color                       |
| disableHelperTextColor        | String                 | No          | text input disable text color                 |
| errorOutlineColor             | String                 | No          | text input error time border color            |
| helperText                    | string                 | No          | text input below text                         |
| label                         | string                 | No          | text input above title                        |
| placeholderText               | string                 | No          | placeholder text input                        |
| placeholderTxtColor           | string                 | No          | placeholder text color                        |
| successOutlineColor           | string                 | No          | Success text input border color               |
| textButtonName                | string                 | No          | right side text input text                    |
| errorHelperTextColor          | string                 | No          | error helper textcolor                        |
| successHelperTextColor        | string                 | No          | success helper textcolor                      |
| multiLine                     | boolean                | No          | multiple line of input text enable or disable(default disable) |
| leftIcon                      | boolean                | No          | text input left icon                          |
| enabled                       | boolean                | No          | text input enable                             |
| helperTextMode                | boolean                | No          | text input below text visibility              |
| isError                       | boolean                | No          | text input below error visibility             |
| isPlaceholderDisplayOnFocus   | boolean                | No          | whether to display the placeholder text on focus or not |
| outline                       | boolean                | No          | below tex input text visibility               |
| rightIcon                     | boolean                | No          | text input right icon                         |
| separatorLine                 | boolean                | No          | before right icon separator visibility        |
| textButton                    | boolean                | No          | right side button name                        |
| textIconStyle                 | TextStyle              | No          | text icon  style                              |
| textInputStyle                | TextStyle              | No          | text input style                              |
| helperContainerModeStyle      | ViewStyle              | No          | text input below view style                   |
| mainViewStyleProp             | ViewStyle              | No          | styles for main View container                |
| rightIconStyle                | ViewStyle              | No          | styles for right Icon container               |
| tochableStyleProp             | ViewStyle              | No          | style of touchable textinput                  |
| errorIcon                     | string                 | JSX.Element | text input below error icon                   |
| leftIconImage                 | JSX.Element            | No          | text input left icon                          |
| rightIconImage                | JSX.Element            | No          | text input right icon                         |
| payeeButton                   | CallableFunction       | No          | right side button click                       |
| searchValue                   | (prop: string) => void | No          | text input result                             |
| onFocusFunctionProps          | ()=> void              | No          | callback function of onpress of input         |
| textInputFocusRemovedCallBack | ()=> void              | No          | callback function of onBlur of input          |
| keyboardTypeOptions           | KeyboardType           | No          | text input keyboard type                      |
| placeholderText               | String                 | NO          | text input placeholder                        |
| labelContainerProp            | ViewStyle              | No          | Label style                                   |
| helperTextContainer           | JSX.Element            | No          | Helper Text                                   |
| labelTextStyle                | ViewStyle              | No          | TextStyle for label                           |
| maxLength                     | Number                 | No          | maximum length of text                        |
| numberOfLine                  | Number                 | No          | number of lines to show text                  |
| leftIconStyle,                | ViewStyle              | No          | view style of left icon                       |
| rightIconStyle,               | ViewStyle              | No          | view style of right icon                      |
| maxLength                     | number                 | no          | maximun length of input                       |
| autoCaptialize                | 'none' | 'sentences' | | no          | autocapitialize prop                          |
                                  'words' | 'characters'

### Usage

```JSX

           <IMTextFields
                enabled={true} label={'Right side button'}
                rightIcon={true} rightIconImage={<ICGeneralChevronRight />}
                placeholderText={'Placeholder text'}
                leftIcon={true} searchValue={searchData}
                leftIconImage={<ICGeneralRupee />}
                separatorLine={false}
                textButton={true} helperTextMode={true}
                helperText={'Helper Text'} />

           <IMTextFields
                enabled={true} label={'Success'}
                rightIcon={true} rightIconImage={<ICGeneralChevronRight />}
                placeholderText={'Placeholder text'}
                leftIcon={true} searchValue={searchData}
                leftIconImage={<ICGeneralRupee />}
                separatorLine={false}
                outline={true}
                helperContainerModeStyle={{marginLeft:15}}
                isError={false} errorIcon={<ICExtraSuccess style={{marginTop:5}} />}
                textButton={true}  helperTextMode={true} helperText={'Helper Text'} />
```

## IMFloatTextFields

| Props                    | Params                 | isRequire | Description                              |
| ------------------------ | ---------------------- | --------- | ---------------------------------------- |
| activeHelperTextColor    | string                 | No        | text input below active text color       |
| containerWidth           | string                 | No        | text input width                         |
| disableHelperTextColor   | String                 | No        | text input disable text color            |
| disableContainerBC       | String                 | No        | text input background color disable time |
| errorActiveColor         | string                 | No        | error time border color of text input    |
| errorDisableColor        | string                 | No        | error disable border color               |
| enabledContainerBC       | string                 | No        | initial text input border color          |
| errorOutlineColor        | string                 | No        | text input error time border color       |
| floatingPlaceHTC         | string                 | No        | floating text input place holder text    |
| helperText               | string                 | No        | text input below text                    |
| label                    | string                 | No        | text input above title                   |
| placeHTC                 | string                 | No        | text input placeholder text              |
| successOutlineColor      | string                 | No        | Success text input border color          |
| textInputCursorColor     | string                 | No        | text input cursor color                  |
| rightSideTextName        | string                 | No        | right side text input text name          |
| errorHelperTextColor     | string                 | No        | error helper textcolor                   |
| successHelperTextColor   | string                 | No        | success helper textcolor                 |
| textButton               | boolean                | No        | left side text button visibility         |
| enabled                  | boolean                | No        | text input enable                        |
| isError                  | boolean                | No        | text input below error visibility        |
| isPlaceholderDisplayOnFocus| boolean              | No          | whether to display the placeholder text on focus or not |
| isMultiLine              | boolean                | No        | multiple line of input text enable or disable(default disable) |
| helperTextMode           | boolean                | No        | text input below text visibility         |
| leftIcon                 | boolean                | No        | text input left icon                     |
| outline                  | boolean                | No        | below tex input text visibility          |
| separatorLine            | boolean                | No        | before right icon separator visibility   |
| rightIcon                | boolean                | No        | text input right icon                    |
| errorIcon                | JSX.Element            | No        | text input below error icon              |
| keyboardTypeOptions      | KeyboardType           | No        | text input keyboard type                 |
| helperContainerModeStyle | ViewStyle              | No        | text input below view style              |
| mainViewStyle            | StyleProp<ViewStyle>   | No        | text input view style                    |
| textInputStyle           | TextStyle              | No        | text input style                         |
| customImageTextStyle     | TextStyle              | No        | text input style                         |
| leftIconImage            | JSX.Element            | No        | text input left icon                     |
| rightIconImage           | JSX.Element            | No        | text input right icon                    |
| payeeButton              | CallableFunction       | No        | right side button click                  |
| searchValue              | (prop: string) => void | No        | text input result                        |
| placeHolderTextProp      | String                 | No        | placeholder text                         |
| labelContainerPropStyle  | ViewStyle              | No        | label style                              |
| defaultValue             | String                 | No        | default send search value                |
| numberOfLine                  | Number                 | No          | number of lines to show text                  |


##IMSplitInputTextField

| Props                    | Params                 | isRequire | Description                                 |
| ------------------------ | ---------------------- | --------- | ----------------------------------------    |
|  units                   | array                  | yes       | array of months, years and days object      |
|  bottomContainer         | JSX.Element            | no        | bottom container prop                       |
|  icon                    | JSX.Element            | no        | icon in bottom Container (calendar icon)    |
|  bottomContainerStyle    | ViewStyle              | no        | ViewStyle of bottom Container               |
|  containerSeperatorStyle | ViewStyle              | no        | Style of container seperator line           |
|  dataSeperatorLineStyle  | ViewStyle              | no        | Style of data seperator lin in top container|
|  dataViewStyle           | ViewStyle              | no        | Style of months, years, days view           |
|  dateTextViewStyle       | ViewStyle              | no        | Style of view in entire  bottomContainer    |
|  dateViewStyle           | ViewStyle              | no        | Style of date view in the bottom Container  |
|  dropdownSeperatorStyle  | ViewStyle              | no        | style of seperator in dropdown              |
|  dropDownStyle           | ViewStyle              | no        | Style of dropDown View                      |
|  elementStyle            | ViewStyle              | no        | style of Element in dropDown                |
|  flatListStyle           | ViewStyle              | no        | Style of flatlist View                      |
|  flatListRowStyle        | ViewStyle              | no        | Style of Flatlist row of dropDown           |
|  iconStyle               | ViewStyle              | no        | Style of Icon in bottomcontainer            |
|  mainContainerStyle      | ViewStyle              | no        | style of entire main View                   |
|  dataTextStyle           | TextStyle              | no        | text style of months, years and days text   |
|  dataStyle               | TextStyle              | no        | text style of numbers                       |
|  dateStyle               | TextStyle              | no        | text style of date in bottom Container      |
|  dateTextStyle           | TextStyle              | no        | text style of days in bottom Container      |
|  daysTextStyle           | TextStyle              | no        | text style of day in bottom Container       |
|  onSelect                | (flatListObject,string)=> void| yes| onSelect function after selecting the value |
|  isIcon                  | boolean                | no        | whether the icon is needed or not           |
|  isYearVisible           | boolean                | no        | year dropdown visible prop                  |
|  isMonthVisible          | boolean                | no        | month dropdown visible prop                 |
|  isDayVisible            | boolean                | no        | day dropdown visible prop                   |


### Usage

```JSX
          <IMFloatTextFields enabled={true} label={'Both side icons'}
                searchValue={searchData} separatorLine={true}   
                rightIcon={true} rightIconImage={<ICGeneralCalender />}
                leftIcon={true} leftIconImage={<ICGeneralSearch />}
                textButton={false}placeHolderTextProp=''
                labelContainerPropStyle={{}}   defaultValue=''/>

          <IMFloatTextFields enabled={true} label={'Success'}
                rightIcon={true} rightIconImage={<ICGeneralChevronRight />}
                leftIcon={true} searchValue={searchData} leftIconImage={<ICGeneralRupee />}
                separatorLine={true}
                outline={true}
                helperContainerModeStyle={{marginLeft:15}}
                isError={false} errorIcon={<ICExtraSuccess  style={{marginTop:5}}/>}
                textButton={true} helperTextMode={true} helperText={'Helper Text'} />
```
