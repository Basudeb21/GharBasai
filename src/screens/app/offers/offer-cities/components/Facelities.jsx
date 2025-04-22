import { View, Text } from 'react-native'
import React from 'react'
import HotelListStyles from '../styles/HotelListsStyles'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Colors from '../../../../../constants/Colors'



const Facelities = () => {
    return (
        <View style={HotelListStyles.facilityContainer}>
            <View style={HotelListStyles.allFacelities}>
                <View style={HotelListStyles.sigleFacility}>
                    <AntDesign
                        name="checkcircle"
                        size={10}
                        color={Colors.THEME_TRANSPARENT}
                    />
                    <Text style={HotelListStyles.facelitiesTxt}>Free Cancellation</Text>
                </View>
                <View style={HotelListStyles.sigleFacility}>
                    <AntDesign
                        name="checkcircle"
                        size={10}
                        color={Colors.THEME_TRANSPARENT}
                    />
                    <Text style={HotelListStyles.facelitiesTxt}>Pay @ hotel</Text>
                </View>
                <View style={HotelListStyles.sigleFacility}>
                    <AntDesign
                        name="checkcircle"
                        size={10}
                        color={Colors.THEME_TRANSPARENT}
                    />
                    <Text style={HotelListStyles.facelitiesTxt}>Couple friendly</Text>

                </View>
            </View>

            <View style={HotelListStyles.rentContainer}>
                <Text style={HotelListStyles.rent}>₹3,245</Text>
                <Text style={HotelListStyles.gstRent}>+₹390 GST</Text>

            </View>

        </View>

    )
}

export default Facelities