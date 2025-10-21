import React, { useEffect, useState } from 'react';
import {  BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import {colors, typography} from '../../../../dff_library/ui_components/atoms';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import styles from './styles';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { IMChips } from '../../../../dff_library/ui_components/components/Chips';
import {
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import { STRINGS } from './constants';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import {
  ICBankLogo,
  ICGeneralCreate,
  ICGeneralCredit,
  ICGeneralCreditOrange,
  ICGeneralDisabledCredit,
  ICGeneralReminder, 
} from '../../../../dff_library/ui_components/atoms/icons';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type Props = NativeStackScreenProps<RootStackParamList, 'ChipsDemo'>;

const ChipsDemo = ({ navigation }: Props) => {
  const chips = [
    { key: '1', value: 'BaseLine' },
    { key: '2', value: 'Emoji' },
    { key: '3', value: 'Icon' },
    { key: '4', value: 'Comment Chips' },
    { key: '5', value: 'Account type' },
    { key: '6', value: 'Account type_alt' },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(chips[0]);
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
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_chips} />
      <View style={styles.mainContainer}>
      <IMDropdown
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.SingleColumn}
        data={chips}
        placeholderText={chips[0].value}
        onSelect={(selectedItem,_index) => {
          setSelectedVal(selectedItem);
        }}
      />
      </View>
      {selectedVal.key == 1 && (
        <View style={styles.viewStyle1}>
          <IMChips label={'Chip 1'} />
          <IMChips label={'Chip 2'} />
          <IMChips label={'Chip 3'} />
        </View>
      )}
      {selectedVal.key == 2 && (
        <View style={styles.viewStyle1}>
          <IMChips label={'Coffee ☕️'} />
          <IMChips label={'Transport 🚖'} />
          <IMChips label={'Lunch 🥗'} />
        </View>
      )}
      {selectedVal.key == 3 && (
        <View style={styles.viewStyle1}>
          <IMChips
            addLeftIconImage={<ICGeneralCreate width={20} height={20} />}
            label="Add"
            isLeftIconImage
          />
          <IMChips
            addLeftIconImage={<ICGeneralCreate width={20} height={20} />}
            label="Thums Up"
            isLeftIconImage
          />
          <IMChips
            addLeftIconImage={<ICGeneralReminder width={20} height={20} />}
            label="Remainder"
            isLeftIconImage
          />
        </View>
      )}
      {selectedVal.key == 4 && (
        <View style={styles.viewStyle1}>
         <Text style={styles.addCommentViewStyle}>{STRINGS.str_addcomment}</Text>
          <View style={styles.viewStyle2}>
          <IMChips changeStyleLabel={typography.SubTitleRegular2} label={'Coffee ☕️'} />
          <IMChips changeStyleLabel={typography.SubTitleRegular2}  label={'Transport 🚖'} />
          <IMChips changeStyleLabel={typography.SubTitleRegular2}  label={'Lunch 🥗'} />
          </View>
        </View>
      )}
      {selectedVal.key == 5 && (
        <View style={styles.viewStyle1}>
          <IMChips
            label="Type"
            changeStyleContainer={styles.acctypeContainerStyle}
            changeStyleLabel={styles.labelStyle1}
          />
        </View>
      )}
      {selectedVal.key == 6 && (
        <View style={styles.viewStyle1}>
          <IMChips
            label="Type"
            addLeftIconImage={<ICGeneralCreditOrange height={12} width={12} />}
            changeStyleContainer={styles.acctypealtContainerStyle}
            changeStyleLabel={styles.labelStyle2}
            isLeftIconImage
          />
        </View>
      )}
      {/* <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.txtStyle}>{STRINGS.str_bsline}</Text>
          <View style={styles.container}>
            <IMChips
              label={'Diabled'}
              isDisable
              changeStyleLabel={styles.LableText}
            />
            <IMChips label={'Chip 1'} changeStyleLabel={styles.LableText} />
            <IMChips label={'Chip 2 '} changeStyleLabel={styles.LableText} />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.txtStyle}>{STRINGS.str_emoji}</Text>
          <View style={styles.container}>
            <IMChips
              addLeftIconImage={<ICGeneralDisabledVerifiedUser />}
              changeStyleLabel={styles.LableText}
              isDisable
              label={'Diabled'}
              isLeftIconImage
            />
            <IMChips
              addRightIconImage={<ICGeneralAddBank />}
              label={'General Add Bank'}
              changeStyleLabel={styles.LableText}
              isRightIconImage
              isLeftIconImage
              addLeftIconImage={<ICGeneralCredit />}
            />
            <IMChips
              addRightIconImage={<ICGeneralCredit height={20} width={20} />}
              changeStyleContainer={{
                minHeight: actuatedNormalizeHeight(20),
                minWidth: actuatedNormalizeWidth(56),
              }}
              changeStyleLabel={styles.LableText}
              label={'Credit'}
              isRightIconImage
              value=""
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.txtStyle}>{STRINGS.str_icon}</Text>
          <View style={styles.container}>
            <IMChips
              addLeftIconImage={<ICGeneralAdd />}
              label="Add"
              isLeftIconImage
              changeStyleLabel={styles.LableText}
            />
            <IMChips
              addLeftIconImage={<ICGeneralThumbsUp />}
              changeSelectedContainer={{
                borderColor: colors.GradientGoldStart,
              }}
              label="Thums Up"
              isLeftIconImage
              onPress={() => handleChipPress('Thums Up')}
              changeStyleLabel={styles.LableText}
            />
            <IMChips
              addLeftIconImage={<ICGeneralReminder />}
              label="Remainder"
              isLeftIconImage
              changeStyleLabel={styles.LableText}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.txtStyle}>{STRINGS.str_acntype}</Text>
          <View style={styles.container}>
            <IMChips
              label="Type"
              changeStyleContainer={{
                backgroundColor: colors.NeutralGrey60,
                minHeight: actuatedNormalizeHeight(17),
                minWidth: actuatedNormalizeWidth(31),
                padding: 2,
                paddingBottom: 4,
                paddingTop: 4,
              }}
              changeStyleLabel={{
                color: colors.NeutralGrey110,
                fontFamily: font.MulishMedium,
                fontSize: 10,
                lineHeight: 12.55,
                letterSpacing: 0.25,
                marginHorizontal: 0,
              }}
              value=""
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.txtStyle}>{STRINGS.str_acntpealt}</Text>
          <View style={styles.container}>
            <IMChips
              label="Type"
              addLeftIconImage={
                <ICLineTransferOverseas height={7.3} width={7.3} />
              }
              changeStyleContainer={{
                backgroundColor: colors.PastelAmber100,
                borderRadius: 8,
                minHeight: actuatedNormalizeHeight(17),
                minWidth: actuatedNormalizeWidth(31),
                padding: 2,
                paddingBottom: 8,
                paddingTop: 8,
              }}
              changeStyleLabel={{
                color: colors.PrimaryOrange100,
                fontFamily: font.MulishMedium,
                fontSize: 10,
                lineHeight: 12,
                letterSpacing: 0.25,
                marginHorizontal: 0,
              }}
              isLeftIconImage
              value=""
            />
          </View>
        </View>
      </SafeAreaView> */}
    </View>
  );
};

export default ChipsDemo;