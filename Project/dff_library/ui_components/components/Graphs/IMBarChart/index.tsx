import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Svg, Rect, G } from 'react-native-svg';

import styles from './styles';
import { IMBarChartProps } from './types';
import typography from '../../../atoms/typography';
import { actuatedNormalizeHeight, actuatedNormalizeWidth } from '../../../utils/utility';
import { round } from 'lodash';

const IMBarChart: React.FC<IMBarChartProps> = props => {
    const { data, width, totalValue, height, svgContainer, colorSet, xValueContainerStyle, value } = props
    const renderItem = (item: any) => {
        return (
            <View
                style={styles.xValueViewStyle}>
                <Text style={[typography.BodyRegular3, { transform: [{ rotate: '180deg' }] }]}>{item}</Text>
            </View>
        )
    }

    const colors = colorSet
    const keySet = Object.keys(data[0])
    const values = Object.values(data[0])
    let averageValue = eval(values.join("+"))/values.length
    averageValue = round(averageValue,2)
    const entries = data.map((d: any) => ({
        name: d.name,
        total: keySet.reduce((acc, key) => acc + d[key], 0),
        bars: keySet.map((key, i) => ({
            value: d[key],
            color: colors[i],
        }))
            .filter((bar) => bar.value),
    }));

    const rows = (entry: any) => entry.bars.map((bar: any, index: any) => {
        const heightV = (bar.value / 100) * totalValue;
        return (
            <G key={index}>
                <Rect
                    rx={actuatedNormalizeWidth(6)}
                    width={ actuatedNormalizeWidth(40)}
                    height={`${heightV}%`}
                    fill={bar.color}
                    x={index * 70} // multiply with the width (50) + 10 for space
                />
            </G>
        );
    });

    return (
        <View>
            {entries.map((entry: any) => (
                <View>
                    <Svg viewBox={`-0, -70, ${actuatedNormalizeWidth(width)}, ${actuatedNormalizeHeight(500)}`}
                        height={actuatedNormalizeHeight(height)}
                        width={width}
                        style={[styles.svgContainer, svgContainer]
                        }>
                        {rows(entry)}
                        <Text style={[styles.averageTextStyle,typography.BodyRegular3]}>AVG:$ {averageValue}</Text>
                        <View style={styles.dottedLineContainer}>
                        </View>
                        <View
                            style={[styles.xValueContainerStyle, { width: width }, xValueContainerStyle]}>
                            <FlatList
                                horizontal={true}
                                data={keySet}
                                renderItem={(item) => renderItem(item.item)}
                            />
                        </View>
                    </Svg>
                </View>
            ))}
            <View style={styles.textContainer}>
                <Text style={[typography.BodySemiBold2, styles.subTextStyle]}>Information item:{value}</Text>
            </View>
        </View>

    );
}
export default IMBarChart;