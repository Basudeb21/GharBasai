import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import RecentSearchStyle from '../../styles/RecentSearchStyles'
import Colors from '../../../../../constants/Colors'

const ReccentSearchCard = () => {
    return (
        <View style={RecentSearchStyle.card}>
            <View style={RecentSearchStyle.locationContainer}>
                <Ionicons
                    name="location"
                    size={24}
                    color={Colors.BLUE}
                />

            </View>
            <View>
                <Text style={RecentSearchStyle.locationText}>Bangalore</Text>
                <Text style={RecentSearchStyle.bookingDetails}>17 Apr - 18 Apr, 2 guests</Text>
            </View>
        </View>
    )
}

export default ReccentSearchCard