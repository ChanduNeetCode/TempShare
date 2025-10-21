import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import { STRINGS } from './constants';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMReadMore } from '../../../../dff_library/ui_components/components/ReadMore';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';

type Props = NativeStackScreenProps<RootStackParamList, 'ReadMoreDemo'>;

const ReadMoreDemo = ({ navigation }: Props) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  const accordions = [
    { key: 1, value: 'Seemore & Less in same line' },
    { key: 2, value: 'Seemore & Less in new line' },
  ];
  const [selectedVal, setSelectedVal] = useState<any>(accordions[0]);

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
    <View style={styles.mainStyle}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent navigation={navigation} title={STRINGS.str_ReadMore} />
      <View style={styles.parentDropdownStyle}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          placeholderText={accordions[0].value}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          data={accordions}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
          }}
        />
      </View>
      <View style={styles.parentViewStyle}>
        {selectedVal.key == 1 && (
          <IMReadMore
            numberOfLines={2}
            seeMoreStyle={styles.seeMoreLessStyle}
            seeLessStyle={styles.seeMoreLessStyle}
            style={styles.body}
          >
            {STRINGS.str_ContentFlex}
          </IMReadMore>
        )}
        {selectedVal.key == 2 && (
          <IMReadMore
            numberOfLines={3}
            ellipsis={'View'}
            seeMoreText={'More'}
            seeLessText={'ViewLess'}
            newLine={true}
            ellipsisStyle={styles.ellipsisStyle}
            seeMoreContainerStyleSecondary={{ position: 'relative' }}
            seeMoreStyle={styles.seeMoreLessStyle}
            seeLessStyle={styles.seeMoreLessStyle}
            style={styles.body}
          >
            {STRINGS.str_Content}
          </IMReadMore>
        )}



      </View>
    </View>
  );
};

export default ReadMoreDemo;
