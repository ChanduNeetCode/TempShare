import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { data, sampleData, dashboardData } from './json';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import {
  IMOverflowMenu,
  IMOverflowMenuDashBoard,
} from '../../../../dff_library/ui_components/components/OverflowMenu';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import styles from './styles';
import { STRINGS } from './constants';

type Props = NativeStackScreenProps<RootStackParamList, 'OverflowMenuDemo'>;

const OverflowMenuDemo = ({ navigation }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const menus = [
    { key: '1', value: 'OverFlow menu without contextual items' },
    { key: '2', value: 'OverFlow menu with contextual items' },
    { key: '3', value: 'OverFlow menu Dashboard' },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(menus[0]);

  useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible]);

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

  const renderView = () => {
    switch (selectedVal.key) {
      case '1':
        return (
          <>
            {isVisible && (
              <IMOverflowMenu
                list={data}
                logout={() => {
                  //Alert.alert('logout');
                }}
                onPressItem={key => {
                  // Alert.alert(key);
                }}
                onPressTtemCloseImage={() => setIsVisible(false)}
                showMenu={() => {
                  setIsVisible(false);
                }}
                blurAmount={2}
              />
            )}
          </>
        );
      case '2':
        return (
          <>
            {isVisible && (
              <IMOverflowMenu
                isWithContextualItems={true}
                mainContainerStyle={styles.mainContainerStyle}
                isSeparator={true}
                listData={sampleData}
                itemTextStyle={styles.itemTextStyle}
                list={data}
                logout={() => {
                  // Alert.alert('logout');
                }}
                leftIconViewStyle={styles.leftIconViewStyle}
                onPressItem={key => {
                  // Alert.alert(key);
                }}
                onPressTtemCloseImage={() => setIsVisible(false)}
                showMenu={() => {
                  setIsVisible(false);
                }}
                blurAmount={2}
              />
            )}
          </>
        );

      case '3':
        return (
          <>
            {isVisible && (
              <IMOverflowMenuDashBoard
                isWithContextualItems={false}
                list={dashboardData}
                profileId={<Text style={styles.text1}>UPI ID: <Text style={styles.text2}>988302221@icici</Text></Text>}
                logout={() => {
                  //Alert.alert('logout');
                }}
                onPressItem={key => {
                  // Alert.alert(key);
                }}
                onPressItemCloseImage={() => setIsVisible(false)}
                showMenu={() => {
                  setIsVisible(false);
                }}
                blurAmount={2}
              />
            )}
          </>
        );
    }
  };

  return (
    <>
      {!isVisible && (
        <>
          <CustomStatusBar
            gradientColorsArray={[
              colors.GradientOrangeStart,
              colors.GradientOrangeEnd,
            ]}
          />
          <HeaderComponent
            navigation={navigation}
            title={STRINGS.str_OverflowMenu}
          />
        </>
      )}
      <View style={styles.mainContainer}>
        <IMDropdown
          data={menus}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          dropdownWidth={actuatedNormalizeWidth(320)}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
            setIsVisible(true);
          }}
          placeholderText={menus[0].value}
        />
      </View>
      {renderView()}
    </>
  );
};

export default OverflowMenuDemo;
