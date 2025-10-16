# ToolTip v1.0.0

## Installation

Using npm:
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use in ToolTip components -

import { IMPopoverToolTip } from '@icicibank/tsg1_2259_rn_dff_library'

## IMPopoverToolTip

### Props in ToolTips Component

| Props               | Params               | isRequire | Description                                           |
| ------------------- | -------------------- | --------- | ----------------------------------------------------- |
| contentText         | JSX.Element / string | No        | Text of the Tooltip PopOver                           |
| verticalOffset      | number               | No        | vertical Offset                         |
| ui_components       | JSX.Element          | Yes       | For providing Image for tooltip icon                  |
| textStyle           | stylesheet object    | No        | Text styles of tooltip(if pass contentText as string) |
| backgroundStyleProp | ViewStyle            | No        | background style prop for tooltip                     |
| containerStyle      | ViewStyle            | No        | Style for the main container                          |
| popoverStyles       | ViewStyle            | No        | Style for the tooltip                                 |
| placement           | any                  | Yes       | Position of Tooltip PopOver                           |

```JSX Example 1
    <IMPopoverToolTip
              containerStyle={themeStyles.tooltipContainer1}
              textStyle={Directionstyles.textStyle}
              contentText="This will be the example of a short text tooltip"
              placement={Placement.RIGHT}
              popoverStyles={Directionstyles.popOverStyless}
              ui_components={
                <TouchableOpacity>
                  <ICGeneralInformation height={themeStyles.iconSizes.height} width={themeStyles.iconSizes.width} />
                </TouchableOpacity>
              }
            />
```

import { IMToolTip } from 'dff_library'

## IMToolTip

### Props in ToolTips Component

| Props               | Params                    | isRequire | Description                                                 |
| ------------------- | ------------------------- | --------- | ----------------------------------------------------------- |
| isSelect            | boolean                   | Yes       | tooltip icon is on or off. Default is off                   |
| selectImage         | JSX.Element               | Yes       | Selection image for tooltip icon                            |
| unselectImage       | JSX.Element               | No        | Unselecting image for tooltip icon                          |
| contentText         | string/JSX.element        | Yes       | Text of the Tooltip is string or pass text component as JSX |
| textStyle           | stylesheet object         | Yes       | Text styles of tooltip(if pass contentText as string)       |
| outerPopoverStyles  | stylesheet object         | No        | Style for the tooltip                                       |
| popoverStyles       | stylesheet object         | No        | Style for the tooltip                                       |
| placement           | start/end/top/bottom/auto | Yes       | position of the tooltip                                     |
| isCancelVisibility  | boolean                   | No        | cancel icon visibility of the tooltip                       |
| cancelIcon          | JSX.element               | No        | cancel icon of the tooltip                                  |
| backgroundViewStyle | ViewStyle                 | No        | background style prop for tooltip(rgba(0,0,0,0))            |

```JSX Example 1
    <IMToolTip
          isSelect={true}
          selectImage={<Information />}
          unSelectImage={<ICComponentTopNav />}
          contentText={
            <Text style={[typography.BodyRegular2, styles.textStyle]}>
              I am top-left popover
            </Text>
          }
          textStyle={[typography.BodyRegular2, styles.textStyle]}
          outerPopoverStyles={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
          popoverStyles={cenralPopoverStyles}
          placement={'auto'}
          isCancelVisibility={true}
          cancelIcon={<ICCircleClose />}
        />

const cenralPopoverStyles = StyleSheet.create({
    contentStyle: {
      paddingVertical: Platform.OS === 'ios' ? 16 : 20,
      paddingHorizontal: 10,
      backgroundColor: colors.GradientMaroonStart,
      borderRadius: 15,
      alignItems: 'center',
      width: actuatedNormalizeWidth(200),
    },
    arrowStyle: {
      borderTopColor: colors.GradientMaroonStart,
    },
  });
```

```JSX Example 2
 <IMToolTip
          isSelect={true}
          selectImage={<Information />}
          unSelectImage={<ICComponentTopNav />}
          contentText={
            'This will be the example of a short text tooltip text ye.'
          }
          outerPopoverStyles={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          popoverStyles={cenralPopoverStyles}
          placement={'bottom'}
          isCancelVisibility={false}
        />

          const cenralPopoverStyles_longtext = StyleSheet.create({
    contentStyle: {
      paddingVertical: Platform.OS === 'ios' ? 16 : 20,
      paddingHorizontal: 10,
      backgroundColor: colors.GradientMaroonStart,
      borderRadius: 15,
      alignItems: 'center',
      width: actuatedNormalizeWidth(277),
    },
    arrowStyle: {
      borderTopColor: colors.GradientMaroonStart,
    },
  });
```
