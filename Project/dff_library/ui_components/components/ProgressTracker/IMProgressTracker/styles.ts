import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import colors from '../../../atoms/colors';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: actuatedNormalizeWidth(14),
  },
  circle: {
    width: actuatedNormalizeWidth(24),
    height:  actuatedNormalizeWidth(24),
    borderRadius:  actuatedNormalizeWidth(25),
    marginRight: actuatedNormalizeWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText1: {
    color: colors.NeutralGrey110,
    width: actuatedNormalizeWidth(9),
    height: actuatedNormalizeHeight(16),
  },

  circleText2: {
    width: actuatedNormalizeWidth(9),
    height: actuatedNormalizeHeight(16),
    color: 'white',
  },
  title: {
    paddingRight: actuatedNormalizeWidth(8),
    color:colors.NeutralGrey110
  },
  button: {
    flex: 1,
    width: actuatedNormalizeWidth(30),
    height: actuatedNormalizeHeight(10),
  },
  proceedButtonText: {
    color: 'white',
    fontSize: actuatedNormalizeWidth(16),
    paddingTop: actuatedNormalizeHeight(12),
  },
  line: {
    height: actuatedNormalizeHeight(2),
    width: actuatedNormalizeWidth(10),
    borderRadius: actuatedNormalizeModerateScale(1),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: actuatedNormalizeHeight(140),
  },
  modalContent: {
    backgroundColor: 'white',
    padding: actuatedNormalizeWidth(20),
    borderRadius: actuatedNormalizeModerateScale(10),
    alignItems: 'center',
  },
  modalText: {
    fontSize: actuatedNormalizeWidth(15),
    color: 'black',
  },
});
