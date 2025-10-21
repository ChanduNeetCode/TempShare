# MiniSuccessPage

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

# Props in MiniSuccessPage Component

| Props                  | Params     | isRequire | Description                                            |
| ---------------        | ---------- | --------- | ------------------------------------------------------ |
| isblurContainer        | boolean    | No        | blurpart                                               |
| isVisible              | boolean    | No        | drawer visible                                         |
| activeOpacityProp      | number     | No        | activeOpacityProp                                      |
| parallelAnimatedProp   | number     | No        | animation time for parallel view                       |
| sequencelAnimatedProp  | number     | No        | animation time for sequencel view                      |
| styleBodyTextStyle     | TextStyle  | No        | styleBodyTextStyle                                     |
| styleHeaderTextStyle   | TextStyle  | No        | styleHeaderTextStyle                                   |
| styleInformationAreaStyle| TextStyle| No        | styleInformationAreaStyle                              |
| animationViewStyle     | ViewStyle  | No        | animationViewStyle style prop                          |
| styleCenteredView      | ViewStyle  | No        | styleCenteredView style prop                           |
| styleCenteredMainView  | ViewStyle  | No        | styleCenteredMainView Style prop                       |
| styleCenterIconStyle   | ViewStyle  | No        | styleCenterIconStyle Style prop                        |
| styleCenterIconPosition| ViewStyle  | No        | styleCenterIconPosition                                |
| styleModelLAndRRadius  | ViewStyle  | No        | styleModelLAndRRadius                                  |
| styleModelLeftTopConerStyle| ViewStyle| No        | styleModelLeftTopConerStyle                          |
| styleRightIconStyle    | ViewStyle  | No        | styleRightIconStyle Style Prop                         |
| styleTextViewStyle     | ViewStyle  | No        | styleTextViewStyle                                     |
| styleChildViewStyle    | ViewStyle  | No        | styleChildViewStyle                                    |
| blurContainer          | JSX.Element| No        | blurContainer for modal                                |
| centerCorrectIcon      | JSX.Element| Yes       | To display top of the icon                             |
| centerFlowerIcon       | JSX.Element| Yes       | To display center of the icon                          |
| childProps             | JSX.Element| No        | childProps                                             |
| modelLeftIcon          | JSX.Element| Yes       | Top of the left side Icon                              |
| modelRightIcon         | JSX.Element| Yes       | Top of the right side Icon                             |
| closeModal             | () => void | Yes       | Method for closing action of Drawers                   |
| headerTitle            | interface  | Yes       | Header of the title                                    |
| bodyTitle              | interface  | Yes       | Body of the title                                      |

#bodyTitle

| Props               | Params                | isRequire| Description                        |
| ------------------- | ----------------------| ---------| -------------------------------    |
| title               | JSX.Element           | No       | title                              |
| styleBody           | TextStyle             | No       | style prop for the title           |

#headerTitle

| Props               | Params                | isRequire| Description                        |
| ------------------- | ----------------------| ---------| -------------------------------    |
| title               | JSX.Element           | No       | title                              |
| styleHeader         | ViewStyle|TextStyle   | No       | style prop for the title           |


Example 1

```JSX
        <IMMiniSuccessPage
          closeModal={() => {setModalVisible(false)}}
          isVisible={modalVisible}
          isblurContainer={true}
          modelLeftIcon={<ICMiniSuccessRightFlower />}
          modelRightIcon={<ICMiniSuccessLeftFlower />}
          centerFlowerIcon={<ICMiniSuccessCenterFlower />}
          centerCorrectIcon={<ICCorrect />}
          activeOpacityProp={1}
          childProps={
            <>
              <IMPrimaryButton
              type={'large'}
              titleRecv='Setup Autopay for another bill'
              />
            </>
          }
          headerTitle={{
            title: STRINGS.str_headerTitle,
            styleHeader: {},
          }}
          bodyTitle={{
            title: <Text>{STRINGS.str_bodyTitle}</Text>,
            styleBody: {},
          }}
        />
````