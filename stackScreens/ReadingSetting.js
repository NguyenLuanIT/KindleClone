import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Item from "../components/ItemSetting";

export default function ReadingSettingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Item label="Page Turn Animation"
                content="Use a page turn animation while reading."
                check={true}
                screen=""
            />
            <Item label="Visible Clock"
                content="Display the current time on page."
                check={true}
                screen=""
            />
            <Item label="Highlight Menu"
                content="Show the highlight menu when you select a passage of text. "
                check={true}
                screen=""
            />
            <Item label="Popular Highlights"
                content="Show Popular Highlight on page."
                check={true}
                screen=""
            />
            <Item label="Turn Pages with Volume Controls"
                content="Use your phone's volume buttons to turn pages."
                check={true}
                screen=""
            />
            <Item label="About This Book"
                content="Show information about the book when you open it for the first time."
                check={true}
                screen=""
            />
            <Item label="Word Wise"
                content="Show hints above challenging words."
                check={false}
                navigation={navigation}
                screen="WordWise"
            />
            <Item label="Manage Additional Fonts"
                content="Download or remove reading fonts with large file sizes."
                check={false}
                navigation={navigation}
                screen="ManageFont"
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F4F4",
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
})
