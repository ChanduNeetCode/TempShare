# AnalyticalManager v1.0.0

## Installation

Using npm -
$ npm install @icicibank/tsg1_2259_rn_dff_library@*.*.*

How to use Analytical Manager Component -

It is implemented from Native Code using Bridge concept. It is only for IOS.

import { IMAnalyticalManager } from '@icicibank/tsg1_2259_rn_dff_library'  for Encryption.



## IMAnalyticalManager

| Props              | Params                    | isRequire | Description                                                                      |
| ------------------ | --------------------------| --------- | -------------------------------------------------------------------------------- |
| data               | AnalyticsdataType Array   | Yes       | json data that is passed for every event                                         |
| eventTitle         | string                    | Yes       | Any one title from enum AnalyticsManagerTitle                                    |
| userData           | userInfoList Array        | Yes       | user data                                                                        |


### IMAnalyticalManager example

```JSX

   IMAnalyticalManager({
      eventTitle: title,
      data: AnalyticsData,
      userData: AnalyticsData.userInfo
    })
```
Here we are calling  IMAnalyticalManager with title, analytics data and userinfo params.

The Analytics Data should be in the following Json format.

The event title is any one title from enum AnalyticsManagerTitle according to the requirement.

userData is also included in the json.

All the events are managed by DFF and only IMAnalyticalManager should be called from your side.




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
}

```JSON

const AnalyticsData =
{
  bannerInfo: {
    bannerCategory: "saving",
    bannerName: "iOS",
    bannerURL: "analytics manager sample view controller",
    internalCampaignParameters: "gb"
  },
  ctaInfo: {
    ctaName: "verify",
    ctaRegion: "payee name field",
    ctaType: "icon",
    ctaUrl: "analytics manager sample view controller"
  },
  campaignInfo: {
    internalCampaignParameters: "saving"
  },
  userInfo: {
    accountType: "saving",
    age: "30",
    gender: "m",
    loginType: "mpin",
    loginStatus: "li",
    newReturnVisitor: "new",
    noOfNroaccounts: 0,
    userSegment: "gb",
    userType: "etb",
    fedID: "12345"
  },
  pageInfo: {
    pageType: "form page",
    previousPageName: "Set pagename of previous page as per given nomenclature",
    journey: "fund transfer",
    subJourney: "send money",
    pageUrl: "analytics manager sample view controller",
    subSubJourney: "send moneys",
    virtualPageView: "send"
  },

  journeyInitiatorCommonData: {
    journeyInitiator: "journey"
  },
  productInfo: {
    productCategory: "accounts",
    productName: "instant savings account or basic savings account or privilege savings account or pension account or salary account, etc ",
    productSubCategory: "savings"
  },
  transactionInfo: {
    amountEntered: 0,
    descriptionSelect: "na",
    ifscCode: "na",
    noOfPayments: 0,
    payeeBank: "icici",
    payerBank: "icici",
    paymentSelection: "na",
    paymentType: "bank transfer",
    receiveOtp: "na",
    transferType: "bank transfer",
    accountBalance: 0,
    applicationReferenceNumber: "na",
    applicationStatus: "na",
    upiSelectionType: "na",
    paymentFrequency: "na",
    transactionReferenceNumber: "na",
    transactionStatus: "na",
    receiveOtpOption: "bank"
  },
  pageNameCommonData: {
    primaryCategory: "Fund Transfer",
    subCategory: "send Money",
    subSubCategory: "add payee",
    formName: "na",
    screenName: "zero state ft page"

  },
  formInfo: {
    formFields: "payee",
    formName: "add payee| icici",
    formStepName: "payee details",
    formType: "application",
    formSubmitFailureReason: "payee",
    lastAccessedField: "details"
  },
  billerInfo: {
    billerName: "1234",
    billerCategory: "icici"
  },
  webDetails: {
    isErrorPage: false,
    type: "dynamic"
  },
  errorInfo: {
    errorDetail: "dynamic",
    errorType: "dynamic",
    errorString: "search"
  },
  searchInfo: {
    numberOfSearchResults: "set the no. of results returned when user performed search",
    searchKeyword: "Capture the search keyword as payee name or payee upi id as per what search keyword was entered by user excluding any type of PII",
    searchCriteria: "na",
    searchResultRank: "123",
    searchResultTitle: "search"
  },
  alertInfo: {
    alertsWarningsDisclaimers: "you can transfer money to this payee after 30mins"
  },
  fastagInfo: {
    balance: 1000,
    stickerAmount: 100,
    securityDeposit: 10000,
    rechargeAmount: 10,
    balanceLowerLimit: 1,
    tripId: "123",
    serviceRequestStatus: "322"
  }
}


```