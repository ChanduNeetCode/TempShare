import React, { useState, FC } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import DashedLine from 'react-native-dashed-line';

import { actuatedNormalizeWidth, actuatedNormalizeHeight } from '../../../../utils/utility';
import { colors } from '../../../../atoms';

import { TimelineProps } from './types';
import styles from './styles';

const Timeline: FC<TimelineProps> = props => {
  let {
    data,

    columnFormat,

    circleSize,
    lineWidth,

    separator,

    circleColor,
    currentCircleColor,
    lineColor,
    lineStyle,

    containerStyle,
    activeCircleStyle,
    inActiveCircleStyle,
    listViewContainerStyle,
    style,
    dashColor,

    descriptionStyle,
    detailContainerStyle,
    eventDetailStyle,
    titleStyle,
    currentTimeTextStyle,
    timeTextStyle,
    currentItemTitleStyle,
    itemTitleStyle,
    seperatorStyle,
    dashLength,
    dashThickness,
    dashGap,

    onEventPress,

    options,

    isAllowFontScaling = true,
    showTime = true,
  } = props;

  const [x, setX] = useState(0);
  const [width, setWidth] = useState(0);

  const renderCircle = (rowData: any, rowID: number) => {
    let circleStyle = null;

    switch (columnFormat) {
      case 'single-column-left':
        circleStyle =
        {
          width: circleSize ? circleSize : actuatedNormalizeWidth(10),
          height: circleSize ? circleSize : actuatedNormalizeWidth(10),
          borderRadius: width / 2,
          backgroundColor: circleColor ? circleColor : colors.NeutralGrey80,
          left: actuatedNormalizeWidth(0),
        };
        break;
      case 'single-column-right':
        circleStyle = {
          width: circleSize ? circleSize : actuatedNormalizeWidth(10),
          height: circleSize ? circleSize : actuatedNormalizeWidth(10),
          borderRadius: width / 2,
          backgroundColor: circleColor ? circleColor : colors.NeutralGrey80,
          left: actuatedNormalizeWidth(226),
        };
        break;
      case 'two-column':
        circleStyle = {
          width: circleSize ? circleSize : actuatedNormalizeWidth(10),
          height: circleSize ? circleSize : actuatedNormalizeWidth(10),
          borderRadius: width / 2,
          backgroundColor: circleColor ? circleColor : colors.NeutralGrey80,
          left: actuatedNormalizeWidth(103)
        };
        break;
    };
    return (
      <View
        style={
          rowData.isCurrent
            ? [styles.circle, circleStyle, { backgroundColor: currentCircleColor ? currentCircleColor : colors.Black }, activeCircleStyle]
            : [styles.circle, circleStyle, inActiveCircleStyle]
        } />

    );
  };

  const _renderTime = (rowData: any, rowID: number) => {
    if (!showTime) {
      return null;
    }
    let timeWrapper = {};
    let time1 = {}
    let time = {}
    switch (columnFormat) {
      case 'single-column-left':
        timeWrapper = {
          alignItems: 'flex-end',
        };
        time1 = styles.time;
        time = styles.time1;
        break;
      case 'single-column-right':
        timeWrapper = {
          alignItems: 'flex-start'
        };
        time1 = [styles.time,{left:actuatedNormalizeWidth(0)}];
        time = [styles.time1,{left:actuatedNormalizeWidth(0)}];
        break;
      case 'two-column':
        timeWrapper = {
          flex: 1,
          left: rowID % 2 == 0 ? actuatedNormalizeWidth(170) : actuatedNormalizeWidth(90)
        };
        time1 = styles.time;
        time = styles.time1;
        break;
    }

    let timeTextStyle1 = null;
    if (rowData.isCurrent) {
      timeTextStyle1 = [time1, currentTimeTextStyle];
    } else {
      timeTextStyle1 = [time, timeTextStyle];
    }

    return (
      <View style={timeWrapper}>
        <View style={styles.timeContainer}>
          <Text style={[timeTextStyle1]} allowFontScaling={isAllowFontScaling}>
            {rowData.time}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item, index }: any) => {
    let content = null;
    switch (columnFormat) {
      case 'single-column-left':
        content = (
          <View style={[styles.rowContainer]}>
            {_renderTime(item, index)}
            {_renderEvent(item, index)}
            {renderCircle(item, index)}
            <View
              style={[styles.containerStyle, containerStyle,{paddingLeft: actuatedNormalizeWidth(70)}]}>
              {!item.isYear ? (
                <TouchableOpacity
                  disabled={onEventPress == null}
                  style={[styles.detailContainerStyle, detailContainerStyle]}
                  onPress={() => (onEventPress ? onEventPress(item) : null)}>
                  <View style={[styles.detail, eventDetailStyle]}>
                    {_renderDetail(item, index)}
                  </View>
                  {renderSeparator()}
                </TouchableOpacity>
              ) : (
                <><View style={[styles.dotSeparator, seperatorStyle]} />
                  <DashedLine
                    dashLength={dashLength ? dashLength : actuatedNormalizeWidth(8)}
                    dashThickness={dashThickness ? dashThickness : actuatedNormalizeHeight(1)}
                    dashGap={dashGap ? dashGap : actuatedNormalizeWidth(4)}
                    dashColor={dashColor ? dashColor : colors.NeutralGrey100}
                    style={{ left: 24, width: actuatedNormalizeWidth(258) }} /></>
              )}
            </View>
          </View>
        );
        break;
      case 'single-column-right':
        content = (
          <View style={[styles.rowContainer]}>
            {_renderEvent(item, index)}
            {_renderTime(item, index)}
            {renderCircle(item, index)}
            <View
              style={[styles.containerStyle, containerStyle, { right: actuatedNormalizeWidth(80) }]}>
              {!item.isYear ? (
                <TouchableOpacity
                  disabled={onEventPress == null}
                  style={[styles.detailContainerStyle, detailContainerStyle]}
                  onPress={() => (onEventPress ? onEventPress(item) : null)}>
                  <View style={[styles.detail, eventDetailStyle]}>
                    {_renderDetail(item, index)}
                  </View>
                  {renderSeparator()}
                </TouchableOpacity>
              ) : (
                <><View style={[styles.dotSeparator, seperatorStyle]} />
                  <DashedLine
                    dashLength={dashLength ? dashLength : actuatedNormalizeWidth(8)}
                    dashThickness={dashThickness ? dashThickness : actuatedNormalizeHeight(1)}
                    dashGap={dashGap ? dashGap : actuatedNormalizeWidth(4)}
                    dashColor={dashColor ? dashColor : colors.NeutralGrey100}
                    style={{ left: 24, width: actuatedNormalizeWidth(258) }} /></>
              )}
            </View>
          </View>
        );
        break;
      case 'two-column':
        content = (
          <View style={[styles.rowContainer]}>
            {_renderTime(item, index)}
            {_renderEvent(item, index)}
            {renderCircle(item, index)}
            <View
              style={[styles.containerStyle, containerStyle, { left: index % 2 == 0 ? 0 : actuatedNormalizeWidth(180), }]}>
              {!item.isYear ? (
                <TouchableOpacity
                  disabled={onEventPress == null}
                  style={[styles.detailContainerStyle1, detailContainerStyle]}
                  onPress={() => (onEventPress ? onEventPress(item) : null)}>
                  <View style={[styles.detail, eventDetailStyle]}>
                    {_renderDetail(item, index)}
                  </View>
                  {renderSeparator()}
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          </View>
        );

        break;
    }
    return <View key={index}>{content}</View>;
  };

  const _renderDetail = (rowData: any, rowID: number) => {
    let description;
    let titleStyleVar: any = styles.title;
    if (rowData.isCurrent) {
      titleStyleVar = [styles.title1, currentItemTitleStyle];
    } else if (rowData.time == rowData) {
    } else {

      titleStyleVar = [styles.title, itemTitleStyle];
    }

    if (typeof rowData.description === 'string') {
      description = (
        <Text
          style={[
            styles.description,
            rowData.descriptionStyle,
            descriptionStyle,
          ]}
          allowFontScaling={isAllowFontScaling}>
          {rowData.description}
        </Text>
      );
    } else if (typeof rowData.description === 'object') {
      description = rowData.description;
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <View
          style={styles.rowStyle}>
          {rowData.contentIcon}
        </View>
        <View style={styles.titleStyle}>
          <Text
            style={[styles.title, rowData.titleStyle, titleStyleVar, titleStyle]}
            allowFontScaling={isAllowFontScaling}>
            {rowData.title}
          </Text>
          {description}
        </View>
      </View>
    );
  };

  const _renderEvent = (rowData: any, rowID: any) => {
   
    const _lineWidth = lineWidth ? lineWidth : actuatedNormalizeWidth(2);
    const _lineColor = lineColor ? lineColor : colors.NeutralGrey100;
    let opStyle = null;
    switch (columnFormat) {
      case 'single-column-left':
        opStyle = {
          borderColor: _lineColor,
          borderLeftWidth: actuatedNormalizeWidth(_lineWidth),
          borderRightWidth: actuatedNormalizeWidth(0),
          marginLeft: actuatedNormalizeWidth(20),
        };
        rowID==data.length-1&&(opStyle=null);
        break;
      case 'single-column-right':
        opStyle = {
          borderColor: _lineColor,
          borderLeftWidth: 0,
          borderRightWidth: _lineWidth,
          marginLeft: actuatedNormalizeWidth(20),
        };
        break;
      case 'two-column':
        opStyle = {
          borderColor: colors.NeutralGrey100,
          borderLeftWidth: _lineWidth,
          borderRightWidth: 0,
          alignItems: 'flex-start',
        }
        break;
    }

    return (
      <View
        style={[styles.details, opStyle, lineStyle,
        rowData.eventContainersStyle,
        ]}
        onLayout={evt => {
          if (!x && !width) {
            const { x, width } = evt.nativeEvent.layout;
            setX(x);
            setWidth(width);
          }
        }}></View>
    );
  };

  const renderSeparator = () => {
    if (!separator) {
      return null;
    }
    return <View style={[styles.separator]} />;
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        contentContainerStyle={[styles.listViewContainerStyle, listViewContainerStyle]}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + ''}
        extraData={data}
        {...options}
      />
    </View>
  );
};
export default Timeline;
