import { View, Text } from 'react-native'
import React from 'react'
import SelectRoomsStyle from '../styles/SelectRoomsStyles'
import RoomDetails from './select-rooms-components/RoomDetails'
import PriceCard from './select-rooms-components/PriceCard'

const SelectRoom = () => {
    return (
        <View style={SelectRoomsStyle.container}>
            <Text style={SelectRoomsStyle.mainText}> Select Room</Text>
            <RoomDetails />
            <PriceCard />
        </View>
    )
}

export default SelectRoom