import { Rect } from '../PopoverGeometry/types';

export interface State {
  showPopover: boolean;

  popoverAnchor: Rect;
}

export interface UsePopoverHook {
  openPopover: () => void;
  closePopover: () => void;

  popoverVisible: boolean;

  touchableRef: React.MutableRefObject<any>;

  popoverAnchorRect: Rect;
}
