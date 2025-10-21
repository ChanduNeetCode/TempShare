import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Image,
  NativeModules,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import { STRINGS } from './constants';
import {
  IMAdobeTargetAndroidA,
  IMAdobeTargetAndroidB,
  IMAdobeTargetAndroidC,
  accountTargetListItemDataAndroid,
} from '../../../../dff_library/techical_components/components/AdobeTargetAndroid/index';
import { styles } from './styles';
import { Back } from '../../../../dff_library/ui_components/atoms/icons';
import { ScrollView } from 'react-native-gesture-handler';
import { IMWebView } from '../../../../dff_library/techical_components/components/WebView/index';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'AdobeTargetDemoAndroid'
>;

const AdobeTargetDemoAndroid = ({ navigation }: Props) => {
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
    return setShowComp(true);
  };
  const { IMAdobeTarget } = NativeModules;

  const [button, setButton] = useState('');
  const [redirectURL, setRedirectURL] = useState('');
  const [headingText, setHeadingText] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [exp, setExp] = useState('');
  const [bannerName, setBannerName] = useState('');
  const [bannerCategory, setBannerCategory] = useState('');
  const [titleColor, setTitleColor] = useState('');
  const [descriptionColor, setDescriptionColor] = useState('');
  const [buttonTextColor, setButtonTextColor] = useState('');
  const [buttonBgColor, setButtonBgColor] = useState('');
  const [cardBgColor, setCardBgColor] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onPressButton = async () => {
    try {
      var res = await accountTargetListItemDataAndroid();
      setButton(res.button);
      setRedirectURL(res.redirectURL);
      setHeadingText(res.headingText);
      setImageURL(res.imageURL);
      setDescription(res.description);
      setTitle(res.title);
      setExp(res.exp);
      setBannerName(res.bannerName);
      setBannerCategory(res.bannerCategory);
      setTitleColor(res.titleColor);
      setDescriptionColor(res.descriptionColor);
      setButtonTextColor(res.buttonTextColor);
      setButtonBgColor(res.buttonBgColor);
      setCardBgColor(res.cardBgColor);
      setSuccess(res.success);
      setMessage(res.message);
    } catch (error) {
        return error;
    }
  };

  const [isShow, setIsShow] = useState(false);

  const handleBannnerPressA = (id: number) => {
    setIsShow(true);
  };

  const handleCrossButtonClick = () => {
    setIsShow(false);
  };

  const handleBannnerPressC = () => {
    setIsShow(true);
  };

  const handleBannnerPressB = () => {
    setIsShow(true);
  };

  const TallFullWidthBannerDemoAA = () => {
    return (
      <View style={styles.centered}>
        <Image
          source={{ uri: imageURL }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
      </View>
    );
  };

  const componentToDisplay = [
    TallFullWidthBannerDemoAA(),
    TallFullWidthBannerDemoAA(),
    TallFullWidthBannerDemoAA(),
    TallFullWidthBannerDemoAA(),
  ];

  return (
    <ScrollView>
      <>
        <CustomStatusBar
          gradientColorsArray={[
            colors.GradientOrangeStart,
            colors.GradientOrangeEnd,
          ]}
        />

        {!isShow && (
          <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
        )}

        {isShow && (
          <TouchableOpacity
            onPress={handleCrossButtonClick}
            style={styles.crossButtonStyle}>
            <Back
              style={styles.backButton}
            />
          </TouchableOpacity>
        )}

        {isShow && (
          <IMWebView
            sourceUri={redirectURL}
            WebViewStyle={styles.webViewStyle}
          />
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleClick();
            onPressButton();
          }}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>

        {exp === 'expA'
          ? showComp &&
          IMAdobeTargetAndroidA({
            onPressBannerA: handleBannnerPressA,
            numberOfProgressBar: 4,
            imagesToDisplay: componentToDisplay,
            titltTextA: headingText,
            titleStylePropA: styles.titleStyle,
            cardHeight: 102,
            progressBarWidth: 65,
          })
          : exp === 'expB'
            ? showComp &&
            IMAdobeTargetAndroidB({
              onPressBannerB: handleBannnerPressB,
              imagesToDisplay: imageURL,
              descriptionText: description,
              isAboveText: false,
            })
            : showComp &&
            IMAdobeTargetAndroidC({
              onPressBannerC: handleBannnerPressC,
              buttonTextC: button,
              descriptionTextC: description,
              headingTextC: headingText,
              titleTextC: title,
              buttonTextStyleC: { color: buttonTextColor },
              descriptionTextStyleC: { color: descriptionColor },
              buttonStyleC: { backgroundColor: buttonBgColor },
              titleTextStyleC: { color: titleColor },
            })}
      </>
    </ScrollView>
  );
};

export default AdobeTargetDemoAndroid;
