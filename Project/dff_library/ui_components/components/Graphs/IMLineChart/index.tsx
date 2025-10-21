import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { ruleTypes } from 'gifted-charts-core';

import { IMLineChartProps } from './types';
import { colors, typography } from '../../../atoms';
import styles from './styles'
import { actuatedNormalizeWidth, actuatedNormalizeHeight } from '../../../utils/utility';


const IMLineChart: React.FC<IMLineChartProps> = props => {
    const {
        LineMarkData,
        width,
        height,
        chartContainerStyle,
        horizontalValues,
        isLineAreaRequired,
        colorValue,
        selectedValue,
        strokeWidth,
        startOpacity,
        endOpacity,
        label } = props
    const [dataSelected, setdata] = useState(LineMarkData[0])
    const [indexValue, setIndexalue] = useState(0)
    const selectedXValue = (index: number) => {
        setIndexalue(index)
        setdata(LineMarkData[index])
    }
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity
                onPress={() => selectedXValue(item.index)}
                style={[indexValue == item.index ? styles.selectedXValue : styles.xValueViewStyle]}>
                <Text style={[indexValue == item.index ? [typography.BodySemiBold3,{color:colors.NeutralGrey140}] : [typography.BodyRegular3,{color:colors.NeutralGrey120}]]}>{item.item}</Text>
            </TouchableOpacity>

        )
    }
    return (
        <View
            style={[styles.container, chartContainerStyle]}>
            <Text style={[typography.HeadingBold3,{color:colors.NeutralGrey140}]}>${label}</Text>
            <LineChart
                areaChart={isLineAreaRequired}
                data={dataSelected}
                rotateLabel
                width={width}
                hideDataPoints
                spacing={10}
                color={colorValue}
                thickness={strokeWidth}
                startFillColor={colorValue}
                endFillColor={colorValue}
                startOpacity={startOpacity}
                endOpacity={endOpacity}
                initialSpacing={0}
                noOfSections={6}
                stepHeight={actuatedNormalizeHeight(50)}
                height={height}
                yAxisColor={colors.White}
                yAxisThickness={0}
                rulesType={ruleTypes.SOLID}
                rulesColor={colors.White}
                yAxisTextStyle={{ color: colors.CoolGrey100 }}
                yAxisTextNumberOfLines={0}
                hideRules={true}
                hideYAxisText={true}
                xAxisColor={colors.White}
                pointerConfig={{
                    pointerStripHeight: actuatedNormalizeHeight(160),
                    pointerStripColor: colorValue,
                    pointerStripWidth: actuatedNormalizeWidth(2),
                    pointerColor: colorValue,
                    radius: 0,
                    pointerLabelWidth: actuatedNormalizeWidth(100),
                    pointerLabelHeight: actuatedNormalizeHeight(90),
                    autoAdjustPointerLabelPosition: false,
                    pointerLabelComponent: (items: any) => {
                        selectedValue(items)
                        return (
                            <View
                                style={styles.pointerContainer}>
                                <View
                                    style={styles.labelContainer}>
                                    <Text style={[typography.LabelSmallRegular,styles.labelTextStyle]}>
                                        {'$' + items[0].value + '.0'}
                                    </Text>
                                </View>
                            </View>
                        );
                    },
                }}
            />
            <ScrollView style={styles.xDataContainer}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={horizontalValues}
                    renderItem={(item) =>
                        renderItem(item)
                    }
                />
            </ScrollView>
        </View>
    );
}
export default IMLineChart;
