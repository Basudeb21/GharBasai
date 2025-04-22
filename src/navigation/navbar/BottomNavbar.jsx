import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Offers, Profile, Search, Trips, Home } from '../../screens';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import NavBarStyles from './NavBarStyles';
import NavigationString from '../../constants/NavigationString';
import Colors from '../../constants/Colors';





const Tab = createBottomTabNavigator();


const BottomNavbar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: NavBarStyles.navBar,
                tabBarActiveTintColor: Colors.ACTIVE_NAVIGATION_COLOR,
                tabBarInactiveTintColor: Colors.DISABLED_NAVIGATION_COLOR,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={NavigationString.HOME}
                component={Home}
                options={{
                    tabBarLabel: NavigationString.HOME,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="home"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationString.OFFERS}
                component={Offers}
                options={{
                    tabBarLabel: NavigationString.OFFERS,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="local-offer"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationString.TRIPS}
                component={Trips}
                options={{
                    tabBarLabel: NavigationString.TRIPS,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="bag-personal-outline"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationString.PROFILE}
                component={Profile}
                options={{
                    tabBarLabel: NavigationString.PROFILE,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome
                            name="user"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavbar