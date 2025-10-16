export enum BlurType {
  Dark = 'dark',
  Light = 'light',
  Xlight = 'xlight',
}

export interface BlurEffectProps {
  _blurType?: BlurType;

  androidBlurRadius?: number;
  _blurAmount?: number;

  blurStyle?: object;
}
