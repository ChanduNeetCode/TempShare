import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  Alert,
  BackHandler,
} from 'react-native';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import {
  IMContainedEmptyStateComponent,
  IMEmptyStateComponent,
} from '../../../../dff_library/ui_components/components/EmptyState';
import { ICEmpty, ICGeneralAddPrimaryOrange , ICGeneralRepeatPrimaryOrange} from '../../../../dff_library/ui_components/atoms/icons';
import { actuatedNormalizeWidth , actuatedNormalizeHeight } from '../../../../src/utils/utility';
import IMDropdown from '../../../../dff_library/ui_components/components/Dropdowns/IMDropdown/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { STRINGS } from './constant';
import styles from './styles';

const onPress = (text: string) => {
  // Alert.alert(text);
};

const emptyState = [
  { key: 1, value: STRINGS.str_defaultType },
  { key: 2, value: STRINGS.str_containedType },
];

type Props = NativeStackScreenProps<RootStackParamList, 'EmptyStateDemo'>;

const EmptyStateDemo = ({ navigation }: Props) => {
  const [selectedVal, setSelectedVal] = useState<any>(emptyState[0]);
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
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <CustomStatusBar
          gradientColorsArray={[
            colors.GradientOrangeStart,
            colors.GradientOrangeEnd,
          ]}
        />
        <HeaderComponent navigation={navigation} title={'Empty State'} />
        <View style={styles.headerContainerStyle}>
          <IMDropdown
            dropdownWidth={actuatedNormalizeWidth(320)}
            placeholderText={emptyState[0].value}
            disable={false}
           // headerStyle={styles.headerStyle}
            dropdownType={DropdownType.SingleColumn}
            data={emptyState}
            onSelect={selectedItem => {
              setSelectedVal(selectedItem);
            }}
          />
        </View>
        {selectedVal.key == 1 && (
          <ScrollView>
            <View style={styles.containerStyle}>
              <Text style={styles.textStyle}>Default Type 1</Text>
              <IMEmptyStateComponent
                image={<ICEmpty width={48} height={48} />}
                isButton={true}
                onPress={() => onPress('default empty state action')}
                subline={'Subline'}
                title={'Title'}
                buttonTitle='Button'
              />
              <View style={{ height: 70 }}></View>
              <Text style={styles.textStyle}>Default Type 2</Text>
              <IMEmptyStateComponent
                image={<ICEmpty />}
                isButton={false}
                stateStyle={{}}
                subline={'Subline'}
                title={'Title'}
              />
            </View>
          </ScrollView>
        )}
        {selectedVal.key == 2 && (
          <ScrollView>
            <View style={styles.containerStyle}>
              <Text style={styles.textStyle}>Contained Type 1</Text>
              <IMContainedEmptyStateComponent
                buttonTitle="Button"
                isButton={true}
                isRightIcon={true}
                onPress={onPress}
                rightImage={<ICGeneralAddPrimaryOrange height={actuatedNormalizeHeight(16)} width={actuatedNormalizeWidth(16)}/>}
                subline={'Subline'}
                title={'Title'}
                
              />
              <View style={styles.containerStyle}></View>
              <Text style={styles.textStyle}>Contained Type 2</Text>
              <IMContainedEmptyStateComponent
                isButton={false}
                subline={'Subline'}
                title={'Title'}
              />
            </View>
            <View style={styles.containerStyle}>
              <Text style={styles.textStyle}>Contained Type 3</Text>
              <IMContainedEmptyStateComponent
                buttonTitle="Retry"
                isButton={true}
                isRightIcon={true}
                onPress={onPress}
                rightImage={<ICGeneralRepeatPrimaryOrange height={actuatedNormalizeHeight(16)} width={actuatedNormalizeWidth(16)}/>}
                subline={'Subline'}
                title={'Title'}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default EmptyStateDemo;
