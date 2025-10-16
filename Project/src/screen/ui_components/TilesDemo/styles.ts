import { StyleSheet } from 'react-native';

import { actuatedNormalizeHeight,actuatedNormalizeModerateScale,actuatedNormalizeWidth} from '../../../../dff_library/ui_components/utils/utility';

export default StyleSheet.create({
  carouselStyle:{
    marginRight: actuatedNormalizeWidth(16),
  },
  dropdownStyle:{
    alignSelf: "center",
    top: actuatedNormalizeHeight(20), 
  },
  styleStackedMainBGViewStyle:{
    marginTop:0 
  },
  viewStyle:{
    flex:1,
    flexDirection: 'column',
    marginTop:actuatedNormalizeHeight(50),
    rowGap:actuatedNormalizeModerateScale(20)
  },
  viewStyle2:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    marginTop:actuatedNormalizeHeight(50),
  }
});
