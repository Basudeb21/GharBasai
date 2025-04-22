import { View, Text } from 'react-native'
import React from 'react'
import ReviewStyles from '../../styles/ReviewStyles'

const ReviewTopTxt = () => {
    return (
        <View>
            <Text style={ReviewStyles.topTxt}>Trusted for <Text style={ReviewStyles.topTxtHighLight}>500,000+</Text> verified guests.</Text>
        </View>
    )
}

export default ReviewTopTxt