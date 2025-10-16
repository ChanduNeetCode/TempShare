import React, { useEffect } from 'react';
import { BackHandler, Text, View,TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { STRINGS } from './constants';
import styles from './styles';
import { typography } from '../../../../dff_library/ui_components/atoms';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ExceptionErrorHandlingDemo'
>;
const ExceptionErrorHandlingDemo = ({ navigation }: Props) => {
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

  const onPress = async () => {
  };

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      <View style={styles.containerStyle}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            { backgroundColor: colors.PrimaryOrange100 },
          ]}
          onPress={() => onPress()}>
          <Text style={[typography.ButtonLarge, styles.buttonTextStyle]}>
            Click Here
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ExceptionErrorHandlingDemo;
