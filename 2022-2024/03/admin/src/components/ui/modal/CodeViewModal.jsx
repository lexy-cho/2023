import React from 'react';
import { useAuthViewModal } from './hooks/useAuthModal';
import { BaseButton, InputArea, DragableTable, DragableItem, BaseCheckBox, ModalFormButton } from '@components/common';
import AuthCodeModal from './components/AuthCodeModal';

const CodeViewModal = ({ onClose, onRefresh, permission_group_seq }) => {
  const { view } = useAuthViewModal({ onClose, onRefresh, permission_group_seq });
  return <AuthCodeModal {...view} onClose={onClose} />;
};

export default CodeViewModal;
