import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Button, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { delTask, markTask, setUser } from '../redux/actions';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Card from '../components/Card'


const Tasks = ({ navigation }) => {

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.taskReducer.todoList);
    const userInfo = useSelector((state) => state.taskReducer.userInfo);

    const logout = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
                dispatch(setUser(null));
            });
    }
    if (!todoList.length){
        return (
            <View style={styles.container}>
            {/* Today's tasks */}
            <View style={styles.tasksWrapper}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.sectionTitle}>Welcome,</Text>
                        <Text style={styles.userName}>{userInfo}!</Text>
                    </View>
                    <Icon name="logout" size={30} onPress={logout} />
                </View>
                <View>
                   <Text style={styles.notask}>Add a task</Text>
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTextWrapper}>
                <Button color="orange" title="Add Your Task" onPress={() => navigation.navigate("AddTask")}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>
                            +
                        </Text>
                    </View>
                </Button>
            </KeyboardAvoidingView>
        </View>
        )
    }
    return (
        <View style={styles.container}>
            {/* Today's tasks */}
            <View style={styles.tasksWrapper}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.sectionTitle}>Tasks for</Text>
                        <Text style={styles.userName}>{userInfo}!</Text>
                    </View>
                    <Icon name="logout" size={30} onPress={logout} />
                </View>
                <View style={styles.items}>
                    {/* This is where the tasks will go */}
                    <FlatList style={{flex:1}} data={todoList}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onLongPress={() => dispatch(delTask(item.id))} onPress={() => dispatch(markTask(item.id))}>
                                    <Card text={item} key={item.id} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTextWrapper}>
                <Button color="orange" title="Add Your Task" onPress={() => navigation.navigate("AddTask")}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>
                            +
                        </Text>
                    </View>
                </Button>
            </KeyboardAvoidingView>
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
    items: {
        marginTop: 0,
        flex:1,
        paddingBottom:110
    },
    writeTextWrapper: {
        position: "absolute",
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    notask: {
        fontSize: 30,
        marginTop: '50%',
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '600'
    }
});

export default Tasks