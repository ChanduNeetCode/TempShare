import { StyleSheet } from 'react-native';

import { typography,colors } from '../../../atoms';
import { FontWeight } from '../../../utils/enums';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../utils/utility';

export const styles = StyleSheet.create({
  alphaheadStyles: {
    ...typography.ButtonSmall,
    color: colors.NeutralGrey140,
    marginHorizontal: actuatedNormalizeWidth(16),
    marginTop: actuatedNormalizeHeight(24),
  },
  container: {
    paddingBottom: actuatedNormalizeHeight(20),
  },
  defaultIconStyle: {
    height: actuatedNormalizeHeight(20),
    width: actuatedNormalizeWidth(20),
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
    marginRight: actuatedNormalizeWidth(16),
  },
  listItemContainer: {
    borderTopColor: colors.CoolGrey110,
    borderTopWidth: actuatedNormalizeModerateScale(1),
    flex: 1,
    height: actuatedNormalizeHeight(30),
    justifyContent: 'center',
    paddingHorizontal: actuatedNormalizeHeight(20),
  },
  mainView: {
    backgroundColor: colors.White,
    flex: 1,
  },
  radioButtonOffStyles: {
    borderRadius: actuatedNormalizeModerateScale(16),
    marginBottom: actuatedNormalizeHeight(16),
  },
  radioButtonOnStyles: {
    borderColor: colors.PrimaryOrange100,
    borderRadius: actuatedNormalizeModerateScale(16),
    borderWidth: actuatedNormalizeModerateScale(1),
    marginBottom: actuatedNormalizeHeight(16),
  },
  searchContainerStyle: {
    backgroundColor: colors.CoolGrey100,
    flex: 1,
  },
  searchInputViewContainer: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(16),
    elevation: 2,
    flexDirection: 'row',
    margin: actuatedNormalizeModerateScale(16),
    maxHeight: actuatedNormalizeHeight(60),
    minHeight: actuatedNormalizeHeight(40),
    overflow: 'hidden',
    padding: actuatedNormalizeModerateScale(0),
    paddingLeft: actuatedNormalizeWidth(16),
    shadowColor: colors.Black,
    shadowOffset: {
      height: actuatedNormalizeHeight(1),
      width: actuatedNormalizeWidth(1),
    },
    shadowOpacity: 0.8,
    shadowRadius: actuatedNormalizeModerateScale(2),
  },
  searchRenderTouchableContainer: {
    backgroundColor: colors.White,
    borderBottomWidth: actuatedNormalizeModerateScale(1),
    borderColor: colors.CoolGrey100,
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
  searchTouchableActiveStyle: {
    backgroundColor: colors.CoolGrey100,
    height: actuatedNormalizeHeight(57),
    marginHorizontal: actuatedNormalizeWidth(16),
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
  textStyle1: {
    ...typography.SubTitleRegular1,
    flex:1,
    color: colors.NeutralGrey110,
    textAlignVertical: 'center',
  },
  textstyle2: {
    ...typography.SubTitleRegular1,
    flex:1,

    color: colors.NeutralGrey140,
  },
  valueStyles: {
    ...typography.LinkMedium,
    color: colors.NeutralGrey150,
    fontWeight: FontWeight._600,
    height: actuatedNormalizeHeight(16),
    marginLeft: actuatedNormalizeWidth(16),
    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
