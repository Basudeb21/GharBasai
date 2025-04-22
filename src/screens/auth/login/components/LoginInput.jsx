import { View, Text, TextInput, InputAccessoryView } from 'react-native'
import React, { useState } from 'react'
import TextStyles from './styles/TextStyles'
import InputBoxStyles from './styles/InputBoxStyles'
import CountryPicker from 'react-native-country-picker-modal';
import String from '../../../../constants/String'



const LoginInput = (
    { placeholder }

) => {
    const [phoneNumber, setphoneNumber] = useState('')
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState('91');

    const handleCountrySelect = (country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
    };
    return (
        <View>
            <Text style={TextStyles.credentialText}>
                {String.LOGIN_CREDENTIAL_LABEL}
            </Text>

            <View style={[InputBoxStyles.inputContainer, InputBoxStyles.loginCredStyle]}>
                <View style={InputBoxStyles.codeContainer}>
                    <CountryPicker
                        countryCode={countryCode}
                        withFilter
                        withFlag
                        withCallingCode
                        onSelect={handleCountrySelect}
                    />
                    <Text style={InputBoxStyles.countryCodeText}>+{callingCode}</Text>
                </View>

                <TextInput

                    placeholder={placeholder}
                    value={phoneNumber}
                    onChangeText={setphoneNumber}
                    keyboardType="phone-pad"
                />
            </View>
        </View>
    )
}

export default LoginInput