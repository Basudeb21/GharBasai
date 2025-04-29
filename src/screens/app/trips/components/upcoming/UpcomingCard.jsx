import { View, Text } from 'react-native'
import React from 'react'
import UpcomingCardStyles from './styles/UpcomingCardStyles'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import Colors from '../../../../../constants/Colors'

const UpcomingCard = () => {
    return (
        <View style={UpcomingCardStyles.container}>
            <View style={UpcomingCardStyles.rowOne}>
                <View style={UpcomingCardStyles.calander}>
                    <Text style={UpcomingCardStyles.month}>
                        APR
                    </Text>
                    <Text style={UpcomingCardStyles.date}>
                        30
                    </Text>
                    <Text style={UpcomingCardStyles.year}>
                        2025
                    </Text>
                </View>
                <View style={UpcomingCardStyles.detailsContainer}>
                    <Text style={UpcomingCardStyles.hotelName}>
                        Ghar Basai Shree Krishna Suites
                    </Text>
                    <Text style={UpcomingCardStyles.roomDetails}>
                        1 Night | 1 Room | 2 Guests
                    </Text>

                </View>
            </View>
            <View style={UpcomingCardStyles.rowTwo}>
                <Text style={UpcomingCardStyles.confirmedTxt}>
                    CONFIRMED - Pay Now
                </Text>
                <View style={UpcomingCardStyles.directionContainer}>
                    <Entypo
                        name="direction"
                        size={16}
                        color={Colors.BLUE}
                    />
                    <Text style={UpcomingCardStyles.directionTxt}>Get direction</Text>
                </View>
            </View>
        </View>
    )
}

export default UpcomingCard