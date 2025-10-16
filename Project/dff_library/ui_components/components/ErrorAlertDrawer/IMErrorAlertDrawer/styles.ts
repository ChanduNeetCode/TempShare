import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { font } from '../../../atoms/index';

export default StyleSheet.create({
  descriptionView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: actuatedNormalizeHeight(10),
    marginHorizontal: actuatedNormalizeHeight(20),
  },

  descriptionTextStyle: {
    fontSize: 14,
    fontFamily: font.MulishRegular,
    lineHeight: 17.57,
    letterSpacing: 0.25,
    textAlign: 'center',
    // marginLeft:50
  },
  SubDescriptionStyle: {
    fontFamily: 'Mulish-SemiBold',
    color: colors.NeutralGrey140,
    fontSize: 14,
    // alignContent:'center',
    marginTop: 18,
  },

  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  centeredMainView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },

  errorMainStyle: {
    backgroundColor: colors.White,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginTop: 'auto',
  },

  errorViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorCircleStyle: {
    alignItems: 'center',
    borderRadius: actuatedNormalizeWidth(25),
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    minWidth: actuatedNormalizeWidth(50),
    minHeight: actuatedNormalizeHeight(50),
    marginTop: actuatedNormalizeHeight(-20),
  },

  closeIconStyle: {
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: actuatedNormalizeWidth(20),
  },

  modalTouchableStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    height: actuatedNormalizeHeight(100),
  },

  titleView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: actuatedNormalizeHeight(10),
    // textAlign:'center',
    // alignContent:'center'
  },

  titleStyle: {
    color: colors.NeutralGrey150,
    fontSize: 16,
    fontFamily: font.MulishSemiBold,
    lineHeight: 20,
    letterSpacing: 0.15,
    textAlign: 'center',
  },
});
