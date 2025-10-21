import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, BackHandler } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { IMWebView } from '../../../../dff_library/techical_components/components/WebView/index';

type Props = NativeStackScreenProps<RootStackParamList, 'WebViewDemo'>;
const WebViewDemo: React.FC<Props> = ({ navigation }) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <IMWebView sourceUri={'https://www.example.com'} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default WebViewDemo;
