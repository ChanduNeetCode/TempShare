# Disclaimer and Information

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## JSX Implementation for Disclaimer and Information

```JSX

        <!--How to create Disclaimer and Information View in the Component-->

            import { IMDisclaimerInformation }; from '@icicibank/tsg1_2259_rn_dff_library'

        <IMDisclaimerInformation
            DisclaimerType={DisclaimerEnumValues.Warning}
            message={'Money will be deducted from this account on the day of FD maturity.'}
            height={56}
            width={328}
            imageToDisplay={<ICGeneralAlertOrange style={[styles.imageStyle]} />}
            multiImage={<ICGeneralAlertOrange style={[styles.imageStyle]} />}
            defaultContainerStyleProps
            defaultOrangeContainerStyleProps
            defaultTextStyleProps
            neutralContainerStyleProps
            neutralTextStyleProps
            preConfirmationSingleContainerProps
            positiveInlineContainerStyleProps
            positiveLargeContainerStyleProps
            preCondSingleTextStyleProps
            positiveInlineTextStyleProps
            positiveLargeTextStyleProps
            tipsLargeContainerStyleProps
            tipsLargeTextStyleProps
            warningContainerStyleProps
            warningTextStyleProps
        />
```

<br/>

## IMDisclaimerInformation

| Props                               | Params      | isRequire | Description                                             |
| ----------------------------------- | ----------- | --------- | ------------------------------------------------------- |
| DisclaimerType                      | string      | Yes       | Type Of Disclaimer or Information to display.           |
| message                             | string      | Yes       | To display the Disclaimer or Information details        |
| height                              | number      | Yes       | To set height of Disclaimer or Information View         |
| width                               | number      | Yes       | To set height of Disclaimer or Information View         |
| imageToDisplay                      | JSX.Element | Yes       | Displaying icons in Disclaimer or Information View      |
| multiImage                          | JSX.Element | No        | Displaying more icons in Disclaimer or Information View |
| defaultContainerStyleProps          | ViewStyle   | No        | Container Style Default DisclaimerInformation           |
| defaultOrangeContainerStyleProps    | ViewStyle   | No        | Container Style for Default Orange type                 |
| defaultTextStyleProps               | TextStyle   | No        | TextStyle for Default type DisclaimerInformation        |
| neutralContainerStyleProps          | ViewStyle   | No        | Container Style for Neutral type                        |
| neutralTextStyleProps               | TextStyle   | No        | Text Style for Neutral type                             |
| preConfirmationSingleContainerProps | ViewStyle   | No        | Pre Confirmation Single container Style                 |
| positiveInlineContainerStyleProps   | ViewStyle   | No        | Positive Inline Container Style                         |
| positiveLargeContainerStyleProps    | ViewStyle   | No        | Positive Large Container Style                          |
| preCondSingleTextStyleProps         | TextStyle   | No        | Pre condition single type text Style                    |
| positiveInlineTextStyleProps        | TextStyle   | No        | Positive Inline type Text Style                         |
| positiveLargeTextStyleProps         | TextStyle   | No        | Positive Large TextStyleProps                           |
| LeftImageStyle                      | ViewStyle   | No        | Left Image StyleProps                                   |
| TextStyle                           | ViewStyle   | No        | Text Container Style Props                              |
| tipsLargeContainerStyleProps        | TextStyle   | No        | Tips Large Container Type Style                         |
| tipsLargeTextStyleProps             | TextStyle   | No        | Tips Large Type Text Style                              |
| warningContainerStyleProps          | TextStyle   | No        | Warning Type Container Style                            |
| warningTextStyleProps               | TextStyle   | No        | Warning Type Text Style                                 |

<br/>
<br/>
