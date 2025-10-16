# Empty States v1.0.0

## Installation

Using npm -
$ npm i dff_library

How to use Buttons components -

import { IMEmptyStateComponent, IMContainedEmptyStateComponent} from 'dff_library'

## IMEmptyStateComponent 
## IMContainedEmptyStateComponent

| Props                 | Params      | isRequire | Description                           |
| --------------------- | ----------- | --------- | ------------------------------------- |
| sublineStyle          | TextStyle   | No        | To apply text styles to subline       |
| titleStyle            | TextStyle   | No        | To apply text styles to title         |
| buttonStyleProp       | ViewStyle   | No        | button styling                        |
| stateStyle            | ViewStyle   | No        | Empty state container styling/css     |
| buttonContainer       | JSX.Element | No        | JSX.Element for Button                |
| image                 | JSX.Element | No        | JSX.Element for image/icon            |
| rightImage            | JSX.Element | No        | JSX.Element for right image           |
| isButton              | Boolean     | No        | button is present or not              |
| isLeftIcon            | Boolean     | No        | left icon is present in button or not |
| isRightIcon           | Boolean     | No        | right icon is present in button or not|
| isRightIcon           | Boolean     | No        | right icon is present in button or not|
| buttonType            | String      | No        | type of button larg/small             |
| buttonTitle           | String      | No        | Title of button.                      |
| subline               | String      | No        | to change subline text                |
| title                 | String      | No        | to change subline title               |
| onPress               | any    | yes       | call back function for button click   |


## IMContainedEmptyStateComponent example

                 <IMContainedEmptyStateComponent
                buttonTitle="Button"
                isButton={true}
                subline={'Subline'}
                title={'Title'}
                />
