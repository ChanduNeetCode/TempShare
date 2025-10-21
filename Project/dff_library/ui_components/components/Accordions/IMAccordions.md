# Accordions v1.0.0

## Installation

Using npm -
$ npm i dff_library
How to use Accordion component -
import { IMAccordions } from '@icicibank/tsg1_2259_rn_dff_library'

## IMAccordion

## AccordionItem
 
| Props                | Params                             | isRequire| Description                        |
| ------------------- | ------------------------            | ---------| -------------------------------    |
| id                  | number                              | No       | id for the accordion item          |
| title               | string|JSX.Element                  | Yes      | title for accordion item           |
| subtitle            | string                              | No       | subtitle for accordion item (If title is given as a JSX element subtitle is not used)|
| mainTooltipContent  | string                              | No       | tooltip content for the main accordion |
| mainTooltipTextStyle| TextStyle                           | No       | mainAccordion tooltip style        |
| selectTitleStyle    | TextStyle                           | No       | title style  for accordion item when selected  |
| unselectTitleStyle  | TextStyle                           | No       | title style  for accordion item when it is unselected  |
| subtitleStyle       | TextStyle                           | No       | subtitle style  for accordion item |
| mainTooltipStyle    | ViewStyle                           | No       | main accordion tooltip container Style |
| isMainTooltip       | boolean                             | No       | if you want to display tooltip for main Accordion |
| isContentJSX        | boolean                             | Yes      | If you want to pass content as JSX make true otherwise false |
| isDisableToggle     | boolean                             | Yes      | If you want to disable toggle pass true |
| isOpen              | boolean                             | Yes      | If you want to  content as open state make true otherwise false  |
| content             | Array of objects||JSX.Element       | No       | display content in objects or JSX element (strings also must be passed as a JSX element) |
| rightselectImage    | JSX.Element                         | No       | rightside icon for accordion item upon opening content |
| rightunselectImage  | JSX.Element                         | No       | rightside icon for 
| image               | JSX.Element                         | No       | if before and after expand same image then use image prop else you can use selectIconImage and unselectIconImage seperately|
| selectIconImage     | JSX.Element                         | No       | if we expand accordion item do you want to change icon|
| unselectIconImage   | JSX.Element                         | No       | icon for accordion item            |
| onViewableItemsChanged| any                               | No       | onViewableItemsChanged             |
| viewabilityConfig   | any                                 | No       | viewabilityConfig                  |
| getItemLayout       | any                                 | No       | getItemLayout                      |

##ContentObject

| Props               | Params                | isRequire| Description                        |
| ------------------- | ----------------------| ---------| -------------------------------    |
| isTooltip           | boolean               | No       | boolean to display tooltip for innerContent |
| id                  | number                | No       | id for the accordion item          |
| text                | String                | No       | display content if we expand accordion item .This is related to content object |
| tooltipContent      | String                | No       | text to display for tooltip        |
| tooltipContentStyle | TextStyle             | No       | style for inner tooltip            |
| Image               | JSX.Element           | No       | display icon if we expand accordion item .This is related to content object |

 ##IMAccordionProps
| Props                   | Params                               | isRequire |                       Description             |
| -------------------     | ------------------------------------ | --------- | ------------------------------------------    |
| isFlatlistAccordian     | boolean                              | Yes       | If you want to display accordions as list  make true otherwise false   |
| isFlatlistLastline     |  boolean                              | No        | Whether to display seperator for last item or no   |
| contentItemTapFunction  | (prop:any)=>void                     | Yes       | There is content after expanding accordion item.Upon clicking the content in accrodion item this functioanlity happens         |
| toggleFunc              | toggleFunc?: (prop:AccordionItem,index:number) => void; | Yes  | If the accordion item is expanded then the object aling with its flatlist index is returned|                    
| items                   | Array of objects                     | Yes       | data for the accordion                                  |
| isWithoutIcon           | boolean                              | No        | display accordion  without icon                         |
| isMultipleOpenAllowed   | boolean                              | NO        | If you want to expand  multiple accordions pass true    |
| refs                    | any                                  | No        | this is used for reference of flatlist                  |
|flatListAccordionContainerStyle| View Style                     | No        | to set style for the faltListAccrodion Container        |
|unselectedparentstyle    | View Style                           | No        | to set style for the view when unexpanded               |
|selectedparentstyle      | View Style                           | No        | to set style for the view when expanded                 |
|headerStyle              | View Style                           | No        | to set style for the header                             |
|innerSeperationLineStyle | View Style                           | No        | to change the style of the inner seperation line        |
|redirectionTextProp      | TextStyle                            | No        | to set style for the text inside the accordion child only when the accordionItem prop isContentJSX==false that means inner child is not JSX |
|isHighlighted            | boolean                              | No        | if you want to highLight text pass true (default false) |
|textHighlightString      | string                               | No        | set the string which needed to be highlighted           |
|backgroundHighlightColor | View Style                           | No        | to set background color for the highLighted Text        |
|cardContentStyle         | View Style                           | No        | to set style for cardContent                            |
|itemSeperatorComponent   | JSX.Element                          | No        | itemseperator view                                      |
|titleViewStyle           | ViewStyle                            | No        | titleViewStyle prop                                     |

### IMAccordions example

````JSON
const sampleData = [
  {
    id: 1,
    isOpen:true,
    isDisableToggle:true,
    title: (<Text style={{paddingLeft:20,fontFamily:'Mulish-Regular',color:'#202428'}}>Accounts and services</Text>),
    isContentJSX: true,
    selectIconImage :<ICGeneralAddBank/>,
    unselectIconImage: <ICGeneralAddPayee />,
    content: (
      <>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ paddingTop: 10 }}>
            <ICBlock />
          </View>
          <Text style={{ padding: 10 }}>Manage Payments</Text>
        </View>
      </>
    ),
  },

  {
    id: 2,
    isOpen: false,
    title: 'Personal Account',
    isContentJSX: false,
    image:<ICGeneralAttention/>,
    content: [
      {
        id: 0,
        text: 'Manage Scheduled Payments',
        image: <ICGeneralAddPayee width={20} height={20} />,
      },
      {
        id: 1,
        text: 'Add/Manage Payees',
        image: <ICGeneralAddPayee width={20} height={20} />,
      },
    ],
    subtitle: 'Body Copy',
  },

  {
    id: 3,
    isOpen: false,
    title: 'accordian3',
    isContentJSX: true,
    selectIconImage :<ICGeneralAddBank/>,
    unselectIconImage: <ICGeneralAttention />,
    content: <Text>Hello world</Text>,
    subtitle: 'Body Copy',
    titleStyle: {
      color: colors.Error110,
    },
    subTitleStyle: {
      color: colors.SecondaryMaroon100,
    },
  },
];


Example 1
```JSX
        <IMAccordions
          isFlatlistAccordian={false}
          items={sampleData}
          refs={flatref}
          isWithoutIcon={false}
          toggleFunc={(key,index) => {
          }}
          contentItemTapFunction={val=>{}}
          rightSelectImage={<ICGeneralChevronUp width={20} height={20} />}
          rightUnselectImage={<ICGeneralChevronDown width={20} height={20} />}
        />
````

Example 2

```JSX
       <IMAccordions
         isFlatlistAccordian={true}
         items={sampleData}
         isWithoutIcon={true}
       />
```


// just for future reference when last item needs to scrolled a little above for the last item 

const lastVisibleIndex = useRef(0);
const viewabilityConfig = useRef({
  itemVisiblePercentThreshold: 30 // Item is considered visible when 30% visible
});
 
// Track both first and last visible items

const onViewableItemsChanged = useRef(({ viewableItems }:any) => {
  if (viewableItems.length > 0) {
    const lastItem = viewableItems[viewableItems.length-1];
    let b = lastItem.index
    let a = b-1;
    lastVisibleIndex.current = a;
  }
});

use the following logic for scroll in the toggleFunc

if(index+1>=lastVisibleIndex.current){
      refs.current?.scrollToIndex({
                      index,
                      animated: true,
                      viewPosition: 0.5   (0.5 centers the item)
                    });
    }

pass the following as values for props in IMAccordion
onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        // Optional: Add these props for better performance
        getItemLayout={(data, index) => ({
          length: 64, // Height of each item plus margin
          offset: 64 * index,
          index,
        })}
