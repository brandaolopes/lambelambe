/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartBar } from '@fortawesome/free-regular-svg-icons/faChartBar';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';

import Feed from './screens/Feed';


const Navigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? faChartBar : faHouse;
                        } else if (route.name === 'Add') {
                            iconName = focused ? faChartBar : faHouse;
                        } else if (route.name === 'Profile') {
                            iconName = focused ? faChartBar : faHouse;
                        }
                        return <FontAwesomeIcon icon={ iconName } size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}>
                <Tab.Screen name="Home" size={20} component={Feed} />
                <Tab.Screen name="Add" size={30} component={Feed} />
                <Tab.Screen name="Profile" size={30} component={Feed} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
