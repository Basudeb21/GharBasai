import { View, Text } from 'react-native'
import React from 'react'
import HomeScreenStyles from '../../styles/HomeScreenStyles'

const BookText = () => {
    return (
        <View style={HomeScreenStyles.bookTextContainer}>
            <Text style={HomeScreenStyles.bookIndiaText}>Book top-rated budget</Text>
            <Text style={HomeScreenStyles.bookIndiaText}>Hotels in India.</Text>
        </View>
    )
}

export default BookText