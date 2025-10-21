/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Styles from './styles';
import { ICAddPayee, ICBankLogo } from '../../../atoms/icons';
import { actuatedNormalizeWidth } from '../../../utils/utility';
import { colors } from '../../../atoms';

export type Props = {
  leftIcon?: boolean;
  rightIcon?: boolean;
  isDisable?: boolean;

  widthLarge?: number;
  widthSmall?: number;

  titleRecv?: string;
  type?: string;
  underlayColor?: string;

  styleText?: any;

  buttonStyle?: any;

  leftImage?: JSX.Element;
  rightImage?: JSX.Element;

  onPress?: any;
};

const IMPrimaryButton: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  isDisable,

  widthLarge = actuatedNormalizeWidth(328),
  widthSmall = actuatedNormalizeWidth(156),

  titleRecv,
  type,
  underlayColor = colors.PrimaryOrange110,

  styleText,

  buttonStyle,

  leftImage = <ICAddPayee width={20} height={20} />,
  rightImage = <ICBankLogo width={20} height={20} />,

  onPress,
}) => {
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      style={[
        Styles.buttonStyle,
        {
          width: type === 'large' ? widthLarge : widthSmall,
        },
        buttonStyle,
      ]}
      disabled={isDisable}
      onPress={() => onPress(titleRecv)}
      activeOpacity={1}>
      <>
        {leftIcon && leftImage}
        <Text style={[Styles.buttonLarge, Styles.textColor, styleText]}>
          {titleRecv}
        </Text>
        {rightIcon && rightImage}
      </>
    </TouchableHighlight>
  );
};

export default IMPrimaryButton;