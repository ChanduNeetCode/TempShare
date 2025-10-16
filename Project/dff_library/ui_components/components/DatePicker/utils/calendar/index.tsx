import PropTypes from 'prop-types';
import XDate from 'xdate';
import isEmpty from 'lodash/isEmpty';
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { View, Text, FlatList } from 'react-native';

import GestureRecognizer from 'react-native-swipe-gestures';

import constants from '../commons/constants';
import { page, isGTE, isLTE, sameMonth } from '../dateutils';
import { xdateToData, parseDate, toMarkingFormat } from '../interface';
import { getState } from '../day-state-manager';
import { extractHeaderProps, extractDayProps } from '../componentUpdater';
import { useDidUpdate } from '../hooks';
import styleConstructor from './style';
import CalendarHeader from './header';
import Day from './day/index';
import BasicDay from './day/basic';

export const swipeDirections = {
  SWIPE_UP: 'SWIPE_UP',
  SWIPE_DOWN: 'SWIPE_DOWN',
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT',
};
const Calendar = (props: any) => {
  const {
    initialDate,
    current,
    theme,
    markedDates,
    minDate,
    maxDate,
    allowSelectionOutOfRange,
    onDayPress,
    onDayLongPress,
    onMonthChange,
    onVisibleMonthsChange,
    disableMonthChange,
    enableSwipeMonths,
    HideExtraDays,
    firstDay,
    showSixWeeks,
    displayLoadingIndicator,
    customHeader,
    headerStyle,
    accessibilityElementsHidden,
    importantForAccessibility,
    testID,
    numberOfYears = 6,
    isMonthDropDown,
    doneText,
    doneStyle,
    isMonthTouchDisable,
    style: propsStyle,
  } = props;

  var date = new Date();
  date.setDate(date.getDate() + 1);
  const [currentMonth, setCurrentMonth] =
    current || initialDate
      ? useState<XDate | undefined>(parseDate(current ? current : initialDate))
      : useState<XDate | undefined>(new XDate());
  const hideExtraDays = HideExtraDays ? HideExtraDays : true;
  //****************************************** ADDED ******************************************
  const months = [
    '',
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    '',
    '',
  ];
  //add years
  const minYear = minDate
    ? new Date(minDate).getFullYear()
    : date.getFullYear() - numberOfYears;
  const maxYear = maxDate
    ? new Date(maxDate).getFullYear()
    : date.getFullYear() + numberOfYears;
  let years: any = ['', ''];
  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }
  years.push('', '');

  const currentYear = currentMonth?.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(
    months[currentMonth ? currentMonth.getMonth() + 2 : -1],
  );
  const [selectedYear, setSelectedYear] = useState(currentYear?.toString());
  const [monthUnderSelect, setMonthUnderSelect] = useState('');
  const [yearUnderSelect, setYearUnderSelect] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const monthFlatListRef = React.createRef<FlatList<string>>();
  const yearFlatListRef = React.createRef<FlatList<string>>();

  useEffect(() => {
    setSelectedMonth(months[currentMonth ? currentMonth?.getMonth() + 2 : -1]);
    setSelectedYear(currentMonth?.getFullYear().toString());
  }, [currentMonth]);

  useEffect(() => {
    const monthIndex = months.indexOf(selectedMonth);
    const yearIndex = years.indexOf(selectedYear ? selectedYear : '');

    monthFlatListRef.current?.scrollToOffset({
      offset: (monthIndex - 2) * 44,
      animated: false,
    });

    yearFlatListRef.current?.scrollToOffset({
      offset: (yearIndex - 2) * 44,
      animated: false,
    });
  }, [isModalVisible]);

  const onViewableItemsChangedMonth = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const centerIndex = Math.floor(viewableItems.length / 2);
      setMonthUnderSelect(viewableItems[centerIndex].item);
    }
  }, []);

  const onViewableItemsChangedYear = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const centerIndex = Math.floor(viewableItems.length / 2);
      setYearUnderSelect(viewableItems[centerIndex].item);
    }
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const pickerVisible = useCallback(
    (visible: boolean) => {
      setIsModalVisible(visible);
    },
    [isModalVisible],
  );

  const monthYearPickHandle = useCallback(
    (isMonthYearPick: boolean) => {
      if (isMonthYearPick) {
        setSelectedMonth(monthUnderSelect);
        setSelectedYear(yearUnderSelect);
      }
    },
    [monthUnderSelect, yearUnderSelect],
  );

  const getDifferenceInMonths = (
    currentM: number,
    currentY: number,
    selectedM: number,
    selectedY: number,
  ) => {
    const differnce = (currentY - selectedY) * 12 + (currentM - selectedM);
    return differnce;
  };

  useEffect(() => {
    addMonth(
      getDifferenceInMonths(
        months.indexOf(selectedMonth) - 2,
        parseInt(selectedYear ? selectedYear : ''),
        currentMonth ? currentMonth?.getMonth() : -1,
        currentMonth ? currentMonth?.getFullYear() : -1,
      ),
    );
  }, [selectedMonth, selectedYear]);

  const renderMonthYearPicker = () => {
    return (
      <View style={style.current.monthYearPickerContainer}>
        <View style={style.current.pickerCenter} />
        <FlatList
          ref={monthFlatListRef}
          data={months}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={[
                style.current.monthItem,
                {
                  borderBottomWidth:
                    index === 0 || index > months.length - 3 ? 0 : 1,
                },
              ]}>
              <Text
                style={[
                  style.current.monthText,
                  item === monthUnderSelect
                    ? style.current.selectedMonthText
                    : null,
                ]}>
                {item}
              </Text>
            </View>
          )}
          onViewableItemsChanged={onViewableItemsChangedMonth}
          viewabilityConfig={viewabilityConfig}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={44}
          getItemLayout={(data, index) => ({
            length: 44,
            offset: 44 * index,
            index,
          })}
          showsVerticalScrollIndicator={false}
          style={style.current.monthYearPickerFlatList}
        />
        <FlatList
          ref={yearFlatListRef}
          data={years}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={[
                style.current.monthItem,
                {
                  borderBottomWidth:
                    index === 0 || index > years.length - 3 ? 0 : 1,
                },
              ]}>
              <Text
                style={[
                  style.current.monthText,
                  item === yearUnderSelect
                    ? style.current.selectedMonthText
                    : null,
                ]}>
                {item}
              </Text>
            </View>
          )}
          onViewableItemsChanged={onViewableItemsChangedYear}
          viewabilityConfig={viewabilityConfig}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={44} // Snap to each item height
          getItemLayout={(data, index) => ({
            length: 44,
            offset: 44 * index,
            index,
          })}
          showsVerticalScrollIndicator={false}
          style={style.current.monthYearPickerFlatList}
        />
      </View>
    );
  };
  //******************************************  ENDING ******************************************

  const style = useRef(styleConstructor(theme));
  const header = useRef();
  const weekNumberMarking = useRef({ disabled: true, disableTouchEvent: true });
  useEffect(() => {
    if (initialDate) {
      setCurrentMonth(parseDate(initialDate));
    }
  }, [initialDate]);

  useDidUpdate(() => {
    const _currentMonth = currentMonth?.clone();
    onMonthChange?.(xdateToData(_currentMonth));
    onVisibleMonthsChange?.([xdateToData(_currentMonth)]);
  }, [currentMonth]);

  const updateMonth = useCallback(
    (newMonth: any) => {
      if (sameMonth(newMonth, currentMonth)) {
        return;
      }
      setCurrentMonth(newMonth);
    },
    [currentMonth],
  );

  const addMonth = useCallback(
    (count: any) => {
      const newMonth = currentMonth?.clone().addMonths(count, true);
      updateMonth(newMonth);
    },
    [currentMonth, updateMonth],
  );

  const handleDayInteraction = useCallback(
    (date: any, interaction: any) => {
      const day = new XDate(date.dateString);
      if (
        allowSelectionOutOfRange ||
        (!(minDate && !isGTE(day, new XDate(minDate))) &&
          !(maxDate && !isLTE(day, new XDate(maxDate))))
      ) {
        if (!disableMonthChange) {
          updateMonth(day);
        }
        if (interaction) {
          interaction(date);
        }
      }
    },
    [
      minDate,
      maxDate,
      allowSelectionOutOfRange,
      disableMonthChange,
      updateMonth,
    ],
  );

  const _onDayPress = useCallback(
    (date: any) => {
      if (date) handleDayInteraction(date, onDayPress);
    },
    [handleDayInteraction, onDayPress],
  );

  const onLongPressDay = useCallback(
    (date: any) => {
      if (date) handleDayInteraction(date, onDayLongPress);
    },
    [handleDayInteraction, onDayLongPress],
  );

  const onSwipeLeft = useCallback(() => {
    // @ts-expect-error
    header.current?.onPressRight();
  }, [header]);

  const onSwipeRight = useCallback(() => {
    // @ts-expect-error
    header.current?.onPressLeft();
  }, [header]);

  const onSwipe = useCallback(
    (gestureName: any) => {
      const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
      switch (gestureName) {
        case SWIPE_UP:
        case SWIPE_DOWN:
          break;
        case SWIPE_LEFT:
          constants.isRTL ? onSwipeRight() : onSwipeLeft();
          break;
        case SWIPE_RIGHT:
          constants.isRTL ? onSwipeLeft() : onSwipeRight();
          break;
      }
    },
    [onSwipeLeft, onSwipeRight],
  );

  const renderWeekNumber = (weekNumber: any) => {
    return (
      <View
        style={style.current.dayContainer}
        key={`week-container-${weekNumber}`}>
        <BasicDay
          key={`week-${weekNumber}`}
          marking={weekNumberMarking.current}
          // state='disabled'
          theme={theme}
          testID={`${testID}.weekNumber_${weekNumber}`}>
          {weekNumber}
        </BasicDay>
      </View>
    );
  };

  const renderDay = (day: any, id: any) => {
    const dayProps = extractDayProps(props);
    if (!sameMonth(day, currentMonth) && hideExtraDays) {
      return <View key={id} style={style.current.emptyDayContainer} />;
    }
    const dateString = toMarkingFormat(day);
    const isControlled = isEmpty(props.context);
    return (
      <View style={style.current.dayContainer} key={id}>
        <Day
          {...dayProps}
          testID={`${testID}.day_${dateString}`}
          date={dateString}
          state={getState(day, currentMonth, props, isControlled)}
          marking={markedDates?.[dateString]}
          onPress={_onDayPress}
          onLongPress={onLongPressDay}
        />
      </View>
    );
  };

  const renderWeek = (days: any, id: any) => {
    const week = [];
    days.forEach((day: any, id2: any) => {
      week.push(renderDay(day, id2));
    }, this);
    if (props.showWeekNumbers) {
      week.unshift(renderWeekNumber(days[days.length - 1].getWeek()));
    }
    return isModalVisible ? (
      <></>
    ) : (
      <View style={style.current.week} key={id}>
        {week}
      </View>
    );
  };

  const shouldDisplayIndicator = useMemo(() => {
    if (currentMonth) {
      const lastMonthOfDay = toMarkingFormat(
        currentMonth.clone().addMonths(1, true).setDate(1).addDays(-1),
      );
      if (displayLoadingIndicator && !markedDates?.[lastMonthOfDay]) {
        return true;
      }
    }
    return false;
  }, [currentMonth, displayLoadingIndicator, markedDates]);

  const renderHeader = () => {
    const headerProps = extractHeaderProps(props);
    const ref = customHeader ? undefined : header;
    const CustomHeader = customHeader;
    const HeaderComponent = customHeader ? CustomHeader : CalendarHeader;
    return (
      <HeaderComponent
        {...headerProps}
        testID={`${testID}.header`}
        modelVisible={isModalVisible}
        style={headerStyle}
        ref={ref}
        month={currentMonth}
        addMonth={addMonth}
        pickerVisible={pickerVisible}
        isMonthDropDown={isMonthDropDown}
        doneText={doneText}
        doneStyle={doneStyle}
        isMonthTouchDisable={isMonthTouchDisable}
        monthYearPickHandle={monthYearPickHandle}
        displayLoadingIndicator={shouldDisplayIndicator}
      />
    );
  };

  const renderMonth = () => {
    const shouldShowSixWeeks = showSixWeeks && !hideExtraDays;
    const days = page(currentMonth, firstDay, shouldShowSixWeeks);
    const weeks = [];

    while (days.length) {
      weeks.push(renderWeek(days.splice(0, 7), weeks.length));
    }
    return <View style={style.current.monthView}>{weeks}</View>;
  };

  const GestureComponent = enableSwipeMonths ? GestureRecognizer : View;

  const swipeProps = {
    onSwipe: (direction: any) => onSwipe(direction),
  };

  const gestureProps = enableSwipeMonths ? swipeProps : undefined;

  return (
    <GestureComponent {...gestureProps}>
      <View
        style={[style.current.container, propsStyle]}
        testID={testID}
        accessibilityElementsHidden={accessibilityElementsHidden} // iOS
        importantForAccessibility={importantForAccessibility} // Android
      >
        {renderHeader()}
        {renderMonth()}
        {isModalVisible && renderMonthYearPicker()}
      </View>
    </GestureComponent>
  );
};
export default Calendar;

Calendar.displayName = 'Calendar';
Calendar.propTypes = {
  ...CalendarHeader.propTypes,
  ...Day.propTypes,
  theme: PropTypes.object,
  firstDay: PropTypes.number,
  displayLoadingIndicator: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  current: PropTypes.string,
  initialDate: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  markedDates: PropTypes.object,
  hideExtraDays: PropTypes.bool,
  showSixWeeks: PropTypes.bool,
  onDayPress: PropTypes.func,
  onDayLongPress: PropTypes.func,
  onMonthChange: PropTypes.func,
  onVisibleMonthsChange: PropTypes.func,
  disableMonthChange: PropTypes.bool,
  enableSwipeMonths: PropTypes.bool,
  disabledByDefault: PropTypes.bool,
  headerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  customHeader: PropTypes.any,
  allowSelectionOutOfRange: PropTypes.bool,
};
