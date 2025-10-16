import React from 'react';
import { Text, View } from 'react-native';

import {
  ICGeneralAddBank,
  ICGeneralAddPayee,
  ICGeneralChevronDown,
  ICGeneralChevronUp,
  ICLineAddPayeeAlt,
} from '../../../../dff_library/ui_components/atoms/icons';
import { styles } from './styles';
import { List } from '../../../../dff_library/ui_components/components/ProgressTracker/IMVerticalProgressTrackerWithCounter/types';
import { Data } from '../../../../dff_library/ui_components/components/ProgressTracker/IMVerticalProgressTracker/types';

export const data = [
  { id: 1, title: 'Choose ID type', isEnabled: false },
  { id: 2, title: 'Vehicle details', isEnabled: false },
  { id: 3, title: 'Personal details', isEnabled: false },
  { id: 4, title: 'Payee Info', isEnabled: false },
];

export const ProgressTracker = [
  { key: '1', value: 'General Progress Tracker' },
  { key: '2', value: 'Horizontal PT with Counter' },
  { key: '3', value: 'PT without Counter' },
  { key: '4', value: 'Vertical PT with Counter' },
];

export const sampleData = [
  {
    id: 0,
    isOpen: true,
    isDisableToggle: false,
    title: 'Accordion title',
    subtitle: 'Body Copy',
    isContentJSX: true,
    selectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICGeneralAddBank />
      </View>
    ),
    rightSelectImage: (
      <ICGeneralChevronUp style={{ right: 25 }} width={20} height={20} />
    ),
    rightUnselectImage: (
      <ICGeneralChevronDown style={{ right: 25 }} width={20} height={20} />
    ),
    content: (
      <Text style={styles.descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer auctor
        mauris nec nibh dignissim rutrum
      </Text>
    ),
  },
  {
    id: 1,
    isOpen: false,
    isDisableToggle: false,
    title: 'Accordion title',
    subtitle: 'Body Copy',
    isContentJSX: true,
    selectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICGeneralAddBank />
      </View>
    ),
    rightSelectImage: (
      <ICGeneralChevronUp style={{ right: 25 }} width={20} height={20} />
    ),
    rightUnselectImage: (
      <ICGeneralChevronDown style={{ right: 25 }} width={20} height={20} />
    ),
    content: (
      <Text style={styles.descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer auctor
        mauris nec nibh dignissim rutrum
      </Text>
    ),
  },
  {
    id: 2,
    isOpen: false,
    isDisableToggle: false,
    title: 'Accordion title',
    subtitle: 'Body Copy',
    isContentJSX: true,
    selectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICGeneralAddBank />
      </View>
    ),
    rightSelectImage: (
      <ICGeneralChevronUp style={{ right: 25 }} width={20} height={20} />
    ),
    rightUnselectImage: (
      <ICGeneralChevronDown style={{ right: 25 }} width={20} height={20} />
    ),
    content: (
      <Text style={styles.descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer auctor
        mauris nec nibh dignissim rutrum
      </Text>
    ),
  },
  {
    id: 3,
    isOpen: false,
    isDisableToggle: false,
    title: 'Accordion title',
    subtitle: 'Body Copy',
    isContentJSX: false,
    selectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage: (
      <View style={styles.iconImageStyle}>
        <ICGeneralAddBank />
      </View>
    ),
    rightSelectImage: (
      <ICGeneralChevronUp style={{ right: 25 }} width={20} height={20} />
    ),
    rightUnselectImage: (
      <ICGeneralChevronDown style={{ right: 25 }} width={20} height={20} />
    ),
    content: [
      {
        id: 0,
        text: 'Manage Scheduled Payments',
        image: <ICGeneralAddPayee width={20} height={20} />,
      },
      {
        id: 1,
        text: 'Add/Manage Payees',
        image: <ICGeneralAddPayee width={20} height={20} />,
      },
    ],
  },
];

export const statusTitleData = {
  success: 'Item done',
  inProgress: 'Item in progress',
  fail: 'Item failed',
  unChecked: 'Item not started',
};

export const verticalTrackerData: List[] = [
  {
    key: 1,
    item: 'Item 1',
    status: 'success',
  },
  { key: 2, item: 'Item 2', status: 'inProgress' },
  { key: 3, item: 'Item 3', status: 'unChecked' },
];

export var originalData: Data[] = [
  { key: 1, statusCode: 'success' },
  { key: 2, statusCode: 'fail' },
  { key: 3, statusCode: 'inProgress' },
  { key: 4, statusCode: 'unChecked' },
];

export const datawith2Items = [
  { id: 1, title: 'Payee info', isEnabled: false },
  { id: 2, title: 'Bank details', isEnabled: false },
];

export const datawith3Items = [
  { id: 1, title: 'Choose ID Type', isEnabled: false },
  { id: 2, title: 'Vehicle details', isEnabled: false },
  { id: 3, title: 'Personal details', isEnabled: false },
];

export const progressTypes = [
  { key: 0, value: '2 Items' },
  { key: 1, value: '3 Items' },
  { key: 2, value: '4 Items' },
];
