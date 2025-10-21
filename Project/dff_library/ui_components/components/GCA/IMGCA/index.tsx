import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { type IMGCAProp } from './types';
import styles from './styles';
import colors from '../../../atoms/colors';
import { ICGeneralHide, ICGeneralShow } from '../../../atoms/icons';

const IMGCA: React.FC<IMGCAProp> = props => {
  const {
    isautoFocus = true,
    isCCA,
    isGCA,
    isTitle,

    letterSpacing = 8,
    maxLength = 10,

    cursorColor = colors.PrimaryOrange100,
    enterPinText,
    subtitle,
    title,

    keyboardType,

    dropdownComponentStyle,
    mainContainerStyleProp,
    parentContainer,

    alphabetTextStyle,
    pinTextStyle,
    subtitleStyle,
    textInputContainer,
    textStyle,
    titleStyle,

    alphabets,

    inputFirstCallback,
    inputSecondCallback,
    inputThirdCallback,
    inputResultCallback,
    onSubmitCallBack,

    dropdowncomponent,
    hideIconContainer = <ICGeneralHide height={20} width={20} />,
    showIconContainer = <ICGeneralShow height={20} width={20} />,
  } = props;

  const [inputSecond, setInputSecond] = useState('');
  const [inputThird, setInputThird] = useState('');

  const inputOneRef: React.RefObject<TextInput> = React.createRef();
  const inputSecondRef: React.RefObject<TextInput> = React.createRef();
  const inputThirdRef: React.RefObject<TextInput> = React.createRef();

  const [isShow, setIsShow] = useState<boolean>(false);

  const alphabetsUI = (_item: string) => {
    return (
      <View style={styles.textContainer}>
        <Text style={[styles.AlphabetStyle, alphabetTextStyle]}>{_item} </Text>
      </View>
    );
  };

  return (
    <View style={[styles.mainContainer, mainContainerStyleProp]}>
      <View>
        {isTitle && (
          <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
        )}
        {<Text style={[styles.subtitleStyle, subtitleStyle]}>{subtitle}</Text>}
        <View style={[styles.dropdownComponent, dropdownComponentStyle]}>
          {dropdowncomponent}
        </View>
      </View>
      {isGCA && alphabets && (
        <View style={[styles.alphabetContainer, parentContainer]}>
          <View style={styles.container}>
            {alphabetsUI(alphabets.firstAlphabet)}
            {alphabetsUI(alphabets.secondAlphabet)}
            {alphabetsUI(alphabets.thirdAlphabet)}
          </View>
          <View style={[styles.container]}>
            <View style={[styles.textInputContainer, textInputContainer]}>
              <TextInput
                autoFocus={isautoFocus}
                blurOnSubmit={false}
                contextMenuHidden={true}
                keyboardType={keyboardType}
                maxLength={2}
                onChangeText={(val: string) => {
                  if (val.length === 2) {
                    inputSecondRef.current &&
                      (inputSecondRef.current as any).focus();
                  }
                  if (inputFirstCallback) inputFirstCallback(val);
                }}
                onSubmitEditing={() =>
                  inputSecondRef.current &&
                  (inputSecondRef.current as any).focus()
                }
                ref={inputOneRef}
                style={[styles.textInputStyle, textStyle]}
                selectionColor={cursorColor}
                selectTextOnFocus={false}
              />
            </View>
            <View style={[styles.textInputContainer, textInputContainer]}>
              <TextInput
                blurOnSubmit={false}
                contextMenuHidden={true}
                keyboardType={keyboardType}
                maxLength={2}
                onChangeText={val => {
                  setInputSecond(val);
                  if (val.length === 2) {
                    inputThirdRef.current &&
                      (inputThirdRef.current as any).focus();
                  }
                  if (inputSecondCallback) inputSecondCallback(val);
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    if (inputSecond.length === 1 || inputSecond.length === 0) {
                      inputOneRef.current &&
                        (inputOneRef.current as any).focus();
                    }
                  }
                }}
                onSubmitEditing={() =>
                  inputThirdRef.current &&
                  (inputThirdRef.current as any).focus()
                }
                ref={inputSecondRef}
                style={[styles.textInputStyle, textStyle]}
                selectionColor={cursorColor}
                selectTextOnFocus={false}
              />
            </View>
            <View style={[styles.textInputContainer, textInputContainer]}>
              <TextInput
                blurOnSubmit={false}
                contextMenuHidden={true}
                keyboardType={keyboardType}
                maxLength={2}
                onSubmitEditing={() => Keyboard.dismiss()}
                onChangeText={val => {
                  setInputThird(val);
                  if (val.length === 2) {
                    Keyboard.dismiss();
                  }
                  if (inputThirdCallback) inputThirdCallback(val);
                  return;
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    if (inputThird.length === 1 || inputThird.length === 0) {
                      inputSecondRef.current &&
                        (inputSecondRef.current as any).focus();
                    }
                  }
                }}
                ref={inputThirdRef}
                selectionColor={cursorColor}
                selectTextOnFocus={false}
                style={[styles.textInputStyle, textStyle]}
              />
            </View>
          </View>
        </View>
      )}

      {isCCA && (
        <View>
          <Text style={[styles.pinText, pinTextStyle]}>{enterPinText}</Text>
          <View style={[styles.ccaContainer, parentContainer]}>
            <TextInput
              autoFocus={true}
              contextMenuHidden={true}
              maxLength={maxLength}
              blurOnSubmit={false}
              keyboardType={keyboardType}
              onChangeText={(val: string) => {
                if (inputResultCallback) inputResultCallback(val);
              }}
              secureTextEntry={!isShow}
              onSubmitEditing={() => {
                if (onSubmitCallBack) onSubmitCallBack();
              }}
              style={[
                styles.pinTextInputStyle,
                { letterSpacing: letterSpacing },
                textStyle,
              ]}
              selectTextOnFocus={false}
              selectionColor={cursorColor}
            />
            <TouchableOpacity
              onPress={() => {
                setIsShow(!isShow);
              }}>
              {isShow ? hideIconContainer : showIconContainer}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
export default IMGCA;
