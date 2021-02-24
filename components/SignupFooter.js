import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignupFooter() {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.elementContainer}>
                <Text style={styles.element}>Conditions of Use</Text>
                <Text style={styles.element}>Private Notice</Text>
                <Text style={styles.element}>Help</Text>
            </View>
            <Text style={styles.copyRight}>C 1996-2020,Amazon.com, Inc or it's affiliates </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    footerContainer: {
        flex: 0.15,
        borderTopColor: "black",
        borderTopWidth: 1,

    },
    elementContainer: {
        flex: 2,
        flexDirection: "row",
    },
    element: {
        flex: 1,
        fontSize: 16,
        textAlignVertical: "center",
        color: "blue",
        textAlign: "center"
    },
    copyRight: {
        flex: 1,
        textAlign: "center"
    }
})
