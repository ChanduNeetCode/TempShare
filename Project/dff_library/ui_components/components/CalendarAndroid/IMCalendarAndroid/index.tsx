import React, { useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';

import { IMCalendarProps } from './types';
import { NativeModules } from 'react-native';

const { CalendarModule } = NativeModules;

const IMCalendarAndroid: React.FC<IMCalendarProps> = props => {
  const {
    data,

    dateChangeFunction,
    monthChangeFunction,
  } = props;

  const openFunc = () => {
    CalendarModule.open(JSON.stringify(data));
  };

  useEffect(() => {
    DeviceEventEmitter.addListener('date change', data => {
      if (dateChangeFunction) {
        dateChangeFunction(data.message);
      }
    });
    DeviceEventEmitter.addListener('month change', data => {
      if (monthChangeFunction) {
        monthChangeFunction(data.message);
      }
    });
  }, []);
  return <>{openFunc()}</>;
};

export default IMCalendarAndroid;
