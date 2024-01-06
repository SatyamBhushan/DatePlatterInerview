import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import HighlightedButton from "./HighlightedButton";
import NotHighlightedButton from "./NotHighlightedButton";
import globalStyle from "../res/globalStyle";
import globalColors from '../res/colors';


export default ConfirmPopUP = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        onPress={() => { setModalVisible(!modalVisible) }}
        style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.textTitle}>{"Confirmation"}</Text>
          <View style={globalStyle.spacer10} />
          <Text style={styles.tentContent}>{"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"}</Text>
          <View style={globalStyle.spacer10} />
          <View style={styles.buttonContainer}>

            <View style={styles.buttonSubContainer}>
              <NotHighlightedButton title={"No"} onPress={() => { setModalVisible(!modalVisible) }} />
            </View>
            <View style={styles.buttonSubContainer}>
              <HighlightedButton title={"Yes"} />
            </View>

          </View>
        </View>
      </TouchableOpacity>
    </Modal>


  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:globalColors.globalBlack,
    opacity:0.9
  },
  contentContainer: {
    backgroundColor: globalColors.globalWhite,
    opacity:1,
    width: '90%',
    height: '25%',
    borderWidth: 2,
    borderColor: globalColors.globalThemes,
    borderRadius: 10,
    elevation: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  textTitle: { fontSize: 20, fontWeight: '500' },
  tentContent: { fontSize: 16, fontWeight: '400' },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonSubContainer: { flex: 1 },
});