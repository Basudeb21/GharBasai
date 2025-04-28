import { View, Text } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/dist/Feather'
import HomeScreenStyles from '../../styles/HomeScreenStyles'
import Colors from '../../../../../constants/Colors'



const Header = () => {
    return (
        <View style={HomeScreenStyles.headerLogoContainer}>
            <Text style={HomeScreenStyles.logo}>GharBasai</Text>
            <View style={HomeScreenStyles.supportArea}>

                <View style={HomeScreenStyles.wallet}>
                    <Feather
                        name="phone-call"
                        size={14}
                        color={Colors.THEME}
                    />
                </View>
            </View>
        </View>
    )
}

export default Header