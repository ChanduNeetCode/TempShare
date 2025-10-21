import React, { useState } from 'react';
import { View } from 'react-native';

import { actuatedNormalizeWidth } from '../../../utils/utility';
import CircularProgress from '../IMProgressLoader/utils/CircularProgress/CircularProgress';
import colors from '../../../atoms/colors';
import {ViewProps} from './types'

const IMProgressLoader: React.FC<ViewProps> = props => {
  const {
    isClockwise ,

    activeStrokeWidth,
    duration,
    inActiveStrokeWidth,
    radius,

    activeStrokeColor,
    finishStrokeColor,
    inActiveStrokeColor ,

    onAnimationComplete,
  } = props;

  const [finishColor, setFinishColor] = useState(activeStrokeColor || colors.PrimaryOrange100);
  return (
    <View>
      {isClockwise ? (
        <CircularProgress
          activeStrokeColor={finishColor || colors.PrimaryOrange100}
          activeStrokeWidth={activeStrokeWidth || actuatedNormalizeWidth(10)}
          duration={duration || 3000}
          inActiveStrokeColor={inActiveStrokeColor || colors.PastelAmber100}
          inActiveStrokeWidth={inActiveStrokeWidth || actuatedNormalizeWidth(6)}
          radius={radius }
          value={100}
          onAnimationComplete={() => {
            setFinishColor(finishStrokeColor || colors.Success100);
            onAnimationComplete();
          }}
        />
      ) : (
        <CircularProgress
          activeStrokeColor={finishColor || colors.PrimaryOrange100}
          activeStrokeWidth={activeStrokeWidth || actuatedNormalizeWidth(10)}
          duration={duration || 3000}
          inActiveStrokeColor={inActiveStrokeColor || colors.PastelAmber100}
          inActiveStrokeWidth={inActiveStrokeWidth || actuatedNormalizeWidth(6)}
          initialValue={1}
          maxValue={1}
          onAnimationComplete={onAnimationComplete}
          radius={radius}
          value={0}
        />
      )}
    </View>
  );
};

export default IMProgressLoader;