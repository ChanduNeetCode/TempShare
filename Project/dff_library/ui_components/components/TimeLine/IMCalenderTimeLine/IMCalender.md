# Time Line v1.0.0

## Installation

$ npm i dff_library

<!--Other dependencies using npm -->

## JSX Implementation for Time Line

```JSX Element with Sample properties
export const data = [
    { time: '10 MAY', isCurrent: true, contentIcon: <ICGeneralRadioButtonOn />, title: 'Scheduled instalment', description: '₹ 25,252' },
    { time: '10 JUN', contentIcon: <ICGeneralDisabledTime />, title: 'Scheduled instalment', description: '₹ 25,252' },
    { time: '10 JUL', contentIcon: <ICGeneralDisabledTime />, title: 'Scheduled instalment', description: '₹ 25,252' },
    { time: '10 AUG', contentIcon: <ICGeneralDisabledTime />, title: 'Scheduled instalment', description: '₹ 25,252' },
    { time: '10 DEC', isLastMonth: true, contentIcon: <ICGeneralDisabledTime />, title: 'Scheduled instalment', description: '₹ 25,252' },
    { time: '2024', isYear: true },
    { time: '10 JAN', contentIcon: <ICGeneralDisabledTime />, title: 'Scheduled instalment', description: '₹ 25,252' },
];
```

| Property               | Params                              | isRequire | Description                                                      |
| ---------------------- | ----------------------------------- | --------- | ---------------------------------------------------------------- |
| data                   | data object                         | Yes       | timeline data                                                    |
| separator              | bool                                | No        | render separator line of events                                  |
| columnFormat           | string                              | Yes       | can be 'single-column-left', 'single-column-right', 'two-column' |
| lineWidth              | int                                 | No        | timeline line width                                              |
| lineColor              | string                              | No        | timeline line color                                              |
| circleSize             | int                                 | NO        | timeline circle size                                             |
| circleColor            | string                              | No        | timeline circle color                                            |
| dotColor               | string                              | No        | timeline dot color (innerCircle = 'dot')                         |
| dotSize                | int                                 | No        | timeline dot size (innerCircle = 'dot')                          |
| iconDefault (or icon)  | obj(image source) or React.Element  | No        | default event icon                                               |
| style                  | object                              | No        | custom styles of Timeline container                              |
| listViewStyle          | object                              | No        | custom styles of inner ListView                                  |
| listViewContainerStyle | object                              | No        | custom styles of inner ListView container                        |
| timeStyle              | object                              | No        | custom styles of event time                                      |
| titleStyle             | object                              | No        | custom styles of event title                                     |
| descriptionStyle       | object                              | No        | custom styles of event description                               |
| iconStyle              | object                              | No        | custom styles of event icon                                      |
| separatorStyle         | object                              | No        | custom styles of separator                                       |
| rowContainerStyle      | object                              | No        | custom styles of event container                                 |
| eventContainerStyle    | object                              | No        | custom styles of the event part of the row (line)                |
| eventContainersStyle   | object                              | No        | custom styles of the event part of the row (isYear&isLastMonth)  |
| eventDetailStyle       | object                              | No        | custom styles of the event detail part of the row (line)         |
| timeContainerStyle     | object                              | No        | custom styles of container of event time                         |
| detailContainerStyle   | object                              | No        | custom styles of container of event title and event description  |
| onEventPress           | function(event)                     | No        | function to be invoked when event was pressed                    |
| renderTime             | function(rowData, sectionID, rowID) | No        | custom render event time                                         |
| renderDetail           | function(rowData, sectionID, rowID) | No        | custom render event title and event description                  |
| renderCircle           | function(rowData, sectionID, rowID) | No        | custom render circle                                             |
| renderFullLine         | bool                                | No        | render event border on last timeline item                        |
| options                | object                              | No        | ListView properties                                              |
| showTime               | boolean                             | No        | Time container options                                           |
| isUsingFlatlist        | boolean                             | No        | Render inner components in Flatlist (if false - render in View)  |
