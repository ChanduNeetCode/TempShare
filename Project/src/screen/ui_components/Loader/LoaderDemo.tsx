import React, { useEffect, useState } from 'react';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { IMLoader } from '../../../../dff_library/ui_components/components/Loader';
import { STRINGS } from './constants';
import styles from './styles';
import typography from '../../../../dff_library/ui_components/atoms/typography';

type Props = NativeStackScreenProps<RootStackParamList, 'LoaderDemo'>;

const LoaderDemo = ({ navigation }: Props) => {
  const [showLoader, setShowLoader] = useState(true);
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  const onPress = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 10000);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 10000);

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <View>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent
        navigation={navigation}
        title={STRINGS.str_buttonTitle}
      />
      <View style={styles.parentViewStyle}>
        <Text style={styles.titleStyle}>{STRINGS.str_bodyTitle}</Text>
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
          style={styles.buttonStyle}>
          <Text style={[typography.ButtonLarge, { color: colors.White }]}>
            {STRINGS.str_buttonTitle}
          </Text>
        </TouchableOpacity>
        <IMLoader
          textStyle={{ paddingLeft: 15 }}
          activityIndicatorColor={colors.PrimaryOrange100}
          showLoadingIndicator={showLoader}
        />
      </View>
    </View>
  );
};

export default LoaderDemo;
