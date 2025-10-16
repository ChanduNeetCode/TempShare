import React, { useEffect } from 'react';
import { BackHandler, View, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMAnalyticalManagerAndroid,initAnalyticsAndroid } from '../../../../dff_library/techical_components/components/AnalyticalInvokerAndroid/IMAnalyticalInvokerAndroid';
import { AnalyticsManagerTitle } from './AnalyticalEnumData';
import styles from './styles';
import { AnalyticsEnvironment } from '../../../../dff_library/techical_components/components/AnalyticalManagerIOS/IMAnalyticalManagerIOS/types';

type Props = NativeStackScreenProps<RootStackParamList, 'AnalyticalInvokerDemo'>;

const AnalyticalInvokerDemo = ({ navigation }: Props) => {


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
  const cta_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/cta.json');
  const add_favourite_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/add_favourite.json');
  const alerts_warning_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/alerts_warning.json');
  const api_error_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/api_error.json');
  const form_adonment_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/form_abandonment.json');
  const form_intermediate_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/form_intermediate.json');
  const form_start_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/form_start.json');
  const form_submission_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/form_submission.json');
  const form_submission_failure_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/form_submission_failure.json');
  const form_field_error_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/form_field_error.json');
  const internal_search_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/internal_search.json');
  const page_or_screen_Load_json = require ('../AnalyticalmanagerIOSDemo/AnalyticsData/page_or_screen_load.json');
  const banner_tracking_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/banner_tracking.json');
  const null_search_json = require('../AnalyticalmanagerIOSDemo/AnalyticsData/null_search.json');
  const file_download = require('../AnalyticalmanagerIOSDemo/AnalyticsData/file_download.json');
  const offers = require('../AnalyticalmanagerIOSDemo/AnalyticsData/offers.json');
  
  const handleCtaOnPress = (title: String) => {
    initAnalyticsAndroid(AnalyticsEnvironment.sit,'0.28.0')
    IMAnalyticalManagerAndroid ({
      eventTitle: title,
      data: cta_json
    })
  }

  const handleAddFavouriteOnPress = (title: String) => {
    IMAnalyticalManagerAndroid ({
      eventTitle: title,
      data: add_favourite_json
    })
  }
  const handleAlertsWarningOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: alerts_warning_json
    })
  }
 const handleApiErrorOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: api_error_json
    })
  }
  const handleFormAbandonmentOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: form_adonment_json
    })
  }
  const handleFormIntermediateOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: form_intermediate_json
    })
  }
  const handleFormStartOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: form_start_json
    })
  }
  const handleFormSubmissionOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: form_submission_json
    })
  }
  const handleFormSubmissionFailureOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: form_submission_failure_json
    })
  }
  const handleFormFieldErrorOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: form_field_error_json
    })
  }
  const handleInternalSearchOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: internal_search_json
    })
  }
  const handlePageOrScreenLoadOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: page_or_screen_Load_json
    })
  }
  const handleBannerTrackingOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: banner_tracking_json
    })
  }
   const handleNullSearchOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: null_search_json
    })
  }
  const handleFileDownloadOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: file_download
    })
  }
  const handleOffersOnPress = (title: String) => {
    IMAnalyticalManagerAndroid({
      eventTitle: title,
      data: offers
    })
  }
  
  return (

    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={'AnalyticalInvoker'} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView >
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleAddFavouriteOnPress(AnalyticsManagerTitle.AddFavoutiteTitle)}
          >
            <Text style={styles.button}>AddFavourite</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleCtaOnPress(AnalyticsManagerTitle.CtaTitle)}
          >
            <Text style={styles.button}>CTA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleAlertsWarningOnPress(AnalyticsManagerTitle.AlertsWarningTitle)}

          >
            <Text style={styles.button}>Alerts - Warning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleApiErrorOnPress(AnalyticsManagerTitle.APIErrorTitle)}

          >
            <Text style={styles.button}>API - Error</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleFormAbandonmentOnPress(AnalyticsManagerTitle.FormAbandonmentTitle)}

          >
            <Text style={styles.button}>Form - Abandonment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleFormIntermediateOnPress(AnalyticsManagerTitle.FormIntermediateTitle)}

          >
            <Text style={styles.button}>Form - Intermediate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleFormStartOnPress(AnalyticsManagerTitle.FormStartTitle)}

          >
            <Text style={styles.button}>Form - Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleFormSubmissionOnPress(AnalyticsManagerTitle.FormSubmissionTitle)}

          >
            <Text style={styles.button}>Form - Submission</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleFormSubmissionFailureOnPress(AnalyticsManagerTitle.FormSubmissionFailureTitle)}

          >
            <Text style={styles.button}>Form - Submission - Failure</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleFormFieldErrorOnPress(AnalyticsManagerTitle.FormFieldErrorTitle)}

          >
            <Text style={styles.button}>Form - Field - Error</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleInternalSearchOnPress(AnalyticsManagerTitle.InternalSearchTitle)}

          >
            <Text style={styles.button}>Internal - Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handlePageOrScreenLoadOnPress(AnalyticsManagerTitle.PageOrScreenLoadTitle)} >
            <Text style={styles.button}>Page - Or - Screen - Load</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleBannerTrackingOnPress(AnalyticsManagerTitle.BannerTrackingTitle)}

          >
            <Text style={styles.button}>Banner - Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleNullSearchOnPress(AnalyticsManagerTitle.NullSearchTitle)}

          >
            <Text style={styles.button}>Null - Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleFileDownloadOnPress(AnalyticsManagerTitle.FileDownloadTitle)}

          >
            <Text style={styles.button}>File- Download</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => handleOffersOnPress(AnalyticsManagerTitle.OffersTitle)}

          >
            <Text style={styles.button}>Offers</Text>
          </TouchableOpacity>
        </ScrollView>


      </SafeAreaView>
    </>
  );
};

export default AnalyticalInvokerDemo;
