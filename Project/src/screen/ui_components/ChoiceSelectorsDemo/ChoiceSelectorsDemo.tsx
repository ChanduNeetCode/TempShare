import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { STRINGS } from './constants';
import HeaderComponent from '../../../utils/HeaderComponent';
import { listData ,isolatedData} from './json';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { IMChoiceSelectors } from '../../../../dff_library/ui_components/components/ChoiceSelectors';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type Props = NativeStackScreenProps<RootStackParamList, 'ChoiceSelectorsDemo'>;

const dropDownList = [
  { key: '1', value: 'Contained Single Choice Selector' },
  { key: '2', value: 'Contained Multiple Choice Selector' },
  { key: '3', value: 'Isolated Single Choice Selector' },
  { key: '4', value: 'Isolated Multiple Choice Selector' },
];
const ChoiceSelectorsDemo = ({ navigation }: Props) => {
  const [selectedVal, setSelectedVal] = useState<any>(dropDownList[0]);

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

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent
        navigation={navigation}
        title={STRINGS.str_ChoiceSelectors}
      />

      <View style={styles.parentViewStyle}>
        <IMDropdown
         
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          dropdownType={DropdownType.Wide}
          data={dropDownList}
          onSelect={(selectedItem, index) => {
            setSelectedVal(selectedItem);
          }}
          placeholderText={dropDownList[0].value}
        />
        <View style={styles.choiceHeightStyle}>
          {selectedVal.key == 1 && (
            <IMChoiceSelectors
              listData={listData}
              isMultipleSelect={false}
              selectorType="Contained"
              onPressItem={(result)=>{
                
              }}  
            />
          )}
          {selectedVal.key == 2 && (
            <IMChoiceSelectors
              listData={listData}
              isMultipleSelect={true}
              selectorType="Contained"
              onPressItem={(result)=>{
                
              }} 
            />
          )}
          {selectedVal.key == 3 && (
            <IMChoiceSelectors
              isolatedList={isolatedData}
              isMultipleSelect={false}
              selectorType="Isolated"
              containerStyle={{ borderRadius: 16 }}
              cardHeight={80}
              onPressItem={(result)=>{
              
              }} 
            />
          )}
           {selectedVal.key == 4 && (
            <IMChoiceSelectors
              isolatedList={isolatedData}
              isMultipleSelect={true}
              selectorType="Isolated"
              containerStyle={{ borderRadius: 16 }}
              cardHeight={80}
              onPressItem={(result)=>{
               
              }} 
            />
          )}
        </View>
      </View>
    </>
  );
};

export default ChoiceSelectorsDemo;
