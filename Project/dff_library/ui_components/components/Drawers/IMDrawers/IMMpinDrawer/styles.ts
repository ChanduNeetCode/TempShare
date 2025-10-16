import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../utils/utility';
import { colors, typography } from '../../../../atoms';

const styles = StyleSheet.create({
  bankLogoStyles: {
    left: actuatedNormalizeWidth(111),
    position: 'absolute',
    top: actuatedNormalizeHeight(24),
  },
  contentContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentStyle: {
    justifyContent: 'center',
    left: actuatedNormalizeWidth(16),
    position: 'absolute',
    top: actuatedNormalizeHeight(248),
    width: actuatedNormalizeWidth(328)
  },
  closeIconStyles: {
    alignItems: 'center',
    backgroundColor: colors.PrimaryOrange80,
    borderRadius: actuatedNormalizeWidth(16),
    justifyContent: 'center',
    height: actuatedNormalizeWidth(32),
    width: actuatedNormalizeWidth(32),
   
  },
  errorMsgTextStyle: {
    color: colors.Error100,
    left: actuatedNormalizeWidth(16),
    position: 'absolute',
    top: actuatedNormalizeHeight(146),
  },
  eyeIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
    right: actuatedNormalizeWidth(10),
  },
  keyboardAvoidingStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  linearGradientStyle: {
    backgroundColor: 'orange',
    borderTopLeftRadius: actuatedNormalizeModerateScale(24),
    borderTopRightRadius: actuatedNormalizeModerateScale(24),
    height: actuatedNormalizeHeight(169),
    zIndex:-2,
  },
  mainContainerStyle: {
    backgroundColor: 'white',
    borderTopLeftRadius: actuatedNormalizeModerateScale(24),
    borderTopRightRadius: actuatedNormalizeModerateScale(24),
    height: actuatedNormalizeHeight(334),
    width: actuatedNormalizeWidth(360),
  },
  modalTouchableStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    height: '100%',
  },
  mpinStyle: {
    ...typography.ButtonSmall,
    color: colors.NeutralGrey140,
    left: actuatedNormalizeWidth(16),
    top: actuatedNormalizeHeight(60),
  },
  otpContainer: {
    backgroundColor: 'white',
    borderColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(16),
    borderWidth: actuatedNormalizeModerateScale(1),
    elevation: 12,
    height: actuatedNormalizeHeight(52),
    marginLeft: actuatedNormalizeWidth(16),
    paddingLeft: actuatedNormalizeWidth(16),
    position: 'absolute',
    shadowColor: 'rgb(0,0, 0)',
    shadowOpacity: 0.05,
    shadowOffset: {
      height: actuatedNormalizeHeight(2),
      width: actuatedNormalizeWidth(0)
    },
    shadowRadius: 12,
    top: actuatedNormalizeHeight(86),
    width: actuatedNormalizeWidth(296),
  },
  otpInput: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(16),
    color:colors.NeutralGrey140,
    flex: 1,
  },
  regularCardStyle: {
   top:actuatedNormalizeHeight(72),
    left: actuatedNormalizeWidth(16),
    width: actuatedNormalizeWidth(328), 
    position:'absolute',
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: actuatedNormalizeHeight(32),
    paddingHorizontal: actuatedNormalizeWidth(16),
    top: actuatedNormalizeHeight(16),
  },
  titleStyle: {
    ...typography.HeadingBold3,
    color: colors.White
  },

});

export default styles;