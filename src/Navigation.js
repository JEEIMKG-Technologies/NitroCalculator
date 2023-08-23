import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Pantallas de la aplicación
import InputScreen from './screens/entrace';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const navigationRef = React.createRef();
const Tab = createBottomTabNavigator();

const AuthScreens = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="entrace" component={InputScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
);

const MainBarScreen=()=>{
    return (
        <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false, tabBarActiveTintColor: '#333', tabBarInactiveTintColor: '#ccc', tabBarStyle: { display: 'flex', backgroundColor: '#f5f5f5', paddingVertical: 15, elevation: 0, height:70,  elevation: 0, shadowOpacity: 0 } }} >
            <Tab.Screen name="home" component={HomeScreen} options={{ tabBarLabel: 'Inicio', tabBarIcon: ({ color }) => <Octicons name="home" size={25} color={color} /> }}/>
            <Tab.Screen name="profile" component={ProfileScreen} options={{ tabBarLabel: 'Perfil', tabBarIcon: ({ color }) => <Octicons name="person" size={25} color={color} /> }}/>
        </Tab.Navigator>
    );
};

// Funcion principal de la aplicación
/*<Stack.Screen name="loading" component={LoadingScreen} options={{ headerShown: false }} /> */
export default function Navigation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="auth" component={AuthScreens} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};