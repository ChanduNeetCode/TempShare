import { StyleSheet } from 'react-native';

import { colors, typography } from '../../../../dff_library/ui_components/atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

export default StyleSheet.create({
  acceptStyle: {
    ...typography.BodySemiBold3,
    color: colors.Success100,
    textAlign: 'center',
  },
  blurContainer:{
    backgroundColor:'rgba(0,0,0,0.9)'
  },
  blockStyle: {
    ...typography.BodySemiBold3,
    color: colors.NeutralGrey140,
    textAlign: 'center'
  },
  buttonStyle: {
    height: actuatedNormalizeHeight(48),
    marginBottom:actuatedNormalizeHeight(24)
  },
  buttonStyle1: {
    height: actuatedNormalizeHeight(48),
    marginBottom:actuatedNormalizeHeight(24)
  },
  cardsSubtitle:{
    ...typography.labelSmallSemiBold,
    color:colors.NeutralGrey110,
    lineHeight: actuatedNormalizeModerateScale(12)
  },
  color: {
    color: colors.PrimaryOrange100
  },
  contentViewStyle: {
    alignItems: 'center',
    backgroundColor: colors.White,
    flexDirection: 'column',
    rowGap: actuatedNormalizeModerateScale(16),
    marginTop: actuatedNormalizeHeight(16),
  },
  footerStyles:{
    alignItems:'center',
    alignContent:'flex-end',
    alignSelf:'center',
    justifyContent:'space-between',
    marginVertical:actuatedNormalizeHeight(12)
  },
  height1: {
    borderTopLeftRadius:actuatedNormalizeModerateScale(24),
    borderTopRightRadius:actuatedNormalizeModerateScale(24)
  },
  height2: {
    borderTopLeftRadius:actuatedNormalizeModerateScale(24),
    borderTopRightRadius:actuatedNormalizeModerateScale(24)
  },
  height3: {
    borderTopLeftRadius:actuatedNormalizeModerateScale(24),
    borderTopRightRadius:actuatedNormalizeModerateScale(24)
  },
  icon:{
    marginTop:actuatedNormalizeHeight(10)
  },
  IndicativeDrawerscloseContent: {
    right: actuatedNormalizeWidth(-16)
  },
  IndicativeDrawersCloseContent: {
    right: actuatedNormalizeWidth(-10)
  },
  IndicativeDrawersChildSubView: {
    flexDirection: 'row',
    columnGap: actuatedNormalizeModerateScale(8),
    justifyContent:'center',
    alignSelf:'baseline',
  },
  InfoCardSubViewStyles: {
    marginHorizontal: actuatedNormalizeWidth(16),
    marginVertical: actuatedNormalizeHeight(12),
    alignItems: 'center'
  },
  InfoCardTextStyle: {
    ...typography.BodyRegular2,
    color: colors.NeutralGrey140,
    textAlign:'center'
  },
  mainContentContainer: {
    alignItems: 'center',
    rowGap: actuatedNormalizeModerateScale(16),
    top: actuatedNormalizeHeight(16),
  },
  mainContent2Container: {
    alignItems: 'center',
    rowGap: actuatedNormalizeModerateScale(16),
    top: actuatedNormalizeHeight(8),
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center'
  },
  modelContainer:{
    backgroundColor:colors.White,
    paddingBottom:actuatedNormalizeHeight(10)
  },
  modalContent: {
    backgroundColor: colors.White,
    borderTopLeftRadius: actuatedNormalizeWidth(24),
    borderTopRightRadius: actuatedNormalizeWidth(24),
    paddingBottom: actuatedNormalizeHeight(30),
    paddingHorizontal: actuatedNormalizeWidth(16),
  },
  parentDropDownStyle: {
    alignItems: 'center',
    marginTop: actuatedNormalizeHeight(20)
  },
  rejectStyle: {
    ...typography.BodySemiBold3,
    color: colors.Warning100,
    textAlign: 'center',
  },
  regularCardStyleProp: {
    borderColor: colors.PastelAmber100,
    borderRadius: actuatedNormalizeModerateScale(16),
    borderWidth: actuatedNormalizeModerateScale(1),
    elevation: 0,
    shadowOpacity: 0,
    width: actuatedNormalizeWidth(328),
  },
  regularSubView: {
    backgroundColor: '#FCFCFD',
    borderTopLeftRadius: actuatedNormalizeModerateScale(16),
    borderTopRightRadius: actuatedNormalizeModerateScale(16),
    columnGap: actuatedNormalizeModerateScale(12),
    flexDirection: 'row',
    height: actuatedNormalizeHeight(68),
    justifyContent: 'space-between',
    paddingHorizontal: actuatedNormalizeWidth(16),
    paddingVertical: actuatedNormalizeHeight(16)
  },
  regularCardTextView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  regularCardTextSubView: {
    columnGap: actuatedNormalizeModerateScale(3),
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  regularSub2: {
    alignItems: 'center',
    columnGap: actuatedNormalizeModerateScale(4),
    flexDirection: 'row',
    height:actuatedNormalizeHeight(20),
    justifyContent: 'center',
    width:actuatedNormalizeWidth(60),
  },
  regularSub3: {
    alignItems: 'center',
    columnGap: actuatedNormalizeModerateScale(4),
    flexDirection: 'row',
    height:actuatedNormalizeHeight(20),
    justifyContent: 'center',
    width:actuatedNormalizeWidth(60),
  },
  regularSubIconView: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(8),
    height: actuatedNormalizeHeight(32),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(32),
  },
  regularSubTextView: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center'
  },
  regularViewMain: {
    alignItems:'center',
    alignSelf:'center',
    flexDirection: 'row',
    height: actuatedNormalizeHeight(20),
    marginLeft: actuatedNormalizeWidth(26),
    width: actuatedNormalizeWidth(277),
    justifyContent:'space-between',
    marginRight:actuatedNormalizeWidth(22)
  },
  regularViewSub: {
    alignItems: 'center',
    columnGap: actuatedNormalizeModerateScale(4),
    flexDirection: 'row',
    height:actuatedNormalizeHeight(20),
    justifyContent:'center',
    width:actuatedNormalizeWidth(60),
  },
  rowGap:{
    rowGap: actuatedNormalizeModerateScale(0)
  },
  rowStyle: {
    rowGap: actuatedNormalizeHeight(4)
  },
  scrollableIconStyle:{
    alignSelf:'center',
    backgroundColor:colors.PastelAmber100,
    borderRadius:actuatedNormalizeModerateScale(1),
    height:actuatedNormalizeHeight(1),
    marginTop:actuatedNormalizeHeight(16),
    width:actuatedNormalizeWidth(40)
  },
  skipStyle: {
    ...typography.BodySemiBold3,
    color: colors.NeutralGrey140,
    marginBottom:actuatedNormalizeHeight(24),
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  swiggyStyle: {
    ...typography.ButtonSmall,
    color: colors.NeutralGrey150,
  },
  swiggyEStyle: {
    ...typography.BodyRegular3,
    color: colors.NeutralGrey110,
  },
  t1Style: {
    ...typography.ButtonSmall,
    color: colors.NeutralGrey150
  },
  t2Style: {
    ...typography.BodyRegular3,
    color: colors.NeutralGrey110
  },
  textStyle1: {
    ...typography.AccordionTitleRegular,
    color: colors.NeutralGrey110,
    textAlign: 'center',
  },
  textStyle2: {
    ...typography.AccordionTitleBold,
    color: colors.NeutralGrey110,
    fontWeight: '800',
    textAlign: 'center',
  },
   titleContent: {
    marginTop: actuatedNormalizeHeight(24), 
  },
  titleContent1: {
    marginTop: actuatedNormalizeHeight(16), 
  },
});
