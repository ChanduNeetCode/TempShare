import { StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import { typography } from '../../../../dff_library/ui_components/atoms';
import { actuatedNormalizeHeight } from '../../../../dff_library/ui_components/utils/utility';

export default StyleSheet.create({
  body:{
    ...typography.BodyRegular2,
    color:colors.Black
  },
  ellipsisStyle:{
    color:colors.GradientOrangeStart,
    textDecorationLine:'underline'
  },
  mainStyle:{
    backgroundColor:colors.White,
    height:"100%"
  },
  parentViewStyle: {
    justifyContent: 'center',
    marginHorizontal:16,
    rowGap:16,
    marginTop:40,

  },
  parentDropdownStyle:{
    alignSelf: 'center',
    top: actuatedNormalizeHeight(20),
  },
  seeMoreLessStyle:{
    color: colors.GradientOrangeStart,
    fontFamily: 'MulishBold',
    textDecorationLine:'underline',
  },
  titleStyle: {
    ...typography.HeadingLabel2,
    color:colors.Black
  },
  titleStyle1:{
    ...typography.HeadingLabel3,
    color:colors.Black,
  }
});
