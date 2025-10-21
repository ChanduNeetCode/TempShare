import { StyleSheet } from 'react-native';

import { colors, typography } from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const styles = StyleSheet.create({
  
  bodyTxtStyle:{
    color:colors.NeutralGrey110,
    ...typography.BodyRegular3
  },
  containerInnerStyle: {
    flexDirection: 'row',
    paddingLeft:actuatedNormalizeWidth(15),
  },
  containedleftImgStyle:{
    paddingHorizontal:actuatedNormalizeWidth(3)
  },
  headingTextStyle: {
    color: colors.NeutralGrey150,
    justifyContent: 'flex-start',
    marginTop: actuatedNormalizeWidth(2),
  },
  headingContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: actuatedNormalizeWidth(15),
    marginLeft: actuatedNormalizeWidth(20),
  },
  iconStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    height: actuatedNormalizeHeight(10),
    justifyContent: 'center',
    marginLeft: actuatedNormalizeWidth(10),
    width: actuatedNormalizeWidth(20),
  },
  isolatedRadioStyle:{
    paddingRight:actuatedNormalizeWidth(10),
    justifyContent:'center'
  },
  lineSeparatorStyle: {
    borderColor: colors.NeutralGrey80,
    borderWidth:actuatedNormalizeWidth(0.7),
    marginHorizontal: actuatedNormalizeWidth(10),
    opacity: 0.5,
  },
  labelContsinerStyle: {
    borderWidth:actuatedNormalizeWidth(1),
    backgroundColor: colors.White,
    borderRadius:actuatedNormalizeWidth(16),
    height:actuatedNormalizeHeight(80),
    justifyContent: 'center',
    marginVertical:actuatedNormalizeHeight(10),
  },
  leftImgStyle: {
    alignItems: 'center',
    backgroundColor: colors.CoolGrey100,
    borderRadius:actuatedNormalizeHeight(10),
    height:actuatedNormalizeHeight(40),
    justifyContent: 'center',
    width:actuatedNormalizeHeight(40),
  },
  renderContainerStyle: {
    flexDirection: 'row',
  },
  subLineTextStyles: {
    color: colors.NeutralGrey110,
    justifyContent: 'flex-start',
    marginTop: actuatedNormalizeWidth(5),
  },
  textViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: actuatedNormalizeWidth(10),
  },
  text1Style: {
   paddingLeft:actuatedNormalizeWidth(5),
   ...typography.BodySemiBold1
  },
  text2Style: {
    paddingTop:actuatedNormalizeHeight(4),
    paddingLeft:actuatedNormalizeWidth(5),
    ...typography.BodySemiBold2
  },
  text3Style: {
    paddingTop:5,
    ...typography.BodySemiBold2,
    color:colors.NeutralGrey110
  },
  txtViewStyle:{
    flex:1 ,
    paddingLeft:actuatedNormalizeWidth(10),
    justifyContent:'center',
  },
});
export default styles;
