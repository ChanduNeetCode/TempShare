import { StyleSheet, Dimensions, Platform } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colors.GradientOrangeEnd,
    borderRadius: 10,
    height: actuatedNormalizeHeight(40),
    justifyContent: 'center',
    marginHorizontal: actuatedNormalizeHeight(50),
    marginVertical: actuatedNormalizeHeight(50),
  },
  middleRect: {
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeWidth(16),
    flexDirection: 'column',
    height: actuatedNormalizeHeight(60),
    marginBottom: actuatedNormalizeHeight(16),
    marginTop: actuatedNormalizeHeight(40),
    width: windowWidth - actuatedNormalizeWidth(32),
  },
  mainViewStyle: {
    height: '100%',
    paddingTop: actuatedNormalizeHeight(20),
    width: '100%',
  },
  mainContainer: {
    marginLeft: actuatedNormalizeWidth(20),
    marginTop: actuatedNormalizeHeight(20),
    //position: 'absolute',
    // zIndex: 1,
  },
  parentViewStyle: {
    alignItems: 'center',
    height: '85%',
    justifyContent: 'center',
    width: '100%',
  },

  parentRect: {
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeWidth(16),
    flexDirection: 'column',
    height: actuatedNormalizeHeight(132),
    marginBottom: actuatedNormalizeHeight(16),
    marginTop: actuatedNormalizeHeight(16),
    width: windowWidth - actuatedNormalizeWidth(32),
  },
  titleStyle: {
    color: colors.Black,
    marginBottom: actuatedNormalizeHeight(20),
  },
  viewStyle:{
    alignItems: 'center',
    backgroundColor: colors.White,
    flexDirection: 'column',
    height: actuatedNormalizeHeight(700),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(360),
  }

});
