import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SavingsCard from './SavingsCard'
import SavingCornerCardStyles from './select-rooms-styles/SavingCornerCardStyles'
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../../../constants/Colors'

const SavingCornerCard = () => {
    const [checked, setChecked] = useState(false);
    return (
        <View style={SavingCornerCardStyles.container}>
            <Text style={SavingCornerCardStyles.mainTxt}>Savings Corner</Text>
            <SavingsCard />
            <View style={SavingCornerCardStyles.savingDataContainer}>
                <View style={SavingCornerCardStyles.dataContainer}>
                    <FontAwesome6
                        name="coins"
                        size={12}
                        color={Colors.DISABLED_NAVIGATION_COLOR}
                    />
                    <Text style={SavingCornerCardStyles.savingData}>You will earn GharBasai credit after check-out</Text>
                </View>
                <View style={SavingCornerCardStyles.dataContainer}>
                    <TouchableOpacity
                        onPress={() => setChecked(!checked)}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <FontAwesome
                            name={checked ? 'check-square' : 'square-o'}
                            size={15}
                            color={checked ? Colors.THEME : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                        <Text style={SavingCornerCardStyles.savingData}>Redeem 78 credits worth ₹78</Text>
                    </TouchableOpacity>


                </View>
                <View style={SavingCornerCardStyles.totalSaveContainer}>
                    <AntDesign
                        name="checkcircle"
                        size={12}
                        color={Colors.THEME}
                    />
                    <Text style={SavingCornerCardStyles.totalSaveTxt}>₹1,540 save on total!</Text>
                </View>
            </View>
        </View>
    )
}

export default SavingCornerCard