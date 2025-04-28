import { View, Text } from 'react-native'
import React from 'react'
import TripsTab from './TripsTab'
import TripsStyles from './styles/TripsStyles'

const Trips = () => {
    return (
        <View style={TripsStyles.container}>
            <TripsTab />
        </View>
    )
}

export default Trips