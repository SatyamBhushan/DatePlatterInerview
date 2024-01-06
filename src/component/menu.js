import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, Image } from 'react-native';
import globalStyle from "../res/globalStyle";
import globalColors from '../res/colors';
import images from "../res/images";


export default MenuList = (props) => {
    const { visible } = props;
    const [modalVisible, setModalVisible] = useState(true);
    const list = {
        'Option1': "option 1",
        'Option2': "option 2",
        'Option3': "option 3",
        'Option4': "option 4",
        'Option5': "option 5",
        'Option6': "option 6",
    }
    const menuLists = (itemName) => {
        return (
            <TouchableOpacity style={
                {
                    // width: '100%',
                    height: '10%',
                    backgroundColor: globalColors.globalWhite,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopWidth: 1,
                    borderBottomWidth: 2,
                    borderTopColor: globalColors.globalText,
                    borderBottomColor: globalColors.globalText,

                }
            }>
                <View style={
                    {
                        padding: 5,
                        marginLeft: 20,
                        fontSize: 20,
                        fontWeight: 500,
                        color: globalColors.globalWhite
                    }}>
                    <Image
                        source={images.homeIcon}
                        style={{ height: 20, width: 20 }}
                    />


                </View>
                <View style={globalStyle.widthSpacer5} />
                <Text style={
                    {
                        flex: 0.85,
                        padding: 5,
                        fontSize: 20,
                        fontWeight: 500,
                        color: '#818181',
                        alignItems: 'left',
                    }
                }>{itemName}</Text>
            </TouchableOpacity>

        );
    }

    return (
        <Modal
            animationType='slideInLeft'
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View

                style={{ width: '50%', height: '100%', backgroundColor: globalColors.globalWhite }}>
                <View style={
                    {
                        width: '100%',
                        height: '10%',
                        backgroundColor: globalColors.globalThemes,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }
                }>
                    <View style={
                        {
                            backgroundColor: globalColors.globalWhite,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 76,
                            height: 76,
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: globalColors.globalThemes
                        }}>
                        <TouchableOpacity
                            onPressOut={() => { setModalVisible(!modalVisible) }}
                            style={
                                {
                                    backgroundColor: globalColors.globalWhite,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 70,
                                    height: 70,
                                    borderRadius: 50,
                                    borderWidth: 5,
                                    borderColor: globalColors.globalThemes
                                }}>
                            <Image
                                source={images.homeIcon}
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>


                {menuLists(list.Option1)}
                {menuLists(list.Option2)}
                {menuLists(list.Option3)}
                {menuLists(list.Option4)}
                {menuLists(list.Option5)}
                {menuLists(list.Option6)}


            </View>

        </Modal>

    );
}