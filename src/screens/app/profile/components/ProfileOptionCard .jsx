import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import ProfileCardStyles from './styles/ProfileCardStyles';

const ProfileOptionCard = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity style={ProfileCardStyles.cardContainer} onPress={onPress} activeOpacity={0.7}>
            <View style={ProfileCardStyles.iconWrapper}>
                {icon}
            </View>
            <Text style={ProfileCardStyles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ProfileOptionCard;