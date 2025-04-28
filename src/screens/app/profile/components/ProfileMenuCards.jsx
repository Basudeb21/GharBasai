import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ProfileOptionCard from './ProfileOptionCard ';
import ProfileCardStyles from './styles/ProfileCardStyles';
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../../../constants/NavigationString';



const ProfileMenuCards = () => {
    const navigation = useNavigation();

    const options = [
        { icon: <FontAwesome name="user" size={24} color="#2b2b2b" />, label: "Personal Info" },
        { icon: <MaterialCommunityIcons name="account-group-outline" size={24} color="#2b2b2b" />, label: "Travellers' List" },
        { icon: <MaterialIcons name="receipt" size={24} color="#2b2b2b" />, label: "GSTIN" },
        { icon: <Feather name="briefcase" size={24} color="#2b2b2b" />, label: "Trips" },
        { icon: <Feather name="user-plus" size={24} color="#2b2b2b" />, label: "Refer & Earn" },
        { icon: <Feather name="help-circle" size={24} color="#2b2b2b" />, label: "Help & Support" },
        { icon: <MaterialIcons name="favorite" size={24} color="#2b2b2b" />, label: "Favorite" },
        { icon: <Feather name="credit-card" size={24} color="#2b2b2b" />, label: "Payment" },
        { icon: <AntDesign name="wechat" size={24} color="#2b2b2b" />, label: "Chat" },



    ];
    return (
        <View>
            <View style={ProfileCardStyles.menuCard}>
                {options.map((item, index) => (
                    <ProfileOptionCard
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        onPress={() => {
                            switch (item.label) {
                                case "Personal Info":
                                    navigation.navigate(NavigationString.PROFILE_STACK, {
                                        screen: NavigationString.USER_FORM,
                                    });

                                    break;
                                case "Help & Support":
                                    navigation.navigate(NavigationString.PROFILE_STACK, {
                                        screen: NavigationString.HELP_AND_SUPPORT,
                                    });
                                    break;


                            }

                        }
                        }
                    />
                ))}
            </View>
        </View>
    )
}

export default ProfileMenuCards