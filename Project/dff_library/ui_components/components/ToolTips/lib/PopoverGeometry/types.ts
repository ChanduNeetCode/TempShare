export interface Point {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Size {
  width: number;
  height: number;
}

export type Placement = 'top' | 'end' | 'bottom' | 'start';

export interface Geometry {
  origin: Point;
  anchor: Point;

  placement: Placement;
}

export type ComputeGeometry = (
  displayArea: Rect,
  fromRect: Rect,

  contentSize: Size,
  arrowSize: Size,
) => Geometry;
