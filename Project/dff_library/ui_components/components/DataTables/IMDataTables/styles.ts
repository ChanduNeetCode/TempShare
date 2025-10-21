import { colors, typography,font } from '../../../atoms';
import { StyleSheet } from 'react-native';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

export default StyleSheet.create({
  bodyContainer: {
    height: actuatedNormalizeHeight(100),
    left: actuatedNormalizeWidth(120),
    position: 'absolute',
    width: actuatedNormalizeWidth(240),
  },
  bodyContainerTitleBothSides: {
    borderBottomWidth: actuatedNormalizeWidth(1),
    borderColor: colors.PastelAmber100,
  },
  bodyContainerStyle: {
    backgroundColor: 'rgba(231,232,233,0.7)',
    borderColor: colors.PastelAmber100,
    borderWidth: actuatedNormalizeWidth(1),
    height: actuatedNormalizeHeight(44),
    justifyContent: 'center',
  },
  bodyContainerStyleMoreRows: {
    backgroundColor: 'rgba(231,232,233,0.7)',
    borderColor: colors.PastelAmber100,
    borderWidth: actuatedNormalizeWidth(1),
    height: actuatedNormalizeHeight(44),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(120),
  },
  bodyContainerTitleLeft: {
    backgroundColor: colors.BGGrey90,
    justifyContent: 'center',
  },
  bodyContainerFirstIndex: {
    backgroundColor: colors.PastelBrown100,
    borderBottomWidth: actuatedNormalizeWidth(1),
    borderColor: colors.PastelAmber100,
    borderTopWidth: actuatedNormalizeWidth(1),
    fontFamily: font.MulishBold,
    justifyContent: 'center',
  },
  bodyContainerFirstIndexTitleBothSides: {
    backgroundColor: colors.PastelBrown100,
    borderBottomWidth: actuatedNormalizeWidth(1),
    borderColor: colors.PastelAmber100,
    justifyContent: 'center',
  },
  bodyTextStyle: {
    ...typography.LabelLargeRegular,
    color: colors.NeutralGrey140,
    textAlign: 'center',
  },
  containerForMoreItems: {
    height: actuatedNormalizeHeight(270),
    position: 'absolute',
    width: actuatedNormalizeWidth(360),
  },
  containerTitleOnLeft: {
    height: actuatedNormalizeHeight(270),
    position: 'absolute',
    width: actuatedNormalizeWidth(360),
  },
  containerTitleOnBothSides: {
    height: actuatedNormalizeHeight(280),
    width: actuatedNormalizeWidth(144),
  },
  containerForScroll: {
    height: actuatedNormalizeHeight(240),
    width: actuatedNormalizeWidth(360),
  },
  containerForScrollItems: {
    borderBottomWidth: actuatedNormalizeWidth(1),
    borderColor: colors.PastelAmber100,
    height: actuatedNormalizeHeight(270),
    position: 'absolute',
    width: actuatedNormalizeWidth(360),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  flexDirectionRow:{
    flexDirection: 'row',
  },
  flexColumnDirectionValue: {
    flexDirection: 'column',
  },
  flexRowDirection: {
    flexDirection: 'row',
    width: '100%',
  },
  titleContainerStyle: {
    backgroundColor: colors.White,
    borderColor: colors.PastelAmber100,
    borderWidth: actuatedNormalizeWidth(1),
    height: actuatedNormalizeHeight(44),
    justifyContent: 'center',
  },
  titleContainerStyleMoreRows: {
    alignContent: 'center',
    backgroundColor: colors.White,
    borderColor: colors.PastelAmber100,
    borderWidth: actuatedNormalizeWidth(1),
    height: actuatedNormalizeHeight(44),
    justifyContent: 'center',
  },
  titleContainerTitleLeft: {
    backgroundColor: colors.White,
    borderColor: colors.PastelAmber100,
    borderRightWidth: actuatedNormalizeWidth(1),
    justifyContent: 'center',
  },
  titleContainerStyleFirstIndex: {
    backgroundColor: colors.PastelBrown100,
    borderColor: colors.PastelAmber100,
    borderRightWidth: actuatedNormalizeWidth(1),
    justifyContent: 'center',
  },
  titleContainerStyleFirstIndexforBothSides: {
    backgroundColor: colors.PastelBrown100,
    borderColor: colors.PastelAmber100,
    borderBottomWidth: actuatedNormalizeWidth(1),
    justifyContent: 'center',
  },
  titleStyle: {
    color: colors.NeutralGrey140,
    paddingRight: actuatedNormalizeWidth(30),
    textAlign: 'center',
  },
  titleStyleforBothSides: {
    ...typography.GcaAlphabetStyle,
    color: colors.NeutralGrey140,
    textAlign: 'center',
  },


});