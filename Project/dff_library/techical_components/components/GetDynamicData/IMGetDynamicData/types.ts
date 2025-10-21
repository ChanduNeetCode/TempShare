import { enviornment } from '../../EnviornmentVariable/IMEnviornmentVariable';

export enum enumType{
  other = 'other',
  tooltip = 'tooltip',
  master = 'master',
  branchmaster = 'branchmaster'
}
export enum baseURLTypes{
  modules = 'modules',
  support = 'support'
}
export enum moduleName {
  investInsure = 'invest-insure',
  offersandRewards = 'offers-and-rewards',
  services = 'services',
  loans = 'loans',
  faqs = 'faqs',
  blogs = 'blogs',
}
export enum category {
  invest = 'invest',
  insure = 'insure',
  offers = 'offers',
  rewards = 'rewards',
  preapprovedLoans = 'pre-approved-loans',
  dashboard = 'dashboard'
}
export enum subCategory {
  general = 'general',
  order = 'order',
  top5Order = 'top-5-order',
  indexOffers = 'index-offers',
  defaultOffers = 'default-offers',
  paymentmodeOfferBanners = 'payment-mode-offer-banners',
  nearbyoffersandCashback = 'near-by-offers-and-cashback',
  usersData = 'users-data',
  banners = 'banners',
  contactUs = 'contact-us',
  Loans = 'loans/loans',
  loans = 'loans',
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
  healthInsuranceTopup = 'health-insurance/health-insurance-topup',
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
  npsautoChoice = 'nps/auto-choice',
  npscorporatemasterdata = 'nps/corporate-master-data',
  npsnextstepindividuals = 'nps/next-step-individuals',
  npsnextstepcorporate = 'nps/next-step-corporate',
  scssInfo = 'scss/scss-info',
  master = 'get-master',
  branchMaster = 'findMasterRows_byCode/BRANCHMSTR',
  homeloan = 'home-loan', 
  personalloan = 'personal-loan', 
  consumerloan = 'consumer-loan',
  educationloan = 'education-loan',
  twowheelerloan = 'two-wheeler-loan',
  autoloan = 'auto-loan'
}

export interface getDynamicDataProps {
  jsonFileName?:string,
  env?:enviornment.DEV | string;
  
  category?:category,
  enumtype:enumType,
  moduleName?:moduleName,
  subcategory?:subCategory,
  baseURLtype?: baseURLTypes,
}

