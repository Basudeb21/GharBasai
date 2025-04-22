import { View, Text } from 'react-native'
import React from 'react'
import FeaturesStyles from '../../styles/FeaturesStyles'

const FeauresText = () => {
    return (
        <View>
            <Text style={FeaturesStyles.txtOne}>Great <Text style={FeaturesStyles.txtYellow}>sleep</Text>. Refreshing <Text style={FeaturesStyles.txtYellow}>showers</Text>.</Text>
            <Text style={FeaturesStyles.hassleFree}>Hassle free stay, else we pay know more.</Text>

        </View>
    )
}

export default FeauresText