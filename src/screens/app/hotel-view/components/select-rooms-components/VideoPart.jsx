import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import VideoPartStyles from './select-rooms-styles/VideoPartStyles'
import VideoPlayer from 'react-native-video-player';
import Images from '../../../../../constants/Images';

const VideoPart = () => {
    return (
        <View style={VideoPartStyles.container}>
            <View style={VideoPartStyles.headContainer}>
                <Text style={VideoPartStyles.maintxt}>Verified guest reviews</Text>
                <Text style={VideoPartStyles.reviewTxt}>Read Reviews</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={VideoPartStyles.scrollContainer}
            >
                <View style={VideoPartStyles.videoWrapper}>
                    <VideoPlayer
                        source={{ uri: Images.TEST_VIDEO }}
                        style={VideoPartStyles.video}
                        controls={true}
                    />
                </View>

                <View style={VideoPartStyles.videoWrapper}>
                    <VideoPlayer
                        source={{ uri: Images.TEST_VIDEO }}
                        style={VideoPartStyles.video}
                        controls={true}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default VideoPart
