import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IMGeneralTrackerProps } from './types';
import { styles } from './styles';
import {
  colors,
} from '../../../atoms';
import {STRINGS} from '../constants';

const IMGeneralTracker: React.FC<IMGeneralTrackerProps> = props => {
  const {
    isauto,
    isdarkMode,
    isButton,
    
    autoTimeOut = 2000,
    totalSteps = 6,
    
    barStyles,
    mainContainerStyles,
    ParentButtonStyle,

    buttonComponent,
    childProp,

    stepStyle,

    onPressHandle,
  } = props;

  const data = [];
  for (let i = 1; i <= totalSteps; i++) {
    data.push({ key: i });
  }

  const [currentIndex, setCurrentIndex] = useState(2);
  const [selectedStep, setSelectedStep] = useState(1);

  const currentstep = `${selectedStep}/${data.length}`;

  useEffect(() => {
    if (isauto) {
      setTimeout(() => {
        const nextINdex = currentIndex < data.length + 1 ? currentIndex : 1;
        setSelectedStep(nextINdex);
        setCurrentIndex(nextINdex + 1);
      }, autoTimeOut);
    }
  }, [currentIndex]);

  const onPressHandler = (item: any) => {
    setSelectedStep(item);
    onPressHandle && onPressHandle(item);
  };

  const renderItem = ({ item }: any) => {
    const isSelected = item.key === selectedStep;
    return (
      <TouchableOpacity
        style={[styles.separation,{
          backgroundColor: isSelected
          ? isdarkMode
          ? colors.White
          : colors.PrimaryOrange100
          : isdarkMode
          ? colors.PrimaryOrange120
          : colors.PastelAmber100,
          marginRight: item.key === data.length ? 0 : 8,
        }]}
        onPress={() => onPressHandler(item.key)}></TouchableOpacity>
    );
  };
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          isdarkMode ? colors.GradientOrangeStart : colors.White,
          isdarkMode ? colors.GradientOrangeEnd : colors.White,
        ]}
        style={[styles.mainContainer, mainContainerStyles]}>
        <Text
      style={[styles.textStyle,{color: isdarkMode ? colors.White : colors.NeutralGrey110,},stepStyle]}>
          {STRINGS.str_Step} {currentstep}
        </Text>
        <View
          style={[styles.barStyle,barStyles]}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index) => index.toString()}
            horizontal={true}
            extraData={selectedStep}
          />
        </View>
      </LinearGradient>
      {childProp}
      {isButton && !isauto && (
          <TouchableOpacity
            style={[styles.proceedButton, ParentButtonStyle]}
            onPress={() => {
              setCurrentIndex(
                currentIndex < data.length ? currentIndex + 1 : 1,
              );
              onPressHandler(currentIndex);
            }}>
            {buttonComponent}
          </TouchableOpacity>
      )}
    </>
  );
};

export default IMGeneralTracker;
