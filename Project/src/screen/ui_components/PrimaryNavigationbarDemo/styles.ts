import { StyleSheet } from 'react-native';

import { colors } from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth
} from '../../../utils/utility';

export default StyleSheet.create({
  circleStyle:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:colors.White,
    borderRadius:actuatedNormalizeWidth(16),
    justifyContent:'center',
    height:actuatedNormalizeWidth(32),
    width:actuatedNormalizeWidth(32),
  },
  containerStyle: {
    paddingTop: actuatedNormalizeHeight(50),
  },
  containerStyle1: {
    paddingTop: actuatedNormalizeHeight(50),
    height:actuatedNormalizeHeight(140),
  },
  helpCircleStyle:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:colors.White,
    borderRadius:actuatedNormalizeWidth(16),
    justifyContent:'center',
    height:actuatedNormalizeWidth(32),
    width:actuatedNormalizeWidth(32),
  },
  parentViewStyle: {
    backgroundColor:colors.White,
    flex: 1,
  },
  subContainer: {
   // flex: 0.1,
  },
});
