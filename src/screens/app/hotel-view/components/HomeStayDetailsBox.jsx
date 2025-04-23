import { View, Text } from 'react-native'
import React from 'react'
import HomeStayDetailsBoxStyles from '../styles/HomeStayDetailsBoxStyles'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../constants/Colors'


const HomeStayDetailsBox = () => {
    return (
        <View style={HomeStayDetailsBoxStyles.container}>
            <Text style={HomeStayDetailsBoxStyles.mainTxt}>GharBasai Spring inn</Text>
            <View style={HomeStayDetailsBoxStyles.detailsContainer}>
                <View style={HomeStayDetailsBoxStyles.singleDetails}>
                    <Entypo
                        name="location-pin"
                        size={12}
                        color={Colors.DISABLED_NAVIGATION_COLOR}
                    />
                    <Text style={HomeStayDetailsBoxStyles.detailsOne}>#60, Akansha Arcade, Trikamdas Road, Next to Cinestar Cinema, kandivali (west)</Text>

                </View>
                <View style={HomeStayDetailsBoxStyles.singleDetails}>
                    <Entypo
                        name="compass"
                        size={12}
                        color={Colors.DISABLED_NAVIGATION_COLOR}
                    />
                    <Text style={HomeStayDetailsBoxStyles.detailsOne}>0.3 km from kandivali Station</Text>
                    <Entypo
                        name="info-with-circle"
                        size={12}
                        color={Colors.DISABLED_NAVIGATION_COLOR}
                    />
                </View>
                <View style={HomeStayDetailsBoxStyles.facelitiesContainer}>
                    <View style={HomeStayDetailsBoxStyles.singleDetails}>
                        <AntDesign
                            name="check"
                            size={12}
                            color={Colors.THEME}
                        />
                        <Text style={HomeStayDetailsBoxStyles.facelities}>Pay @ Hotel</Text>
                    </View>
                    <View style={HomeStayDetailsBoxStyles.singleDetails}>
                        <AntDesign
                            name="check"
                            size={12}
                            color={Colors.THEME}
                        />
                        <Text style={HomeStayDetailsBoxStyles.facelities}>Couple Friendly</Text>

                    </View>
                    <View style={HomeStayDetailsBoxStyles.singleDetails}>
                        <AntDesign
                            name="check"
                            size={12}
                            color={Colors.THEME}
                        />
                        <Text style={HomeStayDetailsBoxStyles.facelities}>Free Wifi</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default HomeStayDetailsBox