import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";
const VideoPartStyles = StyleSheet.create({
    container: {},
    headContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    maintxt: {
        color: Colors.THEME,
        fontSize: scale(18),
        fontWeight: "600"
    },
    reviewTxt: {
        color: Colors.THEME_TRANSPARENT,
        fontSize: scale(12),
    },
    videoWrapper: {
        height: 150,
        width: 250,
        borderRadius: scale(12),
        overflow: 'hidden',
        backgroundColor: 'black',
        marginRight: scale(12),
    },

    video: {
        height: '100%',
        width: '100%',
    },

    scrollContainer: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(8),
    }
});

export default VideoPartStyles;