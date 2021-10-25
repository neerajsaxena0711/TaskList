import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';


const AuthNavigator = () => {

    const dispatch = useDispatch();
    const LoginStack = createNativeStackNavigator();
    const signIn = async () => {
        try {
            //Get the user ID token
            const { idToken, user } = await GoogleSignin.signIn();
            //Create a google credential with the token 
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            dispatch(setUser(user.givenName));
            // Sign-in the user with the credential
            return await auth().signInWithCredential(googleCredential);
        } catch (error) {
            //Handle the error
            console.log('Error while login', error);
        }
    }

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '520022901718-hgfbg1rbigfqg1l10nnrr3doefkavo50.apps.googleusercontent.com',
        });
    }, []);

    const Login = () => {
        return (
            <View style={styles.loginButtonSection}>
                <GoogleSigninButton
                    style={{ width: 192, height: 60, }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn} />
            </View>
        )
    }

    return (
        <LoginStack.Navigator>
            <LoginStack.Screen options={{ headerShown: false }} name="Login" component={Login}></LoginStack.Screen>
        </LoginStack.Navigator>
    )
}


const styles = StyleSheet.create({
    loginTextSection: {
        width: '100%',
        height: '30%',
    },
    loginButtonSection: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    inputText: {
        marginLeft: '20%',
        width: '60%'
    },
    loginButton: {
        backgroundColor: 'blue',
        color: 'white'
    }
});


export default AuthNavigator;