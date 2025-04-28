import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BookingSearchArea from '../bookings/BookingSearchArea';
import TourPackages from '../bookings/TourPackages';
import TabSectionStyles from './TabSectionStyle';


const TabSection = () => {
    const [activeTab, setActiveTab] = useState('Hotels');
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    style={TabSectionStyles.button}
                    onPress={() => setActiveTab('Hotels')}
                >
                    <Text style={TabSectionStyles.buttonFont}>
                        Hotels Booking
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={TabSectionStyles.button}
                    onPress={() => setActiveTab('Tours')}
                >
                    <Text style={TabSectionStyles.buttonFont}>
                        Tour Booking
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                {activeTab === 'Hotels' ? <BookingSearchArea /> : <TourPackages />}
            </View>
        </View>
    );
};

export default TabSection;
