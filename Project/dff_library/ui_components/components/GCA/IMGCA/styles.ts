import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { colors, typography } from '../../../atoms';
import { FontWeight } from '../../../utils/enums';

const styles = StyleSheet.create({
  alphabetContainer: {
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(16),
  },
  AlphabetStyle: {
    ...typography.GcaAlphabetStyle,
    color: colors.NeutralGrey140,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ccaContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(30),
  },
  dropdownComponent: {
    marginTop: actuatedNormalizeHeight(16),
  },
  mainContainer: {
    marginHorizontal: actuatedNormalizeWidth(16),
  },
  pinText: {
    ...typography.BodyRegular2,
    color: colors.NeutralGrey140,
    textAlign: 'center',
    top: actuatedNormalizeHeight(24),
  },
  pinTextInputStyle: {
    ...typography.OtpInputStyle,
    textAlign: 'center',
    justifyContent: 'center',
    minWidth: actuatedNormalizeWidth(109),
    color:colors.NeutralGrey140
  },
  subtitleStyle: {
    ...typography.AccordionTitleRegular,
    color: colors.NeutralGrey110,
    textAlign: 'center',
    marginTop: actuatedNormalizeHeight(8),
  },
  textContainer: {
    paddingBottom: actuatedNormalizeHeight(8),
  },
  textInputContainer: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(16),
    elevation: 12,
    justifyContent: 'center',
    minHeight: actuatedNormalizeHeight(48),
    shadowColor: colors.Black,
    shadowOpacity: 0.05,
    textAlign: 'center',
    width: actuatedNormalizeWidth(93),
    shadowOffset: {
      width: actuatedNormalizeWidth(0),
      height: actuatedNormalizeHeight(2),
    },
    shadowRadius: 12,
  },
  textInputStyle: {
    ...typography.GcaTextInputStyle,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: actuatedNormalizeModerateScale(25),
    color:colors.NeutralGrey140
  },
  titleStyle: {
    ...typography.Gcatitle,
    color: colors.NeutralGrey150,
    fontWeight: FontWeight._700,
    textAlign: 'center',
  },
});
export default styles;
