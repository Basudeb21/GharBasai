import { View, Text } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import ReviewPersonDetails from './ReviewPersonDetails'
import ReviewStyles from '../../styles/ReviewStyles'

const ReviewCard = () => {
    return (
        <View style={ReviewStyles.card}>
            <Text style={ReviewStyles.comment}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni voluptate dolorem porro distinctio praesentium consequuntur consectetur esse voluptas iusto quas."
            </Text>
            <View style={ReviewStyles.reviewerParent}>
                <View style={ReviewStyles.avatarParent}>
                    <Avatar />
                </View>
                <View style={ReviewStyles.customerParent}>
                    <ReviewPersonDetails />
                </View>
            </View>
        </View>
    )
}

export default ReviewCard