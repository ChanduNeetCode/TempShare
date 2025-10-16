import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../utils/HeaderComponent';
import IMMiniSuccessPage from '../../../../dff_library/ui_components/components/Minisuccesspage/IMMiniSuccessPage/index';
import { IMPrimaryButton } from '../../../../dff_library/ui_components';
import {
  ICMiniSuccessCenterFlower,
  ICCorrect,
  ICGeneralChevronRight,
  ICMiniSuccessRightFlower,
  ICMiniSuccessLeftFlower
} from '../../../../dff_library/ui_components/atoms/icons';
import { RootStackParamList } from '../../../routes/RootStackParams';
import { STRINGS } from './constants';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MiniSuccessPageDemo'>;

const MiniSuccessPageDemo = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);

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
        title={STRINGS.str_minisuccesspage}
      />
      <View style={styles.parentViewStyle}>
       <IMPrimaryButton
       titleRecv='Mini SuccessPage'
       type='large'
       onPress={()=>setModalVisible(true)}
       />
        <IMMiniSuccessPage
          closeModal={() => { setModalVisible(false)}}
          isVisible={modalVisible}
          isblurContainer={true}
          modelLeftIcon={<ICMiniSuccessRightFlower />}
          modelRightIcon={<ICMiniSuccessLeftFlower />}
          centerFlowerIcon={<ICMiniSuccessCenterFlower />}
          centerCorrectIcon={<ICCorrect />}
          activeOpacityProp={1}
          isStatusBarTranslucent
          childProps={
            <>
              <View style={styles.contextualOuterStyle}>
                <View style={styles.contextualInnerStyle}>
                  <ICCorrect width={36} height={36} style={styles.correctIconStyle}/>
                  <View style={styles.innerTextView}>
                    <Text style={styles.contextualHeaderStyle}>
                      {STRINGS.str_contextualHeader}
                    </Text>
                    <Text style={styles.contextualHeaderStyle2}>
                      {STRINGS.str_contextualTitle}
                    </Text>
                  </View>
                </View>
              </View>
              <IMPrimaryButton
              type={'large'}
              titleRecv='Setup Autopay for another bill'
              onPress={closeModal}
              buttonStyle={styles.buttonStyle}
              />
              <View style={styles.secondryViewStyle}>
                <TouchableOpacity onPress={closeModal}>
                    <Text style={[
                      styles.secondryTextStyle,
                    ]}>{STRINGS.str_secCtatitle}
                    </Text>
                </TouchableOpacity>
                <Pressable onPress={closeModal}>
                  <View style={styles.backIconStyle}>
                    {<ICGeneralChevronRight />}
                  </View>
                </Pressable>
              </View>
            </>
          }
          headerTitle={{
            title: STRINGS.str_headerTitle,
            styleHeader: {},
          }}
          bodyTitle={{
            title: <Text>{STRINGS.str_bodyTitle}</Text>,
            styleBody: {},
          }}
        />
      </View>
    </>
  );
};
export default MiniSuccessPageDemo;
