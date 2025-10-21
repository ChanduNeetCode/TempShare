/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  IMCheckbox,
  IMultiSelectionCheckbox,
} from '../../../../dff_library/ui_components/components/Checkbox';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { sampleData } from './json';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import styles from './styles';
import { actuatedNormalizeHeight,actuatedNormalizeWidth } from '../../../../src/utils/utility';

type Props = NativeStackScreenProps<RootStackParamList, 'CheckboxDemo'>;

const CheckboxDemo = ({ navigation }: Props) => {
  const checkbox = [
    { key: 1, value: 'Single CheckBox' },
    { key: 2, value: 'Multi CheckBox' },
    { key: 3, value: 'States' },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(checkbox[0]);
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
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

  // const element = () => {
  //   return (
  //     <View>
  //       <Text>
  //         I have read the
  //         <Text style={{ color: 'red' }}> Declarations for KYC Update </Text>
  //         and agree to adhere to them.
  //       </Text>
  //     </View>
  //   );
  // };

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_checkbox} />
      <View style={{top:actuatedNormalizeHeight(20),alignSelf:"center"}}>
      <IMDropdown
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.SingleColumn}
        data={checkbox}
        onSelect={(selectedItem) => {
          setSelectedVal(selectedItem);
        }}
        placeholderText={checkbox[0].value}
      />
      </View>
      {selectedVal.key == 1 && (
        <View style={styles.viewStyle1}>
          <IMCheckbox
          title={'This will be the text box length'}
          isDisable={true}
          isLeft={true}
        />
        <IMCheckbox
          title={'This will be the text box length'}
          isLeft={true}
        />
        </View>
      )}
 {selectedVal.key == 2 && (
        <View style={styles.viewStyle1}>
          <IMultiSelectionCheckbox
          displayKey="name"
          uniqueKey="id"
          title={STRINGS.str_parentData}
          list={sampleData}
          isLeft={true}  
          containerStyle={styles.containerStyle}
        />
        </View>
      )}
       {selectedVal.key == 3 && (
        <View style={styles.viewStyle1}>
         <IMCheckbox
          title={'Disabled'}
          isLeft={true}
          isCheckboxDisabled={true}
        />
        <IMCheckbox
          title={'Normal'}
          isLeft={true}
        />
        <IMCheckbox
          title={'Active'}
          isLeft={true}
          isSelect={true}
        />
        </View>
      )}
    </>
  );
};

export default CheckboxDemo;
