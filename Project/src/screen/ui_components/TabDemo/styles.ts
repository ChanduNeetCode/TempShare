import { StyleSheet } from 'react-native';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
  actuatedNormalizeWidth,
} from '../../../../dff_library/ui_components/utils/utility';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';

export default StyleSheet.create({
  activeLableStyle: {
    color: '#333638',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  activeLabel: {
    color: '#333638',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  button: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    margin: 20,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  scrollableTabStyle: {
    flexDirection: 'row',
    height: 52,
    width: 'auto',
  },

  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
  },
  tabBar: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  tabStyle: {
    flexDirection: 'row',
    height: 52,
  },

  tabView: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    shadowColor: '#838383',
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 2,
  },

  lableStyle: {
    color: '#7D8287',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  label: {
    color: '#7D8287',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.15,
  },

  parentViewStyleForMainContainer: {
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(20),
    paddingLeft: actuatedNormalizeWidth(15),
    paddingRight: actuatedNormalizeWidth(15),
    width: '100%',
  },
  titleStyle: {
    textAlign: 'left',
    fontSize: 24,
    color: colors.Black,
    fontWeight: FontWeight._600,
    lineHeight:actuatedNormalizeHeight(30),
    letterSpacing:actuatedNormalizeModerateScale(0.18),
    marginTop:actuatedNormalizeHeight(20),
    marginBottom:actuatedNormalizeHeight(20),
    fontFamily: 'Mulish-Regular',
  },
});
