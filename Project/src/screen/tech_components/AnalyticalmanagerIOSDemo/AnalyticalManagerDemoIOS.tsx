
import React, { useEffect } from 'react';
import { BackHandler, View, Text, TouchableOpacity,ViewStyle } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';

import { RootStackParamList } from '../../../routes/RootStackParams';
import HeaderComponent from '../../../utils/HeaderComponent/index';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMAnalyticalManagerIOS,initAnalyticsIOS } from '../../../../dff_library/techical_components/components/AnalyticalManagerIOS/IMAnalyticalManagerIOS'
import styles from './styles';
import { AnalyticsEnvironment } from '../../../../dff_library/techical_components/components/AnalyticalManagerIOS/IMAnalyticalManagerIOS/types';

type Props = NativeStackScreenProps<RootStackParamList, 'AnalyticalInvokerIOSDemo'>;

enum AnalyticsManagerTitle {
  CtaTitle = "CTA",
  AddFavoutiteTitle = "Add - Favourite",
  AlertsWarningTitle = "Alerts - Warning",
  APIErrorTitle = "API - Error",
  FormAbandonmentTitle = "Form - Abandonment",
  FormIntermediateTitle = "Form - Intermediate",
  FormStartTitle = "Form - Start",
  FormSubmissionTitle = "Form - Submission",
  FormSubmissionFailureTitle = "Form - Submission - Failure",
  FormFieldErrorTitle = "Form - Field - Error",
  InternalSearchTitle = "Internal - Search",
  PageOrScreenLoadTitle = "Page - Or - Screen - Load",
  BannerTrackingTitle = "Banner - Tracking",
  NullSearchTitle = "Null - Search",
  SearchResultClickTitle = "Search - Result - Click - Tracking",
  FormFailOrPendingTitle = "Form - Fail - Or - Pending",
  FileDownloadTitle = "File - Download",
  OffersTitle = "Offers"
}


const AnalyticalInvokerIOSDemo = ({ navigation }: Props) => {

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
  const cta_json = require('./AnalyticsData/cta.json');
  const add_favourite_json = require('./AnalyticsData/add_favourite.json');
  const alerts_warning_json = require('./AnalyticsData/alerts_warning.json');
  const api_error_json = require('./AnalyticsData/api_error.json');
  const form_adonment_json = require('./AnalyticsData/form_abandonment.json');
  const form_intermediate_json = require('./AnalyticsData/form_intermediate.json');
  const form_start_json = require('./AnalyticsData/form_start.json');
  const form_submission_json = require('./AnalyticsData/form_submission.json');
  const form_submission_failure_json = require('./AnalyticsData/form_submission_failure.json');
  const form_field_error_json = require('./AnalyticsData/form_field_error.json');
  const internal_search_json = require('./AnalyticsData/internal_search.json');
  const page_or_screenLoad_json = require ('./AnalyticsData/page_or_screen_load.json');
  const banner_tracking_json = require('./AnalyticsData/banner_tracking.json');
  const null_search_json = require('./AnalyticsData/null_search.json');
  const search_result_click_json = require('./AnalyticsData/search_result_click_tracking.json');
  const form_fail_or_pending = require('./AnalyticsData/form_fail_or_pending.json');
  const file_download = require('./AnalyticsData/file_download.json');
  const offers = require('./AnalyticsData/offers.json')

  const handleCtaOnPress = (title: String) => {
    initAnalyticsIOS(AnalyticsEnvironment.debug)
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: cta_json
    })
  }

  const handleAddFavouriteOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: add_favourite_json
    })
  }
  const handleAlertsWarningOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: alerts_warning_json
    })
  }
 const handleApiErrorOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: api_error_json
    })
  }
  const handleFormAbandonmentOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: form_adonment_json
    })
  }
  const handleFormIntermediateOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: form_intermediate_json
    })
  }
  const handleFormStartOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: form_start_json
    })
  }
  const handleFormSubmissionOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: form_submission_json
    })
  }
  const handleFormSubmissionFailureOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: form_submission_failure_json
    })
  }
  const handleFormFieldErrorOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: form_field_error_json
    })
  }
  const handleInternalSearchOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: internal_search_json
    })
  }
  const handlePageOrScreenLoadOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: page_or_screenLoad_json
    })
  }
  const handleBannerTrackingOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: banner_tracking_json
    })
  }
   const handleNullSearchOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: null_search_json
    })
  }
  const handleSearchResultClickOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: search_result_click_json
    })
  }
  const handleFormFailOrPendingOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: form_fail_or_pending
    })
  }
  const handleFileDownloadOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: file_download
    })
  }
  const handleOffersOnPress = (title: String) => {
    IMAnalyticalManagerIOS({
      eventTitle: title,
      data: offers
    })
  }
  
  return (
    <View >
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />

      <HeaderComponent navigation={navigation} title={"Analytical Manager"} />

      <ScrollView style={styles.container}>
        <View style={styles.viewContainer}>

          <TouchableOpacity onPress={() => handleCtaOnPress(AnalyticsManagerTitle.CtaTitle)} style={styles.button}>
            <Text style={styles.text}>
              CTA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAddFavouriteOnPress(AnalyticsManagerTitle.AddFavoutiteTitle)} style={styles.button}>
            <Text style={styles.text}>
              Add - Favourite
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAlertsWarningOnPress(AnalyticsManagerTitle.AlertsWarningTitle)} style={styles.button}>
            <Text style={styles.text}>
              Alerts - Warning
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleApiErrorOnPress(AnalyticsManagerTitle.APIErrorTitle)} style={styles.button}>
            <Text style={styles.text}>
              API - Error
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormAbandonmentOnPress(AnalyticsManagerTitle.FormAbandonmentTitle)} style={styles.button}>
            <Text style={styles.text}>
              Form - Abandonment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormIntermediateOnPress(AnalyticsManagerTitle.FormIntermediateTitle)} style={styles.button}>
            <Text style={styles.text} >
              Form - Intermediate
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormStartOnPress(AnalyticsManagerTitle.FormStartTitle)} style={styles.button}>
            <Text style={styles.text}>
              Form - Start
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormSubmissionOnPress(AnalyticsManagerTitle.FormSubmissionTitle)} style={styles.button}>
            <Text style={styles.text}>
              Form - Submission
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormSubmissionFailureOnPress(AnalyticsManagerTitle.FormSubmissionFailureTitle)} style={styles.button}>
            <Text style={styles.text}>
              Form - Submission - Failure
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormFieldErrorOnPress(AnalyticsManagerTitle.FormFieldErrorTitle)} style={styles.button}>
            <Text style={styles.text}>
              From - Field - Error
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInternalSearchOnPress(AnalyticsManagerTitle.InternalSearchTitle)} style={styles.button}>
            <Text style={styles.text}>
              Internal - Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePageOrScreenLoadOnPress(AnalyticsManagerTitle.PageOrScreenLoadTitle)} style={styles.button}>
            <Text style={styles.text}>
              Page - Or - Screen - Load
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBannerTrackingOnPress(AnalyticsManagerTitle.BannerTrackingTitle)} style={styles.button}>
            <Text style={styles.text}>
              Banner - Tracking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNullSearchOnPress(AnalyticsManagerTitle.NullSearchTitle)} style={styles.button}>
            <Text style={styles.text}>
              Null - Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSearchResultClickOnPress(AnalyticsManagerTitle.SearchResultClickTitle)} style={styles.button}>
            <Text style={styles.text}>
              Search - Result - Click - Tracking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormFailOrPendingOnPress(AnalyticsManagerTitle.FormFailOrPendingTitle)} style={styles.button}>
            <Text style={styles.text}>
              Form - Fail - Or - Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFileDownloadOnPress(AnalyticsManagerTitle.FileDownloadTitle)} style={styles.button}>
            <Text style={styles.text}>
              File - Download
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOffersOnPress(AnalyticsManagerTitle.OffersTitle)} style={styles.button}>
            <Text style={styles.text}>
              Offers
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
export default AnalyticalInvokerIOSDemo












