import { Rect } from '../PopoverGeometry/types';

export interface Props {
  onPopoverDisplayed?: () => unknown;

  children?: React.ReactNode;
}

export interface State {
  showPopover: boolean;

  popoverAnchor: Rect;
}
