# DatePicker v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in DatePicker components -
import { IMDatePicker } from '@icicibank/tsg1_2259_rn_dff_library'

## IMDatePicker

| Props             | Params     | isRequire | Description                                     |
| ----------------- | ---------- | --------- | ----------------------------------------------- |
| datePickerType    | String     | yes       | Type of DatePicker(singlePicker or rangePicker) |
| enableSwipeMonths | boolean    | no        | To enable swipe gestures                        |
| onDateSelect      | () => void | no        | Callback for selected dates                     |
| hideArrows        | boolean    | no        | To hide arrows                                  |
| intialDate        | String     | no        | Initial date of calender                        |
| minDate           | String     | no        | Miniimum selectable date. Example: new Date("2021-12-31")   |
| maxDate           | String     | no        | Maximum selectable date. Example: new Date("2021-12-31")    |
| rightArrowIcon    | JSXElement | no        | Right side arrow button                         |
| leftArrowIcon     | JSXElement | no        | Left side arrow button                          |
| theme             | Theme      | no        | Calender Theme                                  |
| numberOfYears     | number     | no        | Number of years past and future                 |
| isMonthDropDown   | number     | no        | Number of years past and future                 |
| isMonthDropDown   | boolean    | no        | Month drop down is isvisible or not             |
| isMonthTouchDisable| boolean   | no        | Month touch is visible or not                   |
| doneText          | string     | no        | text for done                                   |
| doneStyle         | ViewStyle  | no        | done container styles                           |
                    
## Theme Interface

```
interface Theme {
  backgroundColor?: String;
  calendarBackground?: String;
  textSectionTitleColor?: String;
  textSectionTitleDisabledColor?: String;
  selectedDayBackgroundColor?:String;
  selectedDayTextColor?: String;
  todayTextColor?: String;
  dayTextColor?: String;
  textDisabledColor?: String;
  dotColor?: String;
  selectedDotColor?: String;
  arrowColor?: String;
  disabledArrowColor?: String;
  monthTextColor?: String;
  indicatorColor?: String;
  textDayFontFamily?: String;
  textMonthFontFamily?: String;
  textDayHeaderFontFamily?: String;
  textDayFontWeight?: String;
  textMonthFontWeight?: String;
  textDayHeaderFontWeight?: String;
  textDayFontSize?: number;
  textMonthFontSize?: number;
  textDayHeaderFontSize?: number;
}
```

### IMDatePicker example

    <IMDatePicker
        datePickerType='singlePicker'
        enableSwipeMonths={true}
        onDateSelect={(val)=>{}}
        hideArrows={false}
        rightArrowIcon={<ICGeneralChevronRight/>}
        leftArrowIcon={<ICGeneralChevronLeft/>}
        theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6cd1c',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: 'red',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
        }}
    />
