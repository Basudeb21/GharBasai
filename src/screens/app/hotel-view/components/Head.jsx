import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import Colors from '../../../../constants/Colors'
import HeadBarStyles from '../styles/HeadBarStyle'

const Head = () => {
    return (
        <View style={HeadBarStyles.container}>
            <View style={[HeadBarStyles.itemContainer, HeadBarStyles.noBG]}>
                <AntDesign
                    name="left"
                    size={18}
                    color={Colors.WHITE}
                />
            </View>

            <View style={HeadBarStyles.itemContainer}>
                <Text style={HeadBarStyles.items}>
                    Tue, 22 Apr
                </Text>
            </View>
            <View style={[HeadBarStyles.itemContainer, HeadBarStyles.noBG]}>
                <AntDesign
                    name="arrowright"
                    size={18}
                    color={Colors.WHITE}
                />
            </View>

            <View style={HeadBarStyles.itemContainer}>
                <Text style={HeadBarStyles.items}>
                    Wed, 23 Apr
                </Text>
            </View>

            <View style={HeadBarStyles.guestContainer}>
                <FontAwesome
                    name="user"
                    size={18}
                    color={Colors.WHITE}
                />
                <Text style={HeadBarStyles.guestTxt}>
                    2
                </Text>
            </View>
        </View>
    )
}

export default Head