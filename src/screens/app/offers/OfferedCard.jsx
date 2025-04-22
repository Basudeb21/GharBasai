import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import BestDealsStyles from '../home/styles/BestDealsStyles'
import Images from '../../../constants/Images'


const OfferedCard = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground style={BestDealsStyles.card}
                imageStyle={BestDealsStyles.bgImage}
                source={{ uri: Images.TEST_IMG_LINK }}
            >
                <View style={BestDealsStyles.tag}>
                    <Text style>FABAPRIL</Text>
                </View>
                <View style={BestDealsStyles.txtContainer}>
                    <Text style={BestDealsStyles.discountTxt}>Up to 60% off</Text>
                    <Text style={BestDealsStyles.discountTxt}>+5000 Credits</Text>
                    <Text style={BestDealsStyles.describtion}>Deals of the month</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default OfferedCard