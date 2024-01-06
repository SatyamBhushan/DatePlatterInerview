import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, ImageBackground } from 'react-native'
import HighlightedButton from './HighlightedButton';
import NotHighlightedButton from './NotHighlightedButton';
import globalStyle from '../res/globalStyle';

import ConfirmPopUp from './ConfirmPopUp';
import globalColors from '../res/colors';
import ConfirmCardListPopUP from "./ConfirmCardListPopUP";
import images from "../res/images";


const CardContainer = (props) => {
    const [check, setcheck] = useState(false);
    const [ConfirmModal, setConfirmModal] = useState(false);
    const { type } = props;
    return (
        // ................... Main card View ................//
        <View style={styles.mainContainer}>
            {/*  .......... Card Top View Design ...........  */}

            <View style={styles.TopContainer}>
                {/* ....... Date and Time ...........  */}
                <Text style={styles.TopText}>
                    {"Date and Time : "}
                    <Text style={{ fontSize: 14 }}>{"29/Dec/2023 14:36"}</Text>
                </Text>
                {/* ........ Booking Id ........ */}
                <Text style={styles.TopText}>
                    {"Booking Id : "}
                    <Text style={{ fontSize: 14 }}>{"43567812"}</Text>
                </Text>

            </View>

            {/*  .......... Card Content View Design ...........  */}

            <View style={styles.ContentContainer}>
                {/* ............. Right Side/live View container .......  */}
                <View style={
                    {
                        flex: 0.60,
                        flexDirection: 'row-reverse',
                        // backgroundColor: 'red'
                    }
                }>
                    <View style={{ flexDirection: 'column', flex: 0.5, alignItems: 'center' }}>

                        <View style={{
                            width: 180,
                            height: 180,
                            backgroundColor: globalColors.globalThemes,
                            borderWidth: 2,
                            borderColor: globalColors.globalThemes,
                            borderRadius: 10,
                            marginTop: 8,
                            padding:2.5
                        }}>
                            <ImageBackground
                                style={{ width: '100%', height: '100%', }}

                                source={images.evenImage}
                            >
                            </ImageBackground>
                            {/* ............... Active view .......... */}
                            <View style={
                                {
                                    width: 100,
                                    height: 25,
                                    backgroundColor: globalColors.activeGreen,
                                    borderTopEndRadius: 15,
                                    borderBottomStartRadius: 8,
                                    position: 'absolute',
                                    bottom: 37.5,
                                    right: -37.5,
                                    transform: [{ rotate: '270deg' }],
                                    alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: globalColors.globalWhite }}>{"Active"}</Text>
                            </View>
                            {/* ............... Live red view ............. */}
                            <View style={
                                {
                                    width: 100,
                                    height: 25,
                                    backgroundColor: globalColors.liveRed,
                                    borderTopEndRadius: 15,
                                    borderBottomStartRadius: 8,
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: globalColors.globalWhite }}>{"Live"}</Text>
                            </View>

                        </View>


                        <View style={
                            {
                                flexDirection: 'row',
                                padding: 8,
                            }
                        }>
                            <Text>
                                {"hiii"}
                            </Text>

                        </View>
                    </View>

                    {/* ............ Left Side content container ............ */}
                    <View style={{ flex: 0.5, padding: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', color: globalColors.globalBlack }}>{"Title"}</Text>
                        <Text style={{ color: globalColors.globalText }}>{"hello lets work zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"}</Text>

                        <View style={globalStyle.spacer3} />
                        <Text style={{ fontSize: 17, color: globalColors.globalText }}>{"Total Payable Amount : "}</Text>
                        <Text style={{ fontSize: 28, fontWeight: '600', color: globalColors.globalBlack }}>{"Rs. 1980/-"}</Text>
                        <Text style={{ color: globalColors.globalText }}>{"Inclusive of all taxes zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"}</Text>
                        <View style={globalStyle.spacer3} />
                        <Text style={{ fontSize: 17, color: globalColors.globalText }}>{"Location : "}</Text>
                        <Text style={{ color: globalColors.globalText }}>{"Inclusive of all taxes zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"}</Text>


                    </View>

                </View>
                <View style={
                    {
                        flex: 0.25,
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 0,
                        justifyContent: 'flex-start',
                        width: '100%',

                    }
                }>
                    <View style={{ flex: 1, padding: 8 }}>
                        {type != 'B' ?
                            <View style={{ width: '100%', height: '100%', borderWidth: 1, borderColor: globalColors.globalThemes, elevation: 5, backgroundColor: globalColors.globalWhite }}>
                                <View style={{ alignItems: 'center', padding: 2 }}>
                                    <Text style={{ fontSize: 17, color: globalColors.globalText }}>{"Confirmation"}</Text>
                                    <Text style={{ color: globalColors.globalText }}>{"Inclusive of all taxes zzzzzzz"}</Text>
                                </View>
                                <NotHighlightedButton
                                    title={"View Detail"}
                                    onPress={() => {
                                        setConfirmModal(true)
                                    }}
                                />
                                {ConfirmModal == true ? <ConfirmCardListPopUP /> : null}
                                {/* {setConfirmModal(false)} */}
                            </View>
                            : null
                        }
                    </View>

                    <View style={type != 'B' ? { flex: 1, padding: 2 } : { flex: 1, paddingBottom: 86 }}>
                        <Text style={{ fontSize: 17, }}>{"Payment : "}
                            <Text style={{ fontSize: 22, fontWeight: '500', color: globalColors.globalBlack }}>{"Online"}</Text>
                        </Text>
                    </View>

                </View>
            </View>

            {/*  .......... Card Bottom View Design ...........  */}

            <View style={styles.FooterContainer}>
                <View style={globalStyle.spacer3} />
                {/* .......... Check Box And Agree Content .......... */}
                <View style={styles.FooterSubContainer}>

                    <View style={styles.FooterSubContainerCheckBoxContainer}>

                        <TouchableOpacity style={styles.FooterSubContainerCheck} />

                    </View>

                    <View style={styles.FooterSubContainerTextContainer}>

                        <Text style={styles.FooterSubContainerText}>
                            {"I Agree"}
                        </Text>

                    </View>

                </View>
                <View style={globalStyle.spacer5} />
                {/* ........ Button View Design .......... */}
                <View style={styles.ButtonView}>

                    <View style={styles.buttonSubView}>

                        <NotHighlightedButton
                            title={"No"}
                            onPress={() => { setcheck(true) }}

                        />
                        {check == true ?
                            <ConfirmPopUp /> : null}
                    </View>
                    <View style={styles.buttonSubView}>

                        <HighlightedButton
                            title={"Yes"}
                        />
                    </View>
                </View>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: globalColors.globalThemes,
        backgroundColor: globalColors.globalWhite,
        shadowColor: globalColors.globalBlack,
        shadowRadius: 10,
        elevation: 7,

    },
    TopContainer: {
        backgroundColor: globalColors.globalThemes,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        borderWidth: 1,
        borderColor: globalColors.globalThemes,
    },
    TopText: {
        fontSize: 14,
        fontWeight: '600',
        color: globalColors.globalWhite
    },
    LeftSideContentContainer: { width: 205, height: 265, padding: 10 },
    ContentContainer: { flexDirection: 'column', flex: 0.75 },

    FooterContainer: {
        width: '100%',
        flex: 0.20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopColor: globalColors.globalThemes,
        position: 'absolute',
        bottom: 0.1,
        flexDirection: 'column',
        padding: 8
    },
    FooterSubContainer: { flexDirection: 'row' },
    FooterSubContainerCheckBoxContainer: {
        flex: 0.10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FooterSubContainerCheck: {
        borderWidth: 2,
        borderColor: globalColors.globalThemes,
        width: 20,
        height: 20,
    },
    FooterSubContainerTextContainer: { flex: 0.90 },
    FooterSubContainerText: {
        fontSize: 18,
        fontWeight: '400',
        color: globalColors.globalThemes,
    },
    ButtonView: {

        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        height: '80%'

    },
    buttonSubView: {
        flex: 1
    }
})

export default CardContainer;