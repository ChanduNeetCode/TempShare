import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { ChoiceSelectorsProps } from './types';
import IMRegularCards from '../../Cards/IMRegularCard';
import { regularInfo } from '../../Cards/IMRegularCard/types';
import {
  ICGeneralRadioButtonOff,
  ICGeneralRadioButtonOn,
} from '../../../atoms/icons';
import { colors, typography } from '../../../atoms';

const IMChoiceSelectors: React.FC<ChoiceSelectorsProps> = props => {
  const [date, setDate] = useState(new Date());

  const {
    butttonON = <ICGeneralRadioButtonOn />,
    buttonOFF = <ICGeneralRadioButtonOff />,

    listData,
    isolatedList,

    containerStyle,
    lineSeparatorStyleProp,
    textViewStyleProp,
    isolatedContainerStyleProp,
    isolatedcontainerInnerStyleProp,
    isolatedleftImgViewStyleProp,
    isolatedRadioStyleProp,
    isolatedTxtViewStyleProp,
    containedleftImgStyleProp,

    isolatedLabelTxtStyleProp ,
    isolatedBodyTxtStyleProp,
    text1StyleProp,
    text2StyleProp,
    text3StyleProp,

    isMultipleSelect,

    selectorType,

    cardHeight,

    onPressItem,
  } = props;

  const renderList = ({ item, index }: any) => {
    return (
      <>
        <View style={[styles.textViewStyle, textViewStyleProp]}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[styles.containedleftImgStyle,
                  containedleftImgStyleProp
                ]}>
                {item.isButtonPress ? item.leftImgOn : item.leftImgOff}
              </View>

              <Text
                style={[
                  {
                    color: item.isButtonPress
                      ? colors.Black
                      : colors.NeutralGrey110,
                  },
                  styles.text1Style,
                  text1StyleProp,
                ]}>
                {item.text1}
              </Text>
              <Text
                style={[
                  {
                    color: item.isButtonPress
                      ? colors.PrimaryOrange100
                      : colors.NeutralGrey110,
                  },
                  styles.text2Style,
                  text2StyleProp,
                ]}>
                {item.text2}
              </Text>
            </View>
            <Text style={[styles.text3Style,text3StyleProp]}>
              {item.text3}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (isMultipleSelect) {
                if (listData) {
                  listData[index].isButtonPress =
                    !listData[index].isButtonPress;
                  setDate(new Date());
                }
              } else {
                listData?.forEach(v => {
                  if (v.id == index) {
                    v.isButtonPress = !v.isButtonPress;
                  } else {
                    v.isButtonPress = false;
                  }
                });
                setDate(new Date());
              }
            }}>
            {item.isButtonPress ? butttonON : buttonOFF}
          </TouchableOpacity>
        </View>
        {index != (listData && listData.length - 1) && (
          <View style={[styles.lineSeparatorStyle,lineSeparatorStyleProp]} />
        )}
      </>
    );
  };

  const renderIsolated = ({ item, index }: any) => {
    return (
      <View
        style={[
          {
            borderColor: item.isLabelPress
              ? colors.PrimaryOrange100
              : colors.White,
          },
          styles.labelContsinerStyle,
          isolatedContainerStyleProp,
        ]}>
        <View
          style={ [styles.containerInnerStyle,isolatedcontainerInnerStyleProp]}>
          <View style={ [styles.leftImgStyle,isolatedleftImgViewStyleProp]}>
            {item.leftImg}
          </View>
          <View style={[ styles.txtViewStyle,isolatedTxtViewStyleProp]}>
            <Text style={[typography.BodySemiBold2,{color:colors.NeutralGrey150},isolatedLabelTxtStyleProp]}>{item.labelTxt}</Text>
            <Text
              style={[typography.LabelLargeMedium,{color:colors.NeutralGrey110},isolatedBodyTxtStyleProp]}>
              {item.body}
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.isolatedRadioStyle,isolatedRadioStyleProp]}
            onPress={() => {
              if (isMultipleSelect) {
                if (isolatedList) {
                  isolatedList[index].isLabelPress =
                    !isolatedList[index].isLabelPress;
                  setDate(new Date());
                }
              } else {
                isolatedList?.forEach(v => {
                  if (v.id == index) {
                    v.isLabelPress = !v.isLabelPress;
                  } else {
                    v.isLabelPress = false;
                  }
                });
                setDate(new Date());
              }
              onPressItem(isolatedList);
            }}>
            {item.isLabelPress ? butttonON : buttonOFF}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      {selectorType == 'Contained' ? (
        <IMRegularCards
          regular={regularInfo.WhiteOutline}
          regularCardStyleProps={containerStyle}
          cardHeight={cardHeight}>
          <View style={{ marginVertical: 10 }}>
            <FlatList data={listData} renderItem={renderList} />
          </View>
        </IMRegularCards>
      ) : (
        <FlatList
          data={isolatedList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderIsolated}
        />
      )}
    </>
  );
};

export default IMChoiceSelectors;
