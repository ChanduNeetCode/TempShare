# CustomStatusBar

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

<!--Other dependencies using npm -->

## JSX Implementation for MiniSuccessPage

```JSX

        <!--How to create CustomStatusBar in the Component-->
                        <IMCustomStatusBar
                    gradientColorsArray={[
                        colors.GradientOrangeStart,
                        colors.GradientOrangeEnd,
                    ]}
                    angle={89.96}
                    isUseAngle
                    isTranslucent
                     />

```

<br/>

### Props in Continuous Slider Component

| **_attribute_**          | **_format_** | **_description_**                                             | **_isRequired_** |
| ------------------------ | ------------ | ------------------------------------------------------------- | ---------------- |
| angle                    | number       | angle for linear gradient                                     | Yes              |
| gradientColorsArray      | String []    | for passing array of colors                                   | Yes              |
| isUseAngle               | boolean      | To use linear gradient angle or not                           | yes              |
| isTranslucent            | boolean      | translucent for staus Bar by default it is true               | No               |
| linearGradientStyle      | ViewStyle    | View style for linear gradient                                | No               |
| statusBarBackgroundColor | string       | Background color for Status Bar but default it is transparent | No               |

<br/>
<br/>

========================================================
