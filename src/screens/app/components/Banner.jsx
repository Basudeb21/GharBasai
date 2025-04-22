import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import BannerStyle from './styles/BannerStyles'
import Images from '../../../constants/Images'


const Banner = () => {
    return (
        <ImageBackground style={BannerStyle.banner}
            imageStyle={BannerStyle.bgImage}
            source={{ uri: Images.TEST_OFFER_LINK }}
        >

        </ImageBackground>
    )
}

export default Banner