import React, { useState, useRef } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
 
import { IMProgressTrackerProps, Step } from './types';
import styles from './styles';
import typography from '../../../atoms/typography';
import { ICComponentDrawerSuccess } from '../../../atoms/icons';
import { actuatedNormalizeWidth } from '../../../utils/utility';
 
const IMProgressTracker: React.FC<IMProgressTrackerProps> = props => {
  const {
    data,
 
    currentStepProp,
    callbackprogress,
 
    activeCircleStyle = { backgroundColor: '#F0792E' },
    buttonContainerStyle,
    disabledCircleStyle = { backgroundColor: '#E7E8E9' },
    flatListStyle,
    flatListViewStyle,
    itemStyleProp,
    lineStyle,
    ParentButtonStyle,
    parentContainerStyle,
    titleContainerStyle,
 
    toggleFunc,
 
    activeStateTextStyle = { color: '#333638' },
    completedStateTextStyle,
    disabledStateTextStyle,
    titleStyle,
 
    buttonChildrenProp,
    buttonComponent,
    childProp,
    completedCircleStyle = <ICComponentDrawerSuccess height={actuatedNormalizeWidth(24)}  width={actuatedNormalizeWidth(24)} />,
 
 
    isMessage,
    isButton = true,
    isDisabled,
 
    popupText,
    popupFinishText,
  } = props;
 
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
 
  const flatListRef = useRef<FlatList | null>(null);
 
  const renderItem = ({ item, index }: { item: Step; index: number }) => {
    const isActive = index === currentStep;
    const isCompleted = item.isEnabled;
    let circleStyle = disabledCircleStyle;
    let content = null;
    if (isActive) {
      circleStyle = activeCircleStyle;
    } else if (isCompleted) {
      content = completedCircleStyle;
    }
    if (circleStyle === disabledCircleStyle) {
      content = (
        <Text style={[styles.circleText1, typography.SubTitleMedium2]}>
          {item.id}
        </Text>
      );
    }
    if (circleStyle === activeCircleStyle) {
      content = (
        <Text style={[styles.circleText2, typography.SubTitleMedium2]}>
          {item.id}
        </Text>
      );
    } else if (isCompleted) {
      content = completedCircleStyle;
    }
 
    const onpress = (item: Step, index: number) => {
      setCurrentStep(index);
      
      if (toggleFunc) {
        toggleFunc(item);
      }
    };
    return (
      <TouchableOpacity
        onPress={() => onpress(item, index)}
        disabled={!isCompleted && index !== currentStep}
        style={[styles.item, itemStyleProp]}>
        <View style={[styles.circle, circleStyle]}>{content}</View>
        <View style={titleContainerStyle}>
        <Text
          style={[
            styles.title,
            titleStyle,
            typography.SubTitleMedium2,
            isActive
              ? activeStateTextStyle
              : isCompleted
                ? completedStateTextStyle
                : disabledStateTextStyle,
          ]}>
          {item.title}
        </Text>
        </View>
        {index < data.length - 1 && <View style={[styles.line, lineStyle]} />}
      </TouchableOpacity>
    );
  };
 
  const proceedHandler = () => {
    const nextStepIndex = currentStep + 1;
    currentStepProp && currentStepProp(currentStep)
    callbackprogress && callbackprogress(nextStepIndex)
    if (nextStepIndex < data.length) {
      const updatedData = [...data];
      updatedData[currentStep].isEnabled = true;
      setCurrentStep(nextStepIndex);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 500);
 
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: nextStepIndex - 1,
      });
    } else if (nextStepIndex === data.length) {
      const updatedData = [...data];
      updatedData[currentStep].isEnabled = true;
      setCurrentStep(nextStepIndex);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 500);
    }
  };
 
  return (
    <View style={parentContainerStyle}>
      <View style={flatListViewStyle}>
      <FlatList
        style={flatListStyle}
        ref={flatListRef}
        data={data}
        renderItem={({ item, index }) => renderItem({ item, index })}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      {childProp}
      {isButton &&
        <View style={[ buttonContainerStyle]}>
          {buttonChildrenProp}
          <TouchableOpacity
            disabled={isDisabled}
            style={ParentButtonStyle}
            onPress={proceedHandler}>
            {buttonComponent}
          </TouchableOpacity>
        </View>
      }
      {isMessage && (
        <Modal visible={showModal} transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                {currentStep === data.length ? popupText : popupFinishText}
              </Text>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};
 
export default IMProgressTracker;
 
