import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HotelListsStyles from '../../styles/HotelListsStyles'
import HotelDetailsCard from './HotelDetailsCard'

const TourList = () => {
    return (
        <View style={HotelListsStyles.container}>
            <Text style={HotelListsStyles.mainText}>Book GharBasai tours across <Text style={HotelListsStyles.numberText}>50+</Text> cities</Text>
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

export default TourList