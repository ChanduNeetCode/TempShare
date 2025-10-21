import React, { ReactElement, useEffect, useState } from 'react';

import Calendar from '../utils/calendar';
import { IMDatePickerProps } from './types';

const IMDatePicker: React.FC<IMDatePickerProps> = ({
  datePickerType,

  disableAllTouchEventsForDisabledDays,
  enableSwipeMonths,
  hideArrows,
  isMonthDropDown = true,
  doneText,
  doneStyle,
  isMonthTouchDisable = false,

  intialDate,
  minDate,
  maxDate,

  onDateSelect,

  rightArrowIcon,
  leftArrowIcon,

  theme,
  numberOfYears,
}: IMDatePickerProps): ReactElement => {
  const [selected, setSelected] = useState('');
  const [rangeDates, setRangeDates] = useState<any>([]);
  const listOfDates: string[] = [];
  const [marked, setMarked] = useState({});

  useEffect(() => {
    setMarked(getMarked(rangeDates));
  }, [rangeDates]);

  const formatedDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getMarked = (rangeDates: any) => {
    const marked: any = {};
    if (rangeDates.length == 2) {
      let date: string;
      const firstDate =
        rangeDates[0] < rangeDates[1]
          ? new Date(rangeDates[0])
          : new Date(rangeDates[1]);
      const lastDate =
        rangeDates[1] > rangeDates[0]
          ? new Date(rangeDates[1])
          : new Date(rangeDates[0]);

      const currentDate =
        rangeDates[0] < rangeDates[1]
          ? new Date(rangeDates[0])
          : new Date(rangeDates[1]);
      while (currentDate <= lastDate) {
        date = formatedDate(currentDate);
        listOfDates.push(date);
        marked[date] = {
          startingDay:
            currentDate.getFullYear() == firstDate.getFullYear() &&
            currentDate.getMonth() == firstDate.getMonth() &&
            currentDate.getDate() == firstDate.getDate(),
          endingDay:
            currentDate.getFullYear() == lastDate.getFullYear() &&
            currentDate.getMonth() == lastDate.getMonth() &&
            currentDate.getDate() == lastDate.getDate(),
        };
        currentDate.setDate(currentDate.getDate() + 1);
      }
      onDateSelect(listOfDates);
    }
    return marked;
  };

  return (
    <>
      {datePickerType === 'singlePicker' && (
        <Calendar
          isMonthDropDown={isMonthDropDown}
          doneText={doneText}
          doneStyle={doneStyle}
          isMonthTouchDisable={isMonthTouchDisable}
          initialDate={intialDate}
          minDate={minDate}
          maxDate={maxDate}
          numberOfYears={numberOfYears}
          onDayPress={(day: { dateString: string }) => {
            setSelected(day.dateString);
            onDateSelect(day.dateString);
          }}
          enableSwipeMonths={enableSwipeMonths}
          disableAllTouchEventsForDisabledDays={
            disableAllTouchEventsForDisabledDays
          }
          hideArrows={hideArrows}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true },
          }}
          rightArrowIcon={rightArrowIcon}
          leftArrowIcon={leftArrowIcon}
          theme={theme}
        />
      )}
      {datePickerType === 'rangePicker' && (
        <Calendar
          initialDate={intialDate}
          minDate={minDate}
          isMonthDropDown={isMonthDropDown}
          doneText={doneText}
          doneStyle={doneStyle}
          isMonthTouchDisable={isMonthTouchDisable}
          maxDate={maxDate}
          numberOfYears={numberOfYears}
          onDayPress={(day: { dateString: string }) => {
            if (rangeDates.length == 0) {
              setRangeDates([day.dateString]);
              setSelected(day.dateString);
            } else if (rangeDates.length == 1) {
              setRangeDates([rangeDates[0], day.dateString]);
            } else {
              setRangeDates([day.dateString]);
              setSelected(day.dateString);
            }
          }}
          enableSwipeMonths={enableSwipeMonths}
          hideArrows={hideArrows}
          markingType={rangeDates.length > 1 ? 'period' : undefined}
          markedDates={
            rangeDates.length <= 1
              ? { [selected]: { selected: true, disableTouchEvent: false } }
              : marked
          }
          rightArrowIcon={rightArrowIcon}
          leftArrowIcon={leftArrowIcon}
          theme={theme}
        />
      )}
    </>
  );
};

export default IMDatePicker;
