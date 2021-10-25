import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Comment from '../components/Comment'


const TaskDetail = ({ route, navigation }) => {
    const { comments, title } = route.params;

    if (!comments.length) {
        return (
            <View>
                <Text style={styles.nocomments}>No Comments Added</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.sectionTitle}>Comments For</Text>
                        <Text style={styles.userName}>{title}</Text>
                    </View>
                </View>
                <View style={styles.items}>
                    {
                        <FlatList style={{flex:1}} data={comments}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Comment text={item} key={item.id} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        flex:1
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    userName: {
        fontSize: 44,
        fontWeight: 'bold',
        color: '#4d83db'
    },

    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    items: {
        marginTop: 30,
        flex:1
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#bf3636',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    comment: {
        color: 'grey',
        fontSize: 16,
        paddingHorizontal: 15,
        fontWeight: 'bold',
        backgroundColor: '#FFF',
    },
    nocomments: {
        marginTop: '90%',
        fontSize: 30,
        fontWeight:'600',
        textAlign: 'center',
        alignSelf: 'center'
    },
});

export default TaskDetail