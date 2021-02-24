
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import Header from '../components/Header'

function LibraryScreen({ navigation }) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    function SignOut() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;


    if (!user) {
        return (
            <View style={styles.container}>
                <Header navigation={navigation} />
                <View style={styles.content}>
                    <Image source={{
                        uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/18758e18704147.562cde4ceefce.jpg"
                    }}
                        style={{ width: 300, height: 200 }}
                    />
                    <Text style={styles.label}>It's is little empty here...</Text>
                    <Button
                        style={styles.button}
                        title="SIGN IN"
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    />
                </View>
            </View>
        );
    }
    return (
        <View>
            <Text>Welcome {user.displayName}</Text>
            <Text>{user.email}</Text>
            {/* <Image
                source={{ uri: user.photoURL }}
                style={{ width: 130, height: 180 }}
            /> */}
            {/* {console.log(user)} */}
            <Button
                title="Sign Out"
                onPress={() => SignOut()}
            />
        </View>
    );
}
export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    content: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        margin: 20,
        fontSize: 18
    },
    button: {

    }
})