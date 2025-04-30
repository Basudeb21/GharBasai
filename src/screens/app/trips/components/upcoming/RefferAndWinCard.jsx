import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../../constants/Colors'
import Images from '../../../../../constants/Images'
import BookingConfirmedPageStyles from './styles/BookingConfirmedPageStyles'

const RefferAndWinCard = () => {
    return (
        <View style={BookingConfirmedPageStyles.refferAndWinCard}>
            <View style={BookingConfirmedPageStyles.left}>
                <Text style={BookingConfirmedPageStyles.refferTxt}>Reffer and Win Goa Trip!</Text>
                <View style={BookingConfirmedPageStyles.knowMoreContainer}>
                    <Text style={BookingConfirmedPageStyles.knowMoreTxt}>Know more</Text>
                    <AntDesign
                        name="arrowright"
                        size={16}
                        color={Colors.THEME}
                    />
                </View>
            </View>
            <Image style={BookingConfirmedPageStyles.tripImage} source={{ uri: Images.GOA_AVATAR }} />
        </View>
    )
}

export default RefferAndWinCard