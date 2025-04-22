import { View, Text } from 'react-native'
import React from 'react'
import TextStyles from './styles/TextStyles'
import String from '../../../../constants/String'


const TermsAndConditions = () => {
    return (
        <View >
            <Text style={TextStyles.outerterms}>{String.TERMS_AND_CONDITION_ONE}<Text style={TextStyles.innerTerms}>{String.BLUE_TERMS_ONE}</Text> {String.TERMS_AND_CONDITION_TWO} <Text style={TextStyles.innerTerms}>{String.BLUE_TERMS_TWO}</Text> </Text>
        </View>
    )
}

export default TermsAndConditions