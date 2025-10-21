# IMNavigationBar v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

Dependency Package -
$ npm i react-native-linear-gradient

How to use in IMNavigationBar components -
import { IMNavigationBar } from '@icicibank/tsg1_2259_rn_dff_library'

## IMNavigationBar

| Props                    | Params                                                                                | isRequire | Description                                 |
| ------------------------ | ------------------------------------------------------------------------------------- | --------- | ------------------------------------------- |
| endCoordinates           | any                                                                                   | No        | Coordinates for gradient color at end       |
| startCoordinates         | any                                                                                   | No        | Coordinates for gradient color at start     |
| title                    | string                                                                                | No        | title for navigation bar                    |
| titleStyle               | TextStyle                                                                             | No        | title style                                 |
| continerStyle            | ViewStyle                                                                             | No        | applying styles to navigation bar container |
| childPropStyle           | ViewStyle                                                                             | No        | applying styles to child prop               |
| cardView                 | Boolean                                                                               | No        | View to accumulate Cards                    |
| isStatusBar              | Boolean                                                                               | No        | to show StatusBar                           |
| linearGradientColors     | String []                                                                             | Yes       | for passing array of colors.                |
| children                 | ReactNode                                                                             | No        | for passing child nodes                     |
| headerMenuProps          | { onPress?: () => void; imageSource?: React.ReactNode; style?: StyleProp<ViewStyle> } | No        | Menu button                                 |
| headerActionProps        | { onPress?: () => void; imageSource?: React.ReactNode; style?: StyleProp<ViewStyle> } | No        | Action Button                               |
| headerLeftProps          | { onPress?: () => void; imageSource?: React.ReactNode; style?: StyleProp<ViewStyle> } | No        | Navigation Icon                             |
| statusBarBackgroundColor | string                                                                                | No        | Back Ground color for status bar            |
| isCardView               | Boolean                                                                               | No        | For increase the bottom of the height       |
| childProps               | JSX.Element                                                                           | No        | Add bottom of the Jsx element second row    |

### IMNavigationBar example

const gradientColor = ['#EF8C24', '#F06837']
const textStyle: TextStyle = {
color: 'white',
flexWrap: 'wrap',
paddingLeft: 10,
minHeight: 40,
}

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

       <IMNavigationBar
                title="Title really long"
                titleStyle={textStyle}
                linearGradientColors={gradientColor}
                headerLeftProps={headerLeftProps}
                headerActionProps={headerActionProps}
                headerMenuProps={headerMenuProps}
            cardView={true}
            children={<View style={{backgroundColor:'cyan'}}><Text>Hello</Text></View>}

            />
