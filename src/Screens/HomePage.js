import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/dist/AntDesign';



const HomePage = () => {

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.sectionTitle}>Browse Plans</Text>
                        <Text style={styles.sectionDesc}>for Airtel Kolkata</Text>
                    </View>
                    <Icon name="closecircle" size={25} color="black" />
                </View>
                <View style={{ marginTop: 15, flexDirection: 'row' }}>
                    <View style={styles.searchContainer}>
                        <Text style={styles.placeholder}>Search Plan Amount, Talktime</Text>
                        <Icon style={styles.searchIcon} name='search1'size={18} />
                    </View>
                </View>
                <View
                    style={styles.separtor}
                />
                <View style={styles.categoryContainer}>
                    <Text>Hey</Text>
                    <Text>Hey</Text>
                    <Text>Hey</Text>
                    <Text>Hey</Text>
                    <Text>Hey</Text>
                </View>
                <View style={styles.items}>
                    <Card></Card>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    tasksWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#F1800D'
    },
    sectionDesc: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgba(38, 50, 56, 0.7)'
    },
    items: {
        marginTop: 30,
    },
    writeTextWrapper: {
        position: "absolute",
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        padding: 15,
        paddingHorizontal: 15,
        width: 250,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addWrapper: {
        height: 60,
        width: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    header: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 50,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingEnd:30
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    separtor: {
        marginTop: 2,
        borderBottomColor: 'rgba(151, 151, 151, 0.1)',
        borderBottomWidth: 2,
        width:355
    },
    placeholder:{
       color: 'rgba(38, 50, 56, 0.4)',
       fontWeight:'400',
    },
    searchIcon:{
        color:'rgba(38, 50, 56, 0.5)'
    }
});


export default HomePage