# BasicMicroInteractions v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$ npm i lottie-react-native

How to use in BasicMicroInteractions component-
import { IMBasicMicroInteractions } from '@icicibank/tsg1_2259_rn_dff_library'

## IMBasicMicroInteractions

| Props        | Params    | isRequire | Description                           |
| ------------ | --------- | --------- | ------------------------------------- |
| style        | ViewStyle | Yes       | Applying style to animation.          |
| source       | JSON Data | Yes       | Data to display the Lottie Animation. |
| autoPlay     | Boolean   | Yes       | Automatically Play the animation      |
| loop         | Boolean   | Yes       | Play the Animation in Loop            |
| type         | string    | Yes       | Type Of Animation TO be displayed.    |
| colorFilters | ViewStyle | No        | To GIve colors to the animation.      |

### IMBasicMicroInteractions example

```JSX
                <IMBasicMicroInteractions
                    style={{ height: 100,       width:100}}
                    autoPlay={true}
                    loop={true}
                    type = {Check Mark}
                    source={source}
                />
```
