import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { STRINGS } from './constants';
import { data, groupData, avatars} from './json';
import styles from './styles';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import IMAvatar from '../../../../dff_library/ui_components/components/Avatar/IMAvatar';
import HeaderComponent from '../../../../src/utils/HeaderComponent/index';
import {
  IMAvatarGroup,
  IMStackedAvatar,
} from '../../../../dff_library/ui_components/components/Avatar';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import { ICGeneralChevronLeft } from '../../../../dff_library/ui_components/atoms/icons';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';

type Props = NativeStackScreenProps<RootStackParamList, 'AvatarDemo'>;

const AvatarDemo = ({ navigation }: Props) => {
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  const [selectedItem, setSelectedItem] = useState<any>(avatars[0]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const generateRandomColor = (): string => {
    const ramdomcolors = [
      'rgba(247, 182, 141, 0.3)',
      'rgba(206, 95, 102, 0.1)',
      'rgba(55, 116, 185, 0.1)'
    ];
    const randomIndex = Math.floor(Math.random() * ramdomcolors.length);
    return ramdomcolors[randomIndex];
  };

  const generatetextColor = (): string => {
    const lettercolors = ['#DB5E10', '#20446C', '#982F35'];
    const randomIndex = Math.floor(Math.random() * lettercolors.length);
    return lettercolors[randomIndex];
  };

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={STRINGS.str_avatar} />
      <View style={styles.containerStyle}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          dropdownType={DropdownType.SingleColumn}
          data={avatars}
          placeholderText={'Avatar'}
          onSelect={selectedItem => {
            setSelectedItem(selectedItem);
          }}
        />

        {selectedItem.key === '1' && (
          <View>
            <Text style={styles.labelStyle}>{STRINGS.str_Default}</Text>
            <View style={styles.viewStyle}>
              <IMAvatar
                avatar={data}
                backgroundColor={generateRandomColor()}
                color={generatetextColor()}
                withLogo={false}
                isImage={false}
                label={true}
              />
            </View>
            <Text style={styles.labelStyle}>{STRINGS.str_With}</Text>
            <View style={styles.viewStyle}>
              <IMAvatar
                avatar={data}
                backgroundColor={generateRandomColor()}
                color={generatetextColor()}
                withLogo={true}
                isImage={false}
                label={true}
              />
            </View>
            <Text style={styles.labelStyle}>{STRINGS.str_Image}</Text>
            <View style={styles.viewStyle}>
              <IMAvatar
                avatar={data}
                backgroundColor={generateRandomColor()}
                color={generatetextColor()}
                isImage={true}
                withLogo={false}
                label={true}
              />
            </View>
          </View>
        )}
        {selectedItem.key === '2' && (
          <View style={styles.viewStyle}>
            <IMStackedAvatar
              avatars={groupData}
              isImage={false}
              label={false}
              sideImage={<ICGeneralChevronLeft />}
            />
          </View>
        )}
        {selectedItem.key === '3' && (
          <View style={styles.viewStyle}>
            <IMAvatarGroup
              avatars={groupData}
              isImage={false}
              withLogo={false}
              label={true}
              handleManage={() => {}}
              maxNoOfAvatarsPerRow={5}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default AvatarDemo;
