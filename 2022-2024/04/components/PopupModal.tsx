import React from 'react';
import { Button, Modal, StyleProp, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
interface ModalProps {
  visible: boolean,
  title?: string,
  message: string,
  subMessage: string,
  cancelTitle?: string,
  confirmTitle?: string,
  onConfirm: () => void,
  onCancel: () => void,
  onDismiss?: () => void,
  contentStyle?: StyleProp<ViewStyle>;
}
function PopupModal(props: ModalProps) {
  const {
    title,
    message,
    subMessage,
    visible,
    cancelTitle,
    confirmTitle,
    onCancel,
    onConfirm,
    onDismiss,
    contentStyle
  } = props;
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={() => {if(onDismiss) onDismiss()}}>
        <View style={[styles.modalContainer, contentStyle]}>
          {/* Dialog view start here*/}
          <View style={styles.dialogContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.messageText}>{message}</Text>
            <Text style={styles.subMessageText}>{subMessage}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onConfirm} style={[styles.button, styles.bgBlue]}>
                <Text style={styles.btnTxt}>{confirmTitle || '확인'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onCancel} style={[styles.button, styles.bgGgray]}>
                <Text style={styles.btnTxt}>{cancelTitle || '취소'}</Text>
              </TouchableOpacity>
              {/* <View style={[styles.button, styles.bgBlue]}>
                <Button title={confirmTitle || '확인'} onPress={onConfirm} />
              </View>
              <View style={[styles.button, styles.bgGgray]}>
                <Button title={cancelTitle || '취소'} onPress={onCancel} />
              </View> */}
            </View>
          </View>
          {/* Dialog view end here*/}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  dialogContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    backgroundColor: 'white',
    elevation: 4,
    padding: 16,
    width: '90%',
    shadowOpacity: 0.25,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  messageText: {
    fontSize: 16,
    padding: 8,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 1,
    color: '#243E7E'
  },
  subMessageText: {
    fontSize: 12,
    padding: 8,
    lineHeight: 18,
    textAlign: 'center',
    color: 'grey'
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
  button: {
    // marginLeft: 12,
    width: '50%',
    padding: 0,
    margin:1,
    height: 38,
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  bgGgray: {
    backgroundColor: '#CACACA',
  },
  bgBlue: {
    backgroundColor: '#1E8AF3',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default PopupModal;