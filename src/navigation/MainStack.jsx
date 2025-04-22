import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    HotelInfo,
    Profile,
    Search,
    SearchResult,
    Trips,
    OfferedCities,
    Offers
} from "../screens";
import Home from "../screens/app/home/Home";
import BottomNavbar from "./navbar/BottomNavbar";
import OfferStack from "./OfferStacks";
import ProfileStack from "./ProfileStack";
import NavigationString from "../constants/NavigationString";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    console.log("Home Component:", Home);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomNavbar} />
            <Stack.Screen name={NavigationString.HOME} component={Home} />
            <Stack.Screen name={NavigationString.HOTEL_INFO} component={HotelInfo} />
            <Stack.Screen name={NavigationString.PROFILE} component={Profile} />
            <Stack.Screen name={NavigationString.SEARCH} component={Search} />
            <Stack.Screen name={NavigationString.SEARCH_RESULT} component={SearchResult} />
            <Stack.Screen name={NavigationString.TRIPS} component={Trips} />
            <Stack.Screen name={NavigationString.OFFERED_CITIES} component={OfferedCities} />
            <Stack.Screen name={NavigationString.OFFERS} component={Offers} />
            <Stack.Screen name={NavigationString.OFFER_STACK} component={OfferStack} />
            <Stack.Screen name={NavigationString.PROFILE_STACK} component={ProfileStack} />


        </Stack.Navigator>
    )
}
