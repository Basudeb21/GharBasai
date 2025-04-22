import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Head from '../../components/Head'
import Banner from '../../components/Banner'
import OfferedCitiesStyles from './styles/OfferedCitiesStyles'
import DestinetionCard from './components/DestinetionCard'
import { scale } from 'react-native-size-matters'

const OfferedCities = () => {
    return (
        <View>
            <Head heading="GharBasai" />
            <ScrollView contentContainerStyle={{ paddingBottom: scale(60) }}>
                <Banner />
                <Text style={OfferedCitiesStyles.text}>Fabulous Offer</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {[...Array(10)].map((_, index) => (
                        <DestinetionCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default OfferedCities