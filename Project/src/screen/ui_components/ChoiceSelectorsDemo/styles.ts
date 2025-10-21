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
    alignItems: 'flex-start',
    borderBottomLeftRadius: actuatedNormalizeWidth(10),
    borderBottomRightRadius: actuatedNormalizeWidth(10),
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  parentViewStyle: {
    backgroundColor: colors.PastelAmber100,
    height: '100%',
    justifyContent: 'flex-start',
    paddingRight:actuatedNormalizeHeight(15),
    paddingLeft:actuatedNormalizeHeight(15),
    paddingTop:actuatedNormalizeHeight(20),
    width: '100%',

  },
  sectionHeaderContainer: {
    height:actuatedNormalizeHeight(30),
    justifyContent: 'center',
    paddingHorizontal: actuatedNormalizeWidth(15),
  },
  sectionHeaderLabel: {
    color: colors.NeutralGrey110,
  },
  titleStyle: {
    color: colors.Black,
    fontFamily: 'Mulish-Regular',
    fontSize: 24,
    fontWeight: FontWeight._600,
    lineHeight:actuatedNormalizeHeight(30),
    letterSpacing:actuatedNormalizeModerateScale(0.18),
    marginTop:actuatedNormalizeHeight(20),
    marginBottom:actuatedNormalizeHeight(20),
    textAlign: 'left',
  },
  labelStyle: {
    color: colors.NeutralGrey140,
    fontWeight: FontWeight._400,
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    lineHeight:actuatedNormalizeHeight(14),
    letterSpacing:actuatedNormalizeModerateScale(0.1),
    padding:actuatedNormalizeHeight(5),
    width:actuatedNormalizeWidth(50),
  },
  linearGradientStyle: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  choiceHeightStyle:{
    marginTop:50
  }
});
