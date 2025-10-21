import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import { font } from '../../../../dff_library/ui_components/atoms/index';

export default StyleSheet.create({
  activeButtonView: {
    borderRadius: 16,
    backgroundColor: colors.PrimaryOrange100,
    minWidth: actuatedNormalizeWidth(156),
    padding: actuatedNormalizeWidth(15),
  },
  activeButtonText: {
    fontFamily: font.MulishSemiBold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: colors.White,
  },
  balanceStyle: {
    color: colors.NeutralGrey120,
    fontFamily: font.MulishRegular,
    fontSize: 12,
    fontWeight: FontWeight._400,
    lineHeight: 16,
    letterSpacing: 0.25,
  },
  buttonViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.White,
    borderColor: colors.PrimaryOrange100,
    borderWidth: 1,
    borderRadius: 16,
    padding: 15,
    margin: 10,
    minWidth: actuatedNormalizeWidth(156),
  },
  cancelTextStyle: {
    fontFamily: font.MulishSemiBold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: colors.PrimaryOrange100,
  },

  childMainViewStyle: {
    borderRadius: 10,
    backgroundColor: colors.CoolGrey110,
    margin: 20,
    width: actuatedNormalizeWidth(328),
  },
  childViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 15,
  },
  iconViewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8EBE4',
    borderRadius: 5,
    justifyContent: 'center',
    minHeight: actuatedNormalizeHeight(40),
    minWidth: actuatedNormalizeWidth(40),
  },
  leftTextStyle: {
    color: colors.NeutralGrey150,
    fontFamily: font.MulishSemiBold,
    fontSize: 14,
    fontWeight: FontWeight._600,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  leftDescriptionstyle: {
    color: colors.NeutralGrey110,
    fontWeight: FontWeight._400,
    fontFamily: font.MulishRegular,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
  },

  rightTextStyle: {
    color: colors.NeutralGrey150,
    fontFamily: font.MulishSemiBold,
    fontWeight: FontWeight._600,
    fontSize: 14,
    lineHeight: 17.57,
    letterSpacing: 0.25,
  },
  rightDescriptionstyle: {
    color: colors.NeutralGrey110,
    fontFamily: font.MulishRegular,
    fontWeight: FontWeight._400,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
  },
  showBalanceStyle: {
    color: colors.NeutralGrey140,
    fontFamily: font.MulishSemiBold,
    fontSize: 12,
    fontWeight: FontWeight._600,
    letterSpacing: 0.25,
  },
  secondMainViewStyle: {
    backgroundColor: colors.White,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  secondViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
  },
  secondIconStyle: {
    minWidth: actuatedNormalizeWidth(16),
    minHeight: actuatedNormalizeHeight(16),
  },
  parentViewStyle: {
    marginTop: actuatedNormalizeHeight(20),
    paddingLeft: actuatedNormalizeWidth(20),
  },
  titleStyle: {
    color: colors.Black,
    fontSize: 24,
    fontFamily: font.MulishRegular,
    fontWeight: FontWeight._600,
    letterSpacing: 0.18,
    marginTop: actuatedNormalizeHeight(20),
    marginBottom: actuatedNormalizeHeight(10),
  },
  underLineStyle: {
    minWidth: actuatedNormalizeWidth(74),
    minHeight: actuatedNormalizeHeight(1),
    backgroundColor: colors.Black,
  },
  closeIconStyle: {
    alignContent: 'flex-end',
    bottom: actuatedNormalizeHeight(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 20,
  },
});
