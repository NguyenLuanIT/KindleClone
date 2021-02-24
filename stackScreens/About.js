import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion'

const SECTIONS = [
    {
        title: 'Android Version',
        label1: 'SDK Version',
        content1: '8.1.0',
        label2: 'API Level',
        content2: '27',

    },
    {
        title: 'CPU',
        label1: 'Processors/Cores',
        content1: '8',
        label2: 'Minimum Speed',
        content2: '652 MHz',
        label3: 'Maximum Speed',
        content3: '1804 Mhz',
    },
    {
        title: 'RAM',
        label1: 'Total Memory',
        content1: '1800.79 MB',
        label2: 'Max Application Memory',
        content2: '512,00 MB',
    },
    {
        title: 'Storage',
        label1: 'Data Partition Size',
        content1: '9081,30MB',
        label2: 'Data Partition Available',
        content2: '825,03 MB',
        label3: 'External Storage Available',
        content3: '609.03 MB',
    },
    {
        title: 'Display',
        label1: 'Resolution',
        content1: '720 x 1371',
        label2: 'Diagonal Size',
        content2: '5,75"',
        label3: 'Size',
        content3: 'NORMAL',
    },

];

const Items = ({ label, content }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{label}</Text>
            <Text style={styles.itemText}>{content}</Text>
        </View>
    )
}
const CheckItem = ({ label, content }) => {
    return (
        label !== undefined ?
            <Items label={label} content={content} /> : <View />
    )
}
export default class AboutScreen extends Component {
    state = {
        activeSections: [],
    };
    renderHeader = section => {
        return (
            <View>
                <Text style={styles.itemLabel}>{section.title}</Text>
            </View>
        );
    };
    renderContent = section => {
        return (
            <View style={styles.contentContainer}>
                <CheckItem label={section.label1} content={section.content1} />
                <CheckItem label={section.label2} content={section.content2} />
                <CheckItem label={section.label3} content={section.content3} />
                <CheckItem label={section.label4} content={section.content4} />
                <CheckItem label={section.label5} content={section.content5} />
            </View>
        );
    };
    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerLabel}>Kindle for Android</Text>
                    <Text style={styles.text}>8.36.0.100(1.3.23.29.70.0)</Text>
                    <Text style={styles.text}>
                        Kindle for Android software C 2010-2020 Amazon.com, Inc. or its affiliates.
                        All rights reserved. Amazon, the Amazon logo, the AmazonKindle logo, Kindle,
                        and Whispersync are trademarks of Amazon.com, Inc. or its affiliates.
                </Text>
                </View>
                <ScrollView>
                    <Accordion
                        activeSections={this.state.activeSections}
                        sections={SECTIONS}
                        touchableComponent={TouchableOpacity}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        onChange={this.setSections}
                        duration={0}
                        expandMultiple={true}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    header: {
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    headerLabel: {
        padding: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    itemText: {
        fontSize: 16,
    },
    itemLabel: {
        padding: 15,
        fontSize: 20,
        fontWeight: "bold",
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    contentContainer: {
        justifyContent: "center",
        backgroundColor: "#F4F4F4",
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    itemContainer: {
        fontSize: 16,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        padding: 15,

    },
    text: {
        paddingLeft: 15,
        paddingBottom: 15,
        fontSize: 16,
    }

})
