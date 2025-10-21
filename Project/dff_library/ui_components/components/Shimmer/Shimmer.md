# Shimmer

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

$ npm i @react-native-masked-view/masked-view

## JSX Implementation for Shimmer

```JSX

        <!--How to create Shimmer View in the Component-->
             <IMShimmer style={{ height: 100, width: '100%' }} enabled={true}>
                {shimmerOnScreen()}
             </IMShimmer>

        <!--View on which Shimmer will be enabled-->
             const shimmerOnScreen = () => {
                return <View></View>;
             };
```

<br/>

### Props in Shimmer Component

| **_attribute_** | **_format_** | **_description_**                     | **_isRequired_** |
| --------------- | ------------ | ------------------------------------- | ---------------- |
| enabled         | boolean      | Set flag to visible and hide          | Mandatory        |
| children        | JSX.Element  | View for Shimmer effect               | Optional        |
| style           | StyleProp    | Style of the View                     | Optional         |
| backgroundColor | string       | background color of shimmer           | Mandatory        |
| highlightColor  | string       | color of animation affect             | Mandatory        |
| direction       | string       | determines the animation direction    | Mandatory        |
| enabled         | boolean      | to show placeholders or its children. | Mandatory        |
| speed           | number       | determines the speed of animation     | Mandatory        |

<br/>
<br/>
