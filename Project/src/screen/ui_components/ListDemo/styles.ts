import { StyleSheet } from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
  actuatedNormalizeModerateScale,
} from '../../../../dff_library/ui_components/utils/utility';

export default StyleSheet.create({
  highlightColor: {
    color: colors.PrimaryOrange100,
  },
  headingStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: actuatedNormalizeWidth(2)
  },
  itemSeparateLineStyle: {
    borderStyle: 'dashed',
    marginVertical: actuatedNormalizeHeight(16),
  },
  leftIconViewStyle: {
    marginRight: actuatedNormalizeWidth(20),
  },
  listHeaderViewStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: actuatedNormalizeHeight(24),
  },
  listEndHeaderTextStyle: {
    justifyContent: 'flex-end',
    marginRight: actuatedNormalizeWidth(6)
  },
  mainContainer: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(10),
    marginHorizontal: actuatedNormalizeWidth(10),
  },
  mainContainerStyle: {
    margin: actuatedNormalizeModerateScale(16),
  },
  modalChildContainer: {
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(10),
    padding: actuatedNormalizeModerateScale(20),
  },
  modalContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  parentContainer: {
    alignItems: 'center',
    marginVertical: actuatedNormalizeHeight(20),
  },
  parentViewStyle: {
    flex: 1,
  },
  sectionHeaderContainer: {
    justifyContent: 'center',
    marginHorizontal: actuatedNormalizeWidth(16),
    marginTop: actuatedNormalizeHeight(16),
    marginBottom: actuatedNormalizeHeight(8),
  },
  sectionHeaderLabel: {
    color: colors.NeutralGrey110,
    marginLeft: actuatedNormalizeWidth(2)
  },
});
