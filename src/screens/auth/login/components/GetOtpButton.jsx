import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import OTPButtonStyles from './styles/OTPButtonStyles'
import TextStyles from './styles/TextStyles'
import { useNavigation } from '@react-navigation/native';
import String from '../../../../constants/String';
import NavigationString from '../../../../constants/NavigationString';




const GetOtpButton = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(NavigationString.OTP);
    };
    return (
        <View>
            <TouchableOpacity style={OTPButtonStyles.buttonStyle} onPress={handlePress}>
                <Text style={TextStyles.getOtp}>{String.OTP_BTN_TXT}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GetOtpButton