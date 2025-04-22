import { View, Text, TextInput } from 'react-native';
import React from 'react';
import SearchInputStyles from '../../styles/SearchInput';
import Colors from '../../../../../constants/Colors';



const BookingInput = ({
    label = "Where to?",
    placeholder = "Search city, area or hotel",
    keyboardType = "default",
    onChangeText = () => { },
    value = "",
    editable = true
}) => {
    return (
        <View style={SearchInputStyles.container}>
            <Text style={SearchInputStyles.label}>{label}</Text>
            <TextInput
                style={SearchInputStyles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.CREDENTIAL_ACTIVE_TEXT}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                editable={editable}
            />
        </View>
    );
};

export default BookingInput;
