import React, { useEffect, useState } from 'react';
import { BackHandler, Image, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import { STRINGS } from './constants';
import { IMAdobeTargetA, IMAdobeTargetB, IMAdobeTargetC, accountTargetListItemData } from '../../../../dff_library/techical_components/components/AdobeTarget/index';
import { styles } from './styles';
import { Back } from '../../../../dff_library/ui_components/atoms/icons';
import { ScrollView } from 'react-native-gesture-handler';
import { IMWebView } from '../../../../dff_library/techical_components/components/WebView/index';


type Props = NativeStackScreenProps<RootStackParamList, 'AdobeTargetDemo'>;

const AdobeTargetDemo = ({ navigation }: Props) => {
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

  const [showComp, setShowComp] = useState(false);

  const handleClick = () => {
    return (
      setShowComp(true)
    )
  }

  const [result, setResult] = useState([]);

  const onPressButton = async () => {
    try {
      var res = await accountTargetListItemData();
      
      setResult(res);
    }
    catch (error) {
      console.log("error", error)
    }
  };

  const [isShow, setIsShow] = useState(false);

  const handleBannnerPressA = (id: number) => {
    
    setIsShow(true);
  }

  const handleCrossButtonClick = () => {
    setIsShow(false);
  }

  const handleBannnerPressC = () => {
    
    setIsShow(true);
  }

  const handleBannnerPressB = () => {
    
    setIsShow(true);
  }

  const TallFullWidthBannerDemoAA = () => {
    return (
      <View style={styles.centered}>
        <Image
          source={{ uri: result[6] }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
      </View>
    );
  };

  const componentToDisplay = [TallFullWidthBannerDemoAA(), TallFullWidthBannerDemoAA(), TallFullWidthBannerDemoAA(), TallFullWidthBannerDemoAA()]

  return (
    <ScrollView>
      <>
        <CustomStatusBar
          gradientColorsArray={[
            colors.GradientOrangeStart,
            colors.GradientOrangeEnd,
          ]}
        />

        {!isShow && <HeaderComponent navigation={navigation} title={STRINGS.str_title} />}

        {isShow && <TouchableOpacity
          onPress={handleCrossButtonClick}
          style={{ width: '100%', height: 50, backgroundColor: colors.GradientOrangeStart }}>
          <Back style={{ height: 10, width: 10, marginLeft: 15, marginTop: 10 }} />
        </TouchableOpacity>}

        {isShow && <IMWebView sourceUri={result[1]} WebViewStyle={{ width: '100%', height: 800 }} />}

        <TouchableOpacity style={styles.button}
          onPress={() => {
            handleClick()
            onPressButton()
          }}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
        
        {(result[0] === 'expA')
          ?
          showComp && IMAdobeTargetA({ onPressBannerA: handleBannnerPressA, numberOfProgressBar: 4, imagesToDisplay: componentToDisplay, titltTextA: result[3], titleStylePropA: styles.titleStyle, cardHeight: 102, progressBarWidth: 65 })
          :
          (result[0] === 'expB')
            ?
            showComp && IMAdobeTargetB({ onPressBannerB: handleBannnerPressB, imagesToDisplay: result[6], descriptionText: result[5], isAboveText: false })
            :
            showComp && IMAdobeTargetC({ onPressBannerC: handleBannnerPressC, buttonTextC: result[4], descriptionTextC: result[5], headingTextC: result[3], titleTextC: result[2], buttonTextStyleC: { color: '#00000' }, descriptionTextStyleC: { color: '#000000' }, buttonStyleC: { backgroundColor: '#FFFFFF' }, titleTextStyleC: { color: '#000000' } })
        }
      </>
    </ScrollView>
  );
};

export default AdobeTargetDemo;
