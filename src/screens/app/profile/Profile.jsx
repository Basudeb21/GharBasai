import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ProfileBasicInfoCard from './components/ProfileBasicInfoCard'
import ProfileMenuCards from './components/ProfileMenuCards'
import ProfileCardStyles from './components/styles/ProfileCardStyles'
import ProfileTextStyles from './components/styles/ProfileTextStyles'
import RateApp from './components/RateApp'
import WhatsAppUpdateCard from './components/WhatsAppUpdateCard'


const Profile = () => {
    return (
        <View style={{ flex: 1 }}>

            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={ProfileCardStyles.profileMainContainer}>
                    <View style={ProfileCardStyles.profileBackground} />
                </View>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={ProfileTextStyles.textContainer}>
                        <Text style={ProfileTextStyles.colorText}>Blue</Text>
                        <Text style={ProfileTextStyles.membershipText}>A-List Membership</Text>
                    </View>
                    <ProfileBasicInfoCard />
                    <ProfileMenuCards />
                    <RateApp />
                    <WhatsAppUpdateCard />
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold" }}>LOGOUT</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile