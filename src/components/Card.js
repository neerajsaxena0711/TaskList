import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddComment from './AddComment';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/AntDesign';


const Card = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={{
                    textDecorationLine: props.text.done ? 'line-through' : 'none', fontSize: 20,
                    flex: 1,
                    color: '#263238',
                    fontWeight: '500'
                }}>{props.text.data}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("TaskDetail", { title: props.text.data, comments: props.text.comments })} style={styles.button}>
                    <Text style={styles.buttonText}>View More</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    props.text.comments.length > 0 && <Text style={styles.comments}>comments:-</Text>
                }
            </View>
            <View>
                {props.text.comments.length > 0 && <Text style={styles.comments}>{props.text.comments[props.text.comments.length-1].value}</Text>}
            </View>
            <AddComment value={props.text.id}></AddComment>
            {/* <View style={styles.container}>
            <TouchableOpacity style={styles.addComment}>
                    <Text style={styles.commentButtonText}>Add Comment</Text>
                </TouchableOpacity>
            </View> */}
            {/* <View
                style={styles.separtor}
            /> */}
        </View>
    );
}


export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    price: {
        fontSize: 20,
        flex: 1,
        color: '#263238',
        fontWeight: '500'
    },
    comments: {
        color: 'rgba(38, 50, 56, 0.7)',
        marginTop: 6,
        fontWeight: '600',
        fontSize: 12
    },
    description: {
        color: 'rgba(38, 50, 56, 0.7)',
        marginTop: 10,
        fontWeight: '300',
        fontSize: 14
    },
    separtor: {
        marginTop: 12,
        borderBottomColor: 'rgba(151, 151, 151, 1)',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#FFF',
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 15,
        justifyContent: 'center',
        borderColor: '#F1800D',
        borderWidth: 1,
    },
    buttonText: {
        color: "#F1800D",
    },
    commentButtonText: {
        color: "#F1800D",
        fontSize: 10,
    },
    addComment: {
        backgroundColor: '#FFF',
        height: 35,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 15,
        justifyContent: 'center',
        borderColor: '#F1800D',
        borderWidth: 1,
        marginTop: 20
    },
    card:{
        padding:22,
        backgroundColor:'#FFF',
        borderRadius:20,
        marginTop:22,
        marginBottom:10
    }
});

