import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const PriceCardStyles = StyleSheet.create({
    container: {
        marginTop: verticalScale(20),
        paddingHorizontal: moderateScale(25),
        paddingVertical: verticalScale(13),
        backgroundColor: Colors.WHITE,
        borderRadius: scale(12),
        elevation: 2,
        marginHorizontal: moderateScale(20),
        marginBottom: verticalScale(10),
        flex: 1,
        flexDirection: "row"
    },
    left: {
        width: "50%"
    },
    right: {
        width: "50%"
    },
    headTxt: {
        fontSize: scale(20),
        fontWeight: "600"
    },
    facilityTxt: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        marginStart: moderateScale(10),
        marginTop: verticalScale(10)
    },
    price: {
        fontSize: scale(20),
        fontWeight: "600"
    },
    gst: {
        fontSize: scale(10),
        color: Colors.DISABLED_NAVIGATION_COLOR
    },
    dayCount: {
        fontSize: scale(10),
        color: Colors.DISABLED_NAVIGATION_COLOR
    },
});

export default PriceCardStyles;