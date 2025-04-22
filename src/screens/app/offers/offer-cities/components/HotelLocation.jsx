import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import HotelListStyles from '../styles/HotelListsStyles'
import Colors from '../../../../../constants/Colors'



const HotelLocation = () => {
    return (
        <View style={HotelListStyles.locationContainer}>
            <Ionicons
                name="location"
                size={12}
                color={Colors.THEME_TRANSPARENT}
            />
            <Text style={HotelListStyles.locationName}>Kandavali West Station</Text>

        </View>
    )
}

export default HotelLocation