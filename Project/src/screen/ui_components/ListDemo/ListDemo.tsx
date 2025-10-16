import React, { useEffect, useState } from 'react';
import { BackHandler, Button, Modal, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import { STRINGS } from './constants';
import { sampleData, data, content, lists, AlphabeticalListData } from './json';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import {
  IMAlphabeticalList,
  IMChevronList,
  IMGeneralList,
  IMGroupList,
  IMNormalList,
} from '../../../../dff_library/ui_components/components/List';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import typography from '../../../../dff_library/ui_components/atoms/typography';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown';
import {
  actuatedNormalizeWidth,
  actuatedNormalizeHeight,
  actuatedNormalizeModerateScale,
} from '../../../../dff_library/ui_components/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type Props = NativeStackScreenProps<RootStackParamList, 'ListDemo'>;

const ListDemo = ({ navigation }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any>(lists[0]);

  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const handleItemClick = (item: any) => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.parentViewStyle}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_list} />
      <View style={styles.parentContainer}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          data={lists}
          placeholderText={'Alphabetical List'}
          onSelect={selectedItem => {
            setSelectedItem(selectedItem);
          }}
        />
      </View>
      <View style={styles.parentViewStyle}>
        {selectedItem.key === '1' && (
          <IMAlphabeticalList
            data={AlphabeticalListData}
            titleStyle={typography.BodyRegular1}
            isSearch={false}
            renderCustomSectionHeader={section => (
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
              </View>
            )}
          />
        )}
        {selectedItem.key === '2' && (
          <IMChevronList
            displayKey="value"
            list={sampleData}
            isleftSideImage={false}
            leftIconViewStyle={styles.leftIconViewStyle}
            isSeparator={true}
          />
        )}
        {selectedItem.key === '3' && (
          <IMAlphabeticalList
            data={AlphabeticalListData}
            titleStyle={typography.BodyRegular1}
            isSearch={true}
            renderCustomSectionHeader={section => (
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
              </View>
            )}
            isLeftIcon={false}
            isRadioButton={true}
            alphabeticalHeading={'Title'}
            searchRenderTouchableActiveStyle={{ backgroundColor: colors.White }}
            searchRenderTouchContainerStyle={{
              backgroundColor: colors.CoolGrey100,
            }}
          />
        )}
        {selectedItem.key === '4' && (
          <IMGeneralList
            content="subTitle"
            displayKey="value"
            list={sampleData}
            isSeparator={true}
          />
        )}
        {selectedItem.key === '5' && (
          <IMGroupList
            onPressItem={() => {
             
            }}
            content={content}
            isSeparator={true}
            highlightWidth={1}
            highlightColor={styles.highlightColor.color}
            itemSeparateLineStyle={styles.itemSeparateLineStyle}
            mainContainerStyle={styles.mainContainerStyle}
          />
        )}
        {selectedItem.key === '6' && (
          <IMNormalList
            rightIconKey="rightLogo"
            leftIcon="logo"
            isListHeader={true}
            subLineKey={'actNumber'}
            starIconKey="starLogo"
            ListHeadingTitle={'All payees'}
            ListEndHeadingTitle={'Last paid'}
            headingStyle={styles.headingStyle}
            listHeaderViewStyle={styles.listHeaderViewStyle}
            listEndHeaderTextStyle={styles.listEndHeaderTextStyle}
            headingKey="name"
            date={'date'}
            amt={'amt'}
            list={data}
            isSeparator={false}
            onClickRightIcon={() => {
            
            }}
            onItemClick={handleItemClick}
            isOnPressHighlight={true}
            touchStyle={{ width: '100%' }}
          />
        )}
      </View>
    </View>
  );
};

export default ListDemo;
