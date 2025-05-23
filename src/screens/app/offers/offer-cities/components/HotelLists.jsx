import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Head from '../../../components/Head'
import HotelListFoundTexts from './HotelListFoundTexts'
import SingleHotel from './SingleHotel'
import Colors from '../../../../../constants/Colors'



const HotelLists = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <Head heading="Hotel List" />
            <HotelListFoundTexts />
            <SingleHotel />
            <SingleHotel />
            <SingleHotel />
            <SingleHotel />

        </ScrollView>
    )
}

export default HotelLists