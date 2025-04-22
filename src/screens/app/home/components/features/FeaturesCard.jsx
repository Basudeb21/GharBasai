import { View, Text } from 'react-native'
import React from 'react'
import Features from './Features'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import FeaturesStyles from '../../styles/FeaturesStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeauresText from './FeauresText'






const FeaturesCard = () => {
    return (
        <View style={FeaturesStyles.featuresCard}>
            <FeauresText />

            <View style={FeaturesStyles.featuresRow}>
                <Features
                    IconComponent={FontAwesome}
                    iconName="wifi"
                    label="Free Wifi"
                />
                <Features
                    IconComponent={FontAwesome}
                    iconName="tv"
                    label="Smart TV"
                />
                <Features
                    IconComponent={FontAwesome}
                    iconName="cutlery"
                    label="Dining"
                />
                <Features
                    IconComponent={FontAwesome}
                    iconName="car"
                    label="Free Parking"
                />
                <Features
                    IconComponent={FontAwesome}
                    iconName="coffee"
                    label="Breakfast"
                />
                <Features
                    IconComponent={FontAwesome}
                    iconName="snowflake-o"
                    label="AC Rooms"
                />
                <Features
                    IconComponent={FontAwesome}
                    iconName="bathtub"
                    label="Hot Water"
                />
                <Features
                    IconComponent={MaterialCommunityIcons}
                    iconName="cctv"
                    label="24 X 7 Security"
                />
            </View>
        </View>
    )
}

export default FeaturesCard