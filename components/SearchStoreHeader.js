import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity }
    from 'react-native';

export default function SearchStoreHeader({ navigation }) {
    const [newValue, setNewValue] = useState('')
    return (
        <View style={styles.searchSectionContainer}>
            <TouchableOpacity
                onPress={() => {
                    navigation.openDrawer();
                }}
            >
                <View style={styles.burgerIconContainer}>
                    <Text style={styles.burgerIcon}>☰</Text>
                </View>
            </TouchableOpacity>
            <TextInput style={styles.searchInput}
                placeholder="Search in Kindle Store"
                onChangeText={value => {
                    setNewValue(value)
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Search', {
                        keyWord: newValue,
                        number: -1,
                    });
                }}
            >
                <View style={styles.searchIconContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchSectionContainer: {
        flex: 0.08,
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: 'white'
    },
    burgerIconContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 15,
        justifyContent: "center",

    },
    burgerIcon: {
        fontSize: 35,
        textAlign: "center",

    },
    searchIconContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#5F5F5F',
    },
    searchIcon: {
        fontSize: 20,
        textAlign: "center",
        paddingLeft: 10,
        paddingRight: 15,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        backgroundColor: '#EEEEEE'
    },

})