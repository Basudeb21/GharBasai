import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import BrandStyles from './BrandStyles';
import Economical from './Economical';
import Express from './Express';
import Prime from './Prime';

const Brands = () => {
    const [activeScreen, setActiveScreen] = useState('Economical');
    const scrollRef = useRef(null);

    const screenWidth = Dimensions.get('window').width;

    const handleScrollTo = (screen) => {
        setActiveScreen(screen);

        let screenIndex = 0;
        if (screen === 'Prime') {
            screenIndex = 1;
        } else if (screen === 'Express') {
            screenIndex = 2;
        }

        scrollRef.current?.scrollTo({
            x: screenIndex * screenWidth,
            animated: true
        });
    };

    const handleScroll = useCallback((event) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollX / screenWidth);

        if (index === 0 && activeScreen !== 'Economical') {
            setActiveScreen('Economical');
        } else if (index === 1 && activeScreen !== 'Prime') {
            setActiveScreen('Prime');
        } else if (index === 2 && activeScreen !== 'Express') {
            setActiveScreen('Express');
        }
    }, [activeScreen, screenWidth]);

    return (
        <View style={BrandStyles.container}>
            <Text style={BrandStyles.headText}>Our Brands</Text>

            <View style={BrandStyles.btnContainer}>
                <TouchableOpacity
                    style={activeScreen === 'Economical' ? BrandStyles.btnActive : BrandStyles.btnDeactive}
                    onPress={() => handleScrollTo('Economical')}
                >
                    <Text style={BrandStyles.btnTxt}>Economical</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={activeScreen === 'Prime' ? BrandStyles.btnActive : BrandStyles.btnDeactive}
                    onPress={() => handleScrollTo('Prime')}
                >
                    <Text style={BrandStyles.btnTxt}>Prime</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={activeScreen === 'Express' ? BrandStyles.btnActive : BrandStyles.btnDeactive}
                    onPress={() => handleScrollTo('Express')}
                >
                    <Text style={BrandStyles.btnTxt}>Express</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                contentInsetAdjustmentBehavior="never"
                contentContainerStyle={styles.scrollContent}
                snapToInterval={screenWidth}
                snapToAlignment="start"
                decelerationRate="fast"
                disableIntervalMomentum={true} // Prevents overscroll issues
            >
                <View style={{ width: screenWidth }}>
                    <Economical desc="Comfortable, economical hotels" />
                </View>
                <View style={{ width: screenWidth }}>
                    <Prime desc="Comfortable, prime hotels" />
                </View>
                <View style={{ width: screenWidth }}>
                    <Express desc="Comfortable, express hotels" />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
});

export default Brands;