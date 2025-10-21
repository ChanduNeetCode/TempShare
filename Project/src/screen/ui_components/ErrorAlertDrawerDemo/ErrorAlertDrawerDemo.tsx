import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  BackHandler,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import { STRINGS } from './constants';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { RootStackParamList } from '../../../routes/RootStackParams';

import { IMErrorAlertDrawer } from '../../../../dff_library/ui_components/components/ErrorAlertDrawer';
import {
  ICGeneralAlertOrange,
  ICGeneralClose,
  ICGeneralNotify,
  ICGeneralRecurringMandate,
} from '../../../../dff_library/ui_components/atoms/icons';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components//utils/utility';
type Props = NativeStackScreenProps<RootStackParamList, 'ErrorAlertDrawerDemo'>;

const ErrorAlertDrawerDemo = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleChipPress = (str: string) => {
    Alert.alert('Error And Alert Drawer', str);
  };

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
        title={STRINGS.str_erroralertdrawer}
      />
      <View style={styles.parentViewStyle}>
        <Text style={styles.titleStyle}>{STRINGS.str_erroralertdrawer}</Text>

        <IMErrorAlertDrawer
          title={STRINGS.str_title}
          description={STRINGS.str_description}
          isVisible={modalVisible}
          closeModal={(value: boolean) => {
            setModalVisible(false);
          }}
          errorIcon={<ICGeneralNotify style={{ width: 32, height: 32 }} />}
          closeIcon={
            <>
              <Pressable onPress={closeModal}>
                <View style={styles.closeIconStyle}>
                  <ICGeneralClose />
                </View>
              </Pressable>
            </>
          }
          buttonProps={
            <>
              <View style={styles.buttonViewStyle}>
                <View style={styles.buttonStyle}>
                  <TouchableOpacity onPress={() => handleChipPress('Cancel')}>
                    <Text style={styles.cancelTextStyle}>
                      {STRINGS.str_cancel}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => handleChipPress('Accept')}>
                  <View style={styles.activeButtonView}>
                    <Text style={styles.activeButtonText}>
                      {STRINGS.tr_accept}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          }
          childProps={
            <>
              <View style={styles.childMainViewStyle}>
                <View style={styles.childViewStyle}>
                  <View style={styles.iconViewStyle}>
                    <ICGeneralRecurringMandate height={20} width={20} />
                  </View>
                  <View style={{ left: actuatedNormalizeWidth(10) }}>
                    <Text style={styles.leftTextStyle}>Netflix India Ltd</Text>
                    <Text style={styles.leftDescriptionstyle}>
                      netflixindia@icici
                    </Text>
                  </View>
                  <View style={{ left: actuatedNormalizeWidth(90) }}>
                    <Text style={styles.rightTextStyle}>₹ 200/mo</Text>
                    <Text style={styles.rightDescriptionstyle}>
                      12 Jun, ‘22
                    </Text>
                  </View>
                </View>
                <View style={styles.secondMainViewStyle}>
                  <View style={styles.secondViewStyle}>
                    <View style={styles.secondIconStyle}>
                      <ICGeneralAlertOrange />
                    </View>
                    <Text style={styles.balanceStyle}>
                      Insufficient balance
                    </Text>
                    <View style={{ left: actuatedNormalizeWidth(90) }}>
                      <Text style={styles.showBalanceStyle}>Show balance</Text>
                      <View style={styles.underLineStyle}></View>
                    </View>
                  </View>
                </View>
              </View>
            </>
          }
        />
      </View>
    </>
  );
};

export default ErrorAlertDrawerDemo;
