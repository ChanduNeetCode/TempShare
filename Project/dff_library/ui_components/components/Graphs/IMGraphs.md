# Graphs v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$ npx expo install react-native-svg

How to use Graph component -
import { IMPieChart} from '@icicibank/tsg1_2259_rn_dff_library'

## IMPieChart

| Props              | Params                      | isRequire | Description                                       |
| ------------------ | --------------------------- | --------- | ------------------------------------------------- |
| data               | array                       | yes       | list of objects that are to be rendered as slices |
| colorBoxStyle      | ViewStyle                   | No        | style for color box                               |
| containerStyle     | ViewStyle                   | No        | style of the whole container                      |
| dataContainerStyle | ViewStyle                   | No        | style of data container                           |
| legendItemStyle,   | ViewStyle                   | No        | style of the item in the data conatiner           |
| legendLabelStyle,  | ViewStyle                   | No        | label style                                       |
| legendRowStyle,    | ViewStyle                   | No        | style of the item rows                            |
| legendValueStyle,  | TextStyle                   | No        | value style                                       |
| selectedItemStyle, | JSX.Element                 | No        | styling of Selected item                          |
| isTouchable,       | JSX.Element                 | No        | whether the data item is touchable or not         |
| onPress            | (total,angles,index)=> void | No        | onPress of the item                               |
| numberOfLines      | number                      | No        | number of lines of the item label                 |
| blurOpacity        | number                      | No        | blurOpacity value in touchable graph(default 1) |


```JSON
export const piedata = [
  { label: 'Slice1', value: 25, colors: colors.PrimaryOrange100 },
  { label: 'Slice2', value: 25, colors: colors.TertiaryBlue100 },
  { label: 'Slice3', value: 25, colors: colors.SecondaryMaroon100 },

];

```

above data contains item label, item value, item colour

### IMPieChart example

```JSX
        <IMPieChart
            data={piedata}
            isTouchable={true}
            onPress={(total, angles, index) => {
            }}
            numberOfLines={3}
          />
```
