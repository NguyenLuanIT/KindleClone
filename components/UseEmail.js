import { useState, useEffect } from "react";
import database from '@react-native-firebase/database';

export default function useEmail() {
    const [email, setEmail] = useState({
        email: []
    })
    useEffect(() => {
        database().ref('/users').once('value', snapshot => {
            let email = []
            snapshot.forEach(emailSnapshot => {
                email.push(emailSnapshot.val())
            });
            setEmail({ email });
        })
    })

    return [email];
}

