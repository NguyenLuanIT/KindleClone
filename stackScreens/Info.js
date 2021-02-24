import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';

function Item({ label }) {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
            }}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

export default function InfoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    navigation.navigate('About')
                }}
            >
                <Text style={styles.label}>About</Text>
            </TouchableOpacity>
            <Item label="What's New" />
            <Item label='Terms of Use' />
            <Item label='Legal Notices' />
            <Item label='Privacy Policy' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F4F4",
        flex: 1,
        padding: 15
    },
    item: {
        flex: 0.12,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        justifyContent: "center",

    },
    label: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
