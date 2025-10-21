# Avatars v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use Avatars components -

import { IMAvatar, IMStackedAvatar,IMAvatarGroup} from '@icicibank/tsg1_2259_rn_dff_library'

# IMAvatar Props

| Props                      | Params     | isRequire | Description                      |
| -------------------------- | ---------- | --------- | -------------------------------- |
| avatar                     | Array      | No        | sample data of title and logo    |
| backgroundColor            | String     | No        | background color of the Avatar   |
| color                      | String     | No        | Color of Avatar Letter           |
| isImage                    | Boolean    | No        | whether to display image or not  |
| label                      | Boolean    | No        | whether to display label or not  |
| withLogo                   | Boolean    | No        | whether to display logo or not   |
| avatarContainerStyle       | ViewStyle  | No        | Style of Avatar container        |
| avatarimageStyle           | ViewStyle  | No        | Style of Avatar image            |
| avatarLetterContainerStyle | ViewStyle  | No        | Style of Avatar Letter Container |
| badgeImageContainerStyle   | ViewStyle  | No        | Style of Badge Image Container   |
| containerStyle             | ViewStyle  | No        | Style of total Container         |
| badgeImageStyle            | ImageStyle | No        | Style of badge Image             |
| avatarLetterStyle          | TextStyle  | No        | Style of Avatar Letter           |
| labelStyle                 | TextStyle  | No        | Style of label                   |
| ImagelabelStyle            | TextStyle  | No        | Style of Image label             |

## IMAvatar example

```JSX

 <IMAvatar
            avatar={data}
            backgroundColor= {generateRandomColor()}
            color = {generatetextColor()}
            isImage = {true}
            withLogo = {false}
            label = {true}
          />

```

# IMAvatarGroup Props

| Props                      | Params     | isRequire | Description                      |
| -------------------------- | ---------- | --------- | -------------------------------- |
| avatars                    | Array      | No        | sample data of title and logo    |
| isImage                    | Boolean    | No        | whether to display image or not  |
| label                      | Boolean    | No        | whether to display label or not  |
| withLogo                   | Boolean    | No        | whether to display logo or not   |
| maxNoOfAvatarsPerRow       | number     | No        | No of Rows for displaying all avatars|
| avatarContainerStyle       | ViewStyle  | No        | Style of Avatar container displaying few avatars with view all option      |
| avatarFullContainer        | ViewStyle  | No        | Style of container displaying all avatars with view less option           |
| containerStyle             | ViewStyle  | No        | Style of Avatar main Container |
| favouriteHeaderStyle       | ViewStyle  | No        | Style of left part of avatar Header            |
| headerStyles               | ViewStyle  | No        | Style of avatar header Container   |
| handleManage               | function   | No        | to handle the manage button|

## IMAvatarGroup example

```JSX

 <IMAvatarGroup
                avatars={groupData}
                isImage={false}
                withLogo={false}
                label={true}
                handleManage={() => {}}
              />

```

# IMStackedAvatar Props

| Props                       | Params      | isRequire | Description                      |
| --------------------------- | ----------- | --------- | -------------------------------- |
| avatars                     | Array       | No        | sample data of title and logo    |
| isImage                     | Boolean     | No        | whether to display image or not  |
| label                       | Boolean     | No        | whether to display label or not  |
| avatarContainerStyle        | ViewStyle   | No        | Style of Avatar container        |
| avatarimageStyle            | ViewStyle   | No        | Style of Avatar image            |
| avatarLetterContainerStyle  | ViewStyle   | No        | Style of Avatar Letter Container |
| avatarLetterStyle           | ViewStyle   | No        | Style of Avatar Letter           |
| badgeImageContainerStyle    | ViewStyle   | No        | Style of Badge Image Container   |
| countContainerStyle         | ViewStyle   | No        | Style of count Container         |
| stackedContainerStyle       | ViewStyle   | No        | Style of stacked avatar main container      |
| stackedAvatarContainerStyle | ViewStyle   | No        | Style of stackedAvatar container |
| badgeImageStyle             | ImageStyle  | No        | Style of badge Image             |
| countTextStyle              | TextStyle   | No        | Style of count Text              |
| labelStyle                  | TextStyle   | No        | Style of label                   |
| ImagelabelStyle             | TextStyle   | No        | Style of Image label             |
| sideImage                   | JSX.Element | No        | Arrow Icon                       |

## IMStackedAvatar example

```JSX

 <IMStackedAvatar
            avatars={groupData}
            isImage = {false}
            withLogo = {false}
            label = {false}
            sideImage={<ICGeneralChevronLeft/>}
          />

```

```JSON

export const data =[
{
   name: 'Slice1',
   image: <ICGeneralPerson height={40} width={40} />,
   badgeImage: <ICBankLogo height={20} width={20} />,
}
];

```

Above data conatins title and logo for IMAvatar

```JSON

export const groupData =[
   {
    name: 'A_Item',
    image: <ICGeneralPerson height={40} width={40} />,
    badgeImage: <ICBankLogo height={20} width={20} />,
  },
  {
    name: 'B_Item',
    image: <ICGeneralPerson height={40} width={40} />,
    badgeImage: <ICBankLogo height={20} width={20} />,
  },
  {
    name: 'C_item',
    image: <ICGeneralPerson height={40} width={40} />,
    badgeImage: <ICBankLogo height={20} width={20} />,
  },
  {
    name: 'D_item',
    image: <ICGeneralPerson height={40} width={40} />,
    badgeImage: <ICBankLogo height={20} width={20} />,
  },

   ];

```

Above data contains title and logo for IMAvatarGroup And IMStackedAvatar
