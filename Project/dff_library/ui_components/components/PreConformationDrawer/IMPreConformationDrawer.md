# Preconformation v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in Checkbox components -
import { IMPreConformationDrawer } from '@icicibank/tsg1_2259_rn_dff_library'

## IMPreConformationDrawer

| Props                             | Params              | isRequire | Description                                                                |
| --------------------------------- | ------------------- | --------- |------------------------------------------- |
| isDisabled                        | Boolean             | No        | Button disable or not                      |
| isModalVisible                    | boolean             | No        | drawer visibility                          |
| isTransparent                     | boolean             | No        | Modal is Transparent                       |
| amountText                        | string              | No        | amount in top container                    |
| bgcLinearGradientColor            | string              | No        | linear gradient color of the below frame   |
| bgcLinearGradientSecondColor      | string              | No        | linear gradient color of the below frame   |
| buttonTitle                       | string              | No        | title of swipe button                      |
| buttonType                        | string              | No        | type of swipe button                       |
| payerDetailsText                  | string              | No        | middle container payer details text        |
| payingAmountThirdText             | string              | No        | Summary ticket paying amount third text    |
| payingText                        | string              | No        | paying text in ticket top conatiner        |
| receiverName                      | string              | No        | receiver name text in ticket recipt        |
| rupeeSymbol                       | string              | No        | rupee symbol                               |
| title                             | string              | No        | title of the drawer                        |
| linearGradientHeight              | number              | No        | frame below container height               |
| amountContainerStyle              | ViewStyle           | No        | view style of amount container             |
| buttonStyleProp                   | ViewStyle           | No        | swipe button style prop                    |
| closeButtonStyle                  | ViewStyle           | No        | drawer close icon style                    |
| ticketContainerStyleProp          | ViewStyle           | No        | ticket container style                     |
| dottedLeftCircleStyle             | ViewStyle           | No        | payment method and receipt information left half circle style|
| dottedRightCircleStyle            | ViewStyle           | No        | payment method and receipt information right half circle style|
| middleContainerStyle              | ViewStyle           | No        | tcicket view middleContainerStyle prop|
| modalChildStyleProp               | ViewStyle           | No        | prop for modal Child                        |
| modalParentStyle                  | ViewStyle           | No        | prop for modal ParentStyle                  |
| receiverDetailsStyle              | ViewStyle           | No        | prop for styling middle container recipt details|
| containerStyle                    | ViewStyle           | No        | prop for styling ticket view                |
| disclaimerBoxStyle                | ViewStyle           | No        | prop for styling disclaimer box             |
| dottedLinesContainerStyle         | ViewStyle           | No        | prop for styling dottedLines ContainerStyle in ticket|
| paymentButtonStyle                | ViewStyle           | No        | prop for styling button container styling   |
|payingAmountContainStyle           | ViewStyle           | no        | view style of PayAmount container           |
| titleContainerStyle               | ViewStyle           | No        | prop for styling title container styling    |
| taxTextStyle                      | TextStyle           | No        | middle container footer text styling|
| amountTextStyle                   | TextStyle           | No        | amount text styling|
| payerBankNameStyle                | TextStyle           | No        | middle container bankname text styling      |
| payingTextStyle                   | TextStyle           | No        | top container paying text styling           |
| rctNameTextStyle                  | TextStyle           | no        | receiver Name text style                    | 
| rupeeTextStyle                    | TextStyle           | No        | rupee symbol text styling                   |
| titleStyle                        | TextStyle           | No        | title text of the drawer style              |
| blurContainer                     | JSX.Element         | No        | blur view placed above the modalchildstyle  |
| closeIcon                         | JSX.Element         | No        | close icon for the drawer right side        |
| disclaimerBox                     | JSX.Element         | No        | placed above the paymentcta button          |
| footerContainer                   | JSX.Element         | No        | bottom of the view in the drawer            |
| paymentCtabutton                  | JSX.Element         | No        | paymentcta button at the end of the drawer  |
| paymentTypeContainer              | JSX.Element         | No        | payment type child container bewlow ticket view|
| rcInformationBankLogo             | JSX.Element         | No        | Summary ticket receipt information second text left side logo|
| receiverBankInfo                  | JSX.Element         | No        | receiver bank info prop in middle container|
| ticketView                        | JSX.Element         | No        | total ticket view prop|
| backgroundImageforQR              | JSX.Element         | No        | background image for QR type (default flower)|
| leftIcon                          | JSX.Element         | No        | left Icon image (default arrow)              |
| rightIcon                         | JSX.Element         | No        | right Image in case of QR Type (default QR scanner)|
| dateViewStyle                     |  JSX.Element        | No        | ticket date container                        |
| drawerContainer                   | () => JSX.Element   | No        | total item is not matched this component use this container|
| middleContainer                   | () => JSX.Element   | No        | ticket middle container                      |
| topContainer                      | () => JSX.Element   | No        | ticket middle container                      |
| popupCancelCallback               | () => void          | No        | close drawer callback function               |  
| onSwipeSuccess                    | () => void          | No        | callback function incase of success          |
| isTouchableDisable                | boolean             | no        | to disable the touchable                     |


### IMPreConformationDrawer example

````JSX
       <IMPreConformationDrawer isModalVisible={true} 
        />
````
