# Calendar Android Native v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use Calendar in components -
import { IMCalendar } from '@icicibank/tsg1_2259_rn_dff_library'

## IMCalendar

## CalendarEventItem

| Props    | Params | isRequire | Description                                                                                          |
| -------- | ------ | --------- | ---------------------------------------------------------------------------------------------------- |
| date     | string | Yes       | date for the calendar event (Format : dd-mm-yyyy)                                                    |
| drawable | string | Yes       | image for calendar event(only string must be passed. example R.drawable.ic_component_drawer_success) |
| text     | string | Yes       | message for the calendar event                                                                       |

##IMCalendarProps

| Props               | Params              | isRequire | Description                                                          |
| ------------------- | ------------------- | --------- | -------------------------------------------------------------------- |
| data                | Array of Objects    | Yes       | The data that comes here will be displayed in the calendar as events |
| dateChangeFunction  | (prop:String)=>void | No        | upon date change this function is called                             |
| monthChangeFunction | (prop:String)=>void | No        | upon date change this function is called                             |

### IMCalendar example

````JSON
const sampleData = [

  {
    "date":'22-05-2024',
    "drawable":'R.drawable.ic_component_drawer_type_2',
    "text": 'Car EMI Due - Rs.5000/-',
  },
  {
    "date":'23-05-2024',
    "drawable":'R.drawable.ic_failed',
    "text": 'Bike EMI Due'
  },
  {
    "date":'24-05-2024'
    "drawable":'R.drawable.ic_component_drawer_success',
    "text": 'House EMI Due',
  },
  {
    "date":'22-05-2024'
    "drawable":'R.drawable.ic_component_drawer_type_2',
    "text": 'Fridge EMI Due',

  },

]


Example 1
```JSX
         <IMCalendar
            data={sampleData}
            dateChangeFunction={(dateselected:String)=>{}}
            monthChangeFunction={(monthselected:String)=>{}}
        />
````
