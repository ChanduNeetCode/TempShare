# Time Line v1.0.0

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

<!--Other dependencies using npm -->

## JSX Implementation for Time Line

```JSX Element with Sample properties
<IMTimeLine
        numberOfObjects={4}
        content={[
            {
            icon: (<ICNoReminder width={25} height={25} />),
            text: (<Text>Fill in a quick form and create a temporary 4-digit pin</Text>),
            header: (<Text>Log in to e-Pay Tax services</Text>)
            lineStyle:{height:100}
            },
            {
            icon: (<ICNoReminder width={25} height={25} />),
            text: 'Receive a 6-digit reference code (valid for 6 hours) on your registered mobile number',
            header: 'E-Pay tax'
            },
            {
            icon: (<ICNoReminder width={25} height={25} />),
            text: (<Text>Visit ICICI ATM and enter exact details to withdraw cash</Text>),
            header: 'Payment'
            },
            {
            icon: (<ICNoReminder width={25} height={25} />),
            text: 'Receive a 6-digit reference code (valid for 6 hours) on your registered mobile number',
            header: 'E-Pay tax'
            }
        ]}
        BoxContent={'icon'} Flowline={'dashed'} FlowlineColor={'#ff0000'}
/>
```

## IMTimeLine

| Props                | Params                         | isRequire | Description                                                      |
| -------------------- | ------------------------------ | --------- | ---------------------------------------------------------------- |
| content              | list of Objects                | Yes       | contains data which is list of objects that needs to be rendered |
| isSeperator          | Boolean                        | No        | is seperator line required or not                                |
| BoxContent           | 'bullet' or 'icon' or 'number' | Yes       | determines which type of content is needed in the box            |
| Flowline             | 'dashed' or 'solid'            | Optional  | determines type of flow line                                     |
| FlowlineColor        | string                         | Optional  | determines flowline color which should be a valid color code     |
| numberOfObjects      | number                         | Yes       | determines the number of objects present in the data             |
| header               | JSX.Element or string          | Optional  | Header content if exists                                         |
| text                 | JSX.Element or string          | Yes       | Description or subline                                           |
| icon                 | JSX.Element                    | Optional  | should be provide when icon is choosen as BoxContent             |
| sepearateLineElement | JSX.Element                    | Optional  | Sepeate the line b/w items icons                                 |
| headerTextStyle      | TextStyle                      | Optional  | header text style                                                |
| indexTextStyle       | TextStyle                      | Optional  | index number textStyle                                           |
| bulletStyle          | ViewStyle                      | Optional  | bullet style                                                     |
| imageContainerStyle  | ViewStyle                      | Optional  | Image container style                                            |
| seperatorStyle       | ViewStyle                      | Optional  | seperator container style                                        |


##IMDefault TimeLine

| Props                | Params                         | isRequire | Description                                                      |
| -------------------- | ------------------------------ | --------- | ---------------------------------------------------------------- |
|  badgeContainer      | JSX.Element                    | no        | entire badge container for successful event                      |
|  data                | Array                          | yes       | array of events                                                  |
|  dashLength          | number                         | no        | length of dash in dashed line                                    |
|  dashThickness       | number                         | no        | thickness of dash in  dashed line                                |
|  dashGap             | number                         | no        | gap between dash of dashed line                                  |
|  badgesBackgroundClr | string                         | no        | background color of badge                                        |
|  badgesTextClr       | string                         | no        | text color of badge                                              |
|  dashColor           | string                         | no        | color of dashed line                                             |
|  amountContainerStyle| ViewStyle                      | no        | entire amount container style                                    |
|  amountViewStyle     | ViewStyle                      | no        | view style of amount                                             |
|  badgeContainerStyle | ViewStyle                      | no        | view style of badge container                                    |
|  badgeViewStyle      | ViewStyle                      | no        | entire badge view style                                          |
|  cardChildrenStyle   | ViewStyle                      | no        | children styleof info card                                       |
|  cardsContainerStyle | ViewStyle                      | no        | info card container style                                        |
|  cardStyle           | ViewStyle                      | no        | view style of entire card                                        |
|  iconStyle           | ViewStyle                      | no        | view style of icon                                               |
|  leftBorderStyle     | ViewStyle                      | no        | left border style of card                                        |
|  mainCardStyle       | ViewStyle                      | no        | view style of card                                               |
|  rightIconStyle      | ViewStyle                      | no        | icon style                                                       |
|  titleContainerStyle | ViewStyle                      | no        | view style of title                                              |
|  amountSubtitleStyle | TextStyle                      | no        | text style of amountsubtitle                                     |
|  amountTextStyle     | TextStyle                      | no        | text style of amount                                             |
|  badgesTextStyle     | TextStyle                      | no        | text style of badge                                              |
|  subtitleStyle       | TextStyle                      | no        | text style of subtitle                                           |
|  titleStyle          | TextStyle                      | no        | text style of title                                              |

``` JSON 

export const timeLineData = [{
  id:1,
  title: "Standing instruction created",
  icon: <ICGeneralSuccessDone height={22} width={22} />,
  subtitle: "12 Jan ‘21",
  status: 'success'
},
{
  id:2,
  title: "Instalment 1",
  icon: <ICGeneralSuccessDone height={22} width={22} />,
  subtitle: "12 Jan ‘21",
  status: 'success',
  amount: '₹ 2,000',
  update: 'Completed'
},
{
  id:3,
  title: "Instalment 2",
  subtitle: "12 Jan ‘21",
  status: 'fail',
  icon: <ICGeneralErrorAlertRed height={22} width={22} />,
  amount: '₹ 2,000',
  update: 'Failed',
  badgeTitle : "We will try making this payment again in 2 days"


},
{
  id:4,
  title: "Instruction modified",
  subtitle: "12 Jan ‘21",
  status: 'edit',
  icon: <ICGeneralEdit height={22} width={22} />,
  rightIcon: <ICGeneralChevronRight />,
},
{
  id:5,
  title: "Instalment 4",
  subtitle: "12 Jan ‘21",
  status: 'pending',
  icon: <ICGeneralDisabledRadioButtonOn height={22} width={22} />,
  amount: '₹ 2,000',
},
{
  id: 6,
  title: "Instalment 5",
  subtitle: "12 Jan ‘21",
  status: 'pending',
  icon: <ICGeneralDisabledRadioButtonOn height={22} width={22} />,
  amount: '₹ 2,000',
}
]
```
 
``` JSX

        <IMDefaultTimeLine
           data = {timeLineData}
        />
```