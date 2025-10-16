# IMTabBar v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

Dependency Package -
$ npm i react-native-tab-view
$ npm i react-native-pager-view

How to use in IMTabBar components -
import { IMTabBar } from '@icicibank/tsg1_2259_rn_dff_library'

## IMTabBar

| Props         | Params                                                     | isRequire | Description                                             |
| ------------- | -----------------------------------------------------------| --------- | ------------------------------------------------------- |
| routes        | {key: string, title: string, 
                   enabled: boolean, tabImage?: React.ReactNode,
                    tabDisabledImage?: React.ReactNode}[]                    | Yes       | loads Tab elements                                      |
| renderScene   | any                                                        | Yes       | loads screen components                                 |
| tabImageStyle | ViewStyle                                                  | No        | View to accumulate Cards                                |
| tabstyle      | ViewStyle                                                  | No        | StyleProp for Tab                                       |
| scrollableTabStyle| ViewStyle                                              | No        | Style Prop of tab if has more than 3 elements           |
| tabViewStyle  | ViewStyle                                                  | No        | StyleProp for entire Tabbar  View                       |
| lableStyle    | textStyle                                                  | No        | Style of Lable                                          |
| width         | number                                                     | no        | width of label indicator                                |
| onTabPress    | (key?:any) => void;                                                | no        | on press of tab                                         |
|pressColor     | string                                                     | no        | touchable background color                              |
### IMTabBar example

const renderScene = SceneMap({
first: SampleScreenOne,
second: DashboardScreen,
third: ProfileScreen,
});

const [routes] = useState([

{ key: 'first', title: 'Profile', enabled: true, tabImage: <TabEnabled height={24} width={24}/>, tabDisabledImage: <TopNav1 height={24} width={24}/> },
{ key: 'second', title: 'Dashboard', enabled: true, tabImage: <TabEnabled height={24} width={24}/>, tabDisabledImage: <TopNav1 height={24} width={24}/> },
{ key: 'third', title: 'Sample1', enabled: true, tabImage: <TabEnabled height={24} width={24}/>, tabDisabledImage: <TopNav1 height={24} width={24}/> }
]);

const tabImageStyle: ViewStyle = {
height: 24,
width: 24,
marginTop:3,
marginLeft:9,
alignSelf: 'center'
}

```JSX
     <IMTabBar
                routes={routes}
                renderScene={renderScene}
                tabImageStyle={tabImageStyle}
            />
```
