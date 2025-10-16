# One Time Password

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

# Props in IMOneTimePassword Component

| Props                  | Params     | isRequire | Description                                            |
| ---------------        | ---------- | --------- | ------------------------------------------------------ |
| otpInputRefs           | any        | No        | reference for the textInput                            |
| isautoFocus            | boolean    | No        | autoFocus                                              |
| isDisable              | boolean    | No        | touchable opacity boolean prop                         |
| isResendOtpDisabled    | boolean    | No        | disable prop for ResendOtp Button                      |
| isStatusBarTranslucent | boolean    | No        | statusbar translucent boolean prop                     |
| isvisible              | boolean    | No        | Drawers visibility based on boolean value              |
| keyboardVerticalOffset | number     | No        | keyboardVerticalOffset                                 |
| maxLength              | number     | Yes       | maxLength of otp                                       |
| cursorColor            | string     | No        | cursorColor                                            |
| errorMessage           | string     | No        | Error message to display when entered otp is wrong     | 
| otpnote                | string     | No        | Otp note                                               |
| resendotp              | string     | No        | Resend Otp place under Otp note beside resendIcon      |
| successMessage         | string     | No        | Success message to display when entered otp is Correct |
| titleotp               | string     | No        | Otp title                                              |
| title                  | string     | No        | Title for model                                        |
| keyboardType           | keyboardType| No       | keyboardType                                           |
| otptext                | string|JSX.Element |No |  otptext which displays under the TextInput            |
| blurContainer          | JSX.Element| No        | blurContainer for modal                                |
| closeimage             | JSX.Element| No        | close Icon image                                       |
| disableEyeimage        | JSX.Element| No        | icon on right of TextInput When Text Input is empty    |   
| eyecross               | JSX.Element| No        | icon on right of TextInput When Text Input is entered  |
| eyeimage               | JSX.Element| No        | icon on right of TextInput When Text Input is hidden   |
| resendIcon             | JSX.Element| No        | Svg icon placed right of resendOTP                     |
| successImage           | JSX.Element| No        | successImage                                           |
| errorMessageText       | TextStyle  | No        | errorMessageText                                       |
| otpNoteTitle           | TextStyle  | No        | otpNoteTitle                                           |
| otptimeText            | TextStyle  | No        | otptimeText                                            |
| otptimeText2           | TextStyle  | No        | otptimeText2                                           |
| resendOtpStle          | TextStyle  | No        | resendOTP textStyle                                    |
| succesText             | TextStyle  | No        | succesText                                             |
| titleOtpStyle          | TextStyle  | No        | titleOtpStyle                                          |
| titleStyle             | TextStyle  | No        | titleStyle                                             |
| cancelImage            | ViewStyle  | No        | cancelImage style prop                                 |
| container              | ViewStyle  | No        | container Style prop                                   |
| contentContainer       | ViewStyle  | No        | contentContainer Style prop                            |
| contentContainerStyle  | ViewStyle  | No        | contentContainerStyle                                  |
| eyeIcon                | ViewStyle  | No        | eyeIcon                                                |
| keyboardAvoidingStyle  | ViewStyle  | No        | keyboardAvoidingStyle                                  |
| messageView            | ViewStyle  | No        | messageView Style Prop                                 |
| modalContainer         | ViewStyle  | No        | modalContainer Style Prop                              |
| otpContainer           | ViewStyle  | No        | otpContainer Style Prop                                |
| otpView                | ViewStyle  | No        | otpView Style Prop                                     |
| resendContainer        | ViewStyle  | No        | resendContainer Style Prop                             |
| scrollviewContainer    | ViewStyle  | No        | scrollviewContainer Style Prop                         |
| textInput              | ViewStyle  | No        | textInput Style Prop                                   |
| handleBlurPart         | () => void | No        | Method for handleBlurPart                              |
| handleCancel           | () => void | No        | Method for handleCloseIcon                             |
| handleSubmit           | () => void | No        | Method for submit in textinput                         |
| onChangeText           | () => void | No        | Method for onChangeText in textinput                   |
| onResendOTP            | () => void | No        | Method for onResendOTP                                 |

## JSX Implementation for IMOneTimePassword

```JSX

        <!--How to create One time password View in the Component-->
        import IMOneTimePassword from '@dffComponents/OneTimePassword';
        <IMOneTimePassword
          closeimage={<ICGeneralClose />}
          cursorColor={colors.PrimaryOrange100}
          disableEyeimage={<ICGeneralDisabledShow />}
          eyeimage={<ICGeneralShow />}
          eyecross={<ICGeneralHide />}
          isvisible={true}
          keyboardType={'number-pad'}
          maxLength={6}
          otpnote='We have sent you an OTP to your registered phone number, Please enter it below to add this payee.'
          onResendOTP={() => {
          } }
          otptext="Didn't received an OTP? Resend OTP in "
          resendotp='Resend OTP'
          resendContainer={{
            marginLeft:'50%'
          }}
          resendIcon={<ICGeneralChevronRight />}
          title='Verify OTP'
          titleotp='Enter OTP'
          />

```
<br/>
