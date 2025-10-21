import React, { FC, useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { type IMSupportDrawerProps } from './types';
import useStyles from './styles';
import {typography,colors} from '../../../atoms';
import defaultData from './Constants/defaultjson';

const IMSupportDrawer: FC<IMSupportDrawerProps> = props => {
  const {
    description: description = '',
    logoLinearGradientColor:
      logoLinearGradientColor = colors.GradientOrangeStart,
    logoLinearGradientSecondColor:
      logoLinearGradientSecondColor = colors.GradientOrangeEnd,
    title = '',
    titleImage,
    activeOpacityProp,
    backgroundStyle,
    descriptionStyle,
    imageItemContainerStyle,
    itemTitleStyle,
    itemDescriptionStyle,
    itemBackgroundStyle,
    logoContainerStyle,
    modalStyle,
    tileStyle,
    childContainerStyle,
    isCloseOnBackgroundTap,
    isModalVisible,
    isOnClickItemDisable,
    isStatusBarTranslucent,

    itemOnPress,
    onPressBlurArea,

    blurContainer,
    initialCircleContainer,
    renderCustomContainer,

    content,
  } = props;

  const styles = useStyles();
  const [modalVisible, setModalVisible] = useState(isModalVisible);

  const onPress = (value: any) => {
    itemOnPress && itemOnPress(value);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={isStatusBarTranslucent}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        {renderCustomContainer ? (
          renderCustomContainer()
        ) : (
          <>
          {blurContainer}
            <TouchableOpacity
              activeOpacity={activeOpacityProp}
              disabled={!isCloseOnBackgroundTap}
              style={[styles.modalTouchableStyle,backgroundStyle, modalStyle]}
              onPress={(onPressBlurArea) ? onPressBlurArea : () => isCloseOnBackgroundTap && setModalVisible(false)}
            />
            <View style={[modalStyle ? modalStyle : styles.modalParentStyle]}>
              <View style={[styles.modalChildStyle, itemBackgroundStyle]}>
                {initialCircleContainer ? (
                  initialCircleContainer()
                ) : (
                  <View style={styles.centerContainerStyle}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={[
                        logoLinearGradientColor,
                        logoLinearGradientSecondColor,
                      ]}
                      style={[styles.circularImageStyle, logoContainerStyle]}>
                      {titleImage}
                    </LinearGradient>
                  </View>
                )}
                <Text
                  style={[
                    styles.titleStyle,
                    typography.BodySemiBold1,
                    tileStyle,
                  ]}>
                  {title}
                </Text>
                <Text
                  style={[
                    styles.descriptionStyle,
                    typography.LinkRegular,
                    descriptionStyle,
                  ]}>
                  {description}
                </Text>
                <FlatList
                  data={content ? content : defaultData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          onPress(item);
                        }}
                        style={[styles.itemTouchableStyle, childContainerStyle]}
                        disabled={isOnClickItemDisable}>
                        <View
                          style={[
                            styles.containerItemStyle,
                            imageItemContainerStyle,
                          ]}>
                          {item.image}
                        </View>
                        <View style={styles.containerStyle}>
                          <Text
                            style={[
                              styles.renderItemTitle,
                              typography.BodySemiBold2,
                              itemTitleStyle,
                            ]}>
                            {item.title}
                          </Text>
                          <Text
                            style={[
                              styles.renderItemDescription,
                              typography.BodyRegular3,
                              itemDescriptionStyle,
                            ]}>
                            {item.description}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          </>
        )}
      </Modal>
    </View>
  );
};
export default IMSupportDrawer;
