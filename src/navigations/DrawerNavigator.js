import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';
import HomeNavigator from './HomeNavigator';

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();

    const Login = () => {
        return (
            <View>
                <Text>
                    Hi from login
                </Text>
            </View>
        )
    }

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;