import React, { useEffect, useState } from 'react';
import { FlatList, View, BackHandler, Text } from 'react-native';
import { IMShimmer } from '../../../../dff_library/ui_components/components/Shimmer';
import CustomRow from './customRow';
import {
  ICGeneralChevronRight,
  Favourite,
} from '../../../../dff_library/ui_components/atoms/icons';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import styles from './styles';
import { STRINGS } from './constants';
import { dataObj } from './json';
import HeaderComponent from '../../../../src/utils/HeaderComponent';

type Props = NativeStackScreenProps<RootStackParamList, 'ShimmerDemo'>;

export interface CustomFavProps {
  enabled?: boolean;
}
const renderFavoriteSection = () => {
  return (
    <>
      <Favourite style={styles.favSvgStyle} />
      <Text style={[styles.favTextStyle, typography.BodySemiBold2]}>
        {STRINGS.str_favourites}
      </Text>
    </>
  );
};

const renderManageSection = () => {
  return (
    <>
      <Text style={[styles.manageTextStyle, typography.BodySemiBold2]}>
        {STRINGS.str_manage}
      </Text>

      <ICGeneralChevronRight />
    </>
  );
};
const renderFavBlock = (flag: boolean) => {
  return (
    <>
      <View style={styles.favBlockParentView}>
        <View style={styles.favBlockChildView}>
          <IMShimmer style={styles.favSectionStyle} enabled={flag}>
            {renderFavoriteSection()}
          </IMShimmer>
        </View>

        <View style={styles.manageBlockChildView}>
          <IMShimmer style={styles.favSectionStyle} enabled={flag}>
            {renderManageSection()}
          </IMShimmer>
        </View>
      </View>

      <FlatList
        data={dataObj}
        horizontal
        style={styles.flatListStyle}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `x_${index}`}
        renderItem={({ item }) => (
          <CustomRow
            text={item.title}
            color={item.color}
            skeletonEnabled={flag}
            textColor={item.textColor}
          />
        )}
      />
    </>
  );
};

const ShimmerDemo = ({ navigation }: Props) => {
  const [skeletonEnabled, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(true); //false for disable the Shimmer
    }, 5000);
  }, []);

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
    <View style={styles.containerStyle}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_shimmer} />
      <View style={styles.mainViewStyle}>
        <IMShimmer style={styles.parentRect} enabled={skeletonEnabled}>
          <View style={styles.parentRect}>
            {renderFavBlock(skeletonEnabled)}
          </View>
        </IMShimmer>

        <IMShimmer style={styles.middleRect} enabled={skeletonEnabled}>
          <View style={styles.middleRect}></View>
        </IMShimmer>
      </View>
    </View>
  );
};
export default ShimmerDemo;
