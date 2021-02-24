import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from "@react-native-community/checkbox"
import SignupHeader from "../components/SignupHeader";
import SignupFooter from "../components/SignupFooter";
import auth from '@react-native-firebase/auth';

function SignupScreen({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    function CreateAndSignInWithEmail() {
        auth()
            .createUserWithEmailAndPassword(email, password)
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
    return (
        <View style={styles.container}>
            <SignupHeader />
            <View style={styles.body}>
                <View style={styles.contentContainer}>
                    <Text style={styles.Label}>Create account</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Name'
                        onChangeText={(value) => {
                            setName(value)
                        }}
                    >
                    </TextInput>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your email address'
                        onChangeText={(value) => {
                            setEmail(value)
                        }}
                    >
                    </TextInput>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Create a password"
                        secureTextEntry={!toggleCheckBox}
                        onChangeText={(value) => {
                            setPassword(value)
                        }}
                    />

                </View>
                <Text style={styles.information}>i password must be at least 6 characters.</Text>
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={toggleCheckBox}
                        onValueChange={(newValue) => {
                            setToggleCheckBox(newValue)
                        }}
                    />
                    <Text style={styles.checkBoxText}>Show password</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        CreateAndSignInWithEmail()
                        alert('Success')
                        navigation.navigate('Library')
                    }}
                >
                    <View style={styles.createButtonContainer}>
                        <Text style={styles.createButton}>Create your Amazon account</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.noticeContainer}>
                    <Text style={styles.notice}>
                        By create an account, your agree to the Kindle Store Terms of Use,
                        the Amazon Conditions of Use and Amazon Privacy Notice.
                    </Text>
                </View>
                <View style={styles.signInButtonContainer}>
                    <TouchableOpacity
                        onPress={() => {

                            navigation.navigate('Login')
                        }}
                    >
                        <Text style={styles.textButton}>Sign-In now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SignupFooter />
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body: {
        flex: 1,
        padding: 15
    },
    contentContainer: {
        flex: 0.6,
    },
    Label: {
        fontSize: 30,
        fontWeight: "bold",

    },
    textInput: {
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 5,
        marginTop: 5
    },
    information: {
        flex: 0.05,
        fontSize: 18,
    },
    checkBoxContainer: {
        flex: 0.1,
        flexDirection: "row",
        paddingBottom: 10,
        paddingTop: 5,
    },
    checkBoxText: {
        fontSize: 18,
        paddingLeft: 10,
        textAlignVertical: "center"
    },
    createButtonContainer: {
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
    },
    createButton: {
        fontSize: 20,
        textAlign: "center",
        padding: 10,
        color: "white"
    },
    noticeContainer: {
        flex: 0.15,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
    notice: {
        fontSize: 18,
    },
    signInButtonContainer: {
        flex: 0.1,
        borderColor: "gray",
        borderWidth: 1,
        justifyContent: "center"

    },
    textButton: {
        fontSize: 20,
        textAlign: "center",
        padding: 5,

    }
})
