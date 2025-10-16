import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import colors from '../../../../dff_library/ui_components/atoms/colors';

export const styles = StyleSheet.create({
  accordianStyle: { 
    width: actuatedNormalizeWidth(300) 
  },
  activeCircleStyle: { 
    backgroundColor: colors.PrimaryOrange100, 
  },
  buttonContainerStyle : { 
    alignSelf:'center',
    backgroundColor:colors.PrimaryOrange100,
    height:actuatedNormalizeHeight(40),
    justifyContent:'center',
    marginTop: actuatedNormalizeWidth(350),
    width:actuatedNormalizeWidth(120),
    borderRadius:actuatedNormalizeWidth(10),

  },
  completedCircleStyle : {
    height:actuatedNormalizeHeight(24),
    width:actuatedNormalizeWidth(24),
  },
  container: {
    alignSelf: 'center',
    marginTop: actuatedNormalizeHeight(20),
    width: '95%',
  },
  descriptionStyle: {
    ...typography.LabelLargeRegular,
    color: colors.NeutralGrey110,
    paddingHorizontal: actuatedNormalizeWidth(16),
    paddingVertical: actuatedNormalizeHeight(16),
  },
  disabledCircleStyle: { 
    backgroundColor: colors.PastelAmber100,
  },
  generalButton: {
    marginTop: actuatedNormalizeWidth(90),
    alignItems:'center',
    justifyContent:'center'
  },
  generalMainContainer: {
    marginTop: actuatedNormalizeWidth(40),
    borderBottomLeftRadius: actuatedNormalizeModerateScale(10),
    borderBottomRightRadius: actuatedNormalizeModerateScale(10),
  },
  iconImageStyle: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(10),
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(40),
  },
  itemSeperatorStyle:{
    marginTop:actuatedNormalizeHeight(2.5),
    marginBottom:actuatedNormalizeHeight(1.5),
    height: actuatedNormalizeHeight(6),
  },
  lineStyle: { 
    backgroundColor: colors.PastelAmber100,
    marginHorizontal: actuatedNormalizeWidth(8),
    width: actuatedNormalizeWidth(56.5), 
  },
  lineStyle3Items:{
    backgroundColor: colors.PastelAmber100,
    marginHorizontal: actuatedNormalizeWidth(4.5),
    width: actuatedNormalizeWidth(15.5), 
  },
  lineStyle4Items:{
    backgroundColor: colors.PastelAmber100,
    marginHorizontal: actuatedNormalizeWidth(4.5),
    width: actuatedNormalizeWidth(15.5), 
  },
  mainDropDown : { 
    alignSelf: 'center' 
  },
  proceedButtonText: {
    color: colors.White,
    fontSize: actuatedNormalizeWidth(16),
    textAlign:'center',
    
  },
  subDropDown : { 
    alignItems: 'center', 
    marginTop: actuatedNormalizeHeight(10) 
  },
  titleContainerStyle:{
    height:actuatedNormalizeHeight(32),
    maxWidth:actuatedNormalizeWidth(64)
  },
  titleContainerStyle2:{
    height:actuatedNormalizeHeight(16),
    minWidth:actuatedNormalizeWidth(70)
  },
  titleStyle:{
    ...typography.SubTitleMedium2
  },
  vericalMainContainer: {
    marginTop: actuatedNormalizeWidth(40),
    width: '100%',
  },
});
