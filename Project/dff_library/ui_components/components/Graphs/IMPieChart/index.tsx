import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

import { PieChartData, IMPieChartProps } from './types';
import usePieChartStyles from './styles';
import { colors } from '../../../atoms';
import { actuatedNormalizeWidth,actuatedNormalizeHeight} from '../../../../../dff_library/ui_components/utils/utility';
const IMPieChart: FC<IMPieChartProps> = props => {
  const {
    data,

    colorBoxStyle,
    containerStyle,
    dataContainerStyle,
    legendItemStyle,
    legendLabelStyle,
    legendRowStyle,
    legendValueStyle,
    selectedItemStyle,

    isTouchable,

    onPress,

    numberOfLines,
    blurOpacity=1
  } = props;

  const styles = usePieChartStyles();

  const total = data.reduce(
    (sum: any, item: { value: any }) => sum + item.value,
    0,
  );
  const angles = data.map(
    (item: { value: number }) => (item.value / total) * Math.PI * 2,
  );

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>();

  const handleItemPress = (index: number) => {
    isTouchable ? setSelectedItemIndex(index) : null;
    if (onPress) {
      onPress(total, angles, index);
    }
  };

  let cummulativeAngle = 0;

  const renderSlices = data.map((item: any, index: number) => {
    const angle = angles[index];
    const startAngle = cummulativeAngle;
    const endAngle = cummulativeAngle + angle;

    cummulativeAngle += angle;
    const outerRadius = 0.5;
    const innerRadius = 0.3;

    const startXouter = Math.cos(startAngle) * outerRadius;
    const startYouter = Math.sin(startAngle) * outerRadius;
    const endXouter = Math.cos(endAngle) * outerRadius;
    const endYouter = Math.sin(endAngle) * outerRadius;
    const startXinner = Math.cos(startAngle) * innerRadius;
    const startYinner = Math.sin(startAngle) * innerRadius;
    const endXinner = Math.cos(endAngle) * innerRadius;
    const endYinner = Math.sin(endAngle) * innerRadius;

    const isItemSelected = selectedItemIndex === index;
    return (
      <Path
        key={index}
        d={`
        M ${startXouter},${startYouter} 
        A ${outerRadius},${outerRadius} 0 ${
          angle > Math.PI ? 1 : 0
        }1 ${endXouter},${endYouter} 
        L ${endXinner},${endYinner} A ${innerRadius},${innerRadius} 0 ${
          angle > Math.PI ? 1 : 0
        },0 ${startXinner},${startYinner} Z `}
        opacity={isTouchable?((selectedItemIndex!=null)? (isItemSelected?1:blurOpacity) : 1 ): 1}
        fill={isItemSelected ? item.colors : item.colors}
        stroke={isItemSelected && isTouchable ? item.colors : ''}
        strokeWidth={isItemSelected && isTouchable ? 0.03 : 0}
        onPress={() => handleItemPress(index)}
      />
    );
  });

  const renderLegend = () => {
    const legendItem: React.JSX.Element[] = [];
    for (let i = 0; i < data.length; i += 2) {
      const item1 = data[i];
      let item2: PieChartData | null = null;
      if (i + 1 < data.length) {
        item2 = data[i + 1];
      }
      legendItem.push(
        <View key={i} style={[styles.legendRow, legendRowStyle]}>
          {isTouchable ? (
            <TouchableOpacity
              style={[
                styles.legendItem,
                {opacity: (selectedItemIndex!=null)? blurOpacity : 1},
                legendItemStyle,
                item1 &&
                  selectedItemIndex === i && [
                    styles.selectedItem,
                    selectedItemStyle, 
                  ],
              ]}
              onPress={() => handleItemPress(i)}>
              <View>
                <View style={styles.itemStyle}>
                  <View
                    style={[
                      styles.colorBox,
                      colorBoxStyle,
                      { backgroundColor: item1.colors },
                    ]}
                  />
                  <Text style={[styles.legendValue, legendValueStyle]}>
                    {item1.value} %{' '}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.legendLabel, legendLabelStyle]}>
                    {item1.label}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.legendItem,
                legendItemStyle,
                item1 &&
                  selectedItemIndex === i && [
                    styles.selectedItem,
                    selectedItemStyle,
                  ],
              ]}>
              <View>
                <View style={styles.itemStyle}>
                  <View>
                    <View
                      style={[
                        styles.colorBox,
                        { backgroundColor: item1.colors },
                      ]}
                    />
                  </View>
                  <Text style={[styles.legendValue, legendValueStyle]}>
                    {item1.value} %{' '}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.legendLabel, legendLabelStyle]}>
                    {item1.label}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {item2 && (
            <>
              {isTouchable ? (
                <TouchableOpacity
                  style={[
                    styles.legendItem,
                    {opacity: (selectedItemIndex!=null)? blurOpacity : 1},
                    legendItemStyle,
                    item2 &&
                      selectedItemIndex === i + 1 && [
                        styles.selectedItem,
                        selectedItemStyle,
                      ],
                  ]}
                  onPress={() => handleItemPress(i + 1)}>
                  <View>
                    <View style={styles.itemStyle}>
                      <View>
                        <View
                          style={[
                            styles.colorBox,
                            colorBoxStyle,
                            { backgroundColor: item2.colors },
                          ]}
                        />
                      </View>
                      <Text style={[styles.legendValue, legendValueStyle]}>
                        {item2.value} %{' '}
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.legendLabel, legendLabelStyle]}>
                        {item2.label}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  style={[
                    styles.legendItem,
                    legendItemStyle,
                    item2 &&
                      selectedItemIndex === i + 1 && [
                        styles.selectedItem,
                        selectedItemStyle,
                      ],
                  ]}>
                  <View>
                    <View style={styles.itemStyle}>
                      <View>
                        <View
                          style={[
                            styles.colorBox,
                            colorBoxStyle,
                            { backgroundColor: item2.colors },
                          ]}
                        />
                      </View>
                      <Text style={[styles.legendValue, legendValueStyle]}>
                        {item2.value} %{' '}
                      </Text>
                    </View>
                    <View>
                      <Text
                        numberOfLines={numberOfLines}
                        ellipsizeMode="tail"
                        style={[styles.legendLabel, legendLabelStyle]}>
                        {item2.label}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </>
          )}
        </View>,
      );
    }
    return legendItem;
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{flex:0.5}}>
        <Svg width={actuatedNormalizeWidth(200)} height={actuatedNormalizeHeight(280)}  viewBox="-0.01 -0.55 0.5 2">
          <Circle cx={0} cy={0} r={0.3} fill={colors.White}/>
          {renderSlices}
        </Svg>
      </View>
      <View style={[styles.dataContainer, dataContainerStyle]}>
        {renderLegend()}
      </View>
    </View>
  );
};

export default IMPieChart;
