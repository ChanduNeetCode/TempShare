# Buttons v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

External npm libraries dependencies -
$ npm install react-native-linear-gradient

How to use Buttons components -

import { IMPrimaryButton, IMDisabledButton, IMOutlinedButton, IMStackedButton, IMGradientButton, IMSecondaryButton,
IMSwipeButton} from '@icicibank/tsg1_2259_rn_dff_library'

# IMPrimaryButton 

| Props       | Params      | isRequire | Description                              |
| ----------- | ----------- | --------- | ---------------------------------------- |
| leftIcon    | boolean     | No        | boolean to display the leftIcon          |
| righttIcon  | boolean     | No        | boolean to display the rightIcon         |
| widthLarge  | String      | No        | width for large button                   |
| widthSmall  | String      | No        | width for small button                   |
| titleRecv   | String      | No        | title for button                         |
| type        | String      | No        | whether button is small, large           |
| underlayColor| String     | No        | color for touchable highlight            |
| styleText   | TextStyle   | No        | button text style                        |
| buttonStyle | ViewStyle   | No        | button style                             |
| left Image  | JSX.Element | No        | left Image prop                          |
| rightImage  | JSX.Element | No        | right Image prop                         |
| onPress     | ()=>void    | No        | Callback function for button onpress     |

# IMPrimaryButton example

<IMPrimaryButton
titleRecv={'Button'}
buttonStyle={{}}
styleText={{}}
type={'large'}
leftIcon={false}
rightIcon={false}
onPress={() => onPress('Primary')}
/>

# IMDisabledButton 

| Props       | Params      | isRequire | Description                              |
| ----------- | ----------- | --------- | ---------------------------------------- |
| leftIcon    | boolean     | No        | boolean to display the leftIcon          |
| righttIcon  | boolean     | No        | boolean to display the rightIcon         |
| widthLarge  | String      | No        | width for large button                   |
| widthSmall  | String      | No        | width for small button                   |
| titleRecv   | String      | No        | title for button.                        |
| type        | String      | No        | whether button is small, large           |
| styleText   | TextStyle   | No        | button text style                        |
| buttonStyle | ViewStyle   | No        | button style                             |
| left Image  | JSX.Element | No        | left Image prop                          |
| rightImage  | JSX.Element | No        | right Image prop                         |
| onPress     | ()=>void    | No        | Callback function for button onpress     |

# IMDisabledButton example

<IMDisabledButton
buttonStyle={{}}
titleRecv={'Button'}
styleText={{}}
type={"large"}
onPress={() => onPress('Disable Large')} />

# IMOutlinedButton 

| Props       | Params      | isRequire | Description                              |
| ----------- | ----------- | --------- | ---------------------------------------- |
| disabled    | boolean     | No        | boolean to disable the button            |
| widthLarge  | String      | No        | width for large button                   |
| widthSmall  | String      | No        | width for small button                   |
| underlayColor| String     | No        | color for touchable highlight            |
| titleRecv   | String      | No        | title for button.                        |
| type        | String      | No        | whether button is small, large           |
| styleText   | TextStyle   | No        | button text style                        |
| buttonStyle | ViewStyle   | No        | button style                             |
| left Image  | JSX.Element | No        | left Image prop                          |
| rightImage  | JSX.Element | No        | right Image prop                         |
| onPress     | ()=>void    | No        | Callback function for button onpress     |

# IMOutlinedButton example

<IMOutlinedButton
buttonStyle={{}}
titleRecv={'Button'}
styleText={{}}
type={"large"}
onPress={() => onPress('Outlined Large')} />

# IMSecondaryButton 

| Props       | Params      | isRequire | Description                              |
| ----------- | ----------- | --------- | ---------------------------------------- |
| disabled    | boolean     | No        | boolean to disable the button            |
| leftIcon    | boolean     | No        | boolean to display the leftIcon          |
| righttIcon  | boolean     | No        | boolean to display the rightIcon         |
| widthLarge  | String      | No        | width for large button                   |
| widthSmall  | String      | No        | width for small button                   |
| titleRecv   | String      | No        | title for button.                        |
| type        | String      | No        | whether button is small, large           |
| styleText   | TextStyle   | No        | button text style                        |
| buttonStyle | ViewStyle   | No        | button style                             |
| left Image  | JSX.Element | No        | left Image prop                          |
| rightImage  | JSX.Element | No        | right Image prop                         |
| onPress     | ()=>void    | No        | Callback function for button onpress     |

# IMSecondaryButton example

<IMSecondaryButton
buttonStyle={{}}
titleRecv={'Button'}
styleText={{}}
type={"small"}
leftIcon={true}
rightIcon={true}
onPress={() => onPress('Secondary')} />

# IMStackedButton Props

|      Props      |   Params    | isRequire |         Description                      |
| --------------- | ----------- | --------- | ---------------------------------------- |
| disabled        | boolean     | No        | boolean to disable the button            |
| titleFirstRecv  | String      | No        | title for button                         |
| titleSecondRecv | String      | No        | title for button                         |
| type            | String      | No        | whether button is small, large           |
| imageFirst      | JSX.Element | No        | first tab image prop                     |
| imageSecond     | JSX.Element | No        | second tab image prop                    |
| styleTextFirst  | TextStyle   | No        | style for first tab text                 |
| styleTextSecond | TextStyle   | No        | style for second tab text                |
| buttonStyle     | ViewStyle   | No        | button style                             |
| parentStyleFirst| ViewStyle   | No        | view style for first tab                 |
|parentStyleSecond| ViewStyle   | No        | view style for second tab                |
| onFirstTabPress | ()=>void    | No        | Callback function for first tab onpress  |
|onSecondTabPress | ()=>void    | No        | Callback function for second tab onpress |

## IMStackedButton Example

<IMStackedButton
buttonStyle={{}}
titleFirstRecv={'Title1'}
titleSecondRecv={'Title2'}
imageFirst={true}
imageSecond={false}
styleTextFirst={{}}
styleTextSecond={{}}
type={'stacked'}
onPress={() => onPress('stacked')} />

# IMFABButton 

| Props           | Params      | isRequire | Description                              |
| -----------     | ----------- | --------- | ---------------------------------------- |
| disabled        | boolean     | No        | boolean to disable the button            |
| circleSize      | number      | No        | size of circle                           |
| color           | String      | No        | background color                         |
| gradiantColor   | String      | No        | linear gradient color1                   |
| gradiantColorTwo| String      | No        | linear gradient color2                   |
| underlayColor   | String      | No        | underlay color (on tap of button)        |
| styleText       | TextStyle   | No        | button text style                        |
| buttonStyle     | ViewStyle   | No        | button style                             |
| gradiantStyle   | ViewStyle   | No        | gradiant style                           |
| imageFirst      | JSX.Element | No        | first tab image prop                     |
| onPress         | ()=>void    | No        | Callback function for button onpress     |

# IMFABButton Example

          <IMFABButton
            image={ <ICGeneralWhiteShare/> }
          />

# IMGradientButton 

| Props       | Params      | isRequire | Description                              |
| ----------- | ----------- | --------- | ---------------------------------------- |
| widthLarge  | String      | No        | width for large button                   |
| widthSmall  | String      | No        | width for small button                   |
| titleRecv   | String      | No        | title for button.                        |
| type        | String      | No        | whether button is small, large           |
| styleText   | TextStyle   | No        | button text style                        |
| buttonStyle | ViewStyle   | No        | button style                             |
| onPress     | ()=>void    | No        | Callback function for button onpress     |

# IMGradientButton Example

<IMGradientButton
titleRecv={'Button'}
buttonStyle={{}}
styleText={{}}
type={'large'}
onPress={() => onPress('Gradient')} />

# IMSwipeButton

| Props              | Params            | isRequire | Description                           |
| ----------------   | ----------------- | --------- | ------------------------------------- |
| disabled           | Boolean           | No        | Button disable or not (default false) |
| isshouldResetAfterSuccess | Boolean    | No        | reset after success (default false)   |
| buttonHeightProp   | number            | No        | height for the swipe button           |
| buttonWidthProp    | number            | No        | width  for the swipe button (default 328) |
| resetAfterSuccessAnimDelay| number     | No        | duration for reset (default 200)      |
| thresholdlimit     | number            | No        | threshold limit for success (default 70) |
| railFillBackgroundColor| String        | No        | railFill Color when user interaction started|
| titleAfterSlide    | String            | No        | title before swipe                    |
| titleRecv          | String            | No        | title after swipe                     |
| type               | String            | No        | Type whether tall/short/qr            |
| buttonStyleProp    | ViewStyle         | No        | styling prop for swipe button         |
| swipeButtonStyle   | ViewStyle         | No        | styling prop for left Icon image      |
| mainContainerStyle | ViewStyle         | No        | styling prop for main container       |
| titleStyle         | ViewStyle         | No        | styling prop for title                |
| backgroundImageforQR| JSX.Element      | No        | background image for QR type (default flower)|
| leftIcon           | JSX.Element       | No        | left Icon image (default arrow)       |
| rightIcon          | JSX.Element       | No        | right Image in case of QR Type (default QR scanner)|
| onSwipeSuccess     | callback function | No        | callback function incase of success   |


# IMSwipeButton example
         <IMSwipeButton
            titleRecv={'Swipe to pay'}
            type={'short'}
            isshouldResetAfterSuccess={true}
          />

