import { enviornment } from '../../EnviornmentVariable/IMEnviornmentVariable';

export interface IMCDNInvocationProps {
  invocationType: 'Image' | 'Data';

  masterEnv?: enviornment.DEV | string;
  env?:enviornment.DEV | string;

  isImageRequired?:boolean;

  assetName?: string;
  dataRequestType: string;
  masterName?: string;
  module?: string;

  defaultImage?:JSX.Element;

  imageStyle?:object;
  headers?:object;
}

export const ImageType: any = {
  CreditCard: 'CreditCard',
  DebitCard: 'DebitCard',
};

export const DataType: any = {
  Message: 'Message',

  // Added to meet services module Requirement
  CardLessCashWithdrawl: 'CardLessCashWithdrawl',
  FindNearMe: 'FindNearMe',

  // Added to meet Offers & Rewards module Requirement
  PreApprovedLoanOrder: 'PreApprovedLoanOrder',
  PreApprovedLoans: 'PreApprovedLoans',
  IndexOffers: 'IndexOffers',
  PaymentModeOffers: 'PaymentModeOffers',
  Top5OffersOrder: 'Top5OffersOrder',
  NearByOffersAndCashback: 'NearByOffersAndCashback',
  UserData: 'UserData',
  Banners: 'Banners',
  Support: 'Support',
  TopFiveOrder: 'TopFiveOrder',
  Master: 'Master',
  BranchMaster: 'BranchMaster',

  //Added to meet Loans module Requirements
  FAQS:'FAQS',
  BLOGS:'BLOGS',
  INSITUTE:'INSITUTE',
  SERVICE:'SERVICE',
  IPLAY:'IPLAY',
  AccountAndDeposites:'AccountAndDeposites',

  //Added to meet Invest & Insure module Requirements
  TermLife:'TermLife',
  CancerCover:'CancerCover',
  PMBJJBY:'PMBJJBY',
  PMSBY:'PMSBY',
  HealthInsurance:'HealthInsurance',
  TravelInsurance:'TravelInsurance',
  CarInsurance:'CarInsurance',
  TwoWheelerInsurance:'TwoWheelerInsurance',
  Suggestions:'Suggestions',
  Promotions:'Promotions',
  Booklet: 'Booklet',
  BookletTAT: 'BookletTAT',
  IpoInfo: 'IpoInfo',
  ApyInfo: 'ApyInfo',
  FRSBInfo: 'FRSBInfo',
  SSYInfo: 'SSYInfo',
  GoldTranche: 'GoldTranche',
  NPSInfo: 'NPSInfo',
  WhyInvest: 'WhyInvest',
  PensionFunds: 'PensionFunds',
  NpsLearnmore: 'NpsLearnmore',
  NpsInvestmentAutoChoice: 'NpsInvestmentAutoChoice',
  NpsCorporateMasterData: 'NpsCorporateMasterData',
  NpsNextStepsIndividual: 'NpsNextStepsIndividual',
  NpsnextStepsCorporate: 'NpsnextStepsCorporate',
  SCSSInfo: 'SCSSInfo',
  InvestSuggestions: 'InvestSuggestions',
  InvestPromotions: 'InvestPromotions',
  NPSLanding: 'NPSLanding',
  NPSTier: 'NPSTier',
  SCSS: 'SCSS',
  FAQInsureLanding: 'FAQInsureLanding',
  BlogInvestLanding: 'BlogInvestLanding',
  BlogInsureLanding: 'BlogInsureLanding',
  FAQInvestLanding : 'FAQInvestLanding'
};
