import React, { useEffect, useState } from 'react';
import { BackHandler, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import {
  IMProgressTracker,
  IMGeneralTracker,
  IMVerticalProgressTracker,
  IMVerticalProgressTrackerWithCounter,
} from '../../../../dff_library/ui_components/components/ProgressTracker/index';
import { STRINGS } from './constants';
import {
  data,
  ProgressTracker,
  sampleData,
  verticalTrackerData,
  statusTitleData,
  originalData,
  datawith2Items,
  datawith3Items,
  progressTypes,
} from './json';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { ICComponentDrawerSuccess } from '../../../../dff_library/ui_components/atoms/icons';
import { styles } from './styles';
import {
  IMAccordions,
  IMDropdown,
} from '../../../../dff_library/ui_components';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type Props = NativeStackScreenProps<RootStackParamList, 'ProgressTrackerDemo'>;

const ProgressTrackerDemo = ({ navigation }: Props) => {
  const [dropDownComponentType, setDropDownComponentType] = useState<any>(0);
  setDropDownComponentType;
  const [selectedItem, setSelectedItem] = useState<any>(ProgressTracker[0]);

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
    <View>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_progress} />

      <View style={styles.container}>
        <IMDropdown
          data={ProgressTracker}
          disable={false}
          dropdownWidth={actuatedNormalizeWidth(320)}
          dropdownType={DropdownType.SingleColumn}
          placeholderText={selectedItem.value}
          parentDropDownStyle={styles.mainDropDown}
          onSelect={selectedtem => {
            setSelectedItem(selectedtem);
          }}
        />
        {selectedItem.key === '1' && (
          <View>
            <IMGeneralTracker
              totalSteps={6}
              isdarkMode={true}
              mainContainerStyles={styles.generalMainContainer}
              isauto={false}
              isButton={true}
              buttonComponent={
                <Text style={styles.proceedButtonText}>
                  {STRINGS.btn_title}
                </Text>
              }
              ParentButtonStyle={styles.generalButton}
            />
          </View>
        )}
        {selectedItem.key === '2' && (
          <View style={styles.container}>
            <IMDropdown
              parentDropDownStyle={styles.subDropDown}
              dropdownWidth={actuatedNormalizeWidth(300)}
              disable={false}
              dropdownType={DropdownType.SingleColumn}
              placeholderText={'2 Items'}
              data={progressTypes}
              onSelect={(selectedItem, index) => {
                setDropDownComponentType(selectedItem.key);
              }}
            />
            {dropDownComponentType === 0 && (
              <IMProgressTracker
                data={datawith2Items}
                activeCircleStyle={styles.activeCircleStyle}
                disabledCircleStyle={styles.disabledCircleStyle}
                completedCircleStyle={
                  <ICComponentDrawerSuccess
                    height={styles.completedCircleStyle.height}
                    width={styles.completedCircleStyle.width}
                  />
                }
                buttonComponent={
                  <Text style={styles.proceedButtonText}>
                    {STRINGS.btn_title}
                  </Text>
                }
                lineStyle={styles.lineStyle}
                isMessage={true}
                popupText={STRINGS.popup_Movetext}
                popupFinishText={STRINGS.popup_finish}
                titleContainerStyle={styles.titleContainerStyle2}
                titleStyle={styles.titleStyle}
                buttonContainerStyle={styles.buttonContainerStyle}
                parentContainerStyle={styles.generalMainContainer}
              />
            )}
            {dropDownComponentType === 1 && (
              <IMProgressTracker
                data={datawith3Items}
                activeCircleStyle={styles.activeCircleStyle}
                disabledCircleStyle={styles.disabledCircleStyle}
                completedCircleStyle={
                  <ICComponentDrawerSuccess
                    height={styles.completedCircleStyle.height}
                    width={styles.completedCircleStyle.width}
                  />
                }
                buttonComponent={
                  <Text style={styles.proceedButtonText}>
                    {STRINGS.btn_title}
                  </Text>
                }
                lineStyle={styles.lineStyle3Items}
                isMessage={true}
                popupText={STRINGS.popup_Movetext}
                titleContainerStyle={styles.titleContainerStyle}
                titleStyle={styles.titleStyle}
                popupFinishText={STRINGS.popup_finish}
                buttonContainerStyle={styles.buttonContainerStyle}
                parentContainerStyle={styles.generalMainContainer}
              />
            )}
            {dropDownComponentType === 2 && (
              <IMProgressTracker
                data={data}
                activeCircleStyle={styles.activeCircleStyle}
                disabledCircleStyle={styles.disabledCircleStyle}
                completedCircleStyle={
                  <ICComponentDrawerSuccess
                    height={styles.completedCircleStyle.height}
                    width={styles.completedCircleStyle.width}
                  />
                }
                buttonComponent={
                  <Text style={styles.proceedButtonText}>
                    {STRINGS.btn_title}
                  </Text>
                }
                lineStyle={styles.lineStyle4Items}
                isMessage={true}
                popupText={STRINGS.popup_Movetext}
                popupFinishText={STRINGS.popup_finish}
                titleContainerStyle={styles.titleContainerStyle}
                titleStyle={styles.titleStyle}
                buttonContainerStyle={styles.buttonContainerStyle}
                parentContainerStyle={styles.generalMainContainer}
              />
            )}
          </View>
        )}
        {selectedItem.key === '3' && (
          <IMVerticalProgressTracker
            data={originalData}
            statusTitles={statusTitleData}
            mainContainerStyle={styles.vericalMainContainer}
            itemSeparatorStyle={styles.itemSeperatorStyle}
          />
        )}
        {selectedItem.key === '4' && (
            <IMVerticalProgressTrackerWithCounter
              data={verticalTrackerData}
              childProp={
                <IMAccordions
                  isFlatlistAccordian={false}
                  items={sampleData}
                  isWithoutIcon={false}
                  isHighlighted={true}
                  textHighlightString="Manage"
                  toggleFunc={(_key, _index) => {}}
                  contentItemTapFunction={_val => {}}
                  selectedparentstyle={styles.accordianStyle}
                  unselectedparentstyle={styles.accordianStyle}
                />
              }
            />
        )}
      </View>
    </View>
  );
};

export default ProgressTrackerDemo;
