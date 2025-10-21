import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../utils/utility';

export default StyleSheet.create({
  labelStyle: {
    color: colors.NeutralGrey140,
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    fontWeight: FontWeight._400,
    letterSpacing: 0.1,
    lineHeight: 14,
    padding: 5,
    width: 50,
  },
  parentViewStyle: {
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
  titleStyle: {
    color: colors.Black,
    fontFamily: 'Mulish-Regular',
    fontSize: 24,
    fontWeight: FontWeight._600,
    letterSpacing: 0.18,
    lineHeight: 30,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'left',

  },
  container: {
    backgroundColor: colors.White,
    flex: 1,
    gap: actuatedNormalizeHeight(32),
    paddingTop: actuatedNormalizeHeight(30),
    padding: actuatedNormalizeModerateScale(10),
  },
  button: {
    color: colors.White,
    fontSize: actuatedNormalizeModerateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(5),
    minWidth: actuatedNormalizeWidth(250),
    padding: actuatedNormalizeModerateScale(10),
  },
});