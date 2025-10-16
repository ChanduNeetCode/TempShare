import React from 'react';

import {
  ICGeneralBlockSmall,
  ICGeneralDefaultClose,
} from '../../../atoms/icons';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../utils/utility';

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
