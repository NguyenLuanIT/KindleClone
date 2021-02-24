import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from "react-native";

import SearchStoreHeader from "../components/SearchStoreHeader";
import useBooksData from "../components/UseBooksData";

function Item({ url, name, price, author, rate }) {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.item}>
                <Image
                    source={{ uri: url }}
                    style={{ width: 130, height: 180 }}
                />
            </TouchableOpacity>
            <View style={styles.bookInfo} >
                <Text style={styles.bookName}
                    numberOfLines={1}
                >{name}</Text>
                <Text style={styles.author}>{author}</Text>
                <Text style={styles.rate}>{rate}</Text>
                <Text style={styles.priceContainer}>
                    <Text style={styles.price}>${price} </Text>
                    to buy</Text>
            </View>
        </View>
    )
}

export default function SearchScreen({ route, navigation }) {
    const { keyWord, number } = route.params;
    const [book, setBooks] = useBooksData();
    useEffect(() => {
        SelectionBooks;
    })
    function SelectionBooks() {
        return book.books.map((BOOK, index) => {
            if (keyWord === '') {
                return <Item
                    url={BOOK.coverUrl} name={BOOK.title}
                    price={BOOK.price} key={index}
                    author={BOOK.author} rate={BOOK.rate}
                />
            } else if (BOOK.title.toLowerCase().search(keyWord.toLowerCase()) !== -1) {
                return <Item
                    url={BOOK.coverUrl} name={BOOK.title}
                    price={BOOK.price} key={index}
                    author={BOOK.author} rate={BOOK.rate}
                />
            }
        }
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <SearchStoreHeader navigation={navigation} />
                <SelectionBooks />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: "#EEEEEE",
        borderBottomWidth: 1
    },
    bookInfo: {
        paddingLeft: 10,
        paddingBottom: 5
    },
    bookName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    author: {
        fontSize: 18
    },
    rate: {
        fontSize: 18
    },
    priceContainer: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        fontWeight: "bold"
    }

})

