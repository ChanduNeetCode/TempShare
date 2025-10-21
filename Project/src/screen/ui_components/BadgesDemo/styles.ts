import { StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import { actuatedNormalizeModerateScale,actuatedNormalizeHeight,actuatedNormalizeWidth} from '../../../utils/utility';
import typography from '../../../../dff_library/ui_components/atoms/typography';

export default StyleSheet.create({
  badgesRowStyle: {
    columnGap:actuatedNormalizeWidth(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginBottom: actuatedNormalizeHeight(20), 
  },
  badgesTopStyle:{
    borderTopLeftRadius:actuatedNormalizeModerateScale(6),
    borderTopRightRadius:actuatedNormalizeModerateScale(6),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientStyle: {
    alignItems: 'flex-start',
    borderBottomLeftRadius: actuatedNormalizeModerateScale(10),
    borderBottomRightRadius: actuatedNormalizeModerateScale(10),
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  linearGradientStyle: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  overlap: {
    alignItems: 'center',
    alignContent:'center',
    borderRadius: actuatedNormalizeModerateScale(8),
    flexDirection: 'row',
    flexShrink: 1,
    justifyContent: 'center',
    gap:actuatedNormalizeModerateScale(0),
    height: actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(62),
    paddingVertical: actuatedNormalizeWidth(2),
    paddingHorizontal: actuatedNormalizeWidth(8),
  },
  overlapWithIcon: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(8),
    flexDirection: 'row',
    flexShrink: 1,
    justifyContent: 'center',
    gap:actuatedNormalizeModerateScale(4),
    height: actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(94),
    paddingVertical: actuatedNormalizeWidth(4),
    paddingHorizontal: actuatedNormalizeWidth(8),
  },
  parentViewStyle: {
    backgroundColor: colors.White,
    justifyContent: 'center',
    paddingHorizontal:actuatedNormalizeWidth(15),
    width: '100%',
  },
  standAloneNeutral:{
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(8),
    flexDirection: 'row',
    flexShrink: 1,
    justifyContent: 'center',
    width: actuatedNormalizeWidth(38),
    paddingVertical: actuatedNormalizeWidth(2),
    paddingHorizontal: actuatedNormalizeWidth(16),
  },
  standAlonePositive:{
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(8),
    flexDirection: 'row',
    flexShrink: 1,
    gap:actuatedNormalizeModerateScale(10),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(44),
    paddingVertical: actuatedNormalizeWidth(2),
    paddingHorizontal: actuatedNormalizeWidth(4),
  },
  titleStyle: {
    color: colors.Black,
    marginVertical: actuatedNormalizeHeight(20),
    textAlign: 'left',
  },
  topofCardStyle:{ 
    paddingVertical: actuatedNormalizeWidth(4),
    paddingHorizontal: actuatedNormalizeWidth(4),
  },
  verticalStyle: {
    marginVertical: actuatedNormalizeHeight(15),
  },
  BadgesTitle: {
    ...typography.BodyRegular1,
    color:colors.Black,
  },
  SemiBadge: {
    ...typography.BodyRegular1,
    color:colors.Black,
  },
  viewStyle1:{
    alignItems:'center',
    top:actuatedNormalizeHeight(70),
    rowGap:actuatedNormalizeModerateScale(16)
  }
});
