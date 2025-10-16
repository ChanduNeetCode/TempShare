import React from 'react';
import { View, Text } from 'react-native';
import { IMShimmer } from '../../../../dff_library/ui_components/components/Shimmer';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import styles from './styles';

export interface CustomRowProps {
  text: string;
  color: string;
  skeletonEnabled: boolean;
  textColor: string;
}

const renderCharView = (text: string, color: string, textColor: string) => {
  return (
    <>
      <View
        style={[
          styles.charCircleStyle,
          {
            backgroundColor: color,
          },
        ]}></View>
      <Text
        numberOfLines={1}
        style={[
          {
            color: textColor,
          },
          styles.charInsideCircle,
          typography.SubTitleRegular1,
        ]}>
        {text.charAt(0).toUpperCase()}
      </Text>
    </>
  );
};

const textView = (text: string) => {
  return (
    <>
      <Text
        style={[
          {
            textAlign: 'center',
            color: colors.Black,
          },
          typography.BodyRegular3,
        ]}>
        {text}
      </Text>
    </>
  );
};
const CustomRow = (props: CustomRowProps) => {
  const { skeletonEnabled, text, color, textColor } = props;
  return (
    <View style={styles.rowMainView}>
      <IMShimmer style={styles.view} enabled={skeletonEnabled}>
        {renderCharView(text, color, textColor)}
      </IMShimmer>

      <IMShimmer style={styles.textStyle} enabled={skeletonEnabled}>
        {textView(text)}
      </IMShimmer>
    </View>
  );
};

export default CustomRow;
