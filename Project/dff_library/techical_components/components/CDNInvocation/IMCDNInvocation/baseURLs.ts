import { DataType, ImageType } from './types';
import {
  IMCMSBaseImageURL,
  IMCMSBaseURL,
  enviornment,
  masterBaseURL,
} from '../../EnviornmentVariable/IMEnviornmentVariable';
enum type{
  modules = 'modules',
  support = 'support'
}
enum moduleName{
  investInsure = 'invest-insure',
  offersandRewards = 'offers-and-rewards',
  services = 'services',
  loans = 'loans',
  faqs = 'faqs',
  blogs = 'blogs',
}
enum category{
  invest = 'invest',
  insure = 'insure',
  offers = 'offers',
  rewards = 'rewards',
  preapprovedLoans = 'pre-approved-loans',
}
enum subCategory{
  general = 'general',
  order = 'order',
  top5Order ='top-5-order',
  indexOffers = 'index-offers',
  defaultOffers = 'default-offers',
  paymentmodeOfferBanners = 'payment-mode-offer-banners',
  nearbyoffersandCashback = 'near-by-offers-and-cashback',
  usersData  = 'users-data',
  banners = 'banners',
  contactUs = 'contact-us',
  Loans = 'loans/loans',
  loans ='loans',
  education = 'education',
  loanDetails = 'loan-details',
  learnMoreifc = 'learn-more/ifc/ifc',
  accountsandDepositsIfc = 'accounts-and-deposits/ifc',
  landing = 'landing',
  suggestions = 'suggestions/suggestions',
  promotions = 'promotions/promotions',
  lifeInsuranceTermlife = 'life-insurance/term-life',
  lifeInsuranceCancerCover = 'life-insurance/cancer-cover',
  lifeInsurancePMJJBY = 'life-insurance/pmjjby-policy',
  healthInsurancePMSBY = 'health-insurance/pmsby',
  healthInsuranceTopup ='health-insurance/health-insurance-topup',
  travelvehicleinsurance = 'travel-vehicle-insurance/travel-insurance',
  carinsurance = 'travel-vehicle-insurance/car-insurance',
  twoWheelerinsurance = 'travel-vehicle-insurance/two-wheeler-insurance',
  npsLanding = 'nps-landing',
  npsTier = 'nps-tier',
  scss = 'scss',
  dematBooklet = 'demat/booklet',
  dematBookletTAT = 'demat/booklet-tat',
  ipoInfo = 'ipo/ipo-info',
  apyInfo = 'apy/apy-info',
  frsbInfo = 'frsb/frsb-info',
  ssyInfo = 'ssy/SSY-Info',
  sgbGold = 'sgb/gold-tranche',
  npsInfo = 'nps/nps-info',
  npsWhyInvest = 'nps/why-invest',
  npspensionfunds = 'nps/pension-funds',
  npsLearnmore = 'nps/learn-more',
  npsautoChoice ='nps/auto-choice',
  npscorporatemasterdata = 'nps/corporate-master-data',
  npsnextstepindividuals = 'nps/next-step-individuals',
  npsnextstepcorporate = 'nps/next-step-corporate',
  scssInfo = 'scss/scss-info',

}
export const getURL = (
  invocationType: String,
  dataRequestType: string,
  assetName: string | undefined,
  module: string | undefined,
  env: enviornment | string,
  masterEnv?: enviornment.DEV | string,
  masterName?: string,
): any => {
  const CMSBaseImageURL: String = IMCMSBaseImageURL(env);
  const CMSBaseURL: String = IMCMSBaseURL(env);

  const ImageBaseURLs: any = {
    CreditCard: `${CMSBaseImageURL}cards/background/cc/${assetName}`,
    DebitCard: `${CMSBaseImageURL}cards/background/dc/${assetName}`,
  };

  const DataBaseURLs: any = {
    Message: `${CMSBaseURL}data/dff/Messages.json`,

    // Added to meet services module Requirement
    CardLessCashWithdrawl: `${CMSBaseURL}${type.modules}/${moduleName.services}/${module}`,
    FindNearMe: `${CMSBaseURL}${type.modules}/${subCategory.general}/${module}`,

    //Added to meet Offers & Rewards module Requirements
    PreApprovedLoanOrder: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.preapprovedLoans}/${subCategory.order}/${module}`,
    PreApprovedLoans: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.preapprovedLoans}/${subCategory.defaultOffers}/${module}`,
    IndexOffers: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.offers}/${subCategory.indexOffers}/${module}`,
    PaymentModeOffers: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.offers}/${subCategory.paymentmodeOfferBanners}/${module}`,
    Top5OffersOrder: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.offers}/${subCategory.top5Order}/${module}`,
    NearByOffersAndCashback: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.offers}/${subCategory.nearbyoffersandCashback}/${module}`,
    UserData: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.offers}/${subCategory.usersData}/${module}`,
    Banners: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.rewards}/${subCategory.banners}/${module}`,
    Support: `${CMSBaseURL}${type.support}/${subCategory.contactUs}/${module}`,
    TopFiveOrder: `${CMSBaseURL}${type.modules}/${moduleName.offersandRewards}/${category.offers}/${subCategory.top5Order}/${module}`,

    //Added to meet Loans module Requirements

    FAQS: `${CMSBaseURL}${type.support}/${moduleName.faqs}/${subCategory.Loans}/${module}`,
    BLOGS: `${CMSBaseURL}${type.support}/${moduleName.blogs}/${subCategory.loans}/${module}`,
    INSITUTE: `${CMSBaseURL}${type.modules}/${moduleName.loans}/${subCategory.education}/${module}`,
    SERVICE: `${CMSBaseURL}${type.modules}/${moduleName.loans}/${subCategory.loanDetails}/${module}`,
    IPLAY: `${CMSBaseURL}${type.support}/${subCategory.learnMoreifc}/${module}`,
    AccountAndDeposites: `${CMSBaseURL}${type.support}/${moduleName.faqs}/${subCategory.accountsandDepositsIfc}/${module}`,

    // IPLAY: `${CMSBaseURL}${type.support}/learn-more/insta-flexicash/insta-flexicash/${module}`,
    // AccountAndDeposites: `${CMSBaseURL}${type.support}${category.faqs}accounts-and-deposits/flexicash/${module}`,

    //Added to meet Invest & Insure module Requirements

    TermLife:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.lifeInsuranceTermlife}/${module}`,
    CancerCover:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.lifeInsuranceCancerCover}/${module}`,
    PMBJJBY:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.lifeInsurancePMJJBY}/${module}`,
    PMSBY:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.healthInsurancePMSBY}/${module}`,
    HealthInsurance:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.healthInsuranceTopup}/${module}`,
    TravelInsurance:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.travelvehicleinsurance}/${module}`,
    CarInsurance:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.carinsurance}/${module}`,
    TwoWheelerInsurance:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.twoWheelerinsurance}/${module}`,
    Suggestions:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.suggestions}/${module}`,
    Promotions:`${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.insure}/${subCategory.promotions}/${module}`,
    
    Booklet: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.dematBooklet}/${module}`,
    BookletTAT: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.dematBookletTAT}/${module}`,
    IpoInfo: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.ipoInfo}/${module}`,
    ApyInfo: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.apyInfo}/${module}`,
    FRSBInfo: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.frsbInfo}/${module}`,
    SSYInfo: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.ssyInfo}/${module}`,
    GoldTranche: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.sgbGold}/${module}`,
    NPSInfo: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npsInfo}/${module}`,
    WhyInvest: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npsWhyInvest}/${module}`,
    PensionFunds: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npspensionfunds}/${module}`,
    NpsLearnmore: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npsLearnmore}/${module}`,
    NpsInvestmentAutoChoice: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npsautoChoice}/${module}`,
    NpsCorporateMasterData: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npscorporatemasterdata}/${module}`,
    NpsNextStepsIndividual: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npsnextstepindividuals}/${module}`,
    NpsnextStepsCorporate: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.npsnextstepcorporate}/${module}`,
    SCSSInfo: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.scssInfo}/${module}`,
    InvestSuggestions: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.suggestions}/${module}`,
    InvestPromotions: `${CMSBaseURL}${type.modules}/${moduleName.investInsure}/${category.invest}/${subCategory.promotions}/${module}`,
    NPSLanding: `${CMSBaseURL}${type.support}/${moduleName.faqs}/${category.invest}/${subCategory.npsLanding}/${module}`,
    NPSTier: `${CMSBaseURL}${type.support}/${moduleName.faqs}/${category.invest}/${subCategory.npsTier}/${module}`,
    SCSS: `${CMSBaseURL}${type.support}/${moduleName.faqs}/${category.invest}/${subCategory.scss}/${module}`,
    FAQInsureLanding: `${CMSBaseURL}${type.support}/${moduleName.faqs}/${category.insure}/${subCategory.landing}/${module}`,
    BlogInvestLanding: `${CMSBaseURL}${type.support}/${moduleName.blogs}/${category.invest}/${subCategory.landing}/${module}`,
    BlogInsureLanding: `${CMSBaseURL}${type.support}/${moduleName.blogs}/${category.insure}/${subCategory.landing}/${module}`,
    FAQInvestLanding: `${CMSBaseURL}${type.support}/${moduleName.faqs}/${category.invest}/${subCategory.landing}/${module}`,
    
    //case Master(String)
    Master: `${masterBaseURL(masterEnv ? masterEnv : '',)}/get-master/${masterName}`,
    BranchMaster: `${masterBaseURL(masterEnv ? masterEnv : '',)}/findMasterRows_byCode/BRANCHMSTR/${masterName}/EXACT_SEARCH`,
  };

  if (invocationType === 'Image') {
    if (ImageType[dataRequestType]) {
      return ImageBaseURLs[ImageType[dataRequestType]];
    }
    return '';
  } else if (invocationType === 'Data') {
    if (DataType[dataRequestType]) {
      return DataBaseURLs[DataType[dataRequestType]];
    }
    return '';
  } else {
    return '';
  }
};