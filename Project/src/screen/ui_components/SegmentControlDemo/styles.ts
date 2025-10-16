import { StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../dff_library/ui_components/utils/utility';
export default StyleSheet.create({
  gradientStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomLeftRadius: actuatedNormalizeWidth(10),
    borderBottomRightRadius: actuatedNormalizeWidth(10),
  },
  parentViewStyle: {
    width: '100%',
    height: '100%',
    paddingTop:actuatedNormalizeHeight(20),
    backgroundColor: colors.PastelAmber100,
    paddingRight:actuatedNormalizeHeight(15),
    paddingLeft:actuatedNormalizeHeight(15),
    justifyContent: 'flex-start',
  },
  titleStyle: {
    textAlign: 'left',
    fontSize: 24,
    color: colors.Black,
    fontWeight: FontWeight._600,
    lineHeight:actuatedNormalizeHeight(30),
    letterSpacing:actuatedNormalizeModerateScale(0.18),
    marginTop:actuatedNormalizeHeight(20),
    marginBottom:actuatedNormalizeHeight(20),
    fontFamily: 'Mulish-Regular',
  },
  labelStyle: {
    color: colors.NeutralGrey140,
    fontSize: 12,
    lineHeight:actuatedNormalizeHeight(14),
    padding:actuatedNormalizeHeight(5),
    fontWeight: FontWeight._400,
    letterSpacing:actuatedNormalizeModerateScale(0.1),
    width:actuatedNormalizeWidth(50),
    fontFamily: 'Mulish-Regular',
  },
  linearGradientStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
