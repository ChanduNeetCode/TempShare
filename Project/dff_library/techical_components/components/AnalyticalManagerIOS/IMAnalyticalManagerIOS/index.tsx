import { NativeModules } from 'react-native';
import { AnalyticsEnvironment } from './types'
const { AnalyticalManager } = NativeModules;

let env: AnalyticsEnvironment;

export const initAnalyticsIOS = (environment: AnalyticsEnvironment) => {
  env = environment;
  AnalyticalManager.initAnalytics(environment)
}

export const IMAnalyticalManagerIOS = (props: any) => {
  initAnalyticsIOS(env);
  const { eventTitle, data } = props;
  AnalyticalManager.setUserInfo(
    data?._icicibank?.userInfo,
    data?._icicibank?.Identities,
  );

  if (eventTitle == 'CTA') {
    AnalyticalManager.setCtaAnalytics(
      eventTitle,
      data?._icicibank?.ctaInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.searchInfo ?? null,
      data?._icicibank?.transactionInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.offerInfo ?? null,
      data?.web?.webInteraction ?? null,
      data?._icicibank?.offersClicked || {
        "offers": "na",
        "hasOffers": 0,
        "offerID": "na"
      }

       
    );
  }
  if (eventTitle == 'Add - Favourite') {
    AnalyticalManager.setAddFavouriteAnalytics(
      eventTitle,
      data?._icicibank?.ctaInfo ?? null,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?.web?.webInteraction ?? null,
    );
  }
  if (eventTitle == 'Alerts - Warning') {
    AnalyticalManager.setAlertsWarningAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.alertInfo ?? null,
      data?.web?.webInteraction ?? null,

    );
  }
  if (eventTitle == 'API - Error') {
    AnalyticalManager.setApiErrorAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.errorInfo ?? null,
      data?.web?.webInteraction ?? null
    );
  }
  if (eventTitle == 'Form - Abandonment') {
    AnalyticalManager.setFormAbandonmentAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null, 
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.transactionInfo ?? null,
      data?.web?.webInteraction ?? null,

    );
  }
  if (eventTitle == 'Form - Intermediate') {
    AnalyticalManager.setFormIntermediateAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.transactionInfo ?? null,
      data?.web?.webInteraction ?? null,
    );
  }

  if (eventTitle == 'Form - Start') {
    AnalyticalManager.setFormStartAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.transactionInfo ?? null,
      
      data?.web?.webPageDetails ?? null,
    );
  }

  if (eventTitle == 'Form - Submission') {
    AnalyticalManager.setFormSubmissionAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.transactionInfo ?? null,
      data?.web?.webPageDetails ?? null,
    );
  }

  if (eventTitle == 'Form - Submission - Failure') {
    AnalyticalManager.setFormSubmissionFailureAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.transactionInfo ?? null,
      data?._icicibank?.errorInfo ?? null,
      data?.web?.webInteraction ?? null,

    );
  }
  if (eventTitle == 'Form - Field - Error') {
    AnalyticalManager.setFormFieldErrorAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.formInfo ?? null,
      data?._icicibank?.errorInfo ?? null,
      data?.web?.webInteraction ?? null

    );
  }

  if (eventTitle == 'Internal - Search') {
    AnalyticalManager.setInternalSearchAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.searchInfo ?? null,
      data?.web?.webInteraction ?? null,

    );
  }
  if (eventTitle == 'Page - Or - Screen - Load') {
    AnalyticalManager.setPageScreenLoadAnalytics(
      eventTitle,

      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.alertInfo ?? null,
      data?._icicibank?.errorInfo ?? null,
      data?.web?.webPageDetails ?? null,
      data?._icicibank?.offersViewed || {
        "offers": "na",
        "hasOffers": 0
      }


    );
  }
  if (eventTitle == 'Banner - Tracking') {
    AnalyticalManager.setBannerTrackingAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.bannerInfo ?? null,
      data?._icicibank?.campaignInfo ?? null,
      data?.web?.webInteraction ?? null
    );
  }
  if (eventTitle == 'Null - Search') {
    AnalyticalManager.setNullSearchAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.searchInfo ?? null,
      data?.web?.webInteraction ?? null
    );
  }
  if (eventTitle == 'Search - Result - Click - Tracking') {
    AnalyticalManager.setSearchResultClickTrackingAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.searchInfo ?? null,
      data?.web?.webInteraction ?? null
    );
  }
  if (eventTitle == 'Form - Fail - Or - Pending') {
    AnalyticalManager.setFormFailOrPendingAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null, 
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.searchInfo ?? null,
      data?.web?.webInteraction ?? null
    

    );
  }
  if (eventTitle == 'File - Download') {
    AnalyticalManager.setFileDownloadAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.ctaInfo ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.searchInfo ?? null,
      data?.web?.webInteraction ?? null,
      data?._icicibank?.fileTranser?.fileDownload ?? null

    );
  }
  if (eventTitle == 'Offers') {
    AnalyticalManager.setOffersAnalytics(
      eventTitle,
      data?._icicibank?.pageInfo ?? null,
      data?._icicibank?.PageNames ?? null,
      data?._icicibank?.journeyInitiatorCommonData ?? null,
      data?._icicibank?.productInfo ?? null,
      data?._icicibank?.transactionInfo ?? null,
      data?.web?.webInteraction ?? null,
      data?._icicibank?.offerInfo ?? null

    );
  }
};