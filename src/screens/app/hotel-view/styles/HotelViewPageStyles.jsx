import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../constants/Colors";

const HotelViewPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    headContainer: {
        flex: 1,
        backgroundColor: Colors.THEME,

    },
    bodyContainer: {
        flex: 8,
        backgroundColor: Colors.WHITE
    },
    bootomBarContainer: {
        flex: 1,
        backgroundColor: Colors.THEME
    },
    bgc: {
        backgroundColor: Colors.DEACTIVE,
        marginTop: verticalScale(5)
    },
    nearbyHead: {
        marginStart: moderateScale(20),
        fontSize: scale(16),
        fontWeight: "600",
        marginBottom: verticalScale(10)

    }
});

export default HotelViewPageStyles;