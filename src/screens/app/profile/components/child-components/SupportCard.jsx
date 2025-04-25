import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../../../constants/Colors'
import HelpAndSupportStyles from './HelpAndSupportStyles'

const SupportCard = (props) => {
    return (
        <View style={HelpAndSupportStyles.card}>
            {props.icon}
            <Text style={HelpAndSupportStyles.cardText}>{props.Content}</Text>
        </View>
    )
}

export default SupportCard