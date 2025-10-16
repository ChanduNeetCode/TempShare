import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { font } from '../../../../dff_library/ui_components/atoms/index';

const styles = StyleSheet.create({
  button: {
    color: colors.White,
    fontSize: actuatedNormalizeModerateScale(18),
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: font.MulishSemiBold,
  },
  buttonStyle: {
    backgroundColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(5),
    minWidth: actuatedNormalizeWidth(250),
    padding: actuatedNormalizeModerateScale(10),
  },
  container: {
    backgroundColor: colors.White,
    flex: 1,
    gap: actuatedNormalizeHeight(32),
    paddingTop: actuatedNormalizeHeight(30),
    padding: actuatedNormalizeModerateScale(10),
  },
  failureContainer: {
    borderColor: colors.Error110,
  },
  failureHeader: {
    color: colors.Error110,
  },
  fileOperationResultContainer: {
    padding: actuatedNormalizeModerateScale(20),
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(10),
    borderWidth: actuatedNormalizeModerateScale(1),
    gap: actuatedNormalizeHeight(10),
    minHeight: actuatedNormalizeHeight(150),
    width: '100%',
  },
  fileOperationResultHeader: {
    alignSelf: 'center',
    fontSize: actuatedNormalizeModerateScale(20),
    fontFamily: font.MulishSemiBold,
  },
  fileOperationResultTitle: {
    fontSize: actuatedNormalizeModerateScale(15),
    // fontWeight:'bold'
    fontFamily: font.MulishSemiBold,
  },
  resultMessage: {
    fontWeight: FontWeight._400,
    fontFamily: font.MulishRegular,
  },
  successContainer: {
    borderColor: colors.Success110,
    borderWidth: actuatedNormalizeModerateScale(1),
  },
  successHeader: {
    color: colors.Success110,
  },
  pdf:{
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  }
});

export default styles;
