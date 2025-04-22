import { View, Text } from 'react-native'
import React from 'react'
import ReviewStyles from '../../styles/ReviewStyles'

const ReviewPersonDetails = () => {
    return (
        <View>
            <Text style={ReviewStyles.customerName}>Jhon Doe</Text>
            <Text style={ReviewStyles.costomerStayedAt} >Stayed at fabHotel  7 Square in Mumbai in 20 Jul</Text>
        </View>
    )
}

export default ReviewPersonDetails