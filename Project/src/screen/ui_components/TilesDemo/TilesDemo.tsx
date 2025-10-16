import React, { useEffect, useState } from 'react';
import { BackHandler, FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import colors from '../../../../dff_library/ui_components/atoms/colors';
import {
  ICAddPayee,
  ICBankLogo,
  ICGeneralChevronDownOrange,
  ICGeneralChevronUpOrange,
  ICLayer,
  ICLineScanAnyQRCodeOrange,
} from '../../../../dff_library/ui_components/atoms/icons';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import { TilesType } from '../../../../dff_library/ui_components/components/Tiles/types';
import {
  carouselData,
  horizontalTilesData,
  listContained,
  smallListContained,
} from './json';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import {
  actuatedNormalizeHeight,
  actuatedNormalizeWidth,
} from '../../../../src/utils/utility';
import {
  IMContainedTiles,
  IMDropdown,
  IMHorizontalTiles,
  IMStackedTiles,
} from '../../../../dff_library/ui_components/components/index';
import { STRINGS } from './constants';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'TilesDemo'>;

const TilesDemo = ({ navigation }: Props) => {
  const Tiles = [
    { key: 1, value: 'Stacked' },
    { key: 2, value: 'Horizontal' },
    { key: 3, value: 'Contained' },
    { key: 4, value: 'Carousel' }
  ];
  const [selectedVal, setSelectedVal] = useState<any>(Tiles[0]);
  const [bgColor, setbgColor] = useState<string>(colors.White);

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
      <View style={{ flex: 1, backgroundColor: bgColor }}>
        <CustomStatusBar
          gradientColorsArray={[
            colors.GradientOrangeStart,
            colors.GradientOrangeEnd,
          ]}
        />
        <HeaderComponent navigation={navigation} title={STRINGS.str_tiles} />
        <View style={styles.dropdownStyle}>
          <IMDropdown
            dropdownWidth={actuatedNormalizeWidth(320)}
            disable={false}
            placeholderText={Tiles[0].value}
            dropdownType={DropdownType.SingleColumn}
            data={Tiles}
            onSelect={(selectedItem) => {
            if(selectedItem.key==3){setbgColor(colors.BGGrey90)}
            else setbgColor(colors.White);
              setSelectedVal(selectedItem);
            }}
          />
        </View>
        {selectedVal.key == 1 && (
          <View
            style={styles.viewStyle2}>
            <IMStackedTiles
              onClick={() => {
              }}
              isTooltip = {true}
              tooltipContent={<ICBankLogo height={20} width={16}/>}
              tilesType={TilesType.StackedWithoutBackground}
              styleContainedTileView={{marginTop: actuatedNormalizeHeight(16)}}
              cardTitle={STRINGS.str_heading_here}
              cardIcon={<ICLineScanAnyQRCodeOrange height={36} width={36} />}
            />
            <IMStackedTiles
            onClick={() => {
            }}
            isChip = {true}
            badgesTitle={'New'}
            tilesType={TilesType.StackedWithoutBackground}
            styleContainedTileView={{marginTop: actuatedNormalizeHeight(16)}}
            cardTitle={STRINGS.str_heading_here}
            cardIcon={<ICLineScanAnyQRCodeOrange height={36} width={36} />}
          />
            <IMStackedTiles
              onClick={() => {
              }}
              tilesType={TilesType.StackedWithBackground}
              styleStackedMainBGViewStyle={styles.styleStackedMainBGViewStyle}
              cardTitle={'Credit cards'}
              cardIcon={<ICLayer />}
            />
          </View>
        )}
        {selectedVal.key == 2 && (
          <View style={styles.viewStyle}>
            <FlatList
              data={horizontalTilesData}
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ index, item }) => (
                <View style={styles.carouselStyle}>
                  <IMHorizontalTiles
                    cardTitle={item.title}
                    cardIcon={item.iconImage}
                    tilesType={
                      index === 0 || index === 1
                        ? TilesType.HorizontalWithoutBackground
                        : TilesType.HorizontalWithBackground
                    }
                    onClick={() => { }}
                  />
                </View>
              )}
            />
          </View>
        )}

        {selectedVal.key == 3 && (
          <View style={styles.viewStyle}>
            <IMContainedTiles
              title={STRINGS.str_Title_tiles}
              items={smallListContained}
              isContainedBackGroundColor={true}
              onClick={() => {
              }}
            />
            <IMContainedTiles
              items={listContained}
              isContainedBackGroundColor={true}
              isSelectedStyle={false}
              onClick={() => {
              }}
              isMoreButton={true}
              viewLessIcon={<ICGeneralChevronDownOrange height={45} />}
              viewMoreIcon={<ICGeneralChevronUpOrange height={45} />}
            />

          </View>
        )}
        {selectedVal.key == 4 && (
          <View style={styles.viewStyle}>
            <FlatList
              data={carouselData}
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ item }) => (
                <IMStackedTiles
                  onClick={() => {
                  }}
                  tilesType={TilesType.StackedWithBackground}
                  cardTitle={item.title}
                  cardIcon={item.iconImage}
                />
              )}
            />
          </View>
        )}
      </View>
  );
};

export default TilesDemo;
