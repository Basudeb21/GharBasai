import { View, Text, ScrollView, useState } from 'react-native'
import React from 'react'
import HotelViewPageStyles from './styles/HotelViewPageStyles'
import Head from './components/Head'
import BottomBar from './components/BottomBar'
import HotelViewBody from './components/HotelViewBody'
import HomeStayDetailsBox from './components/HomeStayDetailsBox'
import RatingBox from './components/RatingBox'
import HotelPoliciesCard from './components/select-rooms-components/HotelPoliciesCard'
import FacilityCard from './components/select-rooms-components/FacilityCard'
import SavingCornerCard from './components/select-rooms-components/SavingCornerCard'
import SingleHotel from '../offers/offer-cities/components/SingleHotel'
import RatingsAndReview from './components/select-rooms-components/RatingsAndReview'
import GSTCard from './components/select-rooms-components/GSTCard'
import TravellerDetails from './components/select-rooms-components/TravellerDetails'
import TermsAndConditions from './components/select-rooms-components/TermsAndConditions'
import NeedHelp from './components/select-rooms-components/NeedHelp'
import NearbyHotels from './components/NearbyHotels'
import PayCard from './components/PayCard' // Import the PayCard component

const HotelViewPage = () => {
    const [isPayCardVisible, setIsPayCardVisible] = React.useState(false);

    return (
        <View style={HotelViewPageStyles.container}>
            <View style={HotelViewPageStyles.headContainer}>
                <Head />
            </View>
            <View style={HotelViewPageStyles.bodyContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HotelViewBody />
                    <View style={HotelViewPageStyles.bgc}>
                        <HomeStayDetailsBox />
                        <RatingBox />
                        <HotelPoliciesCard />
                        <FacilityCard />
                        <SavingCornerCard />
                        <GSTCard />
                        <TravellerDetails />
                        <TermsAndConditions />
                        <RatingsAndReview />

                        <Text style={HotelViewPageStyles.nearbyHead}>Other Hotels Nearby</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <NearbyHotels />
                        <NearbyHotels />
                        <NearbyHotels />
                        <NearbyHotels />
                    </ScrollView>
                    <View style={HotelViewPageStyles.bgc}>
                        <NeedHelp />
                    </View>
                </ScrollView>
            </View>

            <View style={HotelViewPageStyles.bootomBarContainer}>
                <BottomBar
                    onPayAtHotelPress={() => setIsPayCardVisible(true)}
                />
            </View>

            <PayCard
                isVisible={isPayCardVisible}
                onClose={() => setIsPayCardVisible(false)}
            />
        </View>
    );
};

export default HotelViewPage