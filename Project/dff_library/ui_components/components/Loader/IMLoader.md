# Loader

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use Graph component -
import { IMLoader} from '@icicibank/tsg1_2259_rn_dff_library'

```JSX

        <!--How to create Toasts View in the Component-->

            import { IMLoader } from 'dff_library'

          <IMLoader
          textStyle={{ paddingLeft: 15 }}
          activityIndicatorColor={colors.Black}
          showLoadingIndicator={showLoader}
        />
```

<br/>

## IMToast

| Props                  | Params      | isRequire | Description                                                                                     |
| ---------------------- | ----------- | --------- | ----------------------------------------------------------------------------------------------- |
| loaderText             | String      | No        | Text to display on Loading Indicator.                                                           |
| showLoadingIndicator   | boolean     | Yes       | To display the Loader                                                                           |
| textStyle              | TextStyle   | No        | Style to apply for the Text in LoadingIndicator                                                 |
| activityIndicatorColor | String      | Yes       | Color to be applied for the activity Indicator                                                  |
| loaderContainerStyle   | ViewStyle   | No        | To give style in such a way to assign position of the container in the screen.                  |
| loaderViewStyle        | ViewStyle   | No        | To give height and width to the loading indicator and also to give style for alignemnt of items |
| activityIndicatorSize  | String      | Yes       | To define Loading Indicator Size like small and Large                                           |
| blurEffect             | JSX.Element | Yes       | To add blur effect to the loading indicator                                                     |

<br/>
<br/>
