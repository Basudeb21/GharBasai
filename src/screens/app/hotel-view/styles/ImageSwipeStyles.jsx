import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const HotelImageSwipeStyles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        width: "100%",
        height: scale(200)

    },
    leftButton: {
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: scale(100),
        padding: 5,
    },
    rightButton: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: [{ translateY: -20 }],
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: scale(100),
        padding: 5,
    },

});

export default HotelImageSwipeStyles;
