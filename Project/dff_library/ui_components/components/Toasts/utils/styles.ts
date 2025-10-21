import { StyleSheet } from 'react-native';

import { colors, typography } from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(12),
    borderWidth: 1,
    columnGap: actuatedNormalizeWidth(8),
    flexDirection: 'row',
    minHeight: actuatedNormalizeHeight(40),
    paddingHorizontal: actuatedNormalizeWidth(16),
    paddingVertical: actuatedNormalizeWidth(12),
    width: actuatedNormalizeWidth(328),
  },
  defaultStaticContainerStyle: {
    backgroundColor: colors.NeutralGrey140,
    borderWidth: 0,
  },
  defaultStaticContainerStyleClose: {
    backgroundColor: colors.NeutralGrey140,
    borderWidth: 0,
    justifyContent: 'space-between',
  },
  defaultContainerStyle: {
    borderColor: colors.PrimaryOrange100,
  },
  defaultContainerStyleClose: {
    borderColor: colors.PrimaryOrange100,
    justifyContent: 'space-between',
  },
  defaultTextStyle: {
    ...typography.BodySemiBold3,
    color: colors.PrimaryOrange100,
  },
  defaultStaticTextStyle: {
    ...typography.BodySemiBold3,
    color: colors.White,
  },
  errorContainerStyle: {
    borderColor: colors.Error100,
  },
  errorContainerStyleClose: {
    borderColor: colors.Error100,
    justifyContent: 'space-between',
  },
  errorSeperateText: {
    ...typography.LinkSemiBold,
    color: colors.Error100,
    textDecorationLine: 'underline',
  },
  errorTextStyle: {
    ...typography.BodySemiBold3,
    color: colors.Error100,
  },
  imageStyle: {
    minHeight: actuatedNormalizeHeight(16),
    minWidth: actuatedNormalizeWidth(16),
  },
  mainContainerStyle: {
    alignSelf: 'center',
    bottom: actuatedNormalizeHeight(10),
    position: 'absolute',
  },
  subContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  successContainerStyle: {
    borderColor: colors.Success100,
  },
  successContainerStyleClose: {
    borderColor: colors.Success100,
    justifyContent: 'space-between',
  },
  successTextStyle: {
    ...typography.BodySemiBold3,
    color: colors.NeutralGrey140,
  },
  successEphermalText: {
    ...typography.BodySemiBold3,
    color: colors.Success100,
  },
  seperatorLine: {
    alignSelf: 'center',
    backgroundColor:colors.PastelAmber110,
    borderColor: colors.PastelAmber110,
    borderWidth: actuatedNormalizeModerateScale(1),
    height: actuatedNormalizeHeight(24),
    position: 'absolute',
    right: actuatedNormalizeWidth(44),
    width: 0,
  },
  seperatorLineDark: {
    backgroundColor: colors.NeutralGrey120,
    borderColor: colors.NeutralGrey120,
  },
  seperatorLineError: {
    backgroundColor:  colors.PastelPeach120,
    borderColor: colors.PastelPeach120,
  },
  seperatorLineSuccess: {
    backgroundColor:  colors.PastelGreen120,
    borderColor: colors.PastelGreen120,
  },
  sucessErrorTextStyle: {
    ...typography.LinkSemiBold,
    color: colors.Success100,
    textDecorationLine: 'underline',
  },
  textContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginRight: actuatedNormalizeWidth(12),
  },
});
