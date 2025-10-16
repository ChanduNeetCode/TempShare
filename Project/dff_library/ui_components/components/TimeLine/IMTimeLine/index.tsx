import React, { ReactElement, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { IMTimeLineProps } from './types';
import styles from './styles';

const IMTimeLine: React.FC<IMTimeLineProps> = ({
  content,

  isSeperator,

  BoxContent,
  Flowline,

  FlowlineColor,

  containerTextStyle,
  headerTextStyle,
  indexTextStyle,

  bulletStyle,
  imageContainerStyle,
  separatorStyle,

  numberOfObjects,

  sepearateLineElement,
}): ReactElement => {

  const [extradata, setExtradata] = useState<boolean>(false);

  useEffect(() => {
    setExtradata(!extradata);
  }, [content]);

  return (
    <FlatList
      data={content}
      keyExtractor={(item, index) => index.toString()}
      extraData={extradata}
      scrollEnabled={false}
      renderItem={({ index, item }) => {
        return (
          <View style={styles.container}>
            <View style={styles.childContainer}>
              {BoxContent.toLowerCase() === 'icon' && (
                <View style={[styles.iconBox, imageContainerStyle]}>
                  {item.icon}
                </View>
              )}
              {BoxContent.toLowerCase() === 'number' && (
                <View style={styles.number}>
                  <Text style={[styles.indexStyle,indexTextStyle]}>{index + 1}</Text>
                </View>
              )}
              {BoxContent.toLowerCase() === 'bullet' && (
                <View style={[styles.bullet, bulletStyle]} />
              )}
              {index + 1 < numberOfObjects &&
                (sepearateLineElement ? (
                  sepearateLineElement
                ) : (
                  <View
                    style={[
                      styles.flowline,
                      { borderColor: FlowlineColor, borderStyle: Flowline },
                      item.lineStyle
                    ]}></View>
                ))}
            </View>
            <View>
              <View>
                {item.header && (
                  <Text style={[styles.header, headerTextStyle]}>
                    {item.header}
                  </Text>
                )}
                <Text style={[styles.text, containerTextStyle]}>
                  {item.text}
                </Text>
              </View>
              {index + 1 < numberOfObjects && isSeperator && (
                <View style={[styles.separator, separatorStyle]}></View>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

export default IMTimeLine;
