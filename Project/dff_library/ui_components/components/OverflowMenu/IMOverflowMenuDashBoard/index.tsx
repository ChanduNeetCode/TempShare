import React from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
} from '../../../utils/utility';
import { BlurType } from '../../BlurEffect/IMBlurEffect/types';
import IMBlurEffect from '../../BlurEffect/IMBlurEffect';
import { IMOverflowDashBoardProps } from './types';
import {
  ICGeneralDefaultCloseWhite,
  ICGeneralDisabledLogout,
  ICGeneralMyQr,
  ICGeneralPerson,
  OldMan,
} from '../../../atoms/icons';
import { IMTallStoryStyleBanner } from '../../Banners';
import { STRINGS } from '../utils/constants';
import useStyles from './styles';
import { colors } from '../../../../../dff_library/ui_components/atoms';

const IMOverflowMenuDashBoard: React.FC<IMOverflowDashBoardProps> = props => {
  const {
    blurAmount=2,

    list,

    isDisable,

    appVersion = '',
    buttonTitle,
    logoutText = '',
    profileId,
    profileName,
    sessionTime = '',
    subtitle,
    title,

    blurContainer,
    children,
    imageToDisplay,
    itemCloseImage,
    leftIcon,
    logoutImage,
    rightIcon,
    textContainer,

    appVersionTextStyle,
    blurContainerStyle,
    iconTitleStyle,
    logoutDataStyle,
    logoutImageStyle,
    logoutStyleContainer,
    logoutTextStyle,
    subTitleStyle,
    titleStyle,

    closeStyle,
    flatListContainer,
    iconContainerStyle,
    iconStyle,
    imageContainerStyle,
    lineStyle,
    logoutStyle,
    modalParentStyle,
    textContainerStyle,
    headerContainerStyle,
    headerLeftContainerStyle,

    logout,
    onPressItem,
    onPressItemCloseImage,
    onPressSeeProfile,    
    showMenu,
  } = props;

  const onPress = (item: any) => {
    if (onPressItem) {
      onPressItem(item.name);
    }
  };
  const styles = useStyles();

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
        <>
          <StatusBar translucent={true} barStyle={'dark-content'} />
          <View style={[styles.textContainer, textContainerStyle]}>
            <Text style={[styles.text, titleStyle]}>
              {title || STRINGS.str_title}
            </Text>
            <View style={[styles.headerContainerStyle,headerContainerStyle]}>
              <View style={[styles.headerLeftContainerStyle,headerLeftContainerStyle]}>
                {leftIcon || (
                  <View style={styles.profileStyle}>
                    <ICGeneralPerson
                      height={actuatedNormalizeHeight(30)}
                      width={actuatedNormalizeWidth(30)}
                    />
                  </View>
                )}
                {textContainer || <View style={styles.textContainerStyle}>
                  <Text style={styles.nameStyle}>
                    {profileName || STRINGS.str_profile_name}
                  </Text>
                  <Text style={{color:colors.NeutralGrey150}}>{profileId || STRINGS.str_profile_id}</Text>
                  <Pressable onPress={onPressSeeProfile}>
                    <Text style={styles.seeProfileTextStyle}>
                      {buttonTitle || STRINGS.str_button_title}
                    </Text>
                  </Pressable>
                </View>
                }
              </View>
              {rightIcon || (
                <View style={styles.rightIconStyle}>
                  <ICGeneralMyQr
                    width={actuatedNormalizeHeight(40)}
                    height={actuatedNormalizeWidth(40)}
                  />
                </View>
              )}
            </View>
            <View style={[styles.close, closeStyle]}>
              <TouchableOpacity
                style={styles.closeIconStyle}
                onPress={onPressItemCloseImage}>
                {itemCloseImage || (
                  <ICGeneralDefaultCloseWhite
                    height={actuatedNormalizeHeight(30)}
                    width={actuatedNormalizeWidth(30)}
                  />
                )}
              </TouchableOpacity>
            </View>
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
              <View style={[styles.imageContainerStyle, imageContainerStyle]}>
                {imageToDisplay || (
                  <IMTallStoryStyleBanner
                    numberOfProgressBars={4}
                    imagesToDisplay={<OldMan />}
                    onPress={()=>{}}
                    containerStyleProps={styles.containerStyleProps}
                  />
                )}
              </View>
              <View style={styles.footerContainer}>
                <View style={[styles.line, lineStyle]} />
                <TouchableOpacity
                  onPress={logout}
                  style={
                    logoutStyleContainer
                      ? logoutStyleContainer
                      : styles.logoutBox
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
                    {logoutText ||STRINGS.str_logout}
                  </Text>
                </TouchableOpacity>
                <View style={[styles.logData, logoutStyle]}>
                  <Text
                    style={logoutDataStyle ? logoutDataStyle : styles.LastText}>
                    {sessionTime || STRINGS.str_sessionTime}
                  </Text>
                  <Text style={[styles.LastAppText, appVersionTextStyle]}>
                    {appVersion || STRINGS.str_appversion}
                  </Text>
                </View>
              </View>
            </>
          )}
        </>
      </View>
    </>
  );
};

export default IMOverflowMenuDashBoard;
