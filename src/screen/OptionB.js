import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardContainer from "../component/Option4CardContainer";
import globalColors from '../res/colors';

export default OptionB = () => {
    const [check, setCheck] = useState(1)
    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.TopTypeContainer}>
                <TouchableOpacity onPress={() => setCheck(1)} style={check == 2 ? styles.TypeView : styles.TypeViewFocused}>
                    <Text style={check == 2 ? styles.TypeText : styles.TypeTextFocused}>{"Type A"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCheck(2)} style={check == 1 ? styles.TypeView : styles.TypeViewFocused}>
                    <Text style={check == 1 ? styles.TypeText : styles.TypeTextFocused}>{"Type B"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentView}>
                {check == 1 ? <CardContainer /> : <CardContainer type={"B"} />}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    TopTypeContainer: {
        flexDirection: 'row',
        backgroundColor: globalColors.globalText,
        borderRadius: 15,
        height: 50,
        marginTop:12,
        marginLeft:5,
        marginRight:5,
        marginBottom:3
    },
    TypeView: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:2,
        borderRadius: 15,
        margin: 5,

    },
    TypeViewFocused: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: globalColors.globalThemes,
        backgroundColor: globalColors.globalWhite,
        borderRadius: 15,
        margin: 5,

    },
    TypeText: {
        fontSize: 20,
        color: globalColors.globalBlack,
        fontWeight: '600',
        opacity: 0.5
    },
    TypeTextFocused: {
        fontSize: 20,
        color: globalColors.globalThemes,
        fontWeight: '600'
    },

    contentView: {
        flex:0.99,
        alignItems: 'center',
        padding: 4,
    }

});