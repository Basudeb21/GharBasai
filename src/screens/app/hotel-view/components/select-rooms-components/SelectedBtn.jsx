import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../../constants/Colors'
import BtnStyles from './select-rooms-styles/BtnStyles'

const SelectedBtn = () => {
    return (
        <View style={BtnStyles.container}>
            <AntDesign
                name="check"
                size={16}
                color={Colors.WHITE}
            />
            <Text style={BtnStyles.content}>Selected</Text>
        </View>
    )
}

export default SelectedBtn