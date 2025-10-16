import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';

import IMAccordions from '../../../../dff_library/ui_components/components/Accordions/IMAccordions';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import styles from './styles';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';

import { sampleData, sampleData2 } from './json';

const accordions = [
  { key: 1, value: 'With icon', type: 'Open' },
  { key: 2, value: 'Without icon (Card)', type: 'Open' },
  { key: 3, value: 'Without icon (List)', type: 'Default' },
];
type Props = NativeStackScreenProps<RootStackParamList, 'AccordionsDemo'>;
const AccordionsDemo = ({ navigation }: Props) => {
  const flatref = useRef(null);
  const [selectedVal, setSelectedVal] = useState<any>(accordions[0]);

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={'Accordions'} />
      <View style={{ backgroundColor: colors.White, flex: 1}}>
       <View style={{paddingTop:actuatedNormalizeHeight(30),alignItems:'center'}}>
        <IMDropdown
        parentDropDownStyle={{ alignItems: 'center' }}
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          placeholderText={accordions[0].value}
          data={accordions}
          onSelect={(selectedItem) => {
            setSelectedVal(selectedItem);
          }}
        />
        </View>
        <View style={{ padding: 10, flex: 1 }}>
          <View style={styles.parentViewStyle}>
            <Text style={[styles.titleStyle, typography.ButtonLarge]}>
              {selectedVal.type}
            </Text>
          </View>
          {selectedVal.key == 1 && (
            <>
            <IMAccordions
              isFlatlistAccordian={false}
              items={sampleData}
              refs={flatref}
              isWithoutIcon={false}
              isHighlighted={true}
              textHighlightString='Manage'
              toggleFunc={(_key, _index) => {
              }}
              contentItemTapFunction={_val => {
              }}
            />
            </>
          )}
          {selectedVal.key == 2 && (
            <IMAccordions
              isFlatlistAccordian={false}
              items={sampleData}
              isWithoutIcon={true}
              contentItemTapFunction={_val => {
              }}
              toggleFunc={_item => {
              }}
            />
          )}
          {selectedVal.key == 3 && (
            <IMAccordions
              isFlatlistAccordian={true}
              items={sampleData2}
              isWithoutIcon={true}
              contentItemTapFunction={val => {
              }}
              toggleFunc={item => {
              }}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default AccordionsDemo;