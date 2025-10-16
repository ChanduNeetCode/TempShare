import React, { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../routes/RootStackParams';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { STRINGS } from './constants';
import { IMCustomNavigationBar } from '../../../../dff_library/ui_components/components/CustomNavigationBar';
import {
  ICComponentTopMenuNav,
  Back,
  ICComponentTopNav,
  ICGeneralChevronLeft,
  ICGeneralDisabledHelpCircle,
  ICGeneralDisabledMenu,
} from '../../../../dff_library/ui_components/atoms/icons';
import styles from './styles';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import { actuatedNormalizeWidth } from '../../../utils/utility';

type Props = NativeStackScreenProps<RootStackParamList, 'NavigationbarDemo'>;

const NavigationbarDemo = ({ navigation }: Props) => {
  const Navigation = [
    { key: 1, value: 'With Short Title' },
    { key: 2, value: 'With Long Title' },
    { key: 3, value: 'With Card View' },
    { key: 4, value: 'With Color Change' },

  ];
  const [cardView, setCardView] = useState(false);
  const [title, setTitle] = useState(STRINGS.str_shortTitle);
  const [containerStyle, setContainerStyle] = useState(styles.containerStyle);
  const [gradientColor, setgradientColor] = useState([colors.GradientOrangeStart, colors.GradientOrangeEnd]);
  const gradientColor1 = [colors.GradientOrangeStart, colors.GradientOrangeEnd];
  const gradientAshColor = [colors.PastelAmber100, colors.PastelAmber100];

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

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handlePressActionButton = () => { };
  const handlePressMenuButton = () => { };
  const headerLeftProps = {
    onPress: handleBackButton,
    imageSource: <Back />,
  };

  const headerLeftAshProps = {
    onPress: handleBackButton,
    imageSource: (<View style={styles.circleStyle}>
      <ICGeneralChevronLeft  height={28} width={28} />
    </View>),
  };

  const headerActionProps = {
    onPress: handlePressActionButton,
    imageSource: <ICComponentTopNav />,
  };

  const headerActionAshProps = {
    onPress: handlePressActionButton,
    imageSource: (<View style={styles.helpCircleStyle}>
      <ICGeneralDisabledHelpCircle height={28} width={28} />
    </View>)
  };

  const headerMenuAshProps = {
    imageSource: (<View style={styles.circleStyle}>
      <ICGeneralDisabledMenu height={28} width={28} />
    </View>),
    onPress: handlePressMenuButton,
    
  };

  const headerMenuProps = {
    onPress: handlePressMenuButton,
    imageSource: <ICComponentTopMenuNav />,
  };

  const [menu, setMenu] = useState(headerMenuProps);
  const [action, setAction] = useState(headerActionProps);
  const [left, setLeft] = useState(headerLeftProps);

  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.subContainer}>
        <IMCustomNavigationBar
          title={title}
          linearGradientColors={gradientColor}
          headerLeftProps={left}
          headerActionProps={action}
          headerMenuProps={menu}
          containerStyle={containerStyle}
          isCardView={cardView}
          childProps={<View style={{ height: 50 }} />}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <IMDropdown
          dropdownWidth={actuatedNormalizeWidth(320)}
          disable={false}
          placeholderText={Navigation[0].value}
          dropdownType={DropdownType.SingleColumn}
          data={Navigation}
          onSelect={selectedItem => {
            if (selectedItem.key == 1) {
              setCardView(false);
              setTitle(STRINGS.str_shortTitle)
              setgradientColor(gradientColor1)
              setContainerStyle(styles.containerStyle)
              setMenu(headerMenuProps);
              setAction(headerActionProps);
              setLeft(headerLeftProps);
            } else if (selectedItem.key == 2) {
              setCardView(false);
              setTitle(STRINGS.str_longTitle)
              setgradientColor(gradientColor1)
              setContainerStyle(styles.containerStyle1)
              setMenu(headerMenuProps);
              setAction(headerActionProps);
              setLeft(headerLeftProps);
            }
            else if (selectedItem.key == 3) {
              setCardView(true);
              setTitle(STRINGS.str_sendMoney)
              setgradientColor(gradientColor1)
              setContainerStyle(styles.containerStyle)
              setMenu(headerMenuProps);
              setAction(headerActionProps);
              setLeft(headerLeftProps);
            }
            else if (selectedItem.key == 4) {
              setCardView(true);
              setTitle('');
              setgradientColor(gradientAshColor)
              setContainerStyle(styles.containerStyle)
              setMenu(headerMenuAshProps);
              setAction(headerActionAshProps);
              setLeft(headerLeftAshProps);

            }
          }}
        />
      </View>
    </View>
  );
};

export default NavigationbarDemo;
