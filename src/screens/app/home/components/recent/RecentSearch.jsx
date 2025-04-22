import { View, Text } from 'react-native'
import React from 'react'
import ReccentSearchCard from './ReccentSearchCard'
import RecentSearchStyle from '../../styles/RecentSearchStyles'

const RecentSearch = () => {
    return (
        <View style={RecentSearchStyle.container}>
            <Text style={RecentSearchStyle.mainText}>Your recent searches</Text>
            <ReccentSearchCard />
        </View>
    )
}

export default RecentSearch