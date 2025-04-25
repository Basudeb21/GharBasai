import { View, Text } from 'react-native'
import React from 'react'
import TermsAndConditionsStyles from './select-rooms-styles/TermsAndConditionsStyles'

const TermsAndConditions = () => {
    return (
        <View style={TermsAndConditionsStyles.container}>
            <Text style={TermsAndConditionsStyles.text}>By proceeding, you agree to all <Text style={TermsAndConditionsStyles.blueTxt}>Terms & Conditions, Privacy Policy</Text> & <Text style={TermsAndConditionsStyles.blueTxt}>Cancellation Policy</Text> </Text>

        </View>
    )
}

export default TermsAndConditions