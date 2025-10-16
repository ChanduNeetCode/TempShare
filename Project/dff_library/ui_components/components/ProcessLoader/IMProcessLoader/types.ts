import {
  ImageStyle,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface ProcessLoadersProps {
  parentViewStyle?: StyleProp<ViewStyle>;

  gifStyle?: StyleProp<ImageStyle>;

  source?: ImageSourcePropType;

  title?: string;
  subTitle?: string;

  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;

  titleContainer?: JSX.Element;
  subTitleContainer?: JSX.Element;
}
