import { View, Text } from 'react-native'
import React from 'react'
import FeaturesStyles from '../../styles/FeaturesStyles'
import Colors from '../../../../../constants/Colors'



const Features = ({ IconComponent, iconName, label }) => {
    return (
        <View style={FeaturesStyles.container}>
            <View style={FeaturesStyles.logoContainer}>
                <IconComponent name={iconName} size={18}
                    color={Colors.WHITE} />
            </View>
            <Text style={FeaturesStyles.featuresTxt}>{label}</Text>
        </View>
    )
}

export default Features