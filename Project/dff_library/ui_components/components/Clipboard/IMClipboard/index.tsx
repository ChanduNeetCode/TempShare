import React, { useState, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { type IMClipboardProps } from './types';
import Clipboard from '@react-native-clipboard/clipboard';

const IMClipboard: FC<IMClipboardProps> = props => {
  const { copiedContent, copyFunc, isSelect, selectImage, unselectImage } =
    props;
  const [enable, setEnable] = useState(isSelect);

  const copyToClipboard = async () => {
    Clipboard.setString(copiedContent);
    if (copyFunc) {
      copyFunc(copiedContent);
    }
  };

  return (
    <TouchableOpacity onPress={() => copyToClipboard()}>
      {enable ? selectImage : unselectImage}
    </TouchableOpacity>
  );
};
export default IMClipboard;
