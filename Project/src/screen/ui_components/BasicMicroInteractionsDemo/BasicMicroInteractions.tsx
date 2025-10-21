import React, { useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { BasicMicroInteractionTypes } from '../../../../dff_library/ui_components/components/BasicMicroInteractions/utils/enum';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { IMBasicMicroInteractions } from '../../../../dff_library/ui_components/components/BasicMicroInteractions';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { STRINGS } from './constants';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import styles from './styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'BasicMicroInteractionsDemo'
>;

const dropDownList = [
  { key: 1, value: BasicMicroInteractionTypes.CheckMark },
  { key: 2, value: BasicMicroInteractionTypes.CheckMarkWhite },
  { key: 3, value: BasicMicroInteractionTypes.Delete },
  { key: 4, value: BasicMicroInteractionTypes.FavouriteAdd },
  { key: 5, value: BasicMicroInteractionTypes.FavouriteRemove },
  { key: 6, value: BasicMicroInteractionTypes.IManLoader },
  { key: 7, value: BasicMicroInteractionTypes.TransitionaryAnimation },
];

const BasicMicroInteractionsDemo = ({ navigation }: Props) => {
  const [selectedVal, setSelectedVal] = useState<any>(dropDownList[0]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.PastelAmber100 }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />
      <IMDropdown
        parentDropDownStyle={styles.dropdownStyle}
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.SingleColumn}
        data={dropDownList}
        placeholderText={selectedVal.value}
        onSelect={(selectedItem, _index) => {
          setSelectedVal(selectedItem);
        }}
      />
      <View style={styles.parentViewStyle}>
        {selectedVal.value && (
          <IMBasicMicroInteractions
            type={selectedVal.value}
            style={styles.basicinteractionStyle}
            isAutoPlay={true}
            isLoop={true}
            count={3}
          />
        )}
      </View>
    </View>
  );
};

export default BasicMicroInteractionsDemo;
