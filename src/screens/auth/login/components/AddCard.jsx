import { View, Text } from 'react-native'
import React from 'react'
import AddCardStyles from './styles/AddCardStyles'
import { Image } from 'react-native-elements'
import Images from '../../../../constants/Images'



const AddCard = () => {
    return (
        <View style={AddCardStyles.mainCard}>
            <Image source={Images.LOGO} style={AddCardStyles.logo} />
        </View>
    )
}

export default AddCard