import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

import { BasicMicroInteractionTypes } from '../utils/enum';
import { type BasicMicroInteractionsProps } from './types';

const IMBasicMicroInteractions: React.FC<BasicMicroInteractionsProps> = props => {
  const { style, isAutoPlay, isLoop, type, colorFilters, source } = props;
  const sourceFile =
    type == BasicMicroInteractionTypes.CheckMark
      ? require('./json/Checkmark_1.json')
      : type == BasicMicroInteractionTypes.CheckMarkWhite
      ? require('./json/CheckmarkWhite.json')
      : type == BasicMicroInteractionTypes.Delete
      ? require('./json/Delete.json')
      : type == BasicMicroInteractionTypes.FavouriteAdd
      ? require('./json/FavouriteAdd.json')
      : type == BasicMicroInteractionTypes.FavouriteRemove
      ? require('./json/FavouriteRemove.json')
      : type == BasicMicroInteractionTypes.IManLoader
      ? require('./json/iMan_Loader.json')
      : type == BasicMicroInteractionTypes.TransitionaryAnimation
      ? require('./json/TransitionaryAnimation.json')
      : type == BasicMicroInteractionTypes.Extra
      ? require('./json/Checkmark_1.json')
      : source;

  return (
    <View>
      <LottieView
        style={style}
        autoPlay={isAutoPlay}
        loop={isLoop}
        source={sourceFile}
        colorFilters={colorFilters}
      />
    </View>
  );
};

export default IMBasicMicroInteractions;
