import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BookingConfirmedPageStyles from './styles/BookingConfirmedPageStyles'

const PayMoneyCard = () => {
    return (
        <View style={BookingConfirmedPageStyles.payMoneyContainer}>
            <View style={BookingConfirmedPageStyles.payTxtContainer}>
                <Text style={BookingConfirmedPageStyles.payAmmount}>Pay ₹1,667</Text>
                <Text style={BookingConfirmedPageStyles.payDes}>and travel cashless</Text>
            </View>
            <TouchableOpacity style={BookingConfirmedPageStyles.payBtn}>
                <Text style={BookingConfirmedPageStyles.payBtnTxt}>Full Pay</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PayMoneyCard