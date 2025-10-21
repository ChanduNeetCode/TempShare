import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS } from './constants';
import { CarouselData, CarouselData1 } from './json';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import IMCarousel from '../../../../dff_library/ui_components/components/Carousel/IMCarousel';
import IMTallCarousel from '../../../../dff_library/ui_components/components/Carousel/IMTallCarousel';

import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { BannerTypes } from '../../../../dff_library/ui_components/components/Banners/utils/enum';
import { componentDisplayProps } from '../../../../dff_library/ui_components/components/Carousel/IMCarousel/types';
import { componentDisplayProps1 } from '../../../../dff_library/ui_components/components/Carousel/IMTallCarousel/types';
import styles from './styles';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';

type Props = NativeStackScreenProps<RootStackParamList, 'CarouselDemo'>;

const dropDownList = [
  { key: 1, value: STRINGS.str_shortCarousel },
  { key: 2, value: STRINGS.str_tallCarousel},
];

const CarouselDemo = ({ navigation }: Props) => {
  const [componentType, setComponentType] = useState(BannerTypes.ShortCarousel);
  const [selectedVal, setSelectedVal] = useState<any>(dropDownList[0]);

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
    <View style={{ flex: 1 }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      <View style={styles.buttonsContainer}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          dropdownType={DropdownType.Wide}
          data={dropDownList}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
          }}
          placeholderText={dropDownList[0].value}
        />
      </View>
      <ScrollView style={styles.parentViewStyle}>
        <Text style={styles.titleStyle}>{componentType}</Text>
        {selectedVal.key == 1 ? (
          <IMCarousel
            inactiveSlideOpacity={1}
            isDotsRequired={true}
            isAutoPlay={false}
            isLoop={false}
            onPress={(val: componentDisplayProps) => {}}
            data={CarouselData}
          />
        ) : (
          <IMTallCarousel
            inactiveSlideOpacity={1}
            isDotsRequired={true}
            isAutoPlay={false}
            isLoop={false}
            data={CarouselData1}
            onPress={(val: componentDisplayProps1) => {}}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default CarouselDemo;
