import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import DestinationStyles from '../../styles/DestinationsStyles'
import DestinationImgs from './DestinationImgs'

const Destination = () => {
    return (
        <View style={DestinationStyles.container}>
            <Text style={DestinationStyles.mainText}>Populer destinations</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={DestinationStyles.destinationImageScroll}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <DestinationImgs />
                ))}
            </ScrollView>

        </View>
    )
}

export default Destination