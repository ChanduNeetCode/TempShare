## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in AlphabeticalList components -
import { IMHorizontalStackedView } from '@icicibank/tsg1_2259_rn_dff_library'
import LinearGradient from 'react-native-linear-gradient';

## IMHorizontalStackedView

## items

| Props    | Params | isRequire   | Description |
| -------- | ------ | ----------- | ----------- | ------------------------- |
| title    | string | JSX.Element | Yes         | Title for stacked View    |
| subtitle | string | JSX.Element | yes         | subTitle for stacked view |

## IMHorizontalStackedViewProps

| Props                     | Params              | isRequire | Description                                    |
| ------------------------- | ------------------- | --------- | ---------------------------------------------- |
| items                     | Array of objects    | Yes       | data for stacked View                          |
| isTouchableDisable        | boolean             | No        | Touchable action is on or off                  |
| touchableFunc             | (item) => void      | No        | Touchable Function                             |
| ContainerStyle            | ViewStyle           | No        | parent style for stacked view                  |
| separatorLineStyle        | ViewStyle           | No        | separator line style for separating items      |
| renderItemStyle           | ViewStyle           | No        | styles for items                               |
| titleStyle                | TextStyle           | No        | If title is string pass title style            |
| subTitleStyle             | TextStyle           | No        | If subtitletitle is string pass subtitle style |
| start                     | {x:number,y:number} | No        | Linear Gradient start props                    |
| end                       | {x:number,y:number} | No        | Linear Gradient end props                      |
| linearGradinentStyleProps | View Style          | No        | Linear Gradient style                          |
| linearGradientColorStart  | string              | No        | Linear gradient start style color              |
| linearGradientColorEnd    | string              | No        | Linear gradient end style color                |

## IMHorizontal stacked view example

```JSON
const sampleData = [
  {
    title: 'Amount',
    subTitle: '₹9,00,000',
  },
  {
    title: 'Tenure',
    subTitle: '120 Months',
  },
  {
    title: 'Tenu',
    subTitle: '12 Months',
  },


];
```

Example 1

```JSX

 <IMHorizontalStackedView
          items={sampleData}
          isTouchableDisable={false}
          touchableFunc={item => {}}
          ContainerStyle={
            {
              width:350,
        height:68,
         alignItems: 'center',
            }
          }
           renderItemStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              width:164,
            }}
          separatorLineStyle={{
            borderLeftWidth: 1,
            borderColor: '#FFFFFF',
            margin: 5,
          }}
          titleStyle={{
            color:"#FFFFFF",
    alignSelf: 'center',
          }}
          subTitleStyle={{
            color:"#FFFFFF",
    alignSelf: 'center',
          }}
          start={ {x: 0, y: 1}}
          end={{ x: 1, y: 0}}
          linearGradinentStyleProps={{
            borderColor: 'white',
            borderWidth: 1.5,
            borderRadius: 15,
          }}
          linearGradientColorStart={colors.GradientOrangeStart}
            linearGradientColorEnd={colors.GradientOrangeEnd}
        />

```

```JSON
const sampleItems = [
  {
    title:<Text style={[ typography.SubTitleMedium2,, { color: '#ffffff'  }]}>
Equity Mutual Funds
  </Text>,
    subTitle:    <Text
    style={[typography.HeadingBold3, { color: '#ffffff', left:30 }]}>
₹20 Lacs
  </Text>,
  },
  {
    title:<Text
    style={[ typography.SubTitleMedium2,, { color: '#ffffff',left:5 }]}>
Debt Mutual Funds
  </Text>,
    subTitle:    <Text
    style={[typography.HeadingBold3, { color: '#ffffff',left:30  }]}>
₹ 1CR
  </Text>
  },
];

```

Example 2

```JSX
  <IMHorizontalStackedView
          items={sampleItems}
          isTouchableDisable={true}
          touchableFunc={item => {}}
          linearGradientColorStart={colors.GradientOrangeStart}
          linearGradientColorEnd={colors.GradientOrangeEnd}
        />
```
