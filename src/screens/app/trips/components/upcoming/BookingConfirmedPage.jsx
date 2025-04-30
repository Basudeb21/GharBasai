import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import BookingConfirmedPageStyles from './styles/BookingConfirmedPageStyles'
import Images from '../../../../../constants/Images'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Entypo from 'react-native-vector-icons/dist/Entypo'

import Colors from '../../../../../constants/Colors'
import UpcomingCardStyles from './styles/UpcomingCardStyles'
import { scale } from 'react-native-size-matters'
import PayMoneyCard from './PayMoneyCard'
import RefferAndWinCard from './RefferAndWinCard'
import BottomBar from './BottomBar'

const BookingConfirmedPage = () => {
    return (
        <ScrollView style={BookingConfirmedPageStyles.container}>
            <ImageBackground source={Images.CONFIRMED_PAGE_IMAGE} style={BookingConfirmedPageStyles.confirmImg}>
                <Text style={BookingConfirmedPageStyles.confirmedMsg}>Booking Confirmed</Text>
                <Text style={BookingConfirmedPageStyles.bookingIdTxt}>Booking ID GHBS1234</Text>
            </ImageBackground>
            <View style={BookingConfirmedPageStyles.bookingInfoCard}>
                <View style={BookingConfirmedPageStyles.iconDataContainer}>
                    <AntDesign
                        name="calendar"
                        size={16}
                        color={Colors.FADE}
                    />
                    <Text style={BookingConfirmedPageStyles.bookingDate}>
                        Tue, 29 Apr - Wed, 30 Apr</Text>
                </View>
                <View style={BookingConfirmedPageStyles.iconDataContainer}>
                    <Entypo
                        name="location-pin"
                        size={16}
                        color={Colors.FADE}
                    />
                    <Text style={BookingConfirmedPageStyles.hotelName}>GharBasai Sri Krishna Suites</Text>

                </View>

                <Text style={BookingConfirmedPageStyles.bookingDetails}>1 night {'\u2022'} 2 Guests</Text>
                <Text style={BookingConfirmedPageStyles.bookingDetails}>1 Delux Room</Text>
                <View style={[UpcomingCardStyles.directionContainer, { marginTop: scale(10), alignItems: "center" }]}>
                    <Entypo
                        name="direction"
                        size={14}
                        color={Colors.BLUE}
                    />
                    <Text style={UpcomingCardStyles.directionTxt}>Get direction</Text>
                </View>
                <View style={BookingConfirmedPageStyles.hr} />
                <View style={BookingConfirmedPageStyles.paymentContainer}>
                    <Text style={BookingConfirmedPageStyles.paymentTxt}>Payble at Hotel</Text>
                    <Text style={BookingConfirmedPageStyles.ammount}>₹ 1,667</Text>
                </View>
                <PayMoneyCard />
                <PayMoneyCard />
                <RefferAndWinCard />
                <RefferAndWinCard />


            </View>
            <BottomBar />

        </ScrollView>


    )
}

export default BookingConfirmedPage