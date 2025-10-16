/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

import { DataTableProps, IList } from './types';
import styles from './styles';
import { typography, colors } from '../../../atoms';
import { DataTableTypes } from '../utility/enum';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

const IMDataTables: React.FC<DataTableProps> = props => {
  const {
    isShowHorizontalScrollIndicator,

    data,
    dataTableType,

    height = 40,
    numberOfColumns,
    width = 120,
    widthForData = 120,

    cellContainerStyleProps,
    containerStyleProps,
    dataContainerStyleProps,
    titleContainerStyleProps,
    titleContainerStylePropsFirstIndex,
    titleContainerStylePropsVertical,

    bodyTextStyleProps,
    titleTextStyleProps,
  } = props;

  const lengthOfData = numberOfColumns;
  const scrollEnable =
    dataTableType == DataTableTypes.TitleOnLeft ? false : true;
  const horizontalScrollValue =
    dataTableType == DataTableTypes.TitleOnLeft ? false : true;
  const direction =
    dataTableType == DataTableTypes.TitleOnLeft ? 'column' : 'row';

  return dataTableType == DataTableTypes.TitleOnLeft ||
    dataTableType == DataTableTypes.DataTableWithMoreRows ||
    dataTableType == DataTableTypes.DataTableFullScreen ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={scrollEnable}
      horizontal={horizontalScrollValue}
      style={[
        lengthOfData == 3 && dataTableType == DataTableTypes.DataTableFullScreen
          ? styles.container
          : dataTableType == DataTableTypes.DataTableWithMoreRows
            ? styles.containerForMoreItems
            : styles.containerTitleOnLeft,
        { flexDirection: direction },
        containerStyleProps,
      ]}>
      {data.map(({ header, values }) => {
        return (
          <View style={styles.flexColumnDirectionValue}>
            <View
              style={[
                titleContainerStyleProps,
                styles.titleContainerStyleMoreRows,
                {
                  borderWidth:
                    dataTableType === DataTableTypes.TitleOnLeft ? 0 : 1,
                  width: actuatedNormalizeWidth(width),
                  height: actuatedNormalizeHeight(height),
                },
              ]}>
              <Text
                style={[
                  titleTextStyleProps,
                  typography.SubTitleBold1,
                  styles.titleStyle,
                ]}>
                {header}
              </Text>
            </View>
            <View
              style={[
                dataContainerStyleProps,
                dataTableType == DataTableTypes.TitleOnLeft
                  ? styles.bodyContainer
                  : null,
              ]}>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={
                  lengthOfData > 3 &&
                    dataTableType === DataTableTypes.TitleOnLeft
                    ? true
                    : false
                }
                data={values}
                renderItem={({
                  item,
                  index,
                }: {
                  item: string;
                  index: number;
                }) => (
                  <View style={styles.flexColumnDirectionValue}>
                    <View
                      style={[
                        cellContainerStyleProps,
                        lengthOfData == 3
                          ? styles.bodyContainerStyle
                          : styles.bodyContainerStyleMoreRows,
                        {
                          backgroundColor:
                            index % 2 == 0 &&
                              dataTableType != DataTableTypes.TitleOnLeft
                              ? colors.White
                              : 'rgba(231,232,233,0.7)',
                          width: actuatedNormalizeWidth(width),
                          height: actuatedNormalizeHeight(height),
                        },
                      ]}>
                      <Text
                        style={[
                          bodyTextStyleProps,
                          typography.LabelLargeRegular,
                          styles.bodyTextStyle,
                        ]}>
                        {item}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  ) : dataTableType === DataTableTypes.TitleOnBothSidesHorizontalScroll ? (
    <View style={styles.flexDirectionRow}>
      <View style={styles.flexColumnDirectionValue}>
        {data.map(({ header, index }: IList) => (
          <View
            style={[
              {
                height: actuatedNormalizeHeight(height),
                width: actuatedNormalizeWidth(width),
              },
              index == 0
                ? [styles.titleContainerStyleFirstIndexforBothSides,titleContainerStylePropsFirstIndex]
                : [styles.titleContainerTitleLeft,titleContainerStyleProps],
              
              
            ]}>
            <Text style={[styles.titleStyleforBothSides, titleTextStyleProps]}>
              {header}
            </Text>
          </View>

        ))}
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={isShowHorizontalScrollIndicator}
          >
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View style={styles.flexDirectionRow}>
                {item.values.map((bodyText: any) => {
                  return (
                    <View
                      style={[
                        {
                          height: actuatedNormalizeHeight(height),
                          width: actuatedNormalizeWidth(widthForData),
                        },
                        index == 0
                        ? [styles.bodyContainerFirstIndexTitleBothSides, titleContainerStylePropsVertical]
                        : [styles.bodyContainerTitleLeft, dataContainerStyleProps],

                      ]}>
                      <Text
                        style={[
                          index === 0
                            ? [styles.titleStyleforBothSides, titleTextStyleProps]
                            : [styles.bodyTextStyle, bodyTextStyleProps]
                        ]}>
                        {bodyText}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}
          />
        </ScrollView>
      </View>
    </View>

  ) : dataTableType === DataTableTypes.TitleOnBothSidesVerticalScroll ? (
    <>
      <View style={[styles.flexRowDirection]}>
        {data.map(({ header, index }: IList) => {
          return (
            <View
              style={[
                titleContainerStyleProps,
                styles.bodyContainerFirstIndex,
                {
                  height: actuatedNormalizeHeight(height),
                  width: actuatedNormalizeWidth(100),
                },
              ]}>
              <Text
                style={[
                  bodyTextStyleProps,
                  styles.bodyTextStyle,
                  typography.BodySemiBold3,
                ]}>
                {header}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.containerForScroll}>
        <ScrollView
          scrollEnabled={scrollEnable}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={styles.containerForScrollItems}>
          {data.map(({ values }: IList) => {
            return (
              <View>
                <FlatList
                  data={values}
                  scrollEnabled={!scrollEnable}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  renderItem={({ item, index }) => (
                    <>
                      <View
                        style={[
                          titleContainerStyleProps,
                          index == 0
                            ? styles.titleContainerTitleLeft
                            : styles.bodyContainerTitleLeft,
                          {
                            height: actuatedNormalizeHeight(height),
                            width: actuatedNormalizeWidth(100),
                          },
                        ]}>
                        <Text
                          style={[
                            styles.bodyTextStyle,
                            bodyTextStyleProps,
                            index === 0
                              ? typography.BodySemiBold3
                              : typography.LabelLargeRegular,
                          ]}>
                          {item}
                        </Text>
                      </View>
                    </>
                  )}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  ) : null;
};

export default IMDataTables;