import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
} from '../../../../utils/utility';
import { colors, typography } from '../../../../atoms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    alignItems: 'center',
    backgroundColor:colors.Black,
    borderRadius: actuatedNormalizeWidth(10),
    height: actuatedNormalizeHeight(16),
    justifyContent: 'center',
    left: actuatedNormalizeWidth(0),
    marginLeft: actuatedNormalizeWidth(72),
    marginTop: actuatedNormalizeHeight(24),
    position: 'absolute',
    width: actuatedNormalizeWidth(16),
    zIndex: 1,
  },
  containerStyle:{
    position: 'absolute',
  },
  description: {
    ...typography.LabelLargeRegular,
    color:colors.NeutralGrey110,
    marginTop: actuatedNormalizeHeight(5),
  },
  detail: {
    paddingTop: actuatedNormalizeHeight(10),
    paddingBottom: actuatedNormalizeHeight(10),
  },
  details: {
    flex: 1,
    height: actuatedNormalizeWidth(50),
    marginBottom: actuatedNormalizeHeight(16),
    marginTop: actuatedNormalizeHeight(16),
    top: actuatedNormalizeHeight(30),
    width: actuatedNormalizeWidth(50),
  },
  detailContainerStyle: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(16),
    minHeight: actuatedNormalizeHeight(50),
    width: actuatedNormalizeWidth(258),
  },
  detailContainerStyle1: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(16),
    marginLeft: actuatedNormalizeHeight(16),
    width: actuatedNormalizeWidth(150),
  },
  dotSeparator: {
    marginLeft: actuatedNormalizeWidth(40),
    marginBottom: actuatedNormalizeHeight(30),
    width: actuatedNormalizeWidth(260),
  },
  dot: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeWidth(4),
    height: actuatedNormalizeHeight(8),
    width: actuatedNormalizeWidth(8),
  },
  listViewContainerStyle: {
    backgroundColor: colors.BGGrey90,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeContainer: {
    width: actuatedNormalizeWidth(56),
  },
  time : {
    ...typography.LabelSmallRegular,
    alignSelf: 'center',
    color: colors.Black,
    justifyContent: 'center',
    left: actuatedNormalizeWidth(20),
    marginTop: actuatedNormalizeHeight(24),
    textAlign: 'center',
  },
  time1 : {
    ...typography.BodySemiBold3,
    alignSelf: 'center',
    color: colors.NeutralGrey90,
    fontSize: actuatedNormalizeModerateScale(10),
    justifyContent: 'center',
    left: actuatedNormalizeWidth(20),
    marginTop: actuatedNormalizeHeight(22),
    textAlign: 'center',
  },
  title: {
    ...typography.BodySemiBold3,
    color:colors.NeutralGrey110,
    top: actuatedNormalizeHeight(3),
  },
  title1: {
    ...typography.BodySemiBold3,
    color: colors.Black,
  },
  titleStyle:{
    marginRight: actuatedNormalizeWidth(40)
  },
  rowStyle:{
      marginRight: actuatedNormalizeWidth(20),
      marginTop: actuatedNormalizeHeight(10),
      marginLeft: actuatedNormalizeWidth(12),
  },
  separator: {
    backgroundColor: '#aaa',
    height: actuatedNormalizeHeight(1),
    marginBottom: actuatedNormalizeHeight(10),
    marginTop: actuatedNormalizeHeight(10),
  },
});

export default styles;
