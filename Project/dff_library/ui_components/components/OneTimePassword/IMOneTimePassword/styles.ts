import {  StyleSheet } from 'react-native';

import {colors,typography} from '../../../atoms';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const useOTPStyles = StyleSheet.create({
  container: {
    justifyContent: 'center' as const,
  },
  contentContainer: {
    backgroundColor: colors.White,
    borderTopLeftRadius: actuatedNormalizeWidth(25),
    borderTopRightRadius: actuatedNormalizeWidth(25),
    minHeight: actuatedNormalizeHeight(270),
    paddingHorizontal:actuatedNormalizeWidth(16)
  },
  contentContainerStyle: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexGrow: 1,
    justifyContent: 'center',
  },
  errorMessageText: {
    ...typography.LabelLargeMedium,
    color: colors.Error100,
    justifyContent:'center',
    top:actuatedNormalizeHeight(16),
  },
  eyeIcon: {
    alignContent:'center',
    alignItems: 'center' ,
    alignSelf:'center',
    justifyContent: 'center' ,
    height:actuatedNormalizeHeight(32),
    width:actuatedNormalizeWidth(32),
  },
  keyboardAvoidingStyle: {
   backgroundColor:'rgba(0,0,0,0.5)',
   borderTopLeftRadius: actuatedNormalizeWidth(25),
   borderTopRightRadius: actuatedNormalizeWidth(25),
  },
  messageView: {
    flexDirection: 'row' as const,
    justifyContent:'center'
  },
  modalContainer: {
    alignItems: 'center' as const,
  },
  modalTouchableStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex:1,
    height: '100%',
  },
  otpContainer: {
    alignContent:'center'as const,
    alignItems: 'center' as const,
    alignSelf:'center',
    flexDirection: 'row' as const,
    justifyContent: 'center' as const,
    top:actuatedNormalizeHeight(40),
  },
  otpInput: {
    ...typography.OtpInputStyle,
    color:colors.NeutralGrey140,
    textAlign: 'center' as const,
    width: actuatedNormalizeWidth(250),
  },
  otpNoteTitle: {
    ...typography.BodyRegular2,
    color: colors.NeutralGrey150,
    top: actuatedNormalizeHeight(30),
    width:actuatedNormalizeWidth(328),
  },
  otptimeText2: {
    ...typography.BodySemiBold2,
    color: colors.NeutralGrey140,
  },
  otptimeText: {
    ...typography.BodyRegular2,
    color:colors.NeutralGrey120,
    textAlign: 'center' as const,
    top: actuatedNormalizeHeight(30),
  },
  otpView: {
    alignItems: 'center' ,
    flexDirection: 'row' ,
    justifyContent:'space-between',
    top: actuatedNormalizeHeight(45), 
  },
  resendContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  resendOtpStyle: {
    ...typography.ButtonSmall,
    color: colors.NeutralGrey140,
  },
  succesText: {
    ...typography.LabelLargeMedium,
    color: colors.Success100,
    justifyContent:'center',
    top:actuatedNormalizeHeight(16),
  },
  scrollviewContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    top:actuatedNormalizeHeight(24),
  }, 
  title: {
    ...typography.BodySemiBold1,
    color: colors.NeutralGrey140,
  },
  titleOtpStyle: {
    ...typography.GcaAlphabetStyle,
    color: colors.NeutralGrey140,
  },
});

export default useOTPStyles;
