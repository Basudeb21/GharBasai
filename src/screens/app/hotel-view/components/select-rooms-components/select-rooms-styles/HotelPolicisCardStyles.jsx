import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const HotelPoliciesCardStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginVertical: verticalScale(10),
        paddingVertical: verticalScale(12),
        paddingHorizontal: moderateScale(15),
        borderRadius: scale(8),
        elevation: scale(2)
    },
    headTxt: {
        fontSize: scale(18),
        fontWeight: "600"
    },
    checkInCheckOutContainer: {
        flex: 1,
        flexDirection: "row"
    },
    checkInContainer: {
        flex: 1,
        marginTop: verticalScale(20),
    },
    checkInCheckOutTxt: {
        color: Colors.DISABLED_NAVIGATION_COLOR,
        fontSize: scale(12)
    },
    checkOutContainer: {
        flex: 1,
        marginTop: verticalScale(8),
    },
    checkInCheckOutTime: {
        fontWeight: "700",
        fontSize: scale(12)
    },
    hr: {
        width: "100%",
        backgroundColor: Colors.DEACTIVE,
        height: verticalScale(2),
        marginVertical: verticalScale(12)
    },
    viewMoreContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    viewMoreTxt: {
        color: Colors.THEME,
        fontWeight: "500"
    },

});

export default HotelPoliciesCardStyles;