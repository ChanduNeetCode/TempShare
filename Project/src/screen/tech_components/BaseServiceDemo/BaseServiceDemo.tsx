import React from 'react';
import { BackHandler, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import { useEffect } from 'react';
import { STRINGS } from './constants';
import styles from './styles';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMBaseServices } from '../../../../dff_library/techical_components/components/BaseServices';
import IMGlobalHeader from '../../../../dff_library/techical_components/components/GlobalHeaders/IMGlobalHeaders';
import { HttpMethods } from '../../../../dff_library/techical_components/components/BaseServices/IMBaseServices/types';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import { enviornment } from '../../../../dff_library/techical_components/components/EnviornmentVariable/IMEnviornmentVariable';
import {
  IMUserInfo,
  IMUserDetails,
} from '../../../../dff_library/techical_components/components/GlobalHeaders/IMGlobalHeaders/utils/IMUserInfo';

type Props = NativeStackScreenProps<RootStackParamList, 'BaseServiceDemo'>;

const baseURL = 'https://sit-imbl-dmz.icicibank.com/';
const url = 'product/cards/dcmanagecard/cards-dcmanagecard-list';

const BaseServiceDemo = ({ navigation }: Props) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  const documentpicker = async () => {
    try {
      const result: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: false,
      });

      if (result.length === 0) {
      }

      const files = result.map(file => file);
      const formData = new FormData();

      files.forEach((file, index) => {
        formData.append('file', {
          uri: file.uri,
          type: file.type,
          name: file.name,
        });
      });

      const url = 'file.io';

      const imageUploadResponse = await IMBaseServices({
        env: enviornment.SIT,
        method: HttpMethods.POST,
        url: url,
        data: formData,
        isMultiPart: true,
        isEncrypt: false,
      });
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else console.error('Error', error);
    }
  };

  const funcall = async () => {
    try {
      const userDetail = IMUserDetails.getInstance();
      const userInfo = IMUserInfo.getInstance();
      const getUserInfo = userInfo.getUserDetails();
      //const getLocationM=await userDetail.getLocationMap();
      const getUserDetail = userDetail.deviceID;
      const globalHeader = IMGlobalHeader.getInstance();
      const version = globalHeader.returnAppVersionBuild();
      ///console.log(getLocationM.latitude, '....userDetails');
      // const postData = {
      //   head: {
      //     requestDtTm: date,
      //   },
      //   body: {
      //     reltinNo: '102701004781',
      //   },
      // };
      // const response: any = await IMBaseServices({
      //   method: HttpMethods.POST,
      //   env: enviornment.DEV,
      //   headers: excluseiveOffersHeaders,
      //   data: postData,
      //   url: ENDPOINTS?.offersExclusively,
      // });

      const excluseiveOffersHeaders = {
        // 'content-type':'application/json',
        // 'authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJCSHdTbDVkUDVJTHRCWS1yQjZXdUJMRGxFbHR5X2ptaTBaLVN4UUZrMzRnIn0.eyJleHAiOjE3NDYxNjQxNzIsImlhdCI6MTc0NDAwNDE3MiwianRpIjoiYWJmYTVkMjMtZDMxMy00MjY0LTk3NGQtY2Y0NmIyZDcwY2I3IiwiaXNzIjoiaHR0cHM6Ly9jYW0tcm91dGUtZGltZmEtZmlwcy11YXQuYXBwcy5tZmFvY3Bjb3JwdWF0LmljaWNpYmFua2x0ZC5jb20vYXV0aC9yZWFsbXMvaWNpY2kiLCJzdWIiOiI5ODkzM2U3OC04ZjQ1LTQwZjYtODg3OC1iNTkyMTBlMDI3YzQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiIxNTAwMDAwMDAxMDAxOSIsInNlc3Npb25fc3RhdGUiOiJmOTRkOTQ3MC01NmVmLTQzYzktOWY1NS1kMDdlZmQ0MDFlYzkiLCJhY3IiOiIxIiwicmVzb3VyY2VfYWNjZXNzIjp7IjE1MDAwMDAwMDEwMDE5Ijp7InJvbGVzIjpbIjE1MDAwMDAwMDEwMDE5Il19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgY3VzdG9tX2hlYWRlcnMgcHJvZmlsZSIsInNpZCI6ImY5NGQ5NDcwLTU2ZWYtNDNjOS05ZjU1LWQwN2VmZDQwMWVjOSIsIkNBTV9NT0JJTEVfTk8iOiIrOTE3OTc3NzgyNjE2IiwidG9rZW4tdHlwZSI6IkZJTkFOQ0lBTCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJDQU1fVVNFUl9JRCI6IklDSS41ODQwNTExNjQuNTg0MDUxMTY0IiwiQ0FNX3VzZXJuYW1lIjoiNjc0ZDUyOGRiNmIxOTA0NzE3ZGQ2NTUxIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNjc0ZDUyOGRiNmIxOTA0NzE3ZGQ2NTUxIiwiZGV2aWNlLWlkIjoiMGQ1NmE5ZGNjYjc2YWE4ZiIsIkNBTV9FTUFJTF9JRCI6IlNIQUxJTkkuTEtPQEdNQUlMLkNPTSJ9.JExRLtUvVvBi335FvPl1EiM4dTjoi3-gAot1P-JssS2CfGD62FuWhdV56FdqnYUy6nWKnlcWTAOOPGHnl0oVq5lEPECxaaIOwziGFTj1Jt8rRZ6htJM0CDFaPH7T_thOKzBIDOfAX_RtNGMH6QSFgyiOIafJL3QAFLKC4WU1QrLv4z64z5q9khxW0k0hDqACDu_ejS9IEakVC22HbPAzaTahZMtp1ShjHzZpFIFU8WHpBrRJtgZGk3eP-CnKXSZPAij4Z7t0cdKGRwitAZRPjO6xq4k7bQxXJ09aYWsbE2KTg_ULcMyKeoKWVFAuaoOJM3D3UXrbx0lwWGwogoLZHg',
        // 'contenttype':'application/json',
        // 'device-id':'0d56a9dccb76aa8f',
        // 'mobilenumber':'+917977782616',
        // 'orgid':'ICI.584051164.584051164',
        // 'trcid':'user1-20230214165514-1',
        // 'userid':'584051164',
        // 'userid_type':'UID',
        // 'version':'22.4802',
        // 'x-apikey':'t19Mi6U6MLwkM1KhG2Uq0czwyAA56BTYTzIhx131IbOMItaZ',
        // 'ostype':'android',
        'user-segment':'N',
      //  ' Cookie':'HttpOnly; 6a4a7a59903ff1ad2545c6f5dc71ba86=27e1356a4f2367b88d649f31ab6a63d2; 9333f6c6ea66675e657d3a0b79b4106c=52c7cd68eacfffc005b1fe2b559237cf',
      }

      const postData = {
        "head": {
            "requestDtTm": "2025-07-07 11:10:41.174"
        },
        "body": {
        }
    }
      
      const response1: any = await IMBaseServices({
        method: HttpMethods.POST,
        env: enviornment.SIT,
        // headers: excluseiveOffersHeaders,
        data: postData,
        url: 'product/loan/track/loan-track-allacctlistdtls-fetch',
      });
      // const response: any = await IMBaseServices({
      //   method: HttpMethods.POST,
      //   env: enviornment.DEV,
      //   headers: excluseiveOffersHeaders,
      //   isEncrypt:false,
      //   data: postData,
      //   url: 'product/loan/track/loan-track-lopofr-fetch',
      // });
      console.log(JSON.stringify(response1),"...tes12345");
      // if (response?.resData?.head?.statusCd == 100) {
      //   console.log(response?.resData, '..../response demo');
      // } else {
      //   console.log('error demo...', response);
      // }
    } catch (err) {
      console.log(err, '..../exception base service demo...');
    }
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
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_title} />

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: colors.PrimaryOrange100 },
        ]}
        onPress={() => funcall()}>
        <Text style={styles.buttonTextStyle}>Api Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: colors.PrimaryOrange100 },
        ]}
        onPress={() => documentpicker()}>
        <Text style={styles.buttonTextStyle}>Image Upload</Text>
      </TouchableOpacity>
    </>
  );
};

export default BaseServiceDemo;