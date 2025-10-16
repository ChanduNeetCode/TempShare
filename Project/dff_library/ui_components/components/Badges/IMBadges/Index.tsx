import React from 'react';
import { Text, View } from 'react-native';

import { IMBadgesProps, badgesInfo } from './types';
import useStyles from './styles';

const IMBadges: React.FC<IMBadgesProps> = props => {
  const {
    badgesBackgroundClr,
    badgesTextClr,
    badgesTitle,

    badgesLeftIconStyle,
    badgesRightIconStyle,
    badgesViewStyle,

    badgesTextStyle,

    children,
    badgesLeftIcon,
    badgesRightIcon,

    type,
  } = props;
  const styles = useStyles();

  return (
    <>
      {type === badgesInfo.CardBasedBadges ? (
        <View style={styles.parentViewStyle}>
          <View
            style={[
              badgesLeftIcon || badgesRightIcon
                ? [styles.badgesViewStyle1, badgesViewStyle]
                : [styles.topOfCardStyle, badgesViewStyle],
              {
                backgroundColor: badgesBackgroundClr,
                justifyContent: 'center',
              },
            ]}>
            {badgesLeftIcon && (
              <View style={[styles.iconStyle,badgesLeftIconStyle]}>
                {badgesLeftIcon}
              </View>
            )}
            <Text
              style={[
                styles.labelSmallMedium,
                badgesTextStyle,
                {
                  color: badgesTextClr
                },
              ]}>
              {badgesTitle}
            </Text>
            <View style={badgesRightIconStyle}>{badgesRightIcon}</View>
            {children}
          </View>
        </View>
      ) : (
        <View style={styles.parentViewStyle}>
          <View
            style={[
              styles.badgesViewStyle,
              badgesViewStyle,
              { backgroundColor: badgesBackgroundClr },
            ]}>
            <Text
              style={[
                styles.badgesLabelStyle,
                badgesTextStyle,
                { color: badgesTextClr },
              ]}>
              {badgesTitle}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default IMBadges;
