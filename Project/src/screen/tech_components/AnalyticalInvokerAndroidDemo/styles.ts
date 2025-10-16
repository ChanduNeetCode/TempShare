import { StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';

const styles = StyleSheet.create({
  button: {
    color: colors.White,
    fontSize: actuatedNormalizeModerateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(5),
    minWidth: actuatedNormalizeWidth(250),
    padding: actuatedNormalizeModerateScale(10),
    margin:actuatedNormalizeModerateScale(10)
  },
  container: {
    backgroundColor: colors.White,
    flex: 1,
    gap: actuatedNormalizeHeight(32),
    padding: actuatedNormalizeModerateScale(10),
    paddingTop: actuatedNormalizeHeight(30),
  },
  failureContainer: {
    borderColor: colors.Error110,
  },
  failureHeader: {
    color: colors.Error110,
  },
  fileOperationResultContainer: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(10),
    borderWidth: actuatedNormalizeModerateScale(1),
    gap: actuatedNormalizeHeight(10),
    minHeight: actuatedNormalizeHeight(150),
    padding: actuatedNormalizeModerateScale(20),
    width: '100%',
  },
  fileOperationResultHeader: {
    alignSelf: 'center',
    fontSize: actuatedNormalizeModerateScale(20),
  },
  fileOperationResultTitle: {
    fontSize: actuatedNormalizeModerateScale(15),
    fontWeight: 'bold',
  },
  resultMessage: {
    fontWeight: FontWeight._400,
  },
  successContainer: {
    borderColor: colors.Success110,
    borderWidth: actuatedNormalizeModerateScale(1),
  },
  successHeader: {
    color: colors.Success110,
  },
});

export default styles;