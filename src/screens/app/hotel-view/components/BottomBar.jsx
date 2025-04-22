import { View, Text } from 'react-native'
import React from 'react'
import BottomBarStyles from '../styles/BotomBarStyles'

const BottomBar = () => {
    return (
        <View style={BottomBarStyles.container}>
            <View style={BottomBarStyles.button}>
                <Text style={BottomBarStyles.btnTxt}>Pay @ Hotel ₹3,128</Text>
                <Text style={BottomBarStyles.btnSubTxt}>incl. ₹551 GST</Text>
            </View>
            <View style={BottomBarStyles.button}>
                <Text style={BottomBarStyles.btnTxt}>Pay now ₹2,942</Text>
                <Text style={BottomBarStyles.btnSubTxt}>incl. ₹316 GST</Text>
            </View>
        </View>
    )
}

export default BottomBar