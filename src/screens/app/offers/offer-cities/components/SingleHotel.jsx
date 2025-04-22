import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HorizontalScrollHotelImgs from './HorizontalScrollHotelImgs'
import HotelListStyles from '../styles/HotelListsStyles'
import HotelLocation from './HotelLocation'
import Ratings from '../../../home/components/hotel-list/Ratings'
import { useNavigation } from '@react-navigation/native';

import Facelities from './Facelities'
import NavigationString from '../../../../../constants/NavigationString'


const SingleHotel = () => {
    const navigation = useNavigation();

    return (
        <View style={HotelListStyles.hrContainer}>
            <HorizontalScrollHotelImgs />
            <TouchableOpacity onPress={() => navigation.navigate(NavigationString.HOTEL_VIEW_PAGE)}>

                <Text style={HotelListStyles.hotelName}>Hotel Name</Text>
                <HotelLocation />
                <View style={HotelListStyles.ratingContainer}>
                    <Ratings />
                    <Text style={HotelListStyles.guestTxt}>Per night, 2 guests</Text>
                </View>
                <Facelities />
                <View style={HotelListStyles.hr} />
            </TouchableOpacity>

        </View>

    )
}

export default SingleHotel