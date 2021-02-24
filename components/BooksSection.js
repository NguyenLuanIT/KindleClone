import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image }
    from 'react-native';

import useBooksData from "./UseBooksData";

function BookCover({ url }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Image
                source={{ uri: url }}
                style={{ width: 130, height: 180 }}
            />
        </TouchableOpacity>
    )
}
export default function BooksSection({ title }) {
    const [books, setBooks] = useBooksData();
    return (
        <View style={styles.sectionsContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <ScrollView horizontal={true}>
                <View style={styles.itemsContainer}>
                    {books.books.map((book, index) =>
                        <View key={index} >
                            <BookCover url={book.coverUrl} />
                        </View>)}
                </View>
            </ScrollView>
            <TouchableOpacity>
                <View>
                    <Text style={styles.sectionFooter}>SEE ALL</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionsContainer: {
        marginTop: 15,
        backgroundColor: "white"
    },
    sectionTitle: {
        fontSize: 16,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    sectionFooter: {
        fontSize: 16,
        borderTopColor: "gray",
        borderTopWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        textAlignVertical: "center",
        color: "blue"
    },
    itemsContainer: {
        flexDirection: "row",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15

    },
    item: {
        paddingLeft: 5,
        paddingRight: 5

    }

})