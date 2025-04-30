import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import UpcomingCard from './UpcomingCard'
import BookingConfirmedPage from './BookingConfirmedPage'
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../../../../constants/NavigationString';


const UpcommingTrips = () => {
    const navigation = useNavigation();

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={{ width: "100%", alignItems: "center" }}
                onPress={() =>
                    navigation.navigate(NavigationString.OFFER_STACK, {
                        screen: NavigationString.BOOKING_CONFIRMED_PAGE
                    })
                }>
                <UpcomingCard />
            </TouchableOpacity>
        </View>
    )
}

export default UpcommingTrips