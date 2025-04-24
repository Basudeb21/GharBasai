import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HotelViewPageStyles from './styles/HotelViewPageStyles'
import Head from './components/Head'
import BottomBar from './components/BottomBar'
import HotelViewBody from './components/HotelViewBody'
import HomeStayDetailsBox from './components/HomeStayDetailsBox'
import RatingBox from './components/RatingBox'
import SelectRoom from './components/SelectRoom'
import HotelPoliciesCard from './components/select-rooms-components/HotelPoliciesCard'
import FacilityCard from './components/select-rooms-components/FacilityCard'
import SavingCornerCard from './components/select-rooms-components/SavingCornerCard'
import SingleHotel from '../offers/offer-cities/components/SingleHotel'
import RatingsAndReview from './components/select-rooms-components/RatingsAndReview'

const HotelViewPage = () => {
    return (
        <View style={HotelViewPageStyles.container}>
            <View style={HotelViewPageStyles.headContainer}>
                <Head />
            </View>
            <View style={HotelViewPageStyles.bodyContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HotelViewBody />
                    <HomeStayDetailsBox />
                    <RatingBox />
                    <SelectRoom />
                    <View style={HotelViewPageStyles.bgc}>
                        <HotelPoliciesCard />
                        <FacilityCard />
                        <SavingCornerCard />
                        <RatingsAndReview />

                        <Text style={HotelViewPageStyles.nearbyHead}>Other Hotels Nearby</Text>
                    </View>


                    <SingleHotel />
                    <SingleHotel />
                    <SingleHotel />

                </ScrollView>
            </View>

            <View style={HotelViewPageStyles.bootomBarContainer}>
                <BottomBar />
            </View>
        </View>
    );
};


export default HotelViewPage