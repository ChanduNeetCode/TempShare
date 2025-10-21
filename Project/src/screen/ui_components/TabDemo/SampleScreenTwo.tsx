import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../../../../dff_library/ui_components/atoms';

const SampleScreenTwo = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}>
      <View style={styles.container}>
        <Text style={{color:colors.NeutralGrey120}}> SampleScreenOne </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
});
export default SampleScreenTwo;
