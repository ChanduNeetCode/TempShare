/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { ICPartition } from '../../../atoms/icons';
import Styles from './styles';

export type Props = {
  disabled?: boolean;

  titleFirstRecv?: string;
  titleSecondRecv?: string;
  type?: string;
 
  imageFirst?: JSX.Element;
  imageSecond?: JSX.Element;

  styleTextFirst?: TextStyle;
  styleTextSecond?: TextStyle;

  buttonStyle?: ViewStyle;
  parentStyleFirst?: ViewStyle;
  parentStyleSecond?: ViewStyle;


  onFirstTabPress?: (data: string) => void;
  onSecondTabPress?: (data: string) => void;
};

const IMStackedButton: React.FC<Props> = ({
  disabled = false,
  
  titleFirstRecv,
  titleSecondRecv,
  type,

  imageFirst,
  imageSecond,

  buttonStyle,
  
  styleTextFirst,
  styleTextSecond,

  parentStyleFirst,
  parentStyleSecond,

  onFirstTabPress,
  onSecondTabPress,
}) => {
  return (
    <View
      style={[
        Styles.stackedbuttonStyle,
        buttonStyle,
      ]}>
      <TouchableOpacity
        disabled={disabled}
        style={[Styles.touchableStyle, parentStyleFirst]}
        onPress={() => {
          if (onFirstTabPress && titleFirstRecv) {
            onFirstTabPress(titleFirstRecv);
          }
        }}>
        {imageFirst}
        <Text style={[Styles.styleTextFirst,type==='small'?Styles.bodyRegular2:Styles.buttonLarge,styleTextFirst]}>{titleFirstRecv}</Text>
      </TouchableOpacity>
      {titleFirstRecv && titleSecondRecv && <ICPartition />}
      <TouchableOpacity
        disabled={disabled}
        style={[Styles.touchableStyle, parentStyleSecond]}
        onPress={() => {
          if (onSecondTabPress && titleSecondRecv)
            onSecondTabPress(titleSecondRecv);
        }}>
        {imageSecond}
        <Text style={[Styles.styleTextSecond,type==='small'?Styles.bodyRegular2:Styles.buttonLarge, styleTextSecond]}>{titleSecondRecv}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IMStackedButton;