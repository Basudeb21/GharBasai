import { View, Text } from 'react-native'
import React from 'react'
import HotelListStyles from '../styles/HotelListsStyles'

const HotelListFoundTexts = () => {
    return (
        <View style={HotelListStyles.foundContainer}>
            <Text style={HotelListStyles.foundTxt}>64 GharBasai found</Text>
            <Text style={HotelListStyles.promoCodeTxt}>Promo code: Ghar Basai autgo-applied</Text>
        </View>
    )
}

export default HotelListFoundTexts