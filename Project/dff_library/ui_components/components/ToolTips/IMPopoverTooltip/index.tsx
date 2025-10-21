import React from 'react';
import { Platform, Text, View } from 'react-native';
import Popover from 'react-native-popover-view';

import { IMPopoverTooltipProp } from './types';
import { typography } from '../../../atoms';

const IMPopoverTooltip: React.FC<IMPopoverTooltipProp> = props => {
  const {
    contentText,

    verticalOffset= Platform.OS == 'ios' ? 0 : -25,

    ui_components,

    textStyle,

    backgroundStyleProp,
    containerStyle,
    popoverStyles,

    placement,
  } = props;

  return (
    <View style={[containerStyle]}>
      <Popover
        popoverStyle={popoverStyles}
        verticalOffset={verticalOffset}
        placement={placement}
        from={ui_components}
        backgroundStyle={backgroundStyleProp}>
        <Text style={[typography.ToolTipText, textStyle]}>{contentText}</Text>
      </Popover>
    </View>
  );
};

export default IMPopoverTooltip;
