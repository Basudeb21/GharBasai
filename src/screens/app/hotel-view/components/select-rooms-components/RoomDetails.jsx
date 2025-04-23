import { View, Text, Image } from 'react-native'
import React from 'react'
import RoomDetailsStyle from './select-rooms-styles/RoomDetailsStyles'
import Images from '../../../../../constants/Images'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import Foundation from 'react-native-vector-icons/dist/Foundation'

import Colors from '../../../../../constants/Colors'

const RoomDetails = () => {
    return (
        <View style={RoomDetailsStyle.container}>
            <View style={RoomDetailsStyle.headContainer}>
                <Text style={RoomDetailsStyle.headTxt}>Deluxe Room</Text>
                <Text style={RoomDetailsStyle.guestNumber}>. 3 adults</Text>
                <Text style={RoomDetailsStyle.hurryMsg}>7 room(s) left, Hurry!</Text>
            </View>
            <View style={RoomDetailsStyle.bodyContainer}>
                <Image source={{ uri: Images.HOTEL_IMG }} style={RoomDetailsStyle.roomImg} />
                <View style={RoomDetailsStyle.facilityContainer}>
                    <View style={RoomDetailsStyle.singleFacility}>
                        <MaterialIcons
                            name="balcony"
                            size={16}
                            color={Colors.DISABLED_NAVIGATION_COLOR}
                        />
                        <Text style={RoomDetailsStyle.facilityTxt}>City view/balcony</Text>
                    </View>
                    <View style={RoomDetailsStyle.singleFacility}>
                        <Ionicons
                            name="bed-outline"
                            size={16}
                            color={Colors.DISABLED_NAVIGATION_COLOR}
                        />
                        <Text style={RoomDetailsStyle.facilityTxt}>Double Bed</Text>
                    </View>
                    <View style={RoomDetailsStyle.singleFacility}>
                        <Foundation
                            name="arrows-out"
                            size={16}
                            color={Colors.DISABLED_NAVIGATION_COLOR}
                        />
                        <Text style={RoomDetailsStyle.facilityTxt}>120 sq ft.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RoomDetails