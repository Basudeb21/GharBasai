import { View, Text } from 'react-native'
import React from 'react'
import BtnStyles from './select-rooms-styles/BtnStyles'

const SelectBtn = () => {
    return (
        <View style={BtnStyles.uncheckedContainer}>

            <Text style={BtnStyles.uncheckedContent}>Select</Text>
        </View>
    )
}

export default SelectBtn