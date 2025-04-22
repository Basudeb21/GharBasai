import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenStyles from "./styles/HomeScreenStyles"
import BookingSearchArea from './components/bookings/BookingSearchArea'
import Destination from './components/destination/Destination'
import BestDeals from './components/BestDeals'
import FeaturesCard from './components/features/FeaturesCard'
import BookText from './components/bookings/BookText'
import RecentSearch from './components/recent/RecentSearch'
import Header from './components/bookings/Header'
import HotelLists from './components/hotel-list/HotelLists'
import ReviewScreen from './components/reviews/ReviewScreen'
import Franchisee from './components/connect-with-us/Franchisee'



const Home = () => {
    return (
        <ScrollView style={HomeScreenStyles.container}>
            <View style={HomeScreenStyles.searchArea}>
                <Header />
                <BookText />
                <BookingSearchArea />
            </View>
            <RecentSearch />
            <Destination />
            <HotelLists />
            <BestDeals />
            <FeaturesCard />
            <ReviewScreen />
            <Franchisee />
        </ScrollView>
    )
}

export default Home