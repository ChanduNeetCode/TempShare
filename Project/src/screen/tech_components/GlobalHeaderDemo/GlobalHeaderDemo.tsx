import React, { useEffect } from 'react';
import { Alert, BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import IMGlobalHeader from '../../../../dff_library/techical_components/components/GlobalHeaders/IMGlobalHeaders';
import {
  IMUserInfo,
  IMUserDetails,
} from '../../../../dff_library/techical_components/components/GlobalHeaders/IMGlobalHeaders/utils/IMUserInfo';
import { STRINGS } from '../GlobalHeaderDemo/constants';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'GlobalHeaderDemo'>;

const GlobalHeaderDemo: React.FC<Props> = ({ navigation }) => {
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

  const updateUserDetails = async () => {
    const userDetail = IMUserDetails.getInstance();
    const userInfo = IMUserInfo.getInstance();
    let start = await  userDetail.init({
      deviceID:'162388ab57304cb8',
  mobileNumber:'+918655319844' ,
  userID:'584010961',
  userType:'etb' ,
  loginState:'LI'
    })
    console.log('the start',start)
    // userDetail.init(
    //   '0d56a9dccb76aa8f',
    //   '+917977782616',
    //   '584051164',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    //   '',
    // );
    userInfo.setUserDetails(userDetail);
    const globalHeader = IMGlobalHeader.getInstance();
    globalHeader.setSecret('RriKVAggxZ7rq8NL6TO31iN5hypAstI=');
    globalHeader.setAppVersionBuild('10.0.0.1');
    globalHeader.setFT42('Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJCSHdTbDVkUDVJTHRCWS1yQjZXdUJMRGxFbHR5X2ptaTBaLVN4UUZrMzRnIn0.eyJleHAiOjE3NTM3ODUwMDgsImlhdCI6MTc1MTYyNTAwOCwianRpIjoiMDBlZjY5ZjUtYWJkOC00ZDAyLTkyZjgtNjg1MmQ5OThhYTZhIiwiaXNzIjoiaHR0cHM6Ly9jYW0tcm91dGUtZGltZmEtZmlwcy11YXQuYXBwcy5tZmFvY3Bjb3JwdWF0LmljaWNpYmFua2x0ZC5jb20vYXV0aC9yZWFsbXMvaWNpY2kiLCJzdWIiOiI2ZDk0MmRhMy03MjNmLTRiMmUtYmRmMy1lMGQ2MWViZGVjNTYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiIxNTAwMDAwMDAxMDAxOSIsInNlc3Npb25fc3RhdGUiOiI1Y2FmMmJhZS1jMzcxLTQwNmEtOTcwMi0zYTY0ZTMxMzU0NWYiLCJhY3IiOiIxIiwicmVzb3VyY2VfYWNjZXNzIjp7IjE1MDAwMDAwMDEwMDE5Ijp7InJvbGVzIjpbIjE1MDAwMDAwMDEwMDE5Il19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgY3VzdG9tX2hlYWRlcnMgcHJvZmlsZSIsInNpZCI6IjVjYWYyYmFlLWMzNzEtNDA2YS05NzAyLTNhNjRlMzEzNTQ1ZiIsIkNBTV9NT0JJTEVfTk8iOiIrOTE4NjU1MzE5ODQ0IiwidG9rZW4tdHlwZSI6IkZJTkFOQ0lBTCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJDQU1fVVNFUl9JRCI6IklDSS41ODQwMTA5NjEuNTg0MDEwOTYxIiwiQ0FNX3VzZXJuYW1lIjoiNjgwNzNiYmNjN2YzZDQ1ZDhmMjdmYjY0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNjgwNzNiYmNjN2YzZDQ1ZDhmMjdmYjY0IiwiZGV2aWNlLWlkIjoiMTYyMzg4YWI1NzMwNGNiOCIsIkNBTV9FTUFJTF9JRCI6IlNIQUxJTkkuTEtPQEdNQUlMLkNPTSJ9.b6XFeUVc1OX_ox_-kLnjVFYTdcGxmK10mifaYoo9sc7TnFiMXVwcYWA2FlFwV4WubTKxgVQbSTdRvDnog0gyjRJR2AHvUGaGdz0oOhZ6I73xxbeBW4UYdhhz4NZuFgUmdzWvzDB5FsgGOMPQoWT7mWbsQBgxx1tmRhNM_ISmykHGfWCI_TMYEsp8Jq0JX1dEHkZev2FqzR6Hz3eEsndXdZ6_DoiUd8YEsSUXvFF5nJ2R1lb_d9J_gghbfHbYZabkdmhG6cexUj_uCEm3nQilcNoJFuGaj9AGkj1ezW1TjcPhSWE0Jgb5jScNSdZcJOD4UhDKX1dBgJq3s04nPWlZsg');
    globalHeader.setOrgId('ICI.584010961.584010961');
    globalHeader.setTraceID('user1-20221103141009-1');
    globalHeader.setApiKey('t19Mi6U6MLwkM1KhG2Uq0czwyAA56BTYTzIhx131IbOMItaZ');
    globalHeader.setOSType('android');
  };

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent
        navigation={navigation}
        title={STRINGS.str_GlobalHeader}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>{STRINGS.str_IMGlobal}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            updateUserDetails();
          }}>
          <Text style={styles.buttonText}>{STRINGS.str_updateUserDetails}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GlobalHeaderDemo;
 