import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { STRINGS } from './constants';
import {
  IMDismissibleInAppNotification,
  IMRegularInAppNotification,
  IMSeasonalInAppNotification,
} from '../../../../dff_library/ui_components/components/InAppNotification';
import { NotificationType } from '../../../../dff_library/ui_components/components/InAppNotification/types';
import styles from './styles';
import {
  ICClose,
  ICDiwaliIcon,
  ICGeneralDisabledErrorAlt,
} from '../../../../dff_library/ui_components/atoms/icons';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'InAppNotificationDemo'
>;

const InAppNotificationDemo = ({ navigation }: Props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
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
        title={STRINGS.str_inappnotification}
      />
      <View style={styles.parentViewStyle}>
        <Text style={styles.titleStyle}>{STRINGS.str_regular}</Text>
        <IMRegularInAppNotification
          leftIcon={<ICGeneralDisabledErrorAlt />}
          notificationType={NotificationType.Regular}
          showTitle="Show Notification"
          title={'New offers unlocked! Tap to learn more'}
        />
      </View>
      <View style={styles.parentViewStyle}>
        <Text style={styles.titleStyle}>{STRINGS.str_dismissible}</Text>
        <IMDismissibleInAppNotification
          title={'New offers available '}
          rightIcon={<ICClose />}
          showTitle="Show Notification Dismissible"
          notificationType={NotificationType.Dismissible}
        />
      </View>
      <View style={styles.parentViewStyle}>
        <Text style={styles.titleStyle}>{STRINGS.str_seasonal}</Text>
        <IMSeasonalInAppNotification
          notificationType={NotificationType.Seasonal}
          title="Happy Diwali 2022!"
          showTitle="Show Notification Seasonal"
          subTitle="Open your surprise gifts with just one tap!"
          leftIcon={<ICDiwaliIcon width={48} height={48} />}
          rightIcon={
            <View style={styles.rightSideIcon}>
              <Text
                style={styles.timeStyle}>
                {`${hours}:${minutes}:${seconds}`}
              </Text>
            </View>
          }
        />
      </View>
    </>
  );
};

export default InAppNotificationDemo;
