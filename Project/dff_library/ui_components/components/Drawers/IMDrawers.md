# IMDrawers v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

| childProps | ReactNode | No | for passing child nodes which contains many components |
How to use in IMDrawers components -
import { IMDefaultDrawers, IMIndicativeDrawers } from '@icicibank/tsg1_2259_rn_dff_library'

## IMDefaultDrawers

| Props                      | Params     | isRequire |           Description                      |
| -------------------------- | ---------- | --------- | ------------------------------------------ |
| isDisable                  | boolean    | No        | Disable the touchable opacity              |
| isStatusBarTranslucent     | boolean    | No        | to blur the statusbar                      |
| expandable                 | boolean    | Yes       | Expandable Drawers based on boolean value  |
| visible                    | boolean    | Yes       | Drawers visibility based on boolean value  |
| maxSwipeHeight             | number     | No        | maxSwipeHeight                             |
| minModalHeight             | number     | No        | minModalHeight                             |
| title                      | string     | No        | Title on Drawers                           |
| expandableiconContentStyle | ViewStyle  | No        | Styles for the expandable Icon conatent    |
| expandableIconChildStyle   | ViewStyle  | No        | Styles for the expandable Icon Child       |
| modalContentStyle          | ViewStyle  | No        | Styles for the modal content               |
| modelcontainerStyleProp    | ViewStyle  | No        | Styles for themodelcontainerStyleProp      |
| modalTouchableStyleProp    | ViewStyle  | No        | styles for blur part above the drawer      |
| titleContentStyle          | ViewStyle  | No        | Styles for the title content               |
| titleChildPartOneStyle     | ViewStyle  | No        | Styles for the title content child part one(left image in the title)|
| titleChildPartTwoStyle     | ViewStyle  | No        | Styles for the title content child part two(mid text container in the title) |
| titleChildPartThreeStyle   | ViewStyle  | No        | Styles for the title content child part three(right image in the title)|
| titleStyleProp             | ViewStyle  | No        | Styles for the title                       |
| blurContainer              | JSX.Element| No        | blurContainer for modal                    |
| childProps                 | JSX.Element| No        | for passing child nodes which contains many components|
| expandableIcon             | JSX.Element| No        | Expandable icon                            |
| LeftImage                  | JSX.Element| No        | LeftImage                                  |
| RightImage                 | JSX.Element| No        | RightImage                                 |
| onClose                    | () => void | No        | Method for closing action of Drawers       |
| onIconPress                | () => void | No        | callback function for icon                 |
| onPressBlurPart            | () => void | No        | callback function when click on blur part  |

### IMDefaultDrawers example

const [modalVisible,setModalVisible] = useState(false)
const handleCloseModal = () => {
setModalVisible(false);
}
const handleOpenModal = () => {
setModalVisible(true);
}
<IMDefaultDrawers
visible={modalVisible}
onClose={handleCloseModal}
expandable={true}
title="Modal"
childProps={<View style={{backgroundColor:'cyan'}}>
<Text>Content</Text>
</View>}
/>

## IMIndicativeDrawers

| Props                  | Params     | isRequire | Description                                            |
| ---------------        | ---------- | --------- | ------------------------------------------------------ |
| isDisable              | boolean    | No        | blurpart touchable opacity                             |
| isLinearGradient       | boolean    | No        | whether we want linearGradient for floatIcon           |
| isStatusBarTranslucent     | boolean    | No        | to blur the statusbar                      |
| visible                | boolean    | Yes       | Drawers visibility based on boolean value              |
| linearGradientColor1   | string     | No        | linearGradientColor1                                   |
| linearGradientColor2   | string     | No        | linearGradientColor2                                   |
| indicativeColor        | string     | No        | Background view color for Indicative Icon on Drawers   |
| subTitle               | string     | No        | subTitle on Drawers                                    |
| title                  | string     | No        | Title on Drawers                                       |
| subTitleTextStyle      | TextStyle  | No        | subTitleTextStyle                                      |
| titleTextStyle         | TextStyle  | No        | titleTextStyle                                         |
| closeContentChild      | ViewStyle  | No        | closeContentChild    style prop                        |
| closeContent           | ViewStyle  | No        | closeContent Style prop                                |
| iconfloatStyle         | ViewStyle  | No        | iconfloatStyle Style prop                              |
| modalContentStyle      | ViewStyle  | No        | modalContentStyle                                      |
| modelcontainerStyleProp| ViewStyle  | No        | modelcontainerStyleProp                                |
| modalTouchableStyleProp| ViewStyle  | No        | modalTouchableStyleProp                                |
| statuscontentPropStyle | ViewStyle  | No        | statuscontent Style Prop                               |
| titleindicativePropStyle|ViewStyle  | No        | titleindicative Style Prop                             |
| blurContainer          | JSX.Element| No        | blurContainer for modal                                |
| childProps             | JSX.Element| No        | for passing child nodes which contains many components |
| indicativeIcon         | JSX.Element| No        | Indicative Icon on Drawers                             |
| image                  | JSX.Element| No        | close Icon image                                       |
| start                  | {x: number;y: number}| No| start position for linear gradient                   |
| end                    | {x: number;y: number}| No| end position for linear gradient                     |
| onClose                | () => void | No        | Method for closing action of Drawers                   |
| onCloseModal           | () => void | No        | Callback method for close icon                         |


### IMIndicativeDrawers example

<IMIndicativeDrawers
visible={modalVisible}
onClose={handleCloseModal}
subTitle="Sublime"
title="Modal"
indicativeIcon={<Warning/>}
indicativeColor="#EF8C24"
childProps={<View style={{backgroundColor:'cyan'}}>
<Text>Content</Text>
</View>}
/>

## IMEmptyDrawers

| Props                  | Params     | isRequire | Description                                            |
| -------------          | ---------- | --------- | ------------------------------------------------------ |
| isDisable              | boolean    | No        | blurpart touchable opacity                             |
| visible                | boolean    | Yes       | Drawers visibility based on boolean value              |
| modalContentStyle      | ViewStyle  | No        | modalContentStyle                                      |
| modelcontainerStyleProp| ViewStyle  | No        | modelcontainerStyleProp                                |
| modalTouchableStyleProp| ViewStyle  | No        | modalTouchableStyleProp                                |
| blurContainer          | JSX.Element| No        | blurContainer for modal                                |
| childProps             | JSX.Element| No        | for passing children                                   |
| onClose                | () => void | No        | Method for closing action of Drawers                   |
| onPressBlurPart        | () => void | No        | Method for onpressBlurPart                             |

### IMEmptyDrawers example

        <IMEmptyDrawers
          visible={emptytModalVisible}
          onClose={handleEmptyCloseModal}
          childProps={
            <View>
              <View style={styles.contentViewStyle}>
                <View style={styles.contentIconView}>
                  <ICGeneralAddBank />
                </View>
                <View style={styles.contentTextView}>
                  <Text style={typography.BodySemiBold2}>
                    {STRINGS.str_defaultContentHeading}
                  </Text>
                  <Text style={typography.BodyRegular3}>
                    {STRINGS.str_defaultContentSubHeading}
                  </Text>
                </View>
              </View>
            </View>
          }
        />

## IMIntroductoryDrawers

| Props                  |  Params    | isRequire | Description                                             |
| ---------------------- | ---------- | --------- | ------------------------------------------------------- |
| isBlurOnSubmit         | Boolean    | No        | isBlurOnSubmit                                          |
| isContextMenuHidden    | Boolean    | No        | isContextMenuHidden                                     |
| isDisable              | Boolean    | No        | boolean for touchability opacity                        |
| isStatusBarTranslucent | Boolean    | No        | to blur the statusbar                                   |
| isVisible              | Boolean    | No        | boolean for drawer Visible                              |
| maxLength              | number     | No        | length for textInput(default 4)                         |
| cursorColor            | String     | No        | cursor color for textInput                              |
| keyboardType           | String     | No        | keyboardType                                            |
| linearGradientColor1   | String     | No        | linear gradient color1(default #F6F5F0)                 |
| linearGradientColor2   | String     | No        | linear gradient color1(default white)                   |
| poweredByText          | String     | No        | poweredBy Text                                          |
| subTitle               | String     | No        | subTitle text                                           |
| title                  | String     | No        | title text                                              |
| backGroundImage1Style  | ViewStyle  | No        | backImage1 style                                        |
| backGroundImage2Style  | ViewStyle  | No        | backImage2 style                                        |
| centerIconStyle        | ViewStyle  | No        | centerIcon style                                        |
| closeIconStyle         | ViewStyle  | No        | closeIcon style                                         |
| leftTopImageStyle      | ViewStyle  | No        | leftTopImageStyle                                       |
| leftMiddleImageStyle   | ViewStyle  | No        | leftMiddleImageStyle                                    |
| leftBottomImageStyle   | ViewStyle  | No        | leftTopImageStyle                                       |
| modalContentStyle      | ViewStyle  | No        | modalContentStyle                                       |
| modelcontainerStyleProp| ViewStyle  | No        | modelcontainerStyleProp                                 |
| modalTouchableStyleProp| ViewStyle  | No        | modalTouchableStyleProp                                 |
| rightButtonStyle       | ViewStyle  | No        | rightButtonStyle                                        |
| rightBottomImageStyle  | ViewStyle  | No        | rightBottomImageStyle                                   |
| rightTopImageStyle     | ViewStyle  | No        | rightTopImageStyle                                      |
| rightMiddleImageStyle  | ViewStyle  | No        | rightMiddleImageStyle                                   |
| textInputStyle         | ViewStyle  | No        | textInput Style                                         |
| textInputContainerStyle| ViewStyle  | No        | the container style which is holding textinput and button|
| upiStyle               | ViewStyle  | No        | upiStyle                                                |
| poweredButtonTextStyle | TextStyle  | No        | poweredButtonTextStyle                                  |
| subTitleTextStyle      | TextStyle  | No        | subTitleTextStyle                                       |
| titleTextStyle         | TextStyle  | No        | titleTextStyle                                          |
| backgroundImage1       | JSX.Element| No        | backgroundImage1                                        |
| backgroundImage2       | JSX.Element| No        | backgroundImage2                                        |
| blurContainer          | JSX.Element| No        | blurContainer                                           |
| centerIcon             | JSX.Element| No        | centerIcon                                              |
| closeIcon              | JSX.Element| No        | closeIcon                                               |
| leftTopIconImage       | JSX.Element| No        | leftTopIconImage                                        |
| leftMiddleIconImage    | JSX.Element| No        | leftMiddleIconImage                                     |
| leftBottomIconImage    | JSX.Element| No        | leftBottomIconImage                                     |
| rightButtonComponent   | JSX.Element| No        | rightButtonComponent                                    |
| rightTopIconImage      | JSX.Element| No        | rightTopIconImage                                       |
| rightMiddleIconImage   | JSX.Element| No        | rightMiddleIconImage                                    |
| rightBottomIconImage   | JSX.Element| No        | rightBottomIconImage                                    |
| upiIconImage           | JSX.Element| No        | upiIconImage                                            |
| start                  | {x: number;y: number}| No        | start position for linear gradient            |
| end                    | {x: number;y: number}| No        | end position for linear gradient              |
| onPressBlurPart        | CallBack   | No        | onPressBlurPart callback                                |
| handleCloseIcon        | CallBack   | No        | handleCloseIcon callback                                |
| handleonChangeText     | CallBack   | No        | handleonChangeText callback                             |
| handleRightButtonPress | CallBack   | No        | handleRightButtonPress callback                         |
| onSubmit               | CallBack   | No        | onSubmit callback                                       |


onSubmit
### IMIntroductoryDrawers example
      <IMIntroductoryDrawers 
        onClose={handleIntroductoryCloseModal}
        isVisible={introductoryModalVisible}
      />

## IMMpinDrawers

| Props                 |  Params    | isRequire | Description                                             |
| ----------------------| ---------- | --------- | ------------------------------------------------------- |
| isDisable             | Boolean    | No        | boolean for touchability opacity                        |
| isErrorText           | Boolean    | No        | boolean to display isErrorText                          |
| isStatusBarTranslucent| Boolean    | No        | to blur the statusbar                                   |
| isVisible             | Boolean    | No        | boolean for drawer Visible                              |
| cardHeight            | number     | No        | regular Card Height(default 162)                        |
| maxLength             | String     | No        | length of input(default 4)                              |
| cursorColor           | String     | No        | cursor color                                            |
| errorMessage          | String     | No        | error text upon wrong mpin                              |
| linearGradientColor1  | String     | No        | linear gradient color1(default #EF8C24)                 |
| linearGradientColor2  | String     | No        | linear gradient color1(default #F06837)                 |
| title                 | String     | No        | title                                                   |
| mpinText              | String     | No        | mpinText                                                |
| errorMsgTextStyle     | TextStyle  | No        | errorMsgTextStyle                                       |
| mpinTextStyle         | TextStyle  | No        | mpinTextStyle                                           |
| titleTextStyle        | TextStyle  | No        | titleTextStyle                                          |
| textInputStyle        | TextStyle  | No        | textInputStyle                                          |
| bankLogoStyles        | ViewStyle  | No        | bankLogoStyles                                          |
| closeIconStyles       | ViewStyle  | No        | closeIconStyles                                         |
| contentContainerStyle | ViewStyle  | No        | contentContainerStyle                                   |
| contentStyle          | ViewStyle  | No        | contentStyle                                            |
| eyeIconStyle          | ViewStyle  | No        | eyeIconStyle                                            |
| keyboardAvoidingStyle | ViewStyle  | No        | keyboardAvoidingStyle                                   |
| linearGradientStyle   | ViewStyle  | No        | linearGradientStyle                                     |
| mainContainerStyle    | ViewStyle  | No        | mainContainerStyle                                      |
| modalTouchableStyle   | ViewStyle  | No        | modalTouchableStyle                                     |
| otpContainerStyle     | ViewStyle  | No        | otpContainerStyle                                       |
| titleContainerStyle   | ViewStyle  | No        | titleContainerStyle                                     |
| bankLogo              | JSX.Element| No        | bankLogo                                                |
| blurContainer         | JSX.Element| No        | blurContainer                                           |
| content               | JSX.Element| No        | content                                                 |
| closeimage            | JSX.Element| No        | closeimage                                              |
| disableEyeimage       | JSX.Element| No        | disableEyeimage                                         |
| eyecross              | JSX.Element| No        | eyecross                                                |
| eyeimage              | JSX.Element| No        | eyeimage                                                |
| handleBlurPart        | CallBack   | No        | handleBlurPart callBack                                 |
| handleCloseIcon       | CallBack   | No        | handleCloseIcon callBack                                |
| onSubmit              | CallBack   | No        | onSubmit callBack                                       |
| onChange              | CallBack   | No        | onChange callback                                       |

### IMMpinDrawers example
     <IMMpinDrawer 
        isVisible={mpinModalVisbile}
        handleCancel={()=> setMpinModalVisbile(false)}
      />