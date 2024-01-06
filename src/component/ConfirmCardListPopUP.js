import React, { useEffect, useState } from "react";

import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,

} from 'react-native';

import HighlightedButton from "./HighlightedButton";
import NotHighlightedButton from "./NotHighlightedButton";
import globalColors from '../res/colors';
import colors from "../res/colors";
import globalStyle from "../res/globalStyle";
import { useNavigation } from "@react-navigation/native";



export default ConfirmCardListPopUP = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  function confirmListCard() {
    return (
      <>
        <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>{"08 Dec 2023"}</Text>
        </View>
        <View style={globalStyle.spacer3} />
        <View style={styles.cardContainer}>
          {/* ............ Type A ................... */}
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>{"Type A"}</Text>

            <View style={globalStyle.spacer3} />

            {/* .................... Type A card container ................. */}
            <View style={styles.typeCardWrapContainer}>
              <View style={styles.typeCard}>
                {/*  ........... Card Type A Right side Amount to paid  Content ............  */}
                <View style={{ flex: 0.55, padding: 2 }}>
                  <Text style={styles.typeCardDetailLabel}>{"Amount To Be Paid :"}</Text>
                  <Text style={styles.typeCardAmountPaid}>{"Rs. 1980/-"}</Text>
                  <Text >{"Inclusive all taxes"}</Text>
                  <Text >{"+ Delivery charge"}</Text>

                </View>
                {/*  ........... Card Type A Left side Details Content ............  */}
                <View style={styles.typeCardDetailWrapContainer}>
                  {/*................. Type A ... Detail A .............. */}
                  <View style={styles.typeCardDetailContainer}>
                    <Text style={styles.typeCardDetailLabel}>{"Detail A"}</Text>
                    <Text style={styles.typeCardDetailValue}>{"zzzzzzzzzzzzzz"}</Text>

                  </View>
                  {/*................. Type A ... Detail B .............. */}
                  <View style={styles.typeCardDetailContainer}>
                    <Text style={styles.typeCardDetailLabel}>{"Detail B"}</Text>
                    <Text style={styles.typeCardDetailValue}>{"zzzzzzzzzzzzzz"}</Text>

                  </View>


                </View>
              </View>
              {/* .................... Type A CheckBox container ................. */}
              <View style={styles.typeCheckBoxContainer}>
                <TouchableOpacity style={styles.typeCheckbox} />
              </View>
            </View>
            <View style={globalStyle.spacer} />
          </View>
          {/* ............ Type B ................... */}
          <View style={styles.typeContainer}>
            <Text style={styles.typeText}>{"Type B"}</Text>

            <View style={globalStyle.spacer3} />

            {/* .................... Type B card container ................. */}
            <View style={styles.typeCardWrapContainer}>
              <View style={styles.typeCard}>
                {/*  ........... Card Type B Right side Amount to paid  Content ............  */}
                <View style={{ flex: 0.55, padding: 2 }}>
                  <Text style={styles.typeCardDetailLabel}>{"Amount To Be Paid :"}</Text>
                  <Text style={styles.typeCardAmountPaid}>{"Rs. 1980/-"}</Text>
                  <Text >{"Inclusive all taxes"}</Text>

                </View>
                {/*  ........... Card Type B Left side Details Content ............  */}
                <View style={styles.typeCardDetailWrapContainer}>
                  {/*................. Type B ... Detail A .............. */}
                  <View style={styles.typeCardDetailContainer}>
                    <Text style={styles.typeCardDetailLabel}>{"Detail A"}</Text>
                    <Text style={styles.typeCardDetailValue}>{"zzzzzzzzzzzzzz"}</Text>

                  </View>
                  {/*................. Type B ... Detail B .............. */}
                  <View style={styles.typeCardDetailContainer}>
                    <Text style={styles.typeCardDetailLabel}>{"Detail B"}</Text>
                    <Text style={styles.typeCardDetailValue}>{"zzzzzzzzzzzzzz"}</Text>

                  </View>


                </View>

              </View>
              {/* .................... Type B CheckBox container ................. */}
              <View style={styles.typeCheckBoxContainer}>
                <TouchableOpacity style={styles.typeCheckbox} />
              </View>
            </View>
            <View style={globalStyle.spacer10} />
          </View>
        </View>
        <View style={globalStyle.spacer3} />
      </>
    );
  }


  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={false}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.mainContainer}>
        {/* ..................... Top / Title container ........... */}
        <View style={styles.topTitleContainer}>
          <Text style={styles.textTitle}>{"Confirmation"}</Text>
        </View>
        {/* ..................... Conten / List  container ........... */}
        <View style={styles.contentContainer}>

          {/* ....................... content title ............... */}
          <View style={styles.contentTitleContainer}>
            <Text style={[
              styles.contentTitleText,
              { borderBottomColor: colors.globalText, borderBottomWidth: 1 }
            ]}>{"Payment : "}{"Online"}</Text>
            <Text style={styles.contentTitleText}>{"Confirmation"}</Text>
          </View>
          <ScrollView >

            {confirmListCard()}
            {confirmListCard()}
            {confirmListCard()}
            {confirmListCard()}
            {confirmListCard()}
            {confirmListCard()}

          </ScrollView>

        </View>

        {/* ..................... button container ........... */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSubContainer}>
            <View style={styles.buttonWrapContainer}>
              <NotHighlightedButton title={"No"} onPress={()=>{setModalVisible(!modalVisible); }}/>
            </View>
            <View style={styles.buttonWrapContainer}>
              <HighlightedButton title={"Yes"} />
            </View>
          </View>
        </View>
      </View>
    </Modal>


  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '96%',
    height: '96%',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 12,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: colors.globalThemes

  },
  topTitleContainer: {
    flex: 0.08,
    backgroundColor: colors.globalThemes,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: { flex: 0.82, backgroundColor: colors.globalWhite },
  contentTitleContainer: { width: '100%', height: 60 },
  contentTitleText: {
    fontSize: 16,
    fontWeight: '500',
    padding: 3,
    paddingLeft: 10,
  },
  textTitle: { fontSize: 20, fontWeight: '600', color: colors.globalWhite },
  buttonContainer: {
    flex: 0.10,
    backgroundColor: colors.globalWhite,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderTopWidth: 1,
    elevation: -10,
    shadowColor: colors.globalBlack,
    borderTopColor: colors.globalText,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonSubContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapContainer: { flex: 1 },

  //............ cardlist style .......................//

  cardContainer: {
    width: '98%',
    height: 300,
    padding: 10,
    // backgroundColor: 'yellow',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.globalText,
    flexDirection: 'column'
  },
  typeContainer: { flex: 0.6 },
  typeText: {
    fontSize: 18,
    fontWeight: '600'
  },
  typeCardWrapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 5
  },
  typeCard: {
    flex: 0.85,
    flexDirection: 'row',
    borderColor: colors.globalText,
    borderWidth: 2,
    height: 100,
    padding: 2,
    borderRadius: 8
  },
  typeCheckBoxContainer: { flex: 0.10 },
  typeCheckbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: colors.globalThemes
  },
  typeCardDetailWrapContainer: { flex: 0.45, flexDirection: 'column' },
  typeCardDetailContainer: { flex: 0.5, justifyContent: 'center', padding: 2 },
  typeCardDetailLabel: { fontSize: 15, fontWeight: '600', color: colors.globalText },
  typeCardDetailValue: { fontSize: 16, fontWeight: '600', color: 'orange' },
  typeCardAmountPaid: { fontSize: 20, fontWeight: '600', color: colors.globalBlack },
});