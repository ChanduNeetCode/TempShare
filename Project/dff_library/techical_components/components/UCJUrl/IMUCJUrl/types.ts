export const encryption_Key = '12345656799328831234577755212201';
export const utm_Base_Url = 'https://buystaging.icicibank.com/ucj/';

export enum IMUCJCategory {
  UCJ_AUTO_LOAN_DD = 'unified-car-loan/details?',
  UCJ_TWO_WHEELER_LOAN_DD = 'unified-two-wheeler-loan/home?',
}

export enum IMIUPCategory {
  ALP0T2M0QWG = 'ALP0T2M0QWG',
  TWP0T2M0QWG = 'TWP0T2M0QWG',
}

export enum IMDefaultIUSCategory {
  RIBA30637AL = 'RIBA30637AL',
}

export interface IMUCJParameter {
  accountNumber: string;
  apiTime: string;
  destProd: string;
  dob: string;
  firstName: string;
  lastName: string;
  loanAmt: string;
  mobNum: string;
  spdcWaiverFlag: string;
  state: string;
  tenure: string;
  userId: string;
}
