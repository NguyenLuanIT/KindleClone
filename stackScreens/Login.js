import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import SignupHeader from "../components/SignupHeader";
import SignupFooter from "../components/SignupFooter";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';


GoogleSignin.configure({
    webClientId: '743456635940-pgtdn9sd3ukcpo1dnfr0oqbfuaodhih7.apps.googleusercontent.com',
});

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    function SignInWithEmail() {
        auth()
            .signInWithEmailAndPassword(email, password)
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
                if (error.code === 'auth/user-not-found') {
                    console.log('!!!!!!');
                }
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <SignupHeader />
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.headerLabel}>Sign-In</Text>
                    <Text style={styles.headerText}>Use your Amazon account to sign in</Text>
                    <TouchableOpacity style={styles.forgotButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.forgotButtonText}>Forgot password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email (phone for mobile account)"
                        style={styles.input}
                        onChangeText={value => {
                            setEmail(value)
                        }}
                    />
                    <TextInput
                        placeholder="Amazon password"
                        style={styles.input}
                        secureTextEntry={!toggleCheckBox}
                        onChangeText={(value) => {
                            setPassword(value)
                        }}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => {
                            setToggleCheckBox(newValue)
                        }}
                    />
                    <Text style={styles.checkboxText}>Show password</Text>
                </View>
                <View style={styles.signinButtonContainer}>
                    <Button
                        title="Sign-in"
                        style={styles.signinButton}
                        onPress={() => {
                            SignInWithEmail()
                            navigation.navigate('Library')
                        }}
                    />
                </View>
                <View style={styles.noticeContainer}>
                    <Text style={styles.notice}>By signing in you agree to the Kindle Store Terms of Use and the Amazon Privacy Notice</Text>
                </View>
                <View style={styles.signupContainer}>
                    <TouchableOpacity style={styles.signupButton}>
                        <Text style={{ fontSize: 20 }}
                            onPress={() => {
                                navigation.navigate('Signup')
                            }}
                        >
                            Create a new Amazon account
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <SignupFooter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body: {
        flex: 1,
        padding: 15
    },
    header: {
        flex: 0.21,
    },
    headerLabel: {
        flex: 1,
        fontSize: 30,
    },
    headerText: {
        flex: 1,
        textAlignVertical: "center",
        fontSize: 18
    },
    forgotButton: {
        flex: 1,
        alignItems: "flex-end"
    },
    forgotButtonText: {
        flex: 1,
        color: "blue",
        textAlignVertical: "center",
        fontSize: 18,
    },
    inputContainer: {
        flex: 0.2,

    },
    input: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18
    },
    checkboxContainer: {
        flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxText: {
        fontSize: 18
    },
    signinButtonContainer: {
        flex: 0.05,
    },

    noticeContainer: {
        flex: 0.15,
        justifyContent: "center"
    },
    notice: {
        fontSize: 17,

    },
    signupContainer: {
        flex: 0.13,
        borderTopColor: "#EEEEEE",
        borderTopWidth: 1,

    },
    signupButton: {
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",

    },

})