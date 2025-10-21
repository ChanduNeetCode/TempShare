import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMTextFields, IMFloatTextFields, IMSplitInputTextField } from '../../../../dff_library/ui_components/components/TextField';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { ICGeneralCalender, ICGeneralSearch, ICGeneralChevronRight, ICGeneralRupee, ICExtraSuccess, ICGeneralNotifyAltRed } from '../../../../dff_library/ui_components/atoms/icons';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../../src/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { flatListObject } from '../../../../dff_library/ui_components/components/Dropdowns/utils/types';

import useStyles from './styles';
import { STRINGS } from './constants';
import { unit, units } from './json'

type Props = NativeStackScreenProps<RootStackParamList, 'TextFieldDemo'>;

const TextFieldDemo = ({ navigation }: Props) => {
  const styles = useStyles()
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  const textFields = [
    { key: 1, value: 'Label With in container' },
    { key: 2, value: 'Label outside the container' },
    { key: 3, value: 'Float TextField With Helper Text' },
    { key: 4, value: 'TextField With Helper Text' },
    { key: 5, value: 'Split Input Field (3 units)' },
    { key: 6, value: 'Split Input Field (2 units)' }
  ];

  const [searchText, setSearchText] = useState('');
  const [key, setKey] = useState(0);
  const [date, setDate] = useState('')
  const [selectedVal, setSelectedVal] = useState<any>(textFields[0]);

  let selectedYear: any = '0';
  let selectedMonth: any = 0;
  let selectedDay: any = 0;

  const searchData = (newValue: string) => {
    setSearchText(newValue);
  };

  const numberOfDays = (years?: any, months?: any, days?: any) => {
    
    const currentDate: any = new Date();
    const targetDate: any = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + Number(years));
    targetDate.setMonth(targetDate.getMonth() + Number(months));
    targetDate.setDate(targetDate.getDate() + Number(days));
    const difference = targetDate - currentDate;
    const dayDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    const options = { month: 'short', day: 'numeric', year: '2-digit' }
    setDate(targetDate.toLocaleDateString('en-GB', options).replace(/(\d{2})$/, "'$1"))
    return [dayDifference, targetDate.toLocaleDateString('en-GB', options).replace(/(\d{2})$/, "'$1")]
  }

  const onSelectItem = (item: flatListObject, title: string) => {
    if (title == "year") {
      selectedYear = item.key;
    }
    else if (title == "month") {
      selectedMonth = item.key;
    }
    else {
      selectedDay = item.key;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_textfield} />
      <View style={styles.parentViewStyle}>
        <ScrollView
         
          style={styles.scrollViewContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View
              style={{
                flex: 1,
                marginBottom: 20,
              }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                <IMDropdown
                  dropdownWidth={actuatedNormalizeWidth(320)}
                  disable={false}
                  placeholderText={textFields[0].value}
                  dropdownType={DropdownType.SingleColumn}
                  flatListRowContainer={{ width: actuatedNormalizeWidth(320) }}
                  data={textFields}
                  onSelect={(selectedItem) => {
                    setSelectedVal(selectedItem);
                  }}
                />
              </View>
              {selectedVal.key == 1 && (
                <View style={{ marginTop: 'auto', marginBottom: 20, justifyContent: 'center' }}>
                  <IMFloatTextFields
                    key={key}
                    enabled={true}
                    searchValue={searchData}
                    label={'Label'}
                    isPlaceholderDisplayOnFocus={false}
                    defaultValue={searchText}
                    placeholderText='Label'
                    labelContainerPropStyle={{}}
                    helperTextMode={false}
                    // textInputFocusCallBack={() => console.log('testing..')}
                    // textInputFocusRemovedCallBack={() => console.log('testingOnBlur....')}
                  />

                  <IMFloatTextFields
                    key={key}
                    enabled={true}
                    label={'label'}
                    searchValue={searchData}
                    separatorLine={false}
                    placeholderText='Label'
                    rightIcon={false}
                    leftIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    leftIconImage={<ICGeneralSearch height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    textButton={false}
                    labelTextStyle={{}}
                    defaultValue={searchText} />

                  <IMFloatTextFields
                    enabled={true}
                    label={'label'}
                    placeholderText='Label'
                    searchValue={searchData}
                    separatorLine={true}
                    isPlaceholderDisplayOnFocus={false}
                    rightIcon={true}
                    rightIconImage={<ICGeneralCalender height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    leftIcon={true}
                    leftIconImage={<ICGeneralSearch height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}/>}
                    textButton={false}
                    defaultValue={searchText}
                  />

                  <IMFloatTextFields
                    enabled={true}
                    label={'Input text'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}/>}
                    leftIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    separatorLine={true}
                    outline={true}
                    isError={false}
                    errorIcon={<ICExtraSuccess style={{ marginTop: 5 }} />}
                    textButton={true}

                  />
                  <IMFloatTextFields
                    enabled={true}
                    label={'Input text'}
                    rightIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    leftIcon={true}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    separatorLine={true}
                    outline={true}
                    isError={true}
                    errorIcon={<ICExtraSuccess style={{ marginTop: 5 }} />}
                    textButton={true}

                  />

                  <View style={styles.disableContainer}>
                    <Text>Disabled</Text>
                    <IMFloatTextFields
                      enabled={false}
                      label={'Input text'}
                      isPlaceholderDisplayOnFocus={false}
                      rightIcon={true}
                      rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                      leftIcon={true}
                      searchValue={searchData}
                      leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                      separatorLine={true}
                      outline={true}
                      isError={true}
                      errorIcon={<ICExtraSuccess style={{ marginTop: 5 }} />}
                      textButton={true}
                      mainViewStyle={{marginTop:0}}

                    />
                  </View>
                </View>
              )}

              {selectedVal.key == 2 && (
                <>
                  <IMTextFields
                    defaultValue={searchText}
                    key={key}
                    enabled={true}
                    label={'Label'}
                    placeholderText={'Search for bank'}
                    leftIcon={false}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralSearch height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    separatorLine={false}
                    textButton={false}
                    isPlaceholderDisplayOnFocus={false}
                  />
                  <IMTextFields
                    defaultValue={searchText}
                    key={key}
                    enabled={true}
                    label={'Label'}
                    placeholderText={'Search for bank'}
                    leftIcon={true}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralSearch height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    separatorLine={false}
                    textButton={false}
                    isPlaceholderDisplayOnFocus={false}
                  />

                  <IMTextFields
                    defaultValue={searchText}
                    enabled={true}
                    label={'Both side icons'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralCalender height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    placeholderText={'Search for bank'}
                    leftIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralSearch height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}/>}
                    separatorLine={true}
                    textButton={false}
                  />


                  <IMTextFields
                    enabled={true}
                    label={'Right side button'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    placeholderText={'Placeholder text'}
                    leftIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    separatorLine={false}
                    textButton={true}
                    helperTextMode={true}
                    helperText={'Helper Text'}
                    defaultValue={searchText}
                    outline
                  />

                  <IMTextFields
                    enabled={false}
                    label={'Disabled'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralCalender height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    placeholderText={'Search for bank'}
                    leftIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralSearch height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}/>}
                    separatorLine={true}
                    textButton={false}
                    helperTextMode={false}
                    helperText={'Helper Text'} />
                </>
              )}
              {selectedVal.key == 3 && (
                <View style={{ marginTop: 30 }}>
                  <IMFloatTextFields
                    enabled={true}
                    label={'Input text'}
                    rightIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}/>}
                    leftIcon={true}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    separatorLine={true}
                    outline={true}
                    isError={false}
                    errorIcon={<ICExtraSuccess />}
                    textButton={true}
                    helperTextMode={true}
                  />
                  <IMFloatTextFields
                    enabled={true}
                    label={'Input text'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                    leftIcon={true}
                    searchValue={searchData}
                    isPlaceholderDisplayOnFocus={false}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                    separatorLine={true}
                    outline={true}
                    isError={true}
                    errorIcon={<ICGeneralNotifyAltRed />}
                    textButton={true}
                    helperTextMode={true}
                  />
                  <IMFloatTextFields
                    key={key}
                    enabled={true}
                    searchValue={searchData}
                    defaultValue={searchText}
                    label={'Label'}
                    isPlaceholderDisplayOnFocus={false}
                    placeholderText='PlaceHolder Text'
                    rightIcon={true}
                    leftIcon={true}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    textButton={true}
                    helperTextMode={true}
                    customImageTextStyle={styles.textIconStyle}
                  />
                </View>
              )}
              {selectedVal.key == 4 && (
                <View style={{ marginTop: 30, gap:20 }}>

                  <IMTextFields
                    enabled={true}
                    label={'With helper text'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralCalender height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                    placeholderText={'Placeholder text'}
                    leftIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                    separatorLine={false}
                    textButton={false}
                    helperTextMode={true}
                    helperText={'Helper Text'}
                  />

                  <IMTextFields
                    enabled={true}
                    label={'Success'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    placeholderText={'Placeholder text'}
                    leftIcon={true}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />}
                    separatorLine={false}
                    outline={true}
                    isPlaceholderDisplayOnFocus={false}
                    isError={false}
                    errorIcon={<ICExtraSuccess />}
                    textButton={true}
                    helperTextMode={true}
                    helperText={'Help Text'}

                  />

                  <IMTextFields
                    enabled={true}
                    label={'Error'}
                    rightIcon={true}
                    rightIconImage={<ICGeneralChevronRight height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                    placeholderText={'Placeholder text'}
                    leftIcon={true}
                    isPlaceholderDisplayOnFocus={false}
                    searchValue={searchData}
                    leftIconImage={<ICGeneralRupee height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)}  />}
                    separatorLine={false}
                    outline={true}
                    isError={true}
                    errorIcon={<ICGeneralNotifyAltRed />}
                    textButton={true}
                    helperTextMode={true}
                    helperText={'Help Text'}
                  />


                </View>
              )}
              {selectedVal.key == 5 && (
                <View style={{ marginTop: 30 }}>
                  <IMSplitInputTextField
                    units={units}
                    onSelect={(val, title) => {
                      onSelectItem(val, title);
                    }}
                    isIcon={true}
                    isDayVisible={false}
                    isMonthVisible={false}
                    isYearVisible={false} />
                </View>

              )}
              {selectedVal.key == 6 && (
                <View style={{ marginTop: 30 }}>
                  <IMSplitInputTextField
                    onSelect={(val, title) => { onSelectItem(val, title); numberOfDays(selectedYear, selectedMonth, selectedDay); }}
                    units={unit}
                    isDayVisible={false}
                    isMonthVisible={false}
                    isYearVisible={false}
                    bottomContainer=
                    {
                      <View style={styles.dateView}>
                        <Text style={styles.daysDescription}>Your goal completes </Text>
                        <Text style={styles.days}>on </Text>
                        <Text style={styles.days}>{date}</Text>
                      </View>
                    }
                    dataViewStyle={styles.dataView}
                    dataSeperatorLineStyle={{ left: actuatedNormalizeWidth(50) }}
                    isIcon={false}
                  />
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </>
  );
};

export default TextFieldDemo;
