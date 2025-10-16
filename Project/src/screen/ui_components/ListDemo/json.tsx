import React from 'react';
import { Text, View } from 'react-native';

import {
  ICComponentDrawerType,
  ICLineBankAccount,
  ICBankLogo,
  ICComponentDrawerWarning,
  ICGeneralDisabledCheckBoxUnChecked,
  Refresh,
  Star,
} from '../../../../dff_library/ui_components/atoms/icons';
import { List } from '../../../../dff_library/ui_components/components/List/IMGroupList/types';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../dff_library//ui_components/utils/utility';
import { flatListObject } from '../../../../dff_library/ui_components/components/Dropdowns/utils/types';

export const AlphabeticalListData = [
  {
    value: 'A Label',
    key: 'lCUTs2aa',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
    isResult: true,
  },
  {
    value: 'B Label',
    key: 'TXdL0caa',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'C Label',
    key: 'zqsiEwaaa',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'D Label',
    key: 'psg2PMaaa',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'E Label',
    key: '1K6I18aaa',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'F Label',
    key: 'NVHSkAaaa',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'G Label',
    key: 'lCUTs2bb',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'H Label',
    key: 'TXdL0cbb',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'I Label',
    key: 'zqsiEwabb',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'J Label',
    key: 'psg2PMbb',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'K Label',
    key: '1K6I18bb',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'L Label',
    key: 'NVHSkAbb',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'M Label',
    key: 'lCUTs2',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'N Label',
    key: 'TXdL0c',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'O Label',
    key: 'zqsiEw',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'P Label',
    key: 'psg2PM',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'Q Label',
    key: '1K6I18',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'R Label',
    key: 'NVHSkA',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'S Label',
    key: 'SaHqyG',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'T Label',
    key: 'iaT1Ex',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'U Label',
    key: 'OvMd5e',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'V Label',
    key: '25zqAO',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'W Label',
    key: '8cWuu3',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'X Label',
    key: 'lCUTs2q',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'Y Label',
    key: 'TXdL0ct',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'Z Label',
    key: 'zqsiEwh',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'A Label',
    key: 'psg2PMh',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'A Label',
    key: '1K6I18h',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'B Label',
    key: 'NVHSkAh',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'B Label',
    key: 'SaHqyGh',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'J Label',
    key: 'iaT1Exh',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'M Label',
    key: 'OvMd5eh',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'M Label',
    key: '25zqAOh',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'P Label',
    key: '8cWuu3h',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'L Label',
    key: 'lCUTs2ha',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'E Label',
    key: 'TXdL0cha',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'W Label',
    key: 'zqsiEwha',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'W Label',
    key: 'psg2PMha',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'G Label',
    key: '1K6I18ha',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'P Label',
    key: 'NVHSkAha',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'R Label',
    key: 'SaHqyGha',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'J Label',
    key: 'iaT1Exha',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'M Label',
    key: 'OvMd5eha',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'M Label',
    key: '25zqAOha',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: 'P Label',
    key: '8cWuu3ha',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: '0000',
    key: '25zqAffOha',
    logo: (
      <ICLineBankAccount
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: '###4346456',
    key: '8cWfffuu3ha',
    logo: (
      <ICComponentDrawerType
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: '0006',
    key: '25z',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
  {
    value: '###46',
    key: '8cWff',
    logo: (
      <ICBankLogo
        height={actuatedNormalizeHeight(20)}
        width={actuatedNormalizeWidth(20)}
      />
    ),
  },
];

export const content: List[] = [
  {
    main: (
      <View
        style={{
          width: actuatedNormalizeWidth(328),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ color: '#00000050', fontFamily: 'Mulish-Regular' }}>
            cnn
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            6497816328401657
          </Text>
          <Text
            style={{
              backgroundColor: '#f0792e30',
              color: '#f0792e',
              fontSize: 10,
              fontFamily: 'Mulish-Medium',
            }}>
            300-SELF CONFIDENCE IS KEY
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#7D8287',
              fontSize: 10,
              fontFamily: 'Mulish-Regular',
            }}>
            created at 4.15 PM
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            -300
          </Text>
        </View>
      </View>
    ),
    mainTextContainerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: 16,
    },
  },
  {
    main: (
      <View
        style={{
          width: actuatedNormalizeWidth(328),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ color: '#00000050', fontFamily: 'Mulish-Regular' }}>
            cnn
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            6497816328401657
          </Text>
          <Text
            style={{
              backgroundColor: '#f0792e30',
              color: '#f0792e',
              fontSize: 10,
              fontFamily: 'Mulish-Medium',
            }}>
            300-SELF CONFIDENCE IS KEY
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#7D8287',
              fontSize: 10,
              fontFamily: 'Mulish-Regular',
            }}>
            created at 4.15 PM
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            -300
          </Text>
        </View>
      </View>
    ),
    sub: (
      <Text style={{ color: '#333638', fontFamily: 'Mulish-SemiBold' }}>
        View PDF
      </Text>
    ),
    subTextContainerStyle: { backgroundColor: '#FFD580' },
    mainTextContainerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  },
  {
    main: (
      <View
        style={{
          width: actuatedNormalizeWidth(328),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ color: '#00000050', fontFamily: 'Mulish-Regular' }}>
            cnn
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            6497816328401657
          </Text>
          <Text
            style={{
              backgroundColor: '#f0792e30',
              color: '#f0792e',
              fontSize: 10,
              fontFamily: 'Mulish-Medium',
            }}>
            300-SELF CONFIDENCE IS KEY
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#7D8287',
              fontSize: 10,
              fontFamily: 'Mulish-Regular',
            }}>
            created at 4.15 PM
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            -300
          </Text>
        </View>
      </View>
    ),
    sub: (
      <Text style={{ color: '#333638', fontFamily: 'Mulish-SemiBold' }}>
        View PDF
      </Text>
    ),
  },
  {
    main: (
      <View
        style={{
          width: actuatedNormalizeWidth(328),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ color: '#00000050', fontFamily: 'Mulish-Regular' }}>
            cnn
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            6497816328401657
          </Text>
          <Text
            style={{
              backgroundColor: '#f0792e30',
              color: '#f0792e',
              fontSize: 10,
              fontFamily: 'Mulish-Medium',
            }}>
            300-SELF CONFIDENCE IS KEY
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#7D8287',
              fontSize: 10,
              fontFamily: 'Mulish-Regular',
            }}>
            created at 4.15 PM
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            -300
          </Text>
        </View>
      </View>
    ),
    sub: (
      <Text style={{ color: '#333638', fontFamily: 'Mulish-SemiBold' }}>
        View PDF
      </Text>
    ),
  },
  {
    main: (
      <View
        style={{
          width: actuatedNormalizeWidth(328),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ color: '#00000050', fontFamily: 'Mulish-Regular' }}>
            cnn
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            6497816328401657
          </Text>
          <Text
            style={{
              backgroundColor: '#f0792e30',
              color: '#f0792e',
              fontSize: 10,
              fontFamily: 'Mulish-Medium',
            }}>
            300-SELF CONFIDENCE IS KEY
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#7D8287',
              fontSize: 10,
              fontFamily: 'Mulish-Regular',
            }}>
            created at 4.15 PM
          </Text>
          <Text style={{ color: '#000', fontFamily: 'Mulish-SemiBold' }}>
            -300
          </Text>
        </View>
      </View>
    ),
    sub: (
      <Text style={{ color: '#333638', fontFamily: 'Mulish-SemiBold' }}>
        View PDF
      </Text>
    ),
  },
];

export const data = [
  {
    id: '54rfd',
    name: 'Name',
    amt: 'Amt',
    actNumber: 'A/c number',
    date: 'Date',
    logo: <ICComponentDrawerType height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />,
    rightLogo: <Refresh />,
    starLogo: <Star />,
    optionalText: 'sgertvshjnsbjkdfnbauy4garfbciq74',
  },
  {
    id: 'a0s0a8ssbsd',
    name: 'Name',
    amt: 'Amt',
    actNumber: <Text>Balance</Text>,
    date: 'Date',
    logo: <ICBankLogo height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />,
    rightLogo: <Refresh />,
    starLogo: <Star />,
    isoptionalText: true,
  },
  {
    id: '16hbajsabsd',
    name: 'Name',
    amt: 'Amt',
    actNumber: 'A/c number',
    date: 'Date',
    logo: <ICComponentDrawerWarning height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />,
    rightLogo: <Refresh />,
    starLogo: <Star />,
  },
  {
    id: 'nahs75a5sg',
    name: 'Name',
    actNumber: 'A/c number',
    amt: 'Amt',
    date: 'Date',
    logo: <ICLineBankAccount height={actuatedNormalizeHeight(20)} width={actuatedNormalizeWidth(20)} />,
    rightLogo: <Refresh />,
    starLogo: <Star />,
  },
  {
    id: '667atsas',
    name: 'Name',
    actNumber: 'A/c number',
    amt: 'Amt',
    date: 'Date',
    logo: <ICComponentDrawerWarning height={actuatedNormalizeHeight(30)} width={actuatedNormalizeWidth(20)} />,
    rightLogo: <Refresh />,
    starLogo: <Star />,
  },
];

export const lists: flatListObject[] = [
  { key: '1', value: 'Alphabetical List' },
  { key: '2', value: 'Chevron List' },
  { key: '3', value: 'Choice List' },
  { key: '4', value: 'General List' },
  { key: '5', value: 'Group List' },
  { key: '6', value: 'Normal List' },
];

export const sampleData = [
  {
    value: 'Label',
    key: 'lCUTs2aa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label Goldstein',
    key: 'TXdL0caa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'zqsiEwaaa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'psg2PMaaa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '1K6I18aaa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'NVHSkAaaa',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'lCUTs2bb',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'TXdL0cbb',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'zqsiEwabb',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'psg2PMbb',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '1K6I18bb',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'NVHSkAbb',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'lCUTs2',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'TXdL0c',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'zqsiEw',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'psg2PM',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '1K6I18',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'SaHqyG',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'iaT1Ex',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'OvMd5e',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '25zqAO',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '8cWuu3',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'lCUTs2q',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'TXdL0ct',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'zqsiEwh',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'psg2PMh',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '1K6I18h',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'NVHSkAh',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'SaHqyGh',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'iaT1Exh',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'OvMd5eh',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '25zqAOh',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: '8cWuu3h',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'lCUTs2ha',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'Label',
    key: 'TXdL0cha',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'hello',
    key: 'TXdL0cha',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
  {
    value: 'world',
    key: 'TXdL0cha',
    subTitle: 'Content',
    icon: <ICGeneralDisabledCheckBoxUnChecked />,
  },
];
