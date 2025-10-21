# Tiles

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

#IMHorizontalTilesProps

| Props                        | Params                               | isRequire |              Description                       |
| -----------------------------| ------------------------------------ | --------- | ------------------------------------------     |
| isSelectedStyle              |  boolean                             | No        | booelan for style selection                    |
| tilesType                    |  enum                                | No        | to select the type of tile('StackedWithoutBackground',
  'StackedWithBackground','HorizontalWithBackground','HorizontalWithoutBackground')|
| cardTitle                    |  string                              | No        | title for tile                                 |
| styleHorizontalTextStyle     |  TextStyle                           | No        | textstyle for title of tile                    |
| styleHorizontalViewWithBG    |  ViewStyle                           | No        | view style for tile with background            |
| styleHorizontalViewWithOutBG |  ViewStyle                           | No        | view style for tile without background         |
| cardIcon                     |  JSX.Element                         | No        | icon in tile                                   | 
| onClick                      |  (index)=>void                       | Yes       | callback function for item on presss           | 

Example

export const data = [
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },  
];

```JSX
            <FlatList
              data={data}
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ index, item }) => (
                <View style={styles.carouselStyle}>
                  <IMHorizontalTiles
                    cardTitle={item.title}
                    cardIcon={item.iconImage}
                    tilesType={
                      index === 0 || index === 1
                        ? TilesType.HorizontalWithoutBackground
                        : TilesType.HorizontalWithBackground
                    }
                    onClick={() => { }}
                  />
                </View>
              )}
            /> 
```

#IMContainedTilesProps

| Props                        | Params                               | isRequire |              Description                       |
| -----------------------------| ------------------------------------ | --------- | ------------------------------------------     |
| isContainedBackGroundColor   |  boolean                             | No        | booelan for with background                    |
| isIcon                       |  boolean                             | No        | booelan to display icon in header              |
| isMoreButton                 |  boolean                             | No        | booelan to display more and less               |
| isTitle                      |  boolean                             | No        | booelan to display title in header             |
| isTitleDescription           |  boolean                             | No        | booelan to display title description in header |
| title                        |  string                              | No        | title in header                                |
| titleDescription             |  string                              | No        | title Description in header                    |
| descriptionStyle             |  TextStyle                           | No        | textstyle for description in header            |
| styleContainedText           |  TextStyle                           | No        | textstyle for title in the item                |
| styleContainedTextStyle      |  TextStyle                           | No        | textstyle for more item title in contained     |
| titleStyles                  |  TextStyle                           | No        | textstyle for title in header                  |
| headStyle                    |  ViewStyle                           | No        | headStyle in header                            |
| iconStyle                    |  ViewStyle                           | No        | iconStyle in header                            |
| styleContainedIconView       |  ViewStyle                           | No        | styleContainedIconView style                   |
| styleContainedTile           |  ViewStyle                           | No        | styleContainedTile style                       |
| styleContainedViewStyle      |  ViewStyle                           | No        | styleContainedViewStyle style                  |
| styleContainedViewWithBG     |  ViewStyle                           | No        | styleContainedViewWithBG style                 |
| icon                         |  JSX.Element                         | No        | icon in header                                 |
| viewLessIcon                 |  JSX.Element                         | No        | viewLessIcon icon for less and more            |
| viewMoreIcon                 |  JSX.Element                         | No        | viewMoreIcon icon for less and more            |
| items                        |  Array<flatListObject>               | Yes       | to show contained Tiles of data in the array   | 
| onClick                      |  (index)=>void                       | Yes       | callback function for item on presss           | 


export const data = [
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },  
];

Example 1 without less and more button

```JSX
      <IMContainedTiles
        title={STRINGS.str_Title_tiles}
        items={data}
        isContainedBackGroundColor={true}
        onClick={() => { }} 
      />
```
Example 2 with less and more button

```JSX
      <IMContainedTiles
        items={data}
        isContainedBackGroundColor={true}
        isSelectedStyle={false}
        onClick={() => { }}
        isMoreButton={true}
        viewLessIcon={<ICGeneralChevronDownOrange height={45} />}
        viewMoreIcon={<ICGeneralChevronUpOrange height={45} />}
      />
```

#IMStackedTilesProps

| Props                        | Params                               | isRequire |              Description                       |
| -----------------------------| ------------------------------------ | --------- | ------------------------------------------     |
| isChip                       |  boolean                             | No        | booelan for displaying chip above              |
| isSelectedStyle              |  boolean                             | No        | booelan for style selection                    |
| isTooltip                    |  boolean                             | No        | booelan for displaying tooltip                 |
| tilesType                    |  enum                                | No        | to select the type of tile('StackedWithoutBackground',
  'StackedWithBackground','HorizontalWithBackground','HorizontalWithoutBackground')|
| badgesBackgroundClr          |  string                              | No        | badgesBackgroundClr                            |
| badgesTextClr                |  string                              | No        | badgesTextClr                                  |
| badgesTitle                  |  string                              | No        | badgesTitle                                    |
| cardTitle                    |  string                              | No        | title for tile                                 |
| badgesTextStyle              |  TextStyle                           | No        | badgesTextStyle                                |
| styleContainedTextStyle      |  TextStyle                           | No        | textstyle for title of tile when no background |
| styleTitleStyle              |  TextStyle                           | No        | textstyle for title of tile when with background |
| badgeViewStyle               |  TextStyle                           | No        | badgeViewStyle                                 |
| chipContainerStyle           |  TextStyle                           | No        | chipContainerStyle                             |
| tooltipContainerStyle        |  TextStyle                           | No        | tooltipContainerStyle                          |
| styleContainedTileView       |  ViewStyle                           | No        | view style for tile without background         |
| styleStackedMainBGViewStyle  |  ViewStyle                           | No        | view style for tile with background main view  |
| styleStackedWithBG           |  ViewStyle                           | No        | view style for tile with background inner view |
| badgesLeftIcon               |  JSX.Element                         | No        | badgesLeftIcon                                 | 
| badgesRightIcon              |  JSX.Element                         | No        | badgesRightIcon                                | 
| cardIcon                     |  JSX.Element                         | No        | icon in tile                                   |
| tooltipContent               |  JSX.Element                         | No        | tooltipContent                                 | 
| onClick                      |  (index)=>void                       | Yes       | callback function for item on presss           | 

Example 1 without background

```JSX
      
       <IMStackedTiles
           onClick={() => { }}
           tilesType={TilesType.StackedWithoutBackground}
           cardTitle={STRINGS.str_heading_here}
           cardIcon={<ICLineScanAnyQRCodeOrange height={36} width={36} />}
        />
```

Example 2 with background

```JSX
      <IMStackedTiles
        onClick={() => {    }}
        tilesType={TilesType.StackedWithBackground}
        cardTitle={'Credit cards'}
        cardIcon={<ICLayer />}
      />
```
