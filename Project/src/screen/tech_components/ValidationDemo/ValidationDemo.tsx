import React from 'react';
import { View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS } from './constants';
import styles from './styles';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { isValid_Bank_Acc_Number, validate_AmountLimit, isValid_Email, isValid_Mobile, validate_InputCharacter_Limit, isValid_Date, amount_hasTwoDecimal_Places, formatDate_DDMMMYY_DDMMM, indianNumberFormat } from "../../../../dff_library/techical_components/components/Validation/IMValidation/index";
import { IMPrimaryButton } from '../../../../dff_library/ui_components';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { typography } from '../../../../dff_library/ui_components/atoms';
import colors from '../../../../dff_library/ui_components/atoms/colors';


type Props = NativeStackScreenProps<RootStackParamList, 'ValidationDemo'>;

const ValidationDemo = ({ navigation }: Props) => {

  const accountNumber = '123456790'
  const email = 'abc@g.com'
  const mobileNumber = '9876543210'
  const characters = 'abcdefghijklmanopqrstuvwxyz'
  const charactersLimit = 30
  const amount = 1500
  const amountMIN = 1000
  const amountMAX = 5000
  const dateFormat = '12 july'

  return (
    <ScrollView>
      <CustomStatusBar gradientColorsArray={[colors.GradientOrangeStart, colors.GradientOrangeEnd]} />
      <HeaderComponent navigation={navigation} title={STRINGS.str_Validation} />

      <View style={styles.action}>
        <IMPrimaryButton
          titleRecv={STRINGS.str_AccPlaceholder}
          widthLarge={actuatedNormalizeWidth(328)}
          widthSmall={actuatedNormalizeWidth(156)}
          buttonStyle={[
            { backgroundColor: colors.PrimaryOrange100 },
          ]}
          styleText={[typography.ButtonLarge,{color: colors.White,
            fontWeight: '600',
            textAlign: 'center',}]}
          type={'large'}
          leftIcon={false}
          rightIcon={false}
          onPress={() => {
            const isValidAccount = isValid_Bank_Acc_Number(accountNumber)
          }}
        />

      </View>

      <View style={styles.action}>

        <IMPrimaryButton
          titleRecv={STRINGS.str_EmailPlaceholder}
          widthLarge={actuatedNormalizeWidth(328)}
          widthSmall={actuatedNormalizeWidth(156)}
          buttonStyle={[
            { backgroundColor: colors.PrimaryOrange100 },
          ]}
          styleText={[typography.ButtonLarge,{color: colors.White,
            fontWeight: '600',
            textAlign: 'center',}]}
          type={'large'}
          leftIcon={false}
          rightIcon={false}
          onPress={() => {
            const isValidEmail = isValid_Email(email)
          }}
        />

      </View>

      <View style={styles.action}>

        <IMPrimaryButton
          titleRecv={STRINGS.str_PhonePlaceholder}
          widthLarge={actuatedNormalizeWidth(328)}
          widthSmall={actuatedNormalizeWidth(156)}
          buttonStyle={[
            { backgroundColor: colors.PrimaryOrange100 },
          ]}
          styleText={[typography.ButtonLarge, {color: colors.White,
            fontWeight: '600',
            textAlign: 'center',}]}
          type={'large'}
          leftIcon={false}
          rightIcon={false}
          onPress={() => {
            const isValidMobile = isValid_Mobile(mobileNumber)
          }}
        />

      </View>

      <View style={styles.action}>
        <IMPrimaryButton
          titleRecv={STRINGS.str_ShareFeedback}
          widthLarge={actuatedNormalizeWidth(328)}
          widthSmall={actuatedNormalizeWidth(156)}
          buttonStyle={[
            { backgroundColor: colors.PrimaryOrange100 },
          ]}
          styleText={[typography.ButtonLarge, {color: colors.White,
            fontWeight: '600',
            textAlign: 'center',}]}
          type={'large'}
          leftIcon={false}
          rightIcon={false}
          onPress={() => {
            const inputLimit = validate_InputCharacter_Limit(characters, charactersLimit)
          }}
        />

      </View>


      <View style={styles.action}>

        <IMPrimaryButton
          titleRecv={STRINGS.str_Amount}
          widthLarge={actuatedNormalizeWidth(328)}
          widthSmall={actuatedNormalizeWidth(156)}
          buttonStyle={[
            { backgroundColor: colors.PrimaryOrange100 },
          ]}
          styleText={[typography.ButtonLarge,{color: colors.White,
            fontWeight: '600',
            textAlign: 'center',}]}
          type={'large'}
          leftIcon={false}
          rightIcon={false}
          onPress={() => {
            const validAmount = validate_AmountLimit(amount, amountMIN, amountMAX)

            const amountDeciamlPlaces = amount_hasTwoDecimal_Places(amount.toString())
            
            const numberFormat = indianNumberFormat(amount)

          }}
        />

      </View>


      <View style={styles.action}>
        <IMPrimaryButton
          titleRecv={STRINGS.str_DateFormat}
          widthLarge={actuatedNormalizeWidth(328)}
          widthSmall={actuatedNormalizeWidth(156)}
          buttonStyle={[
            { backgroundColor: colors.PrimaryOrange100 },
          ]}
          styleText={[typography.ButtonLarge, {color: colors.White,
            fontWeight: '600',
            textAlign: 'center',}]}
          type={'large'}
          leftIcon={false}
          rightIcon={false}
          onPress={() => {
            const validDate = isValid_Date(dateFormat)

            const dateStrings = [
              Date().toString(),
              "2019-11-15T13:34:22.178Z"
            ]

            dateStrings.forEach(dateString => {
              const dateConvert = formatDate_DDMMMYY_DDMMM(dateString,'DDMM');
            })
          }}
        />

      </View>
    </ScrollView>

  );
};

export default ValidationDemo;