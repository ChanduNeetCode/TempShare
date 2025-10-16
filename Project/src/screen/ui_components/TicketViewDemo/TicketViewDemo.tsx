import React, { useEffect } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { STRINGS } from './constants';
import { IMTicketView } from '../../../../dff_library/ui_components/components/TicketView';
import useStyles from './styles';
import typography from '../../../../dff_library/ui_components/atoms/typography';

type Props = NativeStackScreenProps<RootStackParamList, 'TicketViewDemo'>;

const TicketViewDemo = ({ navigation }: Props) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  const styles = useStyles();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const paymentTopContainer = () => {
    return (
      <View>
        <View style={styles.payingAmountContainStyle}>
          <Text style={styles.payingTextStyle}>{STRINGS.str_payingText}</Text>
        </View>
        <View style={styles.amountContainerStyle}>
          <Text style={[styles.rupeeTextStyle]}>{STRINGS.str_rupee}</Text>
          <Text style={[styles.amountTextStyle]}> {STRINGS.str_rupeeText}</Text>
        </View>
      </View>
    );
  };
  const paymentMiddleContainer = () => {
    return (
      <View style={[styles.middleContainerStyle]}>
        <Text style={[styles.gpayTextStyle]}>{STRINGS.str_gpayText}</Text>
        <Text style={[styles.dateTextStyle]}>{STRINGS.str_date}</Text>
        <Text style={[styles.gpayTextStyle]}>{STRINGS.str_dateText}</Text>
      </View>
    );
  };
  const kycTopConatiner = () => {
    return (
      <View>
        <View style={[styles.kycTopStyle]}>
          <Text style={[styles.kycTextStyle]}>{STRINGS.str_kycUpdateText}</Text>
        </View>
        <View style={[styles.panDetailsStyle]}>
          <Text style={[styles.labelCapitalRegular]}>
            {STRINGS.str_panDetails}
          </Text>
          <Text
            style={[
              typography.BodySemiBold3,
              { marginTop: 10, color: colors.NeutralGrey140 },
            ]}>
            {STRINGS.str_panNumber}
          </Text>
        </View>
      </View>
    );
  };

  const kycmiddleConatiner = () => {
    return (
      <>
        <View style={[styles.detailsStyle]}>
          <Text style={[styles.personalTextStyle]}>
            {STRINGS.str_personalDetails}
          </Text>
        </View>
        <View style={[styles.addressStyle]}>
          <Text style={[styles.personalAddressStyle]}>
            {STRINGS.str_personName}
          </Text>
          <Text style={[styles.personalAddressStyle]}>
            {' '}
            {STRINGS.str_personalPhone}
          </Text>
        </View>
      </>
    );
  };
  const kycbottomConatiner = () => {
    return (
      <>
        <View style={[styles.detailsStyle]}>
          <Text style={[styles.personalTextStyle]}>
            {STRINGS.str_addressDetails}
          </Text>
        </View>
        <View style={[styles.addressStyle]}>
          <Text
            style={[typography.BodyRegular3, { color: colors.NeutralGrey140 }]}>
            {STRINGS.str_addressStreet}
          </Text>
          <Text
            style={[typography.BodyRegular3, { color: colors.NeutralGrey140 }]}>
            {STRINGS.str_addressCity}
          </Text>
        </View>
      </>
    );
  };
  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_ticketView} />
      <View style={[styles.ticketViewSeparatorStyle]}>
        <IMTicketView
          topContainer={paymentTopContainer}
          middleContainer={paymentMiddleContainer}
        />

        <IMTicketView
          containerStyle={styles.containerStyle}
          topContainer={kycTopConatiner}
          middleContainer={kycmiddleConatiner}
          bottomContainer={kycbottomConatiner}
        />
      </View>
    </>
  );
};

export default TicketViewDemo;
