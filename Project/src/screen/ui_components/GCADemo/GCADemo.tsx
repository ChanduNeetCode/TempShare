import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMGCA } from '../../../../dff_library/ui_components/components/GCA';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import { STRINGS } from './constants';
import { alphabetdata } from './json';
import { actuatedNormalizeWidth } from '../../../../dff_library/ui_components/utils/utility';
import styles from './style';

type Props = NativeStackScreenProps<RootStackParamList, 'GCADemo'>;

const GCADemo = ({ navigation }: Props) => {
  const gca = [
    { key: 1, value: 'GCA' },
    { key: 2, value: 'Credit Card Authentication' },
  ];
  const countries = [{ key: 'Key 1', value: 'From: SBA ....4209   ' }];
  const [title, setTitle] = useState('Authenticate with your debit card');
  const [subtitle, setsubTitle] = useState(
    'Your ICICI bank debit card has a grid on its \nbackside. Enter the numbers from the grid below.',
  );
  const [gcadisplay, setGCA] = useState(true);
  const [ccadisplay, setCCA] = useState(false);

  const dropdownContainer = () => {
    return (
      <View style={styles.dropdownContainer}>
        <IMDropdown
          dropdownWidth={220}
          disable={true}
          dropdownType={DropdownType.SingleColumn}
          data={countries}
          placeholderText={countries[0].value}
          onSelect={(_selectedItem, _index) => {}}
        />
      </View>
    );
  };

  const onPress = (key: any) => {
    if (key == 1) {
      setTitle('Authenticate with your debit card');
      setsubTitle(
        'Your ICICI bank debit card has a grid on its \nbackside. Enter the numbers from the grid below.',
      );
      setGCA(true);
      setCCA(false);
    } else {
      setTitle('Authenticate with card PIN');
      setsubTitle(
        'Your ICICI bank credit card has a four digit pin associated to it. Please enter that pin to proceed',
      );
      setCCA(true);
      setGCA(false);
    }
  };
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
    <View style={styles.mainContainer}>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_gca} />
      <IMDropdown
        parentDropDownStyle={styles.mainDropdown}
        dropdownWidth={actuatedNormalizeWidth(320)}
        disable={false}
        dropdownType={DropdownType.Wide}
        data={gca}
        placeholderText={gca[0].value}
        onSelect={(selectedItem, _index) => {
          onPress(selectedItem.key);
        }}
      />
      <IMGCA
        isTitle={true}
        title={title}
        subtitle={subtitle}
        keyboardType="numeric"
        maxLength={4}
        enterPinText={STRINGS.str_pinText}
        dropdowncomponent={dropdownContainer()}
        inputFirstCallback={_val1 => {}}
        inputSecondCallback={_val2 => {}}
        inputThirdCallback={_val3 => {}}
        inputResultCallback={_val => {}}
        alphabets={alphabetdata}
        isGCA={gcadisplay}
        isCCA={ccadisplay}
      />
    </View>
  );
};

export default GCADemo;
