import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { actuatedNormalizeHeight } from '../../../../src/utils/utility';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  containerStyle: { flex: 1 },
  backContainer: {
    width: '100%',
    height: actuatedNormalizeHeight(70),
  },
  gradientStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backStyle: { marginLeft: 20 },
  mainViewStyle: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },
  parentRect: {
    width: windowWidth - 32,
    height: 132,
    borderRadius: 16,
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: colors.White,
    marginTop: 16,
    marginBottom: 16,
  },
  favTextStyle: {
    textAlign: 'center',
    color: colors.NeutralGrey140,
    letterSpacing: 0.1,
    marginTop: 3,
  },
  favSvgStyle: { marginRight: 4 },
  manageTextStyle: {
    textAlign: 'center',
    color: colors.NeutralGrey140,
  },
  favBlockParentView: {
    flex: 2,
    height: 52,
    flexDirection: 'row',
    padding: 16,
  },
  favBlockChildView: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  favSectionStyle: {
    flexDirection: 'row',
    width: 97,
    height: 20,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  manageBlockChildView: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 3,
  },
  flatListStyle: { marginTop: 2, paddingLeft: 8 },
  middleRect: {
    width: windowWidth - 32,
    height: 60,
    borderRadius: 16,
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: colors.White,
    marginTop: 40,
    marginBottom: 16,
  },
  charCircleStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    opacity: 0.3,
    position: 'absolute',
  },
  charInsideCircle: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  rowMainView: {
    width: 60,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    flexDirection: 'column',
  },
  view: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    width: 59,
    height: 16,
    borderRadius: 8,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
