import { View, Text } from 'react-native'
import React from 'react'
import ProfileCardStyles from './styles/ProfileCardStyles'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import String from '../../../../constants/String'





const ProfileBasicInfoCard = () => {
    return (
        <View style={ProfileCardStyles.customerCard}>
            <View style={ProfileCardStyles.cardMain}>
                <View style={ProfileCardStyles.profileImage}>
                    <FontAwesome
                        name="user"
                        size={28}
                        color="#fff"
                    />
                </View>
                <View style={ProfileCardStyles.profileData}>
                    <Text style={ProfileCardStyles.userName}>{String.DEFAULT_USER_NAME}</Text>
                    <Text style={ProfileCardStyles.userPhone}>{String.DEFAULT_MOBILE_NUMBER}</Text>
                    <Text style={ProfileCardStyles.memberSince}>{String.DEFAULT_REG_DATE}</Text>
                </View>
            </View>

            <Text style={ProfileCardStyles.profileCompletionText}>{String.DEFAULT_PROGRESS}</Text>

            <View style={ProfileCardStyles.progressBarContainer}>
                <View style={ProfileCardStyles.progressBarFill} />
            </View>

            <Text style={ProfileCardStyles.progressNote}>
                {String.DEFAULT_PROFILE_CARD_MSG}
            </Text>
        </View>
    )
}

export default ProfileBasicInfoCard