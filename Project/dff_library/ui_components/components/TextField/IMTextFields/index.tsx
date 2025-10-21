import React, { useEffect, useState } from 'react';
import { TextInput, Text, View } from 'react-native';

import CustomImage from '../CustomImage';
import { type IMTextFieldsProps } from './types';
import useStyles from './styles';
import {colors,typography} from '../../../atoms';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../utils/utility';

const IMTextFields: React.FC<IMTextFieldsProps> = props => {
  const styles = useStyles();
  const {
    autoCaptialize ='none',
    activeHelperTextColor = colors.NeutralGrey110,
    cursorColor = colors.PrimaryOrange100,
    defaultValue,
    disableContainerBC = colors.CoolGrey100,
    disableHelperTextColor = colors.NeutralGrey110,
    enabledContainerBC = colors.White,
    errorActiveColor = colors.CoolGrey100,
    errorDisableColor = colors.White,
    errorHelperTextColor = colors.Error100,
    errorOutlineColor = colors.Error100,
    helperText,
    label,
    placeholderText,
    placeholderTxtColor = colors.NeutralGrey110,
    successHelperTextColor = colors.Success100,
    successOutlineColor = colors.Success100,
    textButtonName,

    leftIcon,
    enabled,
    helperTextMode,
    isError,
    isPlaceholderDisplayOnFocus=true,
    outline,
    rightIcon,
    separatorLine,
    textButton,
    multiLine,
    showKeyboard,

    maxLength,
    numberOfLine,

    helperTextStyle,
    textInputStyle,
    textIconStyle,

    containerPropStyle,
    labelPropStyle,
    helperContainerModeStyle,
    outsideViewProp,
    rightIconStyle,
    leftIconStyle,

    errorIcon,
    helperTextContainer,
    leftIconImage,
    rightIconImage,

    payeeButton,

    searchValue,
    textInputFocusCallBack,
  
    keyboardTypeOptions
  } = props;

  const [focus,setfocus]=useState<boolean>(false);
  const [initialState, SetState] = useState({
    focus: false,
    searchVal: defaultValue,
    errorColor: colors.White,
    color: disableHelperTextColor,
  });

  useEffect(() => {
    SetState({ ...initialState, searchVal: defaultValue });
  }, [defaultValue, initialState.searchVal]);

  const Value = (newValue: string): void => {
    SetState({ ...initialState, searchVal: newValue });
    if (searchValue) {
      searchValue(newValue);
    }
  };

  useEffect(() => {
    if (outline) {
      if (isError != undefined && !isError && initialState.searchVal != '') {
        SetState({
          ...initialState,
          errorColor: successOutlineColor,
          color: successOutlineColor,
        });
      } else if (
        isError != undefined &&
        isError &&
        initialState.searchVal != ''
      ) {
        SetState({
          ...initialState,
          errorColor: errorOutlineColor,
          color: errorOutlineColor,
        });
      }
    }
  }, [
    outline,
    isError,
    helperTextMode,
    initialState.searchVal,
    initialState.errorColor,
  ]);

  return (
    <View style={outsideViewProp}>
      {label && <Text style={[styles.labelText, labelPropStyle]}>{label}</Text>}
      <View
        style={[
          styles.containerViewStyle,
          {
            backgroundColor: enabled ? enabledContainerBC : disableContainerBC,
            borderColor: enabled ? enabledContainerBC : disableContainerBC,
          },
          {
            borderColor: enabled
              ? initialState.searchVal != ''
                ? initialState.errorColor
                : errorDisableColor
              : errorActiveColor,
          },
          containerPropStyle,
        ]}
      >
        {leftIcon && (
          <View style={[styles.leftIconStyle, leftIconStyle]}>
            <CustomImage image={leftIconImage} clickable={false} />
          </View>
        )}


        <TextInput
        autoCapitalize={autoCaptialize}
        maxLength={maxLength}
          style={[
           styles.textInputStyle,
           {
            marginLeft: leftIcon
              ? actuatedNormalizeWidth(44)
              : actuatedNormalizeWidth(16),
          },
            textInputStyle,
          ]}
          placeholder={focus?'':placeholderText}
          placeholderTextColor={placeholderTxtColor}
          onFocus={() => {
            if (textInputFocusCallBack) textInputFocusCallBack();
            !isPlaceholderDisplayOnFocus && setfocus(true)
            SetState({ ...initialState, focus: true });
          }}
          onChangeText={val => Value(val)}
          value={initialState.searchVal}
          selectionColor={cursorColor}
          editable={enabled}
          onEndEditing={()=>{!isPlaceholderDisplayOnFocus && setfocus(false)}}
          spellCheck={false}
          keyboardType={keyboardTypeOptions}
          // keyboardType={textButton ? 'numeric' : 'default'}
          multiline={multiLine}
          numberOfLines={numberOfLine}
          showSoftInputOnFocus={showKeyboard}
        />

        {rightIcon && (
          <View
            style={[
              { width: textButton ? '20%' : '12%' },
              styles.rightIconStyle,
              rightIconStyle
            ]}>
            {separatorLine && <View style={styles.separateLineStyle} />}
            {textButton ? (
              <CustomImage
                image={rightIconImage}
                onPress={payeeButton}
                disableIcon={!enabled}
                clickable={true}
                textButton={true}
                textButtonName={textButtonName}
                textIconStyle={
                  textIconStyle ? textIconStyle : styles.textIconStyle
                }
              />
            ) : (
              <CustomImage
                image={rightIconImage}
                onPress={payeeButton}
                disableIcon={!enabled}
                clickable={true}
              />
            )}
          </View>
        )}
      </View>
      {helperTextMode ?
        (helperTextContainer ? helperTextContainer :
          (
            <View style={[{
              flexDirection: 'row', marginTop: actuatedNormalizeHeight(8),
              marginLeft: isError != undefined ? isError == true ? actuatedNormalizeWidth(8) : actuatedNormalizeWidth(8) : actuatedNormalizeWidth(0)
            },
              helperContainerModeStyle]}>
              {isError != undefined && initialState.searchVal != '' && (
                <View >
                  <CustomImage image={errorIcon} clickable={false} />
                </View>
              )}
              {outline && initialState.searchVal == '' ? null : (
                <View style={{ position: 'absolute', alignSelf: 'center', marginLeft: isError != undefined ? isError ? actuatedNormalizeWidth(16) : actuatedNormalizeWidth(16) : actuatedNormalizeWidth(8), top: 0 }}>
                  <Text
                    style={[
                      {
                        color: isError != undefined ? isError ? errorHelperTextColor : successHelperTextColor : activeHelperTextColor,
                      },
                      typography.labelSmallSemiBold,
                      helperTextStyle
                    ]}>
                    {helperText}
                  </Text>
                </View>
              )}
            </View>

          )) : null

      }
    </View>
  );
};
export default IMTextFields;
