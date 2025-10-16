import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { BackHandler, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { STRINGS } from './constants';
import CustomStatusBar from '../../../components/CustomStatusBar/customStatusBar';
import styles from './styles';
import { sampleData, data, timeLineData } from './json';
import HeaderComponent from '../../../../src/utils/HeaderComponent';
import { RootStackParamList } from '../../../../src/routes/RootStackParams';
import {
  IMTimeLine,
  IMCalenderTimeLine,
  IMDefaultTimeLine,
} from '../../../../dff_library/ui_components/components/TimeLine';
import colors from '../../../../dff_library/ui_components/atoms/colors';
import { IMDropdown } from '../../../../dff_library/ui_components/components/index';
import { actuatedNormalizeWidth } from '../../../../src/utils/utility';
import { DropdownType } from '../../../../dff_library/ui_components/components/Dropdowns/utils/enums';
type Props = NativeStackScreenProps<RootStackParamList, 'TimeLineDemo'>;

const TimeLineDemo: FunctionComponent<Props> = ({
  navigation,
}: Props): ReactElement => {
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
  const timeLines = [
    { key: 1, value: 'Default Time Line' },
    { key: 2, value: 'Calendar single-column- left' },
  ];

  const [selectedVal, setSelectedVal] = useState<any>(timeLines[0]);

  return (
    <>
      <CustomStatusBar
        gradientColorsArray={[
          colors.GradientOrangeStart,
          colors.GradientOrangeEnd,
        ]}
      />
      <HeaderComponent navigation={navigation} title={'Time Lines'} />
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <IMDropdown
            dropdownWidth={actuatedNormalizeWidth(320)}
            disable={false}
            placeholderText={timeLines[0].value}
            dropdownType={DropdownType.SingleColumn}
            flatListRowContainer={{ width: actuatedNormalizeWidth(320) }}
            data={timeLines}
            onSelect={selectedItem => {
              setSelectedVal(selectedItem);
            }}
          />
        </View>
        {selectedVal.key == 1 && (
          <View>
            <Text style={styles.subheading}>{STRINGS.str_subheading1}</Text>
            <IMDefaultTimeLine data={timeLineData} />
          </View>
        )}
        {selectedVal.key == 3 && (
          <>
            <Text style={styles.subheading}>{STRINGS.str_subheading}</Text>
            <View style={styles.boxstyle}>
              <IMTimeLine
                numberOfObjects={4}
                imageContainerStyle={{ height: 30, width: 30 }}
                content={sampleData}
                BoxContent={'icon'}
                Flowline={'dashed'}
                FlowlineColor={'#ff0000'}
              />
            </View>
          </>
        )}
        {selectedVal.key == 2 && (
          <>
            <Text style={styles.subheading}>{STRINGS.str_subheading2}</Text>
            <View>
              <IMCalenderTimeLine
                data={data}
                columnFormat="single-column-left"
              />
            </View>
          </>
        )}
        {selectedVal.key == 4 && (
          <>
            <Text style={styles.subheading}>{STRINGS.str_subheading2}</Text>
            <View>
              <IMCalenderTimeLine
                data={data}
                columnFormat="single-column-right"
              />
            </View>
          </>
        )}
        {selectedVal.key == 5 && (
          <>
            <Text style={styles.subheading}>{STRINGS.str_subheading2}</Text>
            <View>
              <IMCalenderTimeLine data={data} columnFormat="two-column" />
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default TimeLineDemo;
