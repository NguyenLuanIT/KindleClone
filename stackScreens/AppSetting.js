import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemSetting from '../components/ItemSetting'

export default function AppSettingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ItemSetting label="Push Notifications"
                content="Notification are ON."
                navigation={navigation}
                check={false}
                screen=""
            />
            <ItemSetting label="Color Theme"
                content="Light."
                navigation={navigation}
                check={false}
                screen=""
            />
            <ItemSetting label="Show Personal Documents in Library"
                content="View files on your device inside your library."
                navigation={navigation}
                check={true}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F4F4",
        flex: 1,
        padding: 15
    }
})
