
import React, { } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Item({ label, icon, navigation, boolean, screen }) {
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => { navigation.navigate(screen) }}
            disabled={boolean}
        >
            <Text style={styles.icon}>{icon}</Text>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

function MoreScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.itemContainer}>
                <Item icon={<MaterialCommunityIcons name="account-circle-outline" color="gray" size={26} />}
                    label="Sign In With Amazon"
                    navigation={navigation}
                    boolean={false}
                    screen="Login"
                />
                <Item icon={<MaterialCommunityIcons name="autorenew" color="#EEEEEE" size={26} />}
                    label="Sync"
                    navigation={navigation}
                    boolean={true}
                    screen="Signup"
                />
                <Item icon={<MaterialCommunityIcons name="cog-outline" color="gray" size={26} />}
                    label="App Setting"
                    navigation={navigation}
                    boolean={false}
                    screen="AppSetting"
                />
                <Item icon={<MaterialCommunityIcons name="book-open-outline" color="gray" size={26} />}
                    label="Reading Setting"
                    navigation={navigation}
                    boolean={false}
                    screen="ReadingSetting"
                />
                <Item icon={<MaterialCommunityIcons name="information-outline" color="gray" size={26} />}
                    label="Info"
                    navigation={navigation}
                    boolean={false}
                    screen="Info"
                />
            </View>
        </View>
    );
}
export default MoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    itemContainer: {
        flex: 0.5,
        paddingTop: 5
    },
    item: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        borderBottomColor: "#EEEEEE",
        borderBottomWidth: 1,
        alignItems: "center",
    },
    icon: {
        flex: 0.2,
        textAlign: "center"
    },
    label: {
        flex: 0.8,
        fontSize: 18
    }
})