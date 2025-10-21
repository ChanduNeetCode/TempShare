/*eslint linebreak-style: ["error", "windows"]*/
import {  StyleSheet } from 'react-native';

import { colors, font } from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale
} from '../../../utils/utility';
import typography from '../../../atoms/typography';

const Styles = StyleSheet.create({
  bodyRegular2:{
    ...typography.BodyRegular2,
  },
  buttonLarge:{
    ...typography.ButtonLarge,
  },
  buttonSmall:{
    ...typography.ButtonSmall,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(16),
    columnGap: actuatedNormalizeWidth(8),
    flexDirection: 'row',
    height: actuatedNormalizeHeight(48),
    justifyContent: 'center',
    marginHorizontal: actuatedNormalizeWidth(16),
  },
  fabButtonStyle: {
    alignItems: 'center',
    elevation: 10,
    justifyContent: 'center',
    shadowColor: 'rgb(0.298,0.298,0.298)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  gradientButtonStyle: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(16),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gradientText: {
    color: colors.White
  },
  left:{
    marginLeft:actuatedNormalizeWidth(24),
  },
  outlinedButtonAddOnStyle: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderColor: colors.PrimaryOrange100,
    borderWidth: actuatedNormalizeModerateScale(1),
    columnGap: actuatedNormalizeWidth(4),
    paddingHorizontal:actuatedNormalizeWidth(16), 
  },
  railStyle: {
    borderRadius: actuatedNormalizeModerateScale(16),
    borderWidth: actuatedNormalizeModerateScale(0),
    marginHorizontal: actuatedNormalizeWidth(2),
  },
  railStyleqr: {
    borderRadius: actuatedNormalizeModerateScale(0),
    borderWidth:actuatedNormalizeModerateScale(0),
    marginHorizontal: actuatedNormalizeWidth(2),
  },
  rightIconImageStyleQR: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: actuatedNormalizeHeight(32),
    marginVertical: actuatedNormalizeHeight(0.2),
    right: actuatedNormalizeWidth(16),
    width: '10%',
  },
  secondaryButtonStyle: {
    alignContent:'center',
    alignItems: 'center',
    columnGap: actuatedNormalizeWidth(4),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stackedbuttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(16),
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: actuatedNormalizeHeight(16),
    shadowColor: 'rgb(0.298,0.298,0.298)',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: actuatedNormalizeWidth(0), height: actuatedNormalizeHeight(8)},
    width:actuatedNormalizeWidth(328)
  },
  styleTextFirst: {
    alignSelf: 'center',
    color: colors.White,
    marginLeft: actuatedNormalizeWidth(8),
  },
  styleTextSecond: {
    alignSelf: 'center',
    color: colors.White,
    marginLeft: actuatedNormalizeWidth(8),
  },
  swipeButtonmain: {
    borderRadius: actuatedNormalizeModerateScale(16),
    borderWidth:actuatedNormalizeModerateScale(0)
  },
  swipeButton: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(12),
    justifyContent: 'center',
    marginLeft: actuatedNormalizeWidth(16),
    marginRight: actuatedNormalizeWidth(10),
  },
  swipeButtonqr: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(28),
    height: 52,
    marginLeft: actuatedNormalizeWidth(16),
    marginRight:actuatedNormalizeWidth(10),
    justifyContent: 'center',
    width: 52,
    borderWidth: actuatedNormalizeWidth(4),
    borderColor: colors.NeutralGrey60
  },
  swipeButtonDisable: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.NeutralGrey80,
    borderRadius: actuatedNormalizeModerateScale(12),
    justifyContent: 'center',
    marginLeft: actuatedNormalizeWidth(20),
    marginRight: actuatedNormalizeWidth(10),
  },
  swipeButtonTitle: {
    ...typography.ButtonLarge,
    alignSelf: 'flex-start',
    marginLeft: actuatedNormalizeWidth(70),
  },
  swipeButtonTitleqr: {
    ...typography.miniSuccessPageTitle,
    alignSelf: 'flex-start',
    marginLeft: actuatedNormalizeWidth(109),
  },
  swipeqrcontainer:{
    left: -actuatedNormalizeWidth(5),
    width: '90%'
  },
  textColor: {
    color: colors.White,
    ...typography.ButtonLarge
  },
  thumbIconStyle:{
    borderWidth: actuatedNormalizeModerateScale(2), 
    borderRadius: actuatedNormalizeModerateScale(10),
    marginVertical: actuatedNormalizeHeight(0), 
  },
  thumbIconStyleQR:{
    borderWidth: actuatedNormalizeModerateScale(2), 
    borderRadius: actuatedNormalizeModerateScale(0),
    marginVertical: actuatedNormalizeHeight(0), 
  },
  touchableStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
  qrStyle: {
    borderRadius: actuatedNormalizeModerateScale(0),
    borderWidth:actuatedNormalizeModerateScale(0)
  }
});

export default Styles;
