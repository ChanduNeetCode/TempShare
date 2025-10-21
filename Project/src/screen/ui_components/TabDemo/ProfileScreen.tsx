import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import typography from '../../../../dff_library/ui_components/atoms/typography';
import { colors } from '../../../../dff_library/ui_components/atoms';

//const ProfileScreen = () => {

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}>
      <View style={styles.container}>
        <Text style={[typography.ButtonLarge, styles.text]}> Sample Screen One </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    margin: 20,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 200,
    marginBottom: 20,
    color:colors.NeutralGrey120
  },
});
export default ProfileScreen;
