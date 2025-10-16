import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  ICGeneralWhiteQuery,
  ICGeneralWhiteShare,
  ICPaymentQuery,
} from '../../../../dff_library/ui_components/atoms/icons';
import IMThankYouErrorPage from '../../../../dff_library/ui_components/components/ThankYouErrorPage/IMThankYouErrorPage';
import { paymentStatusInfo } from '../../../../dff_library/ui_components/components/ThankYouErrorPage/IMThankYouErrorPage/types';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { typeOfThankYouAndError } from './json';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ThankYouErrorPageDemo'
>;

const IMThankYouErrorPageDemo = ({ navigation }: Props) => {

  const [selectedItem, setSelectedItem] = useState<any>(
    typeOfThankYouAndError[0],
  );

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
        title={STRINGS.str_thankYouErrorPage}
      />
      <ScrollView>
        <View style={styles.parentViewStyle}>
          <View style={styles.parentContainer}>
            <IMDropdown
              dropdownWidth={actuatedNormalizeWidth(320)}
              disable={false}
              dropdownType={DropdownType.SingleColumn}
              data={typeOfThankYouAndError}
              placeholderText={'Success'}
              onSelect={selectedItem => {
                setSelectedItem(selectedItem);
              }}
            />
          </View>
          {selectedItem.key === '1' && (
            <IMThankYouErrorPage
              paymentStatus={paymentStatusInfo.success}
              buttonLeftIcon={
                <ICGeneralWhiteShare
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              buttonRightIcon={
                <ICGeneralWhiteQuery
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              circleImageStyleProp={styles.circleImage}
              buttonLeftTitle="Share"
              buttonRightTitle="Receipt"
              enablePaymentStatusIcon={true}
              enableZigzagPattern={true}
              buttonTitleLeftColor={colors.White}
              buttonTitleRightColor={colors.White}
              >
              <Text style={styles.textStyle}>{STRINGS.str_SuccessMessage}</Text>
            </IMThankYouErrorPage>
          )}
          {selectedItem.key === '2' && (
            <IMThankYouErrorPage
              paymentStatus={paymentStatusInfo.pending}
              buttonLeftIcon={
                <ICPaymentQuery
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              buttonRightIcon={
                <ICGeneralWhiteShare
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              circleImageStyleProp={styles.circleImage}
              buttonLeftTitle="Raise query"
              buttonRightTitle="Share"
              enablePaymentStatusIcon={true}
              enableZigzagPattern={true}
              buttonTitleLeftColor={colors.White}
              buttonTitleRightColor={colors.White}
              >
              <Text style={styles.textStyle}>{STRINGS.str_PendingMessage}</Text>
            </IMThankYouErrorPage>
          )}
          {selectedItem.key === '3' && (
            <IMThankYouErrorPage
              paymentStatus={paymentStatusInfo.error}
              buttonLeftIcon={
                <ICPaymentQuery
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              buttonRightIcon={
                <ICGeneralWhiteShare
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              circleImageStyleProp={styles.circleImage}
              buttonLeftTitle="Raise query"
              buttonRightTitle="Share"
              enablePaymentStatusIcon={true}
              enableZigzagPattern={true}
              buttonTitleLeftColor={colors.White}
              buttonTitleRightColor={colors.White}
              buttonsBackgroundColor={colors.Error100}
             >
              <Text style={styles.textStyle}>{STRINGS.str_FailedMessage}</Text>
            </IMThankYouErrorPage>
          )}
          {selectedItem.key === '4' && (
            <IMThankYouErrorPage
              paymentStatus={paymentStatusInfo.error}
              buttonLeftIcon={
                <ICPaymentQuery
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              buttonRightIcon={
                <ICGeneralWhiteShare
                  height={styles.iconStyles.height}
                  width={styles.iconStyles.width}
                />
              }
              buttonLeftTitle="Raise query"
              buttonRightTitle="Share"
              enablePaymentStatusIcon={false}
              enableZigzagPattern={false}
              buttonTitleLeftColor={colors.White}
              buttonTitleRightColor={colors.White}
              buttonsBackgroundColor={colors.Error100}
             >
              <Text style={styles.textStyle}>{STRINGS.str_FailedMessage}</Text>
            </IMThankYouErrorPage>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default IMThankYouErrorPageDemo;
