import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Notification = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You don't have any notification right now </Text>
            <Text style={styles.text}>Check back soon</Text>
            <TouchableOpacity>
                <Text style={styles.icon}>↻</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    text: {
        textAlign: "center",
        fontSize: 18,
    },
    icon: {
        fontSize: 40,
        textAlign: "center",
    }
})