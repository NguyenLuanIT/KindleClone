import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationIcon from './NotificationIcon'

export default function Header({ navigation }) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('FastSearch', {
                        keyWord: '',
                        number: -1,
                    })
                }}
                style={styles.header}
            >
                <View style={styles.searching}>
                    <MaterialCommunityIcons
                        name="magnify"
                        color="gray"
                        size={26}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Search Kindle</Text>
                </View>
            </TouchableOpacity>
            <NotificationIcon navigation={navigation} />

        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.08,
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
    },
    searching: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#EEEEEE',
    },
    icon: {
        flex: 0.2,
        textAlign: "center",
    },
    text: {
        flex: 0.8,
        fontSize: 18,
    },

})