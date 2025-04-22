import { View, Text } from 'react-native'
import React from 'react'
import HotelListsStyles from '../../styles/HotelListsStyles'

const HotelListTopTxt = () => {
    return (
        <View>
            <Text style={HotelListsStyles.mainText}>Book <Text style={HotelListsStyles.numberText}>1300+</Text> GharBasai hotels across <Text style={HotelListsStyles.numberText}>50+</Text> cities</Text>
        </View>
    )
}

export default HotelListTopTxt