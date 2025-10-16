# Badges v1.0.0

## Installation

Using npm:
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

## JSX Implementation for Badges

```JSX
        <!--How to create Badges View in the Component-->
               <IMBadges type={badgesInfo.StandaloneBadges}
          badgesViewStyle={styles.badgesViewStyle}
          badgesTextClr='white'
          badgesTitle='+1.25%'
          backgroundClr='red'
          leftIcon={<Horse />}
          rightIcon={<Horse />}
        >
        </IMBadges>
```

### Props in Badges Component

| **_attribute_**      | **_format_**                      | **_description_**                                             | **_isRequired_** |
| -------------------- | --------------------------------- | ------------------------------------------------------------- | ---------------- |
| type                 | StandaloneBadges /CardBasedBadges | types of the badges                                           | Mandatory        |
| badgesViewStyle      | ViewStyle                         | Badges container viw style                                    | Optional         |
| badgesTextClr        | TextStyle                         | Badges title text style                                       | Optional         |
| badgesBackgroundClr  | Color                             | Background color of the badges                                | Optional         |
| badgesTitle          | Title                             | Badges title                                                  | Mandatory        |
| badgesLeftIcon       | Image                             | Svg icon which is placed left side in the badges view         | Optional         |
| badgesRightIcon      | Image                             | Svg icon which is placed in the right side in the badges view | Optional         |
| BadgesTextStyle      | TextStyle                         | Badges title text style                                       | Optional         |
| badgesLeftIconStyle  | ViewStyle                         | left icon style                                               | Optional         |
| badgesRightIconStyle | ViewStyle                         | right icon style                                              | Optional         |
