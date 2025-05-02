import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HotelList, OfferedCities, UserForm } from "../screens/app";
import { HotelViewPage } from "../screens/app/hotel-view";
import NavigationString from "../constants/NavigationString";
import BookingConfirmedPage from "../screens/app/trips/components/upcoming/BookingConfirmedPage";
import BookingGenerate from "../screens/app/hotel-view/components/BookingGenerate";



const Stack = createNativeStackNavigator();

export default function OfferStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationString.OFFERED_CITIES} component={OfferedCities} />
            <Stack.Screen name={NavigationString.HOTEL_LISTS} component={HotelList} />
            <Stack.Screen name={NavigationString.HOTEL_VIEW_PAGE} component={HotelViewPage} />
            <Stack.Screen name={NavigationString.BOOKING_CONFIRMED_PAGE} component={BookingConfirmedPage} />
            <Stack.Screen name={NavigationString.BOOKIN_GENERATE} component={BookingGenerate} />

        </Stack.Navigator>
    )
}

