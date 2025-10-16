# Calendar v1.13.2

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$npm i @react-native-picker/picker
$npm i @react-native-calendar/calendar

How to use Calendar components -
import { IMCalendar } from '@icicibank/tsg1_2259_rn_dff_library'

## IMCalendar

| Props                   | Params                   | isRequire | Description                                    |
| ----------------------- | ------------------------ | --------- | ---------------------------------------------- |
| CalendarBackgroundColor | string                   | yes       | Background color of calendar                   |
| headerButtonTitle       | string                   | yes       | title of button in header                      |
| textDisabledColor       | string                   | yes       | text color of disabled dates                   |
| calendarStyle           | ViewStyle                | no        | styles of calendar                             |
| dayContainerStyles      | ViewStyle                | no        | styles of day conatiner                        |
| doneButtonStyle         | ViewStyle                | no        | styles of button in header                     |
| headerContentStyle      | ViewStyle                | no        | styles of elements in header view              |
| headerStyle             | ViewStyle                | no        | styles of header view                          |
| iconContainerStyle      | ViewStyle                | no        | styles of icon container                       |
| headerArrowIcon         | JSX.Elemnt               | no        | icon (dropdown arrow) in header                |
| generateMarkedDates     | () => JSX.Element        | no        | function to generate marked dates              |
| renderDay               | (props:any)=>JSX.Element | no        | function to render day in calendar             |
| renderHeader            | ()=> JSX.Element         | no        | function to render header in the calendar      |
| showCalendar            | boolean                  | yes       | whether to show the calender or not            |
| showPicker              | boolean                  | yes       | whether to show the picker or not              |
| dayTextStyles           | TextStyle                | no        | styles of dates in calendar                    |
| headerTextStyle         | TextStyle                | no        | styles of text in header                       |
| dayToMark               | Array                    | yes       | Array of dates to mark and corresponding icons |
| textDayHeaderFontSize   | number                   | no        | fontsize of day names in calendar              |
| markedDatesStyle        | CustomStyles             | yes       | styles of marked dates                         |
| selectedDatesStyles     | CustomStyles             | yes       | styles of seleceted dates                      |
| todayDatesStyles        | CustomStyles             | yes       | styles of today dates                          |

# interface Ilist (custom type of JSON data)

| date | string | yes | dates to mark |
| icon | JSX.Element | yes | icon to display for marke date |

# interface CustomStyles (custom styles type of marked dates)

| container | ViewStyle | no | View style of marked dates container |
| text | TextStyle | no | text styles of marked dates |

### IMCalendar example (calendar)

```JSX

      <IMCalendar
     CalendarBackgroundColor= {colors.CoolGrey90}
     textSectionTitleColor= {'#333638'}
     textDayHeaderFontSize={15}
     dayTextColor= {'black'}
     textDisabledColor= {colors.NeutralGrey100}
     todayTextColor={ 'white'}
     todayBackgroundColor={ 'orange'}
     showPicker = {false}
     showCalendar = {true}
     dayToMark={data}

```

```JSON

    export const data = [
        { date: '2024-05-05', icon: <ICBankLogo /> },
        { date: '2024-05-13', icon: <ICBankLogo /> },
        { date: '2024-05-24', icon: <ICBankLogo/> },
        { date: '2024-05-29', icon: <ICBankLogo /> }
 ];

```
