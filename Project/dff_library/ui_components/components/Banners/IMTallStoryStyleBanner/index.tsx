import React, { FC, useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ProgressBarProps, BannersProps } from './types';
import ProgressBar from './utils/ProgressBar';
import { STRINGS } from '../utils/Constants';
import styles from './styles';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import {
  BannersRectangleOne,
  BannersRectangleThree,
  BannersRectangleTwo,
  OldMan,
} from '../../../atoms/icons';
import colors from '../../../atoms/colors';

const progressBarData = [
  { index: 0 },
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
  { index: 5 },
  { index: 6 },
  { index: 7 },
];

const IMTallStoryStyleBanner: FC<BannersProps> = props => {
  const {
    numberOfProgressBars,
    progressBarHeight,
    progressBarWidth,

    containerStyleProps,
    imagesToDisplay,

    defaultComponentToDisplay,

    start,
    end,

    onPress,
  } = props;

  const [progress, setProgress] = useState(Array(numberOfProgressBars).fill(0));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let valueOfProgress =
      progress[0] < 1
        ? progress[0]
        : progress[1] < 1
        ? progress[1]
        : progress[2] < 1
        ? progress[2]
        : progress[3] < 1
        ? progress[3]
        : progress[4] < 1
        ? progress[4]
        : progress[5] < 1
        ? progress[5]
        : progress[6] < 1
        ? progress[6]
        : progress[7] < 1
        ? progress[7]
        : 1;
    const index =
      progress[0] < 1
        ? 0
        : progress[1] < 1
        ? 1
        : progress[2] < 1
        ? 2
        : progress[3] < 1
        ? 3
        : progress[4] < 1
        ? 4
        : progress[5] < 1
        ? 5
        : progress[6] < 1
        ? 6
        : progress[7] < 1
        ? 7
        : 0;
    if (valueOfProgress < 1 && index < numberOfProgressBars) {
      setTimeout(() => {
        valueOfProgress += 0.1;
        if (valueOfProgress > 1) {
          valueOfProgress = 1;
          const newArr = [...progress];
          newArr[index] = valueOfProgress;
          setProgress(newArr);
          return;
        }
        const newArr = [...progress];
        newArr[index] = valueOfProgress;
        setProgress(newArr);
      }, 500);
    }
    if (valueOfProgress < 1) {
      imagesToDisplay[index]
        ? imagesToDisplay[index]
        : defaultComponentToDisplay,
        setIndex(index);
    }
  });
  const renderTallStoryStyle = () => {
    return (
      <TouchableOpacity
        style={[styles.storyContainerStyle, containerStyleProps]}
        onPress={() => onPress(index + 1)}>
        <LinearGradient
          start={start ? start : { x: 1, y: -1 }}
          end={end ? end : { x: 0, y: 0 }}
          colors={[colors.PrimaryOrange100, colors.DarkShadeRed]}
          style={[styles.storyContainerStyle, containerStyleProps]}>
          <ScrollView
            style={styles.storyBannerProgressContainer}
            horizontal={true}>
            {progressBarData.map(({ index }: ProgressBarProps) => {
              if (index < numberOfProgressBars) {
                return (
                  <ProgressBar
                    key={index}
                    color={colors.White}
                    style={styles.progressBar}
                    progress={
                      index == 0
                        ? progress[0]
                        : index == 1
                        ? progress[1]
                        : index == 2
                        ? progress[2]
                        : index == 3
                        ? progress[3]
                        : 0
                    }
                    width={
                      progressBarWidth
                        ? actuatedNormalizeWidth(progressBarWidth)
                        : actuatedNormalizeWidth(300 / numberOfProgressBars)
                    }
                    height={
                      progressBarHeight
                        ? actuatedNormalizeHeight(progressBarHeight)
                        : actuatedNormalizeHeight(2)
                    }
                  />
                );
              }
            })}
          </ScrollView>
          {defaultComponentToDisplay || (
            <>
              <View style={styles.tallStorySubContainerDirectionStyle}>
                <View style={styles.storyBannerTextContainer}>
                  <Text style={styles.storyBannerText1}>
                    {STRINGS.str_open_account_message}
                  </Text>
                  <Text style={styles.storyBannerText2}>
                    {STRINGS.str_loan_account}
                  </Text>
                </View>
                <TouchableOpacity style={styles.storyButtonContainer}>
                  <Text style={styles.storyButtonTextStyle}>
                    {STRINGS.str_button_title}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rectangleContainer}>
                <BannersRectangleOne />
                <BannersRectangleTwo style={styles.rectangle2} />
                <BannersRectangleThree style={styles.rectangle3} />
              </View>
              <View style={styles.imageDisplay}>{<OldMan />}</View>
            </>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return renderTallStoryStyle();
};
export default IMTallStoryStyleBanner;
