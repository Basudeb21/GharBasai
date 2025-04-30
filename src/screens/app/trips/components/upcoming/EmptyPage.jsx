import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import EmptyPageStyles from './styles/EmptyPageStyles'

const EmptyPage = () => {
    return (
        <View style={EmptyPageStyles.container}>
            <Text style={EmptyPageStyles.msg}>You don't have booked any trips.</Text>
            <TouchableOpacity style={EmptyPageStyles.btn}>
                <Text style={EmptyPageStyles.btnTxt}>Book now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmptyPage