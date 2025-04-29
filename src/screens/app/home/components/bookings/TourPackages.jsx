import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import BookingInput from './BookingInput'
import HomeScreenStyles from '../../styles/HomeScreenStyles';
import SearchInputStyles from '../../styles/SearchInput';
import Feather from 'react-native-vector-icons/dist/Feather'
import Colors from '../../../../../constants/Colors';
import Images from '../../../../../constants/Images';




const TourPackages = () => {
    const [location, setLocation] = useState('');
    return (
        <ImageBackground
            source={Images.HOME}
            resizeMode="cover"
            style={{
                height: "100%",
                flex: 1,
                marginTop: -1,
                marginBottom: -1,
            }}

        >
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
        </ImageBackground>

    )
}

export default TourPackages