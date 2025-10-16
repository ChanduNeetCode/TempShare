# Lists v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in lists components -
import { IMNormalList,IMGeneralList,IMChevronList } from '@icicibank/tsg1_2259_rn_dff_library'

## IMNormalList

| Props                  | Params                | isRequire | Description                                                                                   |
| ---------------------- | --------------------- | --------- | --------------------------------------------------------------------------------------------- |
| list                   | Array                 | Yes       | List of objects to be rendered in the flat list and icon of the each item should be container |
| date                   | String                | No        | right side item top value key                                                                 |
| headingKey             | String                | No        | left side item top                                                                            |
| highlightColor         | string                | No        | Highlight color                                                                               |
| itemDefaultBGC         | string                | No        | item Default color                                                                            |
| itemHightlightBGC      | string                | No        | item Highlight color                                                                          |
| leftIcon               | string                | No        | logo of the item key in left side                                                             |
| leftIconDefaultBGC     | String                | No        | default left icon highlight underlay color also applies to entire item                        |
| leftIconHightlightBGC  | String                | No        | left icon highlight underlay color also applies to entire item                                |
| ListEndHeadingTitle    | string                | No        | footer title of the entire list                                                               |
| ListHeadingTitle       | string                | No        | header title of the entire list                                                               |
| rightIconHightlightBGC | String                | No        | Right Icon Highlight Background Color                                                         |
| rightIconKey           | String                | No        | logo of the refresh key in right side                                                         |
| starIconKey            | String                | No        | logo of the star icon in left side                                                            |
| highlightIconPosition  | 'right' or 'left'     | No        | Highlight color position                                                                      |
| amtTextStyle           | TextStyle             | No        | right side item top text style                                                                |
| dateStyle              | TextStyle             | No        | right side item bottom text style                                                             |
| headingStyle           | TextStyle             | No        | left Heading text style                                                                       |
| headingTextStyle       | TextStyle             | No        | left side item top text style                                                                 |
| listEndHeaderTextStyle | Textstyle             | No        | to change text style of end header                                                            |
| optionalContainerStyle | TextStyle             | No        | to style OptionalContainer                                                                    |
| subLineStyle           | TextStyle             | No        | left side item bottom text style                                                              |
| headingContainerStyleProp| ViewStyle           | No        | Heading Container style                                                                       |
| itemSeparateLineStyle  | ViewStyle             | No        | item separate line style item                                                                 |
| itemViewStyle          | ViewStyle             | No        | flat list item                                                                                |
| leftIconStyles         | ViewStyle             | No        | left icon styles                                                                              |
| listHeaderViewStyle    | ViewStyle             | No        | top header text style                                                                         |
| mainContainerStyle     | ViewStyle             | No        | flat list parent container view style                                                         |
| rightIconStyles        | ViewStyle             | No        | right icon styles                                                                             |
| touchableStyle         | ViewStyle             | No        | Touchable opacity style                                                                       |
| touchStyle             | ViewStyle             | No        | style for tapping Highlight area of item                                                      |
| amt                    | string or JSX.Element | No        | right side item top value key                                                                 |
| subLineKey             | string or JSX.Element | No        | left side item top value key                                                                  |
| disableIcon            | JSX.Element           | No        | icon to be appeared in disabled state                                                         |
| highlightIcon          | JSX.Element           | No        | icon to be appeared in active state                                                           |
| isSeparator            | boolean               | No        | whether separator is needed or not                                                            |
| isRefresh              | boolean               | No        | Set this true while waiting for new data from a refresh.                                      |
| isTextWrap             | boolean               | No        | text wrap needed or not                                                                       |
| isListHeader           | boolean               | No        | list header needed or not                                                                     |
| isOnPressHighlight     | boolean               | No        | highlighting the container on pressing it is needed or not                                    |
| isOptionalContainer    | boolean               | No        | container below subline is needed or not for adding extra functionality                       |
| defaultIndex           | number                | No        | defaualt selected Index                                                                         |
| highlightWidth         | number                | No        | Highlight color width                                                                         |
| maxToRenderPerBatch    | number                | No        | prop to maxToRenderPerBatch of FlatList                                                       |
| onEndReachedThreshold  | number                | No        | prop to onEndReachedThreshold of FlatList                                                     |
| getAllproducts         | () => void            | No        | prop to onEndReached of FlatList                                                              |
| itemOnPressCallback    | () => void            | No        | selected item call back func                                                                  |
| onClickRightIcon       | () => void            | No        | prop to click rightIcon                                                                       |
| onItemClick            | () => void            | No        | prop for on click of selected item                                                            |
| OnRefreshCallback      | () => void            | No        | a standard RefreshControl will be added for "Pull to Refresh" functionality                   |
| footerElement          | func                  | No        | Flat list footer                                                                              |
| renderCustomListHeader | func                  | No        | Flat list item container                                                                      |

### IMNormalList example

```JSON
 const data =[{
    id: '54rfd',
    name: 'Name',
    amt: 'Amt',
    actNumber: 'A/c number',
    date: 'Date',
    logo: <ICComponentDrawerType height={30} width={30} />,
    rightLogo: <Refresh />,
    starLogo: <Star />,
    optionalText: 'sgertvshjnsbjkdfnbauy4garfbciq74',
  },
  {
    id: 'a0s0a8ssbsd',
    name: 'Name',
    amt: 'Amt',
    actNumber: <Text>Balance</Text>,
    date: 'Date',
    logo: <ICComponentDrawerSuccess height={30} width={30} />,
    rightLogo: <Refresh />,
    starLogo: <Star />,
    isoptionalText: true,
  },,(similar objects)
]

Above list object key logo is Image container depends upon format of image.

```

```JSX
           <IMNormalList
          rightIconKey="rightLogo"
          leftIcon="logo"
          footerElement={() => <Text>{STRINGS.str_footer}</Text>}
          isListHeader={true}
          subLineKey={'actNumber'}
          starIconKey="starLogo"
          ListHeadingTitle={'All payees'}
          ListEndHeadingTitle={'Last paid'}
          headingKey="name"
          date={'date'}
          amt={'amt'}
          list={data}
          isSeparator={false}
          onClickRightIcon={() => {
            console.log('Right icon is pressed');
          }}
          onItemClick={handleItemClick}
          isOnPressHighlight={true}
        />
```

## IMGeneralList

| Props                | Params              | isRequire | Description                                     |
| -------------------- | ------------------- | --------- | ----------------------------------------------- |
| content              | string              | Yes       | right side item key                             |
| displayKey           | string              | Yes       | left side item key                              |
| list                 | Array               | Yes       | List of objects to be rendered in the flat list |
| isSeparator          | boolean             | No        | Whether Separator is needed or not              |
| isEmptyContentDisplay| boolean             | No        | Whether to display empty content                |
| leftItemTextStyle    | TextStyle           | No        | left item text style                            |
| rightItemTextStyle   | TextStyle           | No        | right side item style                           |
| changeContainerStyle | ViewStyle           | No        | To chabge child container style                 |
| itemSeparateLineStyle| ViewStyle           | No        | To change separator styles                      |
| mainContainerStyle   | ViewStyle           | No        | parent container style                          |
| footerElement        | JSX.Element         | No        | Flat list footer                                |
| headerElement        | JSX.Element         | No        | Flat list header container                      |
| onPressItem          | (prop: any) => void | No        | selected item call back func                    |

### IMGeneralList example

```JSON
 const sampleData = [
  {
    value: 'Label',
    key: 'lCUTs2aa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label Goldstein',
    key: 'TXdL0caa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'zqsiEwaaa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },(similar objects)
]
```

```JSX
    <IMGeneralList
          content="subTitle"
          displayKey="value"
          list={sampleData}
          isSeparator={true}
        />
```

## IMChevronList

| Props                 | Params              | isRequire | Description                                     |
| --------------------- | ------------------- | --------- | ----------------------------------------------- |
| displayKey            | string              | Yes       | title of the each item key                      |
| rightSideImage        | string              | No        | right side image container                      |
| isleftSideImage       | boolean             | No        | whether right side image needed or not          |
| isSeparator           | boolean             | No        | whether separator is needed or not              |
| list                  | Array               | Yes       | List of objects to be rendered in the flat list |
| itemTextStyle         | TextStyle           | No        | style of the title                              |
| itemSeparateLineStyle | ViewStyle           | No        | separator styles                                |
| leftIconViewStyle     | ViewStyle           | No        | left icon styles                                |
| mainContainerStyle    | ViewStyle           | No        | parent container style                          |
| footerElement         | JSX.Element         | No        | Flat list footer                                |
| headerElement         | JSX.Element         | No        | Flat list header container                      |
| onPressItem           | (prop: any) => void | No        | selected item call back func                    |

### IMChevronList example

(add icon key in sampleData and provide svg icon to get leftside icon
eg: { value: 'Label Goldstein', key: 'TXdL0caa', subTitle: 'Content', icon: <ICGeneralDisabledCheckBoxUnChecked /> },)

```JSON
 const sampleData = [
  {
    value: 'Label',
    key: 'lCUTs2aa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label Goldstein',
    key: 'TXdL0caa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'zqsiEwaaa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },(similar objects)
]
```

```JSX
 <IMChevronList
          displayKey="value"
          list={sampleData}
          isleftSideImage={false}
          leftIconViewStyle={styles.leftIconViewStyle}
          mainContainerStyle={styles.mainContainerStyle}
          isSeparator={true}
        />
```

## IMGroupList

| Props                  | Params                    | isRequire | Description                                          |
| ---------------------- | ------------------------- | --------- | ---------------------------------------------------- |
| content                | Array                     | Yes       | List of objects to be rendered in the flat list      |
| highlightColor         | string                    | No        | Highlight color                                      |
| highlightWidth         | number                    | No        | Highlight color width                                |
| isSeparator            | boolean                   | No        | decides whether separator is needed or not           |
| itemSeparateLineStyle  | ViewStyle                 | No        | To Give styling to separator                         |
| mainContainerStyle     | ViewStyle                 | No        | To Give styling to main Container (parent container) |
| main                   | JSX.Element               | Yes       | Main data                                            |
| mainTextContainerStyle | item above view ViewStyle | No        | style of the main data container                     |
| sub                    | JSX.Element               | Yes       | SubLine data                                         |
| subTextContainerStyle  | item sub ViewStyle        | No        | subLine container style                              |
| onPressItem            | (prop: any) => void       | No        | selected item call back func                         |
| footerElement          | JSX.Element               | No        | Flat list footer                                     |
| headerElement          | JSX.Element               | No        | Flat list header container                           |

### IMGroupList example

```JSON
 const content = [
  {
    main: (
      <View
        style={{
          width: actuatedNormalizeWidth(328),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ color: '#00000050', fontFamily: 'Mulish-Regular' }}>
            cnn
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            6497816328401657
          </Text>
          <Text
            style={{
              backgroundColor: '#f0792e30',
              color: '#f0792e',
              fontSize: 10,
              fontFamily: 'Mulish-Medium',
            }}>
            300-SELF CONFIDENCE IS KEY
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#7D8287',
              fontSize: 10,
              fontFamily: 'Mulish-Regular',
            }}>
            created at 4.15 PM
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            -300
          </Text>
        </View>
      </View>
    ),
    mainTextContainerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: 16,
    },
  },
  {
    main: (
      <View
        style={{
          width: actuatedNormalizeWidth(328),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ color: '#00000050', fontFamily: 'Mulish-Regular' }}>
            cnn
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            6497816328401657
          </Text>
          <Text
            style={{
              backgroundColor: '#f0792e30',
              color: '#f0792e',
              fontSize: 10,
              fontFamily: 'Mulish-Medium',
            }}>
            300-SELF CONFIDENCE IS KEY
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#7D8287',
              fontSize: 10,
              fontFamily: 'Mulish-Regular',
            }}>
            created at 4.15 PM
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            -300
          </Text>
        </View>
      </View>
    ),
    sub: (
      <Text style={{ color: '#333638', fontFamily: 'Mulish-SemiBold' }}>
        View PDF
      </Text>
    ),
    subTextContainerStyle: { backgroundColor: '#FFD580' },
    mainTextContainerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  },(similar objects)]
```

```JSX
     <IMGroupList
          onPressItem={() => {
            console.log('warning');
          }}
          content={content}
          isSeparator={true}
          highlightWidth={1}
          highlightColor={styles.highlightColor.color}
          itemSeparateLineStyle={styles.itemSeparateLineStyle}
          mainContainerStyle={styles.mainContainerStyle}
        />
```

## IMAlphabeticalList

| Props                              | Params      | isRequire | Description                                                                                                                                                |
| ---------------------------------- | ----------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                               | array       | Yes       | List of objects to be sorted and rendered in the SectionList. Each item must have both a value property and unique a key property.                         |
| alphabeticalHeading                | string      | Yes       | title of the list                                                                                                                                          |
| searchPlaceHolder                  | String      | No        | search input placeholder text                                                                                                                              |
| index                              | String[]    | No        | The characters used to sort each item into sections. These characters are rendered on the right-hand side and clicking on each item scrolls the user to its respective section. The default is the letters of the alphabet. |
| searchImage                        | JSX.Element | No        | search input image                                                                                                                                         |
| selectSearchImage                  | JSX.Element | No        | selected item in search input image                                                                                                                        |
| unselectSearchImage                | JSX.Element | No        | un selected item in search input image                                                                                                                     |
| isCategorizedAtTop                 | boolean     | No        | If true, the un categorized items (the # section) is moved to the top of the list.                                                                         |
| isLeftIcon                         | boolean     | No        | whether left icon needed or not                                                                                                                            |
| isListIndexLetter                  | boolean     | No        | Letter index visibility visibility                                                                                                                         |
| isRadioButton                      | boolean     | No        | needed for choice type of list                                                                                                                             |
| isSearch                           | boolean     | No        | search input visibility                                                                                                                                    |
| indexLetterStyle                   | TextStyle   | No        | Override the style of the list letter index text.                                                                                                          |
| selectedIndexLetterStyle           | TextStyle   | No        | selected index letter style                                                                                                                                |
| titleStyle                         | TextStyle   | No        | list title text style                                                                                                                                      |
| indexContainerStyle                | ViewStyle   | No        | Override the style of the list index container.                                                                                                            |
| indexLetterContainerStyle          | ViewStyle   | No        | indexLetterContainerStyle                                                                                                                                  |
| letterListContainerStyle           | ViewStyle   | No        | Override the style of the letter list container.                                                                                                           |
| mainViewStyle                      | ViewStyle   | No        | total container style                                                                                                                                      |
| searchRenderTouchContainerStyle    | ViewStyle   | No        | selected item in search style                                                                                                                              |
| searchContainerStyle               | ViewStyle   | No        | Override the style of the search container style.                                                                                                          |
| searchInputContainer               | ViewStyle   | No        | Override the style of the search container style.                                                                                                          |
| searchRenderTouchableActiveStyle   | ViewStyle   | No        | Override the style of the selected item in search container style.                                                                                         |
| scrollingIndexLetterContainerStyle | ViewStyle   | No        | Override the style of the scrolling time index letter                                                                                                      |
| getItemHeight                      | func        | No        | For sectionListGetItemLayout. This may be necessary if each item has a dynamic height. This allows for smooth scrolling and accurate positioning when scrolling to a section.|
| noSearchDataView                   | func        | No        | No data empty container                                                             \                                                                      |
| renderCustomListHeader             | func        | No        | Render a list header in the SectionList. Should return a valid React Element.                                                                              |
| renderCustomIndexLetter            | func        | No        | Render a custom index letter element. Should return a valid React Element.                                                                                 |
| renderCustomSectionHeader          | func        | No        | Render a section header in the SectionList. Should return a valid React Element.                                                                           |
| renderItemCallback                 | func        | No        | selected item without in the search                                                                                                                        |
| renderSearchCustomItem             | func        | No        | Selection image                                                                                                                                            |
| searchResultCallback               | func        | No        | selected item in the search call back                                                                                                                      |
| keyboardType                       | enum        | No        | keyboard type for search text input                                                                                                                        |

### IMAlphabeticalList example

```JSON
 const sampleData = [
   {
    value: 'A Label',
    key: 'lCUTs2aa',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}

      />
    ),
    isResult:true
  },
  {
    value: 'B Label',
    key: 'TXdL0caa',
    logo: (
      <ICComponentDrawerSuccess
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}

      />
    ),
  },
  {
    value: 'C Label',
    key: 'zqsiEwaaa',
    logo: (
      <ICLineBankAccount height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />
    ),
  },
]
```

above data list logo is the container please change the depends upon the format.

```JSX
    <IMGroupList
      onPressItem={() => {}}
      content={content}
      isSeparator={true}
      itemSeparateLineStyle={{ marginVertical: 16, borderStyle: 'dashed' }}
      mainContainerStyle={{ marginHorizontal: 16, marginVertical: 16 }}
      subTextContainerStyle={{ backgroundColor: '#FFD580' }}
      mainTextContainerStyle={{ backgroundColor: '#fff', alignItems: 'center' }}
    />
    
      <IMAlphabeticalList
        data={sampleData}
        titleStyle={typography.BodyRegular1}
        isSearch={false}
        renderCustomSectionHeader={section => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
          </View>
        )}
      />
```
