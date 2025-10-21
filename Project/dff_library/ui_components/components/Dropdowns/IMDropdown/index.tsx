import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Keyboard,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import DropdownModal from '../components/IMDropdownModal';
import DropdownOverlay from '../components/IMDropdownOverlay';
import { DropdownProps } from './types';
import { DropdownType } from '../utils/enums';
import DropdownWindow from '../components/IMDropdownWindow';
import { flatListObject } from '../utils/types';
import { ICGeneralChevronDown, ICGeneralChevronUp } from '../../../atoms/icons';
import styles from '../utils/styles';
import { typography, colors } from '../../../atoms';
import { useLayoutDropdown } from '../hooks/useLayoutDropdown';
import useStyles from './styles';
import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
} from '../../../utils/utility';

const IMDropdown: React.FC<DropdownProps> = props => {
  const propStyles = useStyles();
  const svgChild: React.ReactNode = <ICGeneralChevronDown />;
  const {
    disable,
    isDefault = true,

    dropdownType = DropdownType.SingleColumn,

    data,

    dropdownWidth = dropdownType === DropdownType.SingleColumn
    ? actuatedNormalizeWidth(164)
    : actuatedNormalizeWidth(343),
    numberOfLines = 1,

    label,
    placeholderText,

    dropdownRowTextStyle,
    headerStyle,
    placeholderTextStyle,
    placeHolderColor = colors.NeutralGrey140,
    placeHolderAnimatedColor = colors.NeutralGrey110,
    phFontSize = actuatedNormalizeHeight(14),
    phAnimatedFontSize = actuatedNormalizeHeight(12),
    phMarginTop = actuatedNormalizeWidth(15),
    phAnimatedMarginTop = actuatedNormalizeHeight(-10),
 
    leftSideContainer,
    rightSideContainerOpen =<ICGeneralChevronUp/>,
    rightSideContainer = <View>{svgChild}</View>,

    dropdownButtonInternalStyle,
    dropdownButtonStyle,
    dropdownRowStyle,
    dropdownStyle,
    flatListRowContainer,
    flatListStyle,
    floatDropdownContainerStyle,
    itemTextStyle,
    labelStyle,
    parentDropDownStyle,

    selectedValue,

    onSelect,
    onPress,
  } = props;

  const animatedLabelPosition = useRef(new Animated.Value(0)).current;
  const dropdownButtonRef = useRef<any>(null);

  const { dropdownWindowStyle, onDropdownButtonLayout } = useLayoutDropdown(
    dropdownStyle ? dropdownStyle : propStyles.dropdownStyle,
    dropdownWidth as number,
  );

  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<flatListObject>(
    selectedValue || {
      key: 'Value 1',
      value: '',
    },
  );

  useEffect(() => {
    Animated.timing(animatedLabelPosition, {
      toValue: isVisible || !!selectedItem.value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [isVisible, selectedItem.value]);

  let textShow = placeholderText;
  let imgShow: any;
  let selectedText: any = selectedItem.value;
  let selectedImg: any;

  if (typeof data[0].value !== 'string') {
    textShow = data[0].value?.text;
    imgShow = data[0].value?.image;
  }

  if (typeof selectedItem.value !== 'string') {
    selectedText = selectedItem.value?.text;
    selectedImg = selectedItem.value?.image;
  }

  const selectedOptionRow = (
    <>
      <View>{selectedImg}</View>
      <Text>
        <>{selectedText}</>
      </Text>
    </>
  );

  const defaulOptionRow = (
    <>
      <View>{imgShow}</View>
      <Text style={[typography.BodyRegular1, placeholderTextStyle]}>
        {textShow}
      </Text>
    </>
  );

  const openDropdown = () => {
    onPress && onPress()
    Keyboard.dismiss()
    setTimeout(
      () => {
        dropdownButtonRef.current.measure(
          (
            fx: number,
            fy: number,
            w: number,
            h: number,
            px: number,
            py: number,
          ) => {
            onDropdownButtonLayout(w, h, px, py);
            setIsVisible(true);
            setSelectedItem({
              key: 'Value 1',
              value: selectedText ? selectedText : isDefault ? data[0].value : placeholderText,
            });
          },
        );
      }, 100)
  };

  const closeDropdown = () => {
    setIsVisible(false);
    setSelectedItem({
      key: 'Value 1',
      value: selectedText ? selectedText : '',
    });
  };

  const onSelectItem = (item: flatListObject, index: number) => {
    closeDropdown();
    setSelectedItem(item);
    onSelect(item, index);
  };

  const renderDropdownOverlay = () => {
    let customColor = disable ? colors.NeutralGrey100 : colors.NeutralGrey140;
    let textField;
    let imageField: any;
    return (
      <>
        <DropdownOverlay
          onPress={closeDropdown}
          backgroundColor={'transparent'}
        />
        <DropdownWindow layoutStyle={dropdownWindowStyle}>
          <FlatList
            // ListEmptyComponent={() => (<Text>No upcoming</Text>)}
            ItemSeparatorComponent={() => (
              <View style={propStyles.ItemSeparatorComponentStyle} />
            )}
            style={[propStyles.flatListStyle, flatListStyle]}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              textField = item.value;
              if (typeof item.value !== 'string') {
                textField = item.value?.text;
                imageField = item.value?.image;
              }
              const rowDetailsWithImage = (
                <View style={propStyles.rowDetailsWithImageStyle}>
                  <View>{imageField}</View>
                  <Text style={propStyles.rowDetailsWithImageTextStyle}>
                    <>{textField}</>
                  </Text>
                </View>
              );

              return (
                <View
                  style={[
                    propStyles.flatListRowContainer,
                    flatListRowContainer,
                  ]}>
                  <TouchableHighlight
                    disabled={disable}
                    underlayColor={colors.CoolGrey90}
                    style={
                      dropdownRowStyle
                        ? dropdownRowStyle
                        : propStyles.dropdownRowStyle
                    }
                    onPress={() => onSelectItem(item, index)}>
                    <View style={styles.elementStyle}>
                      {dropdownType === DropdownType.ALT ? (
                        <>
                          <View style={[styles.halfWeight,itemTextStyle]}>
                            <Text
                              numberOfLines={numberOfLines}
                              style={[
                                dropdownRowTextStyle
                                  ? dropdownRowTextStyle
                                  : propStyles.dropdownRowTextStyle,
                                { color: customColor },
                                typography.BodyRegular3,
                              ]}>
                              {item.key}
                            </Text>
                          </View>
                          <View style={styles.halfWeight}>
                            <Text
                              numberOfLines={numberOfLines}
                              style={[
                                dropdownRowTextStyle
                                  ? dropdownRowTextStyle
                                  : propStyles.dropdownRowTextStyle,
                                {
                                  color: disable
                                    ? customColor
                                    : colors.NeutralGrey110,
                                },
                                styles.rightTextAlign,
                                typography.BodyRegular3,
                              ]}>
                              <>
                                {imageField ? rowDetailsWithImage : item.value}
                              </>
                            </Text>
                          </View>
                        </>
                      ) : (
                        <View style={[styles.halfWeight,itemTextStyle]}>
                          <Text
                            numberOfLines={numberOfLines}
                            style={[
                              propStyles.dropdownRowTextStyle,
                              { color: customColor },
                              typography.BodyRegular3,
                            ]}>
                            <>{imageField ? rowDetailsWithImage : item.value}</>
                          </Text>
                        </View>
                      )}
                    </View>
                  </TouchableHighlight>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </DropdownWindow>
      </>
    );
  };

  const onRequestClose = () => {
    setIsVisible(false);
  };

  const renderDropdown = () => {
    return (
      <DropdownModal visible={isVisible} onRequestClose={onRequestClose}>
        {renderDropdownOverlay()}
      </DropdownModal>
    );
  };

  return (
    <View style={parentDropDownStyle}>
      <TouchableOpacity
        activeOpacity={0.8}
        ref={dropdownButtonRef}
        disabled={disable}
        onPress={openDropdown}
        style={[
          dropdownButtonStyle
            ? dropdownButtonStyle
            : propStyles.dropdownButtonStyle,
          { width: dropdownWidth }
        ]}>
        {dropdownType === DropdownType.FLoatTextfield ? (
          <View style={[propStyles.container, floatDropdownContainerStyle]}>
            <View
              style={
                dropdownButtonInternalStyle
                  ? dropdownButtonInternalStyle
                  : propStyles.dropdownButtonInternalStyle
              }>
              <Animated.Text
              numberOfLines={numberOfLines}
                style={[
                  {
                    position: 'absolute',
                    left: actuatedNormalizeWidth(-10),
                    top: animatedLabelPosition.interpolate({
                      inputRange: [
                        actuatedNormalizeWidth(0),
                        actuatedNormalizeHeight(1),
                      ],
                      outputRange: [
                        phMarginTop,
                        phAnimatedMarginTop
                      ],
                    }),
                    ...typography.BodyRegular3,
                    fontSize: animatedLabelPosition.interpolate({
                      inputRange: [
                        actuatedNormalizeWidth(0),
                        actuatedNormalizeHeight(1),
                      ],
                      outputRange: [
                        phFontSize,
                        phAnimatedFontSize,
                      ],
                    }),
                    backgroundColor: colors.White,
                    paddingHorizontal: actuatedNormalizeWidth(5),
                    zIndex: 1,
                    color: animatedLabelPosition.interpolate({
                      inputRange: [
                        actuatedNormalizeWidth(0),
                        actuatedNormalizeHeight(1),
                      ],
                      outputRange: [
                        placeHolderColor,
                        placeHolderAnimatedColor,
                      ],
                    }),
                    marginTop: actuatedNormalizeHeight(-10),
                  },
                  labelStyle,
                ]}>
                {label}
              </Animated.Text>
              <Text
                numberOfLines={1}
                style={[headerStyle ? headerStyle : propStyles.headerStyle]}>
                {selectedText}
              </Text>
              {rightSideContainer}
            </View>
            {renderDropdown()}
          </View>
        ) : (
          <View style={propStyles.dropDownButtonWithleftText}>
            {leftSideContainer}
            <View
              style={
                dropdownButtonInternalStyle
                  ? dropdownButtonInternalStyle
                  : propStyles.dropdownButtonInternalStyle
              }>
              <Text
                numberOfLines={1}
                style={[
                  headerStyle ? headerStyle : propStyles.headerStyle,
                  typography.BodyRegular1,
                ]}>
                {selectedText ? selectedOptionRow : defaulOptionRow}
              </Text>
              { isVisible ? rightSideContainerOpen :rightSideContainer }
            </View>
            {renderDropdown()}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default IMDropdown;
