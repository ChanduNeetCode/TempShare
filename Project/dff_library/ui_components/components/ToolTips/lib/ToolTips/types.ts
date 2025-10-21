import {
  Animated,
  FlexStyle,
  ShadowStyleIOS,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { Size, Geometry, Placement, Rect } from '../PopoverGeometry/types';

export type Orientation =
  | 'portrait'
  | 'portrait-upside-down'
  | 'landscape'
  | 'landscape-left'
  | 'landscape-right';
export interface PopoverProps {
  visible?: boolean;

  onClose?: () => void;
  onDismiss?: () => void;

  arrowSize?: Size;

  placement?: Placement | 'auto';

  fromRect: Rect;
  displayArea?: Rect;

  backgroundStyle?: StyleProp<ViewStyle>;

  arrowStyle?: any;

  popoverStyle?: StyleProp<ViewStyle | ShadowStyleIOS>;

  contentStyle?: any;

  duration?: number;

  easing?: (show: boolean) => (value: number) => number;

  useNativeDriver?: boolean;

  supportedOrientations?: Orientation[];

  calculateStatusBar?: boolean;

  children?: React.ReactNode;

  textStyle?: object;

  contentText?: JSX.Element | string;

  isCancelVisibility?: boolean;

  cancelIcon?: JSX.Element;
}

export interface PopoverState extends Geometry {
  contentSize: Size;

  visible: boolean;
  isAwaitingShow: boolean;

  animation: Animated.Value;
}

export type LayoutCallback = (event: {
  nativeEvent: {
    layout: { x: number; y: number; width: number; height: number };
  };
}) => void;
