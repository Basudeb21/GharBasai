import { View, Text } from 'react-native'
import React from 'react'
import BrandStyles from './BrandStyles'
import Feather from 'react-native-vector-icons/dist/Feather'
import Colors from '../../../../../constants/Colors'

const BrandRoomTxt = (props) => {
    return (
        <View style={BrandStyles.brandTxtContainer}>
            <Text style={BrandStyles.type}>Ghar Basai Hotel</Text>
            <Text style={BrandStyles.typedesc}>{props.desc}</Text>
            <View style={BrandStyles.featuresContainer}>
                <View style={BrandStyles.singleFeatures}>
                    <Feather
                        name="check-circle"
                        size={12}
                        color={Colors.DISABLED_NAVIGATION_COLOR}
                    />
                    <Text style={BrandStyles.features}>Top reviewd hotels</Text>
                </View>
                <View style={BrandStyles.singleFeatures}>
                    <Feather
                        name="check-circle"
                        size={12}
                        color={Colors.DISABLED_NAVIGATION_COLOR}
                    />
                    <Text style={BrandStyles.features}>Centrally Located</Text>
                </View>
                <View style={BrandStyles.singleFeatures}>
                    <Feather
                        name="check-circle"
                        size={12}
                        color={Colors.DISABLED_NAVIGATION_COLOR}
                    />
                    <Text style={BrandStyles.features}>Free Wifi</Text>
                </View>
            </View>

        </View>
    )
}

export default BrandRoomTxt