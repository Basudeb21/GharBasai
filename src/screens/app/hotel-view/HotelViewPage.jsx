import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HotelViewPageStyles from './styles/HotelViewPageStyles'
import Head from './components/Head'
import BottomBar from './components/BottomBar'
import HotelViewBody from './components/HotelViewBody'
import HomeStayDetailsBox from './components/HomeStayDetailsBox'
import RatingBox from './components/RatingBox'
import SelectRoom from './components/SelectRoom'
import PriceCard from './components/select-rooms-components/PriceCard'

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
                </ScrollView>
            </View>

            <View style={HotelViewPageStyles.bootomBarContainer}>
                <BottomBar />
            </View>
        </View>
    );
};


export default HotelViewPage