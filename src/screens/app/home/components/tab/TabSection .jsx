import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingSearchArea from '../bookings/BookingSearchArea';
import TourPackages from '../bookings/TourPackages';
import Colors from '../../../../../constants/Colors';

const Tab = createMaterialTopTabNavigator();

const TabSection = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 16, fontWeight: '600' },
                tabBarIndicatorStyle: { backgroundColor: Colors.THEME },
                tabBarActiveTintColor: Colors.THEME,
                tabBarInactiveTintColor: Colors.WHITE,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                },

            }}
            lazy={true}
        >
            <Tab.Screen name="Hotels Booking" component={BookingSearchArea} />
            <Tab.Screen name="Tour Booking" component={TourPackages} />
        </Tab.Navigator>
    );
};
export default TabSection;
