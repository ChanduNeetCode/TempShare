import { useCallback, useMemo } from 'react';

import {UseCircleValuesProps} from './types'

export default function useCircleValues({
  activeStrokeWidth,
  inActiveStrokeWidth,
  radius,
}: UseCircleValuesProps) {
    
  const isSameStrokeWidth = useMemo(
    () => activeStrokeWidth === inActiveStrokeWidth,
    [activeStrokeWidth, inActiveStrokeWidth],
  );

  const isActiveStrokeBigger = useMemo(() => {
    return activeStrokeWidth > inActiveStrokeWidth;
  }, [activeStrokeWidth, inActiveStrokeWidth]);

  const findRadius = useCallback(() => {
    if (isSameStrokeWidth) {
      return radius + inActiveStrokeWidth / 2;
    }
    if (isActiveStrokeBigger) {
      return radius + activeStrokeWidth / 2;
    }
    return radius + inActiveStrokeWidth / 2;
  }, [
    activeStrokeWidth,
    inActiveStrokeWidth,
    isActiveStrokeBigger,
    isSameStrokeWidth,
    radius,
  ]);

  const inactiveCircleRadius = useMemo(() => findRadius(), [findRadius]);

  const activeCircleRadius = useMemo(() => findRadius(), [findRadius]);

  const circleCircumference = useMemo(
    () => 2 * Math.PI * activeCircleRadius,
    [activeCircleRadius],
  );

  return {
    activeCircleRadius,
    circleCircumference,
    inactiveCircleRadius,
  };
}
