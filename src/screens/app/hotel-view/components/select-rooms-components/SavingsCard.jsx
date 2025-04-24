import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'

import Colors from '../../../../../constants/Colors'
import SavingCardStyles from './select-rooms-styles/SavingCardStyles'

const SavingsCard = () => {
    return (
        <View style={SavingCardStyles.container}>
            <View style={SavingCardStyles.left}>
                <MaterialIcons
                    name="local-offer"
                    size={16}
                    color={Colors.THEME}
                />
            </View>
            <View style={SavingCardStyles.right}>
                <Text style={SavingCardStyles.mainTxt}>₹656 save with GharBasai</Text>
                <View style={SavingCardStyles.subContainer}>
                    <Text style={SavingCardStyles.subTxt}>View all offers</Text>
                    <AntDesign
                        name="right"
                        size={14}
                        color={Colors.DEACTIVE}
                    />
                </View>
            </View>
        </View>
    )
}

export default SavingsCard