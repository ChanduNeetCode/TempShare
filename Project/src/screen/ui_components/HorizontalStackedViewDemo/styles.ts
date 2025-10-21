import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  linearGradientStyle: {
    flex: 1,
    marginTop: actuatedNormalizeHeight(20),
  },
  componentSeparatorStyle: {
    marginTop: actuatedNormalizeHeight(30),
    left: 16,
  },
  ContainerStyle: {
    width: actuatedNormalizeWidth(328),
    height: actuatedNormalizeHeight(85),
    alignItems: 'center',
  },
  renderItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: actuatedNormalizeWidth(164),
  },
  separatorLineStyle: {
    borderLeftWidth: actuatedNormalizeWidth(1),
    borderColor: colors.White,
    margin: actuatedNormalizeWidth(5),
  },
  titleStyle: {
    color: colors.White,
    alignSelf: 'center',
  },
  subTitleStyle: {
    color: colors.White,
    alignSelf: 'center',
  },
  linearGradinentStyles: {
    borderColor: colors.White,
    borderWidth: actuatedNormalizeWidth(1.5),
    borderRadius: actuatedNormalizeWidth(15),
  },
});
export default styles;
