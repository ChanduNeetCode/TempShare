import { Platform, StyleSheet } from 'react-native';

import { typography } from '../../../../dff_library/ui_components/atoms';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

const Directionstyles = StyleSheet.create({
  popOverStyless: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(20),
    justifyContent: 'center',
    paddingHorizontal: actuatedNormalizeWidth(24),
    paddingVertical: actuatedNormalizeWidth(18),
    width: actuatedNormalizeWidth(253),
  },
  textStyle: {
    alignItems: 'center',
    color: colors.NeutralGrey140,
    justifyContent: 'center',
    textAlign: 'left',
    width: actuatedNormalizeWidth(201),
  },
  tooltipContainer1: {
    left: actuatedNormalizeHeight(20),
    position: 'absolute',
    top: actuatedNormalizeHeight(30),
  },
  tooltipContainer2: {
    position: 'absolute',
    right: actuatedNormalizeHeight(20),
    top: actuatedNormalizeHeight(30),
  },
  tooltipContainer3: {
    bottom: actuatedNormalizeHeight(30),
    left: actuatedNormalizeHeight(20),
    position: 'absolute',
  },
  tooltipContainer4: {
    bottom: actuatedNormalizeHeight(30),
    position: 'absolute',
    right: actuatedNormalizeHeight(20),
  },
  tooltipContainer5: {
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    // position: 'absolute',
    top: '45%',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: actuatedNormalizeHeight(20),
  },
  internal: {
    alignItems: 'center',
    flexDirection: 'column',
    height: actuatedNormalizeHeight(240),
    justifyContent: 'center',
    padding: actuatedNormalizeWidth(20),
    width: actuatedNormalizeWidth(290),
  },
  mainContainer: {
    alignSelf: 'center',
    marginTop: actuatedNormalizeHeight(20),
    width: '95%',
  },
  mainDropDown: {
    alignSelf: 'center',
  },
  textStyle: {
    alignItems: 'center',
    color: colors.White,
  },
  viewcontainer: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
    marginTop: actuatedNormalizeHeight(50),
    width: actuatedNormalizeWidth(300),
  },
});

const themeStyles = StyleSheet.create({
  backGroundStyle: {
    backgroundColor: colors.TransperantColor,
  },
  iconSizes: {
    height: actuatedNormalizeHeight(14),
    width: actuatedNormalizeWidth(14),
  },
  indicatorTextStyle1: {
    ...typography.BodySemiBold1,
    color: colors.Black,
    top: actuatedNormalizeHeight(30),
  },
  indicatorTextStyle2: {
    ...typography.BodySemiBold1,
    color: colors.Black,
    top: actuatedNormalizeHeight(90),
  },
  indicatorTextStyle3: {
    ...typography.BodySemiBold1,
    color: colors.Black,
    top: actuatedNormalizeHeight(230),
  },
  maroonpopOverStyless: {
    alignItems: 'center',
    backgroundColor: colors.SecondaryMaroon100,
    borderRadius: actuatedNormalizeModerateScale(20),
    justifyContent: 'center',
    paddingHorizontal: actuatedNormalizeWidth(24),
    paddingVertical: actuatedNormalizeWidth(18),
    width: actuatedNormalizeWidth(253),
  },
  popOverStyless: {
    alignItems: 'center',
    backgroundColor: colors.NeutralGrey140,
    borderRadius: actuatedNormalizeModerateScale(20),
    justifyContent: 'center',
    paddingHorizontal: actuatedNormalizeWidth(24),
    paddingVertical: actuatedNormalizeWidth(18),
    width: actuatedNormalizeWidth(253),
  },
  textStyle: {
    alignItems: 'center',
    color: colors.White,
    justifyContent: 'center',
    textAlign: 'left',
    width: actuatedNormalizeWidth(201),
  },
  tooltipContainer1: {
    left: actuatedNormalizeHeight(70),
    position: 'absolute',
    top: actuatedNormalizeHeight(40),
  },
  tooltipContainer2: {
    left: actuatedNormalizeHeight(70),
    position: 'absolute',
    top: actuatedNormalizeHeight(150),
  },
  tooltipContainer3: {
    left: actuatedNormalizeHeight(70),
    position: 'absolute',
    top: actuatedNormalizeHeight(430),
  },
});

const cenralPopoverStyles_longtext = StyleSheet.create({
  arrowStyle: {
    borderTopColor: colors.GradientMaroonStart,
  },
  contentStyle: {
    alignItems: 'center',
    backgroundColor: colors.GradientMaroonStart,
    borderRadius: actuatedNormalizeWidth(10),
    paddingHorizontal: actuatedNormalizeWidth(10),
    paddingVertical:
      Platform.OS === 'ios'
        ? actuatedNormalizeHeight(20)
        : actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(277),
  },
});
const cenralPopoverStyles = StyleSheet.create({
  arrowStyle: {
    borderTopColor: colors.GradientMaroonStart,
  },
  contentStyle: {
    alignItems: 'center',
    backgroundColor: colors.GradientMaroonStart,
    borderRadius: actuatedNormalizeWidth(10),
    paddingHorizontal: actuatedNormalizeWidth(10),
    paddingVertical:
      Platform.OS === 'ios'
        ? actuatedNormalizeHeight(20)
        : actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(200),
  },
});

export {
  Directionstyles,
  cenralPopoverStyles,
  cenralPopoverStyles_longtext,
  styles,
  themeStyles,
};
