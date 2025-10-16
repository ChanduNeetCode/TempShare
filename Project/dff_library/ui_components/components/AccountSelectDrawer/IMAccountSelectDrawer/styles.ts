import { StyleSheet } from 'react-native';

import colors from '../../../atoms/colors';
import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf:'center',
    elevation: 10,
    marginBottom: actuatedNormalizeHeight(24),
    shadowColor: colors.Black,
    shadowOffset: {
      width: actuatedNormalizeWidth(0),
      height: actuatedNormalizeHeight(15),
    },
  },
  buttonText: {
    textAlign: 'center',
    color: colors.White,
  },
  cancelImage: {
    marginLeft: actuatedNormalizeWidth(220),
    marginTop: actuatedNormalizeHeight(-20),
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
  },
  contentContainerStyle:{
    marginTop:actuatedNormalizeHeight(24),
    maxHeight:actuatedNormalizeHeight(500),
    minHeight:actuatedNormalizeHeight(280)
  },
  listItemLabel: {
    color: colors.NeutralGrey150,
    fontSize: 14,
    fontWeight: '600',
  },
  listItemContainer: {
    alignItems: 'center',
    borderBottomColor: colors.White,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    marginLeft: actuatedNormalizeWidth(5),
    height: actuatedNormalizeHeight(60),
    paddingHorizontal: actuatedNormalizeWidth(15),
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopLeftRadius: actuatedNormalizeModerateScale(20),
    borderTopRightRadius: actuatedNormalizeModerateScale(20),
    bottom: actuatedNormalizeHeight(0),
    position: 'absolute',
  },
  modalParantStyle: {
    backgroundColor: colors.White,
    borderTopLeftRadius: actuatedNormalizeModerateScale(20),
    borderTopRightRadius: actuatedNormalizeModerateScale(20),
    marginTop: 'auto',
    paddingBottom: actuatedNormalizeWidth(0.6),
    paddingHorizontal: actuatedNormalizeHeight(0.0277),
  },
  modalTouchableStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: actuatedNormalizeModerateScale(20),
    borderTopRightRadius: actuatedNormalizeModerateScale(20),
    elevation: 5,
    flex: 1, // Takes up half the available height
    paddingHorizontal:actuatedNormalizeWidth(16),
    shadowColor: '#000',
    shadowOffset: {
      width: actuatedNormalizeWidth(0),
      height: actuatedNormalizeHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%', 
  },
  modalText: {
    marginBottom: actuatedNormalizeHeight(15),
    textAlign: 'center',
  },
  parentViewStyle: {
    backgroundColor: colors.PastelAmber100,
    justifyContent: 'center',
    marginTop: actuatedNormalizeHeight(20),
    paddingLeft: actuatedNormalizeWidth(15),
    paddingRight: actuatedNormalizeWidth(15),
    width: '100%',
  },
  sectionHeaderContainer: {
    height: actuatedNormalizeHeight(30),
    justifyContent: 'center',
    paddingHorizontal: actuatedNormalizeWidth(15),
  },
  sectionHeaderLabel: {
    color: colors.NeutralGrey110,
  },
  secondaryTitleStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: actuatedNormalizeHeight(24),
    justifyContent: 'space-between',
  },
  textstyle: {
    color: '#333638',
  },
  title: {
    color: colors.NeutralGrey140,
    marginTop: actuatedNormalizeHeight(-20),
  },
});
export default styles;
