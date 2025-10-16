import { StyleSheet } from 'react-native';

import {Platform} from 'react-native';
import colors from '../../../atoms/colors';
import typography from '../../../atoms/typography';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = StyleSheet.create({
  arrowicon: {
    width: "10%" as "10%"
  },
  arrowiconwithoutdes: {
    marginLeft: actuatedNormalizeWidth(10),
    width: "10%" as "10%",
  },
  cardContainer: {
    backgroundColor: colors.TertiaryBlue100withOpacity3,
    borderRadius: actuatedNormalizeModerateScale(16),
    marginBottom: actuatedNormalizeHeight(16),
    
  },
  cardContent: {
    backgroundColor: colors.White,
    borderBottomLeftRadius: actuatedNormalizeWidth(16),
    borderBottomRightRadius: actuatedNormalizeWidth(16),
  },
  cardHeader: {
    alignItems: 'center' as const,
    flexDirection: 'row' as const,
    minHeight: actuatedNormalizeHeight(64),
    marginLeft: actuatedNormalizeWidth(4),
    paddingHorizontal: actuatedNormalizeWidth(16),
    paddingVertical: actuatedNormalizeHeight(14),
    width: actuatedNormalizeWidth(328),
  },
  cardTitle: {
    ...typography.AccordionTitleRegular,
    color: colors.NeutralGrey150,
    marginLeft: actuatedNormalizeWidth(8),
  },
  contentStyle: {
    flexDirection: 'column' as const,
    rowGap: actuatedNormalizeModerateScale(4),
    width: '80%' as const,
  },
  contentStyleWithoutIcon: {
    flexDirection: 'column' as const,
    rowGap: actuatedNormalizeModerateScale(4),
    width: '90%' as const,
    marginLeft: actuatedNormalizeWidth(4),
  },
  descshow: {
    marginRight: '80%' as const,
    width: '100%' as const,
  },
  flatListcardContainer: {
    borderBottomColor: colors.PastelAmber100,
    borderBottomWidth: actuatedNormalizeWidth(2),
    paddingBottom:actuatedNormalizeHeight(16),
    marginBottom: actuatedNormalizeHeight(8),
    marginHorizontal: actuatedNormalizeWidth(8)
  },
  flalisticonview: {
    marginRight: '90%' as const,
  },
  flatListStyle: {
    minHeight: actuatedNormalizeHeight(40),
    paddingHorizontal: actuatedNormalizeWidth(0),
    paddingVertical: actuatedNormalizeModerateScale(0),
  },
  iconview: {
    marginRight: '55%' as const,
  },
  imagesstyle: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(8),
  },
  mainTooltipStyle1:{
    flexDirection: 'row',
    paddingLeft: actuatedNormalizeWidth(16),
  },
mainTooltipStyle:{
    backgroundColor: colors.PrimaryOrange100, 
    paddingHorizontal: actuatedNormalizeWidth(8), 
    paddingVertical: actuatedNormalizeHeight(2), 
    borderTopLeftRadius: actuatedNormalizeModerateScale(6), 
    borderTopRightRadius:actuatedNormalizeModerateScale(6) 
  },
  mainTooltipTextStyle:{
    ...typography.BodyRegular3,
    color:colors.White
  },
  redirection: {
    flexDirection: 'row' as const,
    padding: actuatedNormalizeModerateScale(10),
    alignItems:'center'
  },
  redirectionText: {
    ...typography.BodyRegular2,
    color: colors.NeutralGrey110,
    left: actuatedNormalizeWidth(16),
  },
  seperationLine: {
    backgroundColor:colors.PastelAmber100,
    height: actuatedNormalizeHeight(1),
    width: '100%' as const,
  },
  shadow: {
    backgroundColor:colors.CoolGrey100,
    elevation:5,
    shadowColor: colors.shadowOfFeedback,
    shadowOpacity: 0.14,
    shadowRadius: actuatedNormalizeModerateScale(5),
    shadowOffset: { width: 0, height: 4 }
  },
  subTitleStyle: {
    ...typography.LabelLargeRegular,
    color: colors.NeutralGrey110,
    paddingLeft: actuatedNormalizeWidth(8),
  },
  highLightText: {
    backgroundColor: 'yellow',
  },
  toolTipStyle:{
     ...typography.labelSmallSemiBold,
    backgroundColor:colors.PrimaryOrange100,
    borderRadius:actuatedNormalizeModerateScale(4),
    color:colors.White,
    left:actuatedNormalizeWidth(6),
    overflow:'hidden',
    paddingLeft:actuatedNormalizeWidth(2),
    paddingRight:actuatedNormalizeModerateScale(4),
    paddingVertical:actuatedNormalizeModerateScale(1),
    top:Platform.OS === 'ios'?actuatedNormalizeHeight(2):actuatedNormalizeHeight(4),
  },
  titilebold1: {
    color: colors.NeutralGrey150,
    ...typography.AccordionTitleBold,
    marginLeft: actuatedNormalizeWidth(8),
  },
  withouticonview: {
    marginRight: '65%' as const,
    
  },
});
export default styles;