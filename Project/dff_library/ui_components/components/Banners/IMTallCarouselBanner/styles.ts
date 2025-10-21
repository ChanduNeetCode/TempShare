import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';
import { FontWeight } from '../../../utils/enums';
import { typography,colors } from '../../../atoms';


export default StyleSheet.create({
  tallWidthItem1LinearContainer: {
    borderRadius: actuatedNormalizeModerateScale(16),
    height: actuatedNormalizeHeight(136),
    marginRight: actuatedNormalizeWidth(10),
    overflow: 'hidden',
    width: actuatedNormalizeWidth(242),
  },
  tallWidthItem1TextContainer: {
    height: actuatedNormalizeHeight(32),
    marginLeft: actuatedNormalizeWidth(11),
    marginTop: actuatedNormalizeHeight(16),
    width: actuatedNormalizeWidth(160),
  },
  tallWidthItem1ButtonContainer: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(25),
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginLeft: actuatedNormalizeWidth(11),
    marginTop: actuatedNormalizeHeight(36),
    width: actuatedNormalizeWidth(106),
  },
  tallWidthItemButtonText: {
    ...typography.ButtonTitle,
    color: colors._876822,
    fontWeight:FontWeight._700,
  },
  tallWidthItem1TextStyle: {
    ...typography.LinkSemiBold,
    color: colors.White,
    textAlign: 'left',
  },
  tallWidthItemImageStyle: {
    bottom: actuatedNormalizeHeight(0),
    position: 'absolute',
    right: actuatedNormalizeWidth(0),
  },
  tallWidthItem2ButtonContainer: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeModerateScale(25),
    height: actuatedNormalizeHeight(42),
    justifyContent: 'center',
    marginBottom: actuatedNormalizeHeight(14),
    marginLeft: actuatedNormalizeWidth(6),
    width: actuatedNormalizeWidth(106),
  },
  tallWidthItem2ButtonText: {
    ...typography.ButtonTitle,
    color: colors.White,
  }
});
