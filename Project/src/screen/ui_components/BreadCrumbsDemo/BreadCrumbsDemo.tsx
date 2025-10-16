import React, { useEffect,useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../utils/HeaderComponent';
import { IMBreadCrumbs } from '../../../../dff_library/ui_components/components/BreadCrumbs';
import { RootStackParamList } from '../../../routes/RootStackParams';
import { STRINGS } from './constants';
import styles from './styles';
import { listData } from './json';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';

type Props = NativeStackScreenProps<RootStackParamList, 'BreadCrumbsDemo'>;

const BreadCrumbsDemo = ({ navigation }: Props) => {
  
  const BreadCrumbs = [
    { key: 1, value: 'Default' },
    { key: 2, value: 'State' },
  ];

  const [selectedVal, setSelectedVal] = useState<any>(BreadCrumbs[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      <View style={{marginTop:20,alignItems:'center'}}>
      <IMDropdown
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.Wide}
        data={BreadCrumbs}
        onSelect={(selectedItem) => {
          setSelectedVal(selectedItem);
        }}
        placeholderText={BreadCrumbs[0].value}
      />
      </View>
      {selectedVal.key == 1 && (
      <View style={styles.parentViewStyle}>
        <IMBreadCrumbs
        data={listData}
        onSelect={index => {
          setSelectedIndex(index);
        }}
        selectedIndex={selectedIndex}
        componentContainerStyle={{marginTop:20}}
        />
        </View>
      )}
        {selectedVal.key == 2 && (
      <View style={styles.parentViewStyle}>
        <IMBreadCrumbs
        data={listData}
        onSelect={index => {
          setSelectedIndex(index);
        }}
        selectedIndex={selectedIndex}
        componentContainerStyle={{marginTop:20}}
        />
        </View>
      )}
    </>
  );
};

export default BreadCrumbsDemo;
