import React, { useEffect,useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import styles from './styles';
import { IMPagination } from '../../../../dff_library/ui_components/components/Pagination';
import {
  IMDropdown,
} from '../../../../dff_library/ui_components/components/index';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { ICChevronRight, ICGeneralChevronLeft } from '../../../../dff_library/ui_components/atoms/icons';


type Props = NativeStackScreenProps<RootStackParamList, 'PaginationDemo'>;

const PaginationDemo = ({ navigation }: Props) => {
  const badges = [
    { key: 1, value: 'Fixed' },
    { key: 2, value: 'OverFlow' },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(badges[0]);
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
      <HeaderComponent navigation={navigation} title={STRINGS.str_Pagination} />
      <View style={{top:actuatedNormalizeHeight(20),alignSelf:"center"}}>
      <IMDropdown
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        placeholderText={badges[0].value}
        dropdownType={DropdownType.Wide}
        data={badges}
        onSelect={(selectedItem) => {
          setSelectedVal(selectedItem);
        }}
      />
      </View>
      {selectedVal.key == 1 && (
         <View style={styles.parentViewStyle}>
         <IMPagination 
         pageCount={5} 
         onPressItem={(index)=>{
         
         }}
         leftImg={
          <ICGeneralChevronLeft
          height={35}
          width={35}
          
         />
         }
         rightImg={
          <ICChevronRight  height={35}
          width={35} />
         }
         />
       </View>
      )}
        {selectedVal.key == 2 && (
      <View style={styles.parentViewStyle}>
        <IMPagination
        pageCount={15}
         onPressItem={(index)=>{
          
        }}
        leftImg={
          <ICGeneralChevronLeft
          height={35}
          width={35}
          
         />
         }
         rightImg={
          <ICChevronRight  height={35}
          width={35} />
         }
        />
      </View>
        )}
     </View>
  );
};

export default PaginationDemo;
