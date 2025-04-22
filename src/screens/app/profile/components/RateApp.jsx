import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import RateUs from './styles/RateUs'

const RateApp = () => {
    return (
        <View style={RateUs.cardContainer}>
            <View style={RateUs.textContainer}>
                <Text style={RateUs.title}>Love using our app?</Text>
                <Text style={RateUs.subText}>Rate us on Play Store</Text>
                <TouchableOpacity style={RateUs.button}>
                    <Text style={RateUs.buttonText}>Rate Now</Text>
                </TouchableOpacity>
            </View>

            <View style={RateUs.iconBackground}>
                <Text style={RateUs.iconHint}>💙 ⭐ 👍 📍</Text>
            </View>
        </View>
    )
}

export default RateApp