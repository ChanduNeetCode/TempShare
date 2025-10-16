import { colors, typography } from '../../../dff_library/ui_components/atoms';
import { actuatedNormalizeHeight, actuatedNormalizeWidth, actuatedNormalizeModerateScale } from '../../../dff_library/ui_components/utils/utility';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: {
    height: actuatedNormalizeHeight(70),
  },
  linearGradientStyle: {
    alignItems: 'flex-start',
    borderBottomLeftRadius: actuatedNormalizeModerateScale(10),
    borderBottomRightRadius: actuatedNormalizeModerateScale(10),
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  mainContainer: {
    alignItems: 'center',
    columnGap: actuatedNormalizeWidth(8),
    flexDirection: 'row',
    paddingHorizontal: actuatedNormalizeWidth(16),
  },
  titleStyle: {
    ...typography.BodySemiBold1,
    color: colors.White,
    flex: 1,
  }
});

export default styles;
