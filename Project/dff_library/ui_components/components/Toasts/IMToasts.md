# Toasts

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## IMToast Props

| Props                             | Params                   | isRequire | Description                                           |
| --------------------------------- | ------------------------ | --------- | ----------------------------------------------------- |
| toastDisplayTime                  | number                   | Yes       | Time To display a Toast                               |
| message                           | string                   | Yes       | Message for displaying in Toast                       |
| successOrFailureMessage           | string                   | No        | Label for a Success or Failure Toast                  |
| toastType                         | string                   | Yes       | Type Of Toast to display.                             |
| defaultTextStyleProps             | TextStyle                | No        | total container style                                 |
| errorTextStyleProps               | TextStyle                | No        | Error Text Style                                      |
| successOrFailureMessageStlyeProps | TextStyle                | No        | Success or Error Toast Label Style                    |
| successTextStyleProps             | TextStyle                | No        | Success Toast Text style                              |
| defaultStaticContainerStyleProps  | ViewStyle                | No        | Default Toast Container Style                         |
| errorContainerStyleProps          | ViewStyle                | No        | Error Toast Container Style                           |
| mainContainerStyle                | ViewStyle                | No        | main Container Style to place the toast               |
| successContainerStyleProps        | ViewStyle                | No        | Success Toast Container                               |
| closeTagImage                     | Image                    | No        | To dislay the close icon.On press Toast can be closed |
| imageToDisplay                    | JSX.Element              | No        | To display a Image in Toast                           |
| showToast                         | (value: boolean) => void | Yes       | To display the Toast                                  |
| viewSuccessOrFailureMessageDetails| () => void               | Yes       | callback funciton                                     |

## JSX Implementation

```JSX
            import { IMToasts } from '@icicibank/tsg1_2259_rn_dff_library'

            <IMToast
               toastType={ToastTypeValues.Success}
               showToast={(value) => {setToast(value)}}
               closeTagPress={() => {}}
               closeTagImage={<ICGeneralClose height={15} width={15}/>}
               errorContainerStyleProps={{}}
               errorTextStyleProps={{}}
               defaultTextStyleProps={{}}
               defaultStaticContainerStyleProps={{}}
               imageToDisplay={<ICGeneralDone height={15} width={15} />}
               message={'Done! The following ID has been added to your favourites.'}
               successOrFailureMessage={'View'}
               successContainerStyleProps={{}}
               successTextStyleProps={{}}
               successOrFailureMessageStlyeProps={{}}
               toastDisplayTime ={300}
               viewMessage={() => {}}
            />
```
