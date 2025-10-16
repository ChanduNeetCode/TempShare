# Thank You and Error Page

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

<!--Other dependencies using npm -->

$ npm i react-native-gesture-handler react-native-reanimated

## JSX Implementation for Thank You and Error Page

```JSX

        <!--How to create Thank You and Error Page in the Component-->

            import { IMThankYouErrorPage } from '@icicibank/tsg1_2259_rn_dff_library'

            <IMThankYouErrorPage
              paymentStatus={paymentStatusInfo.success}
              buttonLeftIcon={
                <ICGeneralWhiteShare
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              buttonRightIcon={
                <ICGeneralWhiteQuery
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              buttonLeftTitle="Share"
              buttonRightTitle="Receipt"
              enablePaymentStatusIcon={true}
              enableZigzagPattern={true}
              buttonTitleLeftColor={colors.White}
              buttonTitleRightColor={colors.White}
              buttonLeftonPress={() => onPress('Share')}
              buttonRightonPress={() => onPress('Receipt')}>
              <Text style={styles.textStyle}>{STRINGS.str_SuccessMessage}</Text>
            </IMThankYouErrorPage>
```
<br/>

### Props in Thank You and Error Page Component

| **_attribute_**           | **_format_**          | **_description_**                  | **_isRequired_** |
| ------------------------- | --------------------- | ---------------------------------- | ---------------- |
| paymentStatus             | success/error/pending | Payment Status                     | Mandatory        |
| buttonLeftIcon            | Image                 | Left Button Image                  | Optional         |
| buttonRightIcon           | Image                 | Right Button Image                 | Optional         |
| buttonLeftTitle           | string                | Left Button Title                  | Mandatory        |
| buttonRightTitle          | string                | Right Button Title                 | Mandatory        |
| enablePaymentStatusIcon   | true/false            | To Enable Payment Status Image     | Optional         |
| enableZigzagPattern       | true/false            | To Enable Zigzag Patter            | Optional         |
| buttonTitleLeftColor      | string                | Left Button Title Color            | Optional         |
| buttonsBackgroundColor    | string                | Buttons background color           | Optional         |
| buttonDividerColor        | string                | Button Divider Color               | Optional         |
| parentViewBackgroundColor | string                | Parent View Background Color       | Optional         |
| buttonsContainerViewStyle | StyleProp<ViewStyle>  | Button container style             | Optional         |
| circleImageStyleProp      | StyleProp<ViewStyle>  | Icon container style               | Optional         |
| mainContainer             | StyleProp<ViewStyle>  | Main container style (status included)| Optional      |
| parentViewStyle           | StyleProp<ViewStyle>  | Parent container style             | Optional         |
| buttonsVisible            | true/false            | Visibility of button container     | Optional         |
| paymentStatusIcon         | Image                 | Set Payment Status Icon Visibility | Optional         |

<br/>
<br/>
