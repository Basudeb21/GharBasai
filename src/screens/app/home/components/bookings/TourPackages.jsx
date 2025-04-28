import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BookingInput from './BookingInput'
import HomeScreenStyles from '../../styles/HomeScreenStyles';
import SearchInputStyles from '../../styles/SearchInput';
import Feather from 'react-native-vector-icons/dist/Feather'
import Colors from '../../../../../constants/Colors';




const TourPackages = () => {
    const [location, setLocation] = useState('');
    return (
        <View style={HomeScreenStyles.searchAreaContainer}>
            <BookingInput
                label="Where to?"
                placeholder="Search city, area or hotel"
                value={location}
                onChangeText={setLocation}
                keyboardType="default" />
            <BookingInput
                label="Checkin"
                placeholder="Thu, 17 Apr"
                value={location}
                onChangeText={setLocation}
                keyboardType="default" />

            <BookingInput
                label="Guestes"
                placeholder="2 guestes"
                value={location}
                onChangeText={setLocation}
                keyboardType="default" />
            <TouchableOpacity style={SearchInputStyles.button} >
                <View style={SearchInputStyles.content}>
                    <Feather
                        name="search"
                        size={18}
                        color={Colors.WHITE}
                    />
                    <Text style={SearchInputStyles.text}>Search</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default TourPackages