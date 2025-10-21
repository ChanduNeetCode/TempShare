# Carousel v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*
$ npm i react-addons-shallow-compare

How to use in Carousel components -
import { IMCarousel,IMTallCarousel} from '@icicibank/tsg1_2259_rn_dff_library';

## IMCarousel

| Props                    | Params   | isRequire | Description                                 |
| --------------------     | -------- | --------- | --------------------------------------------|
| isDotsRequired           | boolean  | No        | is the dots for indication of slide required|
| isAutoPlay               | boolean  | No        | is the autoplay for carousel required       |
| isLoop                   | boolean  | No        | is the loop for carousel required           |
| autoplayInterval         | number   | No        | is the duration between slides(default 3000)|
| defaultIndex             | number   | No        | defaultIndex(default 0 )                    |
| inactiveSlideOpacity     | number   | No        | this is used to show the opacity of inactiveslide (default 0.7) |
| inactiveSlideScale       | number   | No        | this is used to show the size of inactiveslide (default 0.9)    |
| spaceBetweenCards        | number   | No        | used to change the width between the cards  |
| data                     | Object   | Yes       | Required data for the carousel view         |
| activeDotStyle           | styles   | No        | styles for the active dot if dots required is true  |
| containerStyleProps      | styles   | No        | styles for the Carousel                     |
| dotsViewStyle            | styles   | No        | styles for the dots(positioning of dot)     |
| inactiveDotStyle         | styles   | No        | styles for the inactive dots                |
| imageViewStyle           | styles   | No        | to change view style of image               |
| onPress                  | function | Yes       | callback function for onPress               |
| component                | JSX      | Yes       | the component you want to display           |
| activeSlideAlignmentProp | String   | No        | Carousel alignment defaults is start        |
| mainContainerStyle       | styles   | No        | main container view style                   |
| onSnapToItem             | function | No        | callback function for index of active item  |

### IMCarouselexample

## Carousel data below

export const CarouselData = [
{
flowerImageDisplayTop: false,
flowerImageDisplayBottom: false,
component: (<View style={styles.flexDirectionValue}>
<View style={styles.shortCarouselCarImageContainer}>{< ICLineBill />}
</View>
<View style={styles.shorCarouselText}>
<Text style={[typography.SubTitleBold1, styles.shortCarouselTextStyle]}>
{STRINGS.str_scratch_card1}
</Text>
<Text style={[typography.BodySemiBold3, styles.shortCarouselTextStyle]}>
{STRINGS.str_scratch_card2}
</Text></View>
</View>),
backGroundColor: colors.PastelYellow80,
id: 1,
},
{
flowerImageDisplayTop: false,
flowerImageDisplayBottom: false,
component: (<View style={styles.flexDirectionValue}>
<View style={styles.shortCarouselCarImageContainer}>{< ICLineBill />}</View>
<View style={styles.shorCarouselText}>
<Text style={[ typography.SubTitleBold1,styles.shortCarouselTextStyle]}>
{STRINGS.str_scratch_card1}
</Text>
<Text style={[typography.BodySemiBold3, styles.shortCarouselTextStyle]}>
{STRINGS.str_scratch_card2}
</Text></View>
</View>),
backGroundColor: colors.PastelBlue100,
id: 2,
},
{
flowerImageDisplayTop: true,
flowerImageDisplayBottom: true,
component: (<View style={styles.flexDirectionValue}>
<View style={styles.shortCarouselTextContainer1}>
<Text style={[typography.BodySemiBold3, styles.shortCarouselTextStyle]}>
{STRINGS.str_loan_approval}
</Text>
</View>
<View style={styles.shortCarouselCarImageContainer}>{<ShortCar />}</View>
</View>),
backGroundColor: colors.PastelBlue100,
id: 3,
},
{
flowerImageDisplayTop: true,
flowerImageDisplayBottom: true,
component: (<View style={styles.flexDirectionValue}>
<View style={styles.shortCarouselTextContainer1}>
<Text style={[typography.BodySemiBold3, styles.shortCarouselTextStyle]}>
{STRINGS.str_loan_approval}
</Text>
</View>
<View style={styles.shortCarouselCarImageContainer}>{<ShortCar />}</View>
</View>),
backGroundColor: colors.PastelGreen110,
id: 4,
},
];

```JSX
          <IMCarousel
            isDotsRequired={true}
            isAutoPlay={false}
            isLoop={false}
            onPress={(val:componentDisplayProps) => {}}
            data={CarouselData}
          />
```

## IMTallCarousel

| Props                | Params   | isRequire | Description                             |
| -------------------- | -------- | --------- | --------------------------------------- |
| isAutoPlay           | boolean  | No        | is the autoplay for carousel required   |
| isDotsRequired       | boolean  | No        | is the dots for indication of slide required |
| isLoop               | boolean  | No        | is the loop for carousel required       |
| autoplayInterval     | number   | No        | is the duration between slides(default 3000) |
| defaultIndex         | number   | No        | defaultIndex(default 0 )                |
| inactiveSlideOpacity | number   | No        | this is used to show the opacity of inactiveslide (default 0.7) |
| inactiveSlideScale   | number   | No        | this is used to show the size of inactiveslide (default 0.9) |
| spaceBetweenCards    | number   | No        | used to change the width between the cards  |
| data                 | Object   | Yes       | Required data for the carousel view         |
| activeDotStyle       | styles   | No        | styles for the active dot if dots required is true|
| containerStyleProps  | styles   | No        | styles for the Carousel                 |
| dotsViewStyle        | styles   | No        | styles for the dots(positioning of dot) |
| inactiveDotStyle     | styles   | No        | styles for the inactive dots            |
| onPress              | function | Yes       | Unique identification for carousel      |
| component            | JSX      | Yes       | the component you want to display       |
| onSnapToItem         | function | No        | callback function for index of active item |

### IMTallCarouselexample

## Carousel data below

export const CarouselData1 = [
{

    component: (

       <>
        <View style={styles.tallWidthItem1TextContainer}>
          <Text style={[typography.LinkSemiBold, styles.tallWidthItem1TextStyle]}>{STRINGS.str_message}</Text>
        </View>
        <View style={[{flexDirection:'row',alignItems:'center',marginLeft: 12}]}>
        <TouchableOpacity onPress={()=>{}} style={styles.tallWidthItemButtonContainer}>
        <LinearGradient
          style={styles.tallWidthItemButtonContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}>
          <Text style={[styles.tallWidthItemButtonText, typography.ButtonLarge]}>Send Now</Text>
        </LinearGradient>
        </TouchableOpacity>
        <MoneyLending/>
        </View>
       </>
    ),
    backGroundColor: colors.Success90,
    id: 1,

},
{

    component:  (<>
    <>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.tallWidthItem2Header}>
          {STRINGS.str_icici_card}
         </Text>
      </View>
      <View style={styles.tallWidthItem2SubHeaderContainer}>
      <Text style={[styles.tallWidthItem2ZeroText, typography.HeadingBold3]}>
            {STRINGS.str_zero}
          </Text>
          <Text style={[styles.tallWidthItem2SubText, typography.HeadingBold3]}>
            {STRINGS.str_joining_fees}
          </Text>
      </View>
      <View style={{marginLeft: 20,paddingBottom:Platform.OS==="ios"?8:15}}>
      <TouchableOpacity style={styles.tallCarouselButtonStyle}>
        <LinearGradient
          style={styles.tallWidthItemButtonContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}>
          <Text
            style={[styles.tallWidthItemButtonText, typography.ButtonLarge]}>
            Send Now
          </Text>
        </LinearGradient>
        </TouchableOpacity>
      </View>
      </>
      </>
    ),
    backGroundColor: colors.PastelBlue100,
    id: 2,

},  
];

```JSX
  <IMTallCarousel
          isDotsRequired={true}
          isAutoPlay={false}
          isLoop={false}
          data={CarouselData1}
          onPress={(val:componentDisplayProps1) => {}}
          />
```
