import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions';


const AddComment = (props) => {

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();


    const add = () => {
        if (comment) {
            dispatch(addComment(props.value, comment))
            setComment('');
        }
    }

    return (
        <View>
            <TextInput value={comment} onChangeText={value => setComment(value)} style={styles.input} placeholder={"Add a comment"} />
            {/* <Button title='Add comment' onPress={add}></Button> */}
            <View style={styles.container}>
            <TouchableOpacity onPress={add} style={styles.addComment}>
                    <Text style={styles.commentButtonText}>Add Comment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        paddingHorizontal: 5,
        backgroundColor: '#FFF',
        borderColor: '#C0C0C0',
        borderRadius: 10,
        marginTop:15
    },
    commentBtn: {
        paddingHorizontal: 10
    },
    commentButtonText: {
        color: "#F1800D",
        fontSize:12,
        textAlign:'center'
    },
    addComment:{
        backgroundColor: '#FFF',
        height:35,
        paddingLeft: 18,
        paddingRight:18,
        borderRadius: 15,
        justifyContent:'center',
        borderColor:'#F1800D',
        borderWidth:1,
        marginTop:20
    }
});

export default AddComment;