import { NativeModules } from 'react-native';

import { AnalyticsManagerTitle } from './AnalyticalEnumData';
import {AnalyticsEnvironment} from '../../AnalyticalManagerIOS/IMAnalyticalManagerIOS/types'

const { IMAnalyticsManager } = NativeModules;
let env:AnalyticsEnvironment, ver:string;

export const initAnalyticsAndroid = (environment:AnalyticsEnvironment,version:string)=>{
  env = environment;
  ver = version;
  IMAnalyticsManager.initAnalytics(environment,version)
}

export const IMAnalyticalManagerAndroid = (props: any) => {
  console.log("ENVIRONMENT",env,ver)
  initAnalyticsAndroid(env, ver);

  const { eventTitle, data } = props;
  IMAnalyticsManager.setUserDetails(
    data?._icicibank?.userInfo,
    data?._icicibank?.Identities,
  );

  if (eventTitle == AnalyticsManagerTitle.CtaTitle) {
    const info = {
      ctaInfo: data?._icicibank?.ctaInfo,
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      formInfo: data?._icicibank?.formInfo,
      transactionInfo: data?._icicibank?.transactionInfo,
      searchInfo: data?._icicibank?.searchInfo,
      offerInfo: data?._icicibank?.offerInfo,
      webInfo: data?.web?.webInteraction,
      offersClicked: data?._icicibank?.offersClicked || {
        "offers": "na",
        "hasOffers":0,
        "offerID" : "na"
    }
    };
    IMAnalyticsManager.handleCTAClick(
      info.ctaInfo ?? null,
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.formInfo ?? null,
      info.transactionInfo ?? null,
      info.searchInfo ?? null,
      info.offerInfo ?? null,
      info.webInfo ?? null,
      info.offersClicked ?? null
    );
  } else if (eventTitle == AnalyticsManagerTitle.AddFavoutiteTitle) {
    const info = {
      ctaInfo: data?._icicibank?.ctaInfo,
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleAddFavouriteClick(
     info.ctaInfo ?? null,
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.AlertsWarningTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      formInfo: data?._icicibank?.formInfo,
      productInfo: data?._icicibank?.productInfo,
      alerInfo: data?._icicibank?.alertInfo,
      pageInfo: data?._icicibank?.pageInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleAlertsWarningClick(
      info.pageNames ?? null,
      info.formInfo ?? null,
      info.productInfo ?? null,
      info.alerInfo?? null,
      info.pageInfo?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.APIErrorTitle) {
    const info = {
      errorInfo: data?._icicibank?.errorInfo,
      productInfo: data?._icicibank?.productInfo,
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      formInfo: data?._icicibank?.formInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleApiErrorClick(
      info.errorInfo ?? null,
      info.productInfo ?? null,
      info.pageInfo ?? null,
      info.pageNames ?? null,
      info.formInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.FormAbandonmentTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      formInfo: data?._icicibank?.formInfo,
      productInfo: data?._icicibank?.productInfo,
      pageInfo: data?._icicibank?.pageInfo,
      transactionInfo: data?._icicibank?.transactionInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleFormAbandonmentClick(
      info.pageNames ?? null,
      info.formInfo ?? null,
      info.productInfo ?? null,
      info.pageInfo ?? null,
      info.transactionInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.FormIntermediateTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      formInfo: data?._icicibank?.formInfo,
      productInfo: data?._icicibank?.productInfo,
      pageInfo: data?._icicibank?.pageInfo,
      transactionInfo: data?._icicibank?.transactionInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleFormIntermediateClick(
      info.pageNames ?? null,
      info.formInfo ?? null,
      info.pageInfo ?? null,
      info.productInfo ?? null,
      info.transactionInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.FormStartTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      formInfo: data?._icicibank?.formInfo,
      productInfo: data?._icicibank?.productInfo,
      pageInfo: data?._icicibank?.pageInfo,
      transactionInfo: data?._icicibank?.transactionInfo,
      webInfo: data?.web?.webPageDetails,
    };
    IMAnalyticsManager.handleFormStartClick(
      info.pageNames ?? null,
      info.formInfo ?? null,
      info.pageInfo ?? null,
      info.productInfo ?? null,
      info.transactionInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.FormSubmissionTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      formInfo: data?._icicibank?.formInfo,
      productInfo: data?._icicibank?.productInfo,
      pageInfo: data?._icicibank?.pageInfo,
      transactionInfo: data?._icicibank?.transactionInfo,
      webInfo: data?.web?.webPageDetails,
    };
    IMAnalyticsManager.handleFormSubmissionClick(
      info.formInfo ?? null,
      info.pageInfo ?? null,
      info.pageNames ?? null,
      info.productInfo ?? null,
      info.transactionInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.FormSubmissionFailureTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      formInfo: data?._icicibank?.formInfo,
      productInfo: data?._icicibank?.productInfo,
      pageInfo: data?._icicibank?.pageInfo,
      transactionInfo: data?._icicibank?.transactionInfo,
      webInfo: data?.web?.webPageDetails,
      errorInfo: data?._icicibank?.errorInfo,
    };
    IMAnalyticsManager.handleFormSubmissionFailureClick(
      info.formInfo ?? null,
      info.pageInfo ?? null,
      info.pageNames ?? null,
      info.productInfo ?? null,
      info.transactionInfo ?? null,
      info.errorInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.FormFieldErrorTitle) {
    const info = {
      errorInfo: data?._icicibank?.errorInfo,
      productInfo: data?._icicibank?.productInfo,
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      formInfo: data?._icicibank?.formInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleFormFieldErrorClick(
      info.errorInfo ?? null,
      info.productInfo ?? null,
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.formInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.InternalSearchTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      searchInfo: data?._icicibank?.searchInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleInternalSearchClick(
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.searchInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.PageOrScreenLoadTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      alertInfo: data?._icicibank?.alertInfo,
      errorInfo: data?._icicibank?.errorInfo,
      productInfo: data?._icicibank?.productInfo,
      webInfo: data?.web?.webPageDetails,
      formInfo: data?._icicibank?.formInfo,
      offersViewed:  data?._icicibank?.offersViewed || {
        "offers":"na",
        "hasOffers":0}
    };
    IMAnalyticsManager.handleOnPageLoadClick(
      info.formInfo ?? null,
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.alertInfo ?? null,
      info.errorInfo ?? null,
      info.productInfo ?? null,
      info.webInfo ?? null,
      info.offersViewed ?? null
    );
  } else if (eventTitle == AnalyticsManagerTitle.BannerTrackingTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      bannerInfo: data?._icicibank?.bannerInfo,
      campaignInfo: data?._icicibank?.campaignInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleBannerClick(
      info.bannerInfo ?? null,
      info.pageInfo ?? null,
      info.pageNames ?? null,
      info.campaignInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.NullSearchTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      searchInfo: data?._icicibank?.searchInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleNullSearchClick(
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.searchInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.SearchResultClickTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      searchInfo: data?._icicibank?.searchInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleSearchResultClick(
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.searchInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.FileDownloadTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      fileInfo: data?._icicibank?.fileTranser.fileDownload,
      ctaInfo: data?._icicibank?.ctaInfo,
      searchInfo: data?._icicibank?.searchInfo,
      productInfo: data?._icicibank?.productInfo,
      webInfo: data?.web?.webInteraction,
    }; 
    IMAnalyticsManager.handleFileDownloadClick(
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.fileInfo ?? null,
     info.ctaInfo ?? null,
      info.searchInfo ?? null,
      info.productInfo ?? null,
      info.webInfo ?? null,
    );
  } else if (eventTitle == AnalyticsManagerTitle.OffersTitle) {
    const info = {
      pageNames: data?._icicibank?.PageNames,
      pageInfo: data?._icicibank?.pageInfo,
      transactionInfo: data?._icicibank?.transactionInfo,
      offerInfo: data?._icicibank?.offerInfo,
      productInfo: data?._icicibank?.productInfo,
      webInfo: data?.web?.webInteraction,
    };
    IMAnalyticsManager.handleOfferClick(
      info.pageNames ?? null,
      info.pageInfo ?? null,
      info.transactionInfo ?? null,
      info.offerInfo ?? null,
      info.productInfo ?? null,
      info.webInfo ?? null,
    );
  }
};