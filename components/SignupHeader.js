import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignupHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>amazon
                    <Text style={styles.header1}> kindle</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.12,
        backgroundColor: "#F4F4F4",
    },
    headerContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE"
    },
    header: {
        flex: 1,
        fontSize: 50,
        textAlign: "center"
    },
    header1: {
        color: "blue"
    }
})
