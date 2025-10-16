import React, { FC } from 'react';
import { Modal } from 'react-native';

import { DropdownModalProps } from './types';
import useStyles from './styles';

const DropdownModal: FC<DropdownModalProps> = props => {
  const styles = useStyles();
  const {
    children,
    onRequestClose,
    statusBarTranslucent = true,
    visible,
  } = props;
  return (
    <Modal
      animationType="fade"
      style={styles.modelStyle}
      onRequestClose={onRequestClose}
      supportedOrientations={['portrait']}
      statusBarTranslucent={statusBarTranslucent}
      transparent={true}
      visible={visible}>
      {children}
    </Modal>
  );
};

export default DropdownModal;
