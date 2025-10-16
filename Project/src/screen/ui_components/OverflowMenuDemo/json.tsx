import React from 'react';

import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../dff_library/ui_components/utils/utility';
import {
  ICGeneralBlockSmall,
  ICGeneralDefaultClose,
  ICGeneralPerson,
  ICLineCollectMoney,
  ICLineHome,
  ICLineIpal,
  ICLineQuestions,
} from '../../../../dff_library/ui_components/atoms/icons';

export const data = [
  {
    name: 'Dashboard',
    logo: (
      <ICLineHome
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
  {
    name: 'Ipal',
    logo: (
      <ICLineIpal
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
  {
    name: 'Profile',
    logo: (
      <ICGeneralPerson
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
];

export const dashboardData = [
  {
    name: 'Ipal',
    logo: (
      <ICLineIpal
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
  {
    name: 'Support',
    logo: (
      <ICLineQuestions
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
  {
    name: 'Refer & Earn',
    logo: (
      <ICLineCollectMoney
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
];

export const sampleData = [
  {
    value: 'De-register UPI ID',
    key: 'lCUTs2aa',
    subTitle: 'Content',
    icon: (
      <ICGeneralDefaultClose
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
  {
    value: 'View blocked UPI',
    key: 'TXdL0caa',
    subTitle: 'Content',
    icon: (
      <ICGeneralBlockSmall
        height={actuatedNormalizeHeight(30)}
        width={actuatedNormalizeWidth(30)}
      />
    ),
  },
];
