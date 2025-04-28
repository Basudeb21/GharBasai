import { View, Text } from 'react-native'
import React from 'react'
import BrandStyles from './BrandStyles'
import BrandRoomImage from './BrandRoomImage'
import BrandRoomTxt from './BrandRoomTxt'

const Express = (props) => {
    return (
        <View style={BrandStyles.brandDetails}>
            <BrandRoomImage />
            <BrandRoomTxt desc={props.desc} />
        </View>
    )
}

export default Express