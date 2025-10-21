import { StyleSheet } from 'react-native';

import { typography,colors } from '../../../../atoms';
import { FontWeight } from '../../../../utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../../utils/utility';

export const styles = StyleSheet.create({
  alphaheadStyles: {
    ...typography.ButtonSmall,
    color: colors.NeutralGrey140,
    marginHorizontal: actuatedNormalizeWidth(16),
    marginTop: actuatedNormalizeHeight(24),
  },
  container: {
    backgroundColor: colors.White,
    paddingBottom: actuatedNormalizeHeight(20),
    position: 'relative',
  },
  defaultIconStyle:{
    height:actuatedNormalizeHeight(20),
    width:actuatedNormalizeWidth(20),
  },
  iconStyles: {
    borderRadius: actuatedNormalizeModerateScale(8),
    height: actuatedNormalizeHeight(32),
    paddingHorizontal: actuatedNormalizeWidth(6),
    paddingVertical: actuatedNormalizeHeight(6),
    width: actuatedNormalizeWidth(32),
  },
  imageRenderViewContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  listItemContainer: {
    borderTopColor: colors.CoolGrey110,
    borderTopWidth:actuatedNormalizeWidth(1),
    flex: 1,
    justifyContent: 'center',
    height: actuatedNormalizeHeight(30),
    paddingHorizontal: actuatedNormalizeHeight(20),
  },
  mainView: {
    backgroundColor: colors.White,
    flex: 1,
  },
  radioButtonStyles: {
    borderColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(15),
    borderWidth: actuatedNormalizeWidth(1),
  },
  sectionHeaderContainer: {
    justifyContent: 'center',
    marginHorizontal: actuatedNormalizeWidth(16),
    marginTop: actuatedNormalizeHeight(16),
  },
  sectionHeaderLabel: {
    ...typography.BodyRegular3,
    color: colors.NeutralGrey110,
  },
  searchRenderTouchableContainer: {
    backgroundColor: colors.White,
    borderBottomWidth: actuatedNormalizeWidth(1),
    borderColor: colors.CoolGrey100,
    height: actuatedNormalizeHeight(57),
    marginHorizontal: actuatedNormalizeWidth(16),
  },
  searchContainerStyle: {
    backgroundColor: colors.CoolGrey100,
    flex: 1,
  },
  searchInputViewContainer: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(25),
    flexDirection: 'row',
    elevation: 2,
    minHeight: actuatedNormalizeHeight(40),
    maxHeight: actuatedNormalizeHeight(60),
    margin: actuatedNormalizeModerateScale(16),
    overflow: 'hidden',
    padding: actuatedNormalizeModerateScale(0),
    paddingLeft: actuatedNormalizeWidth(16),
    shadowColor: colors.Black,
    shadowOpacity: 0.8,
    shadowRadius: actuatedNormalizeModerateScale(2),
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  searchTouchableActiveStyle: {
    backgroundColor: colors.CoolGrey100,
    height: actuatedNormalizeHeight(57),
    marginHorizontal: actuatedNormalizeWidth(16),
  },
  searchRenderViewContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: actuatedNormalizeHeight(13),
    marginTop: actuatedNormalizeHeight(12),
  },
  textStyle1: {
    ...typography.SubTitleRegular1,
    color: colors.NeutralGrey110,
    textAlignVertical: 'center',
  },
  textstyle2: {
    ...typography.SubTitleRegular1,
    color: colors.NeutralGrey140,
  },
  valueStyles: {
    ...typography.LinkMedium,
    color: colors.NeutralGrey150,
    fontWeight: FontWeight._600,
    textAlign: 'left',
    height: actuatedNormalizeHeight(16),
    marginLeft: actuatedNormalizeWidth(12),
    marginVertical: actuatedNormalizeHeight(8),
  },
});
