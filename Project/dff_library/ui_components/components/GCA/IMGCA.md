# GCA v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in GCA components -
import { IMGCA} from '@icicibank/tsg1_2259_rn_dff_library'

##IMGCA

| Props                  | Params                 | isRequire | Description                                        |
| ---------------------- | ---------------------- | --------- | -------------------------------------------------- |
| isutoFocus             | boolean                | No        | starting cursor visibility true                    |
| isCCA                  | boolean                | No        | Component visibility as CCA                        |
| isGCA                  | boolean                | No        | Component visibility as GCA                        |
| letterSpacing          | number                 | No        | space between the characters for text input        |
| maxLength              | number                 | No        | maximum number of characters in text input         |
| CursorColor            | string                 | No        | cursor color                                       |
| enterPinText           | string                 | No        | text for display                                   |
| subtitle               | string                 | No        | subtitle                                           |
| title                  | string                 | No        | title                                              |
| keyboardType           | type                   | No        | keyboard type for text input                       |
| dropdownComponentStyle | ViewStyle              | No        | dropdownComponentStylestyle                        |
| mainContainerStyleProp | ViewStyle              | No        | mainContainer style Prop                           |
| parentContainer        | ViewStyle              | No        | parent View style                                  |
| pinTextStyle           | TextStyle              | No        | text View style for pin text                       |
| subtitleStyle          | TextStyle              | No        | subtitle style                                     |
| textInputContainer     | ViewStyle              | No        | Each textbox style                                 |
| textStyle              | TextStyle              | No        | Style for text that is entered                     |
| titleStyle             | TextStyle              | No        | title style                                        |
| alphabets              | GcaAlphabets           | No        | alphabets for GCA (mandatory for GCA)              |
| inputFirstCallback     | (val: string) => void  | No        | First TextBox result callback for textInput (GCA)  |
| inputSecondCallback    | (val: string) => void  | No        | Second TextBox result callback( for textInput GCA) |
| inputThirdCallback     | (val: string) => void  | No        | Third TextBox result callback for textInput (GCA)  |
| inputResultCallback    | (data: string) => void | No        | onChangeText call back(CCA)                        |
| onSubmitCallBack       | () => void             | No        | onSubmitEditing callback for text input(CCA)       |
| dropdowncomponent      | JSX.Element            | No        | dropdown component                                 |
| hideIconContainer      | JSX.Element            | No        | hide icon image view                               |
| showIconContainer      | JSX.Element => void    | No        | show icon image view                               |

## GcaAlphabets

| Props          | Params | isRequire | Description                     |
| -------------- | ------ | --------- | ------------------------------- |
| firstAlphabet  | String | Yes       | first alphabet for grid in GCA  |
| secondAlphabet | String | Yes       | second alphabet for grid in GCA |
| thirdAlphabet  | String | Yes       | third alphabet for grid in GCA  |

### IMGCA example

'''JSON

const alphabetdata={
firstAlphabet:'K',
secondAlphabet:'L',
thirdAlphabet:'M'
}

'''

Example

       <IMGCA
          title="Authenticate with your debit card"
          subtitle="Your ICICI bank debit card has a grid on its backside. Enter the numbers
          from the grid below"
          keyboardType="numeric"
          enterPinText="Enter your credit card pin"
          dropdowncomponent={<Text style={styles.dropdowncomponentStyle}>You can add your component here</Text>}
          inputFirstCallback={val1 => {}}
          inputSecondCallback={val2 => {}}
          inputThirdCallback={val3 => {}}
          inputResultCallback={val=> {}}
          alphabets={alphabetdata}
          isCCA={true}
          titleStyle={{color:'red'}}
        />

###
