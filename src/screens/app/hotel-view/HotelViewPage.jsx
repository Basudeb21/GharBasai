import { View, Text } from 'react-native'
import React from 'react'
import HotelViewPageStyles from './styles/HotelViewPageStyles'
import Head from './components/Head'
import BottomBar from './components/BottomBar'
import HotelViewBody from './components/HotelViewBody'

const HotelViewPage = () => {
    return (
        <View style={HotelViewPageStyles.container}>
            <View style={HotelViewPageStyles.headContainer}>
                <Head />
            </View>
            <View style={HotelViewPageStyles.bodyContainer}>
                <HotelViewBody />
            </View>

            <View style={HotelViewPageStyles.bootomBarContainer}>
                <BottomBar />
            </View>
        </View>
    );
};


export default HotelViewPage