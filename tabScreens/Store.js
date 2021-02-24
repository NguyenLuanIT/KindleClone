import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView }
    from 'react-native';

import NotificationIcon from '../components/NotificationIcon';
import SearchStoreHeader from "../components/SearchStoreHeader";
import useBooksData from "../components/UseBooksData";

function Information({ label }) {
    return (
        <TouchableOpacity
        >
            <Text style={styles.infoLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

function Item({ url, name, price }) {
    return (
        <View>
            <TouchableOpacity style={styles.item}>
                <Image
                    source={{ uri: url }}
                    style={{ width: 130, height: 180 }}
                />
            </TouchableOpacity>
            <Text style={styles.itemName}
                numberOfLines={1}
            >{name}</Text>
            <Text style={styles.itemPrice}>${price}</Text>
        </View>
    )
}
function Section({ title, func }) {
    return (
        <View style={styles.sectionsContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <ScrollView horizontal={true}>
                <View style={styles.itemsContainer}>
                    {func}
                </View>
            </ScrollView>
        </View>
    )
}
export default function StoreScreen({ navigation }) {
    const [books, setBooks] = useBooksData()
    const GetFullBook = () => {
        return books.books.map((book, index) => {
            return <Item
                url={book.coverUrl} name={book.title}
                price={book.price} key={index}
            />
        })
    }

    function SelectionBooks() {
        return books.books.map((book, index) => {
            if (Number(book.price) <= 2.99) {
                return <Item
                    url={book.coverUrl} name={book.title}
                    price={book.price} key={index}
                />
            }
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>KINDLE STORE</Text>
                <NotificationIcon navigation={navigation} />
            </View>
            <View style={styles.scrollView}>
                <ScrollView>
                    <SearchStoreHeader navigation={navigation} />
                    <View style={styles.kindleEbookContainer}>
                        <Text style={styles.kindleEbookHeader}>Kindle eBooks</Text>
                        <View style={styles.infoContainer}>
                            <Information label="Book Categories" />
                            <Information label="comiXology Unlimited" />
                        </View>
                        <View style={styles.infoContainer}>
                            <Information label="Amazon Chart" />
                            <Information label="Editors' Pick" />
                        </View>
                        <View style={styles.infoContainer}>
                            <Information label="Book with Audible Narration" />
                            <Information label="Newsstand" />
                            <Information label="Deals" />

                        </View>

                    </View>
                    <View>
                        <Section title="Full book"
                            func={GetFullBook()}
                        />
                        <Section title="Cheap book"
                            func={SelectionBooks()}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    scrollView: {
        flex: 1
    },
    headerContainer: {
        flex: 0.07,
        flexDirection: "row",
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        backgroundColor: 'white'
    },
    header: {
        flex: 0.9,
        fontSize: 18,
        padding: 10
    },

    kindleEbookContainer: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "white"
    },
    kindleEbookHeader: {
        flex: 1,
        fontSize: 25,
        paddingLeft: 10
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row"
    },
    infoLabel: {
        color: "darkblue",
        borderRightWidth: 1,
        borderRightColor: "black",
        paddingLeft: 5,
        paddingRight: 5,
        margin: 5,
        fontSize: 16,
        textDecorationLine: "underline"
    },
    //--------------
    sectionsContainer: {
        paddingTop: 25,
        backgroundColor: "white"
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10
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
    },
    itemName: {
        width: 140,
        paddingLeft: 10,
        fontSize: 16,
    },
    itemPrice: {
        paddingLeft: 10,
        fontSize: 16
    }
})