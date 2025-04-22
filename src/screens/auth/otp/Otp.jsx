import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import OtpStyles from './components/OtpStyles';
import { useNavigation } from '@react-navigation/native';
import String from '../../../constants/String';




const Otp = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    };

    const handleOtpChange = (text, index) => {
        if (/^[0-9]?$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            if (text && index < otp.length - 1) {
                const nextInput = index + 1;
                refs[nextInput]?.focus();
            }
        }
    };
    const refs = [];

    return (
        <View style={OtpStyles.container}>
            <Text style={OtpStyles.title}>{String.ENTER_OTP}</Text>
            <Text style={OtpStyles.subtext}>
                {String.OTP_SEND_TO} <Text style={OtpStyles.bold}>{String.DEFAULT_MOBILE_NUMBER}</Text>
            </Text>
            <TouchableOpacity>
                <Text style={OtpStyles.editNumber} onPress={handlePress}>{String.EDIT_NUMBER}</Text>
            </TouchableOpacity>

            <View style={OtpStyles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (refs[index] = ref)}
                        style={OtpStyles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleOtpChange(text, index)}
                    />
                ))}
            </View>

            <View style={OtpStyles.actionsRow}>
                <TouchableOpacity>
                    <Text style={OtpStyles.resendText}>Resend OTP</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={OtpStyles.submitButton}>
                <Text style={OtpStyles.submitText}>{String.SUBMIT_OTP}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Otp