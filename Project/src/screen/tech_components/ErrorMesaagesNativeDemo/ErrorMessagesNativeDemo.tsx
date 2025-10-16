
import React, { useEffect, useState } from 'react';
import { BackHandler, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import HeaderComponent from '../../../utils/HeaderComponent/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorMessagesNative } from '../../../../dff_library/techical_components/components/ErrorMessagesNative/ErrorMessagesNative'
type Props = NativeStackScreenProps<RootStackParamList, 'ErrorMessagesNativeDemo'>;

const TimeOutManagementDemo = ({ navigation }: Props) => {

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
    const handleOnPress = async () => {
        const res = await ErrorMessagesNative()
        console.log("Messages from Native", res)
    }

    return (

        <View >
            <CustomStatusBar
                gradientColorsArray={[
                    colors.GradientOrangeStart,
                    colors.GradientOrangeEnd,
                ]}
            />

            <HeaderComponent navigation={navigation} title={"ErrorMessagesNativeDemo"} />
            <SafeAreaView>
                <ScrollView style={{ marginBottom: 250 }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 0 }}>

                        <TouchableOpacity onPress={handleOnPress} style={{
                            alignItems: 'center',
                            backgroundColor: colors.GradientOrangeEnd,
                            borderRadius: 10,
                            justifyContent: 'center',
                            margin: 20,
                            padding: 10,
                        }}>
                            <Text >
                                Get Error Messages
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default TimeOutManagementDemo