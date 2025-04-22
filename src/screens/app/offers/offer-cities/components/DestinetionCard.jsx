import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import DestinitionStyles from '../styles/DestinitionStyles'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Images from '../../../../../constants/Images';
import NavigationString from '../../../../../constants/NavigationString';



const DestinetionCard = () => {
    const navigation = useNavigation();
    return (

        <View style={DestinitionStyles.imageWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationString.HOTEL_LISTS)}>
                <ImageBackground
                    source={{ uri: Images.PURI }}
                    style={DestinitionStyles.image}
                    imageStyle={{ borderRadius: scale(15) }}
                >
                    <Text style={DestinitionStyles.text}>Destination</Text>
                </ImageBackground>
            </TouchableOpacity>

        </View>
    );
}

export default DestinetionCard