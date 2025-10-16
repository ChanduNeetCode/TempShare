import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import typography from '../../../atoms/typography';

const styles = () =>
  StyleSheet.create({
    badgesLabelStyle:{
      ...typography.BadgesLabelStyle
    },
    badgesViewStyle: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeModerateScale(38),
      flexDirection: 'row',
      flexShrink: 1,
      justifyContent: 'center',
      minHeight: actuatedNormalizeHeight(15),
      minWidth: actuatedNormalizeWidth(38),
      paddingVertical: actuatedNormalizeWidth(2),
      paddingHorizontal: actuatedNormalizeWidth(4),
    },
    badgesViewStyle1: {
      alignItems: 'center',
      borderRadius: actuatedNormalizeModerateScale(8),
      flexDirection: 'row',
      columnGap:actuatedNormalizeWidth(4),
      flexShrink: 1,
      justifyContent: 'center',
      minHeight: actuatedNormalizeHeight(15),
      minWidth: actuatedNormalizeWidth(38),
      paddingVertical: actuatedNormalizeWidth(2),
      paddingHorizontal: actuatedNormalizeWidth(4),
    },
    iconStyle: {
      padding: actuatedNormalizeWidth(4),
    },
    labelSmallMedium:{
      ...typography.LabelSmallMedium
    },
    parentViewStyle: {
      flexDirection: 'row',
    },
    topOfCardStyle: {
      alignItems: 'center',
      borderTopLeftRadius: actuatedNormalizeModerateScale(8),
      borderTopRightRadius: actuatedNormalizeModerateScale(8),
      flexDirection: 'row',
      flexShrink: 1,
      minHeight: actuatedNormalizeHeight(15),
      minWidth: actuatedNormalizeWidth(69),
      paddingVertical: actuatedNormalizeWidth(2),
      paddingHorizontal: actuatedNormalizeWidth(4),
    },
  });

export default styles;
