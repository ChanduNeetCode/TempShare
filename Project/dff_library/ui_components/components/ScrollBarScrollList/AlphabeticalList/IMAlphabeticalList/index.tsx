import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  SectionList,
  SectionListData,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { getSectionData } from '../utils/getSectionData';
import { ListLetterIndex } from '../ListLetterIndex/index';
import { IData, ISectionData, IMAlphabeticalListProps } from './types';
import { styles } from './styles';
import { DEFAULT_CHAR_INDEX } from '../utils/constants';
import colors from '../../../../atoms/colors';
import {
  ICGeneralRadioButtonOn,
  ICGeneralRadioButtonOff,
  ICGeneralSearch,
  ICGeneralBank
} from '../../../../atoms/icons';
import { actuatedNormalizeHeight } from '../../../../utils/utility';

const IMAlphabeticalList: React.FC<IMAlphabeticalListProps> = props => {
  const {
    data,

    alphabeticalHeading = 'Heading',
    searchPlaceHolder = 'Search ',

    index = DEFAULT_CHAR_INDEX,

    searchImage = <ICGeneralSearch />,
    selectSearchImage = <ICGeneralRadioButtonOn height={20} width={20} />,
    unselectSearchImage = <ICGeneralRadioButtonOff height={20} width={20} />,

    isCategorizedAtTop,
    isListIndexLetter,
    isRadioButton,
    isSearch,

    indexLetterStyle,
    selectedIndexLetterStyle,
    titleStyle,

    indexContainerStyle,
    indexLetterContainerStyle,
    letterListContainerStyle,
    mainViewStyle,
    searchContainerStyle,
    searchRenderTouchContainerStyle,
    searchRenderTouchableActiveStyle,
    scrollingIndexLetterContainerStyle,
    style,

    noSearchDataView,
    renderCustomSectionHeader,
    renderCustomListHeader,
    renderCustomIndexLetter,
    getItemHeight: onGetItemHeight = () => actuatedNormalizeHeight(40),
    renderItemCallback,
    renderSearchCustomItem,
    searchResultCallback,

    keyboardType,

    ...sectionListProps
  } = props;

  const sectionListRef = useRef(null);

  const [changeText, setChangeText] = useState<string>('');
  const [isNodata, setIsNodata] = useState<boolean>();
  const [sectionData, setSectionData] = useState<ISectionData[]>([]);
  const [selectLetter, setSelectLetter] = useState<string>('');
  const [tempSectionData, setTempSectionData] = useState<ISectionData[]>([]);

  useEffect(() => {
    data.forEach(object => {
      object.isResult = false;
    });
    setSectionData(getSectionData(data, index, isCategorizedAtTop));
    setTempSectionData(getSectionData(data, index, isCategorizedAtTop));
  }, [data]);

  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems[0]?.section?.title)
      setSelectLetter(viewableItems[0]?.section?.title);
  }, []);

  const VIABILITY_CONFIG = {
    minimumViewTime: 1000,
    viewAreaCoveragePercentThreshold: 60,
  };

  const onScrollToSection = (sectionIndex: number) => {
    const sectionList = sectionListRef.current! as SectionList;
    setSelectLetter(sectionData[sectionIndex]?.title);
    if (!sectionList) return;
    sectionList.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
    });
  };

  const onChangeText = (e: string) => {
    setChangeText(e);
    const searchText = e.toLowerCase();
    const list = tempSectionData;
    const result: IData[] = [];
    const filterData = list.filter((item: ISectionData) => {
      item?.data.filter((d: IData) => {
        if (d.value.toLowerCase().includes(searchText)) result.push(d);
      });
    });
    if (!searchText || searchText === '' || Array.isArray(filterData)) {
      setIsNodata(false);
      setSectionData(getSectionData(result, index, isCategorizedAtTop));
    } else if (!Array.isArray(filterData)) {
      setIsNodata(true);
      setSectionData(getSectionData(result, index, isCategorizedAtTop));
    }
  };

  const onPress = (_item: any) => {
    if (searchResultCallback) searchResultCallback(_item);
    data.forEach(item => {
      item.isResult = item.key === _item.key ? true : false;
    });
    setSectionData(getSectionData(data, index, isCategorizedAtTop));
  };

  const listHeaderComponent = () => {
    if (renderCustomListHeader) return renderCustomListHeader();

    return (
      <Text style={[styles.alphaheadStyles, titleStyle]}>
        {alphabeticalHeading}
      </Text>
    );
  };

  const onRenderSectionHeader = ({
    section,
  }: {
    section: SectionListData<IData>;
  }) => {
    if (renderCustomSectionHeader) return renderCustomSectionHeader(section);
    return (
      <View testID="header" style={styles.sectionHeaderContainer}>
        <Text testID="header__label" style={styles.sectionHeaderLabel}>
          {section.title}
        </Text>
      </View>
    );
  };

  const searchOnRenderItem = ({ item }: { item: IData }) => {
    if (renderSearchCustomItem) return renderSearchCustomItem(item);

    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        testID="cell"
        style={
          item.isResult
            ? [
                styles.searchTouchableActiveStyle,
                [isRadioButton && styles.radioButtonStyles],
                searchRenderTouchableActiveStyle,
              ]
            : [
                styles.searchRenderTouchableContainer,
                searchRenderTouchContainerStyle,
              ]
        }>
        <View style={styles.searchRenderViewContainer}>
          <View
            style={[
              styles.iconStyles,
              {
                backgroundColor: item.isResult
                  ? colors.White
                  : colors.CoolGrey100,
              },
            ]}>
            {item.logo || (
              <ICGeneralBank
                height={styles.defaultIconStyle.height}
                width={styles.defaultIconStyle.width}
              />
            )}
          </View>
          <Text testID="cell__label" style={styles.valueStyles}>
            {item.value}
          </Text>
          {isRadioButton && (
            <View style={styles.imageRenderViewContainer}>
              {item.isResult ? selectSearchImage : unselectSearchImage}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={
        isSearch
          ? [styles.mainView, mainViewStyle]
          : [styles.searchContainerStyle, searchContainerStyle]
      }>
      <View style={[styles.container, style]}>
        {isSearch && (
          <View style={styles.searchInputViewContainer}>
            {searchImage}
            <TextInput
              style={
                changeText.length === 0 ? styles.textStyle1 : styles.textstyle2
              }
              onChangeText={x => onChangeText(x)}
              placeholder={searchPlaceHolder}
              keyboardType={keyboardType}
              value={changeText}
            />
          </View>
        )}
        <>
          {isNodata ? (
            noSearchDataView
          ) : (
            <SectionList
              {...sectionListProps}
              testID="sectionList"
              ref={sectionListRef}
              sections={sectionData}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={VIABILITY_CONFIG}
              keyExtractor={(item: IData) => item.key}
              renderItem={searchOnRenderItem}
              renderSectionHeader={onRenderSectionHeader}
              ListHeaderComponent={listHeaderComponent}
            />
          )}
          {isListIndexLetter && (
            <ListLetterIndex
              sectionData={sectionData}
              onPressLetter={onScrollToSection}
              selectedLetter={selectLetter}
              indexContainerStyle={indexContainerStyle}
              selectedIndexLetterStyle={selectedIndexLetterStyle}
              indexLetterStyle={indexLetterStyle}
              indexLetterContainerStyle={indexLetterContainerStyle}
              scrollingIndexLetterContainerStyle={
                scrollingIndexLetterContainerStyle
              }
              letterListContainerStyle={letterListContainerStyle}
              renderCustomIndexLetter={renderCustomIndexLetter}
            />
          )}
        </>
      </View>
    </View>
  );
};
export default IMAlphabeticalList;
