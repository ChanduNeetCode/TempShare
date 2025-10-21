import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './styles';
import { RootStackParamList } from '../../../routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { STRINGS } from './constants';
import HeaderComponent from '../../../utils/HeaderComponent';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { IMNormalList, IMSublineList, IMAlphabeticalList } from '../../../../dff_library/ui_components/components/ScrollBarScrollList';
import {
  sampleData,
  data,
  sublineList
} from './json';
import { typography } from '../../../../dff_library/ui_components/atoms';
import {
  IMDropdown,
} from '../../../../dff_library/ui_components/components/index';

type Props = NativeStackScreenProps<RootStackParamList, 'ScrollBarScrollListDemo'>;
const dropDownList = [
  { key: "1", value: 'ScrollList General' },
  { key: "2", value: 'ScrollList Alphabetical' },
  { key: "3", value: 'Subline List' },

];
const ScrollBarScrollListDemo = ({ navigation }: Props) => {
  const [selectedVal, setSelectedVal] = useState<any>(dropDownList[0]);


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



  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent
        navigation={navigation}
        title={STRINGS.str_scrollBarScrollList}
      />

      <View style={styles.parentViewStyle}>
        <View style={{marginHorizontal:20}}>
        <IMDropdown
         // headerStyle={{ fontFamily: 'Mulish-Bold' }}
          //pare={{ alignItems: 'center', marginTop: 10 }}
          data={dropDownList}
          disable={false}
          dropdownType={DropdownType.Wide}
          dropdownWidth={actuatedNormalizeWidth(320)}
          onSelect={(selectedItem, index) => {
            setSelectedVal(selectedItem);
          }}
          placeholderText={dropDownList[0].value}
        />
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: 60,
            backgroundColor:
              selectedVal.key == 1 ||
                selectedVal.key == 2 ||
                selectedVal.key == 3
                ? colors.White
                : colors.BGGrey90,
            
          }}>
          {selectedVal.key == 1 && (
            <IMNormalList
              footerElement={() => <Text>Footer content</Text>}
              amt={'amt'}
              date={'date'}
              headingKey="name"
              highlightColor='red'
              isListHeader={true}
              isSeparator={true}
              leftIcon="logo"
              list={data}
              listEndHeaderTextStyle={styles.listEndHeaderTextStyle}
              ListEndHeadingTitle={'Last paid'}
              ListHeadingTitle={'All payees'}
              mainContainerStyle={styles.mainContainerStyle}
              onClickRightIcon={() => {}}
              rightEndText={styles.rightEndText}
              rightIconKey="rightLogo"
              starIconKey="starLogo"
              subLineKey={'actNumber'}
            // onItemClick={handleItemClick}
            />
          )}
          {selectedVal.key == 2 && (
            <IMAlphabeticalList
              data={sampleData}
              isSearch={false}
              titleStyle={typography.BodyRegular1}
              renderCustomSectionHeader={section => (
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
                </View>
              )} 
              style={styles.style}
              isListIndexLetter={true}
            />
      
          )}
          {selectedVal.key == 3 && (
            <IMSublineList
              list={sublineList}
              mainContainerStyle={styles.mainContainerStyle}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default ScrollBarScrollListDemo;
