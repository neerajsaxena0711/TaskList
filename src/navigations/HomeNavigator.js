import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import AddTask from '../Screens/AddTask';
import TaskDetail from '../Screens/TaskDetail';
import Tasks from '../Screens/Tasks';


const HomeNavigator = () => {

    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Tasks" screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="Tasks" component={Tasks}></HomeStack.Screen>
            <HomeStack.Screen name="AddTask" options={{ title: 'Add Task' }} component={AddTask}></HomeStack.Screen>
            <HomeStack.Screen name="TaskDetail" options={{ title: 'Comments' }} component={TaskDetail}></HomeStack.Screen>
        </HomeStack.Navigator>
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
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
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
    }
});

export default HomeNavigator;