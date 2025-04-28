import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ReviewTopTxt from './ReviewTopTxt'
import ReviewStyles from '../../styles/ReviewStyles'
import ReviewCard from './ReviewCard'

const ReviewScreen = () => {
    return (
        <View style={ReviewStyles.container}>
            <ReviewTopTxt />
            <ScrollView horizontal={true}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />

            </ScrollView>
        </View>
    )
}

export default ReviewScreen