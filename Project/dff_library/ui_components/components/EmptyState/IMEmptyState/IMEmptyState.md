# Empty States v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use Buttons components -

import { IMEmptyStateComponent, IMContainedEmptyStateComponent} from '@icicibank/tsg1_2259_rn_dff_library'

## IMEmptyStateComponent 
## IMContainedEmptyStateComponent

| Props                 | Params      | isRequire | Description                           |
| --------------------- | ----------- | --------- | ------------------------------------- |
| isButton              | Boolean     | No        | button is present or not              |
| isLeftIcon            | Boolean     | No        | left icon is present in button or not |
| isRightIcon           | Boolean     | No        | right icon is present in button or not|
| buttonStyleProp       | ViewStyle   | No        | button styling                        |
| stateStyle            | ViewStyle   | No        | Empty state container styling/css     |
| sublineStyle          | TextStyle   | No        | To apply text styles to subline       |
| titleStyle            | TextStyle   | No        | To apply text styles to title         |
| buttonType            | String      | No        | type of button larg/small             |
| buttonTitle           | String      | No        | Title of button.                      |
| subline               | String      | No        | to change subline text                |
| title                 | String      | No        | to change subline title               |
| buttonContainer       | JSX.Element | No        | JSX.Element for Button                |
| image                 | JSX.Element | No        | JSX.Element for image/icon            |
| buttonTextStyle       | any         | No        | to apply text styles for button       |
| onPress               | any    | yes       | call back function for button click   |

## IMEmptyStateComponent example

  <IMEmptyStateComponent
                image={<ICEmpty />}
                isButton={false}
                onPress={() => onPress('default empty state action')}
                stateStyle={{}}
                subline={'Subline'}
                title={'Title'}
              />