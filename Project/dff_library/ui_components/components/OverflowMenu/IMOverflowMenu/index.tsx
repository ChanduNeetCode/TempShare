import React from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';
import { BlurType } from '../../BlurEffect/IMBlurEffect/types';
import {
  ICGeneralDefaultCloseWhite,
  ICGeneralDisabledLogout,
} from '../../../atoms/icons';
import IMBlurEffect from '../../BlurEffect/IMBlurEffect';
import IMChevronList from '../../List/IMChevronList';
import { IMOverflowMenuProps } from './types';
import { sampleData } from '../utils/json';
import { STRINGS } from '../utils/constants'
import useStyles from './styles';

const IMOverflowMenu: React.FC<IMOverflowMenuProps> = props => {
  const {
    blurAmount = 2,

    list,
    listData,

    isDisable,
    isleftSideImage,
    isSeparator,
    isWithContextualItems,

    appVersion = '',
    logoutText = '',
    sessionTime = '',
    subtitle,
    title,

    blurContainer,
    children,
    closeIcon,
    itemCloseImage,
    logoutImage,

    appVersionTextStyle,
    blurContainerStyle,
  
    iconTitleStyle,
    itemTextStyle,
    logoutDataStyle,
    logoutImageStyle,
    logoutStyleContainer,
    logoutTextStyle,
    subTitleStyle,
    titleStyle,

    closeStyle,
    contextualItemsViewStyle,
    flatListContainer,
    footerContainerStyle,
    iconContainerStyle,
    iconStyle,
    leftIconViewStyle,
    lineStyle,
    logoutStyle,
    mainContainerStyle,
    modalParentStyle,
    textContainerStyle,

    logout,
    onPressItem,
    onPressTtemCloseImage,
    showMenu,
  } = props;

  const styles = useStyles();

  const onPress = (item: any) => {
    if (onPressItem) {
      onPressItem(item.name);
    }
  };
  const renderList = ({ item }: any) => {
    return (
      <View style={[styles.iconContainer, iconContainerStyle]}>
        <TouchableOpacity onPress={() => onPress(item)}>
          <View style={[styles.icon, iconStyle]}>{item.logo}</View>
          <Text style={[styles.iconTitle, iconTitleStyle]}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {blurContainer || (
        <IMBlurEffect
          blurStyle={styles.absolute}
          _blurType={BlurType.Dark}
          _blurAmount={blurAmount}
        />
      )}
      <TouchableOpacity
        disabled={isDisable}
        style={[styles.modalTouchableStyle, blurContainerStyle]}
        onPress={showMenu}
      />
      <View style={[styles.modalParentStyle, modalParentStyle]}>
        <StatusBar translucent={true} barStyle={'dark-content'} />
        <View style={[styles.textContainer, textContainerStyle]}>
          <Text style={[styles.text, titleStyle]}> {title || STRINGS.str_title}</Text>
          {closeIcon || (
            <View style={[styles.close, closeStyle]}>
              <TouchableOpacity
                style={styles.closeIconStyle}
                onPress={onPressTtemCloseImage}>
                {itemCloseImage || (
                  <ICGeneralDefaultCloseWhite
                    height={actuatedNormalizeHeight(30)}
                    width={actuatedNormalizeWidth(30)}
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
          {isWithContextualItems && (
            <View style={[styles.contextualItemsViewStyle, contextualItemsViewStyle]}>
              <IMChevronList
                displayKey="value"
                list={listData || sampleData}
                isleftSideImage={isleftSideImage || true}
                leftIconViewStyle={leftIconViewStyle}
                mainContainerStyle={mainContainerStyle}
                isSeparator={isSeparator}
                itemTextStyle={itemTextStyle}
              />
            </View>
          )}
        </View>
        {children ? (
          children
        ) : (
          <>
            <View style={[styles.flatListContainer, flatListContainer]}>
              <Text style={[styles.SubText, subTitleStyle]}>
                {subtitle || STRINGS.str_subtitle}
              </Text>
              <FlatList
                data={list}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderList}
              />
            </View>
            <View style={[styles.footerContainer, footerContainerStyle]}>
              <View style={[styles.line, lineStyle]} />
              <TouchableOpacity
                onPress={logout}
                style={
                  logoutStyleContainer ? logoutStyleContainer : styles.logoutBox
                }>
                <View style={logoutImageStyle}>
                  {logoutImage || (
                    <ICGeneralDisabledLogout
                      height={actuatedNormalizeHeight(18)}
                      width={actuatedNormalizeWidth(18)}
                    />
                  )}
                </View>
                <Text style={[styles.logout, logoutTextStyle]}>
                  {logoutText || STRINGS.str_logout}
                </Text>
              </TouchableOpacity>
              <View style={logoutStyle ? logoutStyle : styles.logData}>
                <Text
                  style={logoutDataStyle ? logoutDataStyle : styles.LastText}>
                  {sessionTime || STRINGS.str_sessionTime}
                </Text>
                <Text
                  style={
                    appVersionTextStyle
                      ? appVersionTextStyle
                      : styles.LastAppText
                  }>
                  {appVersion || STRINGS.str_appversion}
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default IMOverflowMenu;
