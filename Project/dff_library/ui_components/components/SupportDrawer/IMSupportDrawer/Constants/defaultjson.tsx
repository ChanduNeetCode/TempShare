import React from 'react';
import { Text } from 'react-native';

import {
  ICGeneralInformationAltOrange,
  ICLineCustomerCare,
  ICLineHelp,
} from '../../../../atoms/icons';

const defaultData = [
  {
    description: 'Find in-app help, discover features and more',
    image: <ICLineCustomerCare height={20} width={20} />,
    title: 'Chat with iPal',
  },
  {
    description: 'Raise a query, troubleshoot, contact us',
    image: <ICLineHelp height={20} width={20} />,
    title: 'Support',
  },
  {
    description: <Text>Watch videos, learn more about this page</Text>,
    image: <ICGeneralInformationAltOrange height={20} width={20} />,
    title: 'Learn More',
  },
];

export default defaultData;
