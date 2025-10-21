import { Platform, StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';

export default StyleSheet.create({
  buttonContainerStyle: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft:
      Platform.OS === 'ios'
        ? actuatedNormalizeWidth(10)
        : actuatedNormalizeWidth(4),
    marginBottom:
      Platform.OS === 'ios'
        ? actuatedNormalizeWidth(14)
        : actuatedNormalizeWidth(4),
  },
  buttonStyle: {
    backgroundColor: colors.GradientOrangeEnd,
    borderRadius: 10,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  parentViewStyle: {
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
  },
  ContainerViewStyle: {
    backgroundColor: colors.White,
    flex: 1,
  },
  titleContainerStyle: {
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal:15,
  },
  titleStyle: {
    color: colors.Black,
    fontFamily: 'Mulish-Regular',
    fontSize: 15,
    padding: 10,
    textAlign: 'left',
  },
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
});
