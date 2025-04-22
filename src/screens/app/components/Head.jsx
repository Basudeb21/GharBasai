import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import HeadStyles from './styles/HeadStyles'
import Colors from '../../../constants/Colors'


const Head = (props) => {
    return (
        <View style={HeadStyles.container}>
            <View style={HeadStyles.sideContainer}>
                <TouchableOpacity >
                    <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color={Colors.WHITE}
                    />
                </TouchableOpacity>
            </View>

            <View style={HeadStyles.centerContainer}>
                <Text style={HeadStyles.mainLogo}>{props.heading}</Text>
            </View>

            <View style={HeadStyles.sideContainer} />
        </View>
    )
}

export default Head