import React, { useState } from 'react';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';

import { IMStackedAvatarProps } from './types';
import useStyles from './styles';
import IMAvatar from '../IMAvatar';

const IMStackedAvatar: React.FC<IMStackedAvatarProps> = props => {
  const {
    avatars,

    isImage,
    label,

    avatarContainerStyle,
    avatarimageStyle,
    avatarLetterContainerStyle,
    avatarLetterStyle,
    badgeImageContainerStyle,
    countContainerStyle,
    stackedContainerStyle,
    stackedAvatarContainerStyle,

    badgeImageStyle,

    countTextStyle,
    labelStyle,
    imagelabelStyle,

    sideImage,
  } = props;

  const styles = useStyles();

  const [showAllAvatars, setShowAllAvatars] = useState(false);

  const toggleShowAllAvatars = () => {
    setShowAllAvatars(!showAllAvatars);
  };

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
  const backgroundColor = generateRandomColor();
  const color = generatetextColor();

  const renderMethod = (item: any) => {
    return (
      <View style={stackedAvatarContainerStyle}>
        <IMAvatar
          avatar={[item.item]}
          backgroundColor={backgroundColor}
          color={color}
          isImage={isImage}
          label={label}
          avatarContainerStyle={avatarContainerStyle}
          avatarimageStyle={avatarimageStyle}
          avatarLetterContainerStyle={avatarLetterContainerStyle}
          avatarLetterStyle={avatarLetterStyle}
          badgeImageContainerStyle={badgeImageContainerStyle}
          badgeImageStyle={badgeImageStyle}
          labelStyle={labelStyle}
          imagelabelStyle={imagelabelStyle}
          containerStyle={
            {
              marginLeft:
                item.index === 0
                  ? styles.stackedAvatarMarginLeft1.marginLeft
                  : styles.stackedAvatarContainer.marginLeft,
            }
          }
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, stackedContainerStyle]}>
      {showAllAvatars ? (
        <FlatList
          data={avatars}
          renderItem={renderMethod}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        avatars.slice(0, 3).map((avatar: any, index) => (
          <View key={index} style={[stackedAvatarContainerStyle]}>
            <IMAvatar
              avatar={[avatar]}
              backgroundColor={generateRandomColor()}
              color={generatetextColor()}
              isImage={false}
              withLogo={false}
              avatarContainerStyle={avatarContainerStyle}
              avatarimageStyle={avatarimageStyle}
              avatarLetterContainerStyle={avatarLetterContainerStyle}
              avatarLetterStyle={avatarLetterStyle}
              badgeImageContainerStyle={badgeImageContainerStyle}
              badgeImageStyle={badgeImageStyle}
              labelStyle={labelStyle}
              imagelabelStyle={imagelabelStyle}
              containerStyle={styles.stackedAvatarContainer}
            />
          </View>
        ))
      )}

      {avatars.length > 3 && (
        <TouchableOpacity
          style={[
            styles.countContainer,
            { backgroundColor },
            countContainerStyle,
          ]}
          onPress={toggleShowAllAvatars}>
          <Text style={[styles.countText, countTextStyle]}>
            {showAllAvatars ? sideImage : `+${avatars.length - 3}`}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default IMStackedAvatar;
