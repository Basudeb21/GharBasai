import { View, Text } from 'react-native'
import React from 'react'
import AllTrips from './components/all/AllTrips';
import UpcommingTrips from './components/upcoming/UpcommingTrips';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../../../constants/Colors';


const TripsTab = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.THEME,
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 14,
                },
                tabBarActiveTintColor: Colors.WHITE,
                tabBarInactiveTintColor: Colors.FADE,
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.WHITE,
                    height: 3,
                },
            }}
        >
            <Tab.Screen name="All Trips" component={AllTrips} />
            <Tab.Screen name="Upcoming Trips" component={UpcommingTrips} />
        </Tab.Navigator>
    );
}

export default TripsTab