import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../utils/HeaderComponent';
import {IMHtmlParse} from '../../../../dff_library/techical_components/components/HtmlParse/'
import { HtmlPassTypes } from '../../../../dff_library/techical_components/components/HtmlParse/IMHtmlParse/types';

import { STRINGS } from './constants';
import styles from './styles';


type Props = NativeStackScreenProps<RootStackParamList, 'HtmlParseDemo'>;

const HtmlParseDemo = ({ navigation }: Props) => {

    const onPressHtmlApiCall = async () => {

        const method = "GET"
        const url = 'https://www.icicibank.com/blogs/saving-account/insta-save-account'
    
        const res = await IMHtmlParse(
          {
            method: method,
            url: url,
            type: HtmlPassTypes.META,
            divclassName:['title']
          }
        )
         console.log("res++++++", res);
      };

    return (
        <View>
            <CustomStatusBar
                gradientColorsArray={[
                    colors.GradientOrangeStart,
                    colors.GradientOrangeEnd,
                ]}
            />
            <HeaderComponent navigation={navigation} title={STRINGS.str_GlobalHeader} />


            <TouchableOpacity
                onPress={onPressHtmlApiCall}
                style={[
                    styles.buttonStyle,
                    { backgroundColor: colors.PrimaryOrange100 },
                  ]}>
                <Text style={styles.buttonTextStyle}>Test Html Parse</Text>
            </TouchableOpacity>
        </View>

    );



};
export default HtmlParseDemo;