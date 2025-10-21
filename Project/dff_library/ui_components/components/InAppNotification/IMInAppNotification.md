# In App Notification

## Installation

$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

# Props in IMRegularInAppNotification Component

| Props                      | isRequire    | Params       | description                       | 
| ------------------------   | ------------ |------------- | --------------------------------- | 
| backgroundColor            | No           | string       | backgroundColor                   |
| notificationType           | Yes          | string       | its show the notification Type    |
| showTitle                  | No           | string       | Title of the Button Notification  | 
| title                      | No           | string       | Title of the Regular Notification | 
| styleNotificationTextStyle | No           | TextStyle    | style for the notification Text   |
| styleShowButtonStyle       | No           | TextStyle    | style for button                  |
| mainContainerStyle         | No           | ViewStyle    | style for the notification container |
| leftIcon                   | No           | JSX.Element  | left side Icon                    |
| onclickNotification        | No           | ()=>void;    | onPress callback function         |

## JSX Implementation for Regular In App Notification

```JSX

    import { IMRegularInAppNotification } from '@icicibank/tsg1_2259_rn_dff_library'
        <IMRegularInAppNotification
          leftIcon={<ICGeneralDisabledErrorAlt />}
          notificationType={NotificationType.Regular}
          showTitle="Show Notification"
          title={'New offers unlocked! Tap to learn more'}
        />              
```

# Props in IMDismissibleInAppNotification Component

| Props                      | isRequire    | Params       | description                       | 
| ------------------------   | ------------ |------------- | --------------------------------- | 
| backgroundColor            | No           | string       | backgroundColor                   |
| notificationType           | Yes          | string       | its show the notification Type    |
| showTitle                  | No           | string       | Title of the Button Notification  | 
| title                      | No           | string       | Title of the Regular Notification | 
| styleNotificationTextStyle | No           | TextStyle    | style for the notification Text   |
| styleShowButtonStyle       | No           | TextStyle    | style for button                  |
| mainContainerStyle         | No           | ViewStyle    | style for the notification container |
| rightIconStyle             | No           | ViewStyle    | rightIcon View Style              |
| seperatorLineStyle         | No           | ViewStyle    | seperator view style              |
| leftIcon                   | No           | JSX.Element  | left side Icon                    |
| rightIcon                  | No           | JSX.Element  | right side Icon                   |
| onclickNotification        | No           | ()=>void;    | onPress callback function         |
| onRightIconPress           | No           | ()=>void;    | callback function for right icon  |

## JSX Implementation for IMDismissibleInAppNotification Notification

```JSX

    import { IMDismissibleInAppNotification } from 'dff_library'
         <IMDismissibleInAppNotification
          title={'New offers unlocked! Tap to learn more'}
          rightIcon={<ICClose />}
          showTitle="Show Notification Dismissible"
          notificationType={NotificationType.Dismissible}
        />
```
# Props in IMSeasonalInAppNotification Component

| Props                      | isRequire    | Params       | description                       | 
| ------------------------   | ------------ |------------- | --------------------------------- | 
| backgroundColor            | No           | string       | backgroundColor                   |
| notificationType           | Yes          | string       | its show the notification Type    |
| showTitle                  | No           | string       | Title of the Button Notification  | 
| subTitle                   | No           | string       | subtitle for the container        | 
| title                      | No           | string       | Title of the Regular Notification | 
| styleFestivalsubTextStyle  | No           | TextStyle    | style for the subtitle            |
| styleFestivalTextStyle     | No           | TextStyle    | style for the title               |
| styleShowButtonStyle       | No           | TextStyle    | style for button                  |
| styleFestivalView          | No           | ViewStyle    | style for innertitle container    |
| mainContainerStyle         | No           | ViewStyle    | style for right icon container    |
| rightIconStyle             | No           | ViewStyle    | rightIcon Container style         |
| leftIcon                   | No           | JSX.Element  | left side Icon                    |
| rightIcon                  | No           | JSX.Element  | right side Icon                   |
| onclickNotification        | No           | ()=>void;    | onPress callback function         |
| onRightIconPress           | No           | ()=>void;    | callback function for right icon  |

## JSX Implementation for Seasonal In App Notification

```JSX

    import { IMSeasonalInAppNotification } from 'dff_library'

        <IMSeasonalInAppNotification
          notificationType={NotificationType.Seasonal}
          title="Happy Diwali 2022!"
          showTitle="Show Notification Seasonal"
          subTitle="Open your surprise gifts with just one tap!"
          leftIcon={<ICDiwaliIcon width={48} height={48} />}
          rightIcon={<ICClose/>}
        />
          
```