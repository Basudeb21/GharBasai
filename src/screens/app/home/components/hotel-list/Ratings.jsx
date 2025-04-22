import { View, Text } from 'react-native'
import React from 'react'
import HotelListsStyles from '../../styles/HotelListsStyles'

const Ratings = () => {
    return (
        <View style={HotelListsStyles.ratingcontainer}>
            <Text style={HotelListsStyles.ratingTxt}>3.9/5</Text>
            <Text style={HotelListsStyles.rateCount}>1,786 reviews</Text>
        </View>
    )
}

export default Ratings