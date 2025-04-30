import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BottomBarStyles from './styles/BottomBarStyles'

const BottomBar = () => {
    return (
        <View style={BottomBarStyles.container}>
            <TouchableOpacity style={BottomBarStyles.btn}>
                <Text style={BottomBarStyles.btnTxt}>Go To Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={BottomBarStyles.btn}>
                <Text style={BottomBarStyles.btnTxt}>View in My Trips</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomBar