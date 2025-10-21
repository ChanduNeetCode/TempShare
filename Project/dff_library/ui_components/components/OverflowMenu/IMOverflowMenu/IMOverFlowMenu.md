# IMoverlowMenu v1.0.0

## Installation

Using npm -
$ npm i dff_library

How to use in OverflowMenu components -
import { IMOverflowMenu } from 'dff_library'

## IMOverflowMenuDashBoard

| Props                   | Params      | isRequire | Description                                     |
| ---------------------   | ----------- | --------- | ----------------------------------------------- |
| list                    | Array       | No        | List of objects to be rendered in the flat list |
| listData                | Array       | No        | List of objects to be rendered in list          |
| blurAmount              | Number      | No        | A number to control the intensity of the blur effect.|
| isDisable               | boolean     | No        | Disable the touchable opacity                   |
| isleftSideImage         | boolean     | No        | left side image or icon prop                    |
| isWithContextualItems   | boolean     | No        | to render the list items                        |
| appVersion              | string      | No        | App version details                             |
| logoutText              | string      | No        | title of logout                                 |
| sessionText             | string      | No        | last login details                              |
| subtitle                | string      | No        | subtitle of the page                            |
| title                   | string      | No        | title of the page                               |
| logoutImage             | JSX.Element | No        | logout icon                                     |
| itemCloseImage          | JSX.Element | No        | close icon                                      |
| blurContainer           | JSX.Element | No        | blur effect below the modal                     |
| children                | JSX.Element | No        | prop to entire data below title                 |
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
| lineStyle               | ViewStyle   | No        | style of line                                   |
| modalParentStyle        | viewStyle   | No        | style of the modal                              |
| blurContainerStyle      | ViewStyle   | No        | style of the blur container below the modal     |
| logoutImageStyle        | viewStyle   | No        | style of the logout image container             |
| flatListContainer       | ViewStyle   | No        | style of the icon container style               |
| logoutStyleContainer    | ViewStyle   | No        | style of the logout container style             |
| textContainerStyle      | ViewStyle   | No        | style of text container                         |
| logout                  | () => void  | No        | log out on press                                |
| onPressItem             | () => void  | No        | icons on press                                  |
| onPressItemCloseImage   | () => void  | No        | close modal on press                            |
| showMenu                | () => void  | No        | popup visibility                                |
| contextualItemsViewStyle| viewStyle   | no        | view style of contextualItems View              |

### IMOverflowMenu example

```JSON

  export const data = [
  { name: 'Dashboard', logo: ( <ICLineHome height={30} width={30} style={{ marginRight: 10 }} /> ), },
  { name: 'Ipal',logo: ( <ICLineIpal height={30} width={30} style={{ marginRight: 10 }} />),},
  { name: 'Profile', logo: (<ICGeneralPerson height={30} width={30} style={{ marginRight: 10 }} />),},
];

```

Above data list contains icon and its title

export const sampleData = [
    {
      value: 'De-register UPI ID',
      key: 'lCUTs2aa',
      subTitle: 'Content',
      icon: <ICGeneralDefaultClose  height={actuatedNormalizeHeight(30)} width={actuatedNormalizeWidth(30)} />,
    },
    {
      value: 'View blocked UPI',
      key: 'TXdL0caa',
      subTitle: 'Content',
      icon: <ICGeneralBlockSmall height={actuatedNormalizeHeight(30)} width={actuatedNormalizeWidth(30)}/>,
    },
]

Above data list contains list items

```JSX
        <IMOverflowMenu
                mainContainerStyle={styles.mainContainerStyle}
                isSeparator={true}
                itemTextStyle={styles.itemTextStyle}
                list={data}
                logout={() => {
                  Alert.alert('logout');
                }}
                listData={sampleData}
                leftIconViewStyle={styles.leftIconViewStyle}
                onPressItem={key => {
                  Alert.alert(key);
                }}
                onPressTtemCloseImage={() => setIsVisible(false)}
                showMenu={() => {
                  setIsVisible(false);
                }}
                blurAmount={2}
              />
```

```JSX
        <IMOverflowMenu
                isWithContextualItems={true}
                mainContainerStyle={styles.mainContainerStyle}
                isSeparator={true}
                itemTextStyle={styles.itemTextStyle}
                list={data}
                logout={() => {
                  Alert.alert('logout');
                }}
                listData={sampleData}
                leftIconViewStyle={styles.leftIconViewStyle}
                onPressItem={key => {
                  Alert.alert(key);
                }}
                onPressTtemCloseImage={() => setIsVisible(false)}
                showMenu={() => {
                  setIsVisible(false);
                }}
                blurAmount={2}
              />
```
