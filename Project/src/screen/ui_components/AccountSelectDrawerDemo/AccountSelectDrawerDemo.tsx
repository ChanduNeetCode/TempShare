import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import IMAccountSelectDrawer from '../../../../dff_library/ui_components/components/AccountSelectDrawer/IMAccountSelectDrawer/index';
import { STRINGS } from './constants';
import HeaderComponent from '../../../utils/HeaderComponent';
import { ICGeneralChevronDown, ICGeneralChevronUp, ICGeneralClose } from '../../../../dff_library/ui_components/atoms/icons';
import { IMAccordions } from '../../../../dff_library/ui_components/components/Accordions';
import IMNormalList from '../../../../dff_library/ui_components/components/List/IMNormalList';
import { dataaa, dataa, data } from './json';
import styles from './styles';
import { typography } from '../../../../dff_library/ui_components/atoms';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AccountSelectDrawerDemo'
>;

const AccountSelectDrawerDemo = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  // const [flag,setFlag] = useState(true)
  const [key, setKey] = useState(0)
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
useEffect(()=>{
  
},[])
  const handleItemClick = (item: any) => {
  console.log("++++++++++++",item.id)
  console.log("____________",selectedAccount)
    if(item.id != selectedAccount){
      console.log("selectedAccount",selectedAccount)
      setKey(key+1)
    }
    else if( selectedAccount == null){
      setKey(key)
    }
    else{
      setKey(key)
    }
  
    
    setSelectedAccount(item.id);
  };

  const handleButtonClick = () => {
    //if (selectedAccount) {
    //   Alert.alert('Please Select an Account');
    //   return;
    // }
  };
  const disableIcon1=<View style={styles.disableIconStyle}></View>

  const highlightIcon1=<View style={styles.highlightIcon}></View>

  const sampleData = [
    {
      id: 1,
      isOpen: true,
      // selectTitleStyle:{{left:-10}}
      title: <Text style={[typography.BodySemiBold1, { left: -8, color: '#333638' }]}>Preffered</Text>,
      isContentJSX: true,
      content: (
        <IMNormalList
          key={key}
          leftIcon="logo"
          rightIconKey="arrow"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          headingKey="name"
          headingTextStyle={styles.headertextStyle}
          list={data}
          touchableStyle={styles.touchableStyle}
          leftIconStyles={styles.leftIconStyles}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={disableIcon1}
          highlightIcon={highlightIcon1}
          highlightWidth={1}
          highlightColor="#F0792E"
          itemHightlightBGC={colors.White}
          itemDefaultBGC={colors.NeutralGrey60}
          leftIconDefaultBGC={colors.White}
          leftIconHightlightBGC={colors.NeutralGrey60}
          itemViewStyle={styles.itemViewStyle}
          onItemClick={handleItemClick}
        />
      ),
      rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
      rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    },
    {
      id: 2,
      isOpen: true,
      // selectTitleStyle:{{left:-10}}
      title: <Text style={[typography.BodySemiBold1, { left: -8, color: '#333638' }]}>Credit cards</Text>,
      isContentJSX: true,
      content: (
        <IMNormalList
        key={key}
          leftIcon="logo"
          rightIconKey="arrow"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          headingKey="name"
          headingTextStyle={styles.headertextStyle}
          list={dataa}
          touchableStyle={styles.touchableStyle}
          leftIconStyles={styles.leftIconStyles}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={disableIcon1}
          highlightIcon={highlightIcon1}
          highlightWidth={1}
          highlightColor="#F0792E"
          itemHightlightBGC={colors.White}
          itemDefaultBGC={colors.NeutralGrey60}
          leftIconDefaultBGC={colors.White}
          leftIconHightlightBGC={colors.NeutralGrey60}
          itemViewStyle={styles.itemViewStyle}
          onItemClick={handleItemClick}
        />
      ),
      rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
      rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    },
    {
      id: 3,
      isOpen: true,
      // selectTitleStyle:{{left:-10}}
      title: <Text style={[typography.BodySemiBold1, { left: -8, color: '#333638' }]}>Bank accounts</Text>,
      isContentJSX: true,
      content: (
        <IMNormalList
        key={key}
          leftIcon="logo"
          rightIconKey="arrow"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          headingKey="name"
          headingTextStyle={styles.headertextStyle}
          list={dataaa}
          touchableStyle={styles.touchableStyle}
          leftIconStyles={styles.leftIconStyles}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={disableIcon1}
          highlightIcon={highlightIcon1}
          highlightWidth={1}
          highlightColor="#F0792E"
          itemHightlightBGC={colors.White}
          itemDefaultBGC={colors.CoolGrey100}
          leftIconDefaultBGC={colors.White}
          leftIconHightlightBGC={colors.CoolGrey100}
          itemViewStyle={styles.itemViewStyle}
          onItemClick={handleItemClick}
        />
      ),
      rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
      rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    },
    {
      id: 4,
      isOpen: false,
      title: <Text style={styles.titleStyle}>UPI payments</Text>,
      isContentJSX: true,
      content: (
        <IMNormalList
          leftIcon="logo"
          rightIconKey="arrow"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          headingKey="name"
          headingTextStyle={styles.headertextStyle}
          list={data}
          touchableStyle={styles.touchableStyle}
          leftIconStyles={styles.leftIconStyles}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={disableIcon1}
          highlightIcon={highlightIcon1}
          highlightWidth={1}
          highlightColor="#F0792E"
          itemHightlightBGC={colors.White}
          itemDefaultBGC={colors.CoolGrey100}
          leftIconDefaultBGC={colors.White}
          leftIconHightlightBGC={colors.CoolGrey100}
          itemViewStyle={styles.itemViewStyle}
          onItemClick={handleItemClick}
        />
      ),
      rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
      rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    },
    {
      id: 5,
      isOpen: false,
      title: <Text style={styles.titleStyle}>PayLater</Text>,
      isContentJSX: true,
      content: (
        <IMNormalList
          leftIcon="logo"
          rightIconKey="arrow"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          headingKey="name"
          headingTextStyle={styles.headertextStyle}
          list={data}
          touchableStyle={styles.touchableStyle}
          leftIconStyles={styles.leftIconStyles}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={disableIcon1}
          highlightIcon={highlightIcon1}
          highlightWidth={1}
          highlightColor="#F0792E"
          itemHightlightBGC={colors.White}
          itemDefaultBGC={colors.CoolGrey100}
          leftIconDefaultBGC={colors.White}
          leftIconHightlightBGC={colors.CoolGrey100}
          itemViewStyle={styles.itemViewStyle}
          onItemClick={handleItemClick}
        />
      ),
      rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
      rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    },
    {
      id: 6,
      isOpen: false,
      title: <Text style={styles.titleStyle}>Pockets</Text>,
      isContentJSX: true,
      content: (
        <IMNormalList
          leftIcon="logo"
          rightIconKey="arrow"
          isListHeader={false}
          subLineKey={'actNumber'}
          starIconKey='starLogo'
          headingKey="name"
          headingTextStyle={styles.headertextStyle}
          list={data}
          touchableStyle={styles.touchableStyle}
          leftIconStyles={styles.leftIconStyles}
          isSeparator={false}
          isOnPressHighlight={true}
          disableIcon={disableIcon1}
          highlightIcon={highlightIcon1 }
          highlightWidth={1}
          highlightColor="#F0792E"
          itemHightlightBGC={colors.White}
          itemDefaultBGC={colors.CoolGrey100}
          leftIconDefaultBGC={colors.White}
          leftIconHightlightBGC={colors.CoolGrey100}
          itemViewStyle={styles.itemViewStyle}
          onItemClick={handleItemClick}
        />
      ),
      rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
      rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    },
  ];

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
        title={STRINGS.str_AccountSelectDrawer}
      />
      <IMAccountSelectDrawer
        isVisible={modalVisible}
        isDisable={true}
        isStatusBarTranslucent={true}
        modalTouchableStyle={{backgroundColor:'rgba(0,0,0,0.8)'}}
        title={'Select account'}
        buttonName='Change'
        onClickButton={handleButtonClick}
        closeIcon={<ICGeneralClose />}
        container={
          <IMAccordions
            isFlatlistAccordian={true}
            items={sampleData}
            isFlatlistLastline={false}
            isWithoutIcon={true}
          />
        }
      />
    </>
  );
};
export default AccountSelectDrawerDemo;
