import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { STRINGS } from './constants';
import { IMSegmentControl } from '../../../../dff_library/ui_components/components/SegmentControl';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
type Props = NativeStackScreenProps<RootStackParamList, 'SegmentControl'>;

const SegmentControlDemo = ({ navigation }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const InvestComponent : FunctionComponent = (): ReactElement => {
    return (
      <Text style={{ marginTop: 12,color:colors.NeutralGrey120 }}>Invest Landing Screen</Text>
    );
  };

  const InsureComponent: FunctionComponent = (): ReactElement => {
    return (
      <Text style={{ marginTop: 12,color:colors.NeutralGrey120 }}>Insure Landing Screen</Text>
    );
  };

  const components = [
    <InvestComponent key="0" />,
    <InsureComponent key="1" />,
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
        title={STRINGS.str_segmentControl}
      />

      <View style={styles.parentViewStyle}>
        <Text style={styles.titleStyle}>{STRINGS.str_segmentControl}</Text>
        <IMSegmentControl
          tabTitles={[{ title: 'Invest' }, { title: 'Insure' }]}
          onSelect={index => {
            setSelectedIndex(index);
          }}
          parentViewStyle={{
            backgroundColor: colors.White,
            height: actuatedNormalizeHeight(43),
            borderColor: colors.NeutralGrey60,
            borderRadius: actuatedNormalizeWidth(13),
            borderStyle: 'solid',
            elevation: 2.1,
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 1,
          }}
          selectedIndex={selectedIndex}
          components={components}
          selectedTitleBgClr={colors.GradientOrangeStart}
          unSelectedTitleBgClr={colors.White}
          tabViewStyle={{ paddingHorizontal: actuatedNormalizeWidth(60) }}
        />
      </View>
    </>
  );
};

export default SegmentControlDemo;
