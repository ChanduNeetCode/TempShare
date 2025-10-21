import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { IMHorizontalStackedView } from '../../../../dff_library/ui_components/index';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { sampleData, sampleItems, sampleAmountData } from './json';
import { STRINGS } from './constants';
import styles from './styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'HorizontalStackedViewDemo'
>;

const HorizontalStackedViewDemo = ({ navigation }: Props) => {
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
      <HeaderComponent navigation={navigation} title={STRINGS.str_hsc} />
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[colors.GradientOrangeStart, colors.GradientOrangeEnd]}
        style={styles.linearGradientStyle}>
        <View style={styles.componentSeparatorStyle}>
          <IMHorizontalStackedView
            items={sampleData}
            isTouchableDisable={false}
            touchableFunc={item => {}}
            containerStyle={styles.ContainerStyle}
            separatorLineStyle={styles.separatorLineStyle}
            renderItemStyle={styles.renderItemStyle}
            titleStyle={styles.titleStyle}
            subTitleStyle={styles.subTitleStyle}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            linearGradinentStyleProps={styles.linearGradientStyle}
            linearGradientColorStart={colors.GradientOrangeStart}
            linearGradientColorEnd={colors.GradientOrangeEnd}
          />
        </View>
        <View style={styles.componentSeparatorStyle}>
          <IMHorizontalStackedView
            items={sampleItems}
            isTouchableDisable={false}
            touchableFunc={item => {}}
            linearGradientColorStart={colors.GradientOrangeStart}
            linearGradientColorEnd={colors.GradientOrangeEnd}
          />
        </View>
        <View style={styles.componentSeparatorStyle}>
          <IMHorizontalStackedView
            items={sampleAmountData}
            isTouchableDisable={true}
            linearGradientColorStart={colors.GradientOrangeStart}
            linearGradientColorEnd={colors.GradientOrangeEnd}
          />
        </View>
      </LinearGradient>
    </>
  );
};

export default HorizontalStackedViewDemo;
