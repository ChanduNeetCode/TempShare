import { ViewStyle, TextStyle } from 'react-native';

export enum badgesInfo {
  'CardBasedBadges',
  'StandaloneBadges',
}
export interface IMBadgesProps {
  badgesBackgroundClr?: string;
  badgesTextClr?: string;
  badgesTitle?: string;

  badgesLeftIconStyle?: ViewStyle;
  badgesRightIconStyle?: ViewStyle;
  badgesViewStyle?: ViewStyle;

  badgesTextStyle?: TextStyle;

  children?: JSX.Element;
  badgesLeftIcon?: JSX.Element;
  badgesRightIcon?: JSX.Element;

  type: badgesInfo.StandaloneBadges | badgesInfo.CardBasedBadges;
}
