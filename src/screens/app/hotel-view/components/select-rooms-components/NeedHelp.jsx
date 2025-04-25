import { View, Text } from 'react-native'
import React from 'react'
import NeedHelpStyles from './select-rooms-styles/NeedHelpStyles'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import Colors from '../../../../../constants/Colors'

const NeedHelp = () => {
    return (
        <View style={NeedHelpStyles.container}>
            <View style={NeedHelpStyles.left}>
                <Text style={NeedHelpStyles.headTxt}>Still undecided? Need any help?</Text>
                <Text style={NeedHelpStyles.subTxt}>Call us and our travel expert will assist you.</Text>
            </View>
            <View style={NeedHelpStyles.right}>
                <View style={NeedHelpStyles.logoBg}>
                    <FontAwesome
                        name="phone"
                        size={16}
                        color={Colors.THEME}
                    />
                </View>
            </View>
        </View>
    )
}

export default NeedHelp