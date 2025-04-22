import { View, ScrollView, Image } from 'react-native';
import React from 'react';
import HotelListStyles from '../styles/HotelListsStyles';

const HorizontalScrollHotelImgs = () => {
    const hotelImages = [
        'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D'
    ];

    return (
        <View style={{ marginVertical: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {hotelImages.map((img) => (
                    <Image
                        key={img}
                        source={{ uri: img }}
                        style={HotelListStyles.hotelimage}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default HorizontalScrollHotelImgs;
