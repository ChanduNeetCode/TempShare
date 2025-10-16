import React, { useState, useEffect } from 'react';
import { Text, View, BackHandler } from 'react-native';

import {
  IMPrimaryButton,
  IMDisabledButton,
  IMGradientButton,
  IMOutlinedButton,
  IMSecondaryButton,
  IMFABButton,
  IMStackedButton,
  IMSwipeButton,
} from '../../../../dff_library/ui_components/components/Buttons/index';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {actuatedNormalizeWidth} from '../../../../src/utils/utility';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import styles from './styles';
import {
  ICBankLogo,
  ICBlock,
  ICGeneralAddPayee,
  ICGeneralChevronRight,
  ICGeneralLinkGreen,
  ICGeneralWhiteShare,
  ICLineCoinsWhite,
} from '../../../../dff_library/ui_components/atoms/icons';
import { ButtonTypes } from './constants';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

const buttons = [
  { key: 1, value: ButtonTypes.PrimaryButton },
  { key: 2, value: ButtonTypes.PrimaryButtonALT },
  { key: 3, value: ButtonTypes.SecondaryButton },
  { key: 4, value: ButtonTypes.TertiaryButton },
  { key: 5, value: ButtonTypes.StackedButton },
  { key: 6, value: ButtonTypes.Destructive },
  { key: 7, value: ButtonTypes.FAB },
  { key: 8, value: ButtonTypes.SwipeButton },
  { key: 9, value: ButtonTypes.GradientButton },
];

type Props = NativeStackScreenProps<RootStackParamList, 'ButtonsDemo'>;

const ButtonsDemo = ({ navigation }: Props) => {
  const [selectedVal, setSelectedVal] = useState<any>(buttons[0]);
  const [colorChage, setColorChage] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setColorChage(false);
    }, 100);
  }, [colorChage]);

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={'Buttons'} />

      <View style={styles.parentDropdownStyle}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          placeholderText={buttons[0].value}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          data={buttons}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
          }}
        />
      </View>

      {selectedVal.key == 1 && (
        <View style={styles.viewStyle3}>
          <Text style={[styles.buttonTypeText]}>Large</Text>
          <IMPrimaryButton
            titleRecv={'Button'}
            type={'large'}
            onPress={() => {}}
          />
          <Text style={styles.buttonTypeText}>Icon</Text>
          <IMPrimaryButton
            titleRecv={'Button'}
            type={'large'}
            leftIcon={true}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Small</Text>
          <IMPrimaryButton
            titleRecv={'Button'}
            type={'small'}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Disabled Large</Text>
          <IMDisabledButton
            titleRecv={'Button'}
            type={'large'}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Disabled Icon</Text>
          <IMDisabledButton
            leftIcon={true}
            leftImage={<ICGeneralAddPayee width={20} height={20} />}
            titleRecv={'Button'}
            type={'large'}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Disabled Small</Text>
          <IMDisabledButton
            titleRecv={'Button'}
            type={'small'}
            onPress={() => { }}
          />
        </View>
      )}
      {selectedVal.key == 2 && (
        <View style={styles.viewStyle3}>
          <Text style={styles.buttonTypeText}>Small Default</Text>
          <IMOutlinedButton
            titleRecv={'Button'}
            type={'small'}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Large Default</Text>
          <IMOutlinedButton
            titleRecv={'Button'}
            type={'large'}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Small Disable</Text>
          <IMDisabledButton
            titleRecv={'Button'}
            type={'small'}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Large Disable</Text>
          <IMDisabledButton
            titleRecv={'Button'}
            type={'large'}
            onPress={() => { }}
          />
        </View>
      )}
      {selectedVal.key == 3 && (
        <View style={styles.viewStyle1}>
          <Text style={styles.buttonTypeText}>Small, Icon on left</Text>
          <IMSecondaryButton
            titleRecv={'Button'}
            leftIcon={true}
            rightIcon={false}
            leftImage={<ICBlock width={14} height={14} />}
            styleText={styles.secondary1Style}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Small, Icon on right</Text>
          <IMSecondaryButton
            titleRecv={'Button'}
            type={'small'}
            leftIcon={false}
            rightIcon={true}
            rightImage={<ICGeneralChevronRight width={18} height={18} />}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Large, Icon on left</Text>
          <IMSecondaryButton
            titleRecv={'Button'}
            type={'small'}
            leftIcon={true}
            rightIcon={false}
            leftImage={<ICBlock width={20} height={20} />}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Large, Icon on Right</Text>
          <IMSecondaryButton
            titleRecv={'Button'}
            type={'small'}
            leftIcon={false}
            rightIcon={true}
            rightImage={<ICBlock width={20} height={20} />}
            onPress={() => { }}
          />

        </View>
      )}
      {selectedVal.key == 4 && (
        <View style={styles.viewStyle3}>
          <Text style={styles.buttonTypeText}>Default Button</Text>
          <IMOutlinedButton
            buttonStyle={styles.teritaryButton}
            titleRecv={'Button'}
            widthSmall={actuatedNormalizeWidth(98)}
            type={'small'}
            styleText={styles.outlinedStyle1}
            onPress={() => { }}
            leftIcon={
              <ICBankLogo
                width={16}
                height={16}
              // style={{  left: actuatedNormalizeWidth(4) }}
              />
            }
          />
          <Text style={styles.buttonTypeText}>Success Button</Text>
          <IMOutlinedButton
            underlayColor={colors.PastelGreen120}
            buttonStyle={styles.teritaryButton2}
            titleRecv={'Button'}
            widthSmall={actuatedNormalizeWidth(98)}
            styleText={styles.outlinedStyle2}
            type={'small'}
            onPress={() => { }}
            leftIcon={
              <ICGeneralLinkGreen
                width={16}
                height={16}
              // style={{ left: actuatedNormalizeWidth(4) }}
              />
            }
          />
          <Text style={styles.buttonTypeText}>Disabled Button</Text>
          <IMOutlinedButton
            disabled={true}
            buttonStyle={styles.teritaryButton3}
            titleRecv={'Button'}
            widthSmall={actuatedNormalizeWidth(98)}
            styleText={styles.outlinedStyle3}
            type={'small'}
            onPress={() => { }}
            leftIcon={
              <ICGeneralAddPayee
                width={16}
                height={16}
              />
            }
          />
        </View>
      )}

      {selectedVal.key == 5 && (
        <View style={styles.viewStyle1}>
          <Text style={styles.buttonTypeText}>Small</Text>
          <IMStackedButton
            titleFirstRecv={'Title1'}
            titleSecondRecv={'Title2'}
            imageSecond={<ICGeneralWhiteShare />}
            imageFirst={<ICLineCoinsWhite />}
            onFirstTabPress={() => { }}
            onSecondTabPress={() => { }}
            type={'small'}
          />
          <Text style={styles.buttonTypeText}>Large</Text>
          <IMStackedButton
            titleFirstRecv={'Title1'}
            titleSecondRecv={'Title2'}
            imageSecond={<ICGeneralWhiteShare />}
            imageFirst={<ICLineCoinsWhite />}
          />
        </View>
      )}
      {selectedVal.key == 6 && (
        <View style={styles.viewStyle1}>
          <Text style={styles.buttonTypeText}>Large filled</Text>
          <IMStackedButton
            titleFirstRecv={'Title One'}
            titleSecondRecv={'Title Two'}
            imageSecond={<ICGeneralWhiteShare />}
            imageFirst={<ICLineCoinsWhite />}
            type={'small'}
            buttonStyle={{
              backgroundColor: colors.Error100,
            }}
          />
          <Text style={styles.buttonTypeText}>Outlined Buttons</Text>
          <IMOutlinedButton
            buttonStyle={styles.revokeButtonStyle}
            underlayColor={colors.White}
            titleRecv={'Revoke'}
            styleText={{ color: colors.Error100 }}
            type={'small'}
            onPress={() => { }}
          />
        </View>
      )}
      {selectedVal.key == 7 && (
        <View style={styles.viewStyle1}>
          <Text style={styles.buttonTypeText}>Circular Touch</Text>
          <IMFABButton
            image={
              <ICGeneralWhiteShare width={24} height={24} onPress={() => { }} />
            }
          />
        </View>
      )}

      {selectedVal.key == 8 && (
        <View style={styles.viewStyle3}>
          <Text style={styles.buttonTypeText}>Swipe to Pay - Tall</Text>
          <IMSwipeButton
            titleRecv='Swipe to pay'
            titleAfterSlide='Release to Cancel'
            type={'tall'}
            resetAfterSuccessAnimDelay={100}
            thresholdlimit={70}
            onSwipeSuccess={() => { }}
           
          />
          <Text style={styles.buttonTypeText}>Swipe to Pay - Short</Text>
          <IMSwipeButton
            titleRecv='Swipe to pay'
            titleAfterSlide='Release to Cancel'
            type={'short'}
            onSwipeSuccess={() => { }}
          />
          <Text style={styles.buttonTypeText}>Swipe to Scan QR</Text>
          <IMSwipeButton
            isshouldResetAfterSuccess={false}
            type={'qr'}
            titleRecv='Swipe to pay'
            titleAfterSlide='Release to Cancel'
            onSwipeSuccess={() => { }}
          />
          <Text style={styles.buttonTypeText}>Disable Tall</Text>
          <IMSwipeButton
            titleRecv={'Swipe to pay'}
            type={'tall'}
            disabled={true}
          />
          <Text style={styles.buttonTypeText}>Disable Short</Text>
          <IMSwipeButton
            titleRecv={'Swipe to pay'}
            type={'short'}
            disabled={true}
          />
        </View>
      )}
      {selectedVal.key == 9 && (
        <View style={styles.viewStyle1}>
          <Text style={styles.buttonTypeText}>Large</Text>
          <IMGradientButton
            titleRecv={'Button'}
            type={'large'}
            onPress={() => { }}
          />
          <Text style={styles.buttonTypeText}>Small</Text>
          <IMGradientButton
            titleRecv={'Button'}
            type={'small'}
            onPress={() => { }}
          />
        </View>
      )}
    </View>
  );
};

export default ButtonsDemo;

// import React from 'react';

// import { useEffect } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Alert,
//   BackHandler,
// } from 'react-native';
// import Styles from '../../../../dff_library/ui_components/components/Buttons/IMButtons/styles';
// import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
// import {
//   IMPrimaryButton,
//   IMDisabledButton,
//   IMGradientButton,
//   IMOutlinedButton,
//   IMSecondaryButton,
//   IMStackedButton,
//   IMSwipeButton,
// } from '../../../../dff_library/ui_components/components/Buttons/index';
// import colors from '../../../../dff_library/ui_components/atoms/colors';
// import { actuatedNormalizeWidth } from '../../../../src/utils/utility';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../../../src/routes/RootStackParams';
// import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
// import HeaderComponent from '../../../../src/utils/HeaderComponent';
// import {  ICBankLogo, ICGeneralWhiteShare, ICLineCoinsWhite } from '../../../../dff_library/ui_components/atoms/icons';
// import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

// type Props = NativeStackScreenProps<RootStackParamList, 'ButtonsDemo'>;

// const ButtonsDemo = ({ navigation }: Props) => {
//   const handleBackButtonClick = () => {
//     navigation.goBack();
//     return true;
//   };
//   const onSuccess = () => {
//     navigation.navigate('BadgesDemo');
//   }
//   useEffect(() => {
//     BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
//     return () => {
//       BackHandler.removeEventListener(
//         'hardwareBackPress',
//         handleBackButtonClick,
//       );
//     };
//   }, []);

//   return (
//     <>
//       <CustomStatusBar
//         gradientColorsArray={[
//           colors.GradientOrangeStart,
//           colors.GradientOrangeEnd,
//         ]}
//       />
//       <HeaderComponent navigation={navigation} title={'Buttons'} />
//       <ScrollView>
//         <SafeAreaView
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'white',
//           }}>
//            <IMDropdown
//             parentDropDownStyle={{ alignItems: 'center', marginTop: 10 }}
//             dropdownWidth={actuatedNormalizeWidth(320)}
//             disable={false}
//             headerStyle={{ fontFamily: 'Mulish-Bold' }}
//             dropdownType={DropdownType.ALT}
//             data={dropDownList}
//             onSelect={(selectedItem, index) => {
//               setSelectedVal(selectedItem);
//             }}
//           />
//           <View style={{ height: 20 }} />
//           <Text style={styles.buttonTypeText}>Primary Buttons</Text>

//           <IMPrimaryButton
//             titleRecv={'Button'}
//             type={'large'}
//             leftIcon={false}
//             rightIcon={false}
//           />
//           <View style={{ height: 20 }} />
//           <IMPrimaryButton
//             titleRecv={'Button'}
//             type={'large'}
//             leftIcon={true}
//             rightIcon={false}
//           />
//           <View style={{ height: 20 }} />
//           <IMPrimaryButton
//             titleRecv={'Button'}
//             type={'small'}
//             leftIcon={false}
//             rightIcon={false}
//           />
//           <View style={{ height: 30 }} />
//           <Text style={styles.buttonTypeText}>Outlined Buttons</Text>
//           <IMOutlinedButton
//             titleRecv={'Button'}
//             type={'large'}
//             rightIcon={<ICBankLogo style={Styles.imageStyle} />}
//           />
//           <View style={{ height: 20 }} />
//           <IMOutlinedButton
//             titleRecv={'Button'}
//             type={'small'}
//           />
//           <View style={{ height: 20 }} />
//           <Text style={styles.buttonTypeText}>Disabled Buttons</Text>
//           <IMDisabledButton
//             titleRecv={'Button'}
//             type={'large'}
//           />
//           <View style={{ height: 20 }} />
//           <IMDisabledButton
//             titleRecv={'Button'}
//             type={'small'}
//           />
//           <View style={{ height: 30 }} />
//           <Text style={styles.buttonTypeText}>Secondary Buttons</Text>
//           <IMSecondaryButton
//             titleRecv={'Button'}
//             leftIcon={false}
//             rightIcon={true}
//           />
//           <View style={{ height: 20, justifyContent: 'flex-start', left: 130 }} />
//           <IMSecondaryButton
//             titleRecv={'Button'}
//             leftIcon={true}
//             rightIcon={true}
//           />
//           <View style={{ height: 30 }} />
//           <Text style={styles.buttonTypeText}>Stacked Buttons</Text>
//           <IMStackedButton
//             titleFirstRecv={'Title1'}
//             titleSecondRecv={'Title2'}
//             widthLarge={actuatedNormalizeWidth(250)}
//             widthSmall={actuatedNormalizeWidth(328)}
//             imageSecond={<ICGeneralWhiteShare />}
//             imageFirst={<ICLineCoinsWhite />}
//             type={'stacked'}

//           />
//           <Text style={styles.buttonTypeText}>large</Text>
//           <IMStackedButton
//             titleFirstRecv={'Title1'}
//             titleSecondRecv={'Title2'}
//             widthLarge={actuatedNormalizeWidth(308)}
//             widthSmall={actuatedNormalizeWidth(156)}
//             imageSecond={<ICGeneralWhiteShare />}
//             imageFirst={<ICLineCoinsWhite />}
//             type={'stacked'}
//           />
//           <View style={{ height: 30 }} />
//           <Text style={styles.buttonTypeText}>Gradient Buttons</Text>
//           <IMGradientButton
//             titleRecv={'Button'}
//             styleText={Styles.buttonText}
//             type={'large'}
//           />
//           <View style={{paddingTop:10}}>
//           <IMGradientButton
//             titleRecv={'Button'}
//             styleText={Styles.buttonText}
//             type={'small'}
//           />
//           </View>
//           <View style={{ height: 20 }} />
//           <Text style={styles.buttonTypeText}>Swipe Buttons</Text>
//           <IMSwipeButton
//             titleRecv={'Swipe to pay'}
//             type={'tall'}
//             buttonStyle={Styles.buttonShadow}
//             disabled={true}
//             buttonStyleProp={styles.containerStyleOfSwipeButtonTall}
//             buttonHeightProp={64}
//             buttonWidthProp={328}
//           />
//           <IMSwipeButton
//             titleRecv={'Swipe to pay'}
//             type={'short'}
//             buttonStyle={Styles.buttonShadow}
//             disabled={true}
//             buttonStyleProp={styles.containerStyleOfSwipeButtonSmall}
//             buttonHeightProp={52}
//             buttonWidthProp={328}
//           />
//           <IMSwipeButton
//             titleRecv={'Swipe to pay'}
//             type={'tall'}
//             buttonStyle={Styles.buttonShadow}
//             disabled={false}
//             buttonStyleProp={styles.containerStyleOfSwipeButtonTall}
//             buttonHeightProp={64}
//             buttonWidthProp={328}
//           />
//           <IMSwipeButton
//             titleRecv={'Swipe to pay'}
//             type={'short'}
//             buttonStyle={Styles.buttonShadow}
//             disabled={false}
//             buttonStyleProp={styles.containerStyleOfSwipeButtonSmall}
//             buttonHeightProp={52}
//             buttonWidthProp={328}
//             onSwipeSuccess={onSuccess}
//           />
//           <View style={{ height: 60 }} />
//         </SafeAreaView>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   buttonTypeText: {
//     alignSelf: 'flex-start',
//     margin: 5,
//   },
//   container: {
//     backgroundColor: '#FFF',
//   },
//   titleTextStyle: {
//     textAlign: 'center',
//     color: colors.NeutralGrey140,
//     marginTop: 10,
//   },
//   sublineTextStyle: {
//     textAlign: 'center',
//     color: colors.NeutralGrey110,
//   },
//   imageStyle: {
//     width: 38,
//     height: 38,
//     alignSelf: 'center',
//     marginVertical: 10,
//   },
//   stateStyle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignContent: 'center',
//     height: 150,
//   },
//   containedStateStyle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignContent: 'center',
//     alignSelf: 'center',
//     backgroundColor: colors.PastelAmber100,
//     width: 328,
//     top: 16,
//     borderRadius: 16,
//     height: 152,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: colors.PastelAmber100,
//   },
//   containerStyleOfSwipeButtonSmall: {
//     borderRadius: 15,
//     shadowOffset: { width: 0, height: 15 },
//     shadowColor: colors.Black,
//     elevation: 10,
//     backgroundColor: colors.Black,
//   },
//   containerStyleOfSwipeButtonTall: {
//     borderRadius: 20,
//     shadowOffset: { width: 0, height: 15 },
//     shadowColor: colors.Black,
//     elevation: 10,
//     backgroundColor: colors.Black,
//   },
// });

// export default ButtonsDemo;
