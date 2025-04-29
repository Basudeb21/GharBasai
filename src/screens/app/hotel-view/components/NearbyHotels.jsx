import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Images from '../../../../constants/Images';
import NavigationString from '../../../../constants/NavigationString';
import HotelLocation from '../../offers/offer-cities/components/HotelLocation';
import Ratings from '../../home/components/hotel-list/Ratings';
import Facelities from '../../offers/offer-cities/components/Facelities';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import NearbyHotelsStyles from '../../offers/offer-cities/styles/NearbyHotelStyles';
const NearbyHotels = () => {
    const navigation = useNavigation();

    return (
        <View style={NearbyHotelsStyles.hrContainer}>
            <Image
                source={{ uri: Images.HOTEL_IMG }}
                style={{ height: verticalScale(130), width: "100%", borderRadius: scale(12), marginStart: moderateScale(10) }}
            />
            <TouchableOpacity onPress={() => navigation.navigate(NavigationString.HOTEL_VIEW_PAGE)}>

                <Text style={NearbyHotelsStyles.hotelName}>Hotel Name</Text>
                <HotelLocation />
                <View style={NearbyHotelsStyles.ratingContainer}>
                    <Ratings />
                </View>
                <Facelities />
                <View style={NearbyHotelsStyles.hr} />
            </TouchableOpacity>

        </View>

    )
}

export default NearbyHotels