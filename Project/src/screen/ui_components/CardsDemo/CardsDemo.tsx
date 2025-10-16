import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { actuatedNormalizeWidth, actuatedNormalizeHeight } from '../../../../src/utils/utility';
import { accountInfo } from '../../../../dff_library/ui_components/components/Cards/IMAccountCreditCards/types';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import {
  Bottom_Flower,
  Ellipse,
  ICInfoBottomFlower,
  ICInfoTopFlower,
  Top_Flower,
} from '../../../../dff_library/ui_components/atoms/icons';
import { featuredInfo } from '../../../../dff_library/ui_components/components/Cards/IMFeaturedDescriptionCard/types';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import {
  IMDropdown,
  IMNavigationCard,
  IMRegularCards,
  IMInfoCard,
  IMFeaturedDescriptionCards,
  IMAccountCreditCards,
  IMMutualFundCard
} from '../../../../dff_library/ui_components/components/index';
import {
  ICSettings,
  ICCreditCard,
  ICInvoice,
  ICIBankLogo,
} from '../../../../dff_library/ui_components/atoms/icons';
import { regularInfo } from '../../../../dff_library/ui_components/components/Cards/IMRegularCard/types';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import styles from './styles';
import { STRINGS } from './constants';

type Props = NativeStackScreenProps<RootStackParamList, 'CardsDemo'>;
const cards = [
  { key: 1, value: 'Regular Card' },
  { key: 2, value: 'Info Card(Type 1)' },
  { key: 3, value: 'Info Card(Type 2)' },
  { key: 4, value: 'Info Card(Type 3)' },
  { key: 5, value: 'Selection Card' },
  { key: 6, value: 'Feature Description Card(Type1)' },
  { key: 7, value: 'Feature Description Card(Type2)' },
  { key: 8, value: 'Feature Description Card(Type3)' },
  { key: 9, value: 'Navigation Expansion Card' },
  { key: 10, value: 'Accounts/deposits Card' },
  { key: 11, value: 'Stocks & MutualFunds Card' },
];
const CardsDemo = ({ navigation }: Props) => {
  const [showBalance, setShowBalance] = useState(false);
  const [selectedVal, setSelectedVal] = useState<any>(cards[0]);
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
    <View style={{ backgroundColor: 'white', height: '100%'}}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_cards} />
      <View style={{top:actuatedNormalizeHeight(20),alignSelf:"center"}}>
      <IMDropdown
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.SingleColumn}
        data={cards}
        onSelect={(selectedItem) => {
          setSelectedVal(selectedItem);
        }}
        placeholderText={cards[0].value}
      />
      </View>
      {selectedVal.key == 1 && (
        <View style={styles.viewStyle1}>
          <IMRegularCards
            regular={regularInfo.WhiteOutline}
            cardHeight={102}
            />
          <IMRegularCards
            regular={regularInfo.grey}
            cardHeight={102}
            />
          <IMRegularCards
            regular={regularInfo.white}
            cardHeight={102}
            />
        </View>
      )}
      {selectedVal.key == 2 && (
        <View style={styles.viewStyle1}>
          <IMInfoCard
            type={1}
            typeClr={'#FAEFE8'}
             />
          <IMInfoCard
            type={1}
            typeClr={'rgba(216, 39, 45, 0.05)'}
             />
          <IMInfoCard
            type={1}
            typeClr={'#E5F4EE'}
             />
          <IMInfoCard
            type={1}
            typeClr={'#F8F9FB'}
             />
        </View>
      )}
      {selectedVal.key == 3 && (
        <View style={styles.viewStyle1}>
          <IMInfoCard
            type={2}
            typeClr={colors.PrimaryOrange100}
          
          />
          <IMInfoCard
            type={2}
            typeClr={'#008F52'}
        
          />
          <IMInfoCard
            type={2}
            typeClr={colors.Error100}
           
          />
          <IMInfoCard
            type={2}
            typeClr={'#FFB800'}
            
          />
          <IMInfoCard
            type={2}
            typeClr={'#CDCFD0'}
           
          />
        </View>
      )}
      {selectedVal.key == 4 && (
        <View style={styles.viewStyle1}>
          <IMInfoCard 
          type={3} 
          typeClr={colors.PrimaryOrange100}
          cardHeight={60}
          />
          <IMInfoCard type={3} typeClr={colors.Success100}
            cardHeight={60}
            
          />
          <IMInfoCard type={3} typeClr={colors.Error100}
            cardHeight={60}
           
          />
          <IMInfoCard type={3} typeClr={colors.Warning100}
            cardHeight={60}
            
          />
          <IMInfoCard type={3} typeClr={'#CDCFD0'}
            cardHeight={60}
          
          /> 
        </View>
      )}
      {selectedVal.key == 5 && (
        <View style={styles.viewStyle1}>
          <IMInfoCard
            type={1}
            typeClr={colors.White}
            infoCardsStyleProp={styles.selectioncard2Style} 
          />
          <IMInfoCard
            type={1}
            typeClr={'#F8F9FB'}
            />
        </View>
      )}
      {selectedVal.key == 6 && (
        <View style={styles.viewStyle1}>
          <IMFeaturedDescriptionCards
            type={featuredInfo.type1}
            typeClr={colors.PastelGreen100}
            ImageBottomLeft={<ICInfoBottomFlower />}
            ImageRightTop={<ICInfoTopFlower />}
           
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type1}
            typeClr={colors.PastelBlue100}
            ImageBottomLeft={<ICInfoBottomFlower />}
            ImageRightTop={<ICInfoTopFlower />}
          
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type1}
            typeClr={colors.PastelBrown100}
            ImageBottomLeft={<ICInfoBottomFlower />}
            ImageRightTop={<ICInfoTopFlower />}
           
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type1}
            typeClr={colors.PastelPeach100}
            ImageBottomLeft={<ICInfoBottomFlower />}
            ImageRightTop={<ICInfoTopFlower />}
            
          />
        </View>
      )}
      {selectedVal.key == 7 && (
        <View style={styles.viewStyle1}>
          <IMFeaturedDescriptionCards
            type={featuredInfo.type2}
            linearGradientColor1='#EF8C24'
            linearGradientColor2='#F06837'

          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type2}
            linearGradientColor1='#A83939'
            linearGradientColor2='#982F35'
        
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type2}
            linearGradientColor1='#373737'
            linearGradientColor2='#121212'
           
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type2}
            linearGradientColor1='#C3993C'
            linearGradientColor2='#C9A963'
           
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type2}
            linearGradientColor1='#92140C'
            linearGradientColor2='#F0792E'
           
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type2}
            linearGradientColor1='#DEEDFF'
            linearGradientColor2='#FFFBC6'
          
          />
        </View>
      )
      }
      {selectedVal.key == 8 && (
        <View style={styles.viewStyle1}>
          <IMFeaturedDescriptionCards
            type={featuredInfo.type3}
            typeClr={'#F6F5F0'}
            
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type3}
            typeClr={colors.PastelBlue100}
            
          />
        </View>
      )
      }
      {selectedVal.key == 9 && (
        <View style={styles.viewStyle1}>
          <IMNavigationCard
            linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd}
            navigationStyleProp={styles.navigationcardStyle}
          />
          <IMNavigationCard
            linearGradientColor1={'#F8ECE4'}
            linearGradientColor2={'#F3D7C5'}
          />
        </View>
      )
      }
      {selectedVal.key == 10 && (
        <View style={styles.viewStyle1}>
          <IMAccountCreditCards
            accountType={accountInfo.SavingAc}
            title={STRINGS.str_savingAccount}
            showTitle={STRINGS.str_showBalance}
            currentTitle="Show current value"
            imageRightTop={<Top_Flower width={120} height={100} style={{transform:[{rotate:'180deg'}]}}/>}
            imageLeftTop={<Ellipse width={110} height={110}/>}
            containerStyleProp={styles.account1Style}
            iciciLogo={<ICIBankLogo width={97.7} height={20}/>}
            showBalanceOnPress={() => {
              // setShowBalance(!showBalance);
            }}
            amountBalance={showBalance ? 1000 : 0}
            showBalance={showBalance}
            showBalanceViewStyle={{ top: actuatedNormalizeHeight(16) }}
            accountNumber={'•••• 9022'}
            debit={<ICCreditCard />}
            statement={<ICInvoice />}
            settings={<ICSettings />}
            children={
              <View>
              <Bottom_Flower  height={80} width={70}/>
            </View>
            }
          />
          <IMAccountCreditCards
            accountType={accountInfo.Deposits}
            title={STRINGS.str_FixedDeposit}
            showTitle={STRINGS.str_showBalance}
            containerStyleProp={styles.account2Style}
            currentTitle="Show current value"
            linearGradientColorStart={colors.GradientMaroonStart}
            linearGradientColorEnd={colors.SecondaryMaroon100}
            imageRightTop={<Top_Flower width={120} height={120} transform="translate(6 24)" style={{transform:[{rotate:'180deg'}]}}/>}
            imageLeftTop={<Ellipse style={{transform:[{rotate:'8deg'}]}} />}
            iciciLogo={<ICIBankLogo width={130} height={80}/>}
            showBalanceOnPress={() => {
              // setShowBalance(!showBalance);
            }}
            amountBalance={showBalance ? 1000 : 0}
            showBalance={showBalance}
            showBalanceViewStyle={{ top: actuatedNormalizeHeight(16) }}
            accountNumber={'•• 1122'}
            debit={<ICCreditCard />}
            settings={<ICSettings />}
            children={
            <View style={styles.bottomFlowerStyle}>
                <Bottom_Flower height={80} width={70}/>
            </View>
         }
          />
        </View>
      )
      }
       {selectedVal.key == 11 && (
        <View style={styles.viewStyle2}>
           <IMMutualFundCard
           title={'ICICI Bank'}
           cardContainerStyle={{width:actuatedNormalizeWidth(137)}}
          />
          <IMMutualFundCard
            isleftIcon={true}
            isRightIcon={true}
          />
          
        </View>
      )
      }
      
      {/* <ScrollView>
        <View style={styles.parentViewStyle}>
          <Text style={styles.titleStyle}>{STRINGS.str_regularCard}</Text>
          <IMRegularCards
            regular={regularInfo.WhiteOutline}
            cardHeight={102}
            isSelect={true}>
            <Text>{STRINGS.str_regularCards}</Text>
          </IMRegularCards>

          <IMRegularCards
            regular={regularInfo.grey}
            cardHeight={102}
            isSelect={true}>
            <Text>{STRINGS.str_colorCard}</Text>
            <Text></Text>
          </IMRegularCards>
        </View>
        <View style={styles.parentViewStyle}>
          <Text style={styles.titleStyle}>{STRINGS.str_infoCard}</Text>
          <Text style={styles.titleStyle}>Type1</Text>
          <IMInfoCard type={1} typeClr={colors.PrimaryOrange80} />

          <IMInfoCard type={1} typeClr={colors.PrimaryOrange80}>
            <Text style={styles.TextStyle}>{STRINGS.str_feeReward}</Text>
          </IMInfoCard>
          <Text style={styles.titleStyle}>Type2</Text>
          <IMInfoCard 
            type={2} 
            typeClr={'red'}>
            <Text style={{ padding: actuatedNormalizeWidth(10) }}>
              {STRINGS.str_infoSubCard}
            </Text>
          </IMInfoCard>

          <IMInfoCard
            type={2}
            typeClr={colors.PrimaryOrange100}
            LeftImage={<ICGeneralLocation />}
            children={
              <Text style={{ maxWidth: 160 }}>
                {STRINGS.str_introductionCard}
              </Text>
            }
            RightImage={<ICGeneralChevronRight />}></IMInfoCard>

            
          <Text style={styles.titleStyle}>Type3</Text>
          <IMInfoCard type={3} typeClr={colors.PrimaryOrange100}/>


        </View>
        <View style={styles.parentViewStyle}>
          <Text style={[styles.titleStyle, typography.HeadingMedium2]}>
            {STRINGS.str_featuredCard}
          </Text>
          <IMFeaturedDescriptionCards
            type={featuredInfo.type1}
            typeClr={colors.PastelGreen100}
            ImageBottomLeft={<ICInfoBottomFlower />}
            ImageRightTop={<ICInfoTopFlower />}
          // ImageLeftTop={<ICInfoTopFlower style={{transform:[{rotateY:'180deg'}]}}/>}
          // ImageBottomRight={<ICInfoBottomFlower style={{transform:[{rotateY:'180deg'}]}}/>}
          />
          <IMFeaturedDescriptionCards
            type={featuredInfo.type2}
            typeClr={colors.PastelBlue100}
            linearGradientColor1="#DEEDFF"
            linearGradientColor2="#FFFBCE"
            ImageBottomLeft={<ICInfoBottomFlower />}
            ImageRightTop={<ICInfoTopFlower />}
          />
        </View>
        <View style={styles.parentViewStyle}>
          <Text style={[styles.titleStyle, typography.HeadingMedium2]}>
            {STRINGS.str_navigationCard}
          </Text>
          <IMNavigationCard
            linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd}
            navigationStyleProp={{ minHeight: 159 }}
          />
          <IMNavigationCard
            linearGradientColor1="#F8ECE4"
            linearGradientColor2="#F3D7C5"
            navigationStyleProp={{ minHeight: 88 }}
          />
        </View>
        <View style={styles.parentViewStyle}>
          <Text style={[styles.titleStyle, typography.HeadingMedium2]}>
            {STRINGS.str_AccountCreditCard}
          </Text>
          <IMAccountCreditCards
            accountType={accountInfo.SavingAc}
            title={STRINGS.str_savingAccount}
            showTitle={STRINGS.str_showBalance}
            currentTitle="Show current value"
            backgroundColor={colors.GradientOrangeStart}
            numHideData={7}
            debitCardOnPress={() => {
            }}
            iciciLogo={<ICIBankLogo width={130} height={80} />}
            showBalanceOnPress={() => {
              setShowBalance(!showBalance);
            }}
            amountBalance={showBalance ? 1000 : 0}
            showBalance={showBalance}
            accountNumber={'765765765675'}
            debit={<ICCreditCard />}
            statement={<ICInvoice />}
            settings={<ICSettings />}
          />
        </View>
      </ScrollView> */}
    </View>
  );
};

export default CardsDemo;