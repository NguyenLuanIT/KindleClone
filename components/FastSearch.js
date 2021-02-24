import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView }
    from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import useBooksData from '../components/UseBooksData'

function Item({ url, title, rate }) {
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
            >{title}</Text>
            <Text style={styles.itemPrice}>{rate}</Text>
        </View>
    )
}

export default function FastSearch({ navigation }) {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)
    const [books, setBooks] = useBooksData()
    useEffect(() => {
        CheckInput()
    })
    const CheckInput = () => {
        if (value !== '') {
            setShow(true)
        } else setShow(false)
    }
    const ShowComponent = () => {
        if (show) {
            return (
                <View style={styles.resultContainer}>
                    <View style={styles.resultTextContainer}>
                        <Text style={styles.resultText}>
                            RESULTS FROM KINDLE
                        </Text>
                        <Text style={styles.seeMore}>
                            SEE MORE
                        </Text>
                    </View>
                </View>
            )
        } else return null
    }
    const GetFullBook = () => {
        if (value !== '') {
            return books.books.map((book, index) => {
                if (book.title.toLowerCase().search(value.toLowerCase()) !== -1) {
                    return <Item
                        url={book.coverUrl} title={book.title}
                        rate={book.rate} key={index}
                    />
                }
            })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.backIconContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <MaterialCommunityIcons name="arrow-left" color="gray" size={30} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View View style={styles.searchBoxContainer} >
                    <Text style={styles.backIcon}>
                        <MaterialCommunityIcons name="magnify" color="gray" size={26} style={styles.icon} />
                    </Text>
                    <TextInput
                        style={styles.searchBox}
                        placeholder="Search Kindle"
                        autoFocus={true}
                        onChangeText={(newValue) => {
                            setValue(newValue)
                        }}
                    >
                    </TextInput>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>
                <ShowComponent />
                <View style={styles.body}>
                    <View style={styles.resultContent}>
                        {GetFullBook()}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    headerContainer: {
        flex: 0.08,
        padding: 10,
        flexDirection: "row",
        backgroundColor: "white",
    },
    backIconContainer: {
        flex: 0.2,
        justifyContent: "center",
        // alignItems: "center",
    },
    backIcon: {
        margin: 15
    },
    searchBoxContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#EEEEEE",

    },
    searchIcon: {
        flex: 0.2,
        textAlignVertical: "center",
        textAlign: "center"
    },
    searchBox: {
        flex: 1,
        fontSize: 18,
        textAlignVertical: "center",
    },
    resultContainer: {
        flex: 0.05,
        margin: 15,

    },
    resultTextContainer: {
        flex: 1,
        flexDirection: "row",
    },
    resultText: {
        fontSize: 18,
        fontWeight: "bold",
        flex: 0.8,
    },
    seeMore: {
        fontSize: 17,
        flex: 0.3
    },
    body: {
        flex: 0.8,

    },
    scrollView: {
        flex: 0.2,
    },
})

