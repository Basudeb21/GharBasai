import { View, Text } from 'react-native'
import React from 'react'
import PricingDetailsStyles from './select-rooms-styles/PricingDetailsStyles'

const PricingDetails = () => {
    return (
        <>
            <Text style={PricingDetailsStyles.head}>Price Details</Text>

            <View style={PricingDetailsStyles.container}>
                <View style={PricingDetailsStyles.subContainer}>
                    <Text style={PricingDetailsStyles.lineOneContent}>Base Price (1 room X 1 night)</Text>
                    <Text style={PricingDetailsStyles.lineOneContent}>₹1899</Text>
                </View>
                <View style={PricingDetailsStyles.subContainer}>
                    <Text style={PricingDetailsStyles.lineTwoContent}>Coupon</Text>
                    <Text style={PricingDetailsStyles.lineTwoContent}>-₹411</Text>
                </View>
                <View style={PricingDetailsStyles.subContainer}>
                    <Text style={PricingDetailsStyles.lineThreeContent}>Discounted Price</Text>
                    <Text style={PricingDetailsStyles.lineThreeContent}>₹1488</Text>
                </View>
                <View style={PricingDetailsStyles.subContainer}>
                    <Text style={PricingDetailsStyles.lineFourContent}>GST</Text>
                    <Text style={PricingDetailsStyles.lineFourContent}>₹178</Text>
                </View>
                <View style={PricingDetailsStyles.subContainer}>
                    <Text style={PricingDetailsStyles.lineFiveContent}>Total Payble Ammount</Text>
                    <Text style={PricingDetailsStyles.lineFiveContent}>₹1677</Text>
                </View>
            </View>
        </>

    )
}

export default PricingDetails