import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../dff_library/ui_components/atoms';
//import {IMNavigationBar} from '@dassubhra2/github-package-navigationbar';
//import IMNavigationBar from '../../dff_library/ui_components/components/NavigationBar/IMNavigationBar';

//const DashboardScreen = () => {
const gradientColor = ['#EF8C24', '#F06837'];
const DashboardScreen: React.FC = () => {
  const navigation = useNavigation();

  const textStyle: TextStyle = {
    color: 'white',
    fontSize: 20,
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    width: 220,
    marginRight: 16,
    minHeight: 40,
    fontWeight: '700',
    textAlignVertical: 'top',
  };

  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}>
      <View style={styles.container}>
        <Text style={styles.text}> DashboardScreen </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default DashboardScreen;
