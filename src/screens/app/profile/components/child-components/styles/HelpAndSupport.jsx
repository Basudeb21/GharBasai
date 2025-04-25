import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Head from '../../../../components/Head'
import SupportCard from '../SupportCard'
import HelpAndSupportStyles from '../HelpAndSupportStyles'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import Foundation from 'react-native-vector-icons/dist/Foundation'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6'



import Colors from '../../../../../../constants/Colors'

const HelpAndSupport = () => {
    return (
        <View>
            <Head heading="Help And Support" />
            <View style={HelpAndSupportStyles.screen}>
                <View style={HelpAndSupportStyles.top}>
                    <View style={HelpAndSupportStyles.container}>
                        <SupportCard
                            Content="FAQs"
                            icon={<AntDesign name="questioncircleo" size={16} color={Colors.DISABLED_NAVIGATION_COLOR} />}
                        />
                        <SupportCard
                            Content="Terms & Conditions"
                            icon={<Foundation name="page" size={16} color={Colors.DISABLED_NAVIGATION_COLOR} />}
                        />
                        <SupportCard
                            Content="Privacy Policy"
                            icon={<Entypo name="lock" size={16} color={Colors.DISABLED_NAVIGATION_COLOR} />}
                        />
                        <SupportCard
                            Content="Cancellation Policy"
                            icon={<FontAwesome6 name="book-open" size={16} color={Colors.DISABLED_NAVIGATION_COLOR} />}
                        />
                        <SupportCard
                            Content="Delete your account"
                            icon={<AntDesign name="deleteuser" size={16} color={Colors.DISABLED_NAVIGATION_COLOR} />}

                        />
                    </View>
                    <TouchableOpacity style={HelpAndSupportStyles.button}>
                        <Text style={HelpAndSupportStyles.buttonText}>Call Customer care</Text>
                    </TouchableOpacity>
                </View>
                <View style={HelpAndSupportStyles.bottom}>
                    <Text style={HelpAndSupportStyles.copyright}>9.1.2 (6.1.2) (228)</Text>
                    <Text style={HelpAndSupportStyles.copyright}>© 2025 Casa2 Stays Pvt. Ltd All right reserved</Text>

                </View>
            </View>
        </View>
    )
}

export default HelpAndSupport