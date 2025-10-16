import React, { useEffect, useState } from 'react';
import { View, BackHandler, TouchableOpacity, Text, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { STRINGS } from './constants';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMPopoverToolTip } from '../../../../dff_library/ui_components/components/ToolTips';
import { ICGeneralInformation } from '../../../../dff_library/ui_components/atoms/icons';
import { styles, Directionstyles, themeStyles } from './styles';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { IMDropdown } from '../../../../dff_library/ui_components';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';

enum Placement {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  AUTO = 'auto',
  FLOATING = 'floating',
  CENTER = 'center',
}


export const dropDownList = [
  { key: '1', value: 'Directions',style:Directionstyles.popOverStyless,textStyle:Directionstyles.textStyle },
  { key: '2', value: 'Light Theme',style:Directionstyles.popOverStyless,textStyle:Directionstyles.textStyle },
  { key: '3', value: 'Dark Theme',style:themeStyles.popOverStyless,textStyle:themeStyles.textStyle  },
  { key: '4', value: 'Maroon Theme',style:themeStyles.maroonpopOverStyless,textStyle:themeStyles.textStyle},
];

type Props = NativeStackScreenProps<RootStackParamList, 'ToolTipsDemo'>;

const ToolTipsDemo = ({ navigation }: Props) => {
  const [selectedItem, setSelectedItem] = useState<any>(dropDownList[0]);
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
      <HeaderComponent navigation={navigation} title={STRINGS.str_toolTips} />
      <View style={styles.mainContainer}>
        <IMDropdown
          data={dropDownList}
          disable={false}
          dropdownWidth={actuatedNormalizeWidth(320)}
          dropdownType={DropdownType.SingleColumn}
          placeholderText={selectedItem.value}
          parentDropDownStyle={styles.mainDropDown}
          onSelect={selectedtem => {
            setSelectedItem(selectedtem);
          }}
        />
      </View>
      {selectedItem.key === '1' ? (
        <View style={styles.container}>
          <IMPopoverToolTip
            containerStyle={Directionstyles.tooltipContainer1}
            textStyle={selectedItem.textStyle}
            contentText="This will be the example of a short text tooltip text ye."
            placement={Placement.TOP}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
          <IMPopoverToolTip
            containerStyle={Directionstyles.tooltipContainer2}
            textStyle={selectedItem.textStyle}
            contentText="This will be the example of a short text tooltip text y"
            placement={Placement.BOTTOM}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
          <IMPopoverToolTip
            containerStyle={Directionstyles.tooltipContainer3}
            textStyle={selectedItem.textStyle}
            contentText="This will be the example of a short text tooltip text ye."
            placement={Placement.RIGHT}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
          <IMPopoverToolTip
            containerStyle={Directionstyles.tooltipContainer4}
            textStyle={selectedItem.textStyle}
            contentText="This will be the example of a short text tooltip text ye."
            placement={Placement.LEFT}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
          <IMPopoverToolTip
            containerStyle={Directionstyles.tooltipContainer5}
            textStyle={selectedItem.textStyle}
            contentText="This will be the example of a short text tooltip text ye."
            placement={Placement.BOTTOM}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
        </View>
      ):
        <View style={styles.container}>
          <Text style={themeStyles.indicatorTextStyle1}>
            {STRINGS.str_Short}
          </Text>
          <IMPopoverToolTip
            containerStyle={themeStyles.tooltipContainer1}
            textStyle={selectedItem.textStyle}
            contentText="This will be the example of a short text tooltip"
            placement={Placement.RIGHT}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
          <Text style={themeStyles.indicatorTextStyle2}>
            {STRINGS.str_Medium}
          </Text>
          <IMPopoverToolTip
            containerStyle={themeStyles.tooltipContainer2}
            textStyle={selectedItem.textStyle}
            contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sem non nisl convallis mollis vel sed odio. Aliquam lorem arcu, consequat nec dolor ut, porttitor pulvinar magna."
            placement={Placement.RIGHT}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
          <Text style={themeStyles.indicatorTextStyle3}>
            {STRINGS.str_Long}
          </Text>
          <IMPopoverToolTip
            containerStyle={themeStyles.tooltipContainer3}
            textStyle={selectedItem.textStyle}
            contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et felis tristique, tempus augue non, interdum lorem. Fusce volutpat, turpis sed pellentesque mollis, leo eros consectetur erat, sit amet dapibus eros ligula non elit. Donec a facilisis felis, vitae semper lectus. Nam at maximus felis. In hac habitasse platea dictumst."
            placement={Placement.RIGHT}
            popoverStyles={selectedItem.style}
            verticalOffset={Platform.OS == 'ios' ? 0 : -45}
            ui_components={
              <TouchableOpacity>
                <ICGeneralInformation
                  height={themeStyles.iconSizes.height}
                  width={themeStyles.iconSizes.width}
                />
              </TouchableOpacity>
            }
          />
        </View>
      }
    </>
  );
};

export default ToolTipsDemo;