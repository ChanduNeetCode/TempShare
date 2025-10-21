export interface IMAnalyticalInvokerProps {
  data?: AnalyticsdataType[];
  eventTitle?: string;
  userData?: userInfoList[];
}
export enum AnalyticsEnvironment {
  debug = 'debug',
  sit = "sit",
  release = "release",
  prod = "prod",
  uat = "uat",
  cug = "cug",
  isg = "isg"
}

export interface AnalyticsdataType {

  alertInfo: alertList[];
  bannerInfo: bannerList[];
  billerInfo: billerList[];
  campaignInfo: campaignInfoList[];
  ctaInfo: ctaList[];
  errorInfo: errorList[];
  fastagInfo: fastagList[];
  formInfo: formList[];
  journeyInitiatorCommonData: journeyInitiatorCommonData[];
  pageInfo: pageList[];
  pageNameCommonData: pageNameDataList[];
  productInfo: productList[];
  searchInfo: searchList[];
  transactionInfo: transactionList[];
  userInfo: userInfoList[];
  webDetails: webList[];

}

export interface alertList {
  alertsWarningsDisclaimers: string
}

export interface bannerList {
  bannerCategory: string,
  bannerName: string,
  bannerURL: string,
  internalCampaignParameters: string
}

export interface billerList {
  billerName: string,
  billerCategory: string
}

export interface campaignInfoList {
  internalCampaignParameters: string
}

export interface ctaList {
  ctaName: string,
  ctaRegion: string,
  ctaType: string,
  ctaUrl: string
}
export interface errorList {
  errorDetail: string,
  errorType: string,
  errorString: string
}

export interface fastagList {
  balance: number,
  stickerAmount: number,
  securityDeposit: number,
  rechargeAmount: number,
  balanceLowerLimit: number,
  tripId: string,
  serviceRequestStatus: string
}

export interface formList {
  formFields: string,
  formName: string,
  formStepName: string,
  formType: string,
  formSubmitFailureReason: string,
  lastAccessedField: string
}

export interface journeyInitiatorCommonData {
  journeyInitiator: string
}



export interface pageList {
  pageType: string,
  previousPageName: string,
  journey: string,
  subJourney: string,
  pageUrl: string,
  subSubJourney: string,
  virtualPageView: string
}



export interface pageNameDataList {
  primaryCategory: string,
  subCategory: string,
  subSubCategory: string,
  formName: string,
  screenName: string
}

export interface productList {
  productCategory: string,
  productName: string,
  productSubCategory: string
}

export interface searchList {
  numberOfSearchResults: string,
  searchCriteria: string,
  searchKeyword: string,
  searchResultRank: string,
  searchResultTitle: string
}

export interface transactionList {
  accountBalance: number,
  amountEntered: number,
  applicationReferenceNumber: string,
  applicationStatus: string,
  descriptionSelect: string,
  ifscCode: string,
  noOfPayments: number,
  payeeBank: string,
  payerBank: string,
  paymentFrequency: string,
  paymentSelection: string,
  paymentType: string,
  receiveOtp: string,
  receiveOtpOption: string
  transactionReferenceNumber: string,
  transactionStatus: string,
  transferType: string,
  upiSelectionType: string,
}

export interface userInfoList {
  accountType: string,
  age: string,
  fedID: string
  gender: string,
  loginStatus: string,
  loginType: string,
  newReturnVisitor: string,
  noOfNroaccounts: number,
  userSegment: string,
  userType: string,
}

export interface webList {
  isErrorPage: boolean,
  type: string
}
