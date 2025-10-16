
import React, { useEffect, } from 'react';
import { BackHandler, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';


import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { dynatraceScreenNameEvent, dynatraceErrorLogEvent, dynatraceNPCILogEvent, dynatraceButtonClickEvent, dynatraceEnterActionEvent, dynatraceModifyActionEvent, dynatraceDrawerEvent } from '../../../../dff_library/techical_components/components/Dynatrace'
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'DynatraceDemo'>;

const DynatraceDemo = ({ navigation }: Props) => {

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const ScreenNameEventFun = async () => {
    await dynatraceScreenNameEvent("DynatraceDemo")
  }

  const ErrorLogEventFun = async () => {
    await dynatraceErrorLogEvent("Error ErrorLogEventFun",100)
  }

  const NPCILogEventFun = async () => {
    await dynatraceNPCILogEvent("Error NPCILogEventFun",100)
  }
  const ButtonClickEventFun = async () => {
    await dynatraceButtonClickEvent("ButtonClickEventFun","onClicked")
  }
  const EnterActionEventFun = async () => {
    await dynatraceEnterActionEvent("Event-Name-->EnterActionEventFun")
  }
  const ModifyActionEventFun = async () => {
    await dynatraceModifyActionEvent("Event-Name-->ModifyActionEventFun")
  }
  const DrawerEventFun = async () => {
    await dynatraceDrawerEvent("Event-Name-->DrawerEventFun")
  }

  return (
    <View >
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent navigation={navigation} title={"Dynatrace"} />
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 100 }}>
          <View style={{ margin: 16 }}>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: colors.PrimaryOrange100 },
              ]}
              onPress={() => ScreenNameEventFun()}>
              <Text style={styles.buttonTextStyle} >
                ScreenName Event
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: colors.PrimaryOrange100 },
              ]}
              onPress={() => ErrorLogEventFun()}>
              <Text style={styles.buttonTextStyle} >
                ErrorLog Event
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: colors.PrimaryOrange100 },
              ]}
              onPress={() => NPCILogEventFun()}>
              <Text style={styles.buttonTextStyle} >
                NPCILog Event
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: colors.PrimaryOrange100 },
              ]}
              onPress={() => ButtonClickEventFun()}>
              <Text style={styles.buttonTextStyle} >
                ButtonClick Event
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: colors.PrimaryOrange100 },
              ]}
              onPress={() => EnterActionEventFun()}>
              <Text style={styles.buttonTextStyle} >
                EnterAction Event
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: colors.PrimaryOrange100 },
              ]}
              onPress={() => ModifyActionEventFun()}>
              <Text style={styles.buttonTextStyle} >
                ModifyAction Event
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonStyle,
                { backgroundColor: colors.PrimaryOrange100 },
              ]}
              onPress={() => DrawerEventFun()}>
              <Text style={styles.buttonTextStyle} >
                Drawer Event
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default DynatraceDemo
