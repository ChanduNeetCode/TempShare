import React, { FC, useState, useRef, useEffect } from 'react';
import {
  Animated,
  Easing,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { typography, colors } from '../../../atoms';
import { actuatedNormalizeWidth } from '../../../utils/utility';
import { IMFloatTextFieldsProps } from './types';
import useStyles from './styles';
import CustomImage from '../CustomImage';

const IMFloatTextFields: FC<IMFloatTextFieldsProps> = props => {
  const {
    autoCaptialize = 'none',
    maxLength,
    numberOfLine,

    activeHelperTextColor = colors.NeutralGrey110,
    defaultValue,
    disableContainerBC = colors.CoolGrey100,
    disableHelperTextColor = colors.NeutralGrey110,
    enabledContainerBC = colors.White,
    errorActiveColor = colors.CoolGrey100,
    errorDisableColor = colors.White,
    errorHelperTextColor = colors.Error100,
    errorOutlineColor = colors.Success100,
    floatingPlaceHTC = colors.White,
    helperText = 'Help text',
    label ,
    placeholderText,
    placeHTC = colors.White,
    rightSideTextName = 'Button',
    successOutlineColor = colors.Error100,
    successHelperTextColor = colors.Success100,
    textInputCursorColor = colors.PrimaryOrange100,

    enabled,
    helperTextMode,
    isError,
    isPlaceholderDisplayOnFocus=true,
    isMultiLine,
    leftIcon,
    outline,
    rightIcon,
    separatorLine,
    textButton,

    errorIcon,
    leftIconImage,
    placeholderTextColorProp,
    rightIconImage,

    searchValue,
    textInputFocusCallBack,
    textInputFocusRemovedCallBack,

    keyboardTypeOptions,

    helperTextContainer,

    errorIconStyle,
    helperContainerModeStyle,
    labelContainerPropStyle,
    leftIconStyle,
    mainViewStyle,
    outsideViewProp,
    rightIconStyle,
    separatorLineStyle,

    customImageTextStyle,
    helperTextStyle,
    labelTextStyle,
    textInputStyle,

    payeeButton,
  } = props;
  const styles = useStyles();

  const [initialState, SetState] = useState({
    focus: false,
    searchVal: defaultValue,
    value: '',
    errorColor: colors.White,
    color: disableHelperTextColor,
  });

  const [focus, setFocus] = useState(false);
  const [f1,setF1] = useState<boolean>(false);
  useEffect(() => {
    SetState({ ...initialState, searchVal: defaultValue });
  }, [defaultValue, initialState.searchVal]);

  const position = useRef(
    new Animated.Value(initialState.value ? 1 : 0),
  ).current;
  const textInputRef = useRef<TextInput | null>(null);
  
  useEffect(() => {
    if (outline) {
      if (isError != undefined && !isError && initialState.searchVal != '') {
        SetState({ ...initialState, errorColor: errorOutlineColor });
      } else if (
        isError != undefined &&
        isError &&
        initialState.searchVal != ''
      ) {
        SetState({ ...initialState, errorColor: successOutlineColor });
      }
    }
  }, [outline, isError, initialState.errorColor, initialState.searchVal]);

  useEffect(() => {
    Animated.timing(position, {
      toValue: initialState.focus || !!initialState.searchVal ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [initialState.focus, position, initialState.searchVal]);

  const Value = (newValue: string): void => {
    SetState({ ...initialState, searchVal: newValue });
    if (searchValue) {
      searchValue(newValue);
    }
  };

  return (
    <View style={outsideViewProp}>
      <View
        style={[
          styles.containerViewStyle,
          {
            backgroundColor: enabled ? enabledContainerBC : disableContainerBC,
            borderColor: enabled
              ? initialState.searchVal != ''
                ? initialState.errorColor
                : errorDisableColor
              : errorActiveColor,
          },
          mainViewStyle,
        ]}>
        {leftIcon && (
          <View style={[styles.leftIconStyle, leftIconStyle]}>
            <CustomImage image={leftIconImage} clickable={false} />
          </View>
        )}

        <TextInput
        autoCapitalize={autoCaptialize}
        maxLength={maxLength}
          style={[
            styles.input,
            {
              marginLeft: leftIcon
                ? actuatedNormalizeWidth(44)
                : actuatedNormalizeWidth(16),
            },
            textInputStyle,
          ]}
          onFocus={() => {
            !isPlaceholderDisplayOnFocus && setF1(true);
            if (textInputFocusCallBack) textInputFocusCallBack();
            SetState({ ...initialState, focus: true });
          }}
          onEndEditing={()=>{!isPlaceholderDisplayOnFocus && setF1(false)}}
          onBlur={() => {
            if (textInputFocusRemovedCallBack) textInputFocusRemovedCallBack();
            SetState({ ...initialState, focus: false });
          }}
          onChangeText={val => Value(val)}
          value={initialState.searchVal}
          selectionColor={textInputCursorColor}
          editable={enabled}
          autoFocus={focus}
          ref={textInputRef}
          placeholder={f1?'':(placeholderText|| label)}
          placeholderTextColor={placeholderTextColorProp||colors.NeutralGrey110}
          spellCheck={false}
          keyboardType={keyboardTypeOptions}
          multiline={isMultiLine}
          numberOfLines={numberOfLine}
        />

        <Animated.View
          style={[
            styles.labelContainer,
            labelContainerPropStyle,
            initialState.focus
              ? { backgroundColor: floatingPlaceHTC }
              : { backgroundColor: placeHTC },
            {
              transform: [
                {
                  scale: position.interpolate({
                    inputRange: [0, 0],
                    outputRange: [0, 0.95],
                  }),
                },
                {
                  translateY: position.interpolate({
                    inputRange: [0, 1],
                    outputRange: Platform.OS === 'ios' ? [4, -25] : [17, -10],
                  }),
                },
                {
                  translateX: position.interpolate({
                    inputRange: [0, 5],
                    outputRange: Platform.OS === 'ios' ? [4, -25] : [17, -10],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              textInputRef.current?.focus();
            }}
            activeOpacity={0.1}>
            <Animated.Text
              style={[
                styles.labelText,
                {
                  fontSize:
                    initialState.focus || !!initialState.searchVal ? 12 : 16,
                  backgroundColor: enabled ? 'transparent' : 'transparent',
                },
                labelTextStyle,
              ]}>
              {label ? label : placeholderText}
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
        {rightIcon && (
          <View
            style={[
              {
                width: textButton ? '25%' : '12%',
              },
              styles.rightIconStyle,
              rightIconStyle,
            ]}>
            {separatorLine && (
              <View style={[styles.separateLineStyle, separatorLineStyle]} />
            )}
            {/*uncomment this code if you need cross icon functionality*/}
            {/* {initialState.focus && initialState.searchVal != '' && iconCross ?
            separatorLine  textButton <CustomImage style={styles.imageCross} image={Images.icons.cross} onPress={() => { SetState({ ...initialState, searchVal: '' }), Keyboard.dismiss() }} disableIcon={!enabled} clickable={true} /> : */}
            {textButton ? (
              <CustomImage
                image={rightIconImage}
                onPress={payeeButton}
                disableIcon={!enabled}
                clickable={true}
                textButton={true}
                textButtonName={rightSideTextName}
                textIconStyle={customImageTextStyle}
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
            <View style={[styles.helpTextContainer,
            {
              marginLeft: isError != undefined ? isError == true ? actuatedNormalizeWidth(8) :
                actuatedNormalizeWidth(8) :
                actuatedNormalizeWidth(0)
            },
              helperContainerModeStyle]}>
              {isError != undefined && initialState.searchVal != '' && (
                <View style={errorIconStyle}>
                  <CustomImage image={errorIcon} clickable={false} />
                </View>
              )}
              {outline && initialState.searchVal == '' ? null : (
                <View style={[styles.helpTextView,
                {
                  marginLeft: isError != undefined ? isError ? actuatedNormalizeWidth(16) :
                    actuatedNormalizeWidth(16) :
                    actuatedNormalizeWidth(8)
                }
                ]}>
                  <Text
                    style={[
                      {
                        color: isError != undefined ? isError ?
                        errorHelperTextColor : successHelperTextColor : activeHelperTextColor,
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

export default IMFloatTextFields;
