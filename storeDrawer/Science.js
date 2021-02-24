import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button, }
    from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

GoogleSignin.configure({
    webClientId: '743456635940-pgtdn9sd3ukcpo1dnfr0oqbfuaodhih7.apps.googleusercontent.com',
});


//test authentication
export default function ScienceScreen() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    function GoogleSignIn() {
        return (
            <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            />
        );
    }
    function FacebookSignIn() {
        return (
            <Button
                title="Facebook Sign-In"
                onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
            />
        );
    }
    function SignInWithAnonymous() {
        auth()
            .signInAnonymously()
            .then(() => {
                console.log('User signed in anonymously');
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }

                console.error(error);
            });
    }
    function SignInWithEmail() {
        auth()
            .signInWithEmailAndPassword('kaihoangde@example.com', '123456!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    function SignOut() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <View>
                <Text>Login</Text>
                <GoogleSignIn />
                <FacebookSignIn />
                <Button
                    title="Sign Out"
                    onPress={() => SignOut()}
                />
                <Button
                    title="Sign With Anonymous"
                    onPress={() => SignInWithAnonymous()}
                />
                <Button
                    title="Sign With Email"
                    onPress={() => SignInWithEmail()}
                />
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome {user.displayName}</Text>
            <Text>{user.email}</Text>
            <Text>{user.phoneNumber}</Text>
            <Image
                source={{ uri: user.photoURL }}
                style={{ width: 130, height: 180 }}
            />
            {/* {console.log(user)} */}
            <Button
                title="Sign Out"
                onPress={() => SignOut()}
            />
        </View>
    );

}
