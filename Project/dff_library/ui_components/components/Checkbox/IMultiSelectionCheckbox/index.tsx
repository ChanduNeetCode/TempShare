import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import colors from '../../../atoms/colors';
import {
  IndeterminateCheckbox,
  CheckboxChecked,
  ICGeneralCheckBoxUnchecked,
} from '../../../atoms/icons';
import Checkbox from '../IMCheckbox/index';
import { type IMMultiSelectionCheckboxProps } from './types';
import useStyles from './styles';


const IMultiSelectionCheckbox: React.FC<IMMultiSelectionCheckboxProps> = props => {
  const {
    isLeft,

    displayKey,
    tapRadioButtonColor = colors.NeutralGrey120,
    title,
    uniqueKey,

    list,

    activeTouchStyle,
    containerStyle,
    displayItemStyle,
    itemStyle,

    textStyle,
    childTextStyle,

    partialSelectImage = <IndeterminateCheckbox height={20} width={20} />,
    selectImage = <CheckboxChecked height={20} width={20} />,
    unselectImage = <ICGeneralCheckBoxUnchecked height={20} width={20} />,
    itemSeparator,

    multiToggleState,

    resultCallback,
  } = props;

  const [data, setData] = useState(
     list?.sort((a, b) => a.name.localeCompare(b.name)),
  );
  const [enable, setEnable] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<string>();

  const styles = useStyles();

  const onPress = () => {
    setEnable(enable === 0 ? 1 : 0);
    const res = data.map(ob => ({
      ...ob,
      active: enable === 0 ? true : false,
    }));
    setData(res);
    if (resultCallback) resultCallback(res);
  };

  const toggleState = (id: string, act: boolean): void => {
    setSelectedId(id);
    if (typeof act !== 'undefined' && id.length !== 0) {
      const itemIndex = data.findIndex(item => item.id === id);
      data[itemIndex].active = act;
      const allSelectionTrue = data.every(v => v.active === true);
      const allSelectionFalse = data.every(
        v => v.active === false || v.active == undefined,
      );
      setEnable(allSelectionTrue ? 1 : allSelectionFalse ? 0 : 2);
      setData(data);
      if (resultCallback) resultCallback(data);
    }
  };

  const renderList = ({ item }: any) => {
    return (
      <View style={itemStyle}>
        <Checkbox
          key={item[uniqueKey]}
          value={item[uniqueKey]}
          isSelect={item.active}
          isLeft={isLeft}
          textStyle={childTextStyle}
          activeTouchStyle={activeTouchStyle}
          containerStyle={containerStyle}
          toggleState={toggleState}
          multiToggleState={multiToggleState}
          selectImage={selectImage}
          unselectImage={unselectImage}
          title={item[displayKey]}
        />
      </View>
    );
  };

  return (
    <>
      <View style={[styles.container, displayItemStyle]}>
        {selectImage && (
          <TouchableHighlight
            style={[styles.touchableStyle, activeTouchStyle]}
            onPress={onPress}
            underlayColor={tapRadioButtonColor}>
            <>
              {enable === 0
                ? unselectImage
                : enable === 1
                ? selectImage
                : partialSelectImage}
            </>
          </TouchableHighlight>
        )}
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.TitleText, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </View>
      {
        <FlatList
          extraData={selectedId}
          data={data}
          ItemSeparatorComponent={() => <>{itemSeparator}</>}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={renderList}
        />
      }
    </>
  );
};
export default IMultiSelectionCheckbox;
