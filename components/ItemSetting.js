import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

function Item({ label, content, check, navigation, screen }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => {
                check == true ?
                    setToggleCheckBox(!toggleCheckBox)
                    : navigation.navigate(screen)
            }}
        >
            <View style={styles.text}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
            {check == true ? <View style={styles.checkbox}>
                <CheckBox
                    value={toggleCheckBox}
                    onValueChange={(newValue) => {
                        setToggleCheckBox(newValue)
                    }}
                /></View> :
                <View style={styles.checkbox} />
            }
        </TouchableOpacity>
    )
}
export default Item;

const styles = StyleSheet.create({
    item: {
        flex: 0.13,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        justifyContent: "center"
    },
    text: {
        flex: 0.9,
        justifyContent: "center"
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
    },
    content: {
        fontSize: 17,
        paddingBottom: 5
    },
    checkbox: {
        flex: 0.1,
        justifyContent: "center",

    }
})