import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'



import Colors from '../../../../../constants/Colors'
import FacilityCardStyles from './select-rooms-styles/FacilityCardStyles'

const FacilityCard = () => {
    return (
        <View style={FacilityCardStyles.container}>
            <View style={FacilityCardStyles.facilityContainer}>
                <FontAwesome
                    name="wifi"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={FacilityCardStyles.facilityName}>Free WIFI</Text>
            </View>
            <View style={FacilityCardStyles.facilityContainer}>
                <FontAwesome
                    name="tv"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={FacilityCardStyles.facilityName}>LED TV</Text>
            </View>
            <View style={FacilityCardStyles.facilityContainer}>
                <MaterialCommunityIcons
                    name="cctv"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={FacilityCardStyles.facilityName}>24X7 security</Text>
            </View>
            <View style={FacilityCardStyles.facilityContainer}>
                <FontAwesome5
                    name="toilet-paper"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={FacilityCardStyles.facilityName}>Free Toiletri</Text>
            </View>
            <View style={FacilityCardStyles.facilityContainer}>
                <MaterialCommunityIcons
                    name="food-turkey"
                    size={18}
                    color={Colors.DISABLED_NAVIGATION_COLOR}
                />
                <Text style={FacilityCardStyles.facilityName}>Free Food</Text>
            </View>
            <View style={FacilityCardStyles.counterContainer}>
                <Text style={FacilityCardStyles.counter}>+21</Text>
            </View>

        </View>
    )
}

export default FacilityCard