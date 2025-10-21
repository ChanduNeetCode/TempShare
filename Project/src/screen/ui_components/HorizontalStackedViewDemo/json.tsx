import React from 'react';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import { Text } from 'react-native';

const sampleData = [
  {
    title: 'Amount',
    subTitle: '₹9,00,000',
  },
  {
    title: 'Tenure',
    subTitle: '120 Months',
  },
  {
    title: 'Tenu',
    subTitle: '12 Months',
  },
];
const sampleItems = [
  {
    title: (
      <Text style={[typography.SubTitleMedium2, , { color: '#ffffff' }]}>
        Equity Mutual Funds
      </Text>
    ),
    subTitle: (
      <Text style={[typography.HeadingBold3, { color: '#ffffff', left: 30 }]}>
        ₹20 Lacs
      </Text>
    ),
  },
  {
    title: (
      <Text
        style={[typography.SubTitleMedium2, , { color: '#ffffff', left: 5 }]}>
        Debt Mutual Funds
      </Text>
    ),
    subTitle: (
      <Text style={[typography.HeadingBold3, { color: '#ffffff', left: 30 }]}>
        ₹ 1CR
      </Text>
    ),
  },
];

const sampleAmountData = [
  {
    title: (
      <Text
        style={[
          typography.SubTitleMedium2,
          ,
          { color: '#ffffff', alignSelf: 'center' },
        ]}>
        Amount
      </Text>
    ),
    subTitle: (
      <Text
        style={[
          typography.HeadingBold3,
          { color: '#ffffff', alignSelf: 'center' },
        ]}>
        ₹1,50,00,000
      </Text>
    ),
  },
  {
    title: (
      <Text
        style={[
          typography.SubTitleMedium2,
          ,
          { color: '#ffffff', alignSelf: 'center' },
        ]}>
        Tenure
      </Text>
    ),
    subTitle: (
      <Text
        style={[
          typography.HeadingBold3,
          { color: '#ffffff', alignSelf: 'center' },
        ]}>
        240 Months
      </Text>
    ),
  },
];

export { sampleData, sampleItems, sampleAmountData };
