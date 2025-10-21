import {
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface AvatarData {
  name: string;
  image?: JSX.Element;
  badgeImage?: JSX.Element;
}

export interface IMStackedAvatarProps {
  avatars: AvatarData[];

  isImage?: boolean;
  label?: boolean;

  avatarContainerStyle?: ViewStyle;
  avatarimageStyle?: ViewStyle;
  avatarLetterContainerStyle?: ViewStyle;
  avatarLetterStyle?: ViewStyle;
  badgeImageContainerStyle?: ViewStyle;
  countContainerStyle?: ViewStyle;
  stackedAvatarContainerStyle?: ViewStyle;
  stackedContainerStyle?: ViewStyle;

  badgeImageStyle?:ImageStyle;

  countTextStyle?: TextStyle;
  labelStyle?: TextStyle;
  imagelabelStyle?: TextStyle;

  sideImage?: JSX.Element;

}
