import React, { useState } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { actuatedNormalizeHeight } from '../../../utils/utility';
import { type IMInfoCardProps } from './types';

const IMInfoCard: React.FC<IMInfoCardProps> = props => {
  const {
    children,
    LeftImage,
    RightImage,

    cardHeight,
    type,

    typeClr,

    infoCardInnerStyleProp,
    infoCardsStyleProp,
    infoCardViewStyleProp,
    LeftImageStyle,
    RightImageStyle,
    TextStyle,
  } = props;
  const styles = useStyles();
  const [type2CardHeight, setType2CardHeight] = useState(0);
  return (
    <View>
      {type === 1 ? (
        <View
          style={[
            styles.type1Style,
            infoCardsStyleProp,
            {
              backgroundColor: typeClr,
              minHeight: cardHeight ? cardHeight : actuatedNormalizeHeight(48),
            },
          ]}>
          {children && children}
        </View>
      ) : type === 2 ? (
        <View style={[styles.type2OuterViewStyle,infoCardViewStyleProp]}>
          <View
            style={[
              styles.type2Style,
              { minHeight: cardHeight ? cardHeight : actuatedNormalizeHeight(60) },
              infoCardsStyleProp,
            ]}>
            <View
              style={[
                styles.type2Highlight,
                { backgroundColor: typeClr },
                infoCardInnerStyleProp,
              ]} />
            <View style={[styles.LeftImageStyle, LeftImageStyle]}>
              {LeftImage}
            </View>

            {children && <View style={[styles.TextStyle, TextStyle]}>
              {children && children}
            </View>}
            <View style={[styles.RightImageStyle, RightImageStyle]}>
              {RightImage}
            </View>
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.type3Style,
            { borderColor: typeClr, minHeight: cardHeight ? cardHeight : actuatedNormalizeHeight(60) },
            infoCardsStyleProp,
          ]}>
          <View
            style={[
              styles.type3Highlight,
              { backgroundColor: typeClr },
              infoCardInnerStyleProp,
            ]}></View>
          <View>{children && children}</View>
        </View>
      )}
    </View>
  );
};
export default IMInfoCard;