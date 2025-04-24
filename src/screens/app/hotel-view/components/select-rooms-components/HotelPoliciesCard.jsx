import { View, Text } from 'react-native'
import React from 'react'
import HotelPoliciesCardStyles from './select-rooms-styles/HotelPolicisCardStyles'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../../constants/Colors'

const HotelPoliciesCard = () => {
    return (
        <View style={HotelPoliciesCardStyles.container}>
            <Text style={HotelPoliciesCardStyles.headTxt}>Hotel Policies</Text>
            <View style={HotelPoliciesCardStyles.checkInCheckOutContainer}>
                <View style={HotelPoliciesCardStyles.checkInContainer}>
                    <Text style={HotelPoliciesCardStyles.checkInCheckOutTxt}>Check-in</Text>
                    <Text style={HotelPoliciesCardStyles.checkInCheckOutTime}>12:00 PM</Text>
                </View>
                <View style={HotelPoliciesCardStyles.checkOutContainer}>
                    <Text style={HotelPoliciesCardStyles.checkInCheckOutTxt}>Check-out</Text>
                    <Text style={HotelPoliciesCardStyles.checkInCheckOutTime}>11:00 AM</Text>
                </View>
            </View>
            <View style={HotelPoliciesCardStyles.hr} />
            <View style={HotelPoliciesCardStyles.viewMoreContainer}>
                <Text style={HotelPoliciesCardStyles.viewMoreTxt}>View More</Text>
                <AntDesign
                    name="right"
                    size={18}
                    color={Colors.THEME}
                />
            </View>
        </View>
    )
}

export default HotelPoliciesCard