# Dropdowns

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

### Props in Dropdown Component

| Props              | Params            | isRequire | Description                           |
| ----------------   | ----------------- | --------- | ------------------------------------- |
| disabled           | boolean           | No        | dropdown disable or not (default false)  |
| dropdownType       | enum              | Yes       | Type of dropdown(SingleColumn/ Wide / ALT/Float)| 
| data               | Array<flatListObject>|Yes     | Dropdown list data                    | 
| dropdownWidth      | number            | No        | Width of the dropdown(default short 164 for others 343)| 
| numberOfLines      | number            | No        | number Of Lines                       |
| label              | string            | No        | label for float dropdown              |
| placeholderText    | string            | No        | placeholderText                       |
| dropdownRowTextStyle| TextStyle        | No        | text style in a row                   | 
| headerStyle        | TextStyle         | No        | Text style visible inside button      | 
| placeholderTextStyle | TextStyle       | No        | placeholder style of the dropdown     | 
| dropdownButtonInternalStyle | ViewStyle| No        | Internal style of button              | 
| dropdownButtonStyle| ViewStyle         | No        | Button style                          | 
| dropdownRowStyle   | ViewStyle         | No        | List row style                        | 
| dropdownStyle      | ViewStyle         | No        | Dropdown list style                   | 
| flatListRowContainer | ViewStyle       | No        | WList row container style             | 
| flatListStyle      | ViewStyle         | No        | Dropdown list style                   | 
| floatDropdownContainerStyle| ViewStyle | No        | Float dropdown container style        | 
| labelStyle         | ViewStyle         | No        | labelStyle                            | 
| parentDropDownStyle| ViewStyle         | No        | parentDropDownStyle                   | 
| selectedValue      | flatListObject    | No        | selectedItem prop of the dropdown     | 
| onSelect           | Callback Functio  | Yes       | Callback if row clicked from dropdown |  
| isDefault          | boolean           | no        | whether to display first value or     | 
                                                       placeholdervalue in textfield          
| onPress            | callback function | no        | call back                                                   

## JSX Implementation for Dropdown

```JSX
        <!--How to create Dropdown View in the Component-->
            <IMDropdown
                dropdownWidth={156}
                svgStyle={styles.svgStyle}
                disable={false}
                dropdownType={DropdownType.SingleColumn}
                data={customJson}
                onSelect={(selectedItem, index) => {
                }}
            />
```