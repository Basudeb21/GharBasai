import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from "../../../../../../constants/Colors";

const RatingAndReviewsStyles = StyleSheet.create({
    container: {

    },
    headtxt: {
        fontWeight: "600",
        marginStart: moderateScale(20)
    },
    subContainer: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginVertical: verticalScale(10),
        paddingHorizontal: moderateScale(20),
        borderRadius: scale(12),
        elevation: scale(2),
        paddingVertical: verticalScale(10)
    },
    reviewContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    left: {

    },
    ratingCount: {
        backgroundColor: Colors.THEME,
        alignSelf: "flex-start",
        padding: scale(12),
        color: Colors.WHITE,
        fontWeight: "600",
        borderRadius: scale(8)
    },
    ratingTxt: {
        fontSize: scale(16),
        marginTop: verticalScale(10),
        fontWeight: "500",
        marginBottom: verticalScale(18)
    },
    blueTxt: {
        marginStart: moderateScale(6),
        fontSize: scale(10),
        color: Colors.BLUE,
        fontWeight: "600"

    },
    blueItemContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },

    right: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "20%"
    },
    rightContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    rateNumber: {
        fontWeight: "700",
        marginEnd: moderateScale(5)
    },
    outerLine: {
        height: scale(8),
        width: "80%",
        backgroundColor: Colors.DISABLED_NAVIGATION_COLOR,
        borderRadius: scale(100),
        marginStart: moderateScale(5)

    },
    rateBox: {

    },
    innerLine: {
        height: scale(8),
        width: "60%",
        backgroundColor: Colors.THEME,
        borderRadius: scale(100),
    },
    bottomContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: verticalScale(10)
    },
    bottomContentContainer: {
        flexDirection: "row"
    },

});

export default RatingAndReviewsStyles;