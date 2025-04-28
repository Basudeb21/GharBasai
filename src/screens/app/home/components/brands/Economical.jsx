import { View, Text } from 'react-native'
import React from 'react'
import BrandRoomImage from './BrandRoomImage'
import BrandRoomTxt from './BrandRoomTxt'
import BrandStyles from './BrandStyles'

const Economical = (props) => {
    return (
        <View style={BrandStyles.brandDetails}>
            <BrandRoomImage />
            <BrandRoomTxt desc={props.desc} />
        </View>
    )
}

export default Economical