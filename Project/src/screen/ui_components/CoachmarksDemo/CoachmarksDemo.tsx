import React, { useEffect, useState } from 'react';
import { BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../utils/HeaderComponent';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { messages, STRINGS } from './constants';
import IMCoachMark from '../../../../dff_library/ui_components/components/Coachmarks/IMCoachMark/index';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import {
  ICCoachmarkRectangle,
  ICCoachmarkLady,
} from '../../../../dff_library/ui_components/atoms/icons';
import useStyles from './styles';
import { typography } from '../../../../dff_library/ui_components/atoms';
const coachmark = [
  {
    key: 0,
    value: 'Single Coachmark',
    textString: STRINGS.str_singleCoachMark,
    type: 'textOnly',
  },
  {
    key: 1,
    value: 'Single Coachmark with linear gradient',
    type: 'textOnly',
    textString: STRINGS.str_singleCoachMark,
    isLinearGradiant: true,
  },
  {
    key: 2,
    value: 'Single Coachmark with image',
    textString: STRINGS.str_singleCoachMarkImage,
    type: 'withImage',
  },
  {
    key: 3,
    value: 'Single Coachmark with image Linear gradient',
    type: 'withImage',
    textString: STRINGS.str_singleCoachMarkImage,
    isLinearGradiant: true,
  },
  { key: 4, value: 'Journey Coachmark', type: 'textOnly' },
  {
    key: 5,
    value: 'Journey Coachmark with linear gradient',
    type: 'textOnly',
    isLinearGradiant: true,
  },
  { key: 6, value: 'Journey Coachmark with image', type: 'withImage' },
  {
    key: 7,
    value: 'Journey Coachmark with image Linear gradient',
    type: 'withImage',
    isLinearGradiant: true,
  },
];

enum Placement {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  AUTO = 'auto',
  FLOATING = 'floating',
  CENTER = 'center',
}

type Props = NativeStackScreenProps<RootStackParamList, 'CoachmarksDemo'>;

const CoachmarksDemo = ({ navigation }: Props) => {
  const styles = useStyles();
  const [selectedVal, setSelectedVal] = useState<any>(coachmark[0]);
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  const [isVisible, setIsVisible] = useState(false);
  const showPopover = () => {
    setIsVisible(true);
  };
  const hidePopover = () => {
    setIsVisible(false);
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

  const children = (
    <TouchableOpacity style={{ margin: 20 }} onPress={showPopover}>
      <Text style={styles.titleStyle}>{selectedVal.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_coachmarks} />
      <View style={{ top: actuatedNormalizeHeight(20), alignSelf: 'center' }}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          placeholderText={coachmark[0].value}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          data={coachmark}
          onSelect={selectedItem => {
            setSelectedVal(selectedItem);
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          marginTop: actuatedNormalizeHeight(50),
          paddingLeft: 15,
          paddingRight: 15,
          width: '100%',
        }}>
        {selectedVal.key == 0 && (
          <IMCoachMark
            children={children}
            activeDotClr={colors.PrimaryOrange100}
            btnGradientTxtClr={colors.NeutralGrey120}
            buttonGradientClrs={[colors.NeutralGrey60, colors.NeutralGrey60]}
            hidePopover={hidePopover}
            inActiveDotClr={colors.GreyWithOpacity}
            isVisible={isVisible}
            linearGradientColor1={colors.White}
            linearGradientColor2={colors.White}
            mainContainerProp={{ borderRadius: 16 }}
            placement={Placement.LEFT}
            popBackGroundClr={colors.White}
            popHeight={106}
            textString={messages}
            textStyleProp={{ color: colors.Black }}
          />
        )}
        {selectedVal.key == 1 && (
          <IMCoachMark
            children={children}
            buttonGradientClrs={[
              colors.PrimaryOrange100,
              colors.PrimaryOrange100,
            ]}
            activeDotClr={colors.White}
            btnGradientTxtClr={colors.White}
            hidePopover={hidePopover}
            inActiveDotClr={colors.PrimaryOrange80}
            isVisible={isVisible}
            linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd}
            mainContainerProp={{ borderRadius: 16 }}
            placement={Placement.BOTTOM}
            popBackGroundClr={colors.PrimaryOrange100}
            popHeight={106}
            textString={messages}
            textStyleProp={{ color: colors.White }}
          />
        )}
        {selectedVal.key == 2 && (
          <IMCoachMark
            children={children}
            coachMarkImg={
              <View style={styles.imageStyle}>
                <ICCoachmarkLady style={{ marginTop: 9 }} />
              </View>
            }
            activeDotClr={colors.PrimaryOrange100}
            btnGradientTxtClr={colors.NeutralGrey120}
            buttonGradientClrs={[colors.NeutralGrey60, colors.NeutralGrey60]}
            hidePopover={hidePopover}
            inActiveDotClr={colors.GreyWithOpacity}
            isVisible={isVisible}
            linearGradientColor1={colors.White}
            linearGradientColor2={colors.White}
            mainContainerProp={{ borderRadius: 16 }}
            placement={Placement.BOTTOM}
            popBackGroundClr={colors.White}
            popHeight={210}
            textString={messages}
            textStyleProp={{ color: colors.Black, paddingBottom: 20 }}
          />
        )}
        {selectedVal.key == 3 && (
          <IMCoachMark
            children={children}
            coachMarkImg={
              <View
                style={[
                  styles.imageStyle,
                  { backgroundColor: colors.PrimaryOrange80 },
                ]}>
                <ICCoachmarkLady style={{ marginTop: 9 }} />
              </View>
            }
            activeDotClr={colors.White}
            btnGradientTxtClr={colors.White}
            hidePopover={hidePopover}
            inActiveDotClr={colors.PrimaryOrange80}
            isVisible={isVisible}
            linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd}
            mainContainerProp={{ borderRadius: 16 }}
            placement={Placement.BOTTOM}
            popBackGroundClr={colors.PrimaryOrange100}
            popHeight={210}
            textString={messages}
            textStyleProp={{ color: colors.White, paddingBottom: 20 }}
          />
        )}
        {selectedVal.key == 4 && (
          <IMCoachMark
            children={children}
            activeDotClr={colors.PrimaryOrange100}
            btnGradientTxtClr={colors.NeutralGrey120}
            buttonGradientClrs={[colors.NeutralGrey60, colors.NeutralGrey60]}
            hidePopover={hidePopover}
            inActiveDotClr={colors.GreyWithOpacity}
            isButtons={true}
            isPagination={true}
            isVisible={isVisible}
            gradiantStyleText={{ color: colors.NeutralGrey120 }}
            linearGradientColor1={colors.White}
            linearGradientColor2={colors.White}
            mainContainerProp={{ height: 200, borderRadius: 16 }}
            placement={Placement.BOTTOM}
            popBackGroundClr={colors.White}
            textString={messages}
            textStyleProp={{ color: colors.Black }}
            // coachMarkImg={<ICCoachmarkRectangle/>}
          />
        )}
        {selectedVal.key == 5 && (
          <IMCoachMark
            children={children}
            gradiantStyle={{ backgroundColor: colors.White }}
            buttonGradientClrs2={[colors.White, colors.White]}
            primaryStyleText={{ color: colors.PrimaryOrange100 }}
            activeDotClr={colors.White}
            btnGradientTxtClr={colors.White}
            hidePopover={hidePopover}
            inActiveDotClr={colors.PrimaryOrange80}
            isButtons={true}
            isPagination={true}
            isVisible={isVisible}
            linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd}
            mainContainerProp={{ height: 200, borderRadius: 16 }}
            placement={Placement.BOTTOM}
            popBackGroundClr={colors.PrimaryOrange100}
            textString={messages}
            textStyleProp={{ color: colors.White }}
          />
        )}
        {selectedVal.key == 6 && (
          <IMCoachMark
            isVisible={isVisible}
            children={children}
            activeDotClr={colors.PrimaryOrange100}
            buttonGradientClrs2={[
              colors.GradientOrangeStart,
              colors.GradientOrangeEnd,
            ]}
            buttonGradientClrs={[colors.NeutralGrey60, colors.NeutralGrey60]}
            buttonStyle={{ backgroundColor: 'white' }}
            coachMarkImg={
              <ICCoachmarkRectangle
                width={actuatedNormalizeWidth(227)}
                height={actuatedNormalizeHeight(130)}
              />
            }
            gradiantStyle={{ backgroundColor: colors.NeutralGrey60 }}
            gradiantStyleText={{ color: colors.NeutralGrey120 }}
            hidePopover={hidePopover}
            inActiveDotClr={colors.GreyWithOpacity}
            isButtons={true}
            isPagination={true}
            linearGradientColor1={colors.White}
            linearGradientColor2={colors.White}
            mainContainerProp={{ borderRadius: 16 }}
            placement={Placement.BOTTOM}
            popBackGroundClr={colors.White}
            popHeight={330}
            textString={messages}
            textStyleProp={{ color: colors.Black }}
          />
        )}
        {selectedVal.key == 7 && (
          <IMCoachMark
            children={children}
            activeDotClr={colors.White}
            buttonStyle={{ backgroundColor: 'white' }}
            coachMarkImg={
              <ICCoachmarkRectangle
                width={actuatedNormalizeWidth(227)}
                height={actuatedNormalizeHeight(130)}
              />
            }
            gradiantStyle={{ backgroundColor: colors.White }}
            buttonGradientClrs={[
              colors.GradientOrangeStart,
              colors.GradientOrangeEnd,
            ]}
            buttonGradientClrs2={[colors.White, colors.White]}
            hidePopover={hidePopover}
            inActiveDotClr={colors.PrimaryOrange80}
            isButtons={true}
            isPagination={true}
            isVisible={isVisible}
            linearGradientColor1={colors.GradientOrangeStart}
            linearGradientColor2={colors.GradientOrangeEnd}
            mainContainerProp={{ height: 200, borderRadius: 16 }}
            placement={Placement.BOTTOM}
            popBackGroundClr={colors.PrimaryOrange100}
            popHeight={330}
            primaryStyleText={{ color: colors.PrimaryOrange100 }}
            textString={messages}
            textStyleProp={{ color: colors.White }}
          />
        )}
      </View>
    </View>
  );
};

export default CoachmarksDemo;
