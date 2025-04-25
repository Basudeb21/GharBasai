import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import UserFormStyles from '../styles/UserFormStyles';
import Head from '../../../components/Head';
import Colors from '../../../../../constants/Colors';

const UserForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        dob: '',
        gender: '',
        residence: '',
        frequentCity: '',
        travelPurpose: '',
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <PaperProvider>
            <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
                <Head heading="Tell us more about you" />
                <ScrollView contentContainerStyle={UserFormStyles.container}>

                    <TextInput
                        label="Full name"
                        value={formData.fullName}
                        onChangeText={(text) => handleChange('fullName', text)}
                        mode="outlined"
                        style={UserFormStyles.input}
                        theme={{ colors: { primary: Colors.THEME } }}
                    />

                    <TextInput
                        label="Email"
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                        mode="outlined"
                        keyboardType="email-address"
                        style={UserFormStyles.input}
                        theme={{ colors: { primary: Colors.THEME } }}
                    />

                    <TextInput
                        label="Date of Birth"
                        value={formData.dob}
                        onChangeText={(text) => handleChange('dob', text)}
                        mode="outlined"
                        placeholder="YYYY-MM-DD"
                        style={UserFormStyles.input}
                        theme={{ colors: { primary: Colors.THEME } }}
                    />
                    <Text style={UserFormStyles.subtext}>Let us plan a surprise gift for your birthday</Text>

                    <TextInput
                        label="Gender"
                        value={formData.gender}
                        onChangeText={(text) => handleChange('gender', text)}
                        mode="outlined"
                        style={UserFormStyles.input}
                        theme={{ colors: { primary: Colors.THEME } }}
                    />

                    <TextInput
                        label="City of residence"
                        value={formData.residence}
                        onChangeText={(text) => handleChange('residence', text)}
                        mode="outlined"
                        style={UserFormStyles.input}
                        theme={{ colors: { primary: Colors.THEME } }}
                    />

                    <TextInput
                        label="Frequently traveled city"
                        value={formData.frequentCity}
                        onChangeText={(text) => handleChange('frequentCity', text)}
                        mode="outlined"
                        style={UserFormStyles.input}
                        theme={{ colors: { primary: Colors.THEME } }}
                    />

                    <TextInput
                        label="Travel purpose"
                        value={formData.travelPurpose}
                        onChangeText={(text) => handleChange('travelPurpose', text)}
                        mode="outlined"
                        style={UserFormStyles.input}
                        theme={{ colors: { primary: Colors.THEME } }}
                    />

                    <TouchableOpacity
                        onPress={() => console.log('Saved Data:', formData)}
                        style={UserFormStyles.customButton}
                    >
                        <Text style={UserFormStyles.customButtonText}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </PaperProvider>
    );
};


export default UserForm;
