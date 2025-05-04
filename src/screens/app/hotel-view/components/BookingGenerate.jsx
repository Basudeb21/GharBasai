import { View, Text, BackHandler, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Images from '../../../../constants/Images';
import BookingGenerateStyles from '../styles/BookingGenerateStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../constants/Colors';
import BookingLocationCard from './select-rooms-components/BookingLocationCard';
import Booking from './select-rooms-components/Booking';
import PricingDetails from './select-rooms-components/PricingDetails';
import PricingDetailsStyles from './select-rooms-components/select-rooms-styles/PricingDetailsStyles';

const BookingGenerate = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                navigation.goBack();
                return true;
            }
        );

        return () => backHandler.remove();
    }, [navigation]);

    return (
        <ScrollView>
            <ImageBackground source={{ uri: Images.HOTEL_IMG }} style={BookingGenerateStyles.bgImg}>
                <View style={BookingGenerateStyles.headerContainer}>
                    <TouchableOpacity
                        style={BookingGenerateStyles.backBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign
                            name="arrowleft"
                            size={22}
                            color={Colors.WHITE}
                        />
                    </TouchableOpacity>
                </View>
                <View style={BookingGenerateStyles.confirmedContainer}>
                    <Text style={BookingGenerateStyles.confirmedBtn}>Confirmed</Text>
                </View>
            </ImageBackground>
            <BookingLocationCard />
            <Booking />
            <PricingDetails />
            <TouchableOpacity style={PricingDetailsStyles.btn}>
                <Text style={PricingDetailsStyles.btnTxt}>Pay to confirm | 501</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default BookingGenerate