import { ViewStyle } from 'react-native';

export interface IMTicketViewProps {
  strokeDasharray?: string;
  strokeColor?:string;

  containerStyle?: ViewStyle;
  dottedLinesContainerStyle?: ViewStyle;
  dottedBottomLinesContainerStyle?: ViewStyle;
  dottedLeftCircleStyle?: ViewStyle;
  dottedRightCircleStyle?: ViewStyle;

  bottomContainer?: () => JSX.Element;
  dottedBottomLinesContainer?: () => JSX.Element;
  dottedLinesContainer?: () => JSX.Element;
  topContainer?: () => JSX.Element;
  middleContainer?: () => JSX.Element;
}
