/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';


const Navigator = () => {
    const Tab = createBottomTabNavigator();
    const ProfileStack = createNativeStackNavigator();

    function ProfileStackScreen() {
        return (
            <ProfileStack.Navigator initialRouteName="Login">
                <ProfileStack.Screen name="Login" component={Login}/>
                <ProfileStack.Screen name="Profile" component={Profile}/>
            </ProfileStack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = faHouse;
                        } else if (route.name === 'Add') {
                            iconName =  faInstagram;
                        } else if (route.name === 'ProfileTab') {
                            iconName = faUser;
                        }
                        return <FontAwesomeIcon icon={ iconName } size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarShowLabel: false,
                })}>
                <Tab.Screen name="Home" size={30} component={Feed} />
                <Tab.Screen name="Add" size={30} component={AddPhoto} />
                <Tab.Screen name="ProfileTab" size={30} component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
