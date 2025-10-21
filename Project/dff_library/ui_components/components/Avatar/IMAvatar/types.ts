import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface data {
  name: string;
  image?: JSX.Element;
  badgeImage?: JSX.Element;
}

export interface IMAvatarProps {
  avatar: data[];

  backgroundColor?: string;
  color?: string;

  isImage?: boolean;
  label?: boolean;
  withLogo?: boolean;

  avatarContainerStyle?: ViewStyle;
  avatarimageStyle?: ViewStyle;
  avatarLetterContainerStyle?: ViewStyle;
  badgeImageContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  
  badgeImageStyle?: ImageStyle;
  
  avatarLetterStyle?: TextStyle;
  labelStyle?: TextStyle;
  imagelabelStyle?: TextStyle;
}
