# ProgressTracker v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in ProgressTracker components -
import { IMProgressTracker} from '@icicibank/tsg1_2259_rn_dff_library'

## IMProgressTracker

###Props in IMProgressTracker:

| Props                   | Params             | isRequire | Description                                       |
| ----------------------- | ------------------ | --------- | ------------------------------------------------- |
| data                    | Array              | Yes       | data as per your requirement                      |
| activeCircleStyle       | ViewStyle          | Yes       | activeStyle as per requirement                    |
| disabledCircleStyle     | ViewStyle          | Yes       | disabledStyle as per requirement                  |
| titleContainerStyle     | ViewStyle          | No        | styles of title container                         |
| activeStateTextStyle    | TextStyle          | No        | activetext style if required                      |
| disabledStateTextStyle  | TextStyle          | No        | disabledtext style if required                    |
| completedStateTextStyle | TextStyle          | No        | completedtext style if required                   |
| lineStyle               | ViewStyle          | No        | linecolor if required                             |
| popupText               | string             | No        | proceed button Pressed then popup if required     |
| popupFinishText         | string             | No        | in last step Pressed button popup if required     |
| toggleFunc              | (prop:any) => void | No        | Selection callback                                |
| proceedHandler              | (prop:any) => void | No        | Selection of steps button                                |
| currentStepProp         | (prop:any) => void | No        | Gives the current index                           |
| callbackprogress        | (prop:any) => void | No        | Gives the next index                              |
| childProp               | JSX.Element        | No        | prop for add JSX Element between progress tracker |
| completedCircleStyle    | JSX.Element        | Yes       | completed image with color                        |
| buttonComponent         | JSX.Element        | No        | Moved to nextstep                                 |
| isMessage               | boolean            | No        | if you want popup then it isrequired              |
| itemStyleProp           | ViewStyle          | No        | item container style prop                         |
| flatListStyle           | ViewStyle          | No        | Flatlist container style prop                     |
| flatListViewStyle       | ViewStyle          | No        | Flatlist viewcontainer style prop                 |
| parentContainerStyle    | ViewStyle          | No        | container style                                   |
| buttonContainerStyle    | ViewStyle          | No        | button container style                            |
| ParentButtonStyle       | ViewStyle          | No        | button style                                      |
| titleStyle              | TextStyle          | No        | style of the title                                |
| buttonChildrenProp      | JSX.Element        | No        | prop for add JSX Element in button View           |


## JSX Implementation for ProgressTracker

```JSX

 <IMProgressTracker
              data={data}
              activeCircleStyle={styles.activeCircleStyle}
              disabledCircleStyle={styles.disabledCircleStyle}
              completedCircleStyle={
                <ICComponentDrawerSuccess height={styles.completedCircleStyle.height} width={styles.completedCircleStyle.width} />
              }
              buttonComponent={
                <Text style={styles.proceedButtonText}>
                  {STRINGS.btn_title}
                </Text>
              }
              toggleFunc={item => console.log(item)}
              lineStyle={styles.lineStyle}
              isMessage={true}
              popupText={STRINGS.popup_Movetext}
              popupFinishText={STRINGS.popup_finish}
              buttonContainerStyle={styles.buttonContainerStyle}
              parentContainerStyle={styles.generalMainContainer}
            />
```


## IMGeneralTracker

###Props in IMGeneralTracker:

| Props                   | Params             | isRequire | Description                                       |
| ----------------------- | ------------------ | --------- | ------------------------------------------------- |
| isauto                  | boolean            | No        | whether the indicator should scroll automatically or not|
| isdarkMode              | boolean            | No        | dark mode is needed or not                        |
| isButton                | boolean            | No        | button needed for moving to next step or not      |
| autoTimeOut             | number             | No        | waiting time of auto scroll                       |
| totalSteps              | number             | No        | number of indicators or steps                     |
| barStyles               | ViewStyle          | No        | indicator style                                   |
| mainContainerStyles     | ViewStyle          | No        | parent container style                            |
| ParentButtonStyle       | ViewStyle          | No        | button container style                            |
| buttonComponent         | JSX.Element        | No        | button component                                  |
| childProp               | JSX.Element        | No        | prop for add JSX Element between progress tracker |
| stepStyle               | TextStyle          | No        | style of Text indicating the status of steps      |
| onPressHandle           | (prop:any) => void | No        | Gives the current index                           |

## JSX Implementation for IMGeneralTracker

```JSX

 <IMGeneralTracker
              totalSteps={2}
              isdarkMode={true}
              onPressHandle={item => console.log('GeneralTracker', item)}
              mainContainerStyles={styles.generalMainContainer}
              isauto={false}
              isButton={true}
              buttonComponent={
                <Text style={styles.proceedButtonText}>
                  {STRINGS.btn_title}
                </Text>
              }
              ParentButtonStyle={styles.generalButton}
            />

```


## IMVerticalProgressTracker

###Props in IMVerticalProgressTracker:

| Props                   | Params             | isRequire | Description                                       |
| ----------------------- | ------------------ | --------- | ------------------------------------------------- |
| data                    | Array<Data>        | Yes        | data with title and statuscode                    |
| statusTitles            | enum               | No        | enum to provide corresponding status messages     |
| iconStyleProp           | ViewStyle          | No        | prop to edit icon Styles                          |
| itemSeparatorStyle      | ViewStyle          | No        | item Separator line style                         |
| renderContainerStyle    | ViewStyle          | No        | prop to give styling for the render container     |
| mainContainerStyle      | ViewStyle or ViewStyle[]  | No    | main container style                              |
| textStyle               | TextStyle          | No        | style of Text indicating the status               |

## JSX Implementation for IMVerticalProgressTracker

```JSX

 <IMVerticalProgressTracker
            data={originalData}
            statusTitles={statusTitleData}
            mainContainerStyle={styles.vericalMainContainer}
          />

```


## IMVerticalProgressTrackerWithCounter

###Props in IMVerticalProgressTrackerWithCounter:

| Props                   | Params             | isRequire | Description                                       |
| ----------------------- | ------------------ | --------- | ------------------------------------------------- |
| data                    | Array<List>        | Yes        | data with title and statuscode                    |
| childProp               | JSX.Element        | No        | prop for add JSX Element between progress tracker |
| textStyleProp           | TextStyle          | No        | item text style                                   |
| itemContainerStyle      | ViewStyle          | No        | prop to edit text Styles of item                  |
| itemSeparatorStyle      | ViewStyle          | No        | item Separator line style                         |
| mainContainerStyle      | ViewStyle          | No        | main container style                              |
| renderContainerStyle    | ViewStyle          | No        | prop to give styling for the render container     |

## JSX Implementation for IMVerticalProgressTrackerWithCounter

```JSX

<IMVerticalProgressTrackerWithCounter
            data={verticalTrackerData}
            childProp={
              <IMAccordions
                isFlatlistAccordian={false}
                items={sampleData}
                isWithoutIcon={false}
                isHighlighted={true}
                textHighlightString="Manage"
                toggleFunc={(_key, _index) => {}}
                contentItemTapFunction={_val => {}}
                selectedparentstyle={{ width: 350 }}
                unselectedparentstyle={{ width: 350 }}
              />
            }
          />

```