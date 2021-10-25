import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Button, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = ({ navigation }) => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.taskReducer.todoList);

    const handleClick = () => {
        if (input) {
            dispatch(addTask(input));
            Keyboard.dismiss();
            navigation.popToTop();
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.tasksWrapper}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.sectionTitle}>Add Your</Text>
                        <Text style={styles.task}>Task</Text>
                    </View>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTextWrapper}>
                <TextInput value={input} onChangeText={text => setInput(text)} style={styles.input} placeholder={"Write a task"} />
                <Button color="orange" title="Add" onPress={handleClick}>
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
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    task: {
        fontSize: 44,
        fontWeight: 'bold',
        color: '#4d83db'
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
});

export default AddTask;