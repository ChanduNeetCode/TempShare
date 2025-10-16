import React from 'react';
import { Text, View } from 'react-native';

import {
  ICGeneralAddBank,
  ICGeneralAddPayee,
  ICGeneralChevronDown,
  ICGeneralChevronUp,
  ICLineAddPayeeAlt,
} from '../../../../dff_library/ui_components/atoms/icons';
import styles from './styles';

export const sampleData = [
  {
    id: 0,
    isOpen: true,
    isDisableToggle: false,
    title: 'Accordion title',
    subtitle: 'Body Copy',
    isContentJSX: true,
    selectIconImage: (
      <View
        style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage:
      (
        <View
          style={styles.iconImageStyle}>
          <ICGeneralAddBank />
        </View>
      ),
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: (
      <Text
        style={styles.descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer
        auctor mauris nec nibh dignissim rutrum
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
      <View
        style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage:
      (
        <View
          style={styles.iconImageStyle}>
          <ICGeneralAddBank />
        </View>
      ),
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: (
      <Text
        style={styles.descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer
        auctor mauris nec nibh dignissim rutrum
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
      <View
        style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage:
      (
        <View
          style={styles.iconImageStyle}>
          <ICGeneralAddBank />
        </View>
      ),
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: (
      <Text
        style={styles.descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer
        auctor mauris nec nibh dignissim rutrum
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
    isMainTooltip:true,
    mainTooltipContent:'New service',
    selectIconImage: (
      <View
        style={styles.iconImageStyle}>
        <ICLineAddPayeeAlt />
      </View>
    ),
    unselectIconImage:
      (
        <View
          style={styles.iconImageStyle}>
          <ICGeneralAddBank />
        </View>
      ),
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: [
      {
        id: 0,
        text: 'Manage Scheduled Payments',
        image: <ICGeneralAddPayee width={20} height={20} />,
      },
      {
        id: 1,
        isTooltip:true,
        tooltipContent:'New',
        tooltipContentStyle:{color:'white'},
        text: 'Add/Manage Tooltip',
        image: <ICGeneralAddPayee width={20} height={20} />,
      },
    ],
  },

];

export const sampleData2 = [
  {
    id: 0,
    isOpen: false,
    isDisableToggle: false,
    title: 'Accordion title',
    subtitle: 'Body Copy',
    isContentJSX: true,
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: (
      <Text
        style={styles.descriptionStyle1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer
        auctor mauris nec nibh dignissim rutrum
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
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: (
      <Text
        style={styles.descriptionStyle1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer
        auctor mauris nec nibh dignissim rutrum
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
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: (
      <Text
        style={styles.descriptionStyle1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer
        auctor mauris nec nibh dignissim rutrum
      </Text>
    ),
  },
  {
    id: 3,
    isOpen: false,
    isDisableToggle: false,
    title: 'Accordion title',
    subtitle: 'Body Copy',
    isContentJSX: true,
    rightSelectImage: <ICGeneralChevronUp width={20} height={20} />,
    rightUnselectImage: <ICGeneralChevronDown width={20} height={20} />,
    content: (
      <Text
        style={styles.descriptionStyle1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur quam neque, ac ullamcorper purus sodales ut. Integer
        auctor mauris nec nibh dignissim rutrum
      </Text>
    ),
  },

];
