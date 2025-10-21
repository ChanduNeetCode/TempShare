import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { ProcessLoaders } from '../../../atoms/icons';
import { ProcessLoadersProps } from './types';
import useStyles from './styles';

const IMProcessLoader: FC<ProcessLoadersProps> = props => {
  const {
    parentViewStyle,

    gifStyle,

    source = ProcessLoaders,

    title,
    subTitle,

    titleStyle,
    subTitleStyle,

    titleContainer,
    subTitleContainer,
  } = props;
  const styles = useStyles();
  return (
    <View style={[styles.parentView, parentViewStyle]}>
      <Image style={[styles.gif, gifStyle]} source={source} />
      {titleContainer ? (
        titleContainer
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
      {subTitleContainer ? (
        subTitleContainer
      ) : (
        <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
      )}
    </View>
  );
};
export default IMProcessLoader;
