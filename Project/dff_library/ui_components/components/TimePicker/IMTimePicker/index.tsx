import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import IMTextFields from '../../TextField/IMTextFields';
import { ICGeneralChevronDown } from '../../../atoms/icons';
import styles from './styles';
import ScrollPicker from './ScrollPicker/ScrollPicker';
import { IMTimePickerProps } from './types';
import { STRINGS } from './constants';
import { colors } from '../../../atoms';

const IMTimePicker: React.FC<IMTimePickerProps> = ({
  isHelperTextMode,
  isInputTextButton,
  isTextInputRightIcon = true,
  isSmallCase,
  use24Hour,

  itemHeight = actuatedNormalizeHeight(44),
  wrapperHeight = actuatedNormalizeHeight(248),
  wrapperWidth,

  highlightColor,
  wrapperBackground,
  textInputLabel,
  textInputPlaceHolder,

  highlightColorStyle,
  pickerContainerStyle,
  scrollContainerStyle,
  textInputContainerStyle,
  textLabelPropStyle,

  activeItemTextStyle,
  itemTextStyle,

  headerProp,
  inputRightIcon = <ICGeneralChevronDown />,

  onPressCallBack,
  onTimeChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [state, setState] = useState<string>('Choose');
  const [selectedHour, setSelectedHour] = useState<number>(0);
  const [selectedMinute, setSelectedMinute] = useState<number>(0);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(0);

  useEffect(() => {
    if (selectedHour || selectedMinute || selectedPeriod) {
      searchData(selectedHour, selectedMinute, selectedPeriod);
    }
  }, [selectedHour, selectedMinute, selectedPeriod]);
  const hoursData: string[] = use24Hour
    ? Array.from({ length: 24 }, (_, i) => i.toString())
    : Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutesData: string[] = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0'),
  );
  const periodData: ('AM' | 'am' | 'pm' | 'PM')[] = use24Hour
    ? []
    : isSmallCase
    ? ['am', 'pm']
    : ['AM', 'PM'];
  const handleTimeChange = (
    type: STRINGS.hour | STRINGS.minute | STRINGS.period,
    value: string,
    index: number,
  ) => {
    let newHour = selectedHour;
    let newMinute = selectedMinute;
    let newPeriod = selectedPeriod;
    if (type === STRINGS.hour) {
      newHour = index;
      setSelectedHour(newHour);
    } else if (type === STRINGS.minute) {
      newMinute = index;
      setSelectedMinute(newMinute);
    } else if (type === STRINGS.period) {
      newPeriod = index;
      setSelectedPeriod(index);
    }
    if (onTimeChange) {
      const hourValue = parseInt(hoursData[newHour], 10);
      const minuteVaue = parseInt(minutesData[newMinute], 10);
      const periodValue = periodData[newPeriod] || '';
      onTimeChange({
        hours: hourValue,
        minutes: minuteVaue,
        period: periodValue,
      });
    }
  };
  const searchData = (hour: number, minute: number, period: number) => {
    const hourValue = parseInt(hoursData[hour], 10);
    const minuteVaue = parseInt(minutesData[minute], 10);
    const periodValue = periodData[period] || '';
    setState(
      `${hourValue}:${minuteVaue < 10 ? `${0}${minuteVaue}` : minuteVaue} ${
        use24Hour ? '' : periodValue
      }`,
    );
  };
  return (
    <View style={styles.container}>
      {headerProp || (
        <IMTextFields
          textInputStyle ={styles.inputTextStyle}
          containerPropStyle={textInputContainerStyle}
          defaultValue={state}
          enabled={true}
          helperTextMode={isHelperTextMode}
          label={textInputLabel}
          labelPropStyle={textLabelPropStyle}
          placeholderText={textInputPlaceHolder}
          rightIcon={isTextInputRightIcon}
          rightIconImage={inputRightIcon}
          payeeButton={() => {
            setIsOpen(!isOpen);
            onPressCallBack
          }}
          textButton={isInputTextButton}
          showKeyboard={false}
          cursorColor={colors.TransperantColor}
        />
      )}
      {isOpen && (
        <View style={[styles.scrollContainerStyle, scrollContainerStyle]}>
          <View style={[styles.pickerContainerStyle, pickerContainerStyle]}>
            <ScrollPicker
              dataSource={hoursData}
              selectedIndex={selectedHour}
              onValueChange={(value, index) => {
                handleTimeChange(STRINGS.hour, value, index);
              }}
              wrapperHeight={wrapperHeight}
              itemHeight={itemHeight}
              highlightColor={highlightColor}
              wrapperBackground={wrapperBackground}
              activeItemTextStyle={activeItemTextStyle || styles.activeItemText}
              itemTextStyle={itemTextStyle || styles.itemText}
              pickerWidth={wrapperWidth}
            />
            <ScrollPicker
              dataSource={minutesData}
              selectedIndex={selectedMinute}
              onValueChange={(value, index) => {
                handleTimeChange(STRINGS.minute, value, index);
              }}
              wrapperHeight={wrapperHeight}
              itemHeight={itemHeight}
              highlightColor={highlightColor}
              wrapperBackground={wrapperBackground}
              activeItemTextStyle={activeItemTextStyle || styles.activeItemText}
              itemTextStyle={itemTextStyle || styles.itemText}
              pickerWidth={wrapperWidth}
            />
            {!use24Hour && (
              <ScrollPicker
                dataSource={periodData}
                selectedIndex={selectedPeriod}
                onValueChange={(value, index) => {
                  handleTimeChange(STRINGS.period, value, index);
                }}
                wrapperHeight={wrapperHeight}
                itemHeight={itemHeight}
                highlightColor={highlightColor}
                wrapperBackground={wrapperBackground}
                activeItemTextStyle={
                  activeItemTextStyle || styles.activeItemText
                }
                itemTextStyle={itemTextStyle || styles.itemText}
                pickerWidth={wrapperWidth}
              />
            )}
          </View>
          <View style={[styles.highlightOverlay, highlightColorStyle]} />
        </View>
      )}
    </View>
  );
};
export default IMTimePicker;
