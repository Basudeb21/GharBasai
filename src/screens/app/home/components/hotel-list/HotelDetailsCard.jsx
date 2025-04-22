import { View, Text, Image } from 'react-native'
import React from 'react'
import Ratings from './Ratings'
import HotelListsStyles from '../../styles/HotelListsStyles'


const HotelDetailsCard = () => {
    return (
        <View style={HotelListsStyles.listContainer}>
            <Image source={{ uri: "https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-howrah-west-bengal-city-1-hero?qlt=82&ts=1726644778421" }} style={HotelListsStyles.listImages} />
            <Text style={HotelListsStyles.hotelName}>Ghar Basai Homestays pvt Ltd</Text>
            <View>
                <Text style={HotelListsStyles.hotelInfo}>Taj Hotel, Kolkata</Text>
                <Text style={HotelListsStyles.hotelInfo}>starts ₹1,650 per night</Text>
            </View>
            <View>
                <Ratings />
            </View>
        </View>
    )
}

export default HotelDetailsCard