import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../utils/utility';
import { colors,typography } from '../../atoms';

export default StyleSheet.create({
  festivalView: {
    flex: 1,
    flexDirection:'column',
    marginLeft: actuatedNormalizeWidth(12),
    rowGap:actuatedNormalizeHeight(4)
  },
  festivalTextStyle: {
    ...typography.SubTitleBold1,
    color: colors.Black,
  },
  festivalsubTextStyle: {
    ...typography.BodyRegular3,
    color: colors.NeutralGrey110,
  },
  notificationBGColorRegular: {
    alignItems: 'center',
    borderBottomEndRadius: actuatedNormalizeModerateScale(12),
    borderBottomStartRadius: actuatedNormalizeModerateScale(12),
    columnGap:actuatedNormalizeWidth(8),
    flexDirection: 'row',
    minHeight: actuatedNormalizeHeight(40),
    paddingHorizontal:actuatedNormalizeWidth(16),
    paddingVertical:actuatedNormalizeHeight(12),
    width: actuatedNormalizeWidth(328),
  },
  notificationBGColorDismissible: {
    alignItems: 'center',
    borderBottomEndRadius: actuatedNormalizeModerateScale(12),
    borderBottomStartRadius: actuatedNormalizeModerateScale(12),
    columnGap:actuatedNormalizeWidth(8),
    flexDirection:'row',
    minHeight:actuatedNormalizeHeight(40),
    paddingHorizontal:actuatedNormalizeWidth(16),
    paddingVertical:actuatedNormalizeHeight(12),
    width: actuatedNormalizeWidth(328),
  },
  notificationBGColorSeasonal: {
    alignItems: 'center',
    alignSelf:'center',
    borderBottomEndRadius: actuatedNormalizeModerateScale(12),
    borderBottomStartRadius: actuatedNormalizeModerateScale(12),
    flexDirection:'row',
    minHeight: actuatedNormalizeHeight(84),
    paddingBottom:actuatedNormalizeHeight(20),
    paddingHorizontal:actuatedNormalizeWidth(16),
    paddingTop:actuatedNormalizeHeight(16),
    width: actuatedNormalizeWidth(360),
  },
  notificationTextStyle: {
    ...typography.BodySemiBold3,
    color: colors.White,
    flex:0.85,
  },
  rightSideStyle: {
    alignItems: 'center',
    position: 'absolute',
    right: actuatedNormalizeWidth(16),
    top: actuatedNormalizeHeight(16),
  },
  rightSideStyle1: {
    alignItems: 'center',
    position: 'absolute',
    right: actuatedNormalizeWidth(16),
  },
  showButtonStyle: {
   ...typography.BodyRegular1,
    alignItems: 'center',
    color: colors.Black,
    justifyContent: 'center',
    marginTop: actuatedNormalizeWidth(20),
  },
  viewLineStyle: {
    borderColor:colors.NeutralGrey110,
    borderWidth:actuatedNormalizeModerateScale(1),
    height:actuatedNormalizeHeight(24),
    position:'absolute',
    right:actuatedNormalizeWidth(44),
    width:0,
  },
});
