import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { bannersData, bannersDataTallCarousel } from './utils/json';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import {
  IMPortraitBanner,
  IMSquareBanner,
  IMTallCarouselBanner,
  IMTallFullWidthBanner,
  IMShortCarouselBanner,
  IMTallStoryStyleBanner,
} from '../../../../dff_library/ui_components/components/Banners';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import {
  OldMan,
} from '../../../../dff_library/ui_components/atoms/icons';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import styles from './styles';
import { STRINGS } from './utils/constants';


type Props = NativeStackScreenProps<RootStackParamList, 'BannersDemo'>;
const BannersDemo = ({ navigation }: Props) => {
  const banners = [
    { key: '1', value: STRINGS.str_shortCarousel },
    { key: '2', value: STRINGS.str_tallCarousel },
    { key: '3', value: STRINGS.str_tall_full_width_carousel },
    { key: '4', value: STRINGS.str_tall_story_style },
    { key: '5', value: STRINGS.str_portrait },
    { key: '6', value: STRINGS.str_square },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(banners[0]);
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

  const renderView = () => {
    switch (selectedVal.key) {
      case '1':
        return (
          <View style={{marginLeft:actuatedNormalizeWidth(20)}}>
          <IMShortCarouselBanner
            onPress={(id: number) => console.log('Banner has been clicked', id)}
            data={bannersData}
          />
          </View>
        );
      case '2':
        return (
          <View style={{marginLeft:20}}>
          <IMTallCarouselBanner
            data={bannersDataTallCarousel}
            isShowsHorizontalScrollIndicator={false}
            onPress={(id: number) => console.log('Banner has been clicked', id)}
          />
          </View>
        );
      case '3':
        return (
          <IMTallFullWidthBanner
            onPress={() => {
             
            }}
          />
        );
      case '4':
        return (
          <IMTallStoryStyleBanner
            imagesToDisplay={<OldMan />}
            numberOfProgressBars={4}
            onPress={(id: number) => console.log('Banner has been clicked', id)}
            progressBarHeight={2}
          />
        );
      case '5':
        return (
          <IMPortraitBanner
            onPress={() => {
            
            }}
          />
        );
      case '6':
        return (
          <IMSquareBanner
            onPress={() => {
            
            }}
          />
        );
    }
  };

  return (
    <View>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      <View style={styles.mainContainer}>
        <IMDropdown
          data={banners}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          dropdownWidth={actuatedNormalizeWidth(320)}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
          }}
          placeholderText={banners[0].value}
        />
        {renderView()}
      </View>
    </View>
  );
};

export default BannersDemo;
