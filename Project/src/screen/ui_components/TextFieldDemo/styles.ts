import { Platform, StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import { actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth } from '../../../utils/utility';

const styles = () => StyleSheet.create({
  dateView: {
    flexDirection: 'row',
    marginTop: actuatedNormalizeHeight(12),
    marginLeft: actuatedNormalizeWidth(12)
  },

  dataView: {
    flexDirection: "row",
    marginLeft: actuatedNormalizeWidth(50),
    marginRight: actuatedNormalizeWidth(60),
    marginTop: actuatedNormalizeHeight(15)
  },

  days: {
    color: '#333638',
    fontFamily: 'Mulish',
    fontSize: actuatedNormalizeModerateScale(12),
    fontWeight: FontWeight._700,
    letterSpacing: 0.25,
    lineHeight: 16,
  },

  daysDescription: {
    color: '#333638',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: FontWeight._500,
    letterSpacing: 0.25,
    lineHeight: 16,
  },

  disableContainer: {
    marginVertical: actuatedNormalizeWidth(15)
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
  linearGradientStyle: {
    alignItems: 'flex-start',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  parentViewStyle: {
    backgroundColor: colors.White,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
  },
 scrollViewContainer:{
   height: '100%',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    letterSpacing: 0.15,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  textIconStyle: {
    fontSize: 12,
    fontWeight: Platform.OS === 'ios' ? '300' : '600',
    letterSpacing: 0.25,
    lineHeight: 16,
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

});
export default styles;