import React from 'react';
import { Text, View } from 'react-native';

import {
  ICGeneralChevronRight,
  ICGeneralDisabledRadioButtonOn,
  ICGeneralEdit,
  ICGeneralErrorAlertRed,
  ICGeneralFlashOn,
  ICGeneralLightBulb,
  ICGeneralSuccessDone,
  ICNoReminder,
} from '../../../../dff_library/ui_components/atoms/icons';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';

export const sampleData = [
  {
    icon: <ICNoReminder width={25} height={25} />,
    text: <Text>Fill in a quick form and create a temporary 4-digit pin</Text>,
    header: <Text>Log in to e-Pay Tax services</Text>,
  },
  {
    icon: <ICNoReminder width={25} height={25} />,
    text: 'Receive a 6-digit reference code (valid for 6 hours) on your registered mobile number',
    header: 'E-Pay tax',
  },
  {
    icon: <ICNoReminder width={25} height={25} />,
    text: <Text>Visit ICICI ATM and enter exact details to withdraw cash</Text>,
    header: 'Payment',
  },
  {
    icon: <ICNoReminder width={25} height={25} />,
    text: 'Receive a 6-digit reference code (valid for 6 hours) on your registered mobile number',
    header: 'E-Pay tax',
  },
];
export const data = [
  {
    time: '9 AUG',
    isLastMonth: true,
    contentIcon: <View style={{backgroundColor:'#F0792E',width:actuatedNormalizeWidth(20),height: actuatedNormalizeWidth(20),borderRadius: actuatedNormalizeWidth(20), alignItems:"center", justifyContent:'center'}}><ICGeneralLightBulb height={14} width = {14} /></View>,
    title: 'Electricity due',
    description: 'More explanation on the subject',
  },
  {
    time: 'TODAY',
    contentIcon: <View style={{backgroundColor:'green',width:actuatedNormalizeWidth(20),height: actuatedNormalizeWidth(20),borderRadius: actuatedNormalizeWidth(20), alignItems:"center", justifyContent:'center'}}><ICGeneralFlashOn height={13.33} width = {13.33} /></View>,
    title: 'Recharge done',
    isCurrent: true,
    description: 'More explanation on the subject',
  },
  {
    time: '12 AUG',
    contentIcon:<View style={{backgroundColor:'#F0792E',width:actuatedNormalizeWidth(20),height: actuatedNormalizeWidth(20),borderRadius: actuatedNormalizeWidth(20), alignItems:"center", justifyContent:'center'}}><ICGeneralLightBulb height={13.33} width = {13.33} /></View>,
    title: 'Electricity due',
    description: 'More explanation on the subject',
  },
  {
    time: '14 AUG',
    contentIcon:<View style={{backgroundColor:'#F0792E',width:actuatedNormalizeWidth(20),height: actuatedNormalizeWidth(20),borderRadius: actuatedNormalizeWidth(20), alignItems:"center", justifyContent:'center'}}><ICGeneralLightBulb height={13.33} width = {13.33} /></View>,
    title: 'Electricity due',
    description: 'More explanation on the subject',
  },
  {
    time: '15 AUG',
    isLastMonth: true,
    contentIcon:<View style={{backgroundColor:'#F0792E',width:actuatedNormalizeWidth(20),height: actuatedNormalizeWidth(20),borderRadius: actuatedNormalizeWidth(20), alignItems:"center", justifyContent:'center'}}><ICGeneralLightBulb height={13.33} width = {13.33} /></View>,
    title: 'Electricity due',
    description: 'More explanation on the subject',
  },
  { time: '2024', isYear: true },
  {
    time: '10 JAN',
    contentIcon: <View style={{backgroundColor:'#F0792E',width:actuatedNormalizeWidth(20),height: actuatedNormalizeWidth(20),borderRadius: actuatedNormalizeWidth(20), alignItems:"center", justifyContent:'center'}}><ICGeneralLightBulb height={13.33} width = {13.33} /></View>,
    title: 'Electricity due',
    description: 'More explanation on the subject',
  },
];

 export const timeLineData = [{
  id:1,
  title: "Standing instruction created",
  icon: <ICGeneralSuccessDone height={22} width={22} />,
  subtitle: "12 Jan ‘21",
  status: 'success'
},
{
  id:2,
  title: "Instalment 1",
  icon: <ICGeneralSuccessDone height={22} width={22} />,
  subtitle: "12 Jan ‘21",
  status: 'success',
  amount: '₹ 2,000',
  update: 'Completed'
},
{
  id:3,
  title: "Instalment 2",
  subtitle: "12 Jan ‘21",
  status: 'fail',
  icon: <ICGeneralErrorAlertRed height={22} width={22} />,
  amount: '₹ 2,000',
  update: 'Failed',
  badgeTitle : "We will try making this payment again in 2 days"


},
{
  id:4,
  title: "Instruction modified",
  subtitle: "12 Jan ‘21",
  status: 'edit',
  icon: <ICGeneralEdit height={22} width={22} />,
  rightIcon: <ICGeneralChevronRight />,
},
{
  id:5,
  title: "Instalment 4",
  subtitle: "12 Jan ‘21",
  status: 'pending',
  icon: <ICGeneralDisabledRadioButtonOn height={22} width={22} />,
  amount: '₹ 2,000',
},
{
  id: 6,
  title: "Instalment 5",
  subtitle: "12 Jan ‘21",
  status: 'pending',
  icon: <ICGeneralDisabledRadioButtonOn height={22} width={22} />,
  amount: '₹ 2,000',
}
]
