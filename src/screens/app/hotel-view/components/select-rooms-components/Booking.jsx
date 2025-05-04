import { View, Text } from 'react-native'
import React from 'react'
import BookingStyles from './select-rooms-styles/BookingStyles'

const Booking = () => {
    return (
        <View style={BookingStyles.container}>
            <Text style={BookingStyles.headTxt}>Booking Details</Text>
            <View style={BookingStyles.card}>
                <View style={BookingStyles.subCard}>
                    <View style={BookingStyles.subContainer}>
                        <Text style={BookingStyles.check}>Check in</Text>
                        <Text style={BookingStyles.date}>Tue, 29 Apr, 25</Text>
                        <Text style={BookingStyles.time}>12 : 00 PM</Text>
                    </View>
                    <View style={BookingStyles.subContainer}>
                        <Text style={BookingStyles.check}>Check in</Text>
                        <Text style={BookingStyles.date}>Tue, 29 Apr, 25</Text>
                        <Text style={BookingStyles.time}>12 : 00 PM</Text>
                    </View>
                </View>
                <View style={BookingStyles.hr} />
                <Text style={BookingStyles.details}>1 Night, 2 Guests</Text>
                <Text style={BookingStyles.details}>1 Deluxe Room</Text>

            </View>
        </View>
    )
}

export default Booking