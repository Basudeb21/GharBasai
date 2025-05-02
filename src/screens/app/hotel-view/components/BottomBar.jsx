import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomBarStyles from '../styles/BotomBarStyles'

const BottomBar = ({ onPayAtHotelPress }) => {
    return (
        <View style={BottomBarStyles.container}>
            <TouchableOpacity
                style={BottomBarStyles.button}
                onPress={onPayAtHotelPress}
            >
                <Text style={BottomBarStyles.btnTxt}>Pay @ Hotel ₹3,128</Text>
                <Text style={BottomBarStyles.btnSubTxt}>incl. ₹551 GST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[BottomBarStyles.button, BottomBarStyles.button2]}>
                <Text style={BottomBarStyles.btnTxt2}>Pay now ₹2,942</Text>
                <Text style={BottomBarStyles.btnSubTxt2}>incl. ₹316 GST</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomBar