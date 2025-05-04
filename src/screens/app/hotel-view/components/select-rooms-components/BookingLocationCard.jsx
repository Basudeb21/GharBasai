import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BookingLocationCardStyles from './select-rooms-styles/BookingLocationCardStyles'

const BookingLocationCard = () => {
    return (
        <View style={BookingLocationCardStyles.container}>
            <Text style={BookingLocationCardStyles.hotelName}>GharBasai Shri Krishna Suites</Text>
            <Text style={BookingLocationCardStyles.hotelLocation}>22, Opp Central Mall, near CCD, 447, Bellandur Gate Road, Belandur</Text>
            <Text style={BookingLocationCardStyles.bookingID}>BOOKING ID: GHBS1234</Text>
            <View style={BookingLocationCardStyles.btnContainer}>
                <TouchableOpacity style={BookingLocationCardStyles.btn}>
                    <Text style={BookingLocationCardStyles.cancelBtn}>Cancel Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={BookingLocationCardStyles.btn}>
                    <Text style={BookingLocationCardStyles.directionBtn}>Get Direction</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default BookingLocationCard