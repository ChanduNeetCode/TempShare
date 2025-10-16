import React from 'react';
import { View } from 'react-native';

import { IMTooltipsprops } from './types';
import { ToolTips } from '../lib/ToolTips/ToolTips';
import { usePopover } from '../lib/usePopover/usePopover';
import ChildComponents from '../lib/ChildComponents/ChildComponents';
import { useLayout } from '../lib/useLayout/useLayout';
import styles from './styles';

const IMTooltips: React.FC<IMTooltipsprops> = props => {
  const {
    isCancelVisibility,
    isSelect,

    cancelIcon,
    contentText,

    selectImage,
    unSelectImage,

    textStyle,

    backgroundViewStyle,
    containerViewStyle,
    outerPopoverStyles,
    popoverStyles,
    
    placement,  

    onPress
  } = props;

  const {
    openPopover,
    closePopover,
    popoverVisible,
    touchableRef,
    popoverAnchorRect,
  } = usePopover();

  const { width, height, onLayout } = useLayout();
  return (
    
      <View style={[styles.parentViewStyle,containerViewStyle]} onLayout={onLayout}>
        <View
          style={[
            { width: width / 3, height: height / 3 },
            outerPopoverStyles,
          ]}>
          <ChildComponents
            isSelect={isSelect}
            selectImage={selectImage}
            unSelectImage={unSelectImage}
            ref={touchableRef}
            onPress={()=>{
              openPopover();
              onPress&&onPress();
            }}
          />

          <ToolTips
            {...popoverStyles}
            visible={popoverVisible}
            onClose={closePopover}
            fromRect={popoverAnchorRect}
            placement={placement}
            textStyle={textStyle}
            contentText={contentText}
            isCancelVisibility={isCancelVisibility}
            cancelIcon={cancelIcon}
            backgroundStyle={backgroundViewStyle}
            />
        </View>
      </View>
    
  );
};

export default IMTooltips;