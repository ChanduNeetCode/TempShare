import { StyleSheet } from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { font } from '../../../../dff_library/ui_components/atoms/index';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';

export default StyleSheet.create({
  backView: {
    marginLeft: actuatedNormalizeWidth(20)
  },
  dropdownContainerStyle: {
    alignItems: 'center',
    marginTop: actuatedNormalizeHeight(20),
    paddingHorizontal: actuatedNormalizeHeight(16)
  },
  dropdownButtonInternalStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: actuatedNormalizeWidth(16),
    paddingLeft: actuatedNormalizeWidth(16),
  },
  dropdownButtonStyle: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderColor: colors.PastelAmber100,
    borderRadius: actuatedNormalizeModerateScale(16),
    borderWidth: actuatedNormalizeWidth(1),
    elevation: 3,
    flexDirection: 'row',
    height: actuatedNormalizeHeight(45),
    justifyContent: 'space-between',
    overflow: 'visible',
    shadowOffset: {
      width: actuatedNormalizeWidth(3),
      height: actuatedNormalizeHeight(4),
    },
    shadowColor: colors._B8BBC7,
    shadowOpacity: 0.28,
    width: actuatedNormalizeWidth(156),
  },
  dropdownRowStyle: {
    height: '100%',
    width: '100%',
  },
  dropdownRowTextStyle: {
    alignSelf: 'stretch',
    color: colors.NeutralGrey140,
    paddingTop: actuatedNormalizeHeight(4),
    textAlign: 'left',
  },
  flatListRowContainer: {
    height: actuatedNormalizeHeight(28),
    marginTop: actuatedNormalizeHeight(12),
  },
  flatListStyle: {
    marginLeft: actuatedNormalizeWidth(16),
    marginRight: actuatedNormalizeWidth(16),
  },
  headerStyle: {
    color: colors.NeutralGrey140,
    marginTop: actuatedNormalizeHeight(2),
  },
  leftSideContainer: {
    color: colors.NeutralGrey110,
    paddingLeft: actuatedNormalizeWidth(15),
  },
  linearView: {
    alignItems: 'flex-start',
    borderBottomLeftRadius: actuatedNormalizeWidth(10),
    borderBottomRightRadius: actuatedNormalizeWidth(10),
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  mainContainer: {
    backgroundColor: colors.White,
    flex: 1,

  },
  parentViewStyle: {
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(40),
    paddingHorizontal: actuatedNormalizeWidth(16),
    width: '100%',
    alignItems: 'center',
  },
  svgStyle: {
    height: actuatedNormalizeHeight(24),
    width: actuatedNormalizeWidth(24),
  },
  titleStyle: {
    color: colors.Black,
    fontFamily: font.MulishRegular,
    fontSize: actuatedNormalizeModerateScale(24),
    fontWeight: FontWeight._600,
    lineHeight: actuatedNormalizeHeight(28),
    marginBottom: actuatedNormalizeHeight(20),
  },
  topView: {
    height: actuatedNormalizeHeight(70),
    width: '100%',
  },

  /* Choose EMI tenure  Companent USB 368 row-9 Loans_DFF*/
  dropdownButtonStylechooseEMITenure: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderColor: colors.Error110,
    borderWidth: actuatedNormalizeWidth(1),
    borderRadius: actuatedNormalizeHeight(16),
    flexDirection: 'row',
    height: actuatedNormalizeHeight(52),
    justifyContent: 'space-between',
    width: actuatedNormalizeWidth(156),

    //Elevation For Android + iOS below properties
    elevation: 3,
    shadowOffset: {
      width: actuatedNormalizeWidth(3),
      height: actuatedNormalizeHeight(4),
    },
    shadowColor: colors._B8BBC7,
    shadowOpacity: 0.28,
    overflow: 'visible',
  },
  parentViewStyleChooseEMITenure: {
    alignItems: 'center',
    height: '20%',
    width: '100%',
  },
  titleStyleChooseEMITenure: {
    color: colors.Black,
    fontFamily: font.MulishMedium,
    fontSize: actuatedNormalizeModerateScale(12),
    fontWeight: FontWeight._500,
    letterSpacing: 0.25,
    lineHeight: actuatedNormalizeHeight(16),
    marginBottom: actuatedNormalizeHeight(20),
  },

  /* USB_378_Loans_Gold Loan Renewal row-16 Loans_DFF*/
  labelContainerLonesGold: {
    backgroundColor: colors.White,
    color: colors.NeutralGrey110,
    fontFamily: font.MulishMedium,
    fontSize: actuatedNormalizeModerateScale(12),
    fontWeight: FontWeight._400,
    left: actuatedNormalizeWidth(55),
    letterSpacing: 0.25,
    lineHeight: actuatedNormalizeHeight(16),
    padding: actuatedNormalizeModerateScale(5),
    position: 'absolute',
    top: actuatedNormalizeHeight(-12),
    zIndex: 50,
  },
  parentViewStyleLoansGold: {
    alignItems: 'center',
    height: '20%',
    width: '100%',
  },
  titleStyleChooseLonesGold: {
    color: colors.Black,
    marginBottom: actuatedNormalizeHeight(20),
  },

  /* USB_380_Loans_Closed Home Loan Services row-5 Loans_DFF*/
  labelContainerLoansClosedHomeLoan: {
    backgroundColor: colors.White,
    color: colors.NeutralGrey110,
    fontFamily: font.MulishMedium,
    fontSize: actuatedNormalizeModerateScale(12),
    fontWeight: FontWeight._400,
    left: actuatedNormalizeWidth(55),
    letterSpacing: 0.25,
    lineHeight: actuatedNormalizeHeight(16),
    padding: actuatedNormalizeModerateScale(5),
    position: 'absolute',
    top: actuatedNormalizeHeight(-12),
    zIndex: 50,
  },
  parentViewStyleLoansClosedHomeLoan: {
    alignItems: 'center',
    height: '20%',
    marginBottom: actuatedNormalizeHeight(20),
    width: '100%',
  },
  titleStyleChooseLoansClosedHomeLoan: {
    color: colors.Black,
    marginBottom: actuatedNormalizeHeight(20),
  },
});
