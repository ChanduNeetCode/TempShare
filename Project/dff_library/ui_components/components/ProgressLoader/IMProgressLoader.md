# Progress Loader (`IMProgressLoader`)

# Using npm

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## JSX Implementation

```JSX

        <!--How to create Progress Loader View in the Component-->
                 <IMProgressLoader
                     duration={5000}
                     isClockwise={true}
                     onAnimationComplete={() => {}}
                     radius={actuatedNormalizeWidth(40)}
                />
```

<br/>

### Props in Progress Loader Component

| **_attribute_**     | **_format_** | **_description_**              | **_isRequired_** |
| ------------------- | ------------ | ------------------------------ | ---------------- |
| isClockwise         | boolean      | Set direction of loader        | Optional         |
| radius              | number       | Radius of progress loader      | Optional         |
| inActiveStrokeWidth | number       | Width of inactive stroke       | Optional         |
| activeStrokeWidth   | number       | Width of active stroke         | Optional         |
| duration            | number       | Duration of the loader         | Optional         |
| finishStrokeColor   | string       | Color on progress completed    | Optional         |
| inActiveStrokeColor | string       | Color of inactive stroke       | Optional         |
| activeStrokeColor   | string       | Color of active stroke         | Optional         |
| parentViewStyle     | ViewStyle    | Set style of main container    | Optional         |
| onAnimationComplete | void         | Callback on progress completed | Mandatory        |

<br/>
<br/>

### Props in Process Loader Component

| **_attribute_**        | **_format_**        | **_type_**    | **_description_**           
| -----------------      | ------------------- |-------------  | --------------------------- |
| isBackgroundTransparent| boolean             | No            | Transparent loader          |
| isStatusBarTranslucent | boolean             | No            | isStatusBarTranslucent      |
| isShowLoadingIndicator | boolean             | Yes           | To display the Loader       | 
| title                  | string              | Yes           | Title text                  | 
| subTitle               | string              | Yes           | Sub title text              | 
| animationType          | string              | No            | Types "none"|"slide"|"fade"| 
| titleStyle             | TextStyle           | No            | Title text style            | 
| subTitleStyle          | TextStyle           | No            | Sub title text style        | 
| parentViewStyle        | ViewStyle           | No            | Set style of main container |
| loaderContainerStyle   | ViewStyle           | No            | To give style in such a way to assign position of the container in the screen.|
| blurEffect             | JSX.Element         | Yes           | To add blur effect to the loading indicator|
| titleContainer         | JSX.Element         | No            | Title container             | 
| subTitleContainer      | JSX.Element         | No            | subTitle container          | 


### IMProcessLoader example

JSX Implementation

```JSX
        <!--How to create Process Loader View in the Component-->
        <IMProcessLoader
         animationType="none"
          title={STRINGS.str_title}
          subTitle={STRINGS.str_subTitle}
        />

        <IMProcessLoader
         animationType="Slide"
             subTitle={STRINGS.str_transaction}
             title={STRINGS.str_Process_Payment}
             isBackgroundTransparent={true}
        />

```JSX

<br/>
<br/>

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
| isEnabled       | boolean      | Set flag to visible and hide          | Mandatory        |
| borderRadius    | number       | Set border radius                     | Optional         |
| backgroundColor | string       | background color of shimmer           | Optional        |
| highlightColor  | string       | color of animation affect             | Optional        |
| speed           | number       | determines the speed of animation     | Optional        |
| children        | JSX.Element  | View for Shimmer effect               | Optional         |
| style           | StyleProp    | Style of the View                     | Optional         |
| direction       | string       | determines the animation direction    | Optional        |

<br/>
<br/>
