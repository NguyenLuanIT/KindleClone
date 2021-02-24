import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Item from "../components/ItemSetting";

export default function WordWise() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>WORD WISE</Text>
            </View>
            <Item label="Word Wise"
                content="Show hint above challenging words when available."
                check={true}
                screen=""
            />
            <Item label="Show multiple-Choice Hint"
                content="When we're unsure of the correct hint for a word, we'll show you 
                a list of possible meaning and ask you to pick the one that is most helpful."
                check={true}
                screen=""
            />
            <Item label="Language for Hints"
                content="Current: English."
                check={false}
                screen=""
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 5
    },
    header: {
        flex: 0.1,
        justifyContent: "flex-end",
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    item: {
        height: 200
    }
})