# Sliders

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

<!--Other dependencies using npm -->

$ npm i react-native-gesture-handler react-native-reanimated

## JSX Implementation for Continuous Slider

```JSX

        <!--How to create Continuous Slider in the Component-->

        import { IMContinuousSlider } from '@icicibank/tsg1_2259_rn_dff_library'

        <IMContinuousSlider
            onSlider={val => {
                console.log('Value : ', val);
            }}
            widthSlider={styles.sliderWidthStyle.width}
            titleStyle={styles.titleStyle}
            labelStyle={styles.labelStyle}
            numberOfDots={10}
            minValue={100000}
            maxValue={500000}
            steps={100000}
            title={STRINGS.str_continuous_slider}
            initialValueOfSlider={200000}
            styleBGTrack={styles.styleBGTrackStyle}
            key={Math.random()}
        />
```

<br/>

### Props in Continuous Slider Component

| **_attribute_**      | **_format_**         | **_description_**                    | **_isRequired_** |
| -------------------- | -------------------- | ------------------------------------ | ---------------- |
| initialValueOfSlider | number               | Initial Value for Slider             | Optional         |
| maxValue             | number               | Maximum value of Slider              | Mandatory        |
| minValue             | number               | Minimum value of Slider              | Mandatory        |
| numberOfDots         | number               | Number of Divisions of the Slider    | Mandatory        |
| steps                | number               | Steps of Slider                      | Mandatory        |
| widthSlider          | number               | Slider width                         | Mandatory        |
| bgColorOfTrack       | string               | Background color of front track      | Optional         |
| leftSideLabel        | string               | left side Text Value                 | Optional         |
| rightSideLabel       | string               | right side Text Value                | Optional         |
| title                | string               | Title of Slider                      | Optional         |
| labelStyle           | StyleProp<TextStyle> | Right, Left Side label style         | Optional         |
| titleStyle           | StyleProp<TextStyle> | Title style                          | Optional         |
| leftSideLabelStyle   | TextStyle            | left side Text style                 | Optional         |
| rightSideLabelStyle  | TextStyle            | right side Text style                | Optional         |
| leftSideRangeLabel   | boolean              | true if left side label is required  | Optional         |
| rightSideRangeLabel  | boolean              | true if right side label is required | Optional         |
| circleAnimationStyle | ViewStyle            | Circle Animation style               | Optional         |
| circleStyle          | ViewStyle            | Circle style                         | Optional         |
| labelStyleProp       | ViewStyle            | labels parent style                  | Optional         |
| styleBGTrack         | ViewStyle            | Back track style                     | Optional         |
| onSlider             | void                 | Callback for current position        | Mandatory        |

<br/>
<br/>

========================================================

## JSX Implementation for Range Slider

```JSX

        <!--How to create Range Slider in the Component-->

            import { IMRangeSlider } from 'dff_library'

            <IMRangeSlider
                onMinSlider={val => {
                    console.log('Min Value : ', val);
                }}
                onMaxSlider={val => {
                    console.log('Max Value : ', val);
                }}
                titleStyle={styles.titleStyle}
                labelStyle={styles.labelStyle}
                widthSlider={styles.sliderWidthStyle.width}
                numberOfDots={10}
                minValue={1000}
                maxValue={10000}
                steps={1000}
                title={STRINGS.str_range_slider}
                styleBGTrack={styles.styleBGTrackStyle}
            />
```

<br/>

### Props in Range Slider Component

| **_attribute_**            | **_format_**         | **_description_**                                    | **_isRequired_** |
| -------------------------- | -------------------- | ---------------------------------------------------- | ---------------- |
| maxValue                   | number               | Maximum value of Slider                              | Mandatory        |
| minValue                   | number               | Minimum value of Slider                              | Mandatory        |
| numberOfDots               | number               | Number of dots available on back track               | Mandatory        |
| steps                      | number               | Steps of Slider                                      | Mandatory        |
| widthSlider                | number               | Slider width                                         | Mandatory        |
| bgColorOfTrack             | string               | Background color of front track                      | Optional         |
| title                      | string               | Title of Slider                                      | Optional         |
| labelStyle                 | StyleProp<TextStyle> | Right, Left Side label style                         | Optional         |
| titleStyle                 | StyleProp<TextStyle> | Title style                                          | Optional         |
| leftSideRangeLabel         | boolean              | true if left side label is required                  | Optional         |
| rightSideRangeLabel        | boolean              | true if right side label is required                 | Optional         |
| FirstCircleAnimationStyle  | ViewStyle            | First Circle Animation style                         | Optional         |
| FirstCircleStyle           | ViewStyle            | First Circle style                                   | Optional         |
| SecondCircleAnimationStyle | ViewStyle            | Second Circle Animation style                        | Optional         |
| SecondCircleStyle          | ViewStyle            | Second Circle style                                  | Optional         |
| styleBGTrack               | ViewStyle            | Back track style                                     | Optional         |
| onMinSlider                | void                 | Callback for current position of minimum side slider | Mandatory        |
| onMaxSlider                | void                 | Callback for current position of maximum side slider | Mandatory        |

<br/>
<br/>
