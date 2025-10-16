import {
  ICLineBankAccount,
  ICGeneralBolt,
  ICGeneralHourGlass,
  ICLineCoins,
  ICBankLogo
} from '../../../../dff_library/ui_components/atoms/icons';
import { actuatedNormalizeWidth ,actuatedNormalizeHeight} from '../../../../dff_library//ui_components/utils/utility';
import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../../../dff_library/ui_components/atoms';



export const listData = [
  {
    id:0,
    leftImgOff: <ICGeneralBolt />,
    leftImgOn: <ICLineBankAccount />,
    text1: 'IMPS (instant)',
    text2: '₹5 +taxes will apply',
    text3:
      '24x7, Transaction limit: ₹5L, Daily transaction Limit: ₹20L. Pay instantly.',
    isButtonPress: true,
  },
  {
    id:1,
    leftImgOff: <ICGeneralHourGlass />,
    leftImgOn: <ICLineCoins />,
    text1: 'NEFT',
    text2: '',
    text3:
      'Daily transaction limit: ₹20L. Receiver gets the money in 2-24 hours.',
    isButtonPress: false,
  },
  {
    id:2,
    leftImgOff: <ICGeneralBolt />,
    leftImgOn: <ICLineBankAccount />,
    text1: 'RTGS',
    text2: '',
    text3:
      'Minimum transaction: ₹2L,Max transaction: ₹20L per day. Real time transaction.',
    isButtonPress: false,
  },
];
export const isolatedData = [
  {
    id:0,
    leftImg:<ICBankLogo/>,
    labelTxt:'Label',
    body:'Body copy',
    isLabelPress:true
  },
  {
    id:1,
    leftImg:<ICBankLogo/>,
    labelTxt:'Label',
    body:'Body copy'
  },
  {
    id:2,
    leftImg:<ICBankLogo/>,
    labelTxt:'Label',
    body:'Body copy'
  },
]









