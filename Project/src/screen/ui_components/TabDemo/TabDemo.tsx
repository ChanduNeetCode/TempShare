import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { SceneMap } from 'react-native-tab-view';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import SampleScreenOne from './SampleScreenOne';
import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';
import {
  CheckboxChecked,
} from '../../../../dff_library/ui_components/atoms/icons';
import IMTabBar from '../../../../dff_library//ui_components/components/TabBar/IMTabBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import styles from './styles';
import SampleScreenFour from './SampleScreenFour';
import { ICBankLogo } from '../../../../dff_library/ui_components/atoms/icons';

type Props = NativeStackScreenProps<RootStackParamList, 'TabDemo'>;

const TabDemo = ({ navigation }: Props) => {

  const [routesBaseline] = useState([
    {
      key: 'first',
      title: 'Profile',
      enabled: true,
    },
    {
      key: 'second',
      title: 'Dashboard',
      enabled: true,
    },
  ]);

  const [routesWithLogo] = useState([
    {
      key: 'first',
      title: 'Profile',
      enabled: true,
    },
    {
      key: 'second',
      title: 'Dashboard',
      enabled: true,
      tabImage: <ICBankLogo height={24} width={24} />,
    },
  ]);


  const [routesOverflowTabs] = useState([
    {
      key: 'first',
      title: 'Profile',
      enabled: true,
    },
    {
      key: 'second',
      title: 'Dashboard',
      enabled: true,
    },
    {
      key: 'third',
      title: 'Sample1',
      enabled: true,
    },
    {
      key: 'fourth',
      title: 'Sample2',
      enabled: true,
    },
    {
      key: 'fifth',
      title: 'Sample3',
      enabled: true,
    },
  ]);

  const [routesDisableTab] = useState([
    {
      key: 'first',
      title: 'Profile',
      enabled: true,
    },
    {
      key: 'second',
      title: 'Dashboard',
      enabled: false,
    },
  ]);

  const tabImageStyle: ViewStyle = {
    height: actuatedNormalizeHeight(24),
    width: actuatedNormalizeWidth(24),
    marginTop: actuatedNormalizeHeight(3),
    marginLeft: actuatedNormalizeWidth(9),
    alignSelf: 'center',
  };

  const renderScene = SceneMap({
    first: SampleScreenOne,
    second: DashboardScreen,
    third: ProfileScreen,
    fourth: DashboardScreen,
    fifth: ProfileScreen,
    sixth: SampleScreenFour
  });

  const TabsAndSegmentControl = [
    { key: 1, value: 'Baseline', type: 'Baseline' },
    { key: 2, value: 'With logo', type: 'With logo' },
    { key: 3, value: 'Overflow tabs', type: 'Overflow tabs' },
    { key: 4, value: 'With Disable tab', type: 'With Disable tab' },
  ];

  const [selectedVal, setSelectedVal] = useState<any>(TabsAndSegmentControl[0]);

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={'Tabs demo'} />

      <View style={{ backgroundColor: colors.White, flex: 1 }}>
        <View style={{ paddingTop: actuatedNormalizeHeight(30), alignItems: 'center' }}>
          <IMDropdown
            parentDropDownStyle={{ alignItems: 'center' }}
            dropdownWidth={actuatedNormalizeWidth(320)}
            disable={false}
            dropdownType={DropdownType.SingleColumn}
            placeholderText={TabsAndSegmentControl[0].value}
            data={TabsAndSegmentControl}
            onSelect={(selectedItem) => {
              setSelectedVal(selectedItem);
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          {selectedVal.key == 1 && (
            <>
              <IMTabBar
                routes={routesBaseline}
                renderScene={renderScene}
                tabImageStyle={tabImageStyle}
              />
            </>
          )}
          {selectedVal.key == 2 && (
            <>
              <IMTabBar
                routes={routesWithLogo}
                renderScene={renderScene}
                tabImageStyle={tabImageStyle}
              />
            </>
          )}
          {selectedVal.key == 3 && (
            <>
              <IMTabBar
                routes={routesOverflowTabs}
                renderScene={renderScene}
                tabImageStyle={tabImageStyle}
              />
            </>
          )}
          {selectedVal.key == 4 && (
            <>
              <IMTabBar
                routes={routesDisableTab}
                renderScene={renderScene}
                tabImageStyle={tabImageStyle}
              />
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default TabDemo;
