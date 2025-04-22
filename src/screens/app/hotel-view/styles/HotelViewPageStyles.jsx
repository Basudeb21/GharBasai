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
        backgroundColor: Colors.THEME
    },
    bodyContainer: {
        flex: 8,
        backgroundColor: Colors.WHITE
    },
    bootomBarContainer: {
        flex: 1,
        backgroundColor: Colors.THEME
    }
});

export default HotelViewPageStyles;