import { View, Text } from 'react-native'
import React from 'react'
import RatingBoxStyles from '../styles/RatingBoxStyles'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../constants/Colors'


const RatingBox = () => {
    return (
        <View style={RatingBoxStyles.container}>
            <View style={RatingBoxStyles.rateContainer}>
                <View style={RatingBoxStyles.ratingContainer}>
                    <Text style={RatingBoxStyles.ratingTxt}>
                        4/5
                    </Text>
                </View>
                <View style={RatingBoxStyles.ratingGradeContainer}>
                    <Text style={RatingBoxStyles.ratingGrade}>Very Good</Text>
                    <Text style={RatingBoxStyles.ratingNumber}>1539 ratings</Text>
                </View>
            </View>
            <View style={RatingBoxStyles.back}>
                <AntDesign
                    name="right"
                    size={16}
                    color={Colors.THEME}
                />
            </View>
        </View>
    )
}

export default RatingBox