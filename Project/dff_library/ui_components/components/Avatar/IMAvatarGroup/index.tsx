import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { IMAvatarGroupProps, AvatarData } from './types';
import useStyles from './styles';
import {STRINGS} from './constants'
import IMAvatar from '../IMAvatar';
import {
  ICGeneralChevronLeft,
  ICGeneralChevronRight,
  ICGeneralFavourite,
} from '../../../atoms/icons';

const IMAvatarGroup: React.FC<IMAvatarGroupProps> = props => {
  const {
    avatars,

    avatarContainerStyle,
    avatarFullContainer,
    containerStyle,
    favouriteHeaderStyle,
    headerStyles,

    isImage,
    label,
    withLogo,

    maxNoOfAvatarsPerRow,

    handleManage,
  } = props;

  const [newContainer, setNewContainer] = useState(false);
  const [noOfAvatarsPerRow, setNoOfAvatarsPerRow] = useState(
    maxNoOfAvatarsPerRow ? maxNoOfAvatarsPerRow : 4,
  );

  const shouldDisplayViewAllButton = avatars.length > noOfAvatarsPerRow;
  const displayedAvatars = shouldDisplayViewAllButton
    ? avatars.slice(0, noOfAvatarsPerRow - 1)
    : avatars;
  const styles = useStyles();

  const generateRandomColor = (): string => {
    const ramdomcolors = [
      'rgba(247, 182, 141, 0.3)',
      'rgba(206, 95, 102, 0.1)',
      'rgba(55, 116, 185, 0.1)'
    ];

    const randomIndex = Math.floor(Math.random() * ramdomcolors.length);
    return ramdomcolors[randomIndex];
  };

  const generatetextColor = (): string => {
    const lettercolors = ['#DB5E10', '#20446C', '#982F35'];
    const randomIndex = Math.floor(Math.random() * lettercolors.length);
    return lettercolors[randomIndex];
  };

  const groupingAvatarData = (data: AvatarData[]) => {
    var modifiedData = [];
    for (let i = 0; i < data.length; ) {
      modifiedData.push(data.slice(i, i + noOfAvatarsPerRow));
      i += noOfAvatarsPerRow;
    }
    return modifiedData;
  };

  const renderAvatars = (item: any) => {
    return (
      <View style={[styles.avatarFullContainer, avatarFullContainer]}>
        <FlatList
          data={item.item}
          renderItem={item => {
            return (
              <IMAvatar
                avatar={[item.item]}
                backgroundColor={
                  item.item.name.toLowerCase() === 'View less'.toLowerCase()
                    ? styles.viewLessButton.color
                    : generateRandomColor()
                }
                color={generatetextColor()}
                isImage={item.item.name.toLowerCase() === 'View less'.toLowerCase()?true:isImage}
                label={label}
                withLogo={item.item.name.toLowerCase() === 'View less'.toLowerCase()?false:withLogo}
              />
            );
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderItem = (item: any) => (
    <IMAvatar
      avatar={[item]}
      backgroundColor={generateRandomColor()}
      color={generatetextColor()}
      label={label}
      isImage={isImage}
      withLogo={withLogo}
    />
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.subContainerStyles, headerStyles]}>
        <View style={[styles.favouriteheaderStyle, favouriteHeaderStyle]}>
          <ICGeneralFavourite
            height={styles.favouriteImage.height}
            width={styles.favouriteImage.width}
          />
          <Text style={styles.favouriteText}>{STRINGS.str_Favourite}</Text>
        </View>
        <TouchableOpacity style={styles.manageView} onPress={handleManage}>
          <Text style={styles.manageText}>{STRINGS.str_Manage}</Text>
          <ICGeneralChevronRight />
        </TouchableOpacity>
      </View>
      {!newContainer ? (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[styles.scrollViewStyles, avatarContainerStyle]}>
          {displayedAvatars.map((item: any) => {
            return renderItem(item);
          })}
          <IMAvatar
            avatar={[
              {
                name: STRINGS.str_View_All,
                image: (
                  <ICGeneralChevronRight
                    height={styles.imageStyles.height}
                    width={styles.imageStyles.width}
                    onPress={() => {
                      setNewContainer(true);
                    }}
                  />
                ),
              },
            ]}
            backgroundColor={'white'}
            color={generatetextColor()}
            isImage={true}
            label={true}
            avatarimageStyle={styles.avatarimageStyle}
          />
        </ScrollView>
      ) : (
        <FlatList
          data={groupingAvatarData([
            ...avatars,
            {
              name: STRINGS.str_View_Less,
              image: (
                <ICGeneralChevronLeft
                  height={styles.imageStyles.height}
                  width={styles.imageStyles.width}
                  onPress={() => {
                    setNewContainer(false);
                  }}
                />
              ),
            },
          ])}
          renderItem={renderAvatars}
        />
      )}
    </View>
  );
};

export default IMAvatarGroup;