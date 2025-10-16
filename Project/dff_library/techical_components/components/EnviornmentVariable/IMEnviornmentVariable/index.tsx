export enum enviornment {
  DEV = 'DEV',
  PROD = 'PROD',
  UAT = 'UAT',
  CUG = 'CUG',
  SIT = 'SIT',
  ISG = 'ISG',
  EMP = '',
}

export let currentBaseEnv = {
  env: enviornment.CUG,
};

export let currentCDNInvocationEnv = {
  env: enviornment.CUG,
};

export const IMEnviornment = (_env: enviornment | string) => {
  let baseURL = '';
  switch (_env) {
    case enviornment.DEV:
      return (baseURL = 'https://dev-imbl-dmz.icicibank.com/');
    case enviornment.PROD:
      return (baseURL = 'https://im-igateway.icicibank.com/');
    case enviornment.UAT:
      return (baseURL = 'https://uat-imbl-dmz.icicibank.com/');
    case enviornment.CUG:
      return (baseURL = 'https://stg-igateway.icicibank.com/');
    case enviornment.SIT:
      return (baseURL = 'https://sit-imbl-dmz.icicibank.com/');
    case enviornment.ISG:
      return (baseURL = 'https://isg-imbl-dmz.icicibank.com/');
    case enviornment.EMP:
      return (baseURL = '');
    default:
      return (baseURL = _env);
  }
};

export const IMCMSBaseImageURL = (_env: enviornment | string) => {
  switch (_env) {
    case enviornment.DEV:
      return 'https://www.imobilecdn-uat.icicibank.com/content/dam/icicibank/imobile-images/';
    case enviornment.CUG:
      return 'https://www.imobilecdn-cug.icicibank.com/content/dam/icicibank/imobile-images/';
    case enviornment.PROD:
      return 'https://www.imobilecdn.icicibank.com/content/dam/icicibank/imobile-images/';
    case enviornment.UAT:
      return 'https://www.imobilecdn-uat.icicibank.com/content/dam/icicibank/imobile-images/';
    default:
      return _env;
  }
};

export const IMCMSBaseURL = (_env: enviornment | string) => {
  switch (_env) {
    case enviornment.DEV:
      return 'https://www.imobilecdn-uat.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/';
    case enviornment.CUG:
      return 'https://www.imobilecdn-cug.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/';
    case enviornment.PROD:
      return 'https://www.imobilecdn.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/';
    case enviornment.UAT:
      return 'https://www.imobilecdn-uat.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/';
    default:
      return _env;
  }
};

export const IMErrorMessageBaseURL = (_env: enviornment | string,isContentFragment:boolean = false) => {
  switch (_env) {
    case enviornment.DEV:
      if (isContentFragment){
        return 'https://www.imobilecdn-uat.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/'
      }else{
        return 'https://www.imobilecdn-uat.icicibank.com/api/assets/icicibank/imobile/';
      }
    case enviornment.CUG:
      if (isContentFragment){
        return 'https://www.imobilecdn-cug.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/'
      }else{
        return 'https://www.imobilecdn-cug.icicibank.com/api/assets/icicibank/imobile/';
      }
      
    case enviornment.PROD:
      if (isContentFragment){
        return 'https://www.imobilecdn.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/'
      }else{
        return 'https://www.imobilecdn.icicibank.com/api/assets/icicibank/imobile/';
      }
     
    case enviornment.UAT:
      if (isContentFragment){
        return 'https://www.imobilecdn-uat.icicibank.com/content/icicibank/content-reference/fetch.json?path=imobile/iMobile-Platform/'
      }else{
        return 'https://www.imobilecdn-uat.icicibank.com/api/assets/icicibank/imobile/';
      }
      
    default:
      return _env;
  }
};

export const masterBaseURL = (_env: enviornment | string) => {
  let baseURL = '';
  switch (_env) {
    case enviornment.DEV:
      return (baseURL =
        'https://www.imobilecdn-uat.icicibank.com/imobilemaster/dataapi');
    case enviornment.CUG:
      return 'https://www.imobilecdn-cug.icicibank.com/imobilemaster/dataapi';
    case enviornment.PROD:
      return 'https://www.imobilecdn-cug.icicibank.com/imobilemaster/dataapi';
    case enviornment.UAT:
      return 'https://www.imobilecdn-uat.icicibank.com/imobilemaster/dataapi';
  }
};

export const IMMasterKey = (_env: enviornment | string) => {
  switch (_env) {
    case enviornment.DEV:
      return 'Bs9FH3BIff5Wd3SBWOat9zdasGF1GuRiDhbvHBiHFBmzQA8j';
    case enviornment.CUG:
      return 'EcOZa011gGFngKf3m0l5JnA2TX0JGBX8EFgJY5vRJRVAWA38';
    case enviornment.PROD:
      return 'EcOZa011gGFngKf3m0l5JnA2TX0JGBX8EFgJY5vRJRVAWA38';
  }
};
