import React from "react";
import {Text, StyleSheet, TouchableOpacity } from 'react-native';
import globalColors from '../res/colors';

const HighlightedButton = (props) => {
    console.warn("hii", props);
    const {
        title,
        onPress,
    } = props;
    return (
        <TouchableOpacity
            style={styles.mainContainer}
            onPress={onPress}
        >
            <Text style={styles.TextTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: globalColors.globalThemes,
        borderRadius: 10,
        borderWidth:1,
        borderColor:globalColors.globalThemes,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: globalColors.globalBlack,
        shadowRadius: 10,
        elevation: 5,
        margin: 8,
        cursor: 'close'

    },
    TextTitle:{ color: globalColors.globalWhite, fontSize: 18, fontWeight:'600' }
});

export default HighlightedButton;