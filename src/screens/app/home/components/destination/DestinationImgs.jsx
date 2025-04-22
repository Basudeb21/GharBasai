import { View, Text, Image } from 'react-native'
import React from 'react'
import DestinationStyles from '../../styles/DestinationsStyles'

const DestinationImgs = () => {
    return (
        <Image source={{ uri: "https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-howrah-west-bengal-city-1-hero?qlt=82&ts=1726644778421" }} style={DestinationStyles.destinationImgs} />
    )
}

export default DestinationImgs

