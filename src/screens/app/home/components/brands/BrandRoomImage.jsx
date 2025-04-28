import { View, Text, Image } from 'react-native'
import React from 'react'
import Images from '../../../../../constants/Images'
import BrandStyles from './BrandStyles'

const BrandRoomImage = () => {
    return (
        <Image source={{ uri: Images.HOTEL_IMG }} style={BrandStyles.imageAd} />
    )
}

export default BrandRoomImage