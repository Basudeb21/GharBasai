import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import RateUs from './styles/RateUs'
import Images from '../../../../constants/Images'
import { scale } from 'react-native-size-matters'

const RateApp = () => {
    return (
        <ImageBackground
            source={Images.RATE}
            resizeMode="cover"
            borderRadius={scale(20)}
            style={RateUs.cardContainer}>
            <View style={RateUs.textContainer}>
                <Text style={RateUs.title}>Love using our app?</Text>
                <Text style={RateUs.subText}>Rate us on Play Store</Text>
                <TouchableOpacity style={RateUs.button}>
                    <Text style={RateUs.buttonText}>Rate Now</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default RateApp