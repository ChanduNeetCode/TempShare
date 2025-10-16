import { ViewStyle } from 'react-native';


export interface IMRadialSliderProps {
  isSlider1StarDisplay?: Boolean;
  isSlider2StarDisplay?: Boolean;

  slider1Divisions?: number;
  slider1InputText?: number;
  slider1Interval: number;
  slider1Max: number;
  slider1Min: number;
  slider2Divisions?: number;
  slider2InputText?: number;
  slider2Interval: number;
  slider2Max: number;
  slider2Min: number;

  amountSymbol?: string;
  fillColor?:string;
  monthSymbol?: string;

  parentStyle?: ViewStyle;
  sideStarStyle?:ViewStyle;
 
  slider1SelectedData?: (data: string) => void;
  slider2SelectedData?: (data: string) => void;
  
}


