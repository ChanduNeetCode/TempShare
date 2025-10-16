import React from 'react';

import {
  ICBankLogo,
  ICLayer,
  ICLineAccountsAndDeposits,
  ICLineAnyMobileNumber,
  ICLineHomeInsurance,
  ICLineNFC,
  ICLineScanAnyQRCodeOrange,
  ICLineScheduledPayments,
  ICLineTransferOverseas,
  ICLineVehicleInsurance,
} from '../../../../dff_library/ui_components/atoms/icons';
import { STRINGS } from './constants';
import typography from '../../../../dff_library/ui_components/atoms/typography'

export const horizontalTilesData = [
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScheduledPayments height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineTransferOverseas height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineAnyMobileNumber height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineNFC height={36} width={36} />,
  },
];

export const smallListContained = [
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
    isTooltip:true
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
];

export const listContained = [
  {
    title: STRINGS.str_heading_here,
    index: '0',
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    isTooltip:true,
    tooltipContent:(<ICBankLogo height={20} width={16}/>),
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    isChip:true,
    badgesTitle:'New',
    badgesTextStyle:{...typography.LabelSmallMedium},
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    isTooltip:true,
    tooltipContent:(<ICBankLogo height={20} width={16}/>),
    title: STRINGS.str_heading_here,
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
  {
    title: STRINGS.str_heading_here,
    isChip:true,
    badgesTitle:'New',
    badgesTextStyle:{...typography.LabelSmallMedium},
    iconImage: <ICLineScanAnyQRCodeOrange height={36} width={36} />,
  },
];

export const carouselData = [
  {
    title: 'Credit cards',
    iconImage: <ICLayer />,

  },
  {
    title: 'Savings a/c',
    iconImage: <ICLineAccountsAndDeposits />,
  },
  {
    title: 'Car loan',
    iconImage: <ICLineVehicleInsurance />,
  },
  {
    title: 'Home loan',
    iconImage: <ICLineHomeInsurance />,
  },
];
