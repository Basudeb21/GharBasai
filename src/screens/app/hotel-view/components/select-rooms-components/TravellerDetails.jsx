import { View, Text } from 'react-native'
import { PaperProvider, TextInput } from 'react-native-paper';
import React, { useState } from 'react'
import TravellerDetailsStyles from './select-rooms-styles/TravellerDetailsStyles'
import TextStyles from '../../../../auth/login/components/styles/TextStyles'
import InputBoxStyles from '../../../../auth/login/components/styles/InputBoxStyles'
import CountryPicker from 'react-native-country-picker-modal';
import UserFormStyles from '../../../profile/components/styles/UserFormStyles'
import Colors from '../../../../../constants/Colors'
TextInput

const TravellerDetails = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState('91');
    const [country, setCountry] = useState({});

    const handleCountrySelect = (country) => {
        setCountry(country);
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
    };

    const [formData, setFormData] = useState({
        fullName: '',
        email: ''
    });

    const handleChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };
    return (
        <View style={TravellerDetailsStyles.container}>
            <View style={TravellerDetailsStyles.headRow}>
                <Text style={TravellerDetailsStyles.headText}>TravellerDetails</Text>
                <Text style={TravellerDetailsStyles.primaryTxt}>Pick primary traveller</Text>
            </View>
            <Text style={TravellerDetailsStyles.subTxt}>All booking comunication will be sent here</Text>
            <View style={TravellerDetailsStyles.detailsBox}>
                <View style={TravellerDetailsStyles.inputParent}>
                    <PaperProvider>
                        <Text style={TravellerDetailsStyles.label}>Phone Number</Text>
                        <View style={TravellerDetailsStyles.phoneInputWrapper}>
                            <View style={TravellerDetailsStyles.countrySelector}>
                                <CountryPicker
                                    countryCode={countryCode}
                                    withFilter
                                    withFlag
                                    withCallingCode
                                    withEmoji
                                    onSelect={handleCountrySelect}
                                    containerButtonStyle={TravellerDetailsStyles.flagPicker}
                                />
                                <Text style={TravellerDetailsStyles.codeText}>+{callingCode}</Text>
                            </View>
                            <TextInput
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                placeholder="Enter phone number"
                                keyboardType="phone-pad"
                                mode="flat"
                                style={TravellerDetailsStyles.phoneInput}
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                theme={{
                                    colors: {
                                        primary: Colors.THEME,
                                        text: 'black', // Set text color to black
                                        placeholder: 'gray', // Optional: Set placeholder text color to gray
                                    },
                                }}
                            />
                        </View>
                        <TextInput
                            label="Full name"
                            value={formData.fullName}
                            onChangeText={(text) => handleChange('fullName', text)}
                            mode="outlined"
                            style={UserFormStyles.input}
                            theme={{
                                colors: {
                                    primary: Colors.THEME,
                                    text: 'black', // Set text color to black
                                    placeholder: 'gray', // Optional: Set placeholder text color to gray
                                },
                            }}
                        />
                        <TextInput
                            label="Email"
                            value={formData.email}
                            onChangeText={(text) => handleChange('fullName', text)}
                            mode="outlined"
                            style={UserFormStyles.input}
                            theme={{
                                colors: {
                                    primary: Colors.THEME,
                                },
                            }}
                        />
                    </PaperProvider>

                </View>
            </View>
        </View>
    )
}

export default TravellerDetails