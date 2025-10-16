# IMSegmentControl

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use SegmentControl component -
import { IMSegmentControl } from '@icicibank/tsg1_2259_rn_dff_library'

| Props                         | Params                     | isRequire | Description                              |
| ----------------------------- | -------------------------- | --------- | ---------------------------------------- |
| components                    | JSX.Element                | Yes       | components                               |
| tabTitles                     | Array<flatListObject>      | Yes       | title for the given tabs                 |
| selectedTextClr               | String                     | No        | color of selected text                   |
| selectedTitleBgClr            | String                     | No        | color of background of selected text     |
| unSelectedTitleBgClr          | String                     | No        | color of background of unselected text   |
| parentViewStyle               | ViewStyle                  | No        | style for container of SegmentControl    |
| tabViewStyle                  | ViewStyle                  | No        | style for the tab                        |
| tabTitlesSelectedTextStyle    | TextStyle                  | No        | selected title style                     |
| tabTitlesUnSelectedTextStyle  | TextStyle                  | No        | unselected title style                   |
| selectedIndex                 | number                     | No        | index number                             |
| flatListMainStyleProp         | ViewStyle                  | No        | flatlist style                           |
| onSelect                      | (value: number) => void    | Yes       | when user selects                        |


###IMSegmentControl

        <!--How to create Segment control View in the Component-->

        <IMSegmentControl
        values={[{title:'Invest'},{title:'Insure'}]}
        onSelect={(index) => {
        setSelectedIndex(index)
        }}
        selectedIndex={selectedIndex}
        component={[{component:invest},{component:insure}]}
        >
        </IMSegmentControl>