import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HotelListTopTxt from './HotelListTopTxt'
import HotelDetailsCard from './HotelDetailsCard'
import HotelListsStyles from '../../styles/HotelListsStyles'


const HotelLists = () => {
    return (
        <View style={HotelListsStyles.container}>
            <HotelListTopTxt />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={HotelListsStyles.destinationImageScroll}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <View style={HotelListsStyles.hotelContainer}>
                        <HotelDetailsCard />
                    </View>
                ))}
            </ScrollView>

        </View>
    )
}

export default HotelLists