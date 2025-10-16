import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import { STRINGS } from './constants';
import styles from './styles';
import {
  SingleColumn,
  customJson,
} from './json';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';

type Props = NativeStackScreenProps<RootStackParamList, 'DropdownDemo'>;

const DropdownDemo = ({ navigation }: Props) => {
  const Dropdown = [
    { key: 1, value: 'Short' },
    { key: 2, value: 'Wide' },
    { key: 3, value: 'Wide_ALT' },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(Dropdown[0]);

  /*  When we require choose option in dropdown
   const index = customJson.findIndex(x => x.key == 'Choose');
 
   if (index === -1) {
     const newElement = {
       key: 'Choose',
       value: 'Choose',
     };
     customJson.splice(0, 0, newElement);
   }
 */
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
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
    <View style={styles.mainContainer}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent navigation={navigation} title={STRINGS.str_dropDown} />


      <View style={styles.dropdownContainerStyle}>
        <IMDropdown
          disable={false}
          dropdownType={DropdownType.Wide}
          data={Dropdown}

          placeholderText={Dropdown[0].value}
          onSelect={(selectedItem) => {
            setSelectedVal(selectedItem);
          }}
        />
      </View>

      {selectedVal.key == 1 && <View style={styles.parentViewStyle}>

        <IMDropdown
          disable={false}
          dropdownType={DropdownType.FLoatTextfield}
          data={SingleColumn}
          label={"default"}
          labelStyle={{}}
          
          onSelect={(_selectedItem, _index) => {
          }}
          placeholderText="Select"
        />
      </View>}
      {selectedVal.key == 2 && <View style={styles.parentViewStyle}>

        <IMDropdown
          disable={false}
          dropdownType={DropdownType.Wide}
          data={SingleColumn}
          onSelect={(_selectedItem, _index) => {
          }}
          placeholderText="Select"

        />
      </View>}
      {selectedVal.key == 3 && <View style={styles.parentViewStyle}>

        <IMDropdown
          placeholderText="Select"
          disable={false}
          dropdownType={DropdownType.ALT}
          data={customJson}
          onSelect={(_selectedItem, _index) => {
          }}
        />
      </View>}

      {/* <View style={styles.parentViewStyle}>
          <Text style={styles.titleStyle}>
            {STRINGS.str_floatTextField_dropDown}
          </Text>
          <IMDropdown
           
            disable={false}
            dropdownType={DropdownType.FLoatTextfield}
            data={countries1}
            onSelect={(selectedItem, index) => {
            }}
            label={'Countries'}
            
          />
        </View> */}





      {/* Choose EMI tenure  Companent USB 368 row-9 Loans_DFF*/}

      {/* <View style={styles.parentViewStyleChooseEMITenure}>
          <Text style={styles.titleStyleChooseEMITenure}>
            {STRINGS.str_choose_emi_tenure}
          </Text>
          <IMDropdown
            dropdownButtonStyle={styles.dropdownButtonStylechooseEMITenure}
            dropdownButtonInternalStyle={styles.dropdownButtonInternalStyle}
            dropdownRowStyle={styles.dropdownRowStyle}
            dropdownRowTextStyle={styles.dropdownRowTextStyle}
            flatListRowContainer={styles.flatListRowContainer}
            flatListStyle={styles.flatListStyle}
            headerStyle={styles.headerStyle}
            dropdownWidth={156}
            disable={false}
            dropdownType={DropdownType.SingleColumn}
            data={customJsonChooseEMITenure}
            onSelect={(selectedItem, indexChooseEMITenure) => {
            }}
          />
        </View> */}

      {/* USB_378_Loans_Gold Loan Renewal row-16 Loans_DFF*/}

      {/* <View style={styles.parentViewStyleLoansGold}>
          <Text style={styles.labelContainerLonesGold}>
            {STRINGS.str_pay_dues_from_account}
          </Text>
          <IMDropdown
            dropdownButtonStyle={styles.dropdownButtonStyle}
            dropdownButtonInternalStyle={styles.dropdownButtonInternalStyle}
            dropdownRowStyle={styles.dropdownRowStyle}
            dropdownRowTextStyle={styles.dropdownRowTextStyle}
            flatListRowContainer={styles.flatListRowContainer}
            flatListStyle={styles.flatListStyle}
            headerStyle={styles.headerStyle}
            numberOfLines={1}
            dropdownWidth={312}
            rightSideContainer={
              <View style={styles.svgStyle}>{<ICGeneralChevronDown />}</View>
            }
            disable={false}
            dropdownType={DropdownType.SingleColumn}
            data={customJsonLoansGold}
            onSelect={(selectedItem, indexChooseLoansGold) => {
            }}
          />
        </View> */}

      {/* USB_380_Loans_Closed Home Loan Services row-5 Loans_DFF*/}

      {/* <View style={styles.parentViewStyleLoansClosedHomeLoan}>
          <Text style={styles.labelContainerLoansClosedHomeLoan}>
            {STRINGS.str_choose_financial_year}
          </Text>
          <IMDropdown
            dropdownButtonStyle={styles.dropdownButtonStyle}
            dropdownButtonInternalStyle={styles.dropdownButtonInternalStyle}
            dropdownRowStyle={styles.dropdownRowStyle}
            dropdownRowTextStyle={styles.dropdownRowTextStyle}
            flatListRowContainer={styles.flatListRowContainer}
            flatListStyle={styles.flatListStyle}
            headerStyle={styles.headerStyle}
            leftSideContainer={
              <Text style={styles.leftSideContainer}>From : </Text>
            }
            numberOfLines={4}
            dropdownWidth={328}
            rightSideContainer={
              <View style={styles.svgStyle}>{<ICGeneralChevronDown />}</View>
            }
            disable={false}
            dropdownType={DropdownType.SingleColumn}
            data={customJsonLoansClosedHomeLoanServices}
            onSelect={selectedItem => {
            }}
          />
        </View> */}

    </View>
  );
};

export default DropdownDemo;
