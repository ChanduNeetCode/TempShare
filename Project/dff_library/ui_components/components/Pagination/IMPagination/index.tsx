import React, { useState, useEffect, useRef } from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

import { IMPaginationProps } from './types';
import useStyles from './styles';
import { colors } from '../../../atoms/colors';

const IMPagination: React.FC<IMPaginationProps> = props => {
  const styles = useStyles();
  const {
    countStyleProp,
    dotStyleProp,

    onPressItem,

    pageCount,
    leftImg,
    rightImg,
  } = props;

  const [onPressData, setOnPressData] = useState(1);
  const [pageData, setPageData] = useState<any>([]);
  const [scroll ,setScroll] = useState<boolean>(true)
  const[date ,setDate] = useState<any>()
  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    if (pageData.length == 0) {
      for (let i = 0; i < pageCount; i++) {
        pageData.push(i + 1);
      }
    }
    onPressItem(onPressData);
  }, []);

  const scrollToIndex = (index: any, scroll: string) => {
    flatListRef.current?.scrollToItem({ item: index, animated: true });
    if(index >= pageCount/2){
      setScroll(false)
    }else{
      setScroll(true)
    }
  };

  const onPress = (item: any) => {
    setOnPressData(item);
    onPressItem(item);
  };

  const renderList = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress(item);
        }}>
        <View
          style={[
            styles.countStyle,
            countStyleProp,
            {
              backgroundColor:
                item == onPressData ? colors.PrimaryOrange100 : colors.White,
            },
          ]}>
          <Text style={[styles.countTxtStyle,{ color:item == onPressData ? colors.White : colors.NeutralGrey120}]} ellipsizeMode={'tail'}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={() => {

          if (onPressData > 1) {
            onPress(onPressData - 1);
            scrollToIndex(onPressData - 1, 'left');
          }
        }}
        disabled={onPressData == 1}
        >
        {leftImg}
      </TouchableOpacity>
      <View style={styles.listStyle}>
        <FlatList
          ref={flatListRef}
          horizontal
          data={pageData}
          renderItem={renderList}
          onScroll={(e)=>{
            
              let width = Math.round(e?.nativeEvent.contentSize.width - e?.nativeEvent.layoutMeasurement.width)

            if(Math.round(e?.nativeEvent.contentOffset.x) >=width/2 ){
              setScroll(false)
            setDate(new Date())

            }else{
              setScroll(true)
            setDate(new Date())

            }
          }}
        />
      </View>
      
      {(onPressData > 5 && scroll) && (
        <Text style={[styles.dotStyle, dotStyleProp]}>....</Text>
      )}
      {onPressData > 5 && scroll && (
        <Text
          style={[styles.countTxtStyle, countStyleProp]}
          onPress={() => {
            setOnPressData(pageCount);
            scrollToIndex(pageCount - 1, 'right');
          }}>
          {pageCount}
        </Text>
      )}
      <TouchableOpacity
        onPress={() => {
  
          if (onPressData < pageCount) {
            onPress(onPressData + 1);
          }
          if (onPressData >= 5) {
            scrollToIndex(onPressData - 1, 'right');
          }
        }}
        disabled={onPressData == pageCount}
        >
        {rightImg}
      </TouchableOpacity>

    </View>
    
  );
};

export default IMPagination;
