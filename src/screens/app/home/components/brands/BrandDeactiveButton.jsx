import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import BrandStyles from './BrandStyles'

const BrandDeactiveButton = (props) => {
    return (
        <TouchableOpacity style={BrandStyles.btnDeactive}>
            <Text style={BrandStyles.btnTxt}>
                {props.btnTxt}
            </Text>
        </TouchableOpacity>
    )
}

export default BrandDeactiveButton