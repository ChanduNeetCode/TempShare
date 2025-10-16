import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import { STRINGS } from './constants';
import {
  sampleDataForFullScreen,
  sampleDataMoreRows,
  sampleDataForBothTitlesHorizontalScroll,
  sampleDataForTitleBothSidesVerticalScroll,
} from './json';
import { DataTableTypes } from '../../../../dff_library/ui_components/components/DataTables/utility/enum';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import IMDataTables from '../../../../dff_library/ui_components/components/DataTables/IMDataTables';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import {
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

type Props = NativeStackScreenProps<RootStackParamList, 'DataTablesDemo'>;

const dropdDownList = [
  {
    key: 1,
    value: STRINGS.str_titleFullScreen,
    titleDataType: STRINGS.str_dataTableFullScreen,
    componentType: DataTableTypes.DataTableFullScreen,
    componentData: sampleDataForFullScreen,
  },
  {
    key: 1,
    value: STRINGS.str_titleWithMoreRows,
    titleDataType: STRINGS.str_dataTableWithMoreRows,
    componentType: DataTableTypes.DataTableWithMoreRows,
    componentData: sampleDataMoreRows,
  },
  {
    key: 1,
    value: STRINGS.str_titleOnLeft,
    titleDataType: STRINGS.str_dataTabletitleOnLeft,
    componentType: DataTableTypes.TitleOnLeft,
    componentData: sampleDataMoreRows,
  },
  {
    key: 1,
    value: STRINGS.str_titleOnBothSidesHorizontalScroll,
    titleDataType: STRINGS.str_dataTabletitleOnBothSides1,
    componentType: DataTableTypes.TitleOnBothSidesHorizontalScroll,
    componentData: sampleDataForBothTitlesHorizontalScroll,
  },
  {
    key: 1,
    value: STRINGS.str_titleOnBothSidesVerticalScroll,
    titleDataType: STRINGS.str_dataTabletitleOnBothSides2,
    componentType: DataTableTypes.TitleOnBothSidesVerticalScroll,
    componentData: sampleDataForTitleBothSidesVerticalScroll,
  },
];
const DataTablesDemo = ({ navigation }: Props) => {
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
  const [selectedVal, setSelectedVal] = useState<any>(dropdDownList[0]);

  return (
    <View style={{ flex: 1 }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      <View style={styles.buttonContainerStyle}>
        <IMDropdown
          parentDropDownStyle={{ alignItems: 'center', marginTop: 10 }}
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          placeholderText={dropdDownList[0].value}
          data={dropdDownList}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
          }}
        />
      </View>
      <View style={styles.parentViewStyle}>
        <IMDataTables
          data={selectedVal.componentData}
          dataTableType={selectedVal.componentType}
          numberOfColumns={selectedVal.componentData.length}
          isShowHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DataTablesDemo;
