import { StyleSheet } from 'react-native';

import {colors,typography} from '../../../../dff_library/ui_components/atoms';
import { FontWeight } from '../../../../dff_library/ui_components/utils/enums';
import { actuatedNormalizeHeight, actuatedNormalizeWidth, actuatedNormalizeModerateScale } from '../../../../src/utils/utility';

export default StyleSheet.create({
  parentViewStyle: {
    marginTop: actuatedNormalizeHeight(-10),
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  parentCarouselViewStyle: {
    marginTop: 20,
    paddingLeft: 20,
    height: '30%',
    bottom: 20,
  },
  titleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: colors.Black,
    fontWeight: FontWeight._600,
    letterSpacing: 0.18,
    marginTop: actuatedNormalizeHeight(20),
    marginBottom: actuatedNormalizeHeight(10),
    lineHeight: 40.16,
    fontFamily: 'Mulish-Regular',
  },
  secondryTextStyle: {
    color: colors.NeutralGrey140,
  },
  firstTextStyle: {
    color: colors.White,
    textAlign: 'center',
    top: actuatedNormalizeHeight(15),
  },
  backIconStyle: {
    margin: 15,
  },
  secondryViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightSideIcon: {
    alignItems: 'center',
    backgroundColor: colors.White,
    borderRadius: actuatedNormalizeModerateScale(7),
    borderColor: colors.GradientOrangeStart,
    borderWidth: 1,
    height: actuatedNormalizeHeight(24),
    justifyContent: 'center',
    width: actuatedNormalizeWidth(73),
  },
  timeStyle:{
    ...typography.BodySemiBold3,
              color:colors.Black
  }
});
