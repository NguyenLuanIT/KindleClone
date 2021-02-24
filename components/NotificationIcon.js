import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NotificationIcon({ navigation }) {
    return (
        <TouchableOpacity style={styles.buttonContainer}
            onPress={() => { navigation.navigate('Notification'); }}
        >
            <MaterialCommunityIcons name="bell-outline" color="black" size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 20
    }
})