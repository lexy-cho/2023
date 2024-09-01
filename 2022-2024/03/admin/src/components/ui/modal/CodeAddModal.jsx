import React from 'react';
import useAuthModal from './hooks/useAuthModal';
import { BaseButton, InputArea, DragableTable, DragableItem, BaseCheckBox, ModalFormButton } from '@components/common';
import AuthCodeModal from './components/AuthCodeModal';

const CodeAddModal = ({ onClose, onRefresh }) => {
  const { view } = useAuthModal({ onClose, onRefresh });
  return <AuthCodeModal {...view} onClose={onClose} />;
};

export default CodeAddModal;
