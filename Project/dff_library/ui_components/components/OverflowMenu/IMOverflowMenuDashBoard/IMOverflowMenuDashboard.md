# IMoverlowMenu v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in OverflowMenu components -
import { IMOverflowMenuDashBoard } from '@icicibank/tsg1_2259_rn_dff_library'

## IMOverflowMenuDashBoard

| Props                   | Params      | isRequire | Description                                     |
| ---------------------   | ----------- | --------- | ----------------------------------------------- |
| list                    | Array       | No        | List of objects to be rendered in the flat list |
| blurAmount              | Number      | No        | A number to control the intensity of the blur effect.|
| isDisable               | boolean     | No        | Disable the touchable opacity                   |
| appVersion              | string      | No        | App version details                             |
| logoutText              | string      | No        | title of logout                                 |
| sessionText             | string      | No        | last login details                              |
| subtitle                | string      | No        | subtitle of the page                            |
| title                   | string      | No        | title of the page                               |
| profileId               | string      | No        | title of the profile id                         |
| profileName             | string      | No        | title of the profile name                       |
| logoutImage             | JSX.Element | No        | logout icon                                     |
| itemCloseImage          | JSX.Element | No        | close icon                                      |
| blurContainer           | JSX.Element | No        | blur effect below the modal                     |
| children                | JSX.Element | No        | prop to entire data below title                 |
| imageToDisplay          | JSX.Element | No        | prop to image item                              |
| leftIcon                | JSX.Element | No        | prop to left icon                               |
| rightIcon               | JSX.Element | No        | prop to right icon                              |
| textContainer           | JSX.Element | No        | prop to text container of header                |
| blurContainer           | JSX.Element | No        | blureffect visibility                           |
| appVersionTextStyle     | TextStyle   | No        | styles of app version text                      |
| logoutTextStyle         | TextStyle   | No        | styles of logout Text                           |
| iconTitleStyle          | TextStyle   | No        | styles of Icon title                            |
| subTitleStyle           | TextStyle   | No        | styles of subtitle                              |
| titleStyle              | TextStyle   | No        | styles of title                                 |
| logoutDataStyle         | TextStyle   | No        | styles of log details                           |
| closeStyle              | ViewStyle   | No        | close icon style                                |
| iconContainerStyle      | ViewStyle   | No        | styles of icon container                        |
| iconStyle               | ViewStyle   | No        | styles of icon                                  |
| logoutStyle             | ViewStyle   | No        | style of logout                                 |
| textContainerStyle      | ViewStyle   | No        | style of text container                         |
| lineStyle               | ViewStyle   | No        | style of line                                   |
| modalParentStyle        | viewStyle   | No        | style of the modal                              |
| blurContainerStyle      | ViewStyle   | No        | style of the blur container below the modal     |
| logoutImageStyle        | viewStyle   | No        | style of the logout image container             |
| flatListContainer       | ViewStyle   | No        | style of the icon container style               |
| imageContainerStyle     | ViewStyle   | No        | style of the image container style              |
| headerContainerStyle    | ViewStyle   | No        | style of the profile header container style     |
| headerLeftContainerStyle| ViewStyle   | No        | style of the left icon and text container style |
| logoutStyleContainer    | ViewStyle   | No        | style of the logout container style             |
| logout                  | () => void  | No        | log out on press                                |
| onPressItem             | () => void  | No        | icons on press                                  |
| onPressTtemCloseImage   | () => void  | No        | function call on press close image              |
| onPressSeeProfile       | () => void  | No        | function call on press see profile              |
| onPressItemCloseImage   | () => void  | No        | close modal on press                            |
| showMenu                | () => void  | No        | popup visibility                                |

### IMOverflowMenu example

```JSON

  export const data = [
  { name: 'Dashboard', logo: ( <ICLineHome height={30} width={30} style={{ marginRight: 10 }} /> ), },
  { name: 'Ipal',logo: ( <ICLineIpal height={30} width={30} style={{ marginRight: 10 }} />),},
  { name: 'Profile', logo: (<ICGeneralPerson height={30} width={30} style={{ marginRight: 10 }} />),},
];

```

Above data list contains icon and its title

```JSX
        <IMOverflowMenuDashBoard
                list={dashboardData}
                logout={() => {
                  Alert.alert('logout');
                }}
                onPressItem={key => {
                  Alert.alert(key);
                }}
                onPressItemCloseImage={() => setIsVisible(false)}
                showMenu={() => {
                  setIsVisible(false);
                }}
                blurAmount={2}
              />
```
