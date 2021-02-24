import React from 'react';
import { StyleSheet, View, Text, ScrollView }
    from 'react-native';
import Header from '../components/Header'
import BooksSection from '../components/BooksSection'

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.scrollView}>
                <ScrollView >
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeTitle}>Welcome to Kindle!</Text>
                        <Text style={styles.welcomeText}>
                            Find your next great read by browsing top picks and recommendations below, or shop the store.
                        </Text>
                    </View>
                    <View style={styles.body}>
                        <BooksSection title="BEST SELLERS IN KINDLE STORE" />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    welcomeContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 10,
        backgroundColor: "white"
    },
    welcomeTitle: {
        fontSize: 20,
        fontWeight: "bold",

    },
    welcomeText: {
        fontSize: 16,
        textAlign: "center"
    },
    body: {

    },
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
        textAlign: "center",
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
    scrollView: {
        flex: 0.93
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