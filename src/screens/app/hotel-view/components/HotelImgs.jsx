import { ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import HotelImageSwipeStyles from '../styles/ImageSwipeStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../constants/Colors';

const HotelImgs = () => {
    const images = [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww'
    ];

    const [index, setIndex] = useState(0);

    const goNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    useEffect(() => {
        const interval = setInterval(goNext, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ImageBackground
            source={{ uri: images[index] }}
            style={HotelImageSwipeStyles.background}
            resizeMode="cover"
            onError={(e) => console.log("Image failed to load", e.nativeEvent)}
        >
            <TouchableOpacity style={HotelImageSwipeStyles.leftButton} onPress={goPrev}>
                <Icon name="chevron-left" size={25} color={Colors.WHITE} />
            </TouchableOpacity>

            <TouchableOpacity style={HotelImageSwipeStyles.rightButton} onPress={goNext}>
                <Icon name="chevron-right" size={25} color={Colors.WHITE} />
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default HotelImgs;
