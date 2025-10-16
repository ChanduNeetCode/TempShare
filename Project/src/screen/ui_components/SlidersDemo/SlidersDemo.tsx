import React, { useEffect, useState } from 'react';
import { View, TextInput, BackHandler } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS, sliders } from './constants';
import {
  IMRangeSlider,
  IMContinuousSlider,
  IMDiscreteSlider,
} from '../../../../dff_library/ui_components/components/Sliders';
import styles from './styles';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';

type Props = NativeStackScreenProps<RootStackParamList, 'SlidersDemo'>;

const SlidersDemo = ({ navigation }: Props) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  const [selectedItem, setSelectedItem] = useState<any>(sliders[0]);
  const [sliderValue, setSliderValue] = useState(20);

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
    <View style={styles.mainContainer}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_slider} />
      <View style={styles.parentContainer}>
        <IMDropdown
          dropdownWidth={styles.dropDownWidth.width}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          data={sliders}
          placeholderText={STRINGS.str_slider}
          onSelect={selectedItem => {
            setSelectedItem(selectedItem);
          }}
        />
        {selectedItem.key === '1' && (
          <View style={styles.parentViewStyle}>
            <IMRangeSlider
              onMinSlider={val => {
            
              }}
              onMaxSlider={val => {
              
              }}
              titleStyle={styles.titleStyle}
              labelStyle={styles.labelStyle}
              widthSlider={styles.sliderWidthStyle.width}
              numberOfDots={10}
              minValue={1000}
              maxValue={10000}
              steps={1000}
              title={STRINGS.str_range_slider}
              styleBGTrack={styles.styleBGTrackStyle}
            />
          </View>
        )}
        {selectedItem.key === '2' && (
          <View style={styles.parentViewStyle} key={Math.random()}>
            <IMContinuousSlider
              onSlider={val => {
                console.log('Value : ', val);
              }}
              widthSlider={styles.sliderWidthStyle.width}
              titleStyle={styles.titleStyle}
              labelStyle={styles.labelStyle}
              numberOfDots={10}
              minValue={100000}
              maxValue={500000}
              steps={100000}
              title={STRINGS.str_continuous_slider}
              initialValueOfSlider={0}
              styleBGTrack={styles.styleBGTrackStyle}
              key={Math.random()}
            />
          </View>
        )}
        {selectedItem.key === '3' && (
          <View style={styles.parentViewStyle} key={Math.random()}>
            <IMDiscreteSlider
              widthSlider={styles.sliderWidthStyle.width}
              titleStyle={styles.titleStyle}
              minValue={10}
              maxValue={100}
              slideValue={sliderValue}
              steps={1}
              title={STRINGS.str_discrete_slider}
            />
            <TextInput
              style={styles.descreteSliderTextInputStyles}
              onChangeText={value => {
                const newValue = parseInt(value, 10);
                setSliderValue(newValue);
              }}
              keyboardType="numeric"
              defaultValue={String(sliderValue)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SlidersDemo;
