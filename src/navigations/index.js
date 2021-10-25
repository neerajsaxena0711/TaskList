import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator'
import auth from '@react-native-firebase/auth';

const AppNavContainer = () => {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <NavigationContainer>
                {/* <HomeNavigator></HomeNavigator> */}
                <AuthNavigator></AuthNavigator>
            </NavigationContainer>
        );
    }
    return (
        <NavigationContainer>
            <HomeNavigator></HomeNavigator>
            {/* <AuthNavigator></AuthNavigator> */}
        </NavigationContainer>)
}

export default AppNavContainer;