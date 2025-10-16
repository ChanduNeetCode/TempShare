import { ViewStyle, TextStyle } from 'react-native';

export enum accountInfo {
  'CreditCards',
  'Deposits',
  'SavingAc',
}

export interface LinearGradientProps {
  x: number;
  y: number;
}

export interface IMAccountCreditProps {
  accountType:
    | accountInfo.SavingAc
    | accountInfo.Deposits
    | accountInfo.CreditCards;

  accountNumber?: string;
  currentTitle?: string;
  linearGradientColorEnd?:string;
  linearGradientColorStart?:string;
  showTitle?: string;
  title?: string;

  backgroundImg?: JSX.Element;
  children?: JSX.Element;
  debit?: JSX.Element;
  iciciLogo?: JSX.Element;
  imageRightTop?:JSX.Element;
  imageLeftTop?:JSX.Element;
  partnerLogo?: JSX.Element;
  partnerName?: JSX.Element;
  statement?: JSX.Element;
  settings?: JSX.Element;


  amountBalance?: number;

  showBalance?: boolean;

  debitCardOnPress?: () => void;
  statementOnPress?: () => void;
  settingsOnPress?: () => void;
  showBalanceOnPress?: () => void;

  containerStyleProp?: ViewStyle;
  iciciLogoStyles?:ViewStyle;
  leftTopImageStyle?:ViewStyle;
  partnerLogoStyle?: ViewStyle;
  partnerNameStyle?: ViewStyle;
  rightEndFlowerStyle?:ViewStyle;
  showBalanceViewStyle?: ViewStyle;
  savingAcViewStyle?: ViewStyle;
  showValueViewStyle?: ViewStyle;

  acctNumStyle?: TextStyle;
  balanceTxtStyle?: TextStyle;
  depositTextStyle?: TextStyle;
  savingAcTextStyle?: TextStyle;

  start?:LinearGradientProps;
  end?:LinearGradientProps;
}
