import React from 'react';

import Timeline from './lib/index';
import { TimelineProps } from '../IMCalenderTimeLine/lib/types';

const IMCalenderTimeLine: React.FC<TimelineProps> = props => {
  const {
    activeCircleStyle,
    data,
    columnFormat,
    circleColor,
    circleSize,
    descriptionStyle,
    detailContainerStyle,
    eventContainersStyle,
    eventContainerStyle,
    inActiveCircleStyle,
    isUsingFlatlist,
    lineWidth,
    lineColor,
    lineStyle,
    listViewContainerStyle,
    timeContainerStyle,
    timeTextStyle,
    titleStyle,
    currentItemTitleStyle,
    itemTitleStyle,
    seperatorStyle,
    selectImage,
    currentTimeTextStyle,
    unSelectImage,
  } = props;
  return (
    <Timeline
      lineWidth={lineWidth}
      columnFormat = {columnFormat}
      circleColor={circleColor}
      circleSize={circleSize}
      data={data}
      descriptionStyle={descriptionStyle}
      detailContainerStyle={detailContainerStyle}
      eventContainersStyle={eventContainersStyle}
      eventContainerStyle={eventContainerStyle}
      isUsingFlatlist={isUsingFlatlist}
      lineColor={lineColor}
      listViewContainerStyle={listViewContainerStyle}
      timeContainerStyle={timeContainerStyle}
      timeTextStyle={timeTextStyle}
      selectImage={selectImage}
      unSelectImage={unSelectImage}
      titleStyle={titleStyle}
      currentItemTitleStyle={currentItemTitleStyle}
      itemTitleStyle={itemTitleStyle}
      seperatorStyle={seperatorStyle}
      currentTimeTextStyle={currentTimeTextStyle}
      activeCircleStyle={activeCircleStyle}
      inActiveCircleStyle={inActiveCircleStyle}
      lineStyle={lineStyle}
    />
  );
};

export default IMCalenderTimeLine;
