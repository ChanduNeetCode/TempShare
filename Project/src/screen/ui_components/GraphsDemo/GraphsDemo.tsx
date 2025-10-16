import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions, SafeAreaView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { actuatedNormalizeWidth } from '../../../../src/utils/utility';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import IMPieChart from '../../../../dff_library/ui_components/components/Graphs/IMPieChart';
import IMLineChart from '../../../../dff_library/ui_components/components/Graphs/IMLineChart';
import IMBarChart from '../../../../dff_library/ui_components/components/Graphs/IMBarChart';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { piedata, LineMarkData, BarChartdata, BarChartColors, values } from './json';
import styles from './styles';
import { DropdownType, STRINGS } from './constants';
import { IMDropdown } from '../../../../dff_library/ui_components';
import { actuatedNormalizeHeight } from '../../../../dff_library/ui_components/utils/utility';


type Props = NativeStackScreenProps<RootStackParamList, 'GraphsDemo'>;

const GraphsDemo = ({ navigation }: Props) => {
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

  const dropDownList = [
    { key: '1', value: STRINGS.str_Default_PieChart },
    { key: '2', value: STRINGS.str_Touchable_PieChart },
    { key: '3', value: STRINGS.str_Default_Line_Chart },
    { key: '4', value: STRINGS.str_Default_Line_Area_Chart },
    // { key: '5', value: STRINGS.str_Bar_Chart },
  ];

  const [selectedDropDownItem, setselectedDropDownItem] = useState(dropDownList[0].value)

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_graphs} />
      <View
        style={styles.container}>
        <View style={styles.subContainer}>
          <IMDropdown
            dropdownWidth={actuatedNormalizeWidth(328)}
            disable={false}
            dropdownType={DropdownType.SingleColumn}
            data={dropDownList}
            placeholderText={selectedDropDownItem}
            label={selectedDropDownItem}
            onSelect={(selectedItem, index) => {
              setselectedDropDownItem(dropDownList[index].value)
            }}
          />
        </View>
        <View style={styles.parentViewStyle}>
          {selectedDropDownItem === STRINGS.str_Default_PieChart &&
            <IMPieChart
              data={piedata}
              isTouchable={false}
              onPress={(total, angles, index) => {
              }}
            />}
          {selectedDropDownItem === STRINGS.str_Touchable_PieChart &&
            <IMPieChart
              data={piedata}
              isTouchable={true}
              onPress={(total, angles, index) => {
              }}
              numberOfLines={3}
            />
          }
          {selectedDropDownItem === STRINGS.str_Default_Line_Area_Chart &&
            <IMLineChart
              LineMarkData={LineMarkData}
              isLineAreaRequired={true}
              width={Dimensions.get('window').width}
              height={actuatedNormalizeHeight(200)}
              horizontalValues={values}
              colorValue={colors.PrimaryOrange100}
              selectedValue={value => {
              }}
              strokeWidth={2}
              startOpacity={0.8}
              endOpacity={0.1}
              label={"124"}
            />
          }
          {selectedDropDownItem === STRINGS.str_Default_Line_Chart &&
            <IMLineChart
              LineMarkData={LineMarkData}
              isLineAreaRequired={false}
              width={Dimensions.get('window').width}
              colorValue='rgba(243, 151, 93, 1)'
              horizontalValues={values}
              height={actuatedNormalizeHeight(200)}
              selectedValue={value => {

              }}
              strokeWidth={4}
              label={"124"}
            />
          }
          {selectedDropDownItem === STRINGS.str_Bar_Chart &&
            <IMBarChart
              totalValue={100}
              data={BarChartdata}
              width={Dimensions.get('window').width}
              height={300}
              value={'₹1,000'}
              colorSet={BarChartColors}
            />
          }
        </View>
      </View>
    </>
  );
};

export default GraphsDemo;
