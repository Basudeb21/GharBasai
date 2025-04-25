import { View, Text } from 'react-native'
import React from 'react'
import GSTCardStyles from './select-rooms-styles/GSTCardStyles'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../../constants/Colors'

const GSTCard = () => {
    return (
        <View style={GSTCardStyles.container}>
            <Text style={GSTCardStyles.headTxt}>To pay (incl. GST)</Text>
            <View style={GSTCardStyles.priceContainer}>
                <Text style={GSTCardStyles.price}>₹2,942</Text>
                <View style={GSTCardStyles.iconBG}>
                    <AntDesign
                        name="down"
                        size={16}
                        color={Colors.THEME}
                    />
                </View>
            </View>
            <View style={GSTCardStyles.footerContainer}>
                <AntDesign
                    name="checkcircle"
                    size={10}
                    color={Colors.THEME}
                />
                <Text style={GSTCardStyles.footerTxt}>Lowest price guranteed</Text>

            </View>
        </View>
    )
}

export default GSTCard