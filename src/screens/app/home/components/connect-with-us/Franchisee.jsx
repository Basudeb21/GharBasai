import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import CWUStyles from '../../styles/ConnectWithUsStyles'
import Colors from '../../../../../constants/Colors'
import RateApp from '../../../profile/components/RateApp'
import { moderateScale } from 'react-native-size-matters'



const Franchisee = () => {
    return (
        <View>
            <View style={{ marginHorizontal: moderateScale(18) }}>
                <RateApp />
            </View>


            <View style={CWUStyles.card}>
                <View style={CWUStyles.logoContainer}>
                    <FontAwesome5
                        name="handshake"
                        size={18}
                        color={Colors.THEME}
                    />
                </View>
                <View style={CWUStyles.detailsBox}>
                    <Text style={CWUStyles.head}>Get corporate deals</Text>
                    <Text style={CWUStyles.bodyTxt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente.</Text>
                </View>
            </View>
        </View>
    )
}

export default Franchisee