import React, { useEffect, useState } from 'react';
import { BackHandler, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMDisclaimerInformation } from '../../../../dff_library/ui_components/components/DisclaimerInformation';
import { DisclaimerEnumValues } from '../../../../dff_library/ui_components/components/DisclaimerInformation/utils/enum';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../dff_library/ui_components/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'DisclaimerInformationDemo'
>;
const dropDownList = [
  { key: 1, value: 'Disclaimers' },
  { key: 2, value: 'Dynamic information unit' },
];

const DisclaimerInformationDemo = ({ navigation }: Props) => {
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
        title={STRINGS.str_disclaimer_and_information}
      />
      <ScrollView style={{ flex: 1, backgroundColor: colors.White }}>
        <IMDropdown
          parentDropDownStyle={{
            alignItems: 'center',
            marginTop: actuatedNormalizeHeight(30),
          }}
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          data={dropDownList}
          onSelect={(selectedItem, _index) => {
            setSelectedVal(selectedItem);
          }}
          placeholderText={dropDownList[0].value}
        />
        {selectedVal.key == 1 && (
          <>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.Default}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.Default}
                message={STRINGS.str_default_message}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.DefaultOrange}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.DefaultOrange}
                message={STRINGS.str_default_orange_message}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.PreConfirmationSingle}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.PreConfirmationSingle}
                message={STRINGS.str_pre_confirmation_single_message}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.CustomIconMulti}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.CustomIconMulti}
                message={[
                  STRINGS.str_customIcon_multi_message1,
                  STRINGS.str_customIcon_multi_message2,
                ]}
                height={76}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.GeneralInformation}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.GeneralInformation}
                message={STRINGS.str_general_information_message}
                height={actuatedNormalizeHeight(72)}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.TipsSmall}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.TipsSmall}
                message={STRINGS.str_tips_small_message}
                height={actuatedNormalizeHeight(56)}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.TipsLarge}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.TipsLarge}
                message={STRINGS.str_tips_large_message}
                height={actuatedNormalizeHeight(84)}
                title={STRINGS.str_title}
                tipsLargeContainerStyleProps={styles.tipsLargeMarginContainer}
              />
            </View>
          </>
        )}
        {selectedVal.key == 2 && (
          <>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.Neutral}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.Neutral}
                message={STRINGS.str_neutral_message}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.PositiveInline}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.PositiveInline}
                message={STRINGS.str_positive_inline_message}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.PositiveSmall}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.PositiveSmall}
                message={STRINGS.str_positive_small_message}
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.PositiveLarge}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.PositiveLarge}
                message={
                  <Text>
                    {STRINGS.str_positive_large_message}
                    <Text style={styles.positiveLarge}>28%</Text>
                  </Text>
                }
              />
            </View>
            <View style={styles.parentViewStyle}>
              <Text style={styles.titleStyle}>
                {DisclaimerEnumValues.Warning}
              </Text>
              <IMDisclaimerInformation
                DisclaimerType={DisclaimerEnumValues.Warning}
                message={STRINGS.str_warning_message}
              />
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default DisclaimerInformationDemo;
