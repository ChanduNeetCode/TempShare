import { ViewStyle } from 'react-native';

export interface AvatarData {
  name: string;
  image?: JSX.Element;
  badgeImage?: JSX.Element;
}

export interface IMAvatarGroupProps {
  avatars: AvatarData[];

  isImage?: boolean;
  label?: boolean;
  withLogo?: boolean;
  
  maxNoOfAvatarsPerRow?: number;
  
  avatarContainerStyle?: ViewStyle;
  avatarFullContainer?: ViewStyle;
  containerStyle?: ViewStyle;
  favouriteHeaderStyle?: ViewStyle;
  headerStyles?: ViewStyle;

  handleManage?: () => void;
}
