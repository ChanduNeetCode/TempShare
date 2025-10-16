import React, { FC, useState } from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import { ICGeneralCalender } from '../../../atoms/icons';
import DropdownModal from '../../Dropdowns/components/IMDropdownModal';
import { colors, typography } from '../../../atoms';
import { flatListObject } from '../../Dropdowns/utils/types';
import { IMSplitInputTextFieldProps } from './types';
import useStyles from './styles';

const styles = useStyles();

const IMSplitInputTextField: FC<IMSplitInputTextFieldProps> = props => {
  const {
    units,

    bottomContainer,

    icon = <ICGeneralCalender height={24} width={24} />,

    bottomContainerStyle,
    containerSeperatorStyle,
    dataSeperatorLineStyle,
    dataViewStyle,
    dateTextViewStyle,
    dateViewStyle,
    dropdownSeperatorStyle,
    dropDownStyle,
    elementStyle,
    flatListStyle,
    flatListRowStyle,
    iconStyle,
    mainContainerStyle,

    dataTextStyle,
    dataStyle,
    dateStyle,
    dateTextStyle,
    daysTextStyle,

    onSelect,

    isIcon,
    isYearVisible,
    isMonthVisible,
    isDayVisible,
  } = props;

  const [selectedYear, setSelectedYear] = useState<any>({
    key: '',
    value: '0 years',
  });
  const [selectedMonth, setSelectedMonth] = useState<any>({
    key: '',
    value: '0 months',
  });
  const [selectedDay, setSelectedDay] = useState<any>({
    key: '',
    value: '0 days',
  });
  const [yearVisible, setYearVisible] = useState(isYearVisible);
  const [monthVisible, setMonthVisible] = useState(isMonthVisible);
  const [dayVisible, setDayVisible] = useState(isDayVisible);

  const onSelectItem = (item: flatListObject, title: string) => {
    if (title == 'year') {
      setSelectedYear(item);
      setYearVisible(!yearVisible);
    } else if (title == 'month') {
      setSelectedMonth(item);
      setMonthVisible(!monthVisible);
    } else {
      setSelectedDay(item);
      setDayVisible(!dayVisible);
    }
    onSelect(item, title);
  };

  const numberOfDays = (years: any, months: any, days: any) => {
    const currentDate: any = new Date();
    const targetDate: any = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + Number(years));
    targetDate.setMonth(targetDate.getMonth() + Number(months));
    targetDate.setDate(targetDate.getDate() + Number(days));
    const difference = targetDate - currentDate;
    const dayDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    return [
      dayDifference,
      targetDate
        .toLocaleDateString('en-GB', options)
        .replace(/(\d{2})$/, "'$1"),
    ];
  };

  const closeModal = () => {
    setDayVisible(false);
    setMonthVisible(false);
    setYearVisible(false);
  };

  const renderDropdownOverlay = (title: string, data: any) => {
    let textField;
    let imageField: any;

    return (
      <>
        <Pressable style={styles.touchable} onPress={() => closeModal()}>
          <View
            style={[
              styles.dropdownStyle,
              dropDownStyle,
              {
                marginLeft: title == 'year' ? 16 : title == 'month' ? 116 : 220,
              },
            ]}>
            <FlatList
              ItemSeparatorComponent={() => (
                <View
                  style={[
                    styles.ItemSeparatorComponentStyle,
                    dropdownSeperatorStyle,
                  ]}
                />
              )}
              style={[styles.flatListStyle, flatListStyle]}
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                textField = item.value;
                if (typeof item.value !== 'string') {
                  textField = item.value;
                  imageField = item.value;
                }
                const rowDetailsWithImage = (
                  <View style={styles.rowDetailsWithImageStyle}>
                    <View>{imageField}</View>
                    <Text style={styles.rowDetailsWithImageTextStyle}>
                      <>{textField}</>
                    </Text>
                  </View>
                );

                return (
                  <View style={[styles.flatListRowContainer, flatListRowStyle]}>
                    <TouchableHighlight
                      disabled={false}
                      underlayColor={'transparent'}
                      onPress={() => onSelectItem(item, title)}
                      style={styles.dropdownRowStyle}>
                      <View style={[styles.elementStyle, elementStyle]}>
                        <>
                          <View style={{ flex: 0.5 }}>
                            <Text
                              numberOfLines={3}
                              style={[
                                styles.dropdownRowTextStyle,
                                {
                                  color: colors.NeutralGrey110,
                                },
                                typography.BodyRegular3,
                              ]}>
                              <>
                                {imageField ? rowDetailsWithImage : item.value}
                              </>
                            </Text>
                          </View>
                        </>
                      </View>
                    </TouchableHighlight>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Pressable>
      </>
    );
  };

  const renderDropdown = (title: string, data: any) => {
    return (
      <DropdownModal
        visible={
          title == 'year'
            ? yearVisible
            : title == 'month'
            ? monthVisible
            : dayVisible
        }
        onRequestClose={() => {
          title == 'year'
            ? setYearVisible(!yearVisible)
            : setMonthVisible(!monthVisible);
        }}>
        {renderDropdownOverlay(title, data)}
      </DropdownModal>
    );
  };

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <TouchableOpacity
          style={[styles.dataView, dataViewStyle]}
          onPress={() => {
            item['name'] == 'years'
              ? setYearVisible(!yearVisible)
              : item['name'] == 'months'
              ? setMonthVisible(!monthVisible)
              : setDayVisible(!dayVisible);
          }}>
          <Text
            style={[
              styles.data,
              dataStyle,
              {
                color:
                  (item['name'] == 'years' && !yearVisible) ||
                  (item['name'] == 'months' && !monthVisible) ||
                  (item['name'] == 'days' && !dayVisible)
                    ? '#7D8287'
                    : '#F0792E',
              },
            ]}>
            {item['name'] == 'years'
              ? selectedYear.value[0]
              : item['name'] == 'months'
              ? selectedMonth.value[0]
              : selectedDay.value[0]}
          </Text>
          <Text
            style={[
              styles.dataText,
              dataTextStyle,
              {
                color:
                  (item['name'] == 'years' && !yearVisible) ||
                  (item['name'] == 'months' && !monthVisible) ||
                  (item['name'] == 'days' && !dayVisible)
                    ? '#7D8287'
                    : '#F0792E',
              },
            ]}>
            {item['name']}
          </Text>
          {item['name'] == 'years'
            ? renderDropdown('year', item['data'])
            : item['name'] == 'months'
            ? renderDropdown('month', item['data'])
            : renderDropdown('days', item['data'])}
        </TouchableOpacity>

        {item['id'] != units.length && (
          <View
            style={[styles.dataSeperatorLine, dataSeperatorLineStyle]}></View>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      <FlatList
        horizontal
        data={units}
        renderItem={renderItem}
        keyExtractor={item => item['id'].toString()}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={[styles.containerSeperator, containerSeperatorStyle]}></View>
      <View style={[styles.bottomContainer, bottomContainerStyle]}>
        {bottomContainer ? (
          bottomContainer
        ) : (
          <View style={[styles.dateTextView, dateTextViewStyle]}>
            <Text style={[styles.dateText, dateTextStyle]}>MATURITY DATE</Text>
            <View style={{ flexDirection: 'row' }}>
              {selectedYear.value[0] == '0' &&
              selectedMonth.value[0] == '0' &&
              selectedDay.value[0] == '0' ? (
                <Text>- -</Text>
              ) : (
                <View style={[styles.dateView, dateViewStyle]}>
                  <Text style={[styles.date, dateStyle]}>
                    {
                      numberOfDays(
                        selectedYear.value[0],
                        selectedMonth.value[0],
                        selectedDay.value[0],
                      )[1]
                    }
                  </Text>
                  <Text style={[styles.days, daysTextStyle]}>
                    (
                    {
                      numberOfDays(
                        selectedYear.value[0],
                        selectedMonth.value[0],
                        selectedDay.value[0],
                      )[0]
                    }{' '}
                    days)
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
        {isIcon ? <View style={[styles.icon, iconStyle]}>{icon}</View> : null}
      </View>
    </View>
  );
};
export default IMSplitInputTextField;
