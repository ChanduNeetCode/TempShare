/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Text, View } from 'react-native';

import { actuatedNormalizeWidth } from '../../../utils/utility';
import { ICEmpty } from '../../../atoms/icons';
import { IMPrimaryButton } from '../../Buttons';
import { Props } from './types';
import useStyles from './styles';

const IMEmptyStateComponent: React.FC<Props> = ({
  onPress,
  buttonTextStyle,

  isButton,
  isButtonLeftIcon,
  isButtonRightIcon,

  sublineStyle,
  stateStyle,
  titleStyle,

  buttonType = 'large',
  buttonTitle,
  subline,
  title,

  buttonContainer,
  image = <ICEmpty width={48} height={48} style={{ alignSelf: 'center' }} />,

  buttonStyleProp,
}) => {
  const style = useStyles();

  return (
    <View style={[style.container, stateStyle]}>
      {image}
      {title && <Text style={[style.titleTextStyle, titleStyle]}>{title}</Text>}
      {subline && (
        <Text style={[style.sublineTextStyle, sublineStyle]}>{subline}</Text>
      )}
      {isButton && (
        <View style={{ top: 50 }}>
          <IMPrimaryButton
            buttonStyle={[style.secondaryButtonText, buttonStyleProp]}
            leftIcon={isButtonLeftIcon}
            onPress={() => onPress('contained empty state action')}
            rightIcon={isButtonRightIcon}
            styleText={[style.buttonStyle, buttonTextStyle]}
            titleRecv={buttonTitle}
            type={buttonType}
            widthLarge={actuatedNormalizeWidth(328)}
            widthSmall={actuatedNormalizeWidth(156)}
          />
        </View>
      )}
      {buttonContainer}
    </View>
  );
};

export default IMEmptyStateComponent;
