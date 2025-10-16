import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
//import IMNavigationBar from '../../dff_library/ui_components/components/NavigationBar/IMNavigationBar';
import {
  ICComponentTopNav,
  ICComponentTopMenuNav,
  ICGeneralNotifyAltRed,
} from '../../../../dff_library/ui_components/atoms/icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../../dff_library/ui_components/atoms';
//import { Text } from 'react-native-reanimated/lib/typescript/Animated';

const SampleScreenOne: React.FC = () => {
  const navigation = useNavigation();
  const gradientColor = ['#EF8C24', '#F06837'];

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handlePressActionButton = () => {
  };
  const handlePressMenuButton = () => {
  };

  const headerLeftProps = {
    onPress: handleBackButton,
    imageSource: <ICGeneralNotifyAltRed />,
    //  style: headerLeftBtnStyle
  };

  const headerActionProps = {
    onPress: handlePressActionButton,
    imageSource: <ICComponentTopNav />,
    //  style: headerActionBtnStyle
  };
  const headerMenuProps = {
    onPress: handlePressMenuButton,
    imageSource: <ICComponentTopMenuNav />,
    //  style: headerMenuBtnStyle
  };
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}>
      <Text style={styles.text}>Hi This is Profile Tab</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
export default SampleScreenOne;
