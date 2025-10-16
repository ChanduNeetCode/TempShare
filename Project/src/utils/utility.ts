import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const UIBaseHeight = 800;
const UIBaseWidth = 360;

const actuatedNormalizeHeight = (size: number) => {
  return size * (SCREEN_HEIGHT / UIBaseHeight);
};

const actuatedNormalizeWidth = (size: number) => {
  return size * (SCREEN_WIDTH / UIBaseWidth);
};

// font-size, radius
const actuatedNormalizeModerateScale = (size: number, factor = 0.5) => {
  return size + (actuatedNormalizeWidth(size) - size) * factor;
};

export {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
};
