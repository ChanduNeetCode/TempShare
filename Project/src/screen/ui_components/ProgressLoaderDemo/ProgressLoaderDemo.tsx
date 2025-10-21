import React, { useEffect, useState } from 'react';
import { BackHandler, TouchableOpacity, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import IMProcessLoader from '../../../../dff_library/ui_components/components/ProgressLoader/IMProcessLoader';
import { IMProgressLoader } from '../../../../dff_library/ui_components/components/ProgressLoader';
import { IMShimmer } from '../../../../dff_library/ui_components/components/ProgressLoader';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { STRINGS } from './constants';
import styles from './styles';
import typography from '../../../../dff_library/ui_components/atoms/typography';

type Props = NativeStackScreenProps<RootStackParamList, 'ProgressLoaderDemo'>;

const ProgressLoaderDemo = ({ navigation }: Props) => {
  const loaders = [
    { key: '1', value: 'Progress Loader' },
    { key: '2', value: 'Process Loader' },
    { key: '3', value: 'Process Loader PopUp' },
    { key: '4', value: 'Shimmer' },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(loaders[0]);
  const [skeletonEnabled, setLoading] = useState(true);
  const [isClosePopup, setIsClosePopup] = useState(true);

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    setInterval(() => {
      setLoading(true); //false for disable the Shimmer
    }, 5000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setIsClosePopup(false);
    }, 5000);
  }, []);

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
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_progress} />
      <View style={styles.mainContainer}>
        <IMDropdown
          data={loaders}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          dropdownWidth={actuatedNormalizeWidth(320)}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
          }}
          placeholderText={loaders[0].value}
        />
      </View>

      {selectedVal.key == 1 &&
        <View style={styles.parentViewStyle}>
          <IMProgressLoader
            duration={5000}
            isClockwise={true}
            onAnimationComplete={() => { }}
            radius={actuatedNormalizeWidth(40)}
          />
        </View>
      }
      {selectedVal.key == 2 &&
        <IMProcessLoader
          animationType='none'
          subTitle={STRINGS.str_transaction}
          title={STRINGS.str_Process_Payment}
          parentViewStyle={styles.viewStyle}
        />
      }
      {selectedVal.key == 3 &&
        <>
          <TouchableOpacity
            onPress={() => {
              setIsClosePopup(true);
            }}
            style={styles.buttonStyle}>
            <Text style={[typography.ButtonLarge, { color: colors.White }]}>{STRINGS.str_buttonTitle}</Text>
          </TouchableOpacity>
          <IMProcessLoader
            subTitle={STRINGS.str_transaction}
            isStatusBarTranslucent={true}
            title={STRINGS.str_Process_Payment}
            isBackgroundTransparent={true}
            isShowLoadingIndicator={isClosePopup}
          />
        </>
      }
      {selectedVal.key == 4 &&
        <View style={styles.mainViewStyle}>
          <IMShimmer style={styles.parentRect} isEnabled={skeletonEnabled}>
            <View style={styles.parentRect}></View>
          </IMShimmer>
          <IMShimmer style={styles.middleRect} isEnabled={skeletonEnabled}>
            <View style={styles.middleRect}></View>
          </IMShimmer>
        </View>
      }
    </View>
  );
};

export default ProgressLoaderDemo;
