import React from 'react';
import { FlatList, Text, View } from 'react-native';
import DashedLine from 'react-native-dashed-line';

import IMInfoCard from '../../Cards/IMInfoCard';
import colors from '../../../atoms/colors';
import typography from '../../../atoms/typography';
import { IMBadges } from '../../Badges';
import { badgesInfo } from '../../Badges/IMBadges/types';

import styles from './styles';
import IMDefaultTimeLineProps from './types';

const IMDefaultTimeLine: React.FC<IMDefaultTimeLineProps> = (props) => {
  const {
    badgeContainer,
    data,
    dashThickness,
    dashLength,
    dashGap,

    badgesBackgroundClr,
    badgesTextClr,
    dashColor,
    amountContainerStyle,
    amountViewStyle,
    badgeContainerStyle,
    badgeViewStyle,
    cardChildrenStyle,
    cardsContainerStyle,
    cardStyle,
    iconStyle,
    leftBorderStyle,
    mainCardStyle,
    rightIconStyle,
    titleContainerStyle,

    amountSubtitleStyle,
    amountTextStyle,
    badgesTextStyle,
    subtitleStyle,
    titleStyle,
  } = props;

  const renderItem = ({ item }: any) => {
    return (
      <>
        <IMInfoCard
          type={2}
          infoCardInnerStyleProp={
            leftBorderStyle ? leftBorderStyle : styles.leftBorderStyle
          }
          infoCardsStyleProp={
            mainCardStyle ? mainCardStyle : styles.mainCardStyle
          }
          TextStyle={
            cardChildrenStyle ? cardChildrenStyle : styles.cardChildrenStyle
          }
          typeClr={
            item.status == 'success'
              ? colors.Success100
              : item.status == 'fail'
              ? colors.Error100
              : item.status == 'pending'
              ? colors.NeutralGrey80
              : colors.SecondaryMaroon100
          }
          children={
            <View style={[styles.cardsContainer, cardsContainerStyle]}>
              <View style={[styles.cardStyle, cardStyle]}>
                <View style={[styles.iconStyle, iconStyle]}>{item.icon}</View>
                <View style={[styles.titleContainer, titleContainerStyle]}>
                  <Text style={[styles.titleStyle, titleStyle]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.subtitleStyle, subtitleStyle]}>
                    {item.subtitle}
                  </Text>
                </View>
                <View>
                  <View style={[styles.amountContainer, amountContainerStyle]}>
                    <View style={[styles.amountView, amountViewStyle]}>
                      <Text
                        style={[
                          styles.amountTextStyle,
                          amountTextStyle,
                          {
                            color:
                              item.update == 'Completed'
                                ? colors.NeutralGrey150
                                : colors.NeutralGrey110,
                          },
                        ]}
                      >
                        {item.amount}
                      </Text>
                      <Text
                        style={[
                          styles.amountSubtitleStyle,
                          amountSubtitleStyle,
                          {
                            color:
                              item.update == 'Completed'
                                ? colors.Success100
                                : colors.Error100,
                          },
                        ]}
                      >
                        {item.update}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.rightIconStyle, rightIconStyle]}>
                  {item.rightIcon}
                </View>
              </View>

              {item.status == 'fail' &&
                (badgeContainer ? (
                  badgeContainer
                ) : (
                  <View
                    style={[styles.badgeContainerStyle, badgeContainerStyle]}
                  >
                    <IMBadges
                      type={badgesInfo.CardBasedBadges}
                      badgesTextClr={
                        badgesTextClr ? badgesTextClr : colors.NeutralGrey150
                      }
                      badgesTitle={item.badgeTitle}
                      badgesTextStyle={
                        badgesTextStyle
                          ? badgesTextStyle
                          : typography.BodyRegular3
                      }
                      badgesBackgroundClr={
                        badgesBackgroundClr
                          ? badgesBackgroundClr
                          : colors.FadedBlue
                      }
                      badgesViewStyle={
                        badgeViewStyle ? badgeViewStyle : styles.badgeViewStyle
                      }
                    />
                  </View>
                ))}
            </View>
          }
        />
        {item.id != data.length && (
          <DashedLine
            axis="vertical"
            dashLength={dashLength ? dashLength : 8}
            dashThickness={dashThickness ? dashThickness : 1}
            dashGap={dashGap ? dashGap : 2}
            dashColor={dashColor ? dashColor : colors.NeutralGrey80}
            style={styles.dashStyle}
          />
        )}
      </>
    );
  };
  return <FlatList data={data} renderItem={renderItem} />;
};
export default IMDefaultTimeLine;
