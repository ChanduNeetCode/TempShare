import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { ICGeneralDebitOrange } from '../../../../dff_library/ui_components/atoms/icons';
import { STRINGS } from './constants';
import IMBadges from '../../../../dff_library/ui_components/components/Badges/IMBadges/Index';
import { badgesInfo } from '../../../../dff_library/ui_components/components/Badges/IMBadges/types';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import {
  IMDropdown,
} from '../../../../dff_library/ui_components/components/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { actuatedNormalizeWidth, actuatedNormalizeHeight } from '../../../../src/utils/utility';

type Props = NativeStackScreenProps<RootStackParamList, 'BadgesDemo'>;

const BadgesDemo = ({ navigation }: Props) => {
  const badges = [
    { key: 1, value: 'Standalone Badges' },
    { key: 2, value: 'Card Based Badges(Overlap)' },
    { key: 3, value: 'Card Based Badges(Top of Card)' }
  ];
  const [selectedVal, setSelectedVal] = useState<any>(badges[0]);
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
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_badges} />

      <View style={{ top: actuatedNormalizeHeight(20), alignSelf: "center" }}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          placeholderText={badges[0].value}
          dropdownType={DropdownType.SingleColumn}
          data={badges}
          onSelect={(selectedItem) => {
            setSelectedVal(selectedItem);
          }}
        />
      </View>
      {selectedVal.key == 1 && (
        <View style={styles.viewStyle1}>
          <View style={styles.badgesRowStyle}>
            <Text style={styles.BadgesTitle}>Neutral</Text>
            <IMBadges
              type={badgesInfo.StandaloneBadges}
              badgesTextClr={colors.PrimaryOrange100}
              badgesTitle="0"
              badgesBackgroundClr={colors.PastelAmber110}
              badgesViewStyle={styles.standAloneNeutral}></IMBadges>
          </View>
          <View style={styles.badgesRowStyle}>
            <Text style={styles.BadgesTitle}>Positive</Text>
            <IMBadges
              type={badgesInfo.StandaloneBadges}
              badgesTextClr={colors.Success100}
              badgesTitle="+1.25%"
              badgesBackgroundClr={colors.PastelGreen110}
              badgesViewStyle={styles.standAlonePositive}></IMBadges>
          </View>
          <View style={styles.badgesRowStyle}>
            <Text style={styles.BadgesTitle}>Negative</Text>
            <IMBadges
              type={badgesInfo.StandaloneBadges}
              badgesTextClr={colors.Error100}
              badgesTitle="Due"
              badgesBackgroundClr={colors.PalePink}
              badgesViewStyle={styles.standAlonePositive}></IMBadges>
          </View>
          <View style={styles.badgesRowStyle}>
            <Text style={styles.BadgesTitle}>Inactive</Text>
            <IMBadges
              type={badgesInfo.StandaloneBadges}
              badgesTextClr={colors.NeutralGrey110}
              badgesTitle="A"
              badgesBackgroundClr={colors.NeutralGrey60}
              badgesViewStyle={styles.standAlonePositive}></IMBadges>
          </View>
        </View>
      )}
      {selectedVal.key == 2 && (
        <View style={styles.viewStyle1}>
          <Text style={styles.SemiBadge}>Overlap with icon</Text>
          <View style={styles.center}>

            <IMBadges
              type={badgesInfo.CardBasedBadges}
              badgesTextClr={colors.PrimaryOrange100}
              badgesTitle="Default send"
              badgesBackgroundClr={colors.FadedBlue}
              badgesLeftIcon={<ICGeneralDebitOrange />}
            ></IMBadges>

          </View>
          <Text style={styles.SemiBadge}>Overlap with out icon</Text>
          <View style={styles.center}>

            <IMBadges
              type={badgesInfo.CardBasedBadges}
              badgesTextStyle={{textAlign:'center'}}
              badgesTextClr={colors.PrimaryOrange100}
              badgesTitle="Preferred"
              badgesBackgroundClr={colors.FadedBlue}
              badgesViewStyle={styles.overlap}></IMBadges>

          </View>
        </View>
      )}
      {selectedVal.key == 3 && (
        <View style={styles.viewStyle1}>
          <View style={styles.center}>
            <Text style={styles.BadgesTitle}>Neutral</Text>
            <View style={styles.verticalStyle}>
              <IMBadges
                type={badgesInfo.CardBasedBadges}
                badgesTextClr={colors.NeutralGrey140}
                badgesTitle="Due 12 Jun"
                badgesBackgroundClr={colors.CoolGrey90}
                badgesViewStyle={styles.badgesTopStyle} />

            </View>
            <Text style={styles.BadgesTitle}>Immediate action</Text>
            <View style={styles.verticalStyle}>
              <IMBadges
                type={badgesInfo.CardBasedBadges}
                badgesTextClr={colors.White}
                badgesViewStyle={styles.topofCardStyle}
                badgesTitle="DUE TODAY"
                badgesBackgroundClr={colors.SecondaryMaroon100}></IMBadges>
            </View>
            <Text style={styles.BadgesTitle}>Negative</Text>
            <View style={styles.verticalStyle}>
              <IMBadges
                type={badgesInfo.CardBasedBadges}
                badgesTextClr={colors.White}
                badgesTitle="OVERDUE"
                badgesViewStyle={styles.topofCardStyle}
                badgesBackgroundClr={colors.Error100}></IMBadges>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default BadgesDemo;
