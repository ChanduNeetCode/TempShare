# Banners v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in Checkbox components -
import { IMShortCarouselBanner , IMTallCarouselBanner ,
IMTallFullWidthBanner , IMTallStoryStyleBanner,
IMPortraitBanner , IMSquareBanner} from '@icicibank/tsg1_2259_rn_dff_library'

## IMShortCarouselBanner

| Props                           | Params                   | isRequire| Description                                     |
| -------------------             | ------------------------ | ---------| -------------------------------                 |
| data                            | componentDisplayProps[]  | Yes      | Data to be displayed on a Short Carousel Banner |
| isShowsHorizontalScrollIndicator| boolean                  | No       | To hide or display the horizontal scroll indicator|
| containerStyleProps             | ViewStyle                | No       | For applying to styles to the Banner            |
| flowerImageStyle                | Viewstyle                | No       | To hide image in banner                         |
| flatListContainerStyle          | Viewstyle                | No       | flatList containerStyle                         |
| shortBannerCarImageContainer    | Viewstyle                | No       | For applying styles to icon view                |
| component                       | Jsx.Element              | No       | top content to be displayed                     |
| onPress                         | onPress: (id: number) => | yes      | Call Back Method on press of Banner             |



### IMShortCarouselBanner example

       <IMShortCarouselBanner
             callBackMethod={() => {
            }}
            showsHorizontalScrollIndicator={false}
            data={bannersData} />

###ShortCarouselBanner dataflow
export const bannersData = [
  {
    isFlowerImageDisplayTop: true,
    isFlowerImageDisplayBottom: true,
    iconDisplay:<ICGeneralAddBank/>,
    description:STRINGS.str_loan_approval,
    backGroundColor: colors.PastelBlue100,
    id: 1,
  },
  {
    isFlowerImageDisplayTop: true,
    isFlowerImageDisplayBottom: true,
    iconDisplay:<ICGeneralAddBank/>,
    description:STRINGS.str_loan_approval,
    backGroundColor: colors.PastelGreen110,
    id: 2,
    component:(
      <>
            <View style={styles.shortBannerImageTop}>
              {<BannersFlower />}
            </View>
            <View style={styles.shortBannerComponentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.descriptionText}>{item.description}</Text>
              </View>
              <View
                style={[
                  styles.shortBannerCarImageContainer,
                  shortBannerCarImageContainer,
                ]}>
                { <ShortCar />}
              </View>
            </View>
            <View style={styles.shortBannerImageBottom}>
              { <BannersBottomFlower />}
            </View>
          </>
    )
  },
];

## IMTallCarouselBanner

| Props                                | Params                   | isRequire| Description                                     |
| -------------------                  | ------------------------ | ---------| -------------------------------                 |
| data                                 | componentDisplayProps[]  | Yes      | Data to be displayed on a Short Carousel Banner |
| isShowsHorizontalScrollIndicator     | boolean                  | No       | To hide or display the horizontal scroll indicator|
| containerStyleProps                  | ViewStyle                | No       | For applying to styles to the Banner            |
| tallWidthItem1ButtonContainerStyle   | ViewStyle                | No       | For applying to styles to the Button container 1|
| tallWidthItem2ButtonContainerStyle   | ViewStyle                | No       | For applying to styles to the Button container 2|
| tallWidthItem1TextContainerStyle     | ViewStyle                | No       | For applying to styles to the Text description container|
| tallWidthItemImageStyle              | ViewStyle                | No       | For applying to styles to the Image              |
| onPress                              | onPress: (id: number) => | No       | Call Back Method on press of Banner             |
| buttonTitle                          | String                   | No       | Active buttons touchable color.          |
| buttonType                           | String                   | No       | whether button is small, large , stacked |
| buttonWidthLarge                     | String                   | No       | width for large button                   |
| buttonWidthSmall                     | String                   | No       | width for small button                   |
| tallWidthItem1ButtonContainerStyle   | Style class              | No       | button style                             |
| tallWidthItemButtonTextStyle         | Style class              | No       | button text style                        |
| buttonTitle2                         | String                   | No       | Active buttons touchable color.          |
| buttonType2                          | String                   | No       | whether button is small, large , stacked |
| buttonWidthLarge2                    | String                   | No       | width for large button                   |
| buttonWidthSmall2                    | String                   | No       | width for small button                   |
| tallWidthItem2ButtonContainerStyle   | Style class              | No       | button style                             |
| tallWidthItem2ButtonTextStyle        | Style class              | No       | button text style                        |


export const bannersDataTallCarousel= [
  {
    id:1,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    linerGradientColorStart: colors.GradientGoldStart,
    linearGradientColorEnd: colors.GradientGoldEnd,
  },
  {
    id:2,
    start: { x: 1, y: 0 },
    end: { x: 0, y: 0 },
    linerGradientColorStart: colors.LemonChiffon,
    linearGradientColorEnd: colors.Solitude,
    description:'Zero Bank',
    subDescription:'Joining fee description'
  },
];


## IMTallFullWidthBanner

| Props                           | Params                   | isRequire     | Description                              |
| -------------------             | --------------------     | --------------| ---------------------------------------- |
| linearGradientColorEnd          | string                   | No            | linear gradient end color                |
| linearGradientColorStart        | string                   | No            | linear gradient start color              |
| containerStyleProps             | ViewStyle                | No            | To apply style for the Banner            |
| onPress                         | onPress: (id: number) => | yes           | Call Back Method on press of Banner      |


### IMTallFullWidthBanner example

       <IMTallFullWidthBanner
          onPress={() => {
          console.log('Banner has been clicked');
        }}/>

## IMTallStoryStyleBanner

| Props                               | Params                   | isRequire| Description                                     |
| -------------------                 | ------------------------ | ---------| -------------------------------                 |
| numberOfProgressBars                | number                   | Yes      | Number Of Progress Bars to display              |
| progressBarWidth                    | number                   | No       | Progress Bar Width to be applied                |
| progressBarHeight                   | number                   | No       |  Progress Bar Height to be applied              |
| start                               | x: number;y: number      | No       | Linear Gradient Start indexes                   |
| end                                 | x: number;y: number      | No       | Linear Gradient end indexes                     |
| containerStyleProps                 | ViewStyle                | No       | To apply style for the Banner                   |
| defaultComponentToDisplay           | JSX.Element              | No       | The component to be displayed defaultly in the Banner|
| imagesToDisplay                     | any                      | Yes      | The images to be displayed in the banner        |
| onPress                             | onPress: (id: number) => | yes      | Call Back Method on press of Banner             |


### IMTallStoryStyleBanner example

                <IMTallStoryStyleBanner
              numberOfProgressBars={4}
              progressBarWidth={Platform.OS === 'ios' ? 65 : 60}
              progressBarHeight={2}
              onPress={(id: number) => console.log('Banner has been clicked', id)}
              imagesToDisplay={<OldMan/>}
            />

## IMPortraitBanner

| Props                            | Params                   | isRequire     | Description                              |
| -------------------              | --------------------     | --------------| ---------------------------------------- |
| linearGradientColorEnd           | string                   | No            | linear gradient end color                |
| linearGradientColorStart         | string                   | No            | linear gradient start color              |
| componentDisplay                 | JSX.Element              | No            | Component that needed to be displayed    |
| containerStyleProps              | ViewStyle                | No            | For applying to styles to the Banner     |
| start                            | x: number;y: number      | No            | Linear Gradient Start indexes            |
| end                              | x: number;y: number      | No            | Linear Gradient end indexes              |
| onPress                          | onPress: (id: number) => | yes           | Call Back Method on press of Banner      |

### IMPortraitBanner example

    <IMPortraitBanner
            onPress={() => {
            }}
    />

## IMSquareBanner

| Props                           | Params                   | isRequire     | Description                              |
| -------------------             | --------------------     | --------------| ---------------------------------------- |
| linearGradientColorEnd          | string                   | No            | linear gradient end color                |
| linearGradientColorStart        | string                   | No            | linear gradient start color              |
| containerStyleProps             | ViewStyle                | No            | For applying to styles to the Banner     |
| componentDisplay                | JSX.Element              | No            | Component that needed to be displayed    |
| start                           | x: number;y: number      | No            | Linear Gradient Start indexes            |
| end                             | x: number;y: number      | No            | Linear Gradient end indexes              |
| onPress                         | onPress: (id: number) => | yes           | Call Back Method on press of Banner      |

### IMSquareBanner example

    <IMSquareBanner
            onPress={() => {
            }}
            componentDisplay={<IMSquareBannerComp />}
     />
