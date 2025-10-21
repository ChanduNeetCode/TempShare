# IMNavigationBar v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

Dependency Package -
$ npm i react-native-linear-gradient

How to use in IMNavigationBar components -
import { IMCustomNavigationBar } from '@icicibank/tsg1_2259_rn_dff_library';

## HeaderFunctionalityProps

| Props               | Params                | isRequire| Description                        |
| ------------------- | ----------------------| ---------| -------------------------------    |
| imageSource         | JSX.Element           | Yes      | id for the accordion item          |
| onPress             | ()=>void;             | No       | callback Function                  |
| style               | ViewStyle             | No       | styling prop for the view          |

## IMCustomNavigationBar

| Props                    | Params           | isRequire | Description                                 |
| ------------------------ | ---------------- | --------- | ------------------------------------------- |
| isCardView               | Boolean          | No        | View to accumulate Cards                    |
| isStatusBar              | Boolean          | No        | to show StatusBar                           |
| linearGradientColors     | String []        | No        | for passing array of colors.                |
| statusBarBackgroundColor | string           | No        | BackGround color for status bar             |
| title                    | string           | No        | title for navigation bar                    |
| titleStyle               | TextStyle        | No        | title style                                 |
| continerStyle            | ViewStyle        | No        | applying styles to navigation bar container |
| childPropStyle           | ViewStyle        | No        | applying styles to child prop               |
| mainContainerStyle       | ViewStyle        | No        | style prop for main container               |
| titleViewStyle           | ViewStyle        | No        | style prop for title container              |
| childProps               | JSX.Element      | No        | Add bottom of the Jsx element second row    |
| endCoordinates           | any              | No        | Coordinates for gradient color at end       |
| startCoordinates         | any              | No        | Coordinates for gradient color at start     |
| headerMenuProps          | HeaderFunctionalityProps| No | Menu button                                 |
| headerActionProps        | HeaderFunctionalityProps| No | Action Button                               |
| headerLeftProps          | HeaderFunctionalityProps| No | Navigation Icon                             |
| statusBarColor           | ViewStyle        | No        | statusBarColor                              |

### IMCustomNavigationBar example

const gradientColor = ['#EF8C24', '#F06837']

const headerLeftProps = {
onPress: handleBackButton,
imageSource: <TopNav2 />,
style: headerLeftBtnStyle
}
const headerActionProps = {
onPress: handlePressActionButton,
imageSource: <TopNav />,
style: headerActionBtnStyle
}
const headerMenuProps = {
onPress: handlePressMenuButton,
imageSource: <TopNav1 />,
style: headerMenuBtnStyle
}

       <IMCustomNavigationBar
            title="Title really long"
            titleStyle={textStyle}
            linearGradientColors={gradientColor}
            headerLeftProps={headerLeftProps}
            headerActionProps={headerActionProps}
            headerMenuProps={headerMenuProps}
            cardView={true}
            children={<View style={{backgroundColor:'cyan'}}><Text>Hello</Text></View>}
        />
