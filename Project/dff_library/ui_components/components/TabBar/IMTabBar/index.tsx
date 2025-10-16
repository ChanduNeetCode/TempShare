import React, { useState, FC } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { TabView, TabBar, TabBarIndicator } from 'react-native-tab-view';

import style from './styles';
import typography from '../../../atoms/typography';
import { type IMTabBarProps } from './types';

const IMTabBar: FC<IMTabBarProps> = props => {
  const styles = style();
  const {
    renderScene,

    routes,

    containerStyle,
    indicatorStyle,
    scrollableTabStyle,
    tabStyle,
    tabImageStyle,
    tabViewStyle,

    lableStyle,
    width,

    onTabPress,

    pressColor
  } = props;

  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  return (
    <View style={[styles.container, containerStyle]}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            pressColor={pressColor}
            {...props}
            tabStyle={[
              styles.tabStyle, tabStyle,
              routes.length > 3 && [styles.scrollableTabStyle, scrollableTabStyle]
            ]}
            scrollEnabled={routes.length > 3 ? true : false}
            onTabPress={({ route, preventDefault }) => {
              if (onTabPress) onTabPress(route)
              if (route.enabled === false) {
                preventDefault();

              }
            }}
            renderIndicator={indicatorProps => {
              const widt = width ? width : indicatorProps.getTabWidth(index) * 0.75;
              return <TabBarIndicator {...indicatorProps} width={widt} />;
            }}
            indicatorStyle={[styles.indicatorStyle,indicatorStyle,]}
            renderIcon={({ route, focused }) => (
              <View>
                {route.tabImage || route.tabDisabledImage ? (
                  <View
                    style={[styles.tabImageStyle, tabImageStyle]}>
                    {focused ? route.tabImage : route.tabDisabledImage ? route.tabDisabledImage : route.tabImage}
                  </View>
                ) : null}
              </View>
            )}
            renderLabel={({ route, focused }) => {
              return (
                <Text
                  style={
                    route.enabled
                      ? [
                        [styles.lableStyle, typography.SubTitleRegular1, lableStyle],
                        [
                          focused && styles.activeLableStyle,
                          typography.SubTitleBold1,
                        ],
                      ]
                      : styles.disableLableStyle
                  }>
                  {route.title}
                </Text>
              );
            }}
            style={[styles.tabView, tabViewStyle]}
          />
        )}
      />
    </View>
  );
};

export default IMTabBar;
