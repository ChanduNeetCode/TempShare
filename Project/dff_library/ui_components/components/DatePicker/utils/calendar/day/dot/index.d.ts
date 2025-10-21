import React from 'react';
import { Theme } from '../../../types';
export interface DotProps {
  color?: string;

  theme?: Theme;
 
  disabled?: boolean;
  inactive?: boolean;
  marked?: boolean;
  selected?: boolean;
  today?: boolean;
}
declare const Dot: ({
  theme,
  marked,
  disabled,
  inactive,
  color,
  today,
  selected,
}: DotProps) => React.JSX.Element;
export default Dot;
