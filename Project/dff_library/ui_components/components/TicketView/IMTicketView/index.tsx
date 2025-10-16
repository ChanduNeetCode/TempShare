import React, { FC } from 'react';
import { View } from 'react-native';
import * as Svg from 'react-native-svg';

import { IMTicketViewProps } from './types';
import useStyles from './styles';
import colors from '../../../atoms/colors';
import { actuatedNormalizeHeight } from '../../../utils/utility';

const IMTicketview: FC<IMTicketViewProps> = props => {
  const {
    strokeDasharray,

    strokeColor=colors.NeutralGrey60,

    containerStyle,
    dottedBottomLinesContainerStyle,
    dottedLeftCircleStyle,
    dottedLinesContainerStyle,
    dottedRightCircleStyle,

    bottomContainer,
    dottedBottomLinesContainer,
    dottedLinesContainer,
    middleContainer,
    topContainer,
  } = props;
  const styles = useStyles();

  return (
    <>
      <View style={[styles.containerStyle, containerStyle]}>
        {topContainer ? topContainer() : <></>}
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.leftCircleStyle, dottedLeftCircleStyle]} />
          <View style={{ flex: 1 }}>
            {dottedLinesContainer ? (
              dottedLinesContainer()
            ) : (
              <Svg.Svg
                height={1}
                width={'100%'}
                style={[
                  { marginTop: actuatedNormalizeHeight(16) },
                  dottedLinesContainerStyle,
                ]}>
                <Svg.Line
                  stroke={strokeColor}
                  strokeWidth={2}
                  strokeDasharray={strokeDasharray || '10,2'}
                  x1="0"
                  y1="0"
                  x2={'100%'}
                  y2={1}
                />
              </Svg.Svg>
            )}
          </View>
          <View style={[styles.rightCircleStyle, dottedRightCircleStyle]} />
        </View>
        {middleContainer ? middleContainer() : <></>}
        {bottomContainer ? (
          <>
            {dottedBottomLinesContainer ? (
              dottedBottomLinesContainer()
            ) : (
              <Svg.Svg
                height={1}
                width={'100%'}
                style={[
                  { marginTop: actuatedNormalizeHeight(16) },
                  dottedBottomLinesContainerStyle,
                ]}>
                <Svg.Line
                  stroke={colors.NeutralGrey60}
                  strokeWidth={2}
                  strokeDasharray="10,2"
                  x1="0"
                  y1="0"
                  x2={'100%'}
                  y2={1}
                />
              </Svg.Svg>
            )}
            {bottomContainer()}
          </>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};
export default IMTicketview;
