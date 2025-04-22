import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OfferedCard from '../../offers/OfferedCard'
import BestDealsStyles from '../styles/BestDealsStyles'


const BestDeals = () => {
    return (
        <View style={BestDealsStyles.container}>
            <Text style={BestDealsStyles.dealsText}>Best deals for you</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <OfferedCard />
                ))}
            </ScrollView>

        </View>
    )
}

export default BestDeals