import { StyleSheet } from 'react-native';

import {actuatedNormalizeHeight, actuatedNormalizeModerateScale, actuatedNormalizeWidth} from '../../../../utils/utility'
import { typography,colors } from '../../../../atoms';

  const styles= StyleSheet.create({
    activeItemTextStyle: {
      ...typography.HeadingRegular3,
    },
    highlightStyle: {
      position: 'absolute',
    },
    itemTextStyle: {
      color: colors.NeutralGrey110,
      fontSize:actuatedNormalizeModerateScale(16)
    },
    itemWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      position:'relative'
    },   
    seperatorLine:{
    backgroundColor:colors.PastelAmber100,
    bottom:actuatedNormalizeWidth(0),
    height:actuatedNormalizeHeight(0.5),
    position:'absolute',
    width:actuatedNormalizeWidth(40),
    },
    wrapperStyle:{
    alignItems: 'center',
    flex:1,
    justifyContent: 'center',
    overflow:'hidden',
  },    
  });
  export default styles;
  