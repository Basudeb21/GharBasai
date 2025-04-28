import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import BrandStyles from './BrandStyles'

const BrandActiveButton = (props) => {
    return (
        <TouchableOpacity style={BrandStyles.btnActive}>
            <Text style={BrandStyles.btnTxt}>
                {props.btnTxt}
            </Text>
        </TouchableOpacity>
    )
}

export default BrandActiveButton