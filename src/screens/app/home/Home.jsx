import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import HomeScreenStyles from "./styles/HomeScreenStyles"
import Destination from './components/destination/Destination'
import FeaturesCard from './components/features/FeaturesCard'
import BookText from './components/bookings/BookText'
import RecentSearch from './components/recent/RecentSearch'
import Header from './components/bookings/Header'
import HotelLists from './components/hotel-list/HotelLists'
import ReviewScreen from './components/reviews/ReviewScreen'
import Franchisee from './components/connect-with-us/Franchisee'
import TabSection from './components/tab/TabSection '
import Images from '../../../constants/Images'
import Brands from './components/brands/Brands'



const Home = () => {

    return (
        <ScrollView style={HomeScreenStyles.container}>
            <ImageBackground
                source={Images.HOME}
                resizeMode="cover"
                style={HomeScreenStyles.searchArea}>
                <ScrollView
                    style={HomeScreenStyles.container}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <Header />
                    <BookText />
                    <View style={HomeScreenStyles.tabArea}>
                        <TabSection />
                    </View>
                </ScrollView>
            </ImageBackground>
            <RecentSearch />
            <Destination />
            <HotelLists />
            <FeaturesCard />
            <ReviewScreen />
            <Brands />
            <Franchisee />
        </ScrollView>

    )
}

export default Home