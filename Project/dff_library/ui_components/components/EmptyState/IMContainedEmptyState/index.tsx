/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Text, View } from 'react-native';

import useStyles from './styles';
import { Props } from './type';
import { ICNoReminder } from '../../../atoms/icons';
import { IMSecondaryButton } from '../../Buttons';

const IMContainedEmptyStateComponent: React.FC<Props> = ({
  buttonStyleProp,
  sublineStyle,
  titleStyle,

  buttonStyle,
  buttonViewProp,
  stateStyle,

  buttonContainer,
  image = <ICNoReminder width={36} height={36} />,
  rightImage,

  onPress,

  isButton,
  isLeftIcon,
  isRightIcon,

  buttonType = 'large',
  buttonTitle,
  subline,
  title,
}) => {
  const style = useStyles();
  return (
    <View style={[style.containedStateStyle, stateStyle]}>
      {image}
      {title && <Text style={[style.titleTextStyle, titleStyle]}>{title}</Text>}
      {subline && (
        <Text style={[style.sublineTextStyle, sublineStyle]}>{subline}</Text>
      )}
      {isButton && (
        <View style={[{ top: 10, flexDirection: 'row' }, buttonViewProp]}>
          <IMSecondaryButton
            buttonStyle={[style.secondaryButtonStyle, buttonStyle]}
            leftIcon={isLeftIcon}
            onPress={() => onPress('Secondary')}
            rightImage={rightImage}
            rightIcon={isRightIcon}
            styleText={[style.secondaryButtonText, buttonStyleProp]}
            titleRecv={buttonTitle}
            type={buttonType}
          />
        </View>
      )}
      {buttonContainer}
    </View>
  );
};

export default IMContainedEmptyStateComponent;
