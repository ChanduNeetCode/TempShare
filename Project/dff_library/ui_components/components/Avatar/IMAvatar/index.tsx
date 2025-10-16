import React from 'react';
import { Text, View } from 'react-native';

import { IMAvatarProps } from './types';
import useStyles from './styles';

const IMAvatar: React.FC<IMAvatarProps> = props => {
  const {
    avatar,

    backgroundColor,
    color,

    isImage,
    label,
    withLogo,

    avatarContainerStyle,
    avatarimageStyle,
    avatarLetterContainerStyle,
    badgeImageContainerStyle,
    containerStyle,
    
    badgeImageStyle,
    
    avatarLetterStyle,
    labelStyle,
    imagelabelStyle,
  } = props;

  const styles = useStyles();

  const letter = avatar[0].name.charAt(0).toUpperCase();

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      {isImage ? (
        <View
          style={[
            styles.avatarContainer,
            { backgroundColor },
            avatarContainerStyle,
          ]}>
          <View style={[styles.avatarimage, avatarimageStyle]}>
            {avatar[0].image}
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.avatarContainer,
            { backgroundColor },
            avatarContainerStyle,
          ]}>
          {withLogo ? (
            <>
              <View style={[styles.badgeImage, badgeImageStyle]}>
                {avatar[0].badgeImage}
              </View>
              <View style={[styles.badgeImageLetter, badgeImageContainerStyle]}>
                <Text style={[styles.letter, { color }, avatarLetterStyle]}>
                  {letter}
                </Text>
              </View>
            </>
          ) : (
            <View style={avatarLetterContainerStyle}>
              <Text style={[styles.letter, { color }, avatarLetterStyle]}>
                {letter}
              </Text>
            </View>
          )}
        </View>
      )}
      <View>
        {label ? (
          <Text style={[styles.label, isImage ? imagelabelStyle : labelStyle]}>
            {avatar[0].name}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default IMAvatar;
