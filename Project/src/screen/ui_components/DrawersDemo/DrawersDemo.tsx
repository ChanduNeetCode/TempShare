import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import {
  IMIndicativeDrawers,
  IMDefaultDrawers,
  IMIntroductoryDrawers,
  IMMpinDrawer,
} from '../../../../dff_library/ui_components/components/Drawers';
import { IMPrimaryButton } from '../../../../dff_library/ui_components/components/Buttons/index';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../../src/utils/utility';
import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { colors, typography } from '../../../../dff_library/ui_components/atoms';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import {
  ICBankLogo,
  ICComponentDrawerError,
  ICComponentDrawerSuccess,
  ICGeneralAddBank,
  ICGeneralBlockSmall1,
  ICGeneralClose,
  ICGeneralPayment,
  ICGeneralRecentOrange,
} from '../../../../dff_library/ui_components/atoms/icons';
import { IMNormalList } from '../../../../dff_library/ui_components/components/List';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { data } from './json';
import IMMutualFundCard from '../../../../dff_library/ui_components/components/Cards/IMMutualFundCard';
import IMInfoCard from '../../../../dff_library/ui_components/components/Cards/IMInfoCard';
import { IMRegularCards } from '../../../../dff_library/ui_components';
import { regularInfo } from '../../../../dff_library/ui_components/components/Cards/IMRegularCard/types';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type DrawersDemoNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'DrawersDemo'
>;
const dropDownList = [
  { key: 1, value: STRINGS.str_fixedDrawer },
  { key: 2, value: STRINGS.str_scrollableDrawers },
  { key: 3, value: STRINGS.str_type2Drawer },
  { key: 4, value: STRINGS.str_successDrawer },
  { key: 5, value: STRINGS.str_errorDrawer },
  { key: 6, value: STRINGS.str_indructoryDrawer },
  { key: 7, value: STRINGS.str_mpinDrawer },
];
const bottomContent = () => {
  return (
      <Text style={[styles.textStyle1]}>We require you to enter&nbsp; <Text style={styles.textStyle2}>4 digit iMobile PIN</Text>
          &nbsp; to complete the authentication</Text>
  )
}
const DrawersDemo = (props: DrawersDemoNavigationProps) => {
  const [selectedVal, setSelectedVal] = useState<any>(dropDownList[0]);
  const { navigation } = props;
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [type2Visible, settype2Visible] = useState(false);
  const [defaultModalVisible, setDefaultModalVisible] = useState(true);
  const [defaultScrollableVisible, setDefaultScrollableVisible] = useState(false);
  const [introductoryModalVisible, setintroductoryModalVisible] = useState(false);
  const [mpinModalVisbile, setMpinModalVisbile] = useState(true);

  const handleCloseSuccessModal = () => {
    setSuccessModalVisible(false);
  };
  const handleDefaultCloseModal = () => {
    setDefaultModalVisible(false);
  };
  const handleDefaultScrollableCloseModal = () => {
    setDefaultScrollableVisible(false);
  };
  const handleErrorCloseModal = () => {
    setErrorModalVisible(false);
  };
  const handletype2CloseModal = () => {
    settype2Visible(false);
  };
  const handleIntroductoryCloseModal = () => {
    setintroductoryModalVisible(false);
  };
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
        title={STRINGS.str_headerCompText}
      />
      <IMDropdown
        parentDropDownStyle={styles.parentDropDownStyle}
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.SingleColumn}
        placeholderText={dropDownList[0].value}
        data={dropDownList}
        onSelect={(selectedItem) => {
          setSelectedVal(selectedItem);
          if (selectedItem.key == 1) setDefaultModalVisible(true);
          else if (selectedItem.key == 2) setDefaultScrollableVisible(true);
          else if (selectedItem.key == 3) settype2Visible(true);
          else if (selectedItem.key == 4) setSuccessModalVisible(true);
          else if (selectedItem.key == 5) setErrorModalVisible(true);
          else if (selectedItem.key == 6) setintroductoryModalVisible(true);
          else setMpinModalVisbile(true);
        }}
      />
      {selectedVal.key == 1 && (
        <IMDefaultDrawers
          visible={defaultModalVisible}
          onClose={handleDefaultCloseModal}
          expandable={false}
          isDisable={true}
          isStatusBarTranslucent={true}
          minModalHeight={actuatedNormalizeHeight(525)}
          maxSwipeHeight={actuatedNormalizeHeight(430)}
          RightImage={<ICGeneralClose />}
          title={STRINGS.str_fixedDrawerTitle}
          modelcontainerStyleProp={styles.modalContainer}
          modalContentStyle={styles.modalContent}
          modalTouchableStyleProp={styles.blurContainer}
          titleContentStyle={styles.titleContent}
          childProps={
            <View style={styles.contentViewStyle}>
              <IMMutualFundCard
                isleftIcon={true}
                isRightIcon={false}
                textContainerStyle={styles.rowGap}
                cardWidth={actuatedNormalizeWidth(328)}
                title='Abhishek Nair'
                subTitle='ICICI Bank'
                subTitleStyle={styles.cardsSubtitle}
                noOfDigitsDisplay={10}
              />
              <IMNormalList
                isListHeader={false}
                subLineKey={'actNumber'}
                headingKey="name"
                date={'date'}
                amt={'amt'}
                list={data}
                isSeparator={false}
                amtTextStyle={{textAlign:'right'}}
                dateStyle={{textAlign:'right'}}
                mainContainerStyle={{marginTop:0}}
                touchableStyle={{borderBottomWidth:1,borderColor:colors.NeutralGrey60}}
              />
            </View>
          }
        />
      )}
        {selectedVal.key == 2 && (
        <IMDefaultDrawers
          visible={defaultScrollableVisible}
          onClose={handleDefaultScrollableCloseModal}
          expandable={true}
          isDisable={true}
          isStatusBarTranslucent={true}
          expandableIcon={<View style={styles.scrollableIconStyle}></View>}
          RightImage={<ICGeneralClose />}
          LeftImage={<ICGeneralRecentOrange width={20} height={20} />}
          minModalHeight={420}
          modalTouchableStyleProp={styles.blurContainer}
          title={STRINGS.str_fixedDrawerTitle}
          modelcontainerStyleProp={styles.modalContainer}
          modalContentStyle={styles.modalContent}
          titleContentStyle={styles.titleContent1}
          childProps={
            <View style={styles.contentViewStyle}>
              <IMMutualFundCard
                isleftIcon={true}
                isRightIcon={false}
                textContainerStyle={styles.rowGap}
                cardWidth={actuatedNormalizeWidth(328)}
                title='Abhishek Nair'
                subTitle='ICICI Bank'
                subTitleStyle={styles.cardsSubtitle}
                noOfDigitsDisplay={10}
              />
              <IMNormalList
                isListHeader={false}
                subLineKey={'actNumber'}
                headingKey="name"
                date={'date'}
                amt={'amt'}
                list={data}
                isSeparator={false}
                amtTextStyle={{textAlign:'right'}}
                dateStyle={{textAlign:'right'}}
                mainContainerStyle={{marginTop:0}}
                touchableStyle={{borderBottomWidth:1,borderColor:colors.NeutralGrey60}}
              />
            
            </View>
          }
        />
      )}
      {selectedVal.key == 3 && (
        <IMIndicativeDrawers
          isLinearGradient={true}
          modalcontentPropStyle={styles.height3}
          visible={type2Visible}
          isDisable={true}
          isStatusBarTranslucent={true}
          onCloseModal={handletype2CloseModal}
          image={<ICGeneralClose />}
          title={STRINGS.str_fixedDrawerTitle}
          modelcontainerPropStyle={styles.modelContainer}
          closeContent={styles.IndicativeDrawersCloseContent}
          indicativeIcon={<ICGeneralPayment height={32} width={32} />}
          indicativeColor={'rgba(239, 140, 36, 1)'}
          modalTouchableStyleProp={styles.blurContainer}
          subTitle={STRINGS.str_successDrawerSubtitle}
          SubTextStyle={typography.BodySemiBold1}
          iconfloatStyle={styles.icon}
          childProps={
            <View style={styles.mainContentContainer}>
              <View style={styles.IndicativeDrawersChildSubView}>
                <ICGeneralPayment height={20} width={20} />
                <Text style={styles.InfoCardTextStyle}>Payment Requests</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <IMRegularCards
                  regular={regularInfo.WhiteOutline}
                  cardHeight={actuatedNormalizeHeight(106)}
                  regularCardStyleProps={styles.regularCardStyleProp}
                >
                  <View style={styles.regularSubView}>
                    <View style={styles.regularSubIconView}>
                      <ICGeneralAddBank width={20} height={20} />
                    </View>
                    <View style={styles.regularSubTextView}>
                      <Text style={styles.swiggyStyle}>Swiggy</Text>
                      <Text style={styles.swiggyEStyle}>swiggyindia@icici</Text>
                    </View>
                    <View style={styles.regularCardTextView}>
                      <Text style={styles.t1Style}>₹ 561</Text>
                      <View style={styles.regularCardTextSubView}>
                        <Text style={styles.t2Style}>03:14 pm</Text>
                        <Text style={styles.color}>|</Text>
                        <Text style={styles.t2Style}>09 Feb ‘22</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.footerStyles}>
                    <View style={styles.regularViewMain}>
                      <TouchableOpacity onPress={handletype2CloseModal} style={styles.regularViewSub}>
                        <ICGeneralBlockSmall1 width={actuatedNormalizeWidth(14)} height={actuatedNormalizeHeight(14)} />
                        <Text style={styles.blockStyle}>Block</Text>
                      </TouchableOpacity>
                      <View style={{borderWidth:1,height:20,borderColor:'#E7E8E9'}}></View>
                      <TouchableOpacity onPress={handletype2CloseModal} style={styles.regularSub2}>
                        <ICBankLogo width={actuatedNormalizeWidth(20)} height={actuatedNormalizeHeight(20)} />
                        <Text style={styles.rejectStyle}>Reject</Text>
                      </TouchableOpacity>
                      <View style={{borderWidth:1,height:20,borderColor:'#E7E8E9'}}></View>
                      <TouchableOpacity onPress={handletype2CloseModal} style={styles.regularSub3}>
                        <ICBankLogo width={actuatedNormalizeWidth(20)} height={actuatedNormalizeHeight(20)} />
                        <Text style={styles.acceptStyle}>Accept</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </IMRegularCards>
              </View>
              <Text onPress={handletype2CloseModal} style={styles.skipStyle}>Skip for Now</Text>
            </View>
          }
        />
      )}
      {selectedVal.key == 4 && (
        <IMIndicativeDrawers
          modalcontentPropStyle={styles.height1}
          visible={successModalVisible}
          isDisable={true}
          isStatusBarTranslucent={true}
          onCloseModal={handleCloseSuccessModal}
          modelcontainerPropStyle={styles.modelContainer}
          subTitle={STRINGS.str_successDrawerSubtitle}
          title={STRINGS.str_successDrawerTitle}
          indicativeIcon={<ICComponentDrawerSuccess height={60} width={60} />}
          indicativeColor={colors.Success100}
          modalTouchableStyleProp={styles.blurContainer}
          closeContent={styles.IndicativeDrawerscloseContent}
          image={<ICGeneralClose />}
          iconfloatStyle={styles.icon}
          childProps={
            <View style={styles.mainContentContainer}>
              <IMMutualFundCard
                isleftIcon={true}
                isRightIcon={false}
                cardWidth={actuatedNormalizeWidth(328)}
                title='Abhishek Nair'
                subTitle='ICICI Bank'
                subTitleStyle={{color:colors.NeutralGrey110}}
                noOfDigitsDisplay={20}
                textContainerStyle={styles.rowStyle}
              />
              <IMPrimaryButton
                type={'large'}
                titleRecv='Back to bank Transfer'
                buttonStyle={styles.buttonStyle1}
                onPress={handleCloseSuccessModal}
              />
            </View>
          }
        />
      )}
      {selectedVal.key == 5 && (
        <IMIndicativeDrawers
          modalcontentPropStyle={styles.height2}
          visible={errorModalVisible}
          isDisable={true}
          onCloseModal={handleErrorCloseModal}
          title={STRINGS.str_errorDrawerTitle}
          isStatusBarTranslucent={true}
          indicativeIcon={<ICComponentDrawerError height={50} width={50} />}
          indicativeColor={colors.Error100}
          modelcontainerPropStyle={styles.modelContainer}
          modalTouchableStyleProp={styles.blurContainer}
          iconfloatStyle={styles.icon}
          childProps={
            <View style={styles.mainContent2Container}>
              <IMInfoCard
                type={1}
                cardHeight={actuatedNormalizeHeight(84)}
                typeClr={'rgba(216, 39, 45, 0.05)'}>
                <View style={styles.InfoCardSubViewStyles}>
                  <Text style={styles.InfoCardTextStyle}>
                    You cannot do a transaction from your UPI ID due to security reasons.
                  </Text>
                  <Text style={styles.InfoCardTextStyle}>
                    Please retry after sometime
                  </Text>
                </View>
              </IMInfoCard>
              <IMPrimaryButton
                type={'large'}
                titleRecv='Ok'
                buttonStyle={styles.buttonStyle}
                onPress={handleErrorCloseModal}
              />
            </View>
          }
        />
      )}
      {selectedVal.key == 6 && (
        <IMIntroductoryDrawers
          isVisible={introductoryModalVisible}
          poweredByText='Powered By'
          isDisable={true}
          isStatusBarTranslucent={true}
          modalTouchableStyleProp={styles.blurContainer}
          modelcontainerStyleProp={styles.blurContainer}
          subTitle=' We’ve simplified payments for you, and created a new UPI ID for you. Your new UPI ID is'
          title='Welcome to UPI payments'
          handleCloseIcon={handleIntroductoryCloseModal}
        />
      )}
      {selectedVal.key == 7 && (
        <IMMpinDrawer
          isDisable={true}
          isVisible={mpinModalVisbile}
          isStatusBarTranslucent={true}
          title= 'Authenticate with MPIN'
          mpinText='Enter MPIN'
          modalTouchableStyle={styles.blurContainer}
          handleCloseIcon={() => setMpinModalVisbile(false)}
          content={bottomContent()}
          keyboardAvoidingStyle={styles.blurContainer}
        />
      )}
    </>

  );
};
export default DrawersDemo;