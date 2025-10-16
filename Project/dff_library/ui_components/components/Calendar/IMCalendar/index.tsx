import React, { FC, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Calendar from '../src/calendar/index';
import { Picker } from '@react-native-picker/picker';
import { ICGeneralChevronDown } from '../../../atoms/icons';
import { IMCalendarProps, StateObject, DateObject } from './types';
import colors from '../../../atoms/colors';
import useStyles from './styles';

const IMCalendar: FC<IMCalendarProps> = props => {
  const {
    CalendarBackgroundColor,
    headerButtonTitle,

    textDisabledColor,
    textSectionTitleColor,

    calendarStyle,
    dayContainerStyles,
    doneButtonStyle,
    headerContentStyle,
    headerStyle,
    headerTextStyle,
    iconContainerStyle,

    headerArrowIcon = <ICGeneralChevronDown />,
    generateMarkedDates,
    renderDay,
    renderHeader,

    showCalendar,
    showPicker,

    dayTextStyles,

    dayToMark,

    textDayHeaderFontSize,

    markedDatesStyle,
    selectedDatesStyles,
    todayDateStyles,
  } = props;

  const today = new Date().toISOString().split('T')[0];
  const [currentDate, setCurrentDate] = useState(today);
  const [picker, setPicker] = useState(showPicker);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [calendar, setCalendar] = useState(showCalendar);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [selected, setSelected] = useState(today);
  const styles = useStyles();

  const renderCustomHeader = () => {
    const monthName = new Date(selectedYear, selectedMonth).toLocaleString(
      'default',
      { month: 'long' },
    );
    return (
      <View style={[styles.header, headerStyle]}>
        <View style={[styles.headerContent, headerContentStyle]}>
          <TouchableOpacity
            onPress={() => [setPicker(!picker), setCalendar(!calendar)]}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={[
                  styles.headerText,
                  headerTextStyle,
                ]}>{`${monthName} ${selectedYear}`}</Text>
              <Text>{headerArrowIcon}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {picker && (
          <TouchableOpacity onPress={handleDone}>
            <Text style={[styles.doneButton, doneButtonStyle]}>
              {headerButtonTitle}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const generateSelectedDates = (selectedYear: number) => {
    const markedDates: any = {};
    const daysToMark = dayToMark.map(item => ({
      day: new Date(item.date).getDate(),
      icon: item.icon,
    }));

    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(selectedYear, month + 1, 0).getDate();
      const year = selectedYear;

      for (let day = 0; day <= daysInMonth; day++) {
        const dateString = new Date(year, month, day + 1)
          .toISOString()
          .split('T')[0];
        const matchingDate = daysToMark.find(item => item.day === day);

        if (matchingDate) {
          markedDates[dateString] = {
            disableTouchEvent: false,
            customStyles: {
              container: {
                ...markedDatesStyle?.container,
                backgroundColor: colors.White,
                borderRadius: 5,
                height: 80,
                width: 40,
                paddingTop: 8,
              },
              text: { ...markedDatesStyle?.text, color: colors.Black },
              icon: matchingDate.icon,
            },
          };
        }
        markedDates[selected] = {
          customStyles: {
            container: {
              ...selectedDatesStyles?.container,
              backgroundColor: colors.PrimaryOrange100,
              borderRadius: 20,
              height: 35,
              width: 35,
            },
            text: {
              ...selectedDatesStyles?.text,
              color: colors.White,
            },
          },
        };

        markedDates[today] =
          selected === today
            ? {
                customStyles: {
                  container: {
                    ...selectedDatesStyles?.container,
                    backgroundColor: colors.PrimaryOrange100,
                    borderRadius: 20,
                    height: 35,
                    width: 35,
                  },
                  text: {
                    ...selectedDatesStyles?.text,
                    color: colors.White,
                  },
                },
              }
            : {
                customStyles: {
                  container: {
                    ...todayDateStyles?.container,
                    backgroundColor: colors.White,
                    borderRadius: 25,
                    borderWidth: 1,
                    height: 35,
                    width: 35,

                    marginBottom: 45,

                    borderColor: colors.PrimaryOrange100,
                  },
                  text: {
                    ...todayDateStyles?.text,
                    color: colors.PrimaryOrange100,
                  },
                },
              };
      }
    }
    return markedDates;
  };

  const renderCustomDay = ({
    date,
    state,
  }: {
    date: DateObject;
    state: StateObject;
  }) => {
    const markedDates: any = generateMarkedDates
      ? { generateMarkedDates }
      : generateSelectedDates(selectedYear);
    const customDayStyle = markedDates[date.dateString]?.customStyles || {};
    const icon = customDayStyle.icon;
    const isToday = date.dateString === today;
    const isSelected = date.dateString === selected;
    const isPast = new Date(date.dateString) < new Date(today);
    const isMarked = Object.keys(markedDates).includes(date.dateString);

    const containerStyle = [
      [styles.dayContainer, dayContainerStyles],
      customDayStyle.container,
      isToday && isSelected,
      state.selected,
      isSelected,
    ];

    const textStyle = [
      [styles.dayText, dayTextStyles],
      customDayStyle.text,
      isToday && isSelected,
      isPast && isMarked && { color: textDisabledColor },
      isPast && { color: textDisabledColor },
    ];
    const disableTouch = isPast || isMarked;
    return (
      <View style={containerStyle}>
        <TouchableOpacity
          disabled={disableTouch}
          onPress={() => setSelected(date.dateString)}>
          <Text style={textStyle}>{date.day}</Text>
        </TouchableOpacity>
        {icon && (
          <View style={[styles.iconContainer, iconContainerStyle]}>{icon}</View>
        )}
      </View>
    );
  };

  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    if (year === currentYear && selectedMonth < currentMonth) {
      setSelectedMonth(new Date().getMonth());
    }
  };

  const handleDone = () => {
    const newDate = `${selectedYear}-${Number(selectedMonth) + 1}-01`;
    setCurrentDate(newDate);
    setPicker(false);
    setCalendar(!calendar);
  };
  useEffect(() => {
    if (selectedYear === currentYear && selectedMonth < currentMonth) {
      setSelectedMonth(currentMonth);
    }
  }, [selectedYear, currentYear, currentMonth, selectedMonth]);

  const getMonthItems = () => {
    const months = [
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
    ];
    const startMonth = selectedYear === currentYear ? currentMonth : 0;
    return months
      .slice(startMonth)
      .map((month, index) => (
        <Picker.Item
          key={index + startMonth}
          label={month}
          value={index + startMonth}
        />
      ));
  };

  return (
    <View>
      {renderHeader ? renderHeader() : renderCustomHeader()}
      {calendar ? (
        <Calendar
          current={currentDate}
          onDayPress={(day: string) => {
            setSelected(day);
          }}
          renderHeader={() => <View></View>}
          hideExtraDays
          minDate={today}
          hideArrows={true}
          markedDates={
            generateMarkedDates
              ? { generateMarkedDates }
              : generateSelectedDates(selectedYear)
          }
          markingType={'custom'}
          firstDay={1}
          dayComponent={renderDay ? renderDay : renderCustomDay}
          style={[styles.calendar, calendarStyle]}
          theme={{
            calendarBackground: CalendarBackgroundColor,
            textSectionTitleColor: textSectionTitleColor,
            textDayHeaderFontSize: textDayHeaderFontSize,
          }}
        />
      ) : null}

      {picker && (
        <View style={styles.pickerContainer}>
          <View style={styles.pickerColumn}>
            <Text style={styles.pickerLabel}>Month</Text>
            <Picker
              selectedValue={selectedMonth}
              style={styles.picker}
              onValueChange={itemValue => handleMonthChange(itemValue)}>
              {getMonthItems()}
            </Picker>
          </View>
          <View style={styles.pickerColumn}>
            <Text style={styles.pickerLabel}>Year</Text>
            <Picker
              selectedValue={selectedYear}
              style={styles.picker}
              onValueChange={itemValue => handleYearChange(itemValue)}>
              {Array.from({ length: 10 }, (_, i) => currentYear + i).map(
                year => (
                  <Picker.Item key={year} label={`${year}`} value={year} />
                ),
              )}
            </Picker>
          </View>
        </View>
      )}
    </View>
  );
};

export default IMCalendar;
