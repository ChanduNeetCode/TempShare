# CoachMark

## Installation

$ npm i dff_library

<!--Other dependencies using npm -->

## JSX Implementation for CoachMark

```JSX

        <!--How to create Single CoachMark in the Component-->
        enum Placement {
            TOP = 'top',
            RIGHT = 'right',
            BOTTOM = 'bottom',
            LEFT = 'left',
            AUTO = 'auto',
            FLOATING = 'floating',
            CENTER = 'center',
            }

            <IMCoachMark
            isVisible={isVisible}
            children={
              <TouchableOpacity onPress={showPopover}>
                <Text> Text Only</Text>
              </TouchableOpacity>}
            textString={messages}
            placement={Placement.BOTTOM}
            showPopover={showPopover}
            hidePopover={hidePopover}
            linearGradientColor1={colors.White}
            linearGradientColor2={colors.White}
            textStyleProp={{ color: colors.Black }}
            mainContainerProp={{ borderRadius: 16 }}
            popBackGroundClr={colors.White}
            activeDotClr={colors.PrimaryOrange100}
            inActiveDotClr={colors.GreyWithOpacity}
            buttonGradientClrs={[colors.NeutralGrey60, 
            colors.NeutralGrey60]}
            btnGradientTxtClr={colors.NeutralGrey120}
            primaryBtnClr={colors.PrimaryOrange100}
            primaryTxtClr={colors.White}
            popHeight={106}
          />

        <!--How to create Journey CoachMark in the Component-->
        enum Placement {
            TOP = 'top',
            RIGHT = 'right',
            BOTTOM = 'bottom',
            LEFT = 'left',
            AUTO = 'auto',
            FLOATING = 'floating',
            CENTER = 'center',
            }

          <IMCoachMark
              isVisible={isVisible}
              children={
                <TouchableOpacity 
                onPress={showPopover}>
                  <Text>Journey Coachmark - 
                  With Text & With Image</Text>
                </TouchableOpacity>}
              textString={messages}
              placement={Placement.BOTTOM}
              showPopover={showPopover}
              hidePopover={hidePopover}
              linearGradientColor1={colors.White}
              linearGradientColor2={colors.White}
              textStyleProp={{ color: colors.Black }}
              mainContainerProp={{borderRadius:16}}
              popBackGroundClr={colors.White}
              activeDotClr={colors.PrimaryOrange100}
              inActiveDotClr={colors.GreyWithOpacity}
              buttonGradientClrs=
              {[colors.NeutralGrey60, 
              colors.NeutralGrey60]}
              btnGradientTxtClr={colors.NeutralGrey120}
              primaryBtnClr={colors.PrimaryOrange100}
              primaryTxtClr={colors.White}
              coachMarkImg={<ICCoachmarkRectangle 
              width={271} height={153} />}
              popHeight={330}
              isPagination={true}
              isButtons={true}
            />

```

<br/>

### Props in CoachMark Component

| **_attribute_**               | **_format_** | **_description_**                                             | **_isRequired_** |
| ----------------------------- | ------------ | ------------------------------------------------------------- | ---------------- |
| isButtons                     | boolean      | buttons are present or not                                    | No               |
| isPagination                  | boolean      | pagination is present or not                                  | No               |
| isVisible                     | boolean      | modal is visible or not                                       | No               |
| activeDotClr                  | string       | active dot color string                                       | No               |
| buttonGradientClrs            | string       | gradiant button color strings                                 | No               |
| btnGradientTxtClr             | string       | gradiant button text color string                             | No               |
| inActiveDotClr                | string       | inactive dot color string                                     | No               |
| linearGradientColor1          | string       | linear gradient color string                                  | No               |
| linearGradientColor2          | string       | linear gradient color string                                  | No               |
| popBackGroundClr              | string       | popover container background color string                     | No               |
| primaryBtnClr                 | string       | primary button color string                                   | No               |
| primaryTxtClr                 | string       | primary button text color string                              | No               |
| offset                        | number       | vertical offset for coachmark                                 | No               |
| popHeight                     | number       | popover height                                                | No               |
| activeDotStyle                | ViewStyle    | active dot viewstyle                                          | No               |
| backgroundStyle               | ViewStyle    | background viewstyle                                          | No               |
| buttonViewStyle               | ViewStyle    | button container viewstyle                                    | No               |
| coachmarkViewStyle            | ViewStyle    | coachmark viewstyle                                           | No               |
| iconStyle                     | ViewStyle    | icon container viewstyle                                      | No               |
| inactiveDotStyle              | ViewStyle    | inactive dot viewstyle                                        | No               |
| mainContainerProp             | ViewStyle    | main container viewstyle                                      | No               |
| linearGradientEndDimension    | any          | linear gradient end dimension                                 | No               |
| linearGradientStartDimension  | any          | linear gradient start dimension                               | No               |
| placement                     | any          | placement of coachmark arrow[TOP, BOTTOM, LEFT, RIGHT]        | No               |
| textString                    | any          | text inside the coachmark                                     | No               |
| textStyleProp                 | TextStyle    | text style of text                                            | No               |
| hidePopover                   | () => void   | hide function                                                 | No               |
| children                      | JSX.Element  | used to pass a child to be clicked and render coachmark       | No               |
| coachMarkImg                  | JSX.Element  | image inside coachmark                                        | No               |


<br/>
<br/>

========================================================

Note:
1) For left and right placement use position:'absolute' in style for children prop JSX component