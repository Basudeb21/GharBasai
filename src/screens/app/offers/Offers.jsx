import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import OfferedCard from './OfferedCard'
import OfferStyles from './styles/OfferStyles'
import NavigationString from '../../../constants/NavigationString';


const Offers = () => {
    const navigation = useNavigation();

    return (
        <View>
            <ScrollView contentContainerStyle={OfferStyles.scrollContainer}>
                <Text style={OfferStyles.dealTxt}>Best deals for you</Text>
                {Array.from({ length: 8 }).map((_, index) => (
                    <View style={OfferStyles.cardParent}>
                        <OfferedCard
                            onPress={() =>
                                navigation.navigate(NavigationString.OFFER_STACK, {
                                    screen: NavigationString.OFFERED_CITIES,
                                })
                            }
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Offers